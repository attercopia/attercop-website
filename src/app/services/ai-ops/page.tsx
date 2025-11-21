import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Activity, GitBranch, Gauge, Shield } from "lucide-react"

export default function AIOpsPage() {
    const stats = [
        { value: "99.9%", label: "Model Uptime" },
        { value: "50%", label: "Faster Deployment" },
        { value: "80%", label: "Reduced Incidents" },
        { value: "24/7", label: "Monitoring" }
    ]

    const ctas = [
        { text: "Assess Your MLOps Maturity", href: "/contact" },
        { text: "View MLOps Framework", href: "/contact", variant: "outline" as const }
    ]

    const mlopsCapabilities = [
        {
            icon: GitBranch,
            title: "ML Lifecycle Management",
            items: [
                "Experiment tracking and versioning",
                "Model registry and cataloguing",
                "Automated model deployment",
                "A/B testing frameworks",
                "Rollback and recovery"
            ]
        },
        {
            icon: Activity,
            title: "Model Monitoring & Governance",
            items: [
                "Performance monitoring dashboards",
                "Data drift detection",
                "Model drift alerts",
                "Automated retraining triggers",
                "Compliance audit trails"
            ]
        },
        {
            icon: Gauge,
            title: "CI/CD for ML",
            items: [
                "Automated testing pipelines",
                "Continuous integration",
                "Staged deployment strategies",
                "Canary releases",
                "Blue-green deployments"
            ]
        },
        {
            icon: Shield,
            title: "Infrastructure Optimisation",
            items: [
                "Resource auto-scaling",
                "Cost optimisation",
                "Multi-cloud orchestration",
                "GPU management",
                "Performance tuning"
            ]
        }
    ]

    const faqs = [
        {
            question: "What is MLOps and why do I need it?",
            answer: "MLOps (Machine Learning Operations) is the practice of deploying and maintaining ML models in production reliably and efficiently. Without MLOps, models degrade over time, deployments are manual and error-prone, and you can&apos;t track what&apos;s actually running in production. MLOps brings DevOps best practices to ML."
        },
        {
            question: "How do you detect when models need retraining?",
            answer: "We implement comprehensive monitoring for data drift (input distribution changes), concept drift (relationship changes), and performance degradation. Automated alerts trigger when metrics fall below thresholds, and we can configure automatic retraining pipelines based on your requirements."
        },
        {
            question: "Can you help with existing models already in production?",
            answer: "Absolutely. We often start by assessing your current MLOps maturity, then implement monitoring and governance around existing models before building out full CI/CD pipelines. We can work with models deployed on any platform."
        },
        {
            question: "What tools do you use for MLOps?",
            answer: "We&apos;re platform-agnostic and select tools based on your needs. Common tools include MLflow, Kubeflow, SageMaker, Azure ML, Weights & Biases, and custom solutions. We focus on open standards to avoid vendor lock-in."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Production ML That Stays Reliable"
                subheadline="MLOps frameworks that ensure your models perform consistently, deploy safely, and scale efficiently"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            From Notebook to Production
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Getting a model to work in a Jupyter notebook is the easy part. The hard part is deploying it reliably, monitoring its performance, and maintaining it over time as data and business conditions change.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Attercop&apos;s AI Ops services bring DevOps best practices to machine learning. We build MLOps frameworks that automate deployment, monitor performance, detect drift, and ensure your models stay accurate and reliable in production.
                        </p>
                    </div>
                </div>
            </section>

            {/* MLOps Capabilities */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Comprehensive MLOps Capabilities
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {mlopsCapabilities.map((capability, index) => (
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

            {/* MLOps Maturity Model */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            MLOps Maturity Journey
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-midnight/20 rounded-full flex items-center justify-center text-midnight font-display text-xl font-bold">
                                        0
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">Level 0: Manual</h3>
                                </div>
                                <p className="text-midnight/70 ml-16">
                                    Manual deployment, no monitoring, models degrade silently
                                </p>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-deep-teal/30 rounded-full flex items-center justify-center text-deep-teal font-display text-xl font-bold">
                                        1
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">Level 1: Monitored</h3>
                                </div>
                                <p className="text-midnight/70 ml-16">
                                    Performance monitoring, drift detection, manual retraining
                                </p>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-sea-green/50 rounded-full flex items-center justify-center text-sea-green font-display text-xl font-bold">
                                        2
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">Level 2: Automated</h3>
                                </div>
                                <p className="text-midnight/70 ml-16">
                                    CI/CD pipelines, automated testing, staged deployments
                                </p>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-sea-green rounded-full flex items-center justify-center text-white font-display text-xl font-bold">
                                        3
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight">Level 3: Continuous</h3>
                                </div>
                                <p className="text-midnight/70 ml-16">
                                    Automated retraining, continuous deployment, self-healing systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
                            MLOps Technology Stack
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Experiment Tracking</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• MLflow</li>
                                    <li>• Weights & Biases</li>
                                    <li>• Neptune.ai</li>
                                    <li>• Custom solutions</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Deployment Platforms</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Kubeflow</li>
                                    <li>• AWS SageMaker</li>
                                    <li>• Azure ML</li>
                                    <li>• Kubernetes</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold mb-4 text-sea-green">Monitoring Tools</h3>
                                <ul className="space-y-2 text-pearl/90">
                                    <li>• Prometheus</li>
                                    <li>• Grafana</li>
                                    <li>• Evidently AI</li>
                                    <li>• Custom dashboards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="AI Ops FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Build Production-Ready ML Systems
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Deploy with confidence. Monitor continuously. Scale efficiently.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Assess Your MLOps Maturity</Link>
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
