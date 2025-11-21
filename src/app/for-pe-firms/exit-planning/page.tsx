import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, FileCheck, MessageSquare, Lightbulb } from "lucide-react"

export default function ExitPlanningPage() {
    const stats = [
        { value: "2.1x", label: "Multiple Improvement" },
        { value: "30%", label: "Higher Valuations" },
        { value: "50%", label: "Faster DD" },
        { value: "100%", label: "Exit Ready" }
    ]

    const ctas = [
        { text: "Calculate Exit Impact", href: "/contact" },
        { text: "View Exit Case Studies", href: "/case-studies", variant: "outline" as const }
    ]

    const faqs = [
        {
            question: "When should we start preparing AI for exit?",
            answer: "Ideally 12-18 months before planned exit. This gives time to implement AI capabilities, demonstrate ROI, build proper documentation, and create a compelling narrative. However, we can also help with accelerated 6-month exit readiness programs if needed."
        },
        {
            question: "How does AI actually enhance exit multiples?",
            answer: "AI enhances multiples by demonstrating sustainable competitive advantage, showing scalable efficiency gains, proving data assets have value, and positioning the company as a technology leader. Buyers pay premiums for companies with proven AI capabilities and clear roadmaps."
        },
        {
            question: "What documentation do buyers expect to see?",
            answer: "Buyers want to see technical architecture documentation, AI governance frameworks, data lineage and quality reports, ROI evidence, team capability assessments, and integration roadmaps. We help create comprehensive documentation packages that satisfy buyer DD requirements."
        },
        {
            question: "Can you help with buyer presentations and data room prep?",
            answer: "Yes. We help craft the AI narrative for buyer presentations, prepare technical documentation for the data room, support management presentations, and can attend buyer DD sessions to answer technical questions."
        }
    ]

    return (
        <main>
            <PageHero
                headline="AI That Enhances Exit Multiples"
                subheadline="Make AI a value driver, not a due diligence concern. Position your portfolio companies for premium valuations with exit-ready AI capabilities."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Exit Value Maximization
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Buyers pay premiums for companies with proven AI capabilities, sustainable competitive advantages, and clear growth potential.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            We help you position AI as a strategic asset that enhances valuation, accelerates buyer DD, and supports premium multiples. Our exit readiness programs ensure your AI capabilities are documented, governed, and ready to impress sophisticated buyers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Exit Services */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Exit Readiness Services
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-8">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <TrendingUp className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    AI as Multiple Enhancer
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Position AI capabilities as competitive moat</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Demonstrate sustainable efficiency gains</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Show scalability and growth potential</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Evidence-based ROI documentation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                    <FileCheck className="w-6 h-6 text-deep-teal" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Buyer-Ready Documentation
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Complete technical documentation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Governance and compliance frameworks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Team capability assessments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Integration roadmaps for acquirers</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <MessageSquare className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Strategic Narrative Development
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>AI story that resonates with buyers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Proof points and metrics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Future roadmap and potential</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">•</span>
                                        <span>Risk mitigation evidence</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                    <Lightbulb className="w-6 h-6 text-deep-teal" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    IP & Asset Development
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Proprietary algorithm development</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Knowledge graph creation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Data asset enhancement</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-deep-teal mt-1">•</span>
                                        <span>Patent opportunity identification</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exit Impact Stats */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            Exit Impact Statistics
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl font-display font-bold text-sea-green mb-4">2.1x</div>
                                <p className="text-xl text-pearl/90">Average multiple improvement with AI</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl font-display font-bold text-sea-green mb-4">30%</div>
                                <p className="text-xl text-pearl/90">Higher valuations for AI-enabled businesses</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl font-display font-bold text-sea-green mb-4">50%</div>
                                <p className="text-xl text-pearl/90">Faster due diligence with proper documentation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exit Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Exit Readiness Timeline
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-32 text-right">
                                    <span className="font-display text-2xl font-bold text-sea-green">12-18 Months</span>
                                </div>
                                <div className="flex-grow bg-pearl rounded-lg p-6">
                                    <h3 className="font-display text-xl font-bold text-midnight mb-2">Ideal Preparation</h3>
                                    <p className="text-midnight/70">Full AI implementation, ROI demonstration, comprehensive documentation, and strategic positioning</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-32 text-right">
                                    <span className="font-display text-2xl font-bold text-deep-teal">6-12 Months</span>
                                </div>
                                <div className="flex-grow bg-pearl rounded-lg p-6">
                                    <h3 className="font-display text-xl font-bold text-midnight mb-2">Accelerated Program</h3>
                                    <p className="text-midnight/70">Focused AI quick wins, essential documentation, buyer narrative development</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-32 text-right">
                                    <span className="font-display text-2xl font-bold text-midnight/40">3-6 Months</span>
                                </div>
                                <div className="flex-grow bg-pearl rounded-lg p-6">
                                    <h3 className="font-display text-xl font-bold text-midnight mb-2">Emergency Readiness</h3>
                                    <p className="text-midnight/70">Documentation of existing capabilities, risk mitigation, buyer DD support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Exit Planning FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Maximize Your Exit Value
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Calculate the potential impact of AI on your exit multiple and discuss your exit readiness strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Calculate Exit Impact</Link>
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
