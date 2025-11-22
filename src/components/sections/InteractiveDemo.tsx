"use client"

import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Dynamic import to prevent SSR issues with the knowledge graph
const KnowledgeGraphDemo = dynamic(
    () => import('@/components/KnowledgeGraphDemo'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-[700px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <p className="text-pearl/30 text-lg font-medium">Loading interactive graph...</p>
            </div>
        )
    }
)

export function InteractiveDemo() {
    return (
        <section className="py-24 bg-pearl overflow-hidden">
            {/* Header Section - Constrained */}
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-midnight">
                        Experience Our Knowledge Graph
                    </h2>
                    <p className="text-xl text-deep-teal mb-4">
                        Lessons Learned Database
                    </p>
                    <p className="text-midnight/70 text-lg">
                        Interact with a live demonstration of our knowledge graph technology.
                        Drag nodes, explore connections, and see how disparate data becomes
                        connected intelligence.
                    </p>
                </div>
            </div>

            {/* Interactive Demo - Full Width */}
            <div className="w-full px-4 mb-12">
                <KnowledgeGraphDemo />
            </div>

            {/* Instructions - Constrained */}
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-4">
                            <div className="text-3xl mb-2">🔍</div>
                            <h3 className="font-semibold text-midnight mb-1">Search</h3>
                            <p className="text-sm text-midnight/70">Find lessons, projects, and issues</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl mb-2">🎯</div>
                            <h3 className="font-semibold text-midnight mb-1">Click</h3>
                            <p className="text-sm text-midnight/70">Select nodes for details</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl mb-2">🔗</div>
                            <h3 className="font-semibold text-midnight mb-1">Explore</h3>
                            <p className="text-sm text-midnight/70">See connections highlight</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl mb-2">🎨</div>
                            <h3 className="font-semibold text-midnight mb-1">Filter</h3>
                            <p className="text-sm text-midnight/70">Focus by node type</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA - Constrained */}
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <Button className="bg-coral hover:bg-coral/90 text-white">
                        Book Full Demo <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
