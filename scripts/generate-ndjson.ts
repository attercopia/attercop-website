import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { basename } from 'path'

const threadsDir = path.join(process.cwd(), 'src/content/threads')
const ndjsonPath = path.join(process.cwd(), 'threads.ndjson')

// Simple Markdown to Portable Text converter (same as before)
function markdownToBlocks(markdown: string) {
    const blocks = []
    const lines = markdown.split('\n')

    let currentBlock: any = null

    for (const line of lines) {
        if (line.trim() === '') {
            if (currentBlock) {
                blocks.push(currentBlock)
                currentBlock = null
            }
            continue
        }

        if (line.startsWith('# ')) {
            if (currentBlock) blocks.push(currentBlock)
            blocks.push({
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: line.replace('# ', '') }]
            })
            currentBlock = null
        } else if (line.startsWith('## ')) {
            if (currentBlock) blocks.push(currentBlock)
            blocks.push({
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: line.replace('## ', '') }]
            })
            currentBlock = null
        } else if (line.startsWith('### ')) {
            if (currentBlock) blocks.push(currentBlock)
            blocks.push({
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: line.replace('### ', '') }]
            })
            currentBlock = null
        } else if (line.startsWith('- ')) {
            if (currentBlock && currentBlock.listItem) {
                // Continue list
            } else {
                if (currentBlock) blocks.push(currentBlock)
            }
            blocks.push({
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: line.replace('- ', '') }]
            })
            currentBlock = null
        } else {
            if (!currentBlock) {
                currentBlock = {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: line }]
                }
            } else {
                currentBlock.children[0].text += ' ' + line
            }
        }
    }

    if (currentBlock) {
        blocks.push(currentBlock)
    }

    return blocks
}

async function generateNdjson() {
    console.log(`Generating NDJSON from ${threadsDir}`)

    const files = fs.readdirSync(threadsDir).filter(f => f.endsWith('.mdx'))
    const stream = fs.createWriteStream(ndjsonPath)

    for (const file of files) {
        console.log(`Processing ${file}...`)
        const filePath = path.join(threadsDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        const doc: any = {
            _type: 'thread',
            title: data.title,
            slug: { _type: 'slug', current: data.slug },
            description: data.description,
            author: data.author,
            publishedAt: new Date(data.publishedAt).toISOString(),
            tags: data.tags,
            content: markdownToBlocks(content)
        }

        // Handle image reference for import
        // Sanity dataset import supports file paths if we use the --replace flag or just structure it right?
        // Actually, for images, it's tricky with NDJSON unless we use the tarball format.
        // Let's skip images for now and focus on content. 
        // Or we can try to use the special _sanityAsset syntax if we were uploading a tarball.

        // We'll skip images in the NDJSON for simplicity and reliability of the content migration.
        // Users can drag-and-drop images in the Studio much easier than re-typing content.

        stream.write(JSON.stringify(doc) + '\n')
    }

    stream.end()
    console.log(`NDJSON written to ${ndjsonPath}`)
}

generateNdjson().catch(console.error)
