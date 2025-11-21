import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
    category: string
    title: string
    challenge: string
    impact: string[]
    quote?: string
    link: string
    className?: string
}

export function CaseStudyCard({
    category,
    title,
    challenge,
    impact,
    quote,
    link,
    className = ""
}: CaseStudyCardProps) {
    return (
        <Link
            href={link}
            className={`group block bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
        >
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-deep-teal bg-deep-teal/10 px-3 py-1 rounded-full mb-4">
                {category}
            </span>

            <h3 className="font-display text-2xl font-bold text-midnight mb-4 group-hover:text-sea-green transition-colors">
                {title}
            </h3>

            <p className="text-midnight/60 mb-6 leading-relaxed">
                {challenge}
            </p>

            <div className="space-y-2 mb-6">
                {impact.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="text-sea-green mt-1">✓</span>
                        <span className="text-sm text-midnight/70">{item}</span>
                    </div>
                ))}
            </div>

            {quote && (
                <blockquote className="border-l-4 border-sea-green pl-4 italic text-midnight/60 mb-6">
                    {quote}
                </blockquote>
            )}

            <div className="flex items-center text-deep-teal font-semibold text-sm group-hover:gap-2 transition-all">
                Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
            </div>
        </Link>
    )
}
