import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  lead?: string
  className?: string
  align?: "left" | "center"
  tone?: "default" | "dark"
}

function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "font-mono text-meta tracking-(--text-meta--letter-spacing) uppercase",
            tone === "dark" ? "text-foreground-dark/60" : "text-muted-foreground"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-2 font-display text-h2 font-medium text-balance",
          "text-primary"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 text-body-lg text-pretty",
            tone === "dark" ? "text-foreground-dark" : "text-foreground"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

export { SectionHeading }
