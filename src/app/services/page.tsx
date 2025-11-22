import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
    const stats = [
        { value: "5", label: "Core Services" },
        { value: "50+", label: "Companies Served" },
        { value: "100%", label: "PE-Focused" },
        { value: "3x", label: "Average ROI" }
    ]

    const ctas = [
        { text: "Discuss Your Needs", href: "/contact" },
        { text: "View Case Studies", href: "/case-studies", variant: "outline" as const }
    ]

    return (
        <main>
            <PageHero
                headline="AI Services Built for PE-Backed Growth"
                subheadline="From strategy to deployment, we deliver production-ready AI systems that drive measurable value across your portfolio."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Comprehensive AI Capabilities
                        </h2>
                        <p className="text-xl text-midnight/70 mb-12">
                            Full-service AI delivery from strategy through to production deployment and ongoing optimization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            { title: "AI Strategy & Roadmap", href: "/services/ai-strategy-roadmap" },
                            { title: "AI Governance", href: "/services/ai-governance" },
                            { title: "Agentic AI", href: "/services/agentic-ai" },
                            { title: "Conversational AI", href: "/services/conversational-ai" },
                            { title: "Knowledge Engineering", href: "/services/knowledge-engineering" }
                        ].map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group bg-pearl rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <h3 className="font-display text-xl font-bold text-midnight mb-2 group-hover:text-sea-green transition-colors">
                                    {service.title}
                                </h3>
                                <span className="text-sm text-deep-teal font-semibold">Learn more →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Let&apos;s discuss how our AI services can drive value for your organization.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
