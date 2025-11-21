"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const nodes = [
    { x: 120, y: -80 },
    { x: -150, y: 60 },
    { x: 80, y: 100 },
    { x: -100, y: -50 },
    { x: 50, y: -120 }
]

export function InteractiveDemo() {

    return (
        <section className="py-24 bg-midnight text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3">
                        <h2 className="font-display text-4xl font-bold mb-4">
                            Try Our Knowledge Graph
                        </h2>
                        <p className="text-xl text-sea-green mb-6">
                            Drag. Connect. Explore.
                        </p>
                        <p className="text-pearl/70 mb-8">
                            Experience how we transform unstructured data into connected intelligence. Click nodes to explore relationships.
                        </p>
                        <Button className="bg-sea-green hover:bg-sea-green/90 text-white">
                            Book Full Demo <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="w-full md:w-2/3 h-[500px] bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                        {/* Placeholder for interactive graph */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-pearl/30 text-lg font-medium">Interactive Graph Demo Placeholder</p>
                            {/* In a real implementation, we'd use React Flow or D3.js here */}

                            {/* Static Nodes Simulation */}
                            {nodes.map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute w-4 h-4 rounded-full bg-sea-green"
                                    style={{
                                        transform: `translate(${node.x}px, ${node.y}px)`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
