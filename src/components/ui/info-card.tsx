import Link from "next/link"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface InfoCardProps {
    title: string
    description?: string
    href?: string
    icon?: LucideIcon
    className?: string
}

export function InfoCard({
    title,
    description,
    href,
    icon: Icon,
    className
}: InfoCardProps) {
    const content = (
        <>
            {Icon && <Icon className="w-8 h-8 text-deep-teal mb-4" />}
            <h3 className="font-display text-xl font-bold text-midnight mb-2 group-hover:text-sea-green transition-colors">
                {title}
            </h3>
            {description && <p className="text-midnight/70 mb-4">{description}</p>}
            {href && (
                <span className="text-sm text-deep-teal font-semibold flex items-center gap-1">
                    Learn more →
                </span>
            )}
        </>
    )

    const cardClasses = cn(
        "block bg-pearl rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 h-full",
        href && "group hover:shadow-lg cursor-pointer",
        className
    )

    if (href) {
        return (
            <Link href={href} className={cardClasses}>
                {content}
            </Link>
        )
    }

    return (
        <div className={cardClasses}>
            {content}
        </div>
    )
}
