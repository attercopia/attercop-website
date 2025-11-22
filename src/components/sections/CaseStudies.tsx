"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CaseStudies() {
    return (
        <section className="py-24 bg-pearl">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                            Delivering Real Results
                        </h2>
                        <p className="text-midnight/60 max-w-2xl text-lg">
                            From portfolio-wide transformations to specific value creation initiatives.
                        </p>
                    </div>
                    <Link href="/resources/insights/case-studies" className="hidden md:flex items-center gap-2 text-deep-teal font-semibold hover:text-sea-green transition-colors">
                        View All Stories <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                    {/* Large Feature Card */}
                    <div
                        className="md:col-span-2 bg-midnight rounded-2xl p-8 md:p-12 relative overflow-hidden group cursor-pointer"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url(/images/medical-case-study.png)' }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/30 to-midnight/90 z-0" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                    Global Medical Communications
                                </span>
                            </div>

                            <div>
                                <div className="font-display text-6xl md:text-8xl font-bold text-sea-green mb-4">
                                    70%↓
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Publication Time Reduced
                                </h3>
                                <p className="text-pearl/70 max-w-lg mb-6 group-hover:text-white transition-colors">
                                    Knowledge graphs transformed decades of medical writing into instantly accessible intelligence, maintaining 100% compliance.
                                </p>
                                <span className="text-sea-green flex items-center gap-2 font-semibold group-hover:translate-x-2 transition-transform">
                                    Read Story <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {/* Top Right Card */}
                        <div
                            className="flex-1 bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
                        >
                            <span className="text-deep-teal text-xs font-bold tracking-wider uppercase mb-2 block">PE Portfolio Co</span>
                            <div className="font-display text-5xl font-bold text-midnight mb-2">40%↑</div>
                            <h4 className="text-lg font-semibold text-midnight mb-2">Operational Efficiency</h4>
                            <span className="text-deep-teal text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Quick View <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>

                        {/* Bottom Right Card */}
                        <div
                            className="flex-1 bg-deep-teal rounded-2xl p-8 text-white hover:bg-deep-teal/90 transition-colors cursor-pointer group"
                        >
                            <span className="text-white/60 text-xs font-bold tracking-wider uppercase mb-2 block">Life Sciences</span>
                            <div className="font-display text-5xl font-bold text-white mb-2">100%</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Regulatory Compliance</h4>
                            <span className="text-white/80 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn More <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
