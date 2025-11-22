import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Users, TrendingUp, Award, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Join Attercop | Careers in AI Consulting and Strategy",
    description: "Join Attercop's growing team of AI strategy and data experts. See our latest roles and be part of building impactful AI solutions for enterprise clients.",
}

const benefits = [
    {
        icon: Target,
        title: "Make a real impact with AI",
        description: "Work on cutting-edge projects that leverage AI to solve complex challenges and drive measurable business results."
    },
    {
        icon: Zap,
        title: "Shape the future of AI",
        description: "Be at the forefront of AI innovation, contributing to projects that are transforming industries."
    },
    {
        icon: TrendingUp,
        title: "Unlock your potential",
        description: "Grow your skills and expertise through continuous learning and development opportunities in the exciting field of AI."
    },
    {
        icon: Award,
        title: "Work with the best & brightest",
        description: "Collaborate with a talented team of AI experts, data scientists, engineers, and consultants."
    },
    {
        icon: Heart,
        title: "Diversity, equality & inclusion",
        description: "Together, we're crafting a workplace that celebrates diversity, inclusion, and accountability."
    },
    {
        icon: Users,
        title: "Thrive in a dynamic environment",
        description: "Join a fast-paced, startup-minded culture where you'll experience rapid growth and make a difference every day."
    }
]

const values = [
    {
        title: "Embrace Change",
        description: "We adapt quickly and see change as an opportunity for growth and innovation."
    },
    {
        title: "Work Together",
        description: "Collaboration and teamwork are at the heart of everything we do."
    },
    {
        title: "Keep Learning",
        description: "We're committed to continuous improvement and staying at the cutting edge."
    },
    {
        title: "Own It",
        description: "We take responsibility for our work and deliver results with accountability."
    }
]

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-pearl">
            {/* Hero Section */}
            <section className="relative bg-midnight text-white py-24 md:py-32 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-deep-teal rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sea-green rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sea-green font-semibold uppercase tracking-wider mb-4">
                            CAREERS
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            Help us shape the future of Generative AI
                        </h1>
                        <p className="text-xl text-pearl/80 mb-8 max-w-2xl mx-auto">
                            Come and join us and take your career to new heights at Attercop. There&apos;s no better time to be on board with us.
                        </p>
                        <Button size="lg" className="bg-sea-green hover:bg-deep-teal text-white" asChild>
                            <Link href="/current-openings">
                                See New Openings <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Attercop Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-8">
                            Why Attercop?
                        </h2>
                        <p className="text-lg text-midnight/80 mb-12 leading-relaxed">
                            Looking for a dynamic, fast-paced environment where you can make a real business impact with AI? At Attercop, we combine our passion for quality with a startup mentality, meaning that you&apos;ll work with new technologies and challenges, experience rapid personal and company growth, and make a real impact - every day.
                        </p>
                        <p className="text-lg text-midnight/80 leading-relaxed">
                            We work with some of the UK&apos;s most innovative companies across a broad range of verticals and business sizes. Expect to collaborate on transformative AI projects that drive measurable results, tackle complex challenges, and push the boundaries of what&apos;s possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-pearl">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 bg-sea-green/10 rounded-lg flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-sea-green" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-midnight mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-midnight/70">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-8">
                            Our values
                        </h2>
                        <p className="text-lg text-midnight/80 mb-12 leading-relaxed">
                            We aim to be a frontrunner in pay equality and equity. We believe in fairness and transparency and believe that people should be paid based on the impact they have, and not their gender, background or negotiation skills. We provide attractive salary packages for your expertise and work to stay true to our values.
                        </p>
                        <p className="text-lg text-midnight/80 mb-12 leading-relaxed">
                            At Attercop, we&apos;ve built a place where we love to work, thrive, and succeed, and we think you&apos;ll love it too. Our core values that guide us as a team:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-sea-green pl-6 py-4"
                                >
                                    <h3 className="font-display text-2xl font-bold text-midnight mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-midnight/70">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-midnight text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            People Wanted.
                        </h2>
                        <p className="text-xl text-pearl/80 mb-8">
                            Ready to join our team? Check out our current openings and take the next step in your career.
                        </p>
                        <Button size="lg" className="bg-sea-green hover:bg-deep-teal text-white" asChild>
                            <Link href="/current-openings">
                                View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
