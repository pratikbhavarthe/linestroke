"use client"

import Link from "next/link"

import { Container } from "@/components/ui/container"
import { FooterGlow } from "@/components/layout/footer-glow"
import { navItems } from "@/data/nav"
import { capabilities } from "@/data/capabilities"
import { contact } from "@/data/contact"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const footerBlocks = [
  { label: "Index", index: "01", parallax: 14 },
  { label: "Capabilities", index: "02", parallax: 28 },
  { label: "Connect", index: "03", parallax: 14 },
] as const

const wordmarkGradientStyle = {
  backgroundImage: "linear-gradient(to top, #080808 0%, #c6f200 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const

function BlockLabel({ label, index }: { label: string; index: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-foreground/70">
        {label} / {index}
      </span>
      <span className="size-1.5 bg-foreground" aria-hidden />
    </div>
  )
}

function SiteFooter() {
  const year = new Date().getFullYear()
  const ref = useScrollReveal<HTMLElement>({ distance: "element", easing: "linear" })

  return (
    <footer
      ref={ref}
      className="relative min-h-[70rem] overflow-hidden bg-background text-foreground md:min-h-[100svh]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-6 h-[calc(65svh+1.5rem)] min-h-131 origin-bottom"
        style={{ transform: "scaleY(var(--scroll-progress, 0))", willChange: "transform" }}
      >
        <FooterGlow />
      </div>

      <Container
        as="div"
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:pt-20"
      >
        {footerBlocks.map((block, blockIndex) => (
          <div
            key={block.index}
            style={
              {
                "--parallax-distance": `${block.parallax}px`,
                transform:
                  "translateY(calc(var(--scroll-progress, 0) * -1 * var(--parallax-distance)))",
                willChange: "transform",
              } as React.CSSProperties
            }
            className={
              blockIndex === 0
                ? "flex flex-col border-b border-foreground/15 py-10 md:border-r md:border-b-0 md:pr-10"
                : blockIndex === 1
                  ? "flex flex-col border-b border-foreground/15 py-10 md:border-r md:border-b-0 md:px-10"
                  : "flex flex-col py-10 md:pl-10"
            }
          >
            <BlockLabel label={block.label} index={block.index} />

            {blockIndex === 0 && (
              <nav aria-label="Footer sitemap" className="mt-10">
                <ul className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-body-lg font-medium transition-colors hover:text-foreground/60"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {blockIndex === 1 && (
              <ul className="mt-10 flex flex-col gap-3">
                {capabilities.map((capability) => (
                  <li
                    key={capability.index}
                    className="text-body-lg font-medium text-foreground/90"
                  >
                    {capability.title}
                  </li>
                ))}
              </ul>
            )}

            {blockIndex === 2 && (
              <ul className="mt-10 flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-body-lg font-medium transition-colors hover:text-foreground/60"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="text-body-lg font-medium transition-colors hover:text-foreground/60"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="text-body-lg font-medium text-foreground/70">
                  {contact.location}
                </li>
              </ul>
            )}
          </div>
        ))}
      </Container>

      <p
        aria-hidden
        style={{
          ...wordmarkGradientStyle,
          transform: "translateY(var(--scroll-reveal-y, 110%))",
          willChange: "transform",
        }}
        className="absolute inset-x-0 -bottom-[0.08em] z-10 whitespace-nowrap text-center font-display text-[clamp(7rem,24vw,32rem)] leading-[0.72] font-normal tracking-[-0.06em] select-none"
      >
        linestroke
      </p>

      <Container className="absolute inset-x-0 bottom-0 z-20 py-6">
        <p className="font-mono text-meta text-foreground-dark/50">
          © {year} Linestroke. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export { SiteFooter }
