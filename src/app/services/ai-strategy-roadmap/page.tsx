import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, CheckCircle2, Users, Shield } from "lucide-react"

export default function AIStrategyRoadmapPage() {
    const stats = [
        { value: "50+", label: "Strategies Delivered" },
        { value: "3x", label: "Average ROI" },
        { value: "85%", label: "Reach Production" },
        { value: "100%", label: "Include Governance" }
    ]

    const ctas = [
        { text: "Book Strategy Workshop", href: "/contact" },
        { text: "Download Strategy Framework", href: "/contact", variant: "outline" as const }
    ]

    const pillars = [
        {
            icon: Target,
            title: "AI Projects Must Be VALUABLE",
            items: [
                "ROI Validation: Projecting measurable returns",
                "Outcome Focus: Revenue generation, cost optimisation, efficiency gains",
                "Success Criteria: Aligned metrics and KPIs"
            ]
        },
        {
            icon: CheckCircle2,
            title: "AI Projects Must Be FEASIBLE",
            items: [
                "Data and Compute Analysis: Availability, quality, engineering potential",
                "Model Applicability: Suitability assessment for outcome feasibility",
                "Technical Architecture: Existing platform evaluation"
            ]
        },
        {
            icon: Users,
            title: "AI Projects Must Be DELIVERABLE",
            items: [
                "AI Maturity Assessment: Team readiness evaluation",
                "Capability Building: Tailored guidance for adoption",
                "Change Management: Organisational alignment"
            ]
        },
        {
            icon: Shield,
            title: "AI Projects Must Be ADVISABLE",
            items: [
                "Responsible AI Review: Legal, ethical, societal impact",
                "Risk Mitigation: Identifying and addressing potential risks",
                "Sustainability: Long-term viability assessment"
            ]
        }
    ]

    const faqs = [
        {
            question: "How long does an AI strategy engagement typically take?",
            answer: "We offer two tracks: our Full AI Strategy & Roadmap takes 6-8 weeks and provides comprehensive business-wide assessment. Our 5-Step Rapid Framework delivers focused results in 2-3 weeks for specific use cases. The right approach depends on your scope and timeline."
        },
        {
            question: "What makes your approach different from other consultancies?",
            answer: "We don&apos;t just create documents - we build actionable plans. Our thesis-based approach ensures every AI initiative is valuable, feasible, deliverable, and advisable. We&apos;ve delivered strategies across Life Sciences, PE, Cybersecurity, and more, giving us deep practical experience."
        },
        {
            question: "Do you help with implementation after the strategy is complete?",
            answer: "Absolutely. Many clients engage us for implementation support, from 100-day transformation programmes to ongoing advisory. We can also help build your internal AI capabilities through training and knowledge transfer."
        },
        {
            question: "How do you ensure ROI from AI initiatives?",
            answer: "ROI validation is built into our process. We project measurable returns, establish clear success criteria, and identify quick wins alongside long-term transformation. Our strategies include detailed business cases with realistic ROI projections."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Strategic AI Planning That Delivers ROI"
                subheadline="Transform AI ambitions into actionable roadmaps with clear value expectations"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            The Strategic Imperative
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            AI without strategy is expensive experimentation. You need more than possibilities - you need a practical roadmap that aligns with business objectives, validates ROI, and ensures successful adoption.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Attercop&apos;s strategic planning approach ideates, crystallises, and stack-ranks potential AI projects through rigorous analysis of value, feasibility, capability, and advisability. We&apos;ve delivered AI strategies for clients across Life Sciences, Cybersecurity, Private Equity, Media, and technology startups across three continents.
                        </p>
                    </div>
                </div>
            </section>

            {/* Four Pillars */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Our Thesis-Based Approach
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            Every AI initiative must meet four critical criteria
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="bg-white rounded-xl p-8">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <pillar.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {pillar.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {pillar.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-midnight/70">
                                                <span className="text-sea-green mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Solutions */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Two Tailored Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Full Strategy */}
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="text-sm font-semibold text-deep-teal mb-2">Solution 1</div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Full AI Strategy & Roadmap
                                </h3>
                                <p className="text-midnight/70 mb-6">
                                    For organisations ready for deep exploration
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span>Comprehensive business-wide AI assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span>Detailed opportunity mapping across all functions</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span>Prioritised multi-year implementation roadmap</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span>Complete business case with ROI projections</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span>Organisational design for AI delivery</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span>Governance framework development</span>
                                    </li>
                                </ul>
                                <div className="border-t border-midnight/10 pt-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-midnight/60">Timeline:</span>
                                        <span className="font-semibold text-midnight">6-8 weeks</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-midnight/60">Investment:</span>
                                        <span className="font-semibold text-midnight">From £50,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-midnight/60">Ideal For:</span>
                                        <span className="font-semibold text-midnight">Enterprise transformation</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rapid Framework */}
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="text-sm font-semibold text-deep-teal mb-2">Solution 2</div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    5-Step Rapid AI Strategy Framework
                                </h3>
                                <p className="text-midnight/70 mb-6">
                                    For focused, fast results on specific use cases
                                </p>
                                <ol className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-midnight/70">
                                        <span className="font-display text-xl font-bold text-sea-green">1</span>
                                        <div>
                                            <span className="font-semibold text-midnight">Frame the Challenge:</span> Define core problems as research questions
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-midnight/70">
                                        <span className="font-display text-xl font-bold text-sea-green">2</span>
                                        <div>
                                            <span className="font-semibold text-midnight">Assess Readiness:</span> Evaluate data, technology, and team capabilities
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-midnight/70">
                                        <span className="font-display text-xl font-bold text-sea-green">3</span>
                                        <div>
                                            <span className="font-semibold text-midnight">Identify Opportunities:</span> Map high-value, achievable initiatives
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-midnight/70">
                                        <span className="font-display text-xl font-bold text-sea-green">4</span>
                                        <div>
                                            <span className="font-semibold text-midnight">Design Solution:</span> Architect the optimal approach
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-midnight/70">
                                        <span className="font-display text-xl font-bold text-sea-green">5</span>
                                        <div>
                                            <span className="font-semibold text-midnight">Create Roadmap:</span> Practical implementation plan with milestones
                                        </div>
                                    </li>
                                </ol>
                                <div className="border-t border-midnight/10 pt-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-midnight/60">Timeline:</span>
                                        <span className="font-semibold text-midnight">2-3 weeks</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-midnight/60">Investment:</span>
                                        <span className="font-semibold text-midnight">From £15,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-midnight/60">Ideal For:</span>
                                        <span className="font-semibold text-midnight">Quick strategic clarity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Experience */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            Industry Experience
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Sectors We&apos;ve Transformed</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• Life Sciences & Pharmaceuticals</li>
                                    <li>• Financial Services</li>
                                    <li>• Private Equity</li>
                                    <li>• Cybersecurity</li>
                                    <li>• Media & Entertainment</li>
                                    <li>• Technology Startups</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Geographic Reach</h3>
                                <p className="text-xl text-pearl/90 leading-relaxed">
                                    United Kingdom | Europe | North America | Asia-Pacific
                                </p>
                                <div className="mt-8 bg-white/10 rounded-lg p-6">
                                    <h4 className="font-semibold text-lg mb-2">Global Medical Communications Leader</h4>
                                    <p className="text-sm text-pearl/80 mb-3">
                                        <span className="font-semibold">Challenge:</span> Ad-hoc AI initiatives without strategic direction
                                    </p>
                                    <p className="text-sm text-pearl/80 mb-3">
                                        <span className="font-semibold">Solution:</span> Comprehensive AI strategy integrating knowledge engineering, GenAI, and ML
                                    </p>
                                    <p className="text-sm text-pearl/80">
                                        <span className="font-semibold">Impact:</span> Clear roadmap, optimal organisational structure, reinforced market leadership
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="AI Strategy FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build Your AI Strategy?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Stop experimenting. Start executing. Get a strategy that delivers measurable value.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Book Strategy Workshop</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-midnight">
                            <Link href="/services">Back to Services</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
