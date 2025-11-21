import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap, Heart, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
    const stats = [
        { value: "100", label: "Days to Production" },
        { value: "40%", label: "Average Efficiency Gain" },
        { value: "3x", label: "ROI Within 6 Months" },
        { value: "50+", label: "Companies Transformed" }
    ]

    const ctas = [
        { text: "Start Your 100-Day Plan", href: "/contact" },
        { text: "Calculate Your AI ROI", href: "/roi-calculator", variant: "outline" as const }
    ]

    const transformationPhases = [
        {
            phase: "Days 1-30",
            title: "Assessment & Quick Wins",
            weeks: [
                {
                    title: "Week 1-2: Rapid Discovery",
                    items: [
                        "Current state assessment",
                        "Opportunity identification",
                        "Data readiness evaluation",
                        "Quick win prioritisation"
                    ]
                },
                {
                    title: "Week 3-4: Strategy & Roadmap",
                    items: [
                        "AI strategy aligned with PE value creation plan",
                        "Phased implementation roadmap",
                        "Investment requirements and ROI projections",
                        "Board-ready presentation"
                    ]
                }
            ],
            wins: [
                "Automated reporting saving 10+ hours weekly",
                "Customer service chatbot reducing tickets by 30%",
                "Document processing cutting manual work by 50%",
                "Sales intelligence improving conversion by 20%"
            ]
        },
        {
            phase: "Days 31-60",
            title: "Knowledge System Deployment",
            description: "Build Your Intelligence Foundation",
            items: [
                "Enterprise knowledge graph construction",
                "Hybrid RAG implementation",
                "Data integration and harmonisation",
                "User training and adoption"
            ],
            benefits: [
                "Instant answers from your data",
                "Connected insights across silos",
                "Reduced decision-making time",
                "Foundation for autonomous agents"
            ],
            example: "Manufacturing client: Knowledge system reduced quote-to-cash cycle by 35% through instant access to pricing, inventory, and customer history"
        },
        {
            phase: "Days 61-100",
            title: "Agent Implementation",
            description: "Deploy Autonomous AI That Acts",
            categories: [
                "Process automation agents",
                "Customer interaction agents",
                "Analytical and reporting agents",
                "Monitoring and alerting agents"
            ],
            agents: [
                "Sales agents qualifying leads 24/7",
                "Finance agents processing invoices",
                "Operations agents managing inventory",
                "Service agents handling tier-1 support"
            ],
            results: [
                "Production AI systems operational",
                "Measurable ROI achieved",
                "Team trained and capable",
                "Scale plan activated"
            ]
        }
    ]

    const services = [
        {
            icon: Brain,
            title: "Knowledge System Implementation",
            subtitle: "Transform Data Chaos into Competitive Intelligence",
            description: "Your data is everywhere - CRM, ERP, documents, emails. But insights are nowhere. We build knowledge systems that connect everything.",
            offerings: [
                {
                    title: "Enterprise Knowledge Graphs",
                    items: ["Connect all data sources", "Create semantic relationships", "Enable intelligent search", "Power decision-making"]
                },
                {
                    title: "Hybrid RAG Systems",
                    items: ["Combine multiple retrieval methods", "Deliver accurate answers", "Reduce hallucinations", "Scale with your needs"]
                }
            ],
            outcomes: [
                "80% faster information retrieval",
                "50% reduction in research time",
                "90% accuracy in automated responses",
                "100% data utilisation"
            ],
            link: "/services/knowledge-engineering"
        },
        {
            icon: Zap,
            title: "Agentic Process Automation",
            subtitle: "Autonomous Agents That Work While You Sleep",
            description: "Stop automating tasks. Start automating outcomes. Our agents don't just follow rules - they understand goals, make decisions, and take action.",
            agentTypes: [
                {
                    category: "Revenue Agents",
                    examples: ["Lead qualification and scoring", "Proposal generation", "Customer success monitoring", "Upsell opportunity identification"]
                },
                {
                    category: "Operational Agents",
                    examples: ["Supply chain optimisation", "Quality control monitoring", "Inventory management", "Predictive maintenance"]
                },
                {
                    category: "Financial Agents",
                    examples: ["Invoice processing", "Expense categorisation", "Cash flow forecasting", "Compliance monitoring"]
                },
                {
                    category: "Support Agents",
                    examples: ["Tier-1 customer service", "Internal IT helpdesk", "HR query handling", "Documentation assistance"]
                }
            ],
            difference: "Traditional automation: \"If this, then that\" | Our agents: \"Achieve this goal using these resources\"",
            link: "/services/agentic-ai"
        },
        {
            icon: Heart,
            title: "Life Sciences & Healthcare AI",
            subtitle: "Compliant Innovation for Regulated Environments",
            description: "PE-backed life sciences companies face unique challenges: regulatory compliance, patient safety, and data privacy. We deliver AI that innovates within boundaries.",
            solutions: [
                {
                    title: "Medical Communications AI",
                    impact: "70% faster content creation",
                    features: ["Automated publication drafting", "Regulatory submission support", "Medical education content"]
                },
                {
                    title: "Clinical Intelligence",
                    features: ["Clinical trial optimisation", "Real-world evidence analysis", "Patient outcome prediction", "Drug interaction modelling"]
                },
                {
                    title: "Healthcare Operations",
                    impact: "95% accuracy",
                    features: ["Clinical coding automation", "Prior authorisation processing", "Discharge planning optimisation", "Referral management"]
                }
            ],
            compliance: ["FDA/EMA/MHRA ready", "HIPAA/GDPR compliant", "Full audit trails", "Explainable AI"],
            link: "/services/life-sciences"
        },
        {
            icon: TrendingUp,
            title: "Exit Readiness Acceleration",
            subtitle: "Make AI Your Multiple Enhancer",
            description: "Your exit is 18-24 months away. Every AI capability you build now directly impacts your valuation. We ensure your AI story enhances, not complicates, your exit.",
            services: [
                {
                    category: "Technical Documentation",
                    items: ["Complete system architecture", "API documentation", "Data lineage mapping", "Security assessments"]
                },
                {
                    category: "Value Demonstration",
                    items: ["ROI calculations and evidence", "Efficiency metrics", "Growth enablement proof", "Competitive advantage analysis"]
                },
                {
                    category: "Risk Mitigation",
                    items: ["Governance frameworks", "Compliance documentation", "Team capability assessment", "Continuity planning"]
                },
                {
                    category: "Buyer Readiness",
                    items: ["Integration roadmaps", "Scalability analysis", "IP documentation", "Handover packages"]
                }
            ],
            impact: [
                "2.1x higher multiples with documented AI",
                "Buyers pay premiums for proven AI efficiency",
                "50% reduced due diligence time"
            ],
            link: "/services/exit-readiness"
        }
    ]

    const engagementModels = [
        {
            title: "100-Day Transformation",
            badge: "Most Popular",
            features: [
                "Complete AI implementation programme",
                "Assessment through to production",
                "Knowledge systems + agents",
                "Training and handover"
            ],
            pricing: "From £150K"
        },
        {
            title: "Specific Solution Deployment",
            badge: "Targeted Impact",
            features: [
                "Single use case focus",
                "6-8 week implementation",
                "Production deployment",
                "Documentation and training"
            ],
            pricing: "From £50K"
        },
        {
            title: "Ongoing Partnership",
            badge: "Continuous Innovation",
            features: [
                "Monthly retainer model",
                "Continuous development",
                "Regular capability additions",
                "Strategic advisory included"
            ],
            pricing: "From £20K/month"
        },
        {
            title: "Team Augmentation",
            badge: "Capability Building",
            features: [
                "Expert resources on demand",
                "Skill transfer focus",
                "Flexible engagement",
                "Scale up or down"
            ],
            pricing: "Day rates from £1,500"
        }
    ]

    const caseStudies = [
        {
            category: "B2B SaaS Platform",
            title: "Differentiation Through Knowledge Graphs",
            challenge: "Needed to differentiate in crowded market with unique AI capabilities.",
            impact: [
                "45% reduction in churn",
                "60% faster onboarding",
                "2x upsell rate",
                "Series B at 3x higher valuation"
            ],
            link: "/case-studies/b2b-saas"
        },
        {
            category: "Healthcare Services",
            title: "Agentic Automation Drives EBITDA",
            challenge: "Manual processes limiting growth and profitability.",
            impact: [
                "3 hours saved per clinician daily",
                "50% reduction in documentation time",
                "95% coding accuracy",
                "18% EBITDA improvement"
            ],
            link: "/case-studies/healthcare-services"
        },
        {
            category: "Professional Services",
            title: "Enterprise RAG Enhances Win Rate",
            challenge: "Knowledge locked in silos preventing efficient proposal creation.",
            impact: [
                "80% faster proposal creation",
                "35% improvement in win rate",
                "£2.4M annual efficiency savings",
                "Acquired at premium multiple"
            ],
            link: "/case-studies/professional-services"
        }
    ]

    const faqs = [
        {
            question: "How do you differ from other AI consultancies?",
            answer: "We build production systems in 100 days, not POCs in 12 months. We&apos;re former operators who understand PE pressures. We transfer knowledge, not create dependency."
        },
        {
            question: "What if we don&apos;t have clean data?",
            answer: "Perfect data is a myth. We work with what you have, improve it iteratively, and deliver value from day one. Our knowledge engineering approach handles messy, real-world data."
        },
        {
            question: "How do we justify the investment to our board?",
            answer: "We provide board-ready business cases with clear ROI projections. Most clients achieve payback within 6 months. Quick wins fund the broader transformation."
        },
        {
            question: "Will our team be able to maintain what you build?",
            answer: "Yes. Knowledge transfer is embedded throughout. We use standard technologies, provide full documentation, and ensure your team is capable before we leave."
        },
        {
            question: "Can you work with our existing technology stack?",
            answer: "Absolutely. We integrate with, not replace, your current systems. Our solutions enhance your existing investments."
        },
        {
            question: "What happens after 100 days?",
            answer: "You have production AI delivering value. Most clients continue with us on a lighter-touch basis for optimisation, scaling, and new use cases."
        }
    ]

    return (
        <main>
            <PageHero
                headline="AI Transformation Built for PE Timelines and Expectations"
                subheadline="Your PE sponsors expect rapid value creation. We deliver production-ready AI in 100 days, not years. Knowledge systems and autonomous agents that generate immediate ROI whilst building long-term competitive advantage."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-6">
                            Meet PE Expectations. Exceed Market Standards.
                        </h2>
                        <p className="text-xl font-bold text-midnight mb-4">
                            Your PE sponsors didn&apos;t invest for incremental improvement. They expect transformation.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            You&apos;re under pressure to deliver rapid growth, operational excellence, and a compelling exit story. AI isn&apos;t just an opportunity - it&apos;s essential for hitting your targets and justifying valuations.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            But most AI initiatives fail. They take too long, cost too much, and deliver too little. POCs that never reach production. Consultants who don&apos;t understand PE timelines. Technology that doesn&apos;t scale.
                        </p>
                        <p className="text-lg font-bold text-midnight mb-4">
                            We&apos;re different.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            We&apos;ve transformed 50+ PE-backed companies. We understand your board&apos;s expectations, your timeline pressures, and your resource constraints. We don&apos;t build POCs - we build production systems that deliver measurable ROI within quarters, not years.
                        </p>
                        <p className="text-lg font-bold text-midnight">
                            Most importantly, we make you exit-ready. Every AI capability we build is documented, governed, and designed to enhance your multiple.
                        </p>
                    </div>
                </div>
            </section>

            {/* 100-Day Transformation */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            From Strategy to Scale in 100 Days
                        </h2>
                        <p className="text-xl font-bold text-sea-green mb-12 text-center">
                            Stop talking about AI. Start delivering value.
                        </p>

                        <div className="space-y-12">
                            {transformationPhases.map((phase, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-4xl font-bold text-sea-green">{index + 1}</span>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold text-midnight">{phase.phase}</h3>
                                            <p className="text-lg text-deep-teal font-semibold">{phase.title}</p>
                                        </div>
                                    </div>

                                    {phase.weeks && (
                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            {phase.weeks.map((week, idx) => (
                                                <div key={idx}>
                                                    <h4 className="font-bold text-midnight mb-3">{week.title}</h4>
                                                    <ul className="space-y-2">
                                                        {week.items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-midnight/70">
                                                                <span className="text-sea-green mt-1">•</span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {phase.description && (
                                        <p className="text-lg font-semibold text-midnight mb-4">{phase.description}</p>
                                    )}

                                    {phase.items && (
                                        <ul className="grid md:grid-cols-2 gap-3 mb-6">
                                            {phase.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-midnight/70">
                                                    <CheckCircle2 className="w-5 h-5 text-sea-green flex-shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {phase.wins && (
                                        <div className="bg-sea-green/10 rounded-lg p-6">
                                            <p className="font-bold text-midnight mb-3">Immediate Wins Delivered:</p>
                                            <ul className="space-y-2">
                                                {phase.wins.map((win, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">✓</span>
                                                        {win}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {phase.benefits && (
                                        <div className="mb-6">
                                            <p className="font-bold text-midnight mb-3">What This Means:</p>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {phase.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">•</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {phase.categories && (
                                        <div className="mb-6">
                                            <ul className="grid md:grid-cols-2 gap-3 mb-4">
                                                {phase.categories.map((cat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-midnight/70">
                                                        <span className="text-sea-green">•</span>
                                                        {cat}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="font-bold text-midnight mb-3">Real Agents in Production:</p>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {phase.agents.map((agent, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">✓</span>
                                                        {agent}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {phase.results && (
                                        <div className="bg-deep-teal/10 rounded-lg p-6">
                                            <p className="font-bold text-midnight mb-3">Results by Day 100:</p>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {phase.results.map((result, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <CheckCircle2 className="w-4 h-4 text-deep-teal flex-shrink-0 mt-0.5" />
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {phase.example && (
                                        <div className="bg-amber/10 border-l-4 border-amber p-4 rounded-r-lg mt-6">
                                            <p className="text-sm font-semibold text-midnight mb-1">CASE EXAMPLE</p>
                                            <p className="text-sm text-midnight/70 italic">{phase.example}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Start Your 100-Day Journey <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            {services.map((service, index) => (
                <section
                    key={index}
                    className={index % 2 === 0 ? "py-24 bg-white" : "py-24 bg-pearl"}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="p-3 bg-deep-teal/10 rounded-lg">
                                    <service.icon className="w-8 h-8 text-deep-teal" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-2">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl font-semibold text-sea-green mb-4">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-lg text-midnight/70 mb-8">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Render different content based on service type */}
                            {service.offerings && (
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {service.offerings.map((offering, idx) => (
                                        <div key={idx} className="bg-white/50 rounded-lg p-6">
                                            <h4 className="font-bold text-midnight mb-3">{offering.title}</h4>
                                            <ul className="space-y-2">
                                                {offering.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {service.outcomes && (
                                <div className="bg-sea-green/10 rounded-lg p-6 mb-8">
                                    <p className="font-bold text-midnight mb-3">Outcomes You Can Expect:</p>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {service.outcomes.map((outcome, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                <span className="text-sea-green">✓</span>
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.agentTypes && (
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {service.agentTypes.map((type, idx) => (
                                        <div key={idx} className="bg-white/50 rounded-lg p-6">
                                            <h4 className="font-bold text-midnight mb-3">{type.category}</h4>
                                            <ul className="space-y-2">
                                                {type.examples.map((example, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">•</span>
                                                        {example}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {service.difference && (
                                <div className="bg-amber/10 border-l-4 border-amber p-6 rounded-r-lg mb-8">
                                    <p className="font-bold text-midnight mb-2">The Difference</p>
                                    <p className="text-sm text-midnight/70">{service.difference}</p>
                                </div>
                            )}

                            {service.solutions && (
                                <div className="space-y-6 mb-8">
                                    {service.solutions.map((solution, idx) => (
                                        <div key={idx} className="bg-white/50 rounded-lg p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h4 className="font-bold text-midnight">{solution.title}</h4>
                                                {solution.impact && (
                                                    <span className="text-sm font-bold text-sea-green">{solution.impact}</span>
                                                )}
                                            </div>
                                            <ul className="space-y-2">
                                                {solution.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {service.compliance && (
                                <div className="bg-deep-teal/10 rounded-lg p-6 mb-8">
                                    <p className="font-bold text-midnight mb-3">Compliance Built-In:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {service.compliance.map((item, idx) => (
                                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-midnight/70">
                                                ✓ {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.services && (
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {service.services.map((svc, idx) => (
                                        <div key={idx} className="bg-white/50 rounded-lg p-6">
                                            <h4 className="font-bold text-midnight mb-3">{svc.category}</h4>
                                            <ul className="space-y-2">
                                                {svc.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {service.impact && (
                                <div className="bg-sea-green/10 rounded-lg p-6 mb-8">
                                    <p className="font-bold text-midnight mb-3">Exit Impact:</p>
                                    <ul className="space-y-2">
                                        {service.impact.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                <span className="text-sea-green">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <Button asChild>
                                <Link href={service.link}>
                                    Explore {service.title} <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            ))}

            {/* Engagement Models */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
                        Choose Your Path to AI Transformation
                    </h2>
                    <p className="text-center text-pearl/70 mb-16 max-w-2xl mx-auto">
                        Flexible engagement models designed for PE-backed companies
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {engagementModels.map((model, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <span className="inline-block text-xs font-bold tracking-wider uppercase text-sea-green bg-sea-green/20 px-3 py-1 rounded-full mb-4">
                                    {model.badge}
                                </span>
                                <h3 className="font-display text-xl font-bold mb-4">
                                    {model.title}
                                </h3>
                                <ul className="space-y-2 mb-6">
                                    {model.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-pearl/70 flex items-start gap-2">
                                            <span className="text-sea-green mt-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm font-bold text-sea-green">{model.pricing}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                PE-Backed Transformations
                            </h2>
                            <p className="text-midnight/60 max-w-2xl text-lg">
                                Real results from portfolio companies
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex" asChild>
                            <Link href="/case-studies">View All Case Studies</Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Your PE sponsors expect exceptional returns. Your competitors are already moving. Every day you wait is value lost.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h3 className="font-bold mb-2">Book Strategy Session</h3>
                            <p className="text-sm text-pearl/70 mb-4">45-minute call with our transformation team</p>
                            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/contact">Book Your Session</Link>
                            </Button>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h3 className="font-bold mb-2">Get Your Roadmap</h3>
                            <p className="text-sm text-pearl/70 mb-4">Customised 100-day transformation plan</p>
                            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/assessment">Start Assessment</Link>
                            </Button>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h3 className="font-bold mb-2">Calculate Your ROI</h3>
                            <p className="text-sm text-pearl/70 mb-4">Model the specific impact on your business</p>
                            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/roi-calculator">Access Calculator</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-pearl/60">
                        <span>✓ PE timeline compatible</span>
                        <span>✓ Production guarantee</span>
                        <span>✓ Knowledge transfer included</span>
                        <span>✓ Exit value focused</span>
                        <span>✓ ROI backed engagements</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} />
        </main>
    )
}
