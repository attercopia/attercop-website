import { Hero } from "@/components/sections/Hero"
import { ValueProp } from "@/components/sections/ValueProp"
import { Metrics } from "@/components/sections/Metrics"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { InteractiveDemo } from "@/components/sections/InteractiveDemo"
import { ThoughtLeadership } from "@/components/sections/ThoughtLeadership"
import { BottomCTA } from "@/components/sections/BottomCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground selection:bg-sea-green/30">
      <Hero />
      <ValueProp />
      <Metrics />
      <CaseStudies />
      <ServicesGrid />
      <InteractiveDemo />
      <ThoughtLeadership />
      <BottomCTA />
    </main>
  );
}
