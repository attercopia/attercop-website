import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "Webinars | Attercop",
    description: "Watch our webinars on AI strategy, implementation, and best practices for PE firms and portfolio companies.",
}

export default function WebinarsPage() {
    const stats = [
        { value: "Monthly", label: "New Content" },
        { value: "Free", label: "Registration" }
    ]

    const ctas = [
        { text: "Contact Us", href: "/contact" }
    ]

    return (
        <main>
            <PageHero
                headline="Webinars & Events"
                subheadline="Learn from our experts through live webinars and on-demand recordings covering AI strategy and implementation."
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
                            We&apos;re launching our webinar series covering AI strategy, knowledge engineering, and practical implementation guidance for PE firms and portfolio companies.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Register Your Interest</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
