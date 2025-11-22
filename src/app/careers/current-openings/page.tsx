import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MapPin, Briefcase, Globe } from "lucide-react"

export const metadata = {
    title: "Current Openings | Careers | Attercop",
    description: "View current job openings at Attercop. Join our team of AI experts building production-ready systems for PE-backed firms.",
}

export default function CurrentOpeningsPage() {
    const stats = [
        { value: "Remote", label: "Work Options" },
        { value: "Brighton", label: "& London" },
        { value: "100%", label: "English Required" },
        { value: "No", label: "Agencies" }
    ]

    const ctas = [
        { text: "Contact Us", href: "mailto:hello@attercop.com" },
        { text: "About Attercop", href: "/about/story", variant: "outline" as const }
    ]

    return (
        <main>
            <PageHero
                headline="Current Openings"
                subheadline="Join our team of AI experts building production-ready systems for PE-backed firms"
                stats={stats}
                ctas={ctas}
            />

            {/* Current Status */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-pearl rounded-xl p-12 text-center">
                            <Briefcase className="w-16 h-16 text-sea-green mx-auto mb-6" />
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                                No Current Openings Available
                            </h2>
                            <p className="text-lg text-midnight/70 mb-8 max-w-2xl mx-auto">
                                We&apos;re not currently hiring, but we&apos;re always interested in hearing from exceptional AI practitioners, data scientists, and engineers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="mailto:hello@attercop.com">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Get in Touch
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/about/team">Meet the Team</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Look For */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-midnight mb-4">
                                What We Look For
                            </h2>
                            <p className="text-lg text-midnight/60">
                                When we do hire, here&apos;s what matters to us
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Production-First Mindset
                                </h3>
                                <p className="text-midnight/70">
                                    You ship code that actually works. Not POCs that gather dust. You understand the difference between a research paper and a production system, and you know how to bridge that gap.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Real AI Expertise
                                </h3>
                                <p className="text-midnight/70">
                                    Deep understanding of machine learning, NLP, or knowledge engineering. You were building AI systems before ChatGPT made it cool. PhDs, published research, or demonstrable expertise in production AI systems.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Business Acumen
                                </h3>
                                <p className="text-midnight/70">
                                    You understand ROI, timelines, and stakeholder management. Ideally, you&apos;ve worked with PE-backed firms or understand the urgency of value creation plans.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Excellent English Communication
                                </h3>
                                <p className="text-midnight/70">
                                    All roles require excellent English. We work entirely in English for meetings, client calls, and business communications. You need to explain complex technical concepts to non-technical stakeholders.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Self-Direction & Ownership
                                </h3>
                                <p className="text-midnight/70">
                                    You don&apos;t need hand-holding. You take ownership of problems, figure out solutions, and deliver results. You&apos;re comfortable with ambiguity and can work independently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working at Attercop */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-midnight mb-4">
                                Working at Attercop
                            </h2>
                            <p className="text-lg text-midnight/60">
                                What it&apos;s like to be part of our team
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-pearl rounded-xl p-8">
                                <MapPin className="w-12 h-12 text-sea-green mb-4" />
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Brighton & London
                                </h3>
                                <p className="text-midnight/70">
                                    Offices in Brighton (seaside quality of life) and London (PE ecosystem proximity). Flexible remote working for the right candidates.
                                </p>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <Briefcase className="w-12 h-12 text-sea-green mb-4" />
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Interesting Work
                                </h3>
                                <p className="text-midnight/70">
                                    Real AI challenges for enterprise clients. You&apos;ll work on production systems that matter, not just demos or research projects.
                                </p>
                            </div>

                            <div className="bg-pearl rounded-xl p-8">
                                <Globe className="w-12 h-12 text-sea-green mb-4" />
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    High Standards
                                </h3>
                                <p className="text-midnight/70">
                                    We hire the best and expect excellence. Small team means your work has direct impact on clients and the business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl font-bold mb-4">
                                Important Information
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <h3 className="font-display text-xl font-bold mb-3">
                                    English Language Requirement
                                </h3>
                                <p className="text-pearl/70">
                                    All roles require excellent English. We work entirely in English for meetings, client calls, and business communications. This is non-negotiable.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <h3 className="font-display text-xl font-bold mb-3">
                                    No Recruitment Agencies
                                </h3>
                                <p className="text-pearl/70">
                                    We do not work with recruitment agencies. Please do not contact us if you&apos;re representing candidates. We hire directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Interested in Exploring Opportunities?
                        </h2>
                        <p className="text-xl text-midnight/70 mb-12">
                            Even though we&apos;re not currently hiring, we&apos;re always interested in hearing from exceptional people. Send us your CV and a brief note about what you do.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="mailto:hello@attercop.com">
                                    <Mail className="w-5 h-5 mr-2" />
                                    hello@attercop.com
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/about/story">Learn About Attercop</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
