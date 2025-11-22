import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Search, TrendingUp, Target, Brain, Shield } from "lucide-react"
import Link from "next/link"

export default function PEFirmsPage() {
    const stats = [
        { value: "15+", label: "PE Firms Advised" },
        { value: "£250M+", label: "Portfolio Value Enhanced" },
        { value: "3x", label: "Average ROI on AI" },
        { value: "50%", label: "Faster Due Diligence" }
    ]

    const ctas = [
        { text: "Book Partner Briefing", href: "/contact" },
        { text: "Download PE AI Playbook", href: "/resources/pe-playbook", variant: "outline" as const }
    ]

    const services = [
        {
            icon: Users,
            title: "For General Partners & Investment Committees",
            subtitle: "Strategic AI Advisory That Enhances Fund Performance",
            description: "Transform how your fund operates with AI that works at the speed of PE.",
            features: [
                "Fund-Level AI Strategy",
                "Quarterly AI Intelligence Briefings",
                "Board & LP Communications",
                "Portfolio-wide AI investment frameworks"
            ],
            quote: "Attercop helps us stay ahead of AI disruption whilst ensuring our portfolio companies implement AI responsibly and profitably.",
            attribution: "Managing Partner, £2B UK Growth Fund",
            link: "/contact"
        },
        {
            icon: Search,
            title: "For Investment Teams",
            subtitle: "AI-Powered Deal Flow & Due Diligence",
            description: "Find better deals faster. Make smarter investment decisions. See what others miss.",
            features: [
                "Autonomous Market Scanning",
                "Proprietary Deal Intelligence",
                "AI & Data Maturity Assessment",
                "Value Creation Opportunity Identification"
            ],
            caseStudy: "Radiology AI Acquisition: Our technical DD revealed hidden AI capabilities worth £15M in additional value.",
            link: "/services/due-diligence"
        },
        {
            icon: TrendingUp,
            title: "For Operating Partners",
            subtitle: "Portfolio-Wide AI Transformation at PE Speed",
            description: "One AI strategy. Multiple portfolio companies. Exponential value creation.",
            features: [
                "Systematic Deployment Framework",
                "100-Day AI Transformations",
                "Playbooks & Accelerators",
                "Cross-Portfolio Initiatives"
            ],
            metric: "Average portfolio company implementing our AI framework achieves 40% operational efficiency improvement within 6 months",
            link: "/for-businesses"
        },
        {
            icon: Target,
            title: "For Exit Planning Teams",
            subtitle: "AI That Enhances Exit Multiples",
            description: "Make AI a value driver, not a due diligence concern.",
            features: [
                "AI as Multiple Enhancer",
                "Buyer-Ready AI Documentation",
                "Strategic Narrative Development",
                "IP & Asset Development"
            ],
            stats: [
                "2.1x average multiple improvement with AI",
                "30% higher valuations for AI-enabled businesses",
                "50% faster due diligence with proper documentation"
            ],
            link: "/services/exit-readiness"
        }
    ]

    const whyAttercop = [
        {
            icon: Brain,
            title: "Deep PE DNA",
            description: "We understand your world. IRR pressures. LP expectations. Portfolio dynamics. Exit timelines."
        },
        {
            icon: Shield,
            title: "Technical Depth + Commercial Focus",
            description: "Former CTOs and CEOs who&apos;ve built and sold AI companies. We build what drives returns, not what wins awards."
        },
        {
            icon: TrendingUp,
            title: "Speed of Execution",
            description: "100-day transformations. 6-week assessments. 2-week quick wins. We understand PE timelines and deliver accordingly."
        }
    ]

    const engagementModels = [
        {
            title: "Strategic Advisory Retainer",
            subtitle: "For Funds & GPs",
            features: [
                "Ongoing AI strategy counsel",
                "Quarterly briefings and updates",
                "On-demand expert access",
                "Portfolio-wide initiatives"
            ],
            pricing: "From £15K/month"
        },
        {
            title: "Deal Support Services",
            subtitle: "For Investment Teams",
            features: [
                "Technical due diligence",
                "AI opportunity assessment",
                "Integration planning",
                "Value creation modelling"
            ],
            pricing: "Project-based from £25K"
        },
        {
            title: "Portfolio Transformation",
            subtitle: "For Operating Partners",
            features: [
                "100-day programmes",
                "Cross-portfolio initiatives",
                "Capability building",
                "Ongoing support"
            ],
            pricing: "From £50K per company"
        },
        {
            title: "Hybrid Engagement",
            subtitle: "Comprehensive Partnership",
            features: [
                "Fund advisory + portfolio execution",
                "Dedicated team allocation",
                "Preferential rates",
                "Priority access"
            ],
            pricing: "Bespoke pricing"
        }
    ]

    const caseStudies = [
        {
            category: "Mid-Market Growth Fund",
            title: "Portfolio-Wide AI Transformation",
            challenge: "Portfolio of 12 B2B software companies with varying AI maturity needed systematic approach to value creation.",
            impact: [
                "8 companies launched AI initiatives",
                "Average 35% efficiency gain",
                "2 successful exits with AI premium"
            ],
            link: "/case-studies/mid-market-growth"
        },
        {
            category: "Healthcare-Focused Fund",
            title: "Technical DD Drives Confident Investment",
            challenge: "Technical DD on AI-powered diagnostics platform required deep expertise to inform investment thesis.",
            impact: [
                "Clear assessment of technology quality",
                "Identified key strengths and risks",
                "Successful integration, 3x revenue growth"
            ],
            link: "/case-studies/healthcare-dd"
        },
        {
            category: "Technology Fund",
            title: "Accelerating AI Acquisition Integration",
            challenge: "AI acquisition had excellent science but slow commercial progress threatening investment thesis.",
            impact: [
                "6-month integration vs 18-month plan",
                "Immediate value creation",
                "Accelerated portfolio-wide deployment"
            ],
            link: "/case-studies/tech-integration"
        }
    ]

    const faqs = [
        {
            question: "How do you differ from Big 4 consultancies?",
            answer: "We&apos;re AI specialists, not generalists. We provide deeper technical expertise, faster deployment, and direct partner involvement. We build production systems, not PowerPoints."
        },
        {
            question: "What&apos;s your typical engagement timeline?",
            answer: "Fund advisory: Ongoing monthly. DD projects: 2-4 weeks. Portfolio transformations: 100 days to production. We match PE timelines."
        },
        {
            question: "Do you work with specific sectors?",
            answer: "We work across all sectors but have deep expertise in Life Sciences, Healthcare, B2B SaaS, and Financial Services. Our frameworks adapt to any industry."
        },
        {
            question: "Can you support international portfolios?",
            answer: "Yes. While UK-based, we support portfolios globally. Our frameworks and remote delivery models work across geographies."
        },
        {
            question: "How do you price engagements?",
            answer: "We offer retainer, project, and hybrid models. Pricing depends on scope but always includes clear ROI metrics and success criteria."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Your Strategic AI Advantage Across the Investment Lifecycle"
                subheadline="From deal sourcing to exit planning, we're the AI partner that speaks PE. Strategic advisory for GPs. Operational excellence for portfolios. Value creation that drives returns."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-6">
                            The PE-AI Opportunity
                        </h2>
                        <p className="text-xl font-bold text-midnight mb-4">
                            AI is no longer optional - it&apos;s the difference between leading and losing.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            Your peers are already using AI to identify better deals, conduct smarter diligence, and create portfolio-wide competitive advantages. The question isn&apos;t whether to embrace AI, but how to do it strategically, systematically, and at scale.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            Attercop isn&apos;t another tech consultancy trying to learn PE. We&apos;re AI specialists who understand carry, IRR, and multiple expansion. We know you need rapid deployment, measurable returns, and exit-ready capabilities.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Most importantly, we understand that AI strategy for PE isn&apos;t just about portfolio companies - it&apos;s about transforming how you source, evaluate, manage, and exit investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, index) => (
                <section
                    key={index}
                    className={index % 2 === 0 ? "py-24 bg-pearl" : "py-24 bg-white"}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-start gap-4 mb-6">
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

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-midnight/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {service.quote && (
                                <blockquote className="border-l-4 border-sea-green pl-6 py-4 bg-white/50 rounded-r-lg mb-6">
                                    <p className="italic text-midnight/70 mb-2">&ldquo;{service.quote}&rdquo;</p>
                                    <cite className="text-sm text-midnight/50 not-italic">— {service.attribution}</cite>
                                </blockquote>
                            )}

                            {service.caseStudy && (
                                <div className="bg-amber/10 border-l-4 border-amber p-6 rounded-r-lg mb-6">
                                    <p className="text-sm font-semibold text-midnight mb-2">CASE STUDY</p>
                                    <p className="text-midnight/70">{service.caseStudy}</p>
                                </div>
                            )}

                            {service.metric && (
                                <div className="bg-sea-green/10 border-l-4 border-sea-green p-6 rounded-r-lg mb-6">
                                    <p className="text-sm font-semibold text-midnight mb-2">SUCCESS METRIC</p>
                                    <p className="text-midnight/70">{service.metric}</p>
                                </div>
                            )}

                            {service.stats && (
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    {service.stats.map((stat, idx) => (
                                        <div key={idx} className="bg-white/50 p-4 rounded-lg text-center">
                                            <p className="text-sm text-midnight/70">{stat}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Button asChild>
                                <Link href={service.link}>
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Attercop Section */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
                        Why PE Firms Choose Attercop
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {whyAttercop.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex p-4 bg-sea-green/20 rounded-full mb-6">
                                    <item.icon className="w-8 h-8 text-sea-green" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-pearl/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight text-center mb-4">
                        How We Work With PE Firms
                    </h2>
                    <p className="text-center text-midnight/60 mb-16 max-w-2xl mx-auto">
                        Flexible engagement models designed for PE timelines and budgets
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {engagementModels.map((model, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="font-display text-xl font-bold text-midnight mb-2">
                                        {model.title}
                                    </h3>
                                    <p className="text-sm text-sea-green font-semibold mb-4">
                                        {model.subtitle}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {model.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-midnight/70 flex items-start gap-2">
                                                <span className="text-sea-green mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm font-bold text-deep-teal">{model.pricing}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <ClientLogos variant="pe-firms" />

            {/* Case Studies */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                PE Success Stories
                            </h2>
                            <p className="text-midnight/60 max-w-2xl text-lg">
                                Real results from real engagements
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
                        Ready to Give Your Portfolio an AI Advantage?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Whether you&apos;re evaluating a single deal or transforming an entire portfolio, we speak your language and deliver at your speed.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h3 className="font-bold mb-2">Strategic Conversation</h3>
                            <p className="text-sm text-pearl/70 mb-4">30-minute call with our PE team</p>
                            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/contact">Book Discussion</Link>
                            </Button>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h3 className="font-bold mb-2">Portfolio AI Assessment</h3>
                            <p className="text-sm text-pearl/70 mb-4">Evaluate AI maturity across portfolio</p>
                            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/assessment">Start Assessment</Link>
                            </Button>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h3 className="font-bold mb-2">AI Due Diligence</h3>
                            <p className="text-sm text-pearl/70 mb-4">Technical evaluation of investments</p>
                            <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-midnight" asChild>
                                <Link href="/contact">Discuss DD Needs</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-pearl/60">
                        <span>✓ NDA-friendly discussions</span>
                        <span>✓ PE-experienced team</span>
                        <span>✓ 100-day deployment guarantee</span>
                        <span>✓ ROI-backed engagements</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} />
        </main>
    )
}
