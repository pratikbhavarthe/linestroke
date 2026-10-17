import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import scooterDetailImage from "@/app/assets/scooter-detail.webp"
import scooterFrontImage from "@/app/assets/scooter-front.webp"
import scooterFrontMobileImage from "@/app/assets/scooter-mobile.webp"
import clayModelImage from "@/app/assets/clay-brisk2.jpeg"
import studioImage from "@/app/assets/studio.webp"
import { AboutMissionReveal } from "@/components/sections/about-mission-reveal"
import { ClosingCta } from "@/components/sections/closing-cta"
import { Container } from "@/components/ui/container"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import { capabilities } from "@/data/capabilities"
import { studioValues } from "@/data/studio-values"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Meet Linestroke, an industrial design and engineering studio turning ambitious product ideas into production-ready reality.",
  path: "/about",
})

const stats = [
  { value: "10+", label: "Years of industry experience" },
  { value: "40+", label: "Programs delivered" },
  { value: "06", label: "Industries served" },
] as const

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden pt-28 md:min-h-[100svh] md:pt-36">
        <Container className="flex flex-col gap-20 pb-12 md:min-h-[calc(100svh-9rem)] md:justify-between md:gap-0">
          <h1 className="font-display text-[clamp(3.35rem,8.5vw,10rem)] leading-[0.8] font-medium tracking-[-0.075em] text-primary uppercase">
            <span className="block">Beyond the</span>
            <span className="block">limits of</span>
            <span className="block">product</span>
            <span className="block">design</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 pt-16 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-start-6 md:col-span-7">
              <AboutMissionReveal />
            </div>
          </div>
        </Container>
      </section>

      <section className="px-gutter pb-section">
        <RevealOnScroll>
          <div className="relative h-[72svh] min-h-120 overflow-hidden bg-surface-dark">
            <Image
              src={studioImage}
              alt="The Linestroke design team developing a vehicle concept in the studio"
              fill
              sizes="100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-primary py-section-lg text-primary-foreground">
        <Container>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center font-mono text-meta uppercase text-primary-foreground/85">
              <p>More about us</p>
              <p className="mt-2">10+ years industry experience</p>
            </div>
            <RevealOnScroll className="mx-auto w-full max-w-6xl text-center">
              <p className="text-balance font-display text-[clamp(2.25rem,4.5vw,5.5rem)] leading-[1.08] tracking-[-0.045em]">
                Linestroke is not a styling vendor. We are an industrial design and
                engineering studio where research, form, surfacing, prototyping, and
                production documentation work as one continuous process.
              </p>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden border-y border-border py-section-lg">
        <ScrollVelocityContainer aria-label="The problem we solve">
          <ScrollVelocityRow baseVelocity={2.5} direction={-1}>
            <span className="inline-flex items-center gap-[0.16em] pr-[0.16em] font-display text-[clamp(6rem,15vw,18rem)] leading-[0.8] tracking-[-0.07em] uppercase">
              The problem we solve
              <span aria-hidden className="text-primary">·</span>
            </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>

      <section className="py-section-lg">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
            <RevealOnScroll className="md:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={clayModelImage}
                  alt="A full-size clay model of an electric scooter in development"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-6">
              <p className="font-mono text-meta uppercase text-muted-foreground">How we do it</p>
              <h2 className="mt-8 font-display text-[clamp(2.25rem,4vw,4.75rem)] leading-[1.06] tracking-[-0.04em] text-primary">
                We begin with the decisions.
              </h2>
              <div className="mt-10 space-y-5 text-body-lg text-muted-foreground">
                <p>
                  Many teams move from sketch to CAD before the product has been properly
                  understood. Proportion, ergonomics, packaging, tooling, and compliance
                  become expensive problems later.
                </p>
                <p>
                  We remove that uncertainty early. We research, model, test, surface, and
                  document every critical decision so the final design is not only compelling,
                  but buildable.
                </p>
              </div>
              <div className="mt-10">
                <InteractiveHoverButton
                  asChild
                  className="border-foreground bg-foreground text-background"
                >
                  <Link href="/process">Explore our process</Link>
                </InteractiveHoverButton>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[100svh] overflow-hidden bg-surface-dark text-foreground-dark">
        <Image
          src={scooterFrontMobileImage}
          alt="Front detail of an electric scooter developed by Linestroke"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-55 md:hidden"
        />
        <Image
          src={scooterFrontImage}
          alt="Front view of an electric scooter developed by Linestroke"
          fill
          sizes="(min-width: 768px) 100vw, 0px"
          className="hidden object-cover object-center opacity-45 md:block"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/55 to-black/20" />
        <Container className="relative z-10 flex min-h-[100svh] flex-col justify-between py-section">
          <RevealOnScroll className="max-w-4xl">
            <p className="font-mono text-meta uppercase text-white/60">Technology & approach</p>
            <h2 className="mt-8 font-display text-[clamp(2.75rem,6vw,7rem)] leading-[1.06] tracking-[-0.045em] text-primary">
              We engineer every surface for production.
            </h2>
          </RevealOnScroll>

          <ol className="grid grid-cols-1 border-y border-white/25 md:grid-cols-5">
            {capabilities.map((capability) => (
              <li
                key={capability.index}
                className="group flex items-baseline gap-4 border-b border-white/15 py-5 last:border-b-0 md:block md:border-r md:border-b-0 md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="font-mono text-meta text-primary">
                  {capability.index}
                </span>
                <h3 className="font-display text-lg font-medium tracking-[-0.025em] text-white transition-colors group-hover:text-primary md:mt-4 md:text-xl">
                  {capability.title}
                </h3>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-section-lg">
        <Container>
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-meta uppercase text-muted-foreground">What guides us</p>
            </div>
            <ul>
              {studioValues.map((value) => (
                <li
                  key={value.index}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7 md:grid-cols-[4rem_0.8fr_1.2fr] md:gap-8"
                >
                  <span className="font-mono text-meta text-muted-foreground">{value.index}</span>
                  <h3 className="font-display text-h3 font-medium text-primary">{value.title}</h3>
                  <p className="col-start-2 text-body text-muted-foreground md:col-start-auto">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-section-lg text-primary-foreground">
        <Container>
          <p className="font-mono text-meta uppercase text-primary-foreground/85">About us in numbers</p>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-primary-foreground/25 pt-6 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="font-display text-[clamp(5rem,10vw,11rem)] leading-none tracking-[-0.07em]">
                  {stat.value}
                </p>
                <p className="mt-5 font-mono text-meta uppercase text-primary-foreground/85">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-section-lg">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-8">
          <div className="md:col-span-5">
            <p className="font-mono text-meta uppercase text-muted-foreground">The result</p>
            <h2 className="mt-8 font-display text-h1 font-medium tracking-tight">
              Products <span className="text-primary">resolved</span> in form,{" "}
              <span className="text-primary">engineering</span>, and{" "}
              <span className="text-primary">production</span>.
            </h2>
          </div>
          <div className="relative aspect-video overflow-hidden bg-muted md:col-span-7">
            <Image
              src={scooterDetailImage}
              alt="Detailed side surface of an electric scooter designed by Linestroke"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <ClosingCta accent />
    </>
  )
}
