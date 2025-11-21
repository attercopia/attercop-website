import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Users, FileText } from "lucide-react"

export default function GPAdvisoryPage() {
    const stats = [
        { value: "15+", label: "PE Firms Advised" },
        { value: "£2B+", label: "AUM Supported" },
        { value: "100%", label: "LP Satisfaction" },
        { value: "3x", label: "Portfolio ROI" }
    ]

    const ctas = [
        { text: "Schedule GP Briefing", href: "/contact" },
        { text: "Download PE AI Playbook", href: "/resources", variant: "outline" as const }
    ]

    const services = [
        {
            icon: TrendingUp,
            title: "Fund-Level AI Strategy",
            items: [
                "Competitive positioning through AI capabilities",
                "LP reporting on AI initiatives and impact",
                "Portfolio-wide AI investment frameworks",
                "Risk mitigation and governance structures"
            ]
        },
        {
            icon: Users,
            title: "Quarterly AI Intelligence Briefings",
            items: [
                "Emerging AI opportunities and threats",
                "Sector-specific AI disruption analysis",
                "Regulatory landscape updates",
                "Competitor AI adoption tracking"
            ]
        },
        {
            icon: FileText,
            title: "Board & LP Communications",
            items: [
                "AI impact metrics and reporting frameworks",
                "Story-telling for fundraising",
                "Evidence-based AI value creation narratives",
                "Exit multiple enhancement strategies"
            ]
        }
    ]

    const faqs = [
        {
            question: "How do you help us communicate AI value to LPs?",
            answer: "We develop comprehensive reporting frameworks that translate technical AI initiatives into business outcomes LPs care about: revenue growth, cost reduction, competitive moats, and exit multiples. We provide quarterly briefing materials, case studies, and ROI documentation that demonstrate tangible value creation."
        },
        {
            question: "What does a GP advisory engagement look like?",
            answer: "Typically quarterly strategic briefings with the GP team, monthly intelligence updates on AI trends and opportunities, ad-hoc support for board presentations and LP communications, and annual portfolio-wide AI strategy reviews. We become an extension of your investment team."
        },
        {
            question: "How do you stay current with AI developments?",
            answer: "Our team includes active AI researchers and practitioners. We maintain relationships with leading AI labs, attend major conferences, and run our own R&D initiatives through Attercop Labs. We translate cutting-edge developments into practical PE applications."
        },
        {
            question: "Can you help with sector-specific AI strategy?",
            answer: "Absolutely. We provide deep-dive analysis on AI disruption and opportunity in specific sectors. Whether it&apos;s healthcare, financial services, manufacturing, or life sciences, we help you understand where AI creates value and risk in your target markets."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Strategic AI Advisory for General Partners"
                subheadline="Transform how your fund operates with AI strategy that enhances performance, satisfies LPs, and creates competitive advantage across your portfolio."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            AI Strategy at the GP Level
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Your LPs expect AI leadership. Your portfolio companies need AI guidance. Your competitors are already moving.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            We provide the strategic AI advisory that helps GPs navigate the AI revolution - from fund positioning to portfolio value creation. We speak both PE and AI fluently, translating technical capabilities into investment returns.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Our GP Advisory Services
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            Comprehensive AI support for General Partners and Investment Committees
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-8">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <service.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.items.map((item, idx) => (
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

            {/* Testimonial */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl text-sea-green mb-6">&ldquo;</div>
                        <p className="text-2xl md:text-3xl font-display mb-8 leading-relaxed">
                            Attercop helps us stay ahead of AI disruption whilst ensuring our portfolio companies implement AI responsibly and profitably.
                        </p>
                        <p className="text-xl text-pearl/80">
                            Managing Partner, £2B UK Growth Fund
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Why GPs Choose Attercop
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    We Speak PE
                                </h3>
                                <p className="text-midnight/70 leading-relaxed">
                                    We understand carry, IRR, and multiple expansion. Our advice is framed in PE terms, not tech jargon. We know your timelines, your pressures, and your success metrics.
                                </p>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Deep Technical Expertise
                                </h3>
                                <p className="text-midnight/70 leading-relaxed">
                                    Our team includes AI researchers and practitioners who understand what&apos;s real versus hype. We help you separate genuine opportunities from vendor marketing.
                                </p>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Portfolio-Wide Impact
                                </h3>
                                <p className="text-midnight/70 leading-relaxed">
                                    We don&apos;t just advise - we help implement across your portfolio. Our frameworks and playbooks create repeatable value across multiple investments.
                                </p>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    LP-Ready Reporting
                                </h3>
                                <p className="text-midnight/70 leading-relaxed">
                                    We provide the metrics, case studies, and narratives you need to demonstrate AI value creation to your LPs. Evidence-based storytelling that supports fundraising.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="GP Advisory FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Lead with AI?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Schedule a confidential briefing to discuss how AI can enhance your fund&apos;s performance and portfolio value.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Schedule GP Briefing</Link>
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
