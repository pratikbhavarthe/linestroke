import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Separator } from "@/components/ui/separator"
import { capabilities } from "@/data/capabilities"

function CapabilityList() {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading eyebrow="What We Do" title="Capabilities" />

        <ul className="mt-16">
          {capabilities.map((capability) => (
            <li key={capability.index}>
              <Separator />
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="font-mono text-meta text-muted-foreground md:col-span-1">
                  {capability.index}
                </span>
                <h3 className="font-display text-h3 font-medium text-primary md:col-span-4">
                  {capability.title}
                </h3>
                <p className="text-body text-foreground md:col-span-7">
                  {capability.description}
                </p>
              </div>
            </li>
          ))}
          <Separator />
        </ul>
      </Container>
    </section>
  )
}

export { CapabilityList }
