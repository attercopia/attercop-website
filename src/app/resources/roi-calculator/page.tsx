import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "AI ROI Calculator | Attercop",
    description: "Calculate the potential return on investment from AI implementation. Get data-driven projections for your business.",
}

export default function ROICalculatorPage() {
    const stats = [
        { value: "3x", label: "Average ROI" },
        { value: "100", label: "Days to Value" },
        { value: "Free", label: "Calculation" }
    ]

    const ctas = [
        { text: "Contact Us", href: "/contact" }
    ]

    return (
        <main>
            <PageHero
                headline="AI ROI Calculator"
                subheadline="Calculate the potential return on investment from AI implementation tailored to your business."
                stats={stats}
                ctas={ctas}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-pearl rounded-xl p-12 text-center">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-6">
                                Interactive ROI Calculator Coming Soon
                            </h2>
                            <p className="text-lg text-midnight/60 mb-8">
                                We&apos;re building an interactive calculator to help you model the financial impact of AI initiatives across your organisation.
                            </p>
                            <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
                                <h3 className="font-display text-xl font-bold text-midnight">
                                    What You&apos;ll Be Able to Calculate:
                                </h3>
                                <ul className="space-y-2 text-midnight/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Efficiency gains from process automation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Revenue impact from enhanced capabilities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Cost savings from reduced manual work</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Implementation costs and timeline</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Break-even analysis and payback period</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sea-green">✓</span>
                                        <span>Exit value impact for PE-backed firms</span>
                                    </li>
                                </ul>
                            </div>
                            <Button size="lg" asChild>
                                <Link href="/contact">Get a Custom ROI Analysis</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
