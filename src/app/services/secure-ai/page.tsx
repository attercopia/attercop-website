import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react"

export default function SecureAIPage() {
    const stats = [
        { value: "0", label: "Security Breaches" },
        { value: "100%", label: "Compliance" },
        { value: "99.99%", label: "Uptime" },
        { value: "24/7", label: "Monitoring" }
    ]

    const ctas = [
        { text: "Security Assessment", href: "/contact" },
        { text: "Download Security Guide", href: "/contact", variant: "outline" as const }
    ]

    const securityLayers = [
        {
            icon: Shield,
            title: "Threat Prevention",
            items: [
                "Proactive threat modelling",
                "Vulnerability assessments",
                "Penetration testing",
                "Security by design principles"
            ]
        },
        {
            icon: AlertTriangle,
            title: "Guardrails Implementation",
            items: [
                "Input validation frameworks",
                "Output filtering mechanisms",
                "Rate limiting and throttling",
                "Behavioural boundaries"
            ]
        },
        {
            icon: Lock,
            title: "Data Privacy",
            items: [
                "End-to-end encryption",
                "Differential privacy techniques",
                "Federated learning approaches",
                "Secure multi-party computation"
            ]
        },
        {
            icon: Eye,
            title: "Robust Security Integration",
            items: [
                "Security embedded at every layer",
                "Defence in depth strategy",
                "Zero-trust architecture",
                "Continuous security validation"
            ]
        }
    ]

    const faqs = [
        {
            question: "What are the unique security challenges in AI systems?",
            answer: "AI systems face unique threats including model theft, adversarial attacks, training data poisoning, model inversion, and data leakage. We address these with multi-layer security including model encryption, input validation, output filtering, and continuous monitoring."
        },
        {
            question: "How do you protect AI models from adversarial attacks?",
            answer: "We implement robust input validation, adversarial training, output filtering, and behavioural monitoring. Our defence-in-depth approach ensures that even if one layer is compromised, others maintain security. We also conduct regular penetration testing specifically for AI systems."
        },
        {
            question: "Can you ensure data privacy whilst training AI models?",
            answer: "Yes. We use techniques like differential privacy, federated learning, and secure multi-party computation to train models without exposing sensitive data. All data is encrypted at rest and in transit, with strict access controls and audit trails."
        },
        {
            question: "What compliance standards do you support?",
            answer: "We support ISO 27001, SOC 2 Type II, GDPR, HIPAA, and PCI DSS. Our security frameworks are designed to meet the most stringent regulatory requirements whilst maintaining operational efficiency."
        }
    ]

    return (
        <main>
            <PageHero
                headline="AI Security Without Compromise"
                subheadline="Robust security integrated into every AI solution - protecting your data, models, and operations"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Security at the Core of AI Innovation
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            In the race to deploy AI, security often becomes an afterthought. At Attercop, we believe robust security should be integrated into AI solutions from the ground up, not bolted on later.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Our Secure AI services ensure your AI initiatives are protected against threats whilst maintaining privacy and compliance. We address the unique security challenges of AI systems - from model poisoning to data leakage, from adversarial attacks to privacy breaches.
                        </p>
                    </div>
                </div>
            </section>

            {/* Security Challenges */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Security Challenges in AI
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                    Model Security
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• Model theft and extraction attacks</li>
                                    <li>• Adversarial input manipulation</li>
                                    <li>• Training data poisoning</li>
                                    <li>• Model inversion attacks</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                    Data Protection
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• Privacy preservation in training data</li>
                                    <li>• Secure data pipelines</li>
                                    <li>• Anonymisation and pseudonymisation</li>
                                    <li>• Cross-border data compliance</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                    Operational Security
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• Access control and authentication</li>
                                    <li>• Audit trail maintenance</li>
                                    <li>• Incident detection and response</li>
                                    <li>• Security monitoring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Framework */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Our Security Framework
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {securityLayers.map((layer, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <layer.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {layer.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {layer.items.map((item, idx) => (
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

            {/* Protection Layers */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            Defence in Depth
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="font-display text-xl font-bold mb-3 text-sea-green">Layer 1: Perimeter Security</h3>
                                <ul className="space-y-2 text-pearl/90 text-sm">
                                    <li>• WAF protection</li>
                                    <li>• DDoS mitigation</li>
                                    <li>• API security</li>
                                    <li>• Network segmentation</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="font-display text-xl font-bold mb-3 text-sea-green">Layer 2: Application Security</h3>
                                <ul className="space-y-2 text-pearl/90 text-sm">
                                    <li>• Secure coding practices</li>
                                    <li>• Input sanitisation</li>
                                    <li>• Authentication and authorisation</li>
                                    <li>• Session management</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="font-display text-xl font-bold mb-3 text-sea-green">Layer 3: Model Security</h3>
                                <ul className="space-y-2 text-pearl/90 text-sm">
                                    <li>• Model encryption</li>
                                    <li>• Secure model serving</li>
                                    <li>• Version control</li>
                                    <li>• Access logging</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="font-display text-xl font-bold mb-3 text-sea-green">Layer 4: Data Security</h3>
                                <ul className="space-y-2 text-pearl/90 text-sm">
                                    <li>• Encryption at rest and in transit</li>
                                    <li>• Key management</li>
                                    <li>• Data loss prevention</li>
                                    <li>• Privacy-preserving techniques</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12">
                            Compliance & Standards
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            <div className="bg-pearl rounded-xl p-6">
                                <div className="font-display text-2xl font-bold text-sea-green mb-2">ISO 27001</div>
                                <div className="text-sm text-midnight/60">Information Security</div>
                            </div>
                            <div className="bg-pearl rounded-xl p-6">
                                <div className="font-display text-2xl font-bold text-sea-green mb-2">SOC 2</div>
                                <div className="text-sm text-midnight/60">Type II</div>
                            </div>
                            <div className="bg-pearl rounded-xl p-6">
                                <div className="font-display text-2xl font-bold text-sea-green mb-2">GDPR</div>
                                <div className="text-sm text-midnight/60">Compliance</div>
                            </div>
                            <div className="bg-pearl rounded-xl p-6">
                                <div className="font-display text-2xl font-bold text-sea-green mb-2">HIPAA</div>
                                <div className="text-sm text-midnight/60">Ready</div>
                            </div>
                            <div className="bg-pearl rounded-xl p-6">
                                <div className="font-display text-2xl font-bold text-sea-green mb-2">PCI DSS</div>
                                <div className="text-sm text-midnight/60">Compatible</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Secure AI FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Secure Your AI Investment
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Deploy AI with confidence. Security integrated from day one.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Security Assessment</Link>
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
