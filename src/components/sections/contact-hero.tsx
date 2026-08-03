import { Container } from "@/components/ui/container"

function ContactHero() {
  return (
    <section className="flex min-h-[90svh] items-center border-b border-border bg-background pt-28 pb-20 md:pt-36 md:pb-24">
      <Container className="flex flex-col items-center text-center">
        <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">
          Get in touch
        </p>

        <h1 className="mt-8 font-display text-[clamp(4rem,11.5vw,13.5rem)] leading-[0.78] font-medium tracking-[-0.07em] text-primary uppercase">
          <span className="block">Let&apos;s talk</span>
          <span className="block">product design</span>
        </h1>

        <p className="mt-10 max-w-2xl text-pretty text-body-lg text-foreground">
          We&apos;re glad you&apos;re here. Tell us a little about your project,
          and we&apos;ll be in touch.
        </p>

      </Container>
    </section>
  )
}

export { ContactHero }
