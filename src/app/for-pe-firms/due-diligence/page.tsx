import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Brain, TrendingUp, Shield } from "lucide-react"

export default function DueDiligencePage() {
    const stats = [
        { value: "50%", label: "Faster DD Process" },
        { value: "£15M+", label: "Hidden Value Found" },
        { value: "95%", label: "Risk Detection Rate" },
        { value: "30+", label: "Deals Analyzed" }
    ]

    const ctas = [
        { text: "Request DD Framework", href: "/contact" },
        { text: "View Case Studies", href: "/case-studies", variant: "outline" as const }
    ]

    const faqs = [
        {
            question: "How does AI-powered DD differ from traditional approaches?",
            answer: "AI enables us to analyze vastly more data in less time, identify patterns humans miss, and quantify AI/data assets that traditional DD overlooks. We combine automated analysis with expert human judgment to deliver faster, deeper insights."
        },
        {
            question: "Can you assess AI capabilities in non-tech companies?",
            answer: "Absolutely. Every company has data and processes that could benefit from AI. We assess current AI maturity, data assets, and transformation potential regardless of sector. Often the biggest opportunities are in traditional industries."
        },
        {
            question: "What does technical DD cost and how long does it take?",
            answer: "Typical engagements range from £25K-75K depending on complexity and depth required. Timeline is 2-4 weeks from kickoff to final report. We can work within your deal timeline and provide preliminary findings within days if needed."
        },
        {
            question: "Do you provide ongoing support post-acquisition?",
            answer: "Yes. Many clients engage us for 100-day transformation programs post-close to realize the value creation opportunities identified during DD. We can also provide ongoing advisory as the company scales its AI capabilities."
        }
    ]

    return (
        <main>
            <PageHero
                headline="AI-Powered Deal Flow & Due Diligence"
                subheadline="Find better deals faster. Make smarter investment decisions. See what others miss with AI-enhanced sourcing and technical due diligence."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            See Opportunities Others Miss
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            In competitive markets, information advantage wins deals. AI gives you that advantage.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            We help investment teams identify opportunities earlier, conduct deeper technical due diligence, and quantify AI transformation potential that traditional DD misses. Our approach combines autonomous AI agents for market scanning with expert human analysis for deal evaluation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Deal Sourcing */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Deal Sourcing & Screening
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            AI-powered market intelligence that finds opportunities before your competitors
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-8">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <Search className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Autonomous Market Scanning
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>AI agents that continuously scan for opportunities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Pattern recognition across multiple data sources</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Early identification of emerging winners</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Automated initial screening against investment criteria</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <Brain className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Proprietary Deal Intelligence
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Knowledge graphs connecting market signals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Sentiment analysis of leadership teams</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Technology capability assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Competitive positioning analysis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical DD */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Technical Due Diligence
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            Deep technical evaluation that quantifies AI potential and identifies hidden risks
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                    <TrendingUp className="w-6 h-6 text-deep-teal" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    AI & Data Maturity Assessment
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Deep technical evaluation of AI capabilities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Data asset valuation and quality assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Technology scalability analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Team capability evaluation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-deep-teal" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Value Creation Opportunities
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>AI transformation potential quantification</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Quick win identification</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Investment requirement forecasting</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>ROI modelling and scenario planning</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="font-display text-3xl font-bold mb-6">Case Study: Radiology AI Acquisition</h3>
                        <p className="text-xl text-pearl/90 leading-relaxed mb-6">
                            Our technical DD revealed hidden AI capabilities worth £15M in additional value, whilst identifying critical risks in the data architecture that required immediate attention.
                        </p>
                        <p className="text-lg text-pearl/80 leading-relaxed">
                            The target had developed proprietary algorithms for medical image analysis that weren&apos;t properly valued in their financials. However, we also discovered data quality issues that would have cost £3M+ to remediate. Our findings enabled our client to negotiate a better price while planning for the necessary technical investments post-close.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Due Diligence FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Make Smarter Investment Decisions
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Access our DD framework and discuss how we can support your next deal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Request DD Framework</Link>
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
