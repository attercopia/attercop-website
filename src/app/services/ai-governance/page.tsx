import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, FileText, AlertTriangle, Users } from "lucide-react"

export default function AIGovernancePage() {
    const stats = [
        { value: "100%", label: "Compliance Achievement" },
        { value: "0", label: "Regulatory Breaches" },
        { value: "60%", label: "Reduced Overhead" },
        { value: "3x", label: "Faster Deployment" }
    ]

    const ctas = [
        { text: "Start Governance Assessment", href: "/contact" },
        { text: "Download Compliance Guide", href: "/contact", variant: "outline" as const }
    ]

    const frameworks = [
        {
            icon: FileText,
            title: "AI Principles and Policies",
            items: [
                "Ethical use guidelines",
                "Decision-making criteria",
                "Transparency requirements",
                "Fairness standards"
            ]
        },
        {
            icon: AlertTriangle,
            title: "Risk Management Processes",
            items: [
                "Comprehensive risk analyses",
                "Impact assessments",
                "Mitigation strategies",
                "Monitoring protocols"
            ]
        },
        {
            icon: Shield,
            title: "Responsibilities and Oversight",
            items: [
                "Clear role definitions",
                "Accountability matrices",
                "Three Lines of Defence model",
                "Escalation procedures"
            ]
        },
        {
            icon: Users,
            title: "Workforce Upskilling",
            items: [
                "AI literacy programmes",
                "Risk identification training",
                "Ethical decision-making",
                "Compliance awareness"
            ]
        }
    ]

    const faqs = [
        {
            question: "How does AI governance accelerate rather than slow down innovation?",
            answer: "Proper governance provides clear guardrails that enable teams to move fast with confidence. Instead of ad-hoc risk assessments for every initiative, our frameworks give pre-approved pathways for common use cases, dramatically reducing approval times whilst maintaining compliance."
        },
        {
            question: "What is the AI Initiative Triage Service?",
            answer: "Aligned with the UK Government&apos;s AI Management Essentials (AIME) tool, our triage service helps you catalogue AI use cases, assess them against EU AI Act criteria, identify high-risk initiatives, and plan validation efforts. It&apos;s particularly valuable for regulated industries."
        },
        {
            question: "How do you ensure compliance with evolving regulations like the EU AI Act?",
            answer: "We build adaptive frameworks that align with current regulations whilst being flexible enough to accommodate future changes. Our approach includes regular compliance reviews, regulatory monitoring, and framework updates to keep you ahead of regulatory evolution."
        },
        {
            question: "Can you help with sector-specific compliance requirements?",
            answer: "Absolutely. We have deep experience with FDA/EMA requirements for Life Sciences, FCA regulations for Financial Services, NHS Digital Standards for healthcare, and GxP validation for pharmaceuticals. Our frameworks are tailored to your industry&apos;s specific requirements."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Move Fast Without Breaking Things"
                subheadline="AI governance that enables innovation whilst ensuring compliance, ethics, and trust"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Responsible AI at Scale
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            AI governance isn&apos;t about slowing down - it&apos;s about accelerating with confidence. As regulations evolve and stakeholder scrutiny increases, organisations need frameworks that enable responsible innovation.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Attercop&apos;s Responsible AI Governance services help you navigate the complexities of ethical, compliant, and secure AI implementation. We create tailored frameworks that balance innovation with responsibility, particularly critical for regulated industries like Life Sciences, Public Sector, and Critical National Infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Governance Philosophy */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Our Governance Philosophy
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Enable, Don&apos;t Obstruct
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• Governance as an accelerator</li>
                                    <li>• Clear guardrails for innovation</li>
                                    <li>• Risk-proportionate controls</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    Practical, Not Theoretical
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• Implementable frameworks</li>
                                    <li>• Real-world applicability</li>
                                    <li>• Measurable outcomes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Components */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Tailored AI Governance Frameworks
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {frameworks.map((framework, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <framework.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {framework.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {framework.items.map((item, idx) => (
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

            {/* Compliance Standards */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            Compliance & Regulatory Alignment
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">UK & European</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• UK AI Management Essentials (AIME)</li>
                                    <li>• EU AI Act readiness</li>
                                    <li>• ICO AI Guidance</li>
                                    <li>• NHS AI Standards</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">International</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• ISO/IEC 23053 & 23894</li>
                                    <li>• IEEE Standards</li>
                                    <li>• NIST AI Risk Management</li>
                                    <li>• Singapore Model AI Governance</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Industry-Specific</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• FDA/EMA for Life Sciences</li>
                                    <li>• FCA for Financial Services</li>
                                    <li>• NHS Digital Standards</li>
                                    <li>• GxP Validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Lines of Defence */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Three Lines of Defence Model
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-sea-green rounded-full flex items-center justify-center text-white font-display text-xl font-bold">
                                        1
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">
                                        First Line: Operational Management
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-midnight/70 ml-16">
                                    <li>• Day-to-day risk management</li>
                                    <li>• Control implementation</li>
                                    <li>• Process ownership</li>
                                </ul>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center text-white font-display text-xl font-bold">
                                        2
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">
                                        Second Line: Risk & Compliance Functions
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-midnight/70 ml-16">
                                    <li>• Framework development</li>
                                    <li>• Monitoring and reporting</li>
                                    <li>• Advisory support</li>
                                </ul>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-midnight rounded-full flex items-center justify-center text-white font-display text-xl font-bold">
                                        3
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">
                                        Third Line: Internal Audit
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-midnight/70 ml-16">
                                    <li>• Independent assurance</li>
                                    <li>• Effectiveness testing</li>
                                    <li>• Board reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="AI Governance FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Build Your AI Governance Framework
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Governance that enables innovation. Compliance that drives confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Start Governance Assessment</Link>
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
