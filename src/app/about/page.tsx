import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { InfoCard } from "@/components/ui/info-card"
import { CallToAction } from "@/components/sections/call-to-action"

export default function AboutPage() {
    const stats = [
        { value: "2020", label: "Founded" },
        { value: "Brighton", label: "Headquarters" },
        { value: "50+", label: "Companies Served" },
        { value: "15+", label: "PE Firms" }
    ]

    const ctas = [
        { text: "Meet the Team", href: "/about/team" },
        { text: "Contact Us", href: "/contact", variant: "outline" as const }
    ]

    return (
        <main>
            <PageHero
                headline="Knowledge-First AI for PE-Backed Growth"
                subheadline="We're a Brighton-based AI consultancy specializing in production-ready systems for private equity and their portfolio companies."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            <Section>
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        title="Our Story"
                        align="left"
                        className="mb-6"
                    />
                    <p className="text-xl text-midnight/70 mb-8 leading-relaxed">
                        Founded in Brighton in 2020, Attercop specializes in delivering production-ready AI systems for private equity firms and their portfolio companies. We combine deep technical expertise with an understanding of PE timelines and value creation imperatives.
                    </p>
                    <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                        Our knowledge-first approach ensures AI systems that are accurate, explainable, and built on solid foundations rather than hype.
                    </p>
                </div>
            </Section>

            <Section className="bg-pearl">
                <SectionHeader title="Our Approach" className="mb-12" />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Thesis-Based Methodology", description: "Every engagement starts with clear hypotheses and measurable success criteria" },
                        { title: "Knowledge-First Philosophy", description: "We build AI on solid knowledge foundations, not just pattern matching" },
                        { title: "PE-Aligned Delivery", description: "100-day transformations that match PE timelines and value creation plans" }
                    ].map((pillar, index) => (
                        <InfoCard
                            key={index}
                            title={pillar.title}
                            description={pillar.description}
                        />
                    ))}
                </div>
            </Section>

            <CallToAction
                title="Ready to Work Together?"
                description="Let's discuss how we can help drive AI value for your organization."
                primaryAction={{ text: "Get in Touch", href: "/contact" }}
            />
        </main>
    )
}
