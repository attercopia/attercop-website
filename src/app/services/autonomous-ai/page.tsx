import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bot, TrendingUp, DollarSign, Headphones } from "lucide-react"

export default function AutonomousAIPage() {
    const stats = [
        { value: "40%", label: "Efficiency Gain" },
        { value: "24/7", label: "Operation" },
        { value: "85%", label: "Task Accuracy" },
        { value: "2x", label: "Processing Speed" }
    ]

    const ctas = [
        { text: "See Agents in Action", href: "/contact" },
        { text: "Calculate ROI", href: "/contact", variant: "outline" as const }
    ]

    const agentCategories = [
        {
            icon: TrendingUp,
            title: "Revenue Agents",
            items: [
                "Lead qualification and scoring",
                "Proposal generation",
                "Customer success monitoring",
                "Upsell opportunity identification",
                "Churn prediction"
            ]
        },
        {
            icon: Bot,
            title: "Operational Agents",
            items: [
                "Supply chain optimisation",
                "Quality control monitoring",
                "Inventory management",
                "Predictive maintenance",
                "Resource allocation"
            ]
        },
        {
            icon: DollarSign,
            title: "Financial Agents",
            items: [
                "Invoice processing",
                "Expense categorisation",
                "Cash flow forecasting",
                "Compliance monitoring",
                "Fraud detection"
            ]
        },
        {
            icon: Headphones,
            title: "Support Agents",
            items: [
                "Tier-1 customer service",
                "Internal IT helpdesk",
                "HR query handling",
                "Documentation assistance",
                "Ticket routing"
            ]
        }
    ]

    const faqs = [
        {
            question: "How are autonomous AI agents different from traditional automation?",
            answer: "Traditional automation follows rigid rules. Autonomous agents understand goals, adapt to situations, and make intelligent decisions. They can handle exceptions, learn from outcomes, and collaborate with humans - not just execute predefined workflows."
        },
        {
            question: "Can agents integrate with our existing systems?",
            answer: "Yes. Our agents are designed for seamless integration via APIs, database connections, and message queuing. We support legacy systems, cloud platforms, and modern SaaS applications with minimal disruption to existing workflows."
        },
        {
            question: "How do you ensure agents make correct decisions?",
            answer: "Agents operate within defined parameters with built-in validation, escalation protocols, and continuous monitoring. They learn from feedback, maintain audit trails, and escalate complex situations to human experts. We achieve 85% task accuracy with continuous improvement."
        },
        {
            question: "What&apos;s the typical ROI timeline for autonomous agents?",
            answer: "Most clients see measurable ROI within 3-6 months. Our phased deployment approach delivers quick wins early whilst building towards comprehensive automation. Average efficiency gains are 40% with 2x processing speed improvements."
        }
    ]

    return (
        <main>
            <PageHero
                headline="AI That Works While You Sleep"
                subheadline="Autonomous agents that sense, decide, and act - transforming operations 24/7"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            The Next Evolution of AI
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Stop automating tasks. Start automating outcomes. Autonomous AI doesn&apos;t just follow rules - it understands goals, makes decisions, and takes action to achieve results.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Attercop develops sophisticated AI agents that operate as autonomous extensions of your team. These intelligent systems don&apos;t wait for instructions - they proactively identify opportunities, make decisions within defined parameters, and execute actions that drive your business forward.
                        </p>
                    </div>
                </div>
            </section>

            {/* AI Co-Workers Concept */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6 text-center">
                            AI Co-Workers Concept
                        </h2>
                        <p className="text-xl text-midnight/70 mb-12 text-center">
                            Not replacement, but enhancement
                        </p>
                        <div className="bg-white rounded-xl p-8">
                            <p className="text-lg text-midnight/70 mb-6">
                                Our AI Co-Workers augment human capabilities, handling routine decisions and actions whilst escalating complex situations to human experts.
                            </p>
                            <h3 className="font-display text-xl font-bold text-midnight mb-4">Key Characteristics</h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-start gap-2 text-midnight/70">
                                    <span className="text-sea-green mt-1">•</span>
                                    <span>Goal-oriented behaviour</span>
                                </li>
                                <li className="flex items-start gap-2 text-midnight/70">
                                    <span className="text-sea-green mt-1">•</span>
                                    <span>Contextual understanding</span>
                                </li>
                                <li className="flex items-start gap-2 text-midnight/70">
                                    <span className="text-sea-green mt-1">•</span>
                                    <span>Adaptive learning</span>
                                </li>
                                <li className="flex items-start gap-2 text-midnight/70">
                                    <span className="text-sea-green mt-1">•</span>
                                    <span>Collaborative interaction</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agent Categories */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Agent Categories
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {agentCategories.map((category, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <category.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
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

            {/* Sense-Decide-Act Framework */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            Sense-Decide-Act Framework
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-4 text-sea-green">SENSE</h3>
                                <p className="text-lg font-semibold mb-4">Environmental Awareness</p>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Data ingestion from multiple sources</li>
                                    <li>• Pattern recognition</li>
                                    <li>• Anomaly detection</li>
                                    <li>• Context understanding</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-4 text-sea-green">DECIDE</h3>
                                <p className="text-lg font-semibold mb-4">Intelligent Decision-Making</p>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Goal evaluation</li>
                                    <li>• Option generation</li>
                                    <li>• Impact assessment</li>
                                    <li>• Action selection</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-4 text-sea-green">ACT</h3>
                                <p className="text-lg font-semibold mb-4">Autonomous Execution</p>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Action implementation</li>
                                    <li>• System integration</li>
                                    <li>• Result monitoring</li>
                                    <li>• Learning feedback</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-8 text-center">
                            Real-World Impact
                        </h2>
                        <div className="bg-pearl rounded-xl p-8">
                            <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                B2B Services Platform
                            </h3>
                            <div className="space-y-4 text-midnight/70">
                                <p>
                                    <span className="font-semibold text-midnight">Challenge:</span> Manual order processing limiting growth
                                </p>
                                <p>
                                    <span className="font-semibold text-midnight">Solution:</span> Autonomous agents handling 60% of orders
                                </p>
                                <p>
                                    <span className="font-semibold text-midnight">Impact:</span> £2.4M annual savings, 40% efficiency gain, 20 FTE equivalent
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Autonomous AI FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Deploy Your AI Workforce
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Transform operations with agents that never stop working for your success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">See Agents in Action</Link>
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
