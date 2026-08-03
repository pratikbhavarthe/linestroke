import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/data/projects"

const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"]

function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index === 0}
          className={SPANS[index % SPANS.length]}
        />
      ))}
    </div>
  )
}

export { ProjectGrid }
