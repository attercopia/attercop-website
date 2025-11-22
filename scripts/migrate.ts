import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { basename } from 'path'

// Configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'e35bmsk6'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const threadsDir = path.join(process.cwd(), 'src/content/threads')

// Simple Markdown to Portable Text converter (basic paragraphs and headings)
interface Block {
    _type: string
    style?: string
    listItem?: string
    children: Array<{ _type: string; text: string }>
}

function markdownToBlocks(markdown: string) {
    const blocks: Block[] = []
    const lines = markdown.split('\n')

    let currentBlock: Block | null = null

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
            // Basic list handling - treating as paragraphs for now to avoid complexity
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

async function migrate() {
    // Client is injected by `sanity exec` but we can also create one
    // We'll rely on the environment variables provided by sanity exec
    const client = createClient({
        projectId,
        dataset,
        apiVersion: '2024-01-01',
        useCdn: false,
        token: process.env.SANITY_SESSION_TOKEN // This might be needed if not injected
    })

    console.log(`Migrating threads from ${threadsDir} to Sanity project ${projectId}`)

    const files = fs.readdirSync(threadsDir).filter(f => f.endsWith('.mdx'))

    for (const file of files) {
        console.log(`Processing ${file}...`)
        const filePath = path.join(threadsDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        // Upload Hero Image
        let heroImageAssetId = null
        if (data.heroImage) {
            const imagePath = path.join(process.cwd(), 'public', data.heroImage)
            if (fs.existsSync(imagePath)) {
                console.log(`  Uploading image: ${data.heroImage}`)
                try {
                    const imageBuffer = fs.readFileSync(imagePath)
                    const asset = await client.assets.upload('image', imageBuffer, {
                        filename: basename(data.heroImage)
                    })
                    heroImageAssetId = asset._id
                } catch (err) {
                    console.error(`  Failed to upload image: ${err instanceof Error ? err.message : String(err)}`)
                }
            } else {
                console.warn(`  Image not found: ${imagePath}`)
            }
        }

        // Create Document
        const doc = {
            _type: 'thread',
            title: data.title,
            slug: { _type: 'slug', current: data.slug },
            description: data.description,
            author: data.author,
            publishedAt: new Date(data.publishedAt).toISOString(),
            tags: data.tags,
            heroImage: heroImageAssetId ? {
                _type: 'image',
                asset: { _type: 'reference', _ref: heroImageAssetId }
            } : undefined,
            content: markdownToBlocks(content)
        }

        try {
            // Check if document exists
            const existing = await client.fetch(`*[_type == "thread" && slug.current == $slug][0]`, { slug: data.slug })

            if (existing) {
                console.log(`  Document already exists, patching...`)
                await client.patch(existing._id).set(doc).commit()
            } else {
                console.log(`  Creating new document...`)
                await client.create(doc)
            }
            console.log(`  ✅ Successfully migrated ${data.title}`)
        } catch (err) {
            console.error(`  ❌ Failed to migrate ${data.title}: ${err instanceof Error ? err.message : String(err)}`)
        }
    }
}

migrate().catch(console.error)
