const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const threadsDir = path.join(process.cwd(), 'src/content/threads');
const ndjsonPath = path.join(process.cwd(), 'threads.ndjson');

// Simple Markdown to Portable Text converter
function markdownToBlocks(markdown) {
    const blocks = [];
    const lines = markdown.split('\n');

    let currentBlock = null;

    for (const line of lines) {
        if (line.trim() === '') {
            if (currentBlock) {
                blocks.push(currentBlock);
                currentBlock = null;
            }
            continue;
        }

        if (line.startsWith('# ')) {
            if (currentBlock) blocks.push(currentBlock);
            blocks.push({
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: line.replace('# ', '') }]
            });
            currentBlock = null;
        } else if (line.startsWith('## ')) {
            if (currentBlock) blocks.push(currentBlock);
            blocks.push({
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: line.replace('## ', '') }]
            });
            currentBlock = null;
        } else if (line.startsWith('### ')) {
            if (currentBlock) blocks.push(currentBlock);
            blocks.push({
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: line.replace('### ', '') }]
            });
            currentBlock = null;
        } else if (line.startsWith('- ')) {
            if (currentBlock && currentBlock.listItem) {
                // Continue list
            } else {
                if (currentBlock) blocks.push(currentBlock);
            }
            blocks.push({
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: line.replace('- ', '') }]
            });
            currentBlock = null;
        } else {
            if (!currentBlock) {
                currentBlock = {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: line }]
                };
            } else {
                currentBlock.children[0].text += ' ' + line;
            }
        }
    }

    if (currentBlock) {
        blocks.push(currentBlock);
    }

    return blocks;
}

async function generateNdjson() {
    console.log(`Generating NDJSON from ${threadsDir}`);

    if (!fs.existsSync(threadsDir)) {
        console.error(`Directory not found: ${threadsDir}`);
        return;
    }

    const files = fs.readdirSync(threadsDir).filter(f => f.endsWith('.mdx'));
    const stream = fs.createWriteStream(ndjsonPath);

    for (const file of files) {
        console.log(`Processing ${file}...`);
        const filePath = path.join(threadsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        const doc = {
            _type: 'thread',
            title: data.title,
            slug: { _type: 'slug', current: data.slug },
            description: data.description,
            author: data.author,
            publishedAt: new Date(data.publishedAt).toISOString(),
            tags: data.tags,
            content: markdownToBlocks(content)
        };

        stream.write(JSON.stringify(doc) + '\n');
    }

    stream.end();
    console.log(`NDJSON written to ${ndjsonPath}`);
}

generateNdjson().catch(console.error);
