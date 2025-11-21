import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Brain, Layers, Shield } from "lucide-react"

export default function GenerativeAIPage() {
    const stats = [
        { value: "90%", label: "Hallucination Reduction" },
        { value: "70%", label: "Time Savings" },
        { value: "100%", label: "Compliance Maintained" },
        { value: "3x", label: "Productivity Gain" }
    ]

    const ctas = [
        { text: "Explore GenAI Solutions", href: "/contact" },
        { text: "Book Technical Demo", href: "/contact", variant: "outline" as const }
    ]

    const capabilities = [
        {
            icon: Brain,
            title: "Knowledge Synthesis",
            items: [
                "Research automation",
                "Report generation",
                "Insight extraction",
                "Documentation creation"
            ]
        },
        {
            icon: Sparkles,
            title: "Content Creation",
            items: [
                "Marketing materials",
                "Technical documentation",
                "Training content",
                "Personalised communications"
            ]
        },
        {
            icon: Layers,
            title: "Analysis & Intelligence",
            items: [
                "Market analysis",
                "Competitive intelligence",
                "Trend identification",
                "Scenario generation"
            ]
        },
        {
            icon: Shield,
            title: "Customer Experience",
            items: [
                "Intelligent chatbots",
                "Support automation",
                "Personalised recommendations",
                "Dynamic FAQs"
            ]
        }
    ]

    const faqs = [
        {
            question: "How do you reduce hallucinations in generative AI?",
            answer: "We&apos;re pioneers in integrating knowledge graphs with LLMs. By grounding generation in structured, verified knowledge, we achieve 90% reduction in hallucinations compared to generic approaches. Every output is traceable to source knowledge."
        },
        {
            question: "Can you integrate with our existing systems and data?",
            answer: "Absolutely. We build cloud-native solutions on Azure and AWS that integrate seamlessly with your existing infrastructure. Our API-first architecture ensures compatibility with your current systems whilst maintaining enterprise security."
        },
        {
            question: "How do you ensure generated content is compliant and ethical?",
            answer: "We implement comprehensive validation frameworks including bias detection, fairness metrics, regulatory alignment, and audit trails. Every generation includes confidence scoring and source attribution for transparency."
        },
        {
            question: "What&apos;s the difference between fine-tuning and knowledge enhancement?",
            answer: "Fine-tuning adapts model weights for domain-specific language. Knowledge enhancement injects structured knowledge at inference time. We use both approaches strategically - fine-tuning for style and terminology, knowledge enhancement for accuracy and explainability."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Generative AI That Knows Your Business"
                subheadline="From content creation to knowledge synthesis - grounded in your data, aligned with your goals"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Beyond Generic Generation
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Generic ChatGPT wrappers won&apos;t transform your business. You need generative AI that understands your domain, speaks your language, and delivers reliable, contextual outputs.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Attercop excels in designing and deploying generative AI solutions that combine state-of-the-art generation with enterprise knowledge. We&apos;re pioneers in integrating knowledge graphs with LLMs, delivering contextually richer, more accurate, and explainable AI solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Knowledge Enhancement */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6 text-center">
                            Knowledge-Enhanced Generation
                        </h2>
                        <p className="text-xl text-midnight/70 mb-12 text-center">
                            The Attercop Difference: We don&apos;t just prompt engineer - we knowledge engineer.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                    Structured Knowledge Integration
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• Enterprise knowledge graphs</li>
                                    <li>• Domain ontologies</li>
                                    <li>• Contextual embeddings</li>
                                    <li>• Semantic relationships</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                    Benefits
                                </h3>
                                <ul className="space-y-3 text-midnight/70">
                                    <li>• 90% reduction in hallucinations</li>
                                    <li>• Domain-specific accuracy</li>
                                    <li>• Explainable outputs</li>
                                    <li>• Consistent quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Categories */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            End-to-End Generative Applications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {capabilities.map((capability, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <capability.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {capability.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {capability.items.map((item, idx) => (
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

            {/* Platform Architecture */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            Platform Architecture
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Azure Integration</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• Azure OpenAI Service</li>
                                    <li>• Cognitive Services</li>
                                    <li>• Azure AI Search</li>
                                    <li>• Container deployment</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">AWS Capabilities</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• Bedrock integration</li>
                                    <li>• SageMaker deployment</li>
                                    <li>• Lambda functions</li>
                                    <li>• API Gateway</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 bg-white/10 rounded-xl p-8">
                            <h3 className="font-display text-2xl font-bold mb-4">Scalability Features</h3>
                            <div className="grid md:grid-cols-4 gap-4 text-pearl/90">
                                <div>• Auto-scaling</div>
                                <div>• Load balancing</div>
                                <div>• Caching layers</div>
                                <div>• CDN integration</div>
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
                            Success Story
                        </h2>
                        <div className="bg-pearl rounded-xl p-8">
                            <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                AI-Driven Sustainability Platform
                            </h3>
                            <div className="space-y-4 text-midnight/70">
                                <p>
                                    <span className="font-semibold text-midnight">Challenge:</span> Deliver personalised sustainability guidance to 90,000 providers
                                </p>
                                <p>
                                    <span className="font-semibold text-midnight">Solution:</span> Knowledge-enhanced GenAI expert system
                                </p>
                                <p>
                                    <span className="font-semibold text-midnight">Impact:</span> Monetisable connections, actionable insights, accelerated sustainability
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Generative AI FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Transform Your Business with Intelligent Generation
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Move beyond generic AI. Deploy generation that understands your world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Explore GenAI Solutions</Link>
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
