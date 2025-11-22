"use client"

import { ArrowRight, Database, Search, Share2, Shield, Zap, Cpu } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "Knowledge Graph Construction",
        description: "Turn unstructured data into structured intelligence.",
        icon: Share2,
        size: "large",
        color: "bg-deep-teal",
        gradient: "from-deep-teal/80 to-sea-green/80",
        image: "/images/service-knowledge-graph.png",
        link: "/services/knowledge-engineering"
    },
    {
        title: "RAG Systems",
        description: "Retrieval Augmented Generation that actually works.",
        icon: Database,
        size: "medium",
        color: "bg-midnight",
        gradient: "from-midnight/80 to-deep-teal/80",
        image: "/images/service-rag.png",
        link: "/services/rag"
    },
    {
        title: "AI Due Diligence",
        description: "Assess AI potential and risks in target assets.",
        icon: Search,
        size: "medium",
        color: "bg-ocean",
        gradient: "from-ocean/80 to-sea-green/80",
        image: "/images/service-due-diligence.png",
        link: "/services/due-diligence"
    },
    {
        title: "Agentic Automation",
        description: "Autonomous agents for complex workflows.",
        icon: Zap,
        size: "large",
        color: "bg-sea-green",
        gradient: "from-sea-green/80 to-deep-teal/80",
        image: "/images/service-agents.png",
        link: "/services/agents"
    },
    {
        title: "Data Governance",
        description: "Secure, compliant AI foundations.",
        icon: Shield,
        size: "small",
        color: "bg-pearl",
        gradient: "from-pearl/90 to-deep-teal/20",
        textColor: "text-midnight",
        link: "/services/governance"
    },
    {
        title: "Custom LLM Dev",
        description: "Fine-tuned models for specific domains.",
        icon: Cpu,
        size: "small",
        color: "bg-amber",
        gradient: "from-amber/90 to-ocean/30",
        textColor: "text-midnight",
        link: "/services/llm"
    }
]

export function ServicesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-midnight/60 max-w-2xl mx-auto text-lg">
                        Comprehensive AI solutions tailored for the private equity lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={index}
                            className={`
                group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:shadow-xl
                ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${service.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                ${service.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                ${service.textColor || 'text-white'}
              `}
                        >
                            {/* Background Image */}
                            {service.image && (
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                />
                            )}

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient || service.color}`} />

                            {/* Fallback solid color for items without images */}
                            {!service.image && (
                                <div className={`absolute inset-0 ${service.color}`} />
                            )}

                            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <service.icon className={`w-8 h-8 ${service.textColor ? 'opacity-100' : 'text-white/80'}`} />
                                    <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${service.textColor || 'text-white'}`} />
                                </div>

                                <div>
                                    <h3 className={`font-display font-bold mb-2 ${service.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm ${service.textColor ? 'opacity-80' : 'text-white/70'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
