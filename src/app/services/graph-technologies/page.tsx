import { PageHero } from "@/components/sections/page-hero"
import { FAQSection } from "@/components/sections/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Network, Database, Zap, Brain } from "lucide-react"

export default function GraphTechnologiesPage() {
    const stats = [
        { value: "10+", label: "Years Neo4j Experience" },
        { value: "1B+", label: "Nodes Managed" },
        { value: "50+", label: "Knowledge Graphs" },
        { value: "90%", label: "Query Performance Gain" }
    ]

    const ctas = [
        { text: "Explore Graph Solutions", href: "/contact" },
        { text: "View Graph Case Studies", href: "/case-studies", variant: "outline" as const }
    ]

    const graphCapabilities = [
        {
            icon: Database,
            title: "Knowledge Graph Construction",
            items: [
                "Ontology design and development",
                "Data integration and mapping",
                "Entity resolution and linking",
                "Graph schema optimisation",
                "Semantic enrichment"
            ]
        },
        {
            icon: Brain,
            title: "Graph-Enhanced AI",
            items: [
                "Knowledge-grounded generation",
                "Explainable AI with graph reasoning",
                "Recommendation systems",
                "Fraud detection networks",
                "Relationship-based predictions"
            ]
        },
        {
            icon: Network,
            title: "Enterprise Applications",
            items: [
                "Master data management",
                "Customer 360 views",
                "Supply chain networks",
                "Regulatory compliance mapping",
                "Impact analysis"
            ]
        },
        {
            icon: Zap,
            title: "Graph Analytics",
            items: [
                "Community detection",
                "Path finding and optimisation",
                "Centrality analysis",
                "Pattern matching",
                "Network analysis"
            ]
        }
    ]

    const faqs = [
        {
            question: "When should I use a graph database instead of a relational database?",
            answer: "Graph databases excel when relationships are as important as the data itself - social networks, recommendation engines, fraud detection, knowledge management, and impact analysis. If you find yourself writing complex JOINs or struggling with many-to-many relationships, a graph database might be the answer."
        },
        {
            question: "How do knowledge graphs improve AI accuracy?",
            answer: "Knowledge graphs provide structured context that grounds AI outputs in verified facts. This dramatically reduces hallucinations, enables explainable reasoning, and allows AI to leverage domain expertise. We&apos;ve achieved 90% reduction in hallucinations by integrating knowledge graphs with LLMs."
        },
        {
            question: "What&apos;s your experience with Neo4j?",
            answer: "We have over 10 years of Neo4j experience, managing graphs with billions of nodes. We&apos;re experts in graph data modelling, query optimisation, and scaling graph databases for enterprise workloads. We also work with other graph technologies as needed."
        },
        {
            question: "Can you integrate graph databases with our existing systems?",
            answer: "Absolutely. We specialise in hybrid architectures that combine graph databases with relational databases, data warehouses, and other systems. Graph databases complement existing infrastructure rather than replacing it."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Knowledge Graphs That Power Intelligent Systems"
                subheadline="From enterprise knowledge management to AI-enhanced insights - graph technologies that reveal hidden connections"
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            The Power of Connected Data
                        </h2>
                        <p className="text-xl text-midnight/70 mb-6 leading-relaxed">
                            Traditional databases store data in tables. Graph databases store relationships as first-class citizens, enabling you to discover insights that would be impossible to find otherwise.
                        </p>
                        <p className="text-lg text-midnight/70 leading-relaxed">
                            Attercop specialises in graph technologies, particularly Neo4j, to build knowledge graphs that power intelligent systems. We&apos;ve constructed graphs with billions of nodes, enabling everything from AI-enhanced generation to enterprise master data management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Graph Capabilities */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-16 text-center">
                            Graph Technology Capabilities
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {graphCapabilities.map((capability, index) => (
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

            {/* Use Cases */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Enterprise Use Cases
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">Knowledge Management</h3>
                                <p className="text-midnight/70 mb-4">
                                    Build enterprise knowledge graphs that capture relationships between concepts, documents, people, and processes.
                                </p>
                                <ul className="space-y-2 text-sm text-midnight/60">
                                    <li>• Semantic search</li>
                                    <li>• Expert finding</li>
                                    <li>• Document relationships</li>
                                </ul>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">Customer Intelligence</h3>
                                <p className="text-midnight/70 mb-4">
                                    Create 360-degree customer views by connecting interactions, preferences, and relationships across touchpoints.
                                </p>
                                <ul className="space-y-2 text-sm text-midnight/60">
                                    <li>• Recommendation engines</li>
                                    <li>• Churn prediction</li>
                                    <li>• Cross-sell opportunities</li>
                                </ul>
                            </div>
                            <div className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-4">Fraud Detection</h3>
                                <p className="text-midnight/70 mb-4">
                                    Identify suspicious patterns and networks by analysing relationships between entities in real-time.
                                </p>
                                <ul className="space-y-2 text-sm text-midnight/60">
                                    <li>• Ring detection</li>
                                    <li>• Pattern matching</li>
                                    <li>• Real-time alerts</li>
                                </ul>
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
                            Our Graph Technology Stack
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Graph Databases</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• Neo4j (primary expertise)</li>
                                    <li>• Amazon Neptune</li>
                                    <li>• Azure Cosmos DB (Gremlin API)</li>
                                    <li>• RDF triple stores</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Semantic Technologies</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• OWL ontology development</li>
                                    <li>• SPARQL query optimisation</li>
                                    <li>• RDF data integration</li>
                                    <li>• Linked data principles</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Graph Analytics</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• Neo4j Graph Data Science</li>
                                    <li>• NetworkX for Python</li>
                                    <li>• Graph algorithms library</li>
                                    <li>• Custom algorithm development</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-xl p-8">
                                <h3 className="font-display text-2xl font-bold mb-6 text-sea-green">Integration Tools</h3>
                                <ul className="space-y-3 text-pearl/90">
                                    <li>• ETL pipelines</li>
                                    <li>• Real-time data sync</li>
                                    <li>• API development</li>
                                    <li>• Hybrid database architectures</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                title="Graph Technologies FAQs"
                faqs={faqs}
            />

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Unlock the Power of Connected Data
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Discover insights hidden in relationships. Build knowledge graphs that power intelligent systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Explore Graph Solutions</Link>
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
