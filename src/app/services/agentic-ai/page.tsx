import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Network, Shield, Zap, RefreshCw, Database, Eye } from "lucide-react"

export default function AgenticAIPage() {
    const stats = [
        { value: "40%", label: "Efficiency Gains" },
        { value: "24/7", label: "Autonomous Operation" },
        { value: "100%", label: "Auditable Actions" },
        { value: "10x", label: "Faster Development" }
    ]

    const ctas = [
        { text: "Discuss Your Agentic Use Case", href: "/contact" },
        { text: "Download Framework Guide", href: "/contact", variant: "outline" as const }
    ]

    const problems = [
        {
            title: "Duplicated Effort & Inconsistency",
            description: "Development teams repeatedly build the same core functionalities for orchestration, tool access, and memory, leading to wasted resources and brittle, inconsistent architectures."
        },
        {
            title: "No Reusability",
            description: "Valuable components—specialist agents and tools—are locked within single projects, preventing the organisation from building a library of reusable, strategic assets."
        },
        {
            title: "The Governance Blind Spot",
            description: "Without a standardised way to track and log agent actions, it is impossible to ensure security, manage costs, or prove compliance. Autonomous systems become ungovernable black boxes."
        },
        {
            title: "Failure to Scale",
            description: "One-off agentic projects cannot be integrated or scaled into a true enterprise capability, leaving their potential unrealised."
        }
    ]

    const components = [
        {
            icon: Network,
            title: "Orchestration Engine",
            subtitle: "The Central Brain",
            description: "Deconstructs high-level business goals into executable plans, assigning tasks to specialist agents and managing end-to-end workflows.",
            features: [
                "Task decomposition and planning",
                "Agent crew management",
                "Workflow execution and monitoring",
                "Error handling and recovery"
            ]
        },
        {
            icon: RefreshCw,
            title: "Agent & Tool Registries",
            subtitle: "Reusable Asset Library",
            description: "Central library of pre-approved, versioned, and reusable agents and tools that enforce security and prevent code duplication.",
            features: [
                "Version-controlled components",
                "Security-approved tools",
                "Rapid solution assembly",
                "Eliminate code duplication"
            ]
        },
        {
            icon: Zap,
            title: "Standardised Abstractions",
            subtitle: "Common Development SDK",
            description: "Unified SDK that defines how agents and tools are built, ensuring consistency, interoperability, and automatic governance integration.",
            features: [
                "Consistent development patterns",
                "Interoperable components",
                "Automatic governance hooks",
                "Simplified onboarding"
            ]
        },
        {
            icon: Database,
            title: "Memory & Knowledge Hub",
            subtitle: "Contextual Intelligence",
            description: "Sophisticated memory system providing agents with short-term context and secure access to enterprise knowledge and data.",
            features: [
                "Short-term task context",
                "Long-term knowledge access",
                "Secure data handling",
                "Auditable memory operations"
            ]
        },
        {
            icon: Eye,
            title: "Observability & Governance Layer",
            subtitle: "Built-in Transparency",
            description: "Complete system of record capturing detailed, auditable trails of every action, decision, and data access for full governance.",
            features: [
                "Complete data lineage",
                "Cost tracking per agent",
                "Performance metrics",
                "Compliance-ready audit trails"
            ]
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            subtitle: "Enterprise-Grade Protection",
            description: "Integrated security controls and compliance frameworks ensuring agents operate within approved boundaries.",
            features: [
                "Role-based access control",
                "Action approval workflows",
                "Compliance policy enforcement",
                "Threat detection and prevention"
            ]
        }
    ]

    const benefits = [
        {
            title: "Accelerate Innovation",
            subtitle: "10x Faster Time-to-Market",
            description: "Drastically reduce development time for new agentic solutions. Core plumbing and reusable components let developers focus on business logic, not infrastructure.",
            impact: [
                "Weeks, not months to production",
                "Pre-built orchestration patterns",
                "Proven component library",
                "Rapid prototyping to deployment"
            ]
        },
        {
            title: "Build Strategic Assets",
            subtitle: "Compounding Capability Growth",
            description: "Every agent and tool built within the Fabric becomes a reusable asset, compounding your organisation's AI capabilities over time.",
            impact: [
                "Reusable specialist agents",
                "Growing tool ecosystem",
                "Cross-project knowledge sharing",
                "Cumulative competitive advantage"
            ]
        },
        {
            title: "Enable Governance by Design",
            subtitle: "Proactive Risk Management",
            description: "Move from reactive to proactive governance. Built-in observability provides complete transparency for risk management, security, and compliance.",
            impact: [
                "Full action auditability",
                "Real-time cost monitoring",
                "Compliance-ready logging",
                "Integration with APAG platform"
            ]
        },
        {
            title: "Scale with Confidence",
            subtitle: "Enterprise-Wide Deployment",
            description: "Robust, secure, and repeatable patterns enable moving agentic AI from departmental experiments to core enterprise capability.",
            impact: [
                "Production-grade reliability",
                "Cross-team standardisation",
                "Proven scaling patterns",
                "Enterprise support and SLAs"
            ]
        }
    ]

    const useCases = [
        {
            industry: "Private Equity",
            useCase: "Automated Due Diligence",
            challenge: "Manual review of hundreds of documents across legal, financial, and technical domains taking weeks per deal",
            solution: "Multi-agent crew with specialist agents for legal review, financial analysis, technical assessment, and risk evaluation coordinated by orchestration engine",
            results: [
                "60% reduction in due diligence time",
                "100% document coverage",
                "Consistent evaluation criteria",
                "Full audit trail for investment committees"
            ]
        },
        {
            industry: "Financial Services",
            useCase: "Intelligent Trade Surveillance",
            challenge: "Monitoring thousands of daily trades for compliance violations and market manipulation patterns",
            solution: "Agent fleet continuously analysing trade patterns, communications, and market data with real-time alerting and investigation workflows",
            results: [
                "24/7 continuous monitoring",
                "90% reduction in false positives",
                "Complete regulatory audit trails",
                "Proactive risk identification"
            ]
        },
        {
            industry: "Life Sciences",
            useCase: "Clinical Trial Document Processing",
            challenge: "Extracting and validating data from thousands of clinical trial documents for regulatory submissions",
            solution: "Specialist agents for document classification, data extraction, validation, and regulatory compliance checking working in coordinated workflow",
            results: [
                "70% faster document processing",
                "99.9% extraction accuracy",
                "Automated compliance validation",
                "GxP-compliant audit trails"
            ]
        },
        {
            industry: "Professional Services",
            useCase: "Proposal Generation & Knowledge Mining",
            challenge: "Creating client proposals requiring synthesis of past projects, pricing models, and technical approaches",
            solution: "Agent crew mining knowledge graphs, assembling relevant case studies, generating pricing, and drafting proposal sections",
            results: [
                "75% reduction in proposal time",
                "Consistent quality and pricing",
                "Leveraged institutional knowledge",
                "Higher win rates"
            ]
        }
    ]

    const implementationPhases = [
        {
            phase: "Phase 1: Foundation",
            duration: "2-3 Weeks",
            focus: "Infrastructure Setup",
            deliverables: [
                "Fabric infrastructure deployment",
                "Core registries configured",
                "Development environment setup",
                "Team training on SDK"
            ]
        },
        {
            phase: "Phase 2: Pilot Agent",
            duration: "3-4 Weeks",
            focus: "First Use Case",
            deliverables: [
                "Initial specialist agents built",
                "Tools and workflows defined",
                "Orchestration patterns tested",
                "Governance integration validated"
            ]
        },
        {
            phase: "Phase 3: Production",
            duration: "2-3 Weeks",
            focus: "Deployment & Optimisation",
            deliverables: [
                "Production deployment",
                "Performance optimisation",
                "Observability dashboards",
                "Documentation and handover"
            ]
        },
        {
            phase: "Phase 4: Scale",
            duration: "Ongoing",
            focus: "Expansion",
            deliverables: [
                "Additional use cases",
                "Growing agent library",
                "Cross-team adoption",
                "Continuous improvement"
            ]
        }
    ]

    const comparison = [
        {
            aspect: "Development Time",
            traditional: "3-6 months per solution",
            fabric: "2-4 weeks with Fabric",
            advantage: "10x faster"
        },
        {
            aspect: "Reusability",
            traditional: "Siloed, one-off implementations",
            fabric: "Central registry of reusable components",
            advantage: "Compounding value"
        },
        {
            aspect: "Governance",
            traditional: "Manual auditing, blind spots",
            fabric: "Built-in observability and compliance",
            advantage: "100% visibility"
        },
        {
            aspect: "Scalability",
            traditional: "Difficult to expand beyond pilot",
            fabric: "Designed for enterprise scale",
            advantage: "Proven patterns"
        },
        {
            aspect: "Security",
            traditional: "Bolted-on, inconsistent",
            fabric: "Security by design",
            advantage: "Risk mitigation"
        }
    ]

    const faqs = [
        {
            question: "How is this different from LangChain or other agent frameworks?",
            answer: "While open-source frameworks provide building blocks, the Agentic Fabric is an enterprise-grade platform with built-in governance, security, and scalability. It includes the observability layer, central registries, and production-grade orchestration that frameworks lack. Think of it as the difference between having LEGO bricks versus a complete architectural blueprint with engineering support."
        },
        {
            question: "Can we integrate existing agents and tools?",
            answer: "Yes. The Fabric's standardised abstractions allow you to wrap existing agents and tools, bringing them into the governed ecosystem. We provide migration support to help you preserve your existing investments whilst gaining Fabric benefits."
        },
        {
            question: "What about costs and LLM spend?",
            answer: "The Observability Layer tracks costs per agent, per action, and per user, giving you complete visibility and control. Most clients see 30-50% reduction in LLM costs through optimised orchestration and elimination of redundant calls."
        },
        {
            question: "How long until we see value?",
            answer: "First pilot agent typically delivers value within 6-8 weeks. However, the real ROI compounds over time as your agent library grows and development cycles shorten from months to weeks."
        },
        {
            question: "What about regulatory compliance and auditability?",
            answer: "The Governance Layer captures complete audit trails automatically - every action, decision, data access, and reasoning chain. This integrates with our Attercop Platform for AI Governance (APAG) to provide compliance reporting for FDA, FCA, GDPR, and other frameworks."
        },
        {
            question: "Do we need specialist AI talent to use this?",
            answer: "The Fabric dramatically lowers the bar. Your existing developers can build agents using the SDK. We provide training, patterns, and ongoing support. Many clients have business analysts contributing to agent development within weeks."
        }
    ]

    return (
        <main>
            <PageHero
                headline="The Enterprise Control Plane for Autonomous AI"
                subheadline="Go from single agent experiments to a governed, scalable fleet. Build production-grade agentic systems that deliver real value."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/agentic-ai.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Beyond Chatbots: True Autonomous AI
                        </h2>
                        <p className="text-xl font-bold text-midnight mb-6">
                            Agentic AI doesn&apos;t just respond—it acts, reasons, and achieves goals autonomously.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            While the world is building chatbots and copilots that wait for human input, forward-thinking organisations are deploying autonomous agents that take initiative, make decisions, and execute complex workflows without constant supervision.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            But there&apos;s a problem: enterprises rushing to leverage Agentic AI are creating an internal &ldquo;wild west&rdquo; of duplicated effort, ungovernable black boxes, and failed attempts to scale beyond pilot projects.
                        </p>
                        <div className="bg-deep-teal/10 border-l-4 border-deep-teal p-6 rounded-r-lg">
                            <p className="font-bold text-midnight mb-2">The Attercop Agentic Fabric is the strategic antidote to this chaos.</p>
                            <p className="text-midnight/70">
                                A foundational software framework that enables enterprises to build, deploy, and govern sophisticated multi-agent AI systems at scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem: Agentic Chaos */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            The Problem: The End of Agentic Chaos
                        </h2>
                        <p className="text-xl text-midnight/60 mb-16 text-center max-w-3xl mx-auto">
                            Without a foundational strategy, agentic AI initiatives create more problems than they solve
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {problems.map((problem, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 border border-amber/20">
                                    <div className="flex items-start gap-3 mb-4">
                                        <span className="text-2xl">⚠️</span>
                                        <h3 className="font-display text-xl font-bold text-midnight">
                                            {problem.title}
                                        </h3>
                                    </div>
                                    <p className="text-midnight/70 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution: Attercop Agentic Fabric */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6 text-center">
                            The Attercop Agentic Fabric
                        </h2>
                        <p className="text-xl text-sea-green font-semibold mb-4 text-center">
                            Five Core Components That Transform Agentic Chaos Into Enterprise Capability
                        </p>
                        <p className="text-lg text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            Not a single application, but an architectural backbone providing essential components for production-grade agentic solutions
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {components.map((component, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="w-12 h-12 bg-deep-teal/10 rounded-lg flex items-center justify-center mb-6">
                                        <component.icon className="w-6 h-6 text-deep-teal" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-2">
                                        {component.title}
                                    </h3>
                                    <p className="text-sm text-sea-green font-semibold mb-4">
                                        {component.subtitle}
                                    </p>
                                    <p className="text-sm text-midnight/70 mb-6 leading-relaxed">
                                        {component.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {component.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                <span className="text-sea-green mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
                            Customer Value Proposition
                        </h2>
                        <p className="text-xl text-pearl/80 mb-16 text-center">
                            Four transformative benefits of adopting the Agentic Fabric
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                                    <div className="flex items-start gap-3 mb-4">
                                        <span className="text-3xl font-bold text-sea-green">{index + 1}</span>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold mb-1">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sea-green font-semibold mb-4">
                                                {benefit.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-pearl/90 mb-6 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <p className="text-xs font-bold text-sea-green mb-3">KEY IMPACTS</p>
                                        <ul className="space-y-2">
                                            {benefit.impact.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-pearl/80">
                                                    <span className="text-sea-green">✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Traditional Approach vs. Agentic Fabric
                        </h2>

                        <div className="space-y-6">
                            {comparison.map((item, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-6">
                                    <div className="grid md:grid-cols-4 gap-6 items-center">
                                        <div>
                                            <h3 className="font-bold text-midnight">{item.aspect}</h3>
                                        </div>
                                        <div className="md:col-span-1">
                                            <p className="text-sm text-midnight/50 mb-1">Traditional</p>
                                            <p className="text-sm text-midnight/70">{item.traditional}</p>
                                        </div>
                                        <div className="md:col-span-1">
                                            <p className="text-sm text-midnight/50 mb-1">With Fabric</p>
                                            <p className="text-sm text-sea-green font-semibold">{item.fabric}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block bg-sea-green/10 text-sea-green font-bold text-sm px-4 py-2 rounded-full">
                                                {item.advantage}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                        Real-World Agentic Applications
                    </h2>
                    <p className="text-xl text-midnight/60 mb-16 text-center max-w-3xl mx-auto">
                        How enterprises are deploying the Agentic Fabric to solve complex challenges
                    </p>

                    <div className="max-w-5xl mx-auto space-y-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="text-3xl font-bold text-sea-green">{index + 1}</span>
                                    <div>
                                        <p className="text-sm font-bold text-deep-teal mb-1">{useCase.industry}</p>
                                        <h3 className="font-display text-2xl font-bold text-midnight">
                                            {useCase.useCase}
                                        </h3>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p className="text-xs font-bold text-midnight/50 mb-2">CHALLENGE</p>
                                        <p className="text-midnight/70 mb-4">{useCase.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-midnight/50 mb-2">FABRIC SOLUTION</p>
                                        <p className="text-midnight/70">{useCase.solution}</p>
                                    </div>
                                </div>

                                <div className="bg-sea-green/10 rounded-lg p-6">
                                    <p className="font-bold text-midnight mb-3">RESULTS</p>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {useCase.results.map((result, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                <span className="text-sea-green">✓</span>
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Implementation Roadmap
                        </h2>
                        <p className="text-xl text-midnight/60 mb-16 text-center">
                            From pilot to production in 7-10 weeks
                        </p>

                        <div className="space-y-6">
                            {implementationPhases.map((phase, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-sea-green rounded-full flex items-center justify-center text-white font-display text-xl font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 mb-2">
                                                <h3 className="font-display text-2xl font-bold text-midnight">{phase.phase}</h3>
                                                <span className="text-sm text-deep-teal font-semibold">({phase.duration})</span>
                                            </div>
                                            <p className="text-midnight/60 mb-4">{phase.focus}</p>
                                        </div>
                                    </div>

                                    <div className="ml-16">
                                        <p className="text-xs font-bold text-midnight mb-3">DELIVERABLES</p>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {phase.deliverables.map((deliverable, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                    <span className="text-sea-green">✓</span>
                                                    <span>{deliverable}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Agentic AI FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Deploy Agentic AI at Scale?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Move from experiments to enterprise capability. Build governed, scalable agent fleets that deliver real value.
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
