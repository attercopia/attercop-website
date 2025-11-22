import { PageHero } from "@/components/sections/page-hero"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export const metadata = {
    title: "Our Team | Attercop",
    description: "Meet the team behind Attercop. Experienced AI practitioners, data scientists, and strategists dedicated to delivering production-ready AI systems.",
}

export default function TeamPage() {
    const stats = [
        { value: "20+", label: "Years Average Experience" },
        { value: "100+", label: "Published Papers" },
        { value: "4", label: "AI Patents" },
        { value: "50+", label: "Companies Transformed" }
    ]

    const ctas = [
        { text: "Join Our Team", href: "/careers" },
        { text: "Contact Us", href: "/contact", variant: "outline" as const }
    ]

    const teamMembers = [
        {
            name: "Graeme Cox",
            title: "Founder / CEO",
            image: "/images/team/graeme-cox.jpg",
            bio: "Serial entrepreneur and battle-hardened CTO with over 20 years in AI, ML, and data science across multiple sectors. Holds an AI degree from Edinburgh University, has two AI patents and four research papers to his name, plus founded four technology businesses.",
            linkedin: "https://linkedin.com/in/graemecox"
        },
        {
            name: "Tiffany Willcox",
            title: "Co-Founder / Partner",
            image: "/images/team/tiffany-willcox.jpg",
            bio: "Technology strategist with two decades of experience in AI adoption and cloud transformation. Previously served as CTO and CIO overseeing enterprise-scale initiatives including generative AI and digital infrastructure planning.",
            linkedin: "https://linkedin.com/in/tiffanywillcox"
        },
        {
            name: "Esteban A Rissola",
            title: "Lead Data Scientist",
            image: "/images/team/esteban-rissola.jpg",
            bio: "Applied research scientist with PhD in Computer Science from USI. Specializes in NLP and ML applications, with international publications and expertise in generative AI and semantic search.",
            linkedin: "https://linkedin.com/in/estebanrissola"
        },
        {
            name: "Hristijan Gjoreski",
            title: "Scientific Advisor",
            image: "/images/team/hristijan-gjoreski.jpg",
            bio: "Ranked among the \"top 2% of scientists globally for 2022.\" Associate Professor with 100+ published papers. Named Best Young Scientist in Macedonia in 2017 with multiple AI/ML competition wins.",
            linkedin: "https://linkedin.com/in/hristijangjoreski"
        }
    ]

    return (
        <main>
            <PageHero
                headline="Meet the Team"
                subheadline="Experienced AI practitioners, data scientists, and strategists dedicated to delivering production-ready systems for PE-backed firms."
                stats={stats}
                ctas={ctas}
            />

            {/* Leadership Team */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Leadership Team
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                Our leadership brings deep expertise in AI, private equity, and enterprise transformation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="group">
                                    <div className="bg-pearl rounded-xl overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-[1.02]">
                                        <div className="aspect-square relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-display text-2xl font-bold text-midnight">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sea-green font-semibold">
                                                    {member.title}
                                                </p>
                                            </div>
                                            {member.linkedin && (
                                                <Link
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-midnight/40 hover:text-sea-green transition-colors"
                                                >
                                                    <Linkedin className="w-6 h-6" />
                                                </Link>
                                            )}
                                        </div>
                                        <p className="text-midnight/70 leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                                Our Values
                            </h2>
                            <p className="text-lg text-midnight/60 max-w-3xl mx-auto">
                                The principles that guide how we work with clients and build AI systems.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Production-First
                                </h3>
                                <p className="text-midnight/70">
                                    We build systems that actually ship. No POCs that gather dust. Every engagement delivers production-ready AI.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    PE Timelines
                                </h3>
                                <p className="text-midnight/70">
                                    We understand carry and value creation plans. 100-day transformations aligned with your investment thesis.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-2xl">🔬</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    Science-Backed
                                </h3>
                                <p className="text-midnight/70">
                                    Real AI expertise from PhD researchers and published scientists. Not consultants pretending to understand LLMs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Join Our Team
                        </h2>
                        <p className="text-xl text-pearl/70 mb-12">
                            We&apos;re always looking for exceptional AI practitioners, data scientists, and engineers who want to build production systems that matter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/careers"
                                className="inline-flex items-center justify-center px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors"
                            >
                                View Open Positions
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
