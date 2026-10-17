"use client"

import { useRef, useState } from "react"
import type { Value } from "react-phone-number-input"

import { PhoneField } from "@/components/forms/phone-field"
import { ChipOption } from "@/components/ui/chip-option"
import { Container } from "@/components/ui/container"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Textarea } from "@/components/ui/textarea"
import { capabilities } from "@/data/capabilities"
import { referralSources } from "@/data/referral-sources"

const PURPOSE_MAX_LENGTH = 500
type FieldErrors = Partial<Record<"name" | "email" | "phone" | "company" | "purpose", string>>

function RequiredMark() {
  return <span aria-hidden="true"> *</span>
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return <p id={id} role="alert" className="text-sm font-medium">{message}</p>
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [phone, setPhone] = useState<Value>()
  const [purposeLength, setPurposeLength] = useState(0)
  const [services, setServices] = useState<string[]>([])
  const [referralSource, setReferralSource] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  function toggleService(value: string, checked: boolean) {
    setServices((previous) => checked ? [...previous, value] : previous.filter((item) => item !== value))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("submitting")
    setStatusMessage("")
    setFieldErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name")?.toString().trim() ?? "",
          email: formData.get("email")?.toString().trim() ?? "",
          phone: phone ?? "",
          company: formData.get("company")?.toString().trim() ?? "",
          purpose: formData.get("purpose")?.toString().trim() ?? "",
          services,
          referralSource,
          website: formData.get("website")?.toString() ?? "",
        }),
      })
      const result = (await response.json()) as { message?: string; errors?: FieldErrors }

      if (!response.ok) {
        setFieldErrors(result.errors ?? {})
        setStatus("error")
        setStatusMessage(result.message ?? "Check the form and try again.")
        requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus())
        return
      }

      setStatus("success")
      setStatusMessage(result.message ?? "Thanks. We’ll be in touch shortly.")
      form.reset()
      setPhone(undefined)
      setServices([])
      setReferralSource("")
      setPurposeLength(0)
    } catch {
      setStatus("error")
      setStatusMessage("We couldn’t send your inquiry. Please try again or email hello@linestroke.com.")
    }
  }

  const inputClassName = "h-12 border-primary-foreground/50 bg-transparent text-primary-foreground focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/20 dark:bg-transparent"

  return (
    <section id="inquiry-form" className="contact-form-accent bg-primary py-section text-primary-foreground">
      <Container>
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="max-w-5xl">
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <fieldset>
            <legend className="font-display text-h2 font-medium text-balance">I&apos;m looking for help with</legend>
            <p className="mt-2 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-primary-foreground/85">Choose your options below</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <ChipOption key={capability.index} id={`service-${capability.index}`} name="services" value={capability.title} label={capability.title} checked={services.includes(capability.title)} onChange={toggleService} tone="accent" />
              ))}
            </div>
          </fieldset>

          <div className="mt-12">
            <h2 className="font-display text-h2 font-medium text-balance">My contact details and some info about my project</h2>
            <div className="mt-8">
              <FieldGroup>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name">Full Name<RequiredMark /></FieldLabel>
                    <Input id="name" name="name" autoComplete="name" required maxLength={100} aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} className={inputClassName} />
                    <FieldError id="name-error" message={fieldErrors.name} />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email Address<RequiredMark /></FieldLabel>
                    <Input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} className={inputClassName} />
                    <FieldError id="email-error" message={fieldErrors.email} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number<RequiredMark /></FieldLabel>
                    <PhoneField id="phone" name="phone" value={phone} onChange={setPhone} required aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} />
                    <FieldError id="phone-error" message={fieldErrors.phone} />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="company">Company Name<RequiredMark /></FieldLabel>
                    <Input id="company" name="company" autoComplete="organization" required maxLength={120} aria-invalid={Boolean(fieldErrors.company)} aria-describedby={fieldErrors.company ? "company-error" : undefined} className={inputClassName} />
                    <FieldError id="company-error" message={fieldErrors.company} />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="purpose">Tell us about your project</FieldLabel>
                  <div className="relative">
                    <Textarea id="purpose" name="purpose" rows={5} maxLength={PURPOSE_MAX_LENGTH} placeholder="What are you building, and what do you need help with?" className="field-sizing-fixed resize-none border-primary-foreground/50 bg-transparent pb-7 text-primary-foreground placeholder:text-primary-foreground/75 focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/20 dark:bg-transparent" onChange={(event) => setPurposeLength(event.target.value.length)} aria-invalid={Boolean(fieldErrors.purpose)} aria-describedby={fieldErrors.purpose ? "purpose-error" : "purpose-count"} />
                    <span id="purpose-count" className="pointer-events-none absolute right-3 bottom-2 font-mono text-meta text-primary-foreground/85">{purposeLength}/{PURPOSE_MAX_LENGTH}</span>
                  </div>
                  <FieldError id="purpose-error" message={fieldErrors.purpose} />
                </Field>
              </FieldGroup>
            </div>
          </div>

          <fieldset className="mt-12">
            <legend className="font-display text-h2 font-medium text-balance">I found Linestroke through</legend>
            <p className="mt-2 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-primary-foreground/85">Select one option below</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {referralSources.map((source) => (
                <ChipOption key={source} id={`referral-${source}`} name="referralSource" type="radio" value={source} label={source} checked={referralSource === source} onChange={(value) => setReferralSource(value)} tone="accent" />
              ))}
            </div>
          </fieldset>

          <div className="mt-10">
            <InteractiveHoverButton disabled={status === "submitting"} type="submit" className="border-background text-foreground disabled:cursor-wait disabled:opacity-60">{status === "submitting" ? "Sending…" : "Submit form"}</InteractiveHoverButton>
            <p className="mt-4 max-w-xl text-sm text-primary-foreground/85">By submitting, you agree to our <a className="underline underline-offset-4" href="/privacy">Privacy Policy</a>.</p>
            <p aria-live="polite" role={status === "error" ? "alert" : "status"} className="mt-4 min-h-6 font-medium">{statusMessage}</p>
          </div>
        </form>
      </Container>
    </section>
  )
}

export { ContactForm }
