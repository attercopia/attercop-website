"use client"

import { ArrowRight, Brain, Bot, TrendingUp } from "lucide-react"
import Link from "next/link"

const cards = [
    {
        title: "Knowledge Engineering",
        headline: "Structure. Connect. Intelligence.",
        description: "Transform information chaos into competitive advantage. Multi-modal RAG & Knowledge Graphs.",
        stat: "80% faster insights",
        cta: "Explore Knowledge Systems",
        link: "/services/knowledge-engineering",
        icon: Brain,
        color: "bg-deep-teal",
        gradient: "from-deep-teal to-sea-green",
        image: "/images/knowledge-engineering.png"
    },
    {
        title: "Agentic AI",
        headline: "Agents That Act 24/7",
        description: "Deploy AI that makes decisions, not just recommendations. Real automation.",
        stat: "40% efficiency gain",
        cta: "See Agents Work",
        link: "/services/agents",
        icon: Bot,
        color: "bg-midnight",
        gradient: "from-midnight to-deep-teal",
        image: "/images/agentic-ai.png"
    },
    {
        title: "PE DNA",
        headline: "100-Day Transformations",
        description: "Built for PE timelines, designed for exits. We speak IRR and multiple expansion.",
        stat: "3x average ROI",
        cta: "View PE Solutions",
        link: "/pe-firms",
        icon: TrendingUp,
        color: "bg-ocean",
        gradient: "from-ocean to-sea-green",
        image: "/images/pe-dna.png"
    }
]

export function ValueProp() {
    return (
        <section className="py-24 bg-pearl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${card.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80 transition-all duration-500`} />

                            {/* Content */}
                            <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                                <div>
                                    <div className="mb-6 p-3 bg-white/10 w-fit rounded-lg backdrop-blur-sm">
                                        <card.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-display text-3xl font-bold mb-2">{card.headline}</h3>
                                    <p className="text-white/60 font-medium uppercase tracking-wider text-sm">{card.title}</p>
                                </div>

                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-lg text-white/90 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {card.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/20 pt-6">
                                        <div>
                                            <p className="text-xs text-white/60 uppercase tracking-wider">Impact</p>
                                            <p className="font-display text-2xl font-bold">{card.stat}</p>
                                        </div>
                                        <Link href={card.link} className="flex items-center gap-2 text-sm font-semibold hover:text-amber transition-colors">
                                            {card.cta} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
