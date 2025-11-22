import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    description?: string
    align?: "left" | "center" | "right"
    className?: string
    titleClassName?: string
    descriptionClassName?: string
}

export function SectionHeader({
    title,
    description,
    align = "center",
    className,
    titleClassName,
    descriptionClassName,
}: SectionHeaderProps) {
    const alignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }[align]

    return (
        <div className={cn("mb-12", alignClass, className)}>
            <h2 className={cn("font-display text-4xl md:text-5xl font-bold text-midnight mb-6", titleClassName)}>
                {title}
            </h2>
            {description && (
                <p className={cn("text-xl text-midnight/70 max-w-3xl mx-auto leading-relaxed", descriptionClassName)}>
                    {description}
                </p>
            )}
        </div>
    )
}
