import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

interface CallToActionProps {
    title?: string
    description?: string
    primaryAction: {
        text: string
        href: string
    }
    secondaryAction?: {
        text: string
        href: string
    }
}

export function CallToAction({
    title = "Ready to Transform Your Business?",
    description = "Let's discuss how our AI services can drive value for your organization.",
    primaryAction,
    secondaryAction
}: CallToActionProps) {
    return (
        <Section className="bg-midnight text-white">
            <SectionHeader
                title={title}
                description={description}
                titleClassName="text-white"
                descriptionClassName="text-pearl/80"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href={primaryAction.href}>{primaryAction.text}</Link>
                </Button>
                {secondaryAction && (
                    <Button size="lg" variant="outline" asChild>
                        <Link href={secondaryAction.href}>{secondaryAction.text}</Link>
                    </Button>
                )}
            </div>
        </Section>
    )
}
