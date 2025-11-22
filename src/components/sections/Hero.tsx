"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { ArrowDown } from "lucide-react"

const HeroScene = dynamic(() => import("@/components/sections/hero-scene").then(mod => mod.HeroScene), {
    ssr: false,
    loading: () => <div className="absolute inset-0 -z-10 bg-midnight" />
})

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-midnight text-white flex items-center justify-center">
            {/* 3D Scene Background */}
            <HeroScene />

            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-deep-teal blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sea-green blur-[120px]" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-ocean blur-[100px]" />
            </div>

            {/* Animated Grid/Nodes Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

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
                        <Link href="/pe-firms">For PE Firms</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white min-w-[200px] text-base h-14" asChild>
                        <Link href="/portfolio">For Portfolio Companies</Link>
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
