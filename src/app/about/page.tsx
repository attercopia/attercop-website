import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Our Story
                        </h2>
                        <p className="text-xl text-midnight/70 mb-8 leading-relaxed">
                            Founded in Brighton in 2020, Attercop specializes in delivering production-ready AI systems for private equity firms and their portfolio companies. We combine deep technical expertise with an understanding of PE timelines and value creation imperatives.
                        </p>
                        <p className="text-lg text-midnight/70 mb-8 leading-relaxed">
                            Our knowledge-first approach ensures AI systems that are accurate, explainable, and built on solid foundations rather than hype.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                            Our Approach
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Thesis-Based Methodology", description: "Every engagement starts with clear hypotheses and measurable success criteria" },
                                { title: "Knowledge-First Philosophy", description: "We build AI on solid knowledge foundations, not just pattern matching" },
                                { title: "PE-Aligned Delivery", description: "100-day transformations that match PE timelines and value creation plans" }
                            ].map((pillar, index) => (
                                <div key={index} className="bg-white rounded-xl p-8">
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-midnight/70">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Let&apos;s discuss how we can help drive AI value for your organization.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
