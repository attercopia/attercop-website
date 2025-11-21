import { PageHero } from "@/components/sections/page-hero"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CaseStudiesPage() {
    const stats = [
        { value: "15+", label: "PE Firms Served" },
        { value: "50+", label: "Companies Transformed" },
        { value: "3x", label: "Average ROI" },
        { value: "100", label: "Days to Production" }
    ]

    const ctas = [
        { text: "Discuss Your Challenge", href: "/contact" },
        { text: "Download Case Study Pack", href: "/resources/case-studies", variant: "outline" as const }
    ]

    const peFirmCases = [
        {
            category: "Mid-Market Growth Fund",
            title: "Portfolio-Wide AI Transformation",
            challenge: "Portfolio of 12 B2B software companies with varying AI maturity needed systematic approach to value creation.",
            impact: [
                "8 companies launched AI initiatives within 6 months",
                "Average 35% efficiency gain across portfolio",
                "2 successful exits with AI premium",
                "Cross-portfolio knowledge sharing established"
            ],
            quote: "Attercop is our go-to for AI strategy across the portfolio",
            link: "/case-studies/mid-market-growth"
        },
        {
            category: "Healthcare-Focused Fund",
            title: "Technical DD Drives Confident Investment",
            challenge: "PE firm evaluating AI-powered radiology platform needed deep technical understanding to inform investment thesis.",
            impact: [
                "Clear, evidence-based assessment of technology quality",
                "Identified £15M in hidden AI capabilities",
                "Confident investment decision enabled",
                "Post-acquisition integration roadmap provided"
            ],
            link: "/case-studies/healthcare-dd"
        },
        {
            category: "Technology Fund",
            title: "Accelerating AI Acquisition Integration",
            challenge: "AI acquisition had excellent science but slow commercial progress threatening the investment thesis.",
            impact: [
                "6-month integration vs 18-month plan",
                "Immediate value creation across portfolio",
                "Streamlined development processes",
                "Commercial realignment achieved"
            ],
            link: "/case-studies/tech-integration"
        }
    ]

    const portfolioCases = [
        {
            category: "B2B SaaS Platform",
            title: "Knowledge Graph Drives Growth",
            challenge: "Needed to differentiate in crowded market with unique AI capabilities.",
            impact: [
                "45% reduction in customer churn",
                "60% faster customer onboarding",
                "2x increase in upsell rate",
                "Series B at 3x higher valuation"
            ],
            quote: "From CEO to development team, Attercop partners at every level",
            link: "/case-studies/b2b-saas"
        },
        {
            category: "Healthcare Services",
            title: "Agentic Automation Drives EBITDA",
            challenge: "Manual clinical processes limiting growth and profitability.",
            impact: [
                "3 hours saved per clinician daily",
                "50% reduction in documentation time",
                "95% clinical coding accuracy",
                "18% EBITDA improvement"
            ],
            link: "/case-studies/healthcare-services"
        },
        {
            category: "Professional Services",
            title: "Enterprise RAG Enhances Win Rate",
            challenge: "Knowledge locked in silos preventing efficient proposal creation.",
            impact: [
                "80% faster proposal creation",
                "35% improvement in win rate",
                "£2.4M annual efficiency savings",
                "Acquired at premium multiple"
            ],
            link: "/case-studies/professional-services"
        }
    ]

    const lifeSciencesCases = [
        {
            category: "Medical Communications",
            title: "70% Faster Publication Cycle",
            challenge: "Time-intensive creation of medical content with strict regulatory accuracy requirements.",
            impact: [
                "70% reduction in initial draft time",
                "60% faster overall publication cycle",
                "100% regulatory compliance maintained",
                "ROI achieved within 4 months"
            ],
            quote: "MedComms AI has revolutionised our publication process",
            link: "/case-studies/medcomms"
        },
        {
            category: "Contract Research Organisation",
            title: "Knowledge Graph Unlocks Hidden Value",
            challenge: "Decades of experimental data in unstructured reports, inaccessible for modern analysis.",
            impact: [
                "Unlocked 20 years of experimental data",
                "60% faster study design",
                "Previously hidden insights now searchable",
                "Competitive advantage through unique data asset"
            ],
            quote: "Our knowledge graph transformed how we do research",
            link: "/case-studies/crdo"
        },
        {
            category: "Digital Therapeutics",
            title: "From Inception to Class IIa Medical Device",
            challenge: "Emotion sensing technology needed development from concept to registered medical device.",
            impact: [
                "Class IIa medical device registration achieved",
                "Multiple clinical research publications",
                "Objective real-world health data platform created",
                "New diagnostic and treatment avenues opened"
            ],
            quote: "Regulatory compliance without compromising innovation",
            link: "/case-studies/digital-therapeutics"
        }
    ]

    return (
        <main>
            <PageHero
                headline="Real AI. Real Results. Real ROI."
                subheadline="From PE firms to portfolio companies, from life sciences to professional services - see how we've delivered production AI systems that drive measurable value."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Metrics Summary */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-8 text-center">
                            By the Numbers
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "70%", label: "Reduction in Process Time" },
                                { value: "95%", label: "First-Pass Accuracy" },
                                { value: "100%", label: "Regulatory Compliance" },
                                { value: "2.1x", label: "Average Multiple Improvement" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-6 bg-pearl rounded-xl">
                                    <div className="font-display text-3xl font-bold text-sea-green mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-midnight/60">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PE Firms Case Studies */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                            For PE Firms
                        </h2>
                        <p className="text-lg text-midnight/60 max-w-2xl">
                            Strategic advisory, due diligence, and portfolio transformation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {peFirmCases.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Companies Case Studies */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                            For Portfolio Companies
                        </h2>
                        <p className="text-lg text-midnight/60 max-w-2xl">
                            100-day transformations delivering measurable ROI
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {portfolioCases.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Life Sciences Case Studies */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                            Life Sciences & Healthcare
                        </h2>
                        <p className="text-lg text-midnight/60 max-w-2xl">
                            Compliant innovation for regulated environments
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {lifeSciencesCases.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl font-bold text-center mb-16">
                        What Our Clients Say
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                            <p className="text-sm font-bold text-sea-green mb-2">PE FIRMS</p>
                            <p className="text-pearl/80 italic mb-4">
                                &ldquo;Attercop is our go-to for AI strategy across the portfolio&rdquo;
                            </p>
                            <p className="text-sm text-pearl/50">Managing Partner, Growth Fund</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                            <p className="text-sm font-bold text-sea-green mb-2">PORTFOLIO COMPANIES</p>
                            <p className="text-pearl/80 italic mb-4">
                                &ldquo;They delivered in 100 days what others quoted in years&rdquo;
                            </p>
                            <p className="text-sm text-pearl/50">CEO, B2B SaaS Platform</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                            <p className="text-sm font-bold text-sea-green mb-2">LIFE SCIENCES</p>
                            <p className="text-pearl/80 italic mb-4">
                                &ldquo;Our knowledge graph transformed how we do research&rdquo;
                            </p>
                            <p className="text-sm text-pearl/50">CTO, Contract Research Org</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-xl text-midnight/70 mb-12 max-w-3xl mx-auto">
                        Every case study started with a conversation. Let&apos;s discuss your AI opportunity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Book a Discovery Call</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/resources">Download Case Study Pack</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
