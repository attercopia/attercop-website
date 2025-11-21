import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Users, BarChart3, Repeat } from "lucide-react"

export default function PortfolioOperationsPage() {
    const stats = [
        { value: "40%", label: "Efficiency Gain" },
        { value: "100", label: "Days to Transform" },
        { value: "15+", label: "Portfolio Companies" },
        { value: "3x", label: "Average ROI" }
    ]

    const ctas = [
        { text: "Discuss Portfolio Strategy", href: "/contact" },
        { text: "View Success Stories", href: "/case-studies", variant: "outline" as const }
    ]

    const faqs = [
        {
            question: "How do you prioritize which portfolio companies to focus on first?",
            answer: "We conduct a portfolio-wide AI maturity assessment to identify companies with the highest value potential and readiness for transformation. We consider factors like data availability, leadership buy-in, competitive pressure, and exit timeline to create a prioritized roadmap."
        },
        {
            question: "Can smaller portfolio companies benefit from AI?",
            answer: "Absolutely. In fact, smaller companies often see faster ROI because they&apos;re more agile. We have playbooks specifically designed for mid-market companies that deliver meaningful impact without enterprise-scale budgets or resources."
        },
        {
            question: "How do you ensure knowledge transfer across the portfolio?",
            answer: "We create shared centers of excellence, run cross-portfolio workshops, and develop reusable playbooks and frameworks. When one portfolio company solves a problem, we capture that learning and accelerate deployment across others facing similar challenges."
        },
        {
            question: "What ongoing support do you provide post-implementation?",
            answer: "We offer quarterly portfolio reviews, ongoing optimization support, and access to our team for ad-hoc questions. Many clients also engage us for continuous improvement programs to ensure AI capabilities evolve with the business."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Portfolio-Wide AI Transformation at PE Speed"
                subheadline="One AI strategy. Multiple portfolio companies. Exponential value creation through systematic deployment and cross-portfolio knowledge sharing."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Systematic AI Deployment Across Your Portfolio
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Operating partners face a unique challenge: driving AI transformation across multiple companies simultaneously, each with different needs, capabilities, and timelines.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            We&apos;ve perfected the art of portfolio-wide AI enablement. Our systematic approach creates economies of scale, accelerates deployment, and ensures consistent value creation across your investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* 100-Day Framework */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Our 100-Day AI Transformation
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            PE-timeline delivery that matches your value creation plans
                        </p>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-6">
                                <div className="text-sea-green font-display text-4xl font-bold mb-4">01</div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Days 1-30
                                </h3>
                                <p className="text-sm font-semibold text-deep-teal mb-3">Assessment & Quick Wins</p>
                                <ul className="space-y-2 text-sm text-midnight/70">
                                    <li>• AI maturity assessment</li>
                                    <li>• Data landscape mapping</li>
                                    <li>• Quick win identification</li>
                                    <li>• Stakeholder alignment</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="text-sea-green font-display text-4xl font-bold mb-4">02</div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Days 31-60
                                </h3>
                                <p className="text-sm font-semibold text-deep-teal mb-3">Knowledge System Deployment</p>
                                <ul className="space-y-2 text-sm text-midnight/70">
                                    <li>• Knowledge graph build</li>
                                    <li>• RAG system implementation</li>
                                    <li>• Data integration</li>
                                    <li>• Initial user training</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="text-sea-green font-display text-4xl font-bold mb-4">03</div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Days 61-100
                                </h3>
                                <p className="text-sm font-semibold text-deep-teal mb-3">Agent Implementation</p>
                                <ul className="space-y-2 text-sm text-midnight/70">
                                    <li>• Autonomous agent deployment</li>
                                    <li>• Process automation</li>
                                    <li>• Performance monitoring</li>
                                    <li>• ROI measurement</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6">
                                <div className="text-sea-green font-display text-4xl font-bold mb-4">04</div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Post-100
                                </h3>
                                <p className="text-sm font-semibold text-deep-teal mb-3">Scale & Optimization</p>
                                <ul className="space-y-2 text-sm text-midnight/70">
                                    <li>• Continuous improvement</li>
                                    <li>• Capability expansion</li>
                                    <li>• Team enablement</li>
                                    <li>• Exit readiness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Enablement */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Portfolio AI Enablement
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Systematic Deployment Framework
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Portfolio-wide AI maturity assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Prioritization based on value potential</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Shared centers of excellence creation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Cross-portfolio knowledge transfer</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                    <Users className="w-6 h-6 text-deep-teal" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Playbooks & Accelerators
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Sector-specific AI playbooks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Reusable AI components and frameworks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Proven implementation methodologies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Board-ready reporting templates</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <Repeat className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Cross-Portfolio Initiatives
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Shared AI resources and capabilities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Economies of scale in AI investments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Best practice sharing programmes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Joint vendor negotiations</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                    <BarChart3 className="w-6 h-6 text-deep-teal" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Performance Monitoring
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Portfolio-wide AI metrics dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Value creation tracking</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Risk monitoring and mitigation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Quarterly portfolio reviews</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Metric */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                            Proven Portfolio Impact
                        </h3>
                        <p className="text-2xl text-pearl/90 leading-relaxed">
                            Average portfolio company implementing our AI framework achieves <span className="text-sea-green font-bold">40% operational efficiency improvement</span> within 6 months.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Portfolio Operations FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Transform Your Portfolio with AI
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Discuss how we can drive systematic AI value creation across your portfolio companies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Discuss Portfolio Strategy</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-midnight">
                            <Link href="/for-pe-firms">Back to PE Firms Overview</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
