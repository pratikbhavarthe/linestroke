import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectGrid } from "@/components/projects/project-grid"

function SelectedWork() {
  return (
    <section className="border-t border-border py-section">
      <Container>
        <SectionHeading eyebrow="Selected Work" title="Recent programs" />
        <div className="mt-16">
          <ProjectGrid />
        </div>
      </Container>
    </section>
  )
}

export { SelectedWork }
