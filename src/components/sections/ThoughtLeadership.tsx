"use client"

import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const articles = [
    {
        category: "Strategy",
        title: "The New PE Playbook: AI-Driven Value Creation",
        preview: "How leading firms are using agentic AI to identify operational efficiencies pre-deal.",
        readTime: "5 min read",
        link: "/insights/pe-playbook"
    },
    {
        category: "Technology",
        title: "Beyond Chatbots: Implementing RAG for Enterprise",
        preview: "Why simple LLM wrappers fail and how knowledge graphs provide the missing context.",
        readTime: "7 min read",
        link: "/insights/rag-enterprise"
    },
    {
        category: "Case Study",
        title: "Due Diligence at Speed: A Tech-Enabled Approach",
        preview: "Reducing technical due diligence time by 60% using automated code analysis agents.",
        readTime: "4 min read",
        link: "/insights/due-diligence-speed"
    }
]

export function ThoughtLeadership() {
    return (
        <section className="py-24 bg-pearl">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                            Insights
                        </h2>
                        <p className="text-midnight/60 max-w-2xl text-lg">
                            Thinking at the intersection of Private Equity and Artificial Intelligence.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex" asChild>
                        <Link href="/threads">View All Articles</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-bold tracking-wider uppercase text-deep-teal bg-deep-teal/10 px-3 py-1 rounded-full">
                                    {article.category}
                                </span>
                                <div className="flex items-center text-midnight/40 text-xs">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {article.readTime}
                                </div>
                            </div>

                            <h3 className="font-display text-xl font-bold text-midnight mb-3 group-hover:text-sea-green transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-midnight/60 mb-6 text-sm leading-relaxed">
                                {article.preview}
                            </p>

                            <div className="flex items-center text-deep-teal font-semibold text-sm group-hover:gap-2 transition-all">
                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/threads">View All Articles</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
