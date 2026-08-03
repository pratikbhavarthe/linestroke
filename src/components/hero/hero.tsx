import Link from "next/link"

import { HeroCarousel } from "@/components/hero/hero-carousel"
import { Container } from "@/components/ui/container"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { heroImages } from "@/data/hero-images"

function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden bg-surface-dark">
      <HeroCarousel images={heroImages} />
      <div className="absolute inset-0 bg-surface-dark/45 md:hidden" />
      <div className="absolute inset-0 bg-linear-to-r from-surface-dark via-surface-dark/80 to-surface-dark/50 md:to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-surface-dark/70 via-transparent to-surface-dark/20" />

      <Container className="relative py-20">
        <div>
          <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-foreground-dark/60">
            Industrial Design &amp; Engineering
          </p>
          <h1 className="mt-6 font-display text-display font-medium text-balance text-primary">
            We design products{" "}
            <br className="hidden md:block" />
            built for the real world.
          </h1>
          <p className="mt-8 max-w-lg text-pretty text-body-lg text-foreground-dark">
            Industrial design, Class A surfacing, and engineering consulting
            for mobility and EV programs, from first sketch to production
            documentation.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <InteractiveHoverButton asChild>
              <Link href="/work">See our work</Link>
            </InteractiveHoverButton>
            <InteractiveHoverButton
              asChild
              className="border-foreground-dark/25 bg-transparent text-foreground-dark"
            >
              <Link href="/contact">Start a conversation</Link>
            </InteractiveHoverButton>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
