"use client"

import { StatsBar } from "@/components/ui/stats-bar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface StatItem {
    value: string
    label: string
}

interface CTAButton {
    text: string
    href: string
    variant?: "default" | "outline"
}

interface PageHeroProps {
    headline: string
    subheadline: string
    stats?: StatItem[]
    ctas?: CTAButton[]
    backgroundImage?: string
    className?: string
}

export function PageHero({
    headline,
    subheadline,
    stats,
    ctas,
    backgroundImage,
    className = ""
}: PageHeroProps) {
    return (
        <section className={`relative py-24 md:py-32 bg-midnight text-white overflow-hidden ${className}`}>
            {/* Background Image */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}

            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-deep-teal blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sea-green blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {headline}
                    </h1>
                    <p className="text-lg md:text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        {subheadline}
                    </p>

                    {stats && stats.length > 0 && (
                        <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <StatsBar stats={stats} />
                        </div>
                    )}

                    {ctas && ctas.length > 0 && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {ctas.map((cta, index) => (
                                <Button
                                    key={index}
                                    size="lg"
                                    variant={cta.variant || "default"}
                                    className={cta.variant === "outline" ? "border-white text-white hover:bg-white hover:text-midnight" : ""}
                                    asChild
                                >
                                    <Link href={cta.href}>{cta.text}</Link>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
