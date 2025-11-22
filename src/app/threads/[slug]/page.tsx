import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getAllThreads, getThreadBySlug, getRelatedThreads } from "@/lib/threads"
import { ThreadCard } from "@/components/threads/ThreadCard"
import { NewsletterSignup } from "@/components/threads/NewsletterSignup"
import { PortableTextRenderer } from "@/components/threads/PortableTextRenderer"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
    const threads = await getAllThreads()
    return threads.map((thread) => ({
        slug: thread.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const thread = await getThreadBySlug(slug)

    if (!thread) {
        return {
            title: "Article Not Found | Attercop",
        }
    }

    return {
        title: `${thread.title} | AI Threads`,
        description: thread.description,
        openGraph: {
            title: thread.title,
            description: thread.description,
            images: [thread.heroImage],
        },
    }
}

export default async function ThreadArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const thread = await getThreadBySlug(slug)

    if (!thread) {
        notFound()
    }

    const relatedThreads = await getRelatedThreads(thread.slug, 3)
    const formattedDate = new Date(thread.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="min-h-screen bg-pearl">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-8">
                <Link
                    href="/threads"
                    className="inline-flex items-center text-deep-teal hover:text-ocean transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to AI Threads
                </Link>
            </div>

            {/* Article Header */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Tags */}
                        {thread.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {thread.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm font-semibold text-deep-teal bg-sea-green/10 px-4 py-2 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            {thread.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-midnight/60 mb-8 pb-8 border-b border-midnight/10">
                            <span className="font-medium">{thread.author}</span>
                            <span>•</span>
                            <time dateTime={thread.publishedAt}>{formattedDate}</time>
                        </div>

                        {/* Hero Image */}
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
                            <Image
                                src={thread.heroImage}
                                alt={thread.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <PortableTextRenderer value={thread.content} />
                        </div>
                    </div>
                </div>
            </article>

            {/* Newsletter Signup */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <NewsletterSignup />
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedThreads.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-8">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedThreads.map((relatedThread) => (
                                    <ThreadCard key={relatedThread.slug} thread={relatedThread} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
