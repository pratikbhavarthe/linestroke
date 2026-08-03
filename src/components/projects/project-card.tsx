import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  className?: string
  priority?: boolean
}

function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  return (
    <article className={cn("group", className)}>
      <div className="relative aspect-4/3 overflow-hidden border border-border bg-surface-dark">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            preload={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <span className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-foreground-dark/50">
                {project.sector}
              </span>
              <span className="font-mono text-meta text-foreground-dark/50">
                {project.year}
              </span>
            </div>
            <span className="font-display text-h1 font-medium text-foreground-dark/15">
              {project.slug.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-6">
        <h2 className="font-display text-h3 font-medium text-primary">
          {project.title}
        </h2>
        <span className="shrink-0 font-mono text-meta text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-2 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">
        {project.sector}
      </p>
      <p className="mt-3 max-w-md text-body text-muted-foreground">
        {project.summary}
      </p>
    </article>
  )
}

export { ProjectCard }
