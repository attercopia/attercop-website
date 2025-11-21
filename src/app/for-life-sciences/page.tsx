import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LifeSciencesPage() {
    const stats = [
        { value: "FDA/EMA", label: "Compliant" },
        { value: "95%", label: "Coding Accuracy" },
        { value: "70%", label: "Faster Publications" },
        { value: "100%", label: "HIPAA Secure" }
    ]

    const ctas = [
        { text: "Book Life Sciences Consultation", href: "/contact" },
        { text: "View Case Studies", href: "/case-studies", variant: "outline" as const }
    ]

    return (
        <main>
            <PageHero
                headline="AI Innovation Within Regulatory Boundaries"
                subheadline="Specialist AI solutions for life sciences and healthcare that deliver innovation while maintaining full regulatory compliance."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Life Sciences AI Solutions
                        </h2>
                        <p className="text-xl text-midnight/70">
                            Specialized expertise in healthcare and pharmaceutical AI that understands regulatory requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Medical Communications AI", description: "70% faster publication cycles with full compliance" },
                            { title: "Clinical Data Intelligence", description: "Knowledge graphs for research and trial optimization" },
                            { title: "Pharmaceutical R&D", description: "Drug formulation and biomarker discovery" },
                            { title: "Healthcare Operations", description: "95% accuracy clinical coding and automation" },
                            { title: "Regulatory Compliance", description: "FDA/EMA/MHRA ready validation packages" },
                            { title: "Life Sciences Resources", description: "Compliance guides and ROI calculators" }
                        ].map((service, index) => (
                            <div key={index} className="bg-pearl rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-midnight/70 mb-4">{service.description}</p>
                                <span className="text-sm text-deep-teal font-semibold">Coming soon</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Ready to Innovate Compliantly?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Let&apos;s discuss how we can help your life sciences organization leverage AI safely and effectively.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Schedule Consultation</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
