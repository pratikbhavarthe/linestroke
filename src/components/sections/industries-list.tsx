import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { industries } from "@/data/industries"

function IndustriesList() {
  return (
    <section className="border-t border-border py-section">
      <Container>
        <SectionHeading eyebrow="Who We Work With" title="Industries" />

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
          {industries.map((industry) => (
            <li
              key={industry}
              className="font-display text-h3 font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {industry}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { IndustriesList }
