import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProcessList } from "@/components/sections/process-list"

function ProcessSteps() {
  return (
    <section className="border-t border-border py-section">
      <Container>
        <SectionHeading eyebrow="Our Process" title="From concept to compliance" />
        <div className="mt-16">
          <ProcessList />
        </div>
      </Container>
    </section>
  )
}

export { ProcessSteps }
