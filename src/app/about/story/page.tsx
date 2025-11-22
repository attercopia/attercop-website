import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Lightbulb, Shield, Cpu } from "lucide-react"

export const metadata = {
    title: "Our Story | Attercop",
    description: "Learn about Attercop's journey from AI pioneers to trusted advisors for PE-backed firms. Decades of experience delivering production-ready AI systems.",
}

export default function OurStoryPage() {
    const stats = [
        { value: "1990s", label: "Building AI Systems" },
        { value: "4", label: "Tech Businesses Founded" },
        { value: "100+", label: "Research Papers" },
        { value: "Brighton", label: "& London Based" }
    ]

    const ctas = [
        { text: "Meet the Team", href: "/about/team" },
        { text: "View Our Approach", href: "/about/approach", variant: "outline" as const }
    ]

    const timeline = [
        {
            period: "1990s - 2010s",
            title: "Building the Foundation",
            description: "Our founders spent decades developing and deploying real-world, scaled machine learning solutions across multiple sectors. From early neural networks to enterprise data science, we learned what actually works in production."
        },
        {
            period: "2010s",
            title: "Serial Entrepreneurship",
            description: "Founded four technology businesses, gaining deep understanding of the challenges facing growing companies. Experienced firsthand the gap between AI promise and delivery."
        },
        {
            period: "2020-2022",
            title: "The PE Insight",
            description: "Working with private equity firms and their portfolio companies, we saw a pattern: brilliant AI potential hampered by consultants who couldn't ship. The best strategies mean nothing without production systems."
        },
        {
            period: "2022",
            title: "Attercop is Born",
            description: "Founded Attercop to bridge the gap between AI strategy and delivery. Not consultants, but builders. Not POCs, but production systems. Not years, but 100 days."
        },
        {
            period: "2023-Present",
            title: "Proven at Scale",
            description: "Transformed 50+ portfolio companies. Advised 15+ PE firms. Delivered systems that ship, generate ROI, and drive exits. Built the firm we wish had existed when we were operators."
        }
    ]

    const pillars = [
        {
            icon: Target,
            title: "Value",
            description: "Every AI project must deliver clear, measurable ROI driven by well-defined business goals. We reject technology-first approaches disconnected from outcomes."
        },
        {
            icon: Lightbulb,
            title: "Feasibility",
            description: "Honest assessment of data readiness, technical requirements, and implementation complexity. We tell you what's actually achievable within your constraints."
        },
        {
            icon: Cpu,
            title: "Capability",
            description: "Building organizational capacity to sustain and evolve AI systems. It's not just technology—it's people, processes, and culture."
        },
        {
            icon: Shield,
            title: "Advisability",
            description: "Responsible innovation grounded in explainability, fairness, robustness, privacy, and transparency. Ethics aren't optional—they're fundamental."
        }
    ]

    return (
        <main>
            <PageHero
                headline="Our Story"
                subheadline="From AI pioneers in the 1990s to trusted advisors for PE-backed firms. Three decades of building production systems that actually ship."
                stats={stats}
                ctas={ctas}
            />

            {/* Mission Statement */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-8">
                            Why We Exist
                        </h2>
                        <p className="text-xl text-midnight/70 leading-relaxed mb-6">
                            We founded Attercop because we were tired of seeing brilliant AI strategies gather dust. Tired of POCs that never shipped. Tired of consultants who couldn&apos;t code and engineers who didn&apos;t understand private equity timelines.
                        </p>
                        <p className="text-xl text-midnight/70 leading-relaxed mb-6">
                            Every AI project should deliver clear and measurable ROI, driven by well-defined goals. Not technology for technology&apos;s sake. Not research papers masquerading as business solutions. Production systems that transform operations and drive exits.
                        </p>
                        <p className="text-xl font-semibold text-sea-green">
                            We&apos;re the firm we wish had existed when we were operators.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Our Journey
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                Three decades of building, learning, and evolving our approach to AI implementation.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {timeline.map((milestone, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-sea-green/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-sea-green rounded-full"></div>
                                    <div className="bg-white rounded-xl p-8 shadow-sm">
                                        <div className="text-sm font-bold text-sea-green mb-2">
                                            {milestone.period}
                                        </div>
                                        <h3 className="font-display text-2xl font-bold text-midnight mb-3">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-midnight/70 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Four Pillars */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Our Four Pillars
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                The framework that guides every engagement, ensuring we deliver measurable value responsibly.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {pillars.map((pillar, index) => {
                                const Icon = pillar.icon
                                return (
                                    <div key={index} className="bg-pearl rounded-xl p-8">
                                        <div className="w-14 h-14 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-sea-green" />
                                        </div>
                                        <h3 className="font-display text-2xl font-bold text-midnight mb-3">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-midnight/70 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Brighton */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                                Why Brighton & London?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <h3 className="font-display text-2xl font-bold mb-4">🏖️ Brighton</h3>
                                <p className="text-pearl/70 leading-relaxed mb-4">
                                    Brighton is where innovation meets quality of life. A thriving tech scene without the London burnout. Close enough to the capital for client meetings, far enough away to think clearly.
                                </p>
                                <p className="text-pearl/70 leading-relaxed">
                                    Our seaside location reflects our philosophy: serious about delivery, unserious about corporate theatre. We&apos;d rather ship code than attend networking events.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                                <h3 className="font-display text-2xl font-bold mb-4">🏙️ London</h3>
                                <p className="text-pearl/70 leading-relaxed mb-4">
                                    London is where the deals happen. Our London presence keeps us connected to the PE and portfolio company ecosystem that drives our work.
                                </p>
                                <p className="text-pearl/70 leading-relaxed">
                                    Two locations give us the best of both worlds: deep focus time in Brighton, client proximity in London. Whatever your portfolio needs, we&apos;re there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                What Makes Us Different
                            </h2>
                            <p className="text-lg text-midnight/60">
                                We&apos;re not consultants. We&apos;re builders who understand PE.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Decades of Deep Expertise
                                </h3>
                                <p className="text-midnight/70">
                                    Building AI systems since the 1990s. Not buzzword-chasers who discovered LLMs in 2023. We understand the fundamentals because we built the field.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Production-First Mentality
                                </h3>
                                <p className="text-midnight/70">
                                    Every engagement delivers production-ready systems. Not POCs. Not research. Not &quot;phase 2 will ship.&quot; We build things that actually work.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    PE DNA
                                </h3>
                                <p className="text-midnight/70">
                                    We understand carry, IRR, and exit multiples. Founded multiple businesses. Know what it means when the fund clock is ticking. 100-day transformations aren&apos;t marketing—they&apos;re how we work.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Model-Agnostic Approach
                                </h3>
                                <p className="text-midnight/70">
                                    We don&apos;t sell proprietary platforms or lock you into specific vendors. Open source first. Best tool for the job. Your data stays yours.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Responsible Innovation
                                </h3>
                                <p className="text-midnight/70">
                                    Innovation is only impactful when done responsibly. We balance transformative capability with ethical considerations, explainability, fairness, and privacy. Trust isn&apos;t optional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-midnight/70 mb-12">
                            Let&apos;s discuss how we can help transform your portfolio with production-ready AI systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book a Discovery Call</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/about/team">Meet the Team</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
