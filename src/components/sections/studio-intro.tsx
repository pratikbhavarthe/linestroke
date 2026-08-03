import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { StudioStats } from "@/components/sections/studio-stats"

function StudioIntro() {
  return (
    <section className="border-t border-border bg-muted py-section">
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <SectionHeading
            eyebrow="About Linestroke"
            title="Design. Engineer. Deliver."
            lead="We help startups and companies turn ideas into impactful physical products. With expertise spanning industrial design and engineering, we ensure every product is ready for the road and the market."
          />
        </div>

        <StudioStats className="grid grid-cols-3 gap-6 border-t border-border pt-6 md:col-span-5 md:self-end" />
      </Container>
    </section>
  )
}

export { StudioIntro }
