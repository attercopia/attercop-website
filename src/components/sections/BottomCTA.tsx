"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BottomCTA() {
    return (
        <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full">
            {/* PE Firms Side */}
            <div className="w-full md:w-1/2 bg-midnight relative overflow-hidden group flex items-center justify-center p-12 border-b md:border-b-0 md:border-r border-white/10">
                <div className="absolute inset-0 bg-deep-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                <div className="relative z-10 max-w-md text-center md:text-left">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        For PE Firms
                    </h2>
                    <p className="text-pearl/80 text-lg mb-8">
                        Accelerate value creation across your portfolio. Implement AI strategies that drive multiple expansion.
                    </p>
                    <Button size="lg" className="bg-sea-green hover:bg-sea-green/90 text-white" asChild>
                        <Link href="/for-pe-firms">
                            Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Portfolio Companies Side */}
            <div className="w-full md:w-1/2 bg-midnight relative overflow-hidden group flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-ocean/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                <div className="relative z-10 max-w-md text-center md:text-left">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        For Portfolio Companies
                    </h2>
                    <p className="text-pearl/80 text-lg mb-8">
                        Execute on the AI mandate. Build practical, high-ROI solutions that transform operations.
                    </p>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight" asChild>
                        <Link href="/for-businesses">
                            Start Building <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
