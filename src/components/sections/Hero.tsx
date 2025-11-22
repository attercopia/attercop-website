"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { AnimatedBackground } from "@/components/sections/AnimatedBackground"

export function Hero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-midnight text-white flex items-center justify-center">
            {/* Animated Background - Knowledge Graph Canvas */}
            <AnimatedBackground />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
                <h1
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
                >
                    <span className="block text-white">Knowledge-Backed,</span>
                    <span className="bg-gradient-to-r from-sea-green to-ocean bg-clip-text text-transparent">
                        Agentic AI
                    </span>
                </h1>

                <p
                    className="font-heading text-xl md:text-2xl text-pearl/80 mb-10 max-w-2xl"
                >
                    For PE-Backed Mid-Market Firms
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" variant="outline" className="border-sea-green text-sea-green hover:bg-sea-green hover:text-white min-w-[200px] text-base h-14" asChild>
                        <Link href="/for-pe-firms">For PE Firms</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white min-w-[200px] text-base h-14" asChild>
                        <Link href="/for-businesses">For Portfolio Companies</Link>
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pearl/50"
            >
                <span className="text-xs uppercase tracking-widest">Discover</span>
                <div>
                    <ArrowDown className="w-5 h-5" />
                </div>
            </div>
        </section>
    )
}
