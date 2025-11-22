import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "AI Readiness Assessment | Attercop",
    description: "Assess your organisation's AI maturity and readiness. Get a personalised roadmap for AI implementation.",
}

export default function AssessmentPage() {
    const stats = [
        { value: "5 min", label: "Assessment Time" },
        { value: "Free", label: "Report" },
        { value: "Instant", label: "Results" }
    ]

    const ctas = [
        { text: "Contact Us", href: "/contact" }
    ]

    return (
        <main>
            <PageHero
                headline="AI Readiness Assessment"
                subheadline="Discover your organisation's AI maturity and get a personalised roadmap for implementation."
                stats={stats}
                ctas={ctas}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-pearl rounded-xl p-12 text-center">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-6">
                                Interactive Assessment Tool Coming Soon
                            </h2>
                            <p className="text-lg text-midnight/60 mb-8">
                                We&apos;re building an interactive assessment tool to help you understand your AI readiness across strategy, data, infrastructure, and team capabilities.
                            </p>
                            <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
                                <h3 className="font-display text-xl font-bold text-midnight">
                                    What You&apos;ll Get:
                                </h3>
                                <ul className="space-y-2 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Comprehensive AI maturity score across 5 key dimensions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Personalised recommendations based on your industry and size</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Benchmarking against similar organisations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Actionable 100-day roadmap to improve your AI capabilities</span>
                                    </li>
                                </ul>
                            </div>
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Early Access</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
