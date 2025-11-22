import type { Metadata } from "next"
import { getAllThreads } from "@/lib/threads"
import { ThreadCard } from "@/components/threads/ThreadCard"
import { NewsletterSignup } from "@/components/threads/NewsletterSignup"

export const metadata: Metadata = {
    title: "AI Threads | Attercop",
    description: "Practical insights and real-world strategies to help you unlock AI's full potential. Monthly newsletter covering AI strategy, implementation, and innovation.",
}

export default async function ThreadsPage() {
    const threads = await getAllThreads()

    return (
        <div className="min-h-screen bg-pearl">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-midnight to-deep-teal text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            AI Threads
                        </h1>
                        <p className="text-xl md:text-2xl text-pearl/90 mb-8">
                            Explore our latest thinking on AI agents, knowledge graphs, and the future of software.
                        </p>
                        <p className="text-lg text-pearl/80 max-w-2xl mx-auto">Practical insights and real‑world strategies to help you unlock AI&#39;s full potential.</p>
                        <p className="text-lg text-pearl/80 max-w-2xl mx-auto">
                            Written by our team of expert data scientists and AI specialists.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {threads.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-midnight/60 text-lg">
                                    No articles published yet. Check back soon!
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {threads.map((thread) => (
                                    <ThreadCard key={thread.slug} thread={thread} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <NewsletterSignup />
                    </div>
                </div>
            </section>
        </div>
    )
}
