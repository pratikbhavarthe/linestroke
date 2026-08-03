import Link from "next/link"

import { Container } from "@/components/ui/container"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { contact } from "@/data/contact"
import { cn } from "@/lib/utils"

interface ClosingCtaProps {
  accent?: boolean
}

function ClosingCta({ accent = false }: ClosingCtaProps) {
  return (
    <section
      className={cn(
        "py-section-lg",
        accent ? "bg-primary text-primary-foreground" : "bg-surface-dark"
      )}
    >
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <h2
            className={cn(
              "text-balance font-display text-[clamp(3.5rem,6vw,7.5rem)] leading-[0.95] font-medium tracking-[-0.055em]",
              accent ? "text-primary-foreground" : "text-foreground-dark"
            )}
          >
            Have a product worth building?
          </h2>
          <div className="mt-8">
            <InteractiveHoverButton
              asChild
              className={accent ? "border-background text-foreground" : undefined}
            >
              <Link href="/contact">Start a conversation</Link>
            </InteractiveHoverButton>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 font-mono text-body md:col-span-4 md:items-end md:text-right",
            accent ? "text-primary-foreground/70" : "text-foreground-dark/70"
          )}
        >
          <a href={`mailto:${contact.email}`} className={cn("transition-colors", accent ? "hover:text-primary-foreground" : "hover:text-foreground-dark")}>
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className={cn("transition-colors", accent ? "hover:text-primary-foreground" : "hover:text-foreground-dark")}>
            {contact.phone}
          </a>
          <span>{contact.location}</span>
        </div>
      </Container>
    </section>
  )
}

export { ClosingCta }
