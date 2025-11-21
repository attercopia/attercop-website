import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Target, Users, BarChart3 } from "lucide-react"

export default function MachineLearningPage() {
    const stats = [
        { value: "30+", label: "Years Experience" },
        { value: "95%", label: "Model Accuracy" },
        { value: "100+", label: "Models Deployed" },
        { value: "6", label: "Industries Served" }
    ]

    const ctas = [
        { text: "Discuss Your Use Case", href: "/contact" },
        { text: "View ML Portfolio", href: "/case-studies", variant: "outline" as const }
    ]

    const mlCapabilities = [
        {
            icon: TrendingUp,
            title: "Predictive Analytics",
            items: [
                "Demand forecasting",
                "Customer behaviour prediction",
                "Risk scoring models",
                "Time series analysis",
                "Anomaly detection"
            ]
        },
        {
            icon: Target,
            title: "Classification Systems",
            items: [
                "Document categorisation",
                "Image classification",
                "Sentiment analysis",
                "Fraud detection",
                "Quality assessment"
            ]
        },
        {
            icon: Users,
            title: "Clustering & Segmentation",
            items: [
                "Customer segmentation",
                "Pattern discovery",
                "Market analysis",
                "Behavioural grouping",
                "Anomaly clustering"
            ]
        },
        {
            icon: BarChart3,
            title: "Optimisation",
            items: [
                "Resource allocation",
                "Supply chain optimisation",
                "Pricing strategies",
                "Portfolio management",
                "Process optimisation"
            ]
        }
    ]

    const faqs = [
        {
            question: "How do you ensure ML models work in production?",
            answer: "We&apos;ve been deploying ML models since the 1990s. Our approach focuses on production-ready solutions from day one - robust data pipelines, comprehensive testing, monitoring frameworks, and MLOps practices that ensure models perform reliably at scale."
        },
        {
            question: "What&apos;s your approach to model selection?",
            answer: "We don&apos;t believe in one-size-fits-all. We evaluate multiple approaches - from classical ML to deep learning - and select based on your data, requirements, and constraints. Sometimes a simple model outperforms complex ones. We optimise for production performance, not research novelty."
        },
        {
            question: "How do you handle data quality issues?",
            answer: "Data quality is critical. We conduct thorough data assessment, implement cleaning and validation pipelines, and work with you to improve data collection processes. Our models are designed to be robust to real-world data imperfections."
        },
        {
            question: "Can you help with ongoing model maintenance?",
            answer: "Yes. ML models need continuous monitoring and retraining. We provide MLOps frameworks for automated monitoring, performance tracking, drift detection, and retraining pipelines to ensure your models stay accurate over time."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Bespoke ML That Solves Real Problems"
                subheadline="From predictive analytics to complex classification - custom machine learning solutions for your specific needs"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Tailored Machine Learning Excellence
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Attercop&apos;s machine learning expertise is geared towards delivering customised and practical solutions to meet client needs across industries and use cases. We don&apos;t believe in one-size-fits-all ML - every model we build is optimised for your specific requirements, data, and constraints.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Our team has been building and deploying ML solutions since the 1990s, giving us unparalleled experience in what works in production, not just in research papers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ML Capabilities */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Bespoke ML Model Development
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {mlCapabilities.map((capability, index) => (
                                <div key={index} className="bg-white rounded-xl p-8">
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

            {/* Domain Applications */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Domain-Specific Applications
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">Life Sciences</h3>
                                <ul className="space-y-2 text-midnight/70">
                                    <li>• Clinical outcome prediction</li>
                                    <li>• Drug interaction modelling</li>
                                    <li>• Patient risk stratification</li>
                                    <li>• Biomarker identification</li>
                                </ul>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">Financial Services</h3>
                                <ul className="space-y-2 text-midnight/70">
                                    <li>• Credit risk assessment</li>
                                    <li>• Trading algorithms</li>
                                    <li>• Fraud detection systems</li>
                                    <li>• Portfolio optimisation</li>
                                </ul>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">Manufacturing</h3>
                                <ul className="space-y-2 text-midnight/70">
                                    <li>• Predictive maintenance</li>
                                    <li>• Quality control</li>
                                    <li>• Supply chain optimisation</li>
                                    <li>• Process optimisation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MLOps Framework */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            MLOps Framework
                        </h2>
                        <p className="text-xl text-pearl/90 mb-12 text-center max-w-3xl mx-auto">
                            Production-ready ML requires robust operations. Our MLOps framework ensures your models stay accurate and reliable.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Model Lifecycle Management</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Version control and tracking</li>
                                    <li>• Experiment management</li>
                                    <li>• Model registry</li>
                                    <li>• Deployment automation</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Monitoring & Governance</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Performance monitoring</li>
                                    <li>• Drift detection</li>
                                    <li>• Automated retraining</li>
                                    <li>• Audit trails</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">CI/CD for ML</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Automated testing</li>
                                    <li>• Continuous integration</li>
                                    <li>• Staged deployments</li>
                                    <li>• Rollback capabilities</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Infrastructure Optimisation</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Resource scaling</li>
                                    <li>• Cost optimisation</li>
                                    <li>• Performance tuning</li>
                                    <li>• Multi-cloud support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Machine Learning FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Build ML That Works in Production
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        30+ years of experience. Production-ready solutions. Measurable results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Discuss Your Use Case</Link>
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
