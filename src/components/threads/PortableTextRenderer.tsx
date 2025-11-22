import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'
import { urlFor } from '@/lib/threads'
import Image from 'next/image'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Article image'}
                        fill
                        className="object-cover"
                    />
                    {value.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                            {value.caption}
                        </div>
                    )}
                </div>
            )
        },
        code: ({ value }) => {
            return (
                <div className="my-8 rounded-lg overflow-hidden">
                    <div className="bg-gray-800 text-gray-300 px-4 py-2 text-xs flex justify-between items-center">
                        <span>{value.filename || value.language}</span>
                    </div>
                    <SyntaxHighlighter
                        language={value.language || 'text'}
                        style={atomDark}
                        customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
                    >
                        {value.code}
                    </SyntaxHighlighter>
                </div>
            )
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="font-display text-3xl font-bold text-midnight mt-12 mb-6">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="font-display text-2xl font-bold text-midnight mt-8 mb-4">
                {children}
            </h3>
        ),
        normal: ({ children }) => (
            <p className="text-midnight/80 text-lg leading-relaxed mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-sea-green pl-6 italic text-xl text-midnight/70 my-8">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 text-midnight/80">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-midnight/80">
                {children}
            </ol>
        ),
    },
    marks: {
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <Link
                    href={value?.href || '#'}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="text-deep-teal hover:text-ocean underline transition-colors"
                >
                    {children}
                </Link>
            )
        },
        strong: ({ children }) => (
            <strong className="font-bold text-midnight">{children}</strong>
        ),
    },
}

export function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
    return <PortableText value={value} components={components} />
}
