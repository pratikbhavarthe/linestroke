"use client"

import { useState } from "react"

import { Container } from "@/components/ui/container"

function NewsletterCta() {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
      })
      const result = (await response.json()) as { message?: string }
      setStatus(response.ok ? "success" : "error")
      setMessage(result.message ?? (response.ok ? "Check your inbox to confirm." : "Try again later."))
      if (response.ok) setEmail("")
    } catch {
      setStatus("error")
      setMessage("We couldn’t complete signup. Please try again later.")
    }
  }

  return (
    <section className="overflow-hidden border-y border-white/10 bg-muted">
      <Container className="relative min-h-[31rem] py-20 sm:py-24 lg:py-28">
        <div className="relative z-10 grid items-start gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-32">
          <div className="max-w-2xl">
            <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">Stay ahead of the curve</p>
            <h2 className="mt-5 max-w-[38rem] text-pretty font-display text-[clamp(1.7rem,2.2vw,2.5rem)] leading-[1.12] font-medium tracking-[-0.03em] text-foreground">Product design insights, engineering thinking, and Linestroke updates straight to your inbox.</h2>
          </div>

          <form method="post" onSubmit={handleSubmit} noValidate className="w-full md:pt-2">
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="newsletter-website">Website</label>
              <input id="newsletter-website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
            </div>
            <div className="relative rounded-full bg-foreground p-1.5">
              <label htmlFor="updates-email" className="sr-only">Your email address</label>
              <input id="updates-email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} placeholder="YOUR EMAIL ADDRESS" value={email} onChange={(event) => { setEmail(event.target.value); if (status !== "idle") { setStatus("idle"); setMessage("") } }} aria-invalid={status === "error"} aria-describedby="updates-email-note" className="h-16 w-full min-w-0 rounded-full border-0 bg-foreground pr-36 pl-6 font-mono text-meta text-background outline-none placeholder:text-background/50 focus-visible:ring-2 focus-visible:ring-primary sm:pr-44 lg:h-[4.5rem]" />
              <button type="submit" disabled={status === "submitting"} className="absolute top-1.5 right-1.5 h-[calc(100%-0.75rem)] min-w-32 rounded-full bg-primary px-6 font-mono text-meta uppercase text-primary-foreground transition-colors hover:bg-black hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-65 sm:min-w-40 sm:px-9">{status === "submitting" ? "Sending…" : "Sign up"}</button>
            </div>
            <p id="updates-email-note" aria-live="polite" role={status === "error" ? "alert" : "status"} className={`mt-4 min-h-5 max-w-xl font-mono text-xs ${status === "error" ? "text-primary" : "text-muted-foreground"}`}>{message || <>Personal and work emails are welcome. By subscribing, you agree to our <a className="underline underline-offset-4" href="/privacy">Privacy Policy</a>. No spam.</>}</p>
          </form>
        </div>

        <p aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-[0.08em] whitespace-nowrap text-center font-display text-[clamp(4rem,8.5vw,9rem)] leading-none tracking-[-0.065em] text-foreground/5 uppercase select-none">Sign up to updates</p>
      </Container>
    </section>
  )
}

export { NewsletterCta }
