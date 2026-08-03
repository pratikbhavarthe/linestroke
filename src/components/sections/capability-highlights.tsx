import { FileText, Hand, Layers, PenTool, ShieldCheck } from "lucide-react"

import { Container } from "@/components/ui/container"
import { capabilities } from "@/data/capabilities"

const ICONS = [PenTool, Layers, Hand, ShieldCheck, FileText]

function CapabilityHighlights() {
  return (
    <section className="border-t border-border bg-muted py-section">
      <Container>
        <h2 className="text-center font-display text-h2 font-medium text-foreground">
          What We Do Best
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability, index) => {
            const Icon = ICONS[index]
            return (
              <div
                key={capability.index}
                className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-border text-foreground">
                  <Icon className="size-4" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-h3 font-medium text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-body text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export { CapabilityHighlights }
