import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Separator } from "@/components/ui/separator"
import { studioValues } from "@/data/studio-values"

function StudioValues() {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading eyebrow="How We Work" title="What guides us" />

        <ul className="mt-16">
          {studioValues.map((value) => (
            <li key={value.index}>
              <Separator />
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="font-mono text-meta text-muted-foreground md:col-span-1">
                  {value.index}
                </span>
                <h3 className="font-display text-h3 font-medium text-foreground md:col-span-4">
                  {value.title}
                </h3>
                <p className="text-body text-muted-foreground md:col-span-7">
                  {value.description}
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

export { StudioValues }
