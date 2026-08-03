import Image, { type StaticImageData } from "next/image"

import { Container } from "@/components/ui/container"

interface PageHeaderProps {
  eyebrow: string
  title: string
  lead?: string
  image?: StaticImageData
  imageAlt?: string
}

function PageHeader({ eyebrow, title, lead, image, imageAlt }: PageHeaderProps) {
  if (image) {
    return (
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-surface-dark md:min-h-[70vh]">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/55" />

        <Container className="relative py-16 md:py-20">
          <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-foreground-dark/60">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-h1 font-medium text-primary">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-xl text-pretty text-body-lg text-foreground-dark">
              {lead}
            </p>
          )}
        </Container>
      </section>
    )
  }

  return (
    <section className="border-b border-border bg-background pt-32 pb-16 md:pt-40 md:pb-20">
      <Container>
        <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-h1 font-medium text-primary">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-xl text-pretty text-body-lg text-foreground">
            {lead}
          </p>
        )}
      </Container>
    </section>
  )
}

export { PageHeader }
