import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "Whitepapers | Attercop",
    description: "In-depth guides and research on AI implementation for PE-backed firms. Download our whitepapers on knowledge engineering, agentic AI, and value creation.",
}

export default function WhitepapersPage() {
    const stats = [
        { value: "20+", label: "Whitepapers" },
        { value: "10K+", label: "Downloads" },
        { value: "Free", label: "Access" }
    ]

    const ctas = [
        { text: "Contact Us", href: "/contact" }
    ]

    return (
        <main>
            <PageHero
                headline="Whitepapers & Research"
                subheadline="In-depth guides on AI implementation, knowledge engineering, and value creation for PE-backed firms."
                stats={stats}
                ctas={ctas}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-6">
                            Coming Soon
                        </h2>
                        <p className="text-lg text-midnight/60 mb-8">
                            We&apos;re currently preparing our comprehensive library of whitepapers and research on AI implementation for private equity and portfolio companies.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Get Notified When Available</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
