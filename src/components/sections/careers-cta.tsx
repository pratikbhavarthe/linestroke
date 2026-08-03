"use client"

import { useState } from "react"

import { Container } from "@/components/ui/container"
import { contact } from "@/data/contact"

const emailPattern = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i

function UpdatesCta() {
  const [emailError, setEmailError] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get("updatesEmail")?.toString().trim() ?? ""

    if (!email) {
      setEmailError("Enter your email address.")
      return
    }

    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email, such as name@company.com.")
      return
    }

    setEmailError("")
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Subscribe to Linestroke updates")}&body=${encodeURIComponent(`Please add ${email} to the Linestroke updates list.`)}`
  }

  return (
    <section className="overflow-hidden border-y border-white/10 bg-muted">
      <Container className="relative min-h-[27rem] py-14 sm:py-16 lg:py-20">
        <div className="relative z-10 grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-32">
          <div className="max-w-2xl">
            <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">
              Stay ahead of the curve
            </p>
            <h2 className="mt-4 max-w-[38rem] text-pretty font-display text-[clamp(1.5rem,1.9vw,2.15rem)] leading-[1.12] font-medium tracking-[-0.03em] text-foreground">
              Product design insights, engineering thinking, and Linestroke
              updates straight to your inbox.
            </h2>
          </div>

          <form onSubmit={handleSubmit} noValidate className="w-full md:pt-1">
            <div className="relative">
              <label htmlFor="updates-email" className="sr-only">
                Your email address
              </label>
              <input
                id="updates-email"
                name="updatesEmail"
                type="email"
                autoComplete="email"
                required
                placeholder="YOUR EMAIL ADDRESS"
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? "updates-email-error" : "updates-email-note"}
                onChange={() => emailError && setEmailError("")}
                className="h-16 w-full min-w-0 rounded-full border border-white/15 bg-foreground pr-32 pl-6 font-mono text-meta text-background outline-none placeholder:text-background/45 focus:border-primary sm:pr-40 lg:h-[4.5rem]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1.5 h-[calc(100%-0.75rem)] -translate-y-1/2 rounded-full bg-primary px-6 font-mono text-meta uppercase text-primary-foreground transition-colors duration-300 hover:bg-black hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-9"
              >
                Sign up
              </button>
            </div>
            {emailError ? (
              <p id="updates-email-error" role="alert" className="mt-3 font-mono text-xs text-primary">
                {emailError}
              </p>
            ) : (
              <p id="updates-email-note" className="mt-3 max-w-xl font-mono text-[0.65rem] uppercase leading-relaxed text-muted-foreground">
                Personal and work emails are welcome. By subscribing, you agree to
                receive occasional Linestroke updates. No spam.
              </p>
            )}
          </form>
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-[0.08em] whitespace-nowrap text-center font-display text-[clamp(4rem,8.5vw,9rem)] leading-none tracking-[-0.065em] text-foreground/5 uppercase select-none"
        >
          Sign up to updates
        </p>
      </Container>
    </section>
  )
}

export { UpdatesCta }
