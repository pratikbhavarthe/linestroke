"use client"

import { useState } from "react"
import type { Value } from "react-phone-number-input"

import { ChipOption } from "@/components/ui/chip-option"
import { Container } from "@/components/ui/container"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Textarea } from "@/components/ui/textarea"
import { PhoneField } from "@/components/forms/phone-field"
import { capabilities } from "@/data/capabilities"
import { contact } from "@/data/contact"
import { referralSources } from "@/data/referral-sources"

const PURPOSE_MAX_LENGTH = 500

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-primary-foreground">
      {" "}
      *
    </span>
  )
}

function ContactForm() {
  const [phone, setPhone] = useState<Value>()
  const [purposeLength, setPurposeLength] = useState(0)
  const [services, setServices] = useState<string[]>([])
  const [referralSource, setReferralSource] = useState<string>("")

  function toggleService(value: string, checked: boolean) {
    setServices((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString().trim() ?? ""
    const email = formData.get("email")?.toString().trim() ?? ""
    const company = formData.get("company")?.toString().trim() ?? ""
    const purpose = formData.get("purpose")?.toString().trim() ?? ""

    const subject = `New inquiry from ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone ?? ""}`,
      `Company: ${company || "Not provided."}`,
      "",
      `Looking for help with: ${services.length ? services.join(", ") : "Not specified."}`,
      "",
      "Tell us about your project:",
      purpose || "Not provided.",
      "",
      `Found us through: ${referralSource || "Not specified."}`,
    ]
      .filter(Boolean)
      .join("\n")

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="inquiry-form" className="contact-form-accent bg-primary py-section text-primary-foreground">
      <Container>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <div>
              <h2 className="font-display text-h2 font-medium text-balance text-primary-foreground">
                I&apos;m looking for help with
              </h2>
              <p className="mt-2 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-primary-foreground/65">
                Choose your options below
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {capabilities.map((capability) => (
                  <ChipOption
                    key={capability.index}
                    id={`service-${capability.index}`}
                    name="services"
                    value={capability.title}
                    label={capability.title}
                    checked={services.includes(capability.title)}
                    onChange={toggleService}
                    tone="accent"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-h2 font-medium text-balance text-primary-foreground">
                My contact details and some info about my project
              </h2>

              <div className="mt-8">
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="name">
                        Full Name
                        <RequiredMark />
                      </FieldLabel>
                      <Input id="name" name="name" type="text" autoComplete="name" required className="h-12 border-primary-foreground/35 bg-transparent text-primary-foreground focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/20 dark:bg-transparent" />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="email">
                        Email Address
                        <RequiredMark />
                      </FieldLabel>
                      <Input id="email" name="email" type="email" autoComplete="email" required className="h-12 border-primary-foreground/35 bg-transparent text-primary-foreground focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/20 dark:bg-transparent" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="phone">
                        Phone Number
                        <RequiredMark />
                      </FieldLabel>
                      <PhoneField id="phone" name="phone" value={phone} onChange={setPhone} required />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="company">
                        Company Name
                        <RequiredMark />
                      </FieldLabel>
                      <Input id="company" name="company" type="text" autoComplete="organization" required className="h-12 border-primary-foreground/35 bg-transparent text-primary-foreground focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/20 dark:bg-transparent" />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="purpose">Tell us about your project</FieldLabel>
                    <div className="relative">
                      <Textarea
                        id="purpose"
                        name="purpose"
                        rows={5}
                        maxLength={PURPOSE_MAX_LENGTH}
                        placeholder="What are you building, and what do you need help with?"
                        className="field-sizing-fixed resize-none border-primary-foreground/35 bg-transparent pb-7 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/20 dark:bg-transparent"
                        onChange={(event) => setPurposeLength(event.target.value.length)}
                      />
                      <span className="pointer-events-none absolute right-3 bottom-2 font-mono text-meta text-primary-foreground/60">
                        {purposeLength}/{PURPOSE_MAX_LENGTH}
                      </span>
                    </div>
                  </Field>
                </FieldGroup>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-h2 font-medium text-balance text-primary-foreground">
                I found Linestroke through
              </h2>
              <p className="mt-2 font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-primary-foreground/65">
                Select your option below
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {referralSources.map((source) => (
                  <ChipOption
                    key={source}
                    id={`referral-${source}`}
                    name="referralSource"
                    type="radio"
                    value={source}
                    label={source}
                    checked={referralSource === source}
                    onChange={(value) => setReferralSource(value)}
                    tone="accent"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <InteractiveHoverButton type="submit" className="border-background text-foreground">
                Submit form
              </InteractiveHoverButton>
            </div>
          </div>
        </form>
      </Container>
    </section>
  )
}

export { ContactForm }
