import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GitBranch, Lock, Building2, MessageSquare, Shield, Cpu, Database, CheckCircle2, XCircle, ArrowRight } from "lucide-react"

export const metadata = {
    title: "Conversational AI Development | Flow Framework | Attercop",
    description: "Control unpredictable LLMs with our Flow framework for reliable business outcomes. 12-week implementation, full IP ownership, Azure-native deployment. Built for PE-backed firms.",
}

export default function ConversationalAIPage() {
    const stats = [
        { value: "12 weeks", label: "To Production" },
        { value: "95%", label: "Authentication Success" },
        { value: "100%", label: "Data Accuracy" },
        { value: "Full IP", label: "Ownership" }
    ]

    const ctas = [
        { text: "Book Discovery Session", href: "/contact" },
        { text: "Download Whitepaper", href: "/resources/insights/whitepapers", variant: "outline" as const }
    ]

    const differentiators = [
        {
            icon: GitBranch,
            title: "The Attercop Flow Framework",
            tagline: "Prevent Hijacking, Ensure Outcomes",
            description: "Our proprietary Flow framework solves the fundamental problem of LLM unpredictability. By imposing state-based structure, we ensure conversations stay on-task and reach successful outcomes—essential for regulated processes like insurance claims."
        },
        {
            icon: Lock,
            title: "Complete Ownership & Control",
            tagline: "Your Platform, Your IP",
            description: "Unlike vendor solutions that lock you into subscriptions, we deploy directly into your Azure tenant. You receive full, unencumbered licences for all components including our Flow framework—creating a strategic asset, not a liability."
        },
        {
            icon: Building2,
            title: "Proven Enterprise Delivery",
            tagline: "Built Like Financial Services Grade Systems",
            description: "Drawing from our experience building Agentic Mesh platforms for global life sciences and financial services, we deliver reusable, governable AI infrastructure—not just chatbots."
        }
    ]

    const flowComponents = [
        {
            title: "State-Based Conversation Maps",
            description: "Each conversation follows a definitive map with clear states, transitions, and outcomes. The AI cannot deviate from the designed flow, ensuring business processes complete successfully."
        },
        {
            title: "Reliable Data Collection",
            description: "Each state specifies required data points. The system ensures all necessary information is gathered accurately before proceeding, eliminating the 'I forgot to ask' problem."
        },
        {
            title: "Deterministic Tool Use",
            description: "API calls and system actions occur at designated states in the correct sequence. No more wondering if the AI will remember to update the CRM or submit the claim."
        },
        {
            title: "Built-in Recovery",
            description: "When users go off-topic, the Flow framework guides them back to the task at hand, maintaining conversation continuity without losing context or progress."
        }
    ]

    const useCases = [
        {
            industry: "Insurance",
            title: "First Notice of Loss (FNOL)",
            challenge: "Complex claims process requiring accurate data collection",
            solution: "Voice-driven FNOL with authentication, validation, and submission",
            results: [
                "24/7 claims acceptance",
                "100% data accuracy",
                "5-minute average completion",
                "Zero manual data entry"
            ]
        },
        {
            industry: "Financial Services",
            title: "Customer Authentication",
            challenge: "Regulatory compliance for voice-based authentication",
            solution: "Multi-factor voice authentication with anti-spoofing",
            results: [
                "95% authentication success rate",
                "Regulatory compliance achieved",
                "Fraud attempts detected",
                "Customer friction reduced"
            ]
        },
        {
            industry: "Healthcare",
            title: "Patient Triage",
            challenge: "Overwhelming call volumes for appointment booking",
            solution: "Intelligent triage and appointment scheduling",
            results: [
                "70% call deflection",
                "Appropriate care routing",
                "Reduced wait times",
                "Clinical governance maintained"
            ]
        },
        {
            industry: "Retail",
            title: "Order Management",
            challenge: "High-volume customer service for order queries",
            solution: "Automated order tracking and modification",
            results: [
                "80% query automation",
                "Instant order updates",
                "Customer satisfaction increased",
                "Support costs reduced"
            ]
        }
    ]

    const implementationPhases = [
        {
            phase: "Phase 1",
            title: "Discovery & Foundation",
            duration: "Weeks 1-2",
            deliverables: [
                "Requirements elaboration and backlog creation",
                "API standardisation and OpenAPI specifications",
                "Document standards for RAG implementation",
                "AI Governance Framework establishment",
                "Risk register and DPIA skeleton",
                "Azure environment provisioned"
            ]
        },
        {
            phase: "Phase 2",
            title: "Core Development & Integration",
            duration: "Weeks 3-8",
            deliverables: [
                "CI/CD pipeline establishment",
                "AKS cluster provisioning via Terraform",
                "Flow Engine configuration",
                "Tool Integration Layer development",
                "Channel gateway implementation (Voice, Web, WhatsApp)",
                "RAG implementation with Azure AI Search",
                "Backend API integration"
            ]
        },
        {
            phase: "Phase 3",
            title: "Testing & Handover",
            duration: "Weeks 9-12",
            deliverables: [
                "Functional and integration testing",
                "Performance and load testing",
                "Security testing and threat modelling",
                "AI evaluation (accuracy, hallucination, adversarial)",
                "User Acceptance Testing support",
                "Infrastructure as Code (Terraform)",
                "Documentation and runbooks",
                "Knowledge transfer and training"
            ]
        }
    ]

    const faqs = [
        {
            question: "What makes the Flow framework different from standard chatbots?",
            answer: "Flow imposes structure on inherently unpredictable LLMs through state-based conversation maps. This ensures business processes complete successfully, data is collected reliably, and conversations can't be hijacked—critical for regulated industries like insurance and financial services."
        },
        {
            question: "How long does implementation really take?",
            answer: "Our standard implementation is 12 weeks for a production-ready system. The first 2 weeks focus on discovery and foundation, followed by 6 weeks of core development, and 4 weeks of testing and handover. You'll have access to a working system by week 9 for UAT."
        },
        {
            question: "Do we need to be on Azure?",
            answer: "Yes, our architecture is optimised for Azure's PaaS services. However, this is an advantage—you leverage existing Azure investments, security postures, and team expertise rather than introducing new platforms and vendors."
        },
        {
            question: "What about GDPR and the EU AI Act?",
            answer: "Compliance is built into our methodology. We establish governance frameworks aligned with ISO 42001 and ISO 27001, complete DPIAs, implement transparency notices, and ensure full regulatory compliance throughout the project."
        },
        {
            question: "How do you prevent AI hallucination?",
            answer: "Three ways: The Flow framework constrains conversations to defined paths, RAG provides grounded responses from your documents, and continuous monitoring detects and flags potential hallucinations for correction."
        },
        {
            question: "What happens after the 12-week project?",
            answer: "You own everything—the Flow framework licence, configured flows, aligned models, and all code. We provide comprehensive documentation and training. Optional managed services are available for ongoing optimization and feature development."
        }
    ]

    return (
        <main>
            <PageHero
                headline="State-Based Conversational AI That Actually Works"
                subheadline="From Unpredictable Chatbots to Controlled Business Outcomes"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-16 bg-white border-b border-midnight/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-midnight/70 leading-relaxed">
                            Traditional LLMs are inherently unpredictable—a critical flaw for business processes. Our <strong>Flow framework</strong> brings structure and control to AI conversations, ensuring reliable data collection, accurate tool use, and consistent outcomes. Built on Azure, owned by you, delivered in <strong>12 weeks</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Three Core Differentiators */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Why Attercop for Conversational AI
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                Three fundamental advantages that make our approach different
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {differentiators.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                                        <div className="w-14 h-14 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-sea-green" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-midnight mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sea-green font-semibold text-sm mb-3">
                                            {item.tagline}
                                        </p>
                                        <p className="text-midnight/70 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Flow Framework Advantage */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Why Standard LLMs Fail in Business-Critical Processes
                            </h2>
                            <p className="text-xl text-midnight/60 max-w-3xl">
                                Without structure, users can divert AI assistants into off-topic discussions from which they cannot recover. In regulated industries like insurance, this creates unacceptable risks.
                            </p>
                        </div>

                        {/* Comparison */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-6 flex items-center gap-2">
                                    <XCircle className="w-6 h-6 text-red-600" />
                                    Traditional Chatbot
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Unpredictable conversation paths",
                                        "Incomplete data collection",
                                        "Unreliable tool execution",
                                        "No guaranteed outcomes",
                                        "Vulnerable to prompt injection"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-midnight/70">
                                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-green-50 rounded-xl p-8 border-2 border-sea-green">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-sea-green" />
                                    Flow-Controlled AI
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Defined state machines",
                                        "Enforced data collection",
                                        "Reliable tool orchestration",
                                        "Guaranteed process completion",
                                        "Inherent security through structure"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-midnight/70">
                                            <CheckCircle2 className="w-5 h-5 text-sea-green flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Flow Components */}
                        <div className="mb-12">
                            <h3 className="font-display text-3xl font-bold text-midnight mb-8">
                                Flow Framework Architecture
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {flowComponents.map((component, index) => (
                                    <div key={index} className="bg-pearl rounded-xl p-6">
                                        <h4 className="font-display text-lg font-bold text-midnight mb-3">
                                            {component.title}
                                        </h4>
                                        <p className="text-midnight/70">
                                            {component.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                                Enterprise-Grade Architecture on Azure
                            </h2>
                            <p className="text-xl text-pearl/70 max-w-3xl mx-auto">
                                Microservices architecture with containerisation and secure interoperability. All services deploy within your Azure subscription.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <Cpu className="w-12 h-12 text-sea-green mb-4" />
                                <h3 className="font-display text-xl font-bold mb-3">
                                    Azure Kubernetes Service
                                </h3>
                                <ul className="space-y-2 text-sm text-pearl/70">
                                    <li>• Flow Execution Engine</li>
                                    <li>• Tool Integration Layer</li>
                                    <li>• Auto-scaling orchestration</li>
                                    <li>• Zero-downtime deployments</li>
                                    <li>• Distributed caching (Redis)</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <MessageSquare className="w-12 h-12 text-sea-green mb-4" />
                                <h3 className="font-display text-xl font-bold mb-3">
                                    Multi-Channel Gateways
                                </h3>
                                <ul className="space-y-2 text-sm text-pearl/70">
                                    <li>• Voice (Azure Communication Services)</li>
                                    <li>• Web & Mobile (App Service)</li>
                                    <li>• WhatsApp (Bot Service)</li>
                                    <li>• Speech-to-text & TTS</li>
                                    <li>• &lt;2 second response target</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <Database className="w-12 h-12 text-sea-green mb-4" />
                                <h3 className="font-display text-xl font-bold mb-3">
                                    Knowledge Engine (RAG)
                                </h3>
                                <ul className="space-y-2 text-sm text-pearl/70">
                                    <li>• Azure AI Search</li>
                                    <li>• Automatic document chunking</li>
                                    <li>• Embedding generation</li>
                                    <li>• Semantic search</li>
                                    <li>• Citation-backed responses</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                            <Shield className="w-12 h-12 text-sea-green mb-4" />
                            <h3 className="font-display text-2xl font-bold mb-4">
                                Security & Compliance
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6 text-sm text-pearl/70">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Infrastructure Security</h4>
                                    <ul className="space-y-1">
                                        <li>• Azure Key Vault with automated rotation</li>
                                        <li>• VNet Peering/Private Link</li>
                                        <li>• API gateway with rate limiting</li>
                                        <li>• Container security policies</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">AI-Specific Protection</h4>
                                    <ul className="space-y-1">
                                        <li>• Flow framework prevents prompt injection</li>
                                        <li>• Azure AI Content Safety integration</li>
                                        <li>• Voice anti-spoofing measures</li>
                                        <li>• Input/output validation layer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Proven Applications Across Industries
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                Real-world implementations delivering measurable results
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="text-sm font-bold text-sea-green mb-2">
                                        {useCase.industry.toUpperCase()}
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-midnight mb-3">
                                        {useCase.title}
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-midnight/60 mb-1">Challenge:</p>
                                            <p className="text-midnight/70">{useCase.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-midnight/60 mb-1">Solution:</p>
                                            <p className="text-midnight/70">{useCase.solution}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-midnight/60 mb-2">Results:</p>
                                            <ul className="space-y-1">
                                                {useCase.results.map((result, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-midnight/70">
                                                        <CheckCircle2 className="w-4 h-4 text-sea-green flex-shrink-0 mt-1" />
                                                        <span>{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Methodology */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                12-Week Transformation: From Concept to Production
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                Fixed-price delivery with transparent outcomes and quality gates
                            </p>
                        </div>

                        <div className="space-y-8">
                            {implementationPhases.map((phase, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-sea-green/10 rounded-full flex items-center justify-center">
                                                <span className="text-2xl font-bold text-sea-green">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-display text-2xl font-bold text-midnight">
                                                    {phase.title}
                                                </h3>
                                                <span className="text-sm font-semibold text-sea-green">
                                                    {phase.duration}
                                                </span>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                                                {phase.deliverables.map((deliverable, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-midnight/70">
                                                        <CheckCircle2 className="w-4 h-4 text-sea-green flex-shrink-0 mt-1" />
                                                        <span>{deliverable}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Investment Framework */}
                        <div className="mt-16 bg-midnight text-white rounded-xl p-12">
                            <h3 className="font-display text-3xl font-bold mb-8 text-center">
                                Investment Framework
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-sea-green mb-2">From £35k</div>
                                    <div className="text-lg font-semibold mb-3">Discovery & Foundation</div>
                                    <div className="text-sm text-pearl/70">
                                        2 weeks • Requirements • API specs • Governance framework • Test strategy
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-sea-green mb-2">From £250k</div>
                                    <div className="text-lg font-semibold mb-3">Full Implementation</div>
                                    <div className="text-sm text-pearl/70">
                                        12 weeks • Complete Flow framework • Multi-channel • Full testing • Handover
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-sea-green mb-2">Tailored</div>
                                    <div className="text-lg font-semibold mb-3">Ongoing Evolution</div>
                                    <div className="text-sm text-pearl/70">
                                        Managed services • Feature enhancements • Performance optimization
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Matters for PE */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Strategic AI Assets That Drive Exit Value
                            </h2>
                            <p className="text-lg text-midnight/60">
                                Why PE firms choose Flow-controlled conversational AI
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Technology Asset Creation
                                </h3>
                                <p className="text-midnight/70">
                                    Building conversational AI with full IP ownership creates a defensible technology moat. Unlike SaaS subscriptions that appear as OpEx liabilities, owned AI platforms are strategic assets that enhance enterprise value at exit.
                                </p>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Scalability Without Headcount
                                </h3>
                                <p className="text-midnight/70">
                                    Deploy once, scale infinitely. Our platform approach enables rapid expansion without proportional increases in support staff—critical for PE firms focused on EBITDA margin expansion.
                                </p>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Cross-Portfolio Leverage
                                </h3>
                                <p className="text-midnight/70">
                                    The Flow framework and governance models developed for one portfolio company can be adapted across others, creating economies of scale and accelerating subsequent deployments.
                                </p>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Regulatory Readiness
                                </h3>
                                <p className="text-midnight/70">
                                    With built-in compliance for GDPR, EU AI Act, and sector-specific regulations, portfolio companies are prepared for increasingly stringent AI governance requirements—removing a potential exit barrier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <FAQSection
                            title="Frequently Asked Questions"
                            faqs={faqs}
                        />
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                                Complementary Services
                            </h2>
                            <p className="text-lg text-midnight/60">
                                Extend your conversational AI capabilities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Knowledge Engineering
                                </h3>
                                <p className="text-midnight/70 mb-4">
                                    Build the intelligent foundation that powers meaningful conversations with deep business understanding and RAG implementation.
                                </p>
                                <Link href="/services/knowledge-engineering" className="text-sea-green font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Explore Knowledge Engineering <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Agentic AI
                                </h3>
                                <p className="text-midnight/70 mb-4">
                                    Extend beyond conversations to autonomous agents that take action across your enterprise using our Agentic Mesh architecture.
                                </p>
                                <Link href="/services/agentic-ai" className="text-sea-green font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Discover Agentic AI <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    AI Governance
                                </h3>
                                <p className="text-midnight/70 mb-4">
                                    Ensure your conversational AI meets compliance, ethical, and control requirements with our ISO-aligned governance framework.
                                </p>
                                <Link href="/services/ai-governance" className="text-sea-green font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Learn About Governance <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Ready to Control Your AI Conversations?
                        </h2>
                        <p className="text-xl text-pearl/70 mb-12">
                            Discover how the Flow framework can transform unpredictable LLMs into reliable business systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book Discovery Session</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/contact">Request Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
