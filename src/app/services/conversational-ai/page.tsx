import { PageHero } from "@/components/sections/page-hero"


export default function ConversationalAIPage() {
    return (
        <main>
            <PageHero
                headline="Conversational AI"
                subheadline="Coming Soon"
                ctas={[
                    { text: "Contact Us", href: "/contact" }
                ]}
                backgroundImage="/images/hero-background.png"
            />
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xl text-midnight/70">Content coming soon.</p>
                </div>
            </section>
        </main>
    )
}
