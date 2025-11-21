import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Calculator, BookOpen, Video, Download, ExternalLink } from "lucide-react"

export default function PEResourcesPage() {
    const stats = [
        { value: "10+", label: "Playbooks" },
        { value: "50+", label: "Case Studies" },
        { value: "Free", label: "Resources" },
        { value: "24/7", label: "Access" }
    ]

    const ctas = [
        { text: "Download PE AI Playbook", href: "/contact" },
        { text: "Contact Us", href: "/contact", variant: "outline" as const }
    ]

    const resources = [
        {
            icon: FileText,
            title: "PE AI Playbook",
            description: "Comprehensive guide to AI strategy for private equity firms. Covers deal sourcing, DD, portfolio transformation, and exit planning.",
            type: "PDF Download",
            cta: "Download Playbook"
        },
        {
            icon: FileText,
            title: "Technical DD Framework",
            description: "Our proven framework for evaluating AI capabilities, data assets, and transformation potential during due diligence.",
            type: "PDF Download",
            cta: "Download Framework"
        },
        {
            icon: Calculator,
            title: "AI ROI Calculator",
            description: "Interactive tool to model AI investment returns across different use cases and portfolio companies.",
            type: "Web Tool",
            cta: "Launch Calculator"
        },
        {
            icon: BookOpen,
            title: "100-Day Transformation Playbook",
            description: "Step-by-step guide to implementing AI in portfolio companies on PE timelines.",
            type: "PDF Download",
            cta: "Download Playbook"
        },
        {
            icon: FileText,
            title: "Exit Readiness Checklist",
            description: "Comprehensive checklist for preparing AI capabilities for buyer due diligence and maximizing exit value.",
            type: "PDF Download",
            cta: "Download Checklist"
        },
        {
            icon: Video,
            title: "GP Briefing Series",
            description: "Quarterly video briefings on AI trends, opportunities, and risks for private equity.",
            type: "Video Series",
            cta: "Watch Latest"
        }
    ]

    const caseStudies = [
        {
            title: "Portfolio-Wide AI Transformation",
            sector: "Multi-Sector PE Fund",
            impact: "£250M+ value created across 8 portfolio companies",
            link: "/case-studies"
        },
        {
            title: "Technical DD Drives Investment Decision",
            sector: "Healthcare AI",
            impact: "£15M hidden value identified, critical risks mitigated",
            link: "/case-studies"
        },
        {
            title: "AI-Enhanced Exit Multiple",
            sector: "B2B SaaS",
            impact: "2.3x multiple improvement through AI positioning",
            link: "/case-studies"
        }
    ]

    return (
        <main>
            <PageHero
                headline="Resources for PE Firms"
                subheadline="Playbooks, frameworks, tools, and insights to help you navigate AI strategy across the investment lifecycle."
                stats={stats}
                ctas={ctas}
                backgroundImage="/images/hero-background.png"
            />

            {/* Downloadable Resources */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Downloadable Resources
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            Practical tools and frameworks to accelerate your AI journey
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.map((resource, index) => (
                                <div key={index} className="bg-pearl rounded-xl p-8 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                        <resource.icon className="w-6 h-6 text-sea-green" />
                                    </div>
                                    <div className="text-sm font-semibold text-deep-teal mb-2">{resource.type}</div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                        {resource.title}
                                    </h3>
                                    <p className="text-midnight/70 mb-6 leading-relaxed">
                                        {resource.description}
                                    </p>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/contact">
                                            <Download className="w-4 h-4 mr-2" />
                                            {resource.cta}
                                        </Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
                            Featured Case Studies
                        </h2>
                        <p className="text-xl text-midnight/70 mb-16 text-center max-w-3xl mx-auto">
                            Real results from PE firms and their portfolio companies
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {caseStudies.map((study, index) => (
                                <Link
                                    key={index}
                                    href={study.link}
                                    className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
                                >
                                    <div className="text-sm font-semibold text-deep-teal mb-3">{study.sector}</div>
                                    <h3 className="font-display text-xl font-bold text-midnight mb-4 group-hover:text-sea-green transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-midnight/70 mb-4">{study.impact}</p>
                                    <div className="flex items-center gap-2 text-sea-green font-semibold">
                                        <span>Read case study</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button size="lg" asChild>
                                <Link href="/case-studies">View All Case Studies</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Webinars & Events */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6 text-center">
                            Webinars & Events
                        </h2>
                        <p className="text-xl text-midnight/70 mb-12 text-center">
                            Join our quarterly briefings and workshops for PE professionals
                        </p>

                        <div className="bg-pearl rounded-xl p-8 mb-8">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-20 h-20 bg-sea-green/10 rounded-lg flex items-center justify-center">
                                    <Video className="w-10 h-10 text-sea-green" />
                                </div>
                                <div className="flex-grow">
                                    <div className="text-sm font-semibold text-deep-teal mb-2">Upcoming Webinar</div>
                                    <h3 className="font-display text-2xl font-bold text-midnight mb-3">
                                        AI Due Diligence Masterclass
                                    </h3>
                                    <p className="text-midnight/70 mb-4">
                                        Learn how to evaluate AI capabilities, quantify data assets, and identify transformation opportunities during technical DD.
                                    </p>
                                    <Button asChild>
                                        <Link href="/contact">Register Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/contact" className="text-deep-teal hover:text-sea-green font-semibold">
                                View all upcoming events →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-24 bg-deep-teal text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Stay Ahead of AI Disruption
                        </h2>
                        <p className="text-xl text-pearl/80 mb-12">
                            Subscribe to our quarterly AI intelligence briefing for PE professionals. Get insights on emerging opportunities, sector disruption, and best practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                            <Button size="lg" asChild className="bg-white text-midnight hover:bg-pearl">
                                <Link href="/contact">Subscribe to Briefing</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Need Personalized Support?
                    </h2>
                    <p className="text-xl text-pearl/80 mb-12 max-w-3xl mx-auto">
                        Our team is ready to discuss your specific AI challenges and opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Contact Our Team</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-midnight">
                            <Link href="/for-pe-firms">Back to PE Firms Overview</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
