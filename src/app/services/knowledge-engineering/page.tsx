import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, FileText, BarChart3, Image as ImageIcon, Network } from "lucide-react"
import Link from "next/link"

export default function KnowledgeEngineeringPage() {
    const stats = [
        { value: "80%", label: "Faster Information Retrieval" },
        { value: "90%", label: "Query Accuracy" },
        { value: "100%", label: "Data Source Coverage" },
        { value: "6", label: "Weeks Average Deployment" }
    ]

    const ctas = [
        { text: "Assess Your Knowledge Architecture", href: "/contact" },
        { text: "See Knowledge Graphs in Action", href: "/demo", variant: "outline" as const }
    ]

    const pillars = [
        {
            icon: FileText,
            title: "Knowledge Extraction",
            subtitle: "Liberating Intelligence from Chaos",
            items: [
                "Natural language processing of documents",
                "Pattern recognition in unstructured data",
                "Entity extraction and classification",
                "Relationship identification",
                "Metadata enrichment"
            ],
            example: "Automatically extracting key concepts, people, projects, and outcomes from 10 years of project reports"
        },
        {
            icon: Network,
            title: "Knowledge Structuring",
            subtitle: "Creating Semantic Understanding",
            items: [
                "Ontology development (your business's language)",
                "Taxonomy creation (hierarchical organisation)",
                "Knowledge graph construction",
                "Semantic relationship mapping",
                "Context preservation"
            ],
            example: "Connecting \"Project Titan\", \"Customer X\", \"Q3 Revenue\", and \"Team Alpha\" into a queryable relationship network"
        },
        {
            icon: Zap,
            title: "Knowledge Retrieval",
            subtitle: "Instant, Accurate Answers",
            items: [
                "Natural language query processing",
                "Multi-hop reasoning",
                "Contextual understanding",
                "Source attribution",
                "Confidence scoring"
            ],
            example: "\"Show me all unsuccessful projects with similar characteristics to our current proposal\" returns ranked, relevant results with explanations"
        }
    ]

    const modalities = [
        {
            icon: FileText,
            title: "Text Documents",
            subtitle: "Advanced NLP for Unstructured Content",
            features: [
                "Semantic understanding of reports, emails, contracts",
                "Context preservation across long documents",
                "Multi-language support",
                "Sentiment and intent extraction"
            ]
        },
        {
            icon: BarChart3,
            title: "Tabular Data",
            subtitle: "Breakthrough Integration of Structured Information",
            features: [
                "Advanced techniques using models like Kumo.ai",
                "Direct querying of spreadsheets and databases",
                "Statistical understanding of numerical relationships",
                "Accurate aggregation and summarisation"
            ],
            highlight: "70% of enterprise data is tabular, but most AI systems can't properly interpret it. Our approach makes every spreadsheet, database, and CSV file part of your intelligence system."
        },
        {
            icon: BarChart3,
            title: "Charts & Visualisations",
            subtitle: "Extracting Insights from Visual Data",
            features: [
                "Automatic chart interpretation",
                "Trend extraction from graphs",
                "Data point recovery from images",
                "Visual-to-text translation"
            ]
        },
        {
            icon: Network,
            title: "Knowledge Graphs",
            subtitle: "Connecting Highly Related Information",
            features: [
                "Relationship mapping across all data types",
                "Multi-hop reasoning",
                "Causal inference",
                "Pattern discovery"
            ]
        },
        {
            icon: ImageIcon,
            title: "Images & Diagrams",
            subtitle: "Visual Intelligence Processing",
            features: [
                "Technical diagram understanding",
                "Flowchart and process map interpretation",
                "Screenshot analysis",
                "Handwritten note extraction"
            ]
        }
    ]

    const useCases = [
        {
            industry: "Professional Services",
            challenge: "Critical insights scattered across proposals (PDFs), financials (Excel), project plans (Gantt charts), and emails",
            solution: "Multi-modal RAG connecting all content types with knowledge graphs",
            tabularFocus: "Automatic extraction and analysis of project budgets, resource allocations, and timelines",
            impact: [
                "70% faster proposal development using past pricing models",
                "40% reduction in project risks through pattern recognition",
                "Perfect numerical accuracy in resource planning"
            ]
        },
        {
            industry: "Life Sciences",
            challenge: "Research data spans lab notebooks, clinical trial spreadsheets, molecular diagrams, and literature PDFs",
            solution: "Hybrid RAG system understanding chemical structures, statistical analyses, and research papers",
            tabularFocus: "Integration of clinical trial data, patient records, and experimental results with full statistical awareness",
            impact: [
                "60% faster literature reviews including data extraction",
                "Accurate meta-analysis across multiple studies",
                "Automated adverse event detection from structured trial data"
            ]
        },
        {
            industry: "Financial Services",
            challenge: "Compliance requires connecting trades (databases), communications (emails), reports (PDFs), and risk models (Excel)",
            solution: "Multi-modal system with precise numerical handling and audit trails",
            tabularFocus: "Real-time integration of trading data, risk metrics, and regulatory reports with 100% numerical accuracy",
            impact: [
                "90% reduction in audit preparation",
                "Accurate aggregation across thousands of Excel files",
                "Anomaly detection across structured and unstructured data"
            ]
        },
        {
            industry: "Private Equity",
            challenge: "Due diligence requires analysing financial models (Excel), legal documents (PDFs), org charts (Visio), and market data",
            solution: "Multi-modal system that understands complex financial models and legal structures",
            tabularFocus: "Deep analysis of financial statements, cohort analyses, and unit economics with Kumo.ai-powered insights",
            impact: [
                "3x faster financial model validation",
                "Automatic red flag detection across all document types",
                "Accurate roll-up reporting across portfolio company spreadsheets"
            ]
        }
    ]

    const implementationSteps = [
        {
            weeks: "Week 1-2",
            title: "Discovery & Design",
            subtitle: "Understanding Your Knowledge Landscape",
            activities: ["Information audit", "Use case prioritisation", "Architecture design", "ROI modelling"],
            deliverables: ["Knowledge map", "System architecture", "Implementation plan"]
        },
        {
            weeks: "Week 3-4",
            title: "Extraction & Structuring",
            subtitle: "Building Your Knowledge Foundation",
            activities: ["Data source integration", "Ontology development", "Initial graph construction", "Quality validation"],
            deliverables: ["Connected data sources", "Base knowledge graph", "Validation reports"]
        },
        {
            weeks: "Week 5-6",
            title: "RAG Implementation",
            subtitle: "Enabling Intelligent Retrieval",
            activities: ["Hybrid retrieval setup", "Query processing configuration", "Answer generation tuning", "Accuracy optimization"],
            deliverables: ["Working RAG system", "Accuracy benchmarks", "Performance metrics"]
        },
        {
            weeks: "Week 7-8",
            title: "Production & Training",
            subtitle: "Launching Your Knowledge System",
            activities: ["Production deployment", "User training", "Documentation", "Handover"],
            deliverables: ["Live system", "Trained team", "Complete documentation"]
        }
    ]

    const caseStudies = [
        {
            category: "Medical Communications",
            title: "Global Leader Transforms Content Creation",
            challenge: "Decades of medical writing locked in documents, inaccessible for modern content creation.",
            impact: [
                "70% faster content creation",
                "100% compliance tracking",
                "£2M annual efficiency savings",
                "Knowledge graph connecting publications, authors, and topics"
            ],
            link: "/case-studies/medcomms"
        },
        {
            category: "Contract Research Organisation",
            title: "Unlocking 20 Years of Research Data",
            challenge: "Historical research data unusable, locked in unstructured reports.",
            impact: [
                "Unlocked 20 years of experimental data",
                "60% faster study design",
                "New insights driving innovation",
                "Neo4j knowledge graph with hybrid RAG"
            ],
            link: "/case-studies/crdo"
        },
        {
            category: "Professional Services",
            title: "Preserving Institutional Wisdom",
            challenge: "Expertise leaving with retiring partners, no systematic knowledge capture.",
            impact: [
                "Preserved 30 years of expertise",
                "40% faster onboarding",
                "25% improvement in win rates",
                "Knowledge system capturing institutional wisdom"
            ],
            link: "/case-studies/professional-services"
        }
    ]

    const faqs = [
        {
            question: "How is this different from a data warehouse or lake?",
            answer: "Data warehouses store structured data. We connect ALL information - documents, emails, messages, databases - into semantic understanding. It&apos;s the difference between filing cabinets and a brilliant assistant."
        },
        {
            question: "What about data security and privacy?",
            answer: "Everything runs in your environment, behind your firewall. Role-based access control ensures people only see what they should. Full audit trails for compliance."
        },
        {
            question: "How long before we see value?",
            answer: "Quick wins in week 1. Working system by week 6. Most clients see ROI within 60 days through time savings alone."
        },
        {
            question: "Do we need clean, structured data?",
            answer: "No. Our approach works with messy, real-world information. We extract knowledge from unstructured documents, emails, PDFs - whatever you have."
        },
        {
            question: "Will our team need special training?",
            answer: "Users need no training - they ask questions in natural language. We'll train your IT team to maintain and extend the system."
        },
        {
            question: "Can this integrate with our existing tools?",
            answer: "Yes. We connect with virtually any system via APIs, databases, or file systems. No rip-and-replace required."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Your Data Is Worthless. Your Knowledge Is Priceless."
                subheadline="Transform information chaos into structured intelligence. We build enterprise knowledge graphs and hybrid RAG systems that make your organisation's collective wisdom instantly accessible, accurate, and actionable."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/knowledge-engineering.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-6">
                            The Knowledge Crisis Hidden in Your Success
                        </h2>
                        <p className="text-xl font-bold text-midnight mb-4">
                            You&apos;re drowning in data but starved for insight.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            Your organisation has spent years accumulating valuable information. Customer interactions in your CRM. Projects in your PM tools. Documents in SharePoint. Conversations in Slack. Research in databases. Expertise in people&apos;s heads.
                        </p>
                        <p className="text-lg text-midnight/70 mb-6 leading-relaxed">
                            But when someone asks a critical question - &ldquo;What did we learn from similar projects?&rdquo; &ldquo;What&apos;s our history with this client?&rdquo; &ldquo;What approaches have we tried before?&rdquo; - the answer requires days of searching, if it&apos;s found at all.
                        </p>
                        <p className="text-xl font-bold text-midnight mb-4">
                            This isn&apos;t a data problem. It&apos;s a knowledge problem.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            Data is raw facts. Knowledge is connected understanding. While your competitors chase bigger data lakes, we build knowledge systems that transform information into intelligence.
                        </p>

                        <div className="bg-amber/10 border-l-4 border-amber p-6 rounded-r-lg">
                            <p className="font-bold text-midnight mb-3">What Missing Knowledge Costs You:</p>
                            <ul className="space-y-2">
                                {[
                                    "Repeated mistakes because lessons aren't captured",
                                    "Lost deals because insights aren't accessible",
                                    "Slower decisions because context isn't connected",
                                    "Departing employees taking irreplaceable expertise",
                                    "Compliance risks from incomplete information"
                                ].map((cost, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-midnight/70">
                                        <span className="text-amber mt-1">⚠</span>
                                        {cost}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                        What Is Knowledge Engineering?
                    </h2>
                    <p className="text-xl text-midnight/60 mb-16 text-center max-w-3xl mx-auto">
                        The discipline of transforming unstructured information into structured, queryable intelligence
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="inline-flex p-4 bg-deep-teal/10 rounded-full mb-6">
                                    <pillar.icon className="w-8 h-8 text-deep-teal" />
                                </div>
                                <div className="text-2xl font-bold text-midnight mb-2">{index + 1}. {pillar.title}</div>
                                <p className="text-sea-green font-semibold mb-6">{pillar.subtitle}</p>
                                <ul className="space-y-2 mb-6">
                                    {pillar.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                            <span className="text-sea-green mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-pearl p-4 rounded-lg">
                                    <p className="text-xs font-semibold text-midnight mb-1">EXAMPLE</p>
                                    <p className="text-sm text-midnight/70 italic">{pillar.example}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Multi-Modal Hybrid RAG */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Multi-Modal Hybrid RAG
                        </h2>
                        <p className="text-xl text-sea-green font-semibold mb-8">
                            Knowledge Engineering for the Gen AI Era
                        </p>
                        <p className="text-lg text-midnight/70 mb-12 leading-relaxed">
                            Your organisation&apos;s knowledge isn&apos;t just in documents. It&apos;s in spreadsheets, diagrams, charts, images, presentations, databases, and the complex relationships between them all. Traditional RAG systems only scratch the surface. Our multi-modal approach captures everything.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {modalities.map((modality, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-2 bg-deep-teal/10 rounded-lg">
                                            <modality.icon className="w-6 h-6 text-deep-teal" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-midnight mb-1">{modality.title}</h3>
                                            <p className="text-sm text-sea-green font-semibold mb-3">{modality.subtitle}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {modality.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                <span className="text-sea-green mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {modality.highlight && (
                                        <div className="bg-amber/10 border-l-4 border-amber p-4 rounded-r-lg">
                                            <p className="text-xs font-semibold text-midnight mb-1">WHY THIS MATTERS</p>
                                            <p className="text-sm text-midnight/70">{modality.highlight}</p>
                                        </div>
                                    )}
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
                        Where Knowledge Engineering Delivers Impact
                    </h2>
                    <p className="text-xl text-midnight/60 mb-16 text-center max-w-3xl mx-auto">
                        Real-world applications across industries
                    </p>

                    <div className="max-w-5xl mx-auto space-y-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                                    {useCase.industry}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p className="text-sm font-bold text-midnight/50 mb-2">CHALLENGE</p>
                                        <p className="text-midnight/70 mb-4">{useCase.challenge}</p>
                                        <p className="text-sm font-bold text-midnight/50 mb-2">SOLUTION</p>
                                        <p className="text-midnight/70">{useCase.solution}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-midnight/50 mb-2">TABULAR FOCUS</p>
                                        <p className="text-midnight/70 mb-4">{useCase.tabularFocus}</p>
                                    </div>
                                </div>
                                <div className="bg-sea-green/10 rounded-lg p-6">
                                    <p className="font-bold text-midnight mb-3">IMPACT</p>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {useCase.impact.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                <span className="text-sea-green">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            From Chaos to Knowledge in 6-8 Weeks
                        </h2>
                        <p className="text-xl text-midnight/60 mb-16 text-center">
                            Our proven implementation methodology
                        </p>

                        <div className="space-y-6">
                            {implementationSteps.map((step, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <span className="text-3xl font-bold text-sea-green">{index + 1}</span>
                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-3 mb-2">
                                                <h3 className="font-display text-2xl font-bold text-midnight">{step.weeks}</h3>
                                                <span className="text-lg font-semibold text-deep-teal">{step.title}</span>
                                            </div>
                                            <p className="text-midnight/60 mb-4">{step.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm font-bold text-midnight mb-3">ACTIVITIES</p>
                                            <ul className="space-y-2">
                                                {step.activities.map((activity, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green mt-1">•</span>
                                                        {activity}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-midnight mb-3">DELIVERABLES</p>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((deliverable, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-midnight/70">
                                                        <span className="text-sea-green">✓</span>
                                                        {deliverable}
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

            {/* ROI Section */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            The Returns Are Immediate and Compound
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <h3 className="font-bold text-sea-green mb-4">Immediate Returns (Month 1)</h3>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-pearl/80">5-10 hours per knowledge worker per week saved</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-pearl/80">50% reduction in research time</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-pearl/80">30% fewer repeated mistakes</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <h3 className="font-bold text-sea-green mb-4">Compound Returns (Year 1)</h3>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-pearl/80">Every query makes the system smarter</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-pearl/80">More users create more value</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green mt-1">✓</span>
                                        <span className="text-pearl/80">Your knowledge becomes a competitive moat</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-sea-green/20 rounded-xl p-8 border border-sea-green/30">
                            <p className="font-bold text-xl mb-4">ROI Example: 100-Person Organisation</p>
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div>
                                    <p className="text-sm text-pearl/60 mb-1">Time Saved</p>
                                    <p className="text-lg font-bold">£37,500/week</p>
                                    <p className="text-xs text-pearl/50">500 hours × £75/hour</p>
                                </div>
                                <div>
                                    <p className="text-sm text-pearl/60 mb-1">Better Decisions</p>
                                    <p className="text-lg font-bold">£2M/year</p>
                                    <p className="text-xs text-pearl/50">20% project success improvement</p>
                                </div>
                                <div>
                                    <p className="text-sm text-pearl/60 mb-1">Reduced Errors</p>
                                    <p className="text-lg font-bold">£500K/year</p>
                                    <p className="text-xs text-pearl/50">30% fewer mistakes</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <p className="text-2xl font-bold text-sea-green">30x ROI in Year 1</p>
                                <p className="text-sm text-pearl/60">£4.5M return on £150K investment</p>
                            </div>
                        </div>

                        <Button size="lg" variant="outline" className="mt-8 border-white text-white hover:bg-white hover:text-midnight" asChild>
                            <Link href="/resources/roi-calculator">Calculate Your ROI</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Knowledge Engineering Success Stories
                            </h2>
                            <p className="text-midnight/60 max-w-2xl text-lg">
                                Real transformations from real clients
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex" asChild>
                            <Link href="/resources/insights/case-studies">View All Case Studies</Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                        Three Ways to Begin Your Knowledge Journey
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-2">
                                    Knowledge Architecture Assessment
                                </h3>
                                <p className="text-sm text-sea-green font-semibold mb-4">2-Day Workshop</p>
                                <ul className="space-y-2 mb-6">
                                    {["Current state analysis", "Opportunity identification", "Architecture recommendation", "ROI projection"].map((item, idx) => (
                                        <li key={idx} className="text-sm text-midnight/70 flex items-start gap-2">
                                            <span className="text-sea-green mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm font-bold text-deep-teal mb-4">£10K investment</p>
                                <Button className="w-full" asChild>
                                    <Link href="/contact">Book Assessment</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-2 border-sea-green">
                            <CardContent className="p-8">
                                <span className="inline-block text-xs font-bold tracking-wider uppercase text-sea-green bg-sea-green/10 px-3 py-1 rounded-full mb-4">
                                    RECOMMENDED
                                </span>
                                <h3 className="font-display text-xl font-bold text-midnight mb-2">
                                    Proof of Value
                                </h3>
                                <p className="text-sm text-sea-green font-semibold mb-4">4-Week Pilot</p>
                                <ul className="space-y-2 mb-6">
                                    {["Focused use case", "Production-ready prototype", "Accuracy benchmarking", "Scale planning"].map((item, idx) => (
                                        <li key={idx} className="text-sm text-midnight/70 flex items-start gap-2">
                                            <span className="text-sea-green mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm font-bold text-deep-teal mb-4">From £30K</p>
                                <Button className="w-full" asChild>
                                    <Link href="/contact">Start Pilot</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-2">
                                    Full Implementation
                                </h3>
                                <p className="text-sm text-sea-green font-semibold mb-4">6-8 Week Deployment</p>
                                <ul className="space-y-2 mb-6">
                                    {["Complete system build", "All data sources integrated", "Production deployment", "Team training"].map((item, idx) => (
                                        <li key={idx} className="text-sm text-midnight/70 flex items-start gap-2">
                                            <span className="text-sea-green mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm font-bold text-deep-teal mb-4">From £150K</p>
                                <Button className="w-full" asChild>
                                    <Link href="/contact">Begin Transformation</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Bottom CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Information Into Intelligence?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Every day your knowledge remains disconnected is competitive advantage lost. Let&apos;s build your knowledge nervous system.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight" asChild>
                            <Link href="/contact">Schedule Discovery Call</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight" asChild>
                            <Link href="/contact">Request Demo</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight" asChild>
                            <Link href="/resources/roi-calculator">ROI Calculator</Link>
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-pearl/60 mt-12">
                        <span>✓ 50+ Knowledge Systems Deployed</span>
                        <span>✓ 90%+ Accuracy Achieved</span>
                        <span>✓ 6-Week Average Deployment</span>
                        <span>✓ ROI Guaranteed</span>
                    </div>
                </div>
            </section>
        </main>
    )
}
