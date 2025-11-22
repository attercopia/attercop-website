import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { InfoCard } from "@/components/ui/info-card"
import { CallToAction } from "@/components/sections/call-to-action"

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

            <Section>
                <SectionHeader
                    title="Comprehensive AI Capabilities"
                    description="Full-service AI delivery from strategy through to production deployment and ongoing optimization."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[
                        { title: "AI Strategy & Roadmap", href: "/services/ai-strategy-roadmap" },
                        { title: "AI Governance", href: "/services/ai-governance" },
                        { title: "Agentic AI", href: "/services/agentic-ai" },
                        { title: "Conversational AI", href: "/services/conversational-ai" },
                        { title: "Knowledge Engineering", href: "/services/knowledge-engineering" }
                    ].map((service, index) => (
                        <InfoCard
                            key={index}
                            title={service.title}
                            href={service.href}
                        />
                    ))}
                </div>
            </Section>

            <CallToAction
                title="Ready to Transform Your Business?"
                description="Let's discuss how we can help drive AI value for your organization."
                primaryAction={{ text: "Get Started", href: "/contact" }}
            />
        </main>
    )
}
