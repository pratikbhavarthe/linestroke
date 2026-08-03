import type { Metadata } from "next"

import { Container } from "@/components/ui/container"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({ title: "Privacy Policy", description: "How Linestroke handles contact inquiries and newsletter subscriptions.", path: "/privacy" })

export default function PrivacyPage() {
  return (
    <Container className="pt-36 pb-28 md:pt-44">
      <article className="max-w-3xl text-foreground">
        <p className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">Privacy</p>
        <h1 className="mt-5 font-display text-h1 font-medium text-primary">Your information, handled with care.</h1>
        <div className="mt-12 space-y-8 text-body leading-relaxed text-foreground/75">
          <section><h2 className="font-display text-h3 text-foreground">What we collect</h2><p className="mt-3">When you contact us, we collect the details you provide, including your name, work contact details, company, service interests, and project summary. Newsletter signup collects your email address.</p></section>
          <section><h2 className="font-display text-h3 text-foreground">Why we use it</h2><p className="mt-3">We use this information only to respond to inquiries, evaluate potential projects, provide requested updates, prevent abuse, and maintain reliable business records.</p></section>
          <section><h2 className="font-display text-h3 text-foreground">Sharing and retention</h2><p className="mt-3">Information may be processed by service providers that operate our website, email delivery, or newsletter systems. We do not sell personal information. We retain inquiry records only as long as they remain relevant to our business or legal obligations.</p></section>
          <section><h2 className="font-display text-h3 text-foreground">Your choices</h2><p className="mt-3">You may ask to access, correct, or delete your information, or unsubscribe from updates at any time by emailing <a className="text-primary underline underline-offset-4" href="mailto:hello@linestroke.com">hello@linestroke.com</a>.</p></section>
          <section><h2 className="font-display text-h3 text-foreground">Policy updates</h2><p className="mt-3">We may update this notice when our services or providers change. The current version is effective 3 August 2026.</p></section>
        </div>
      </article>
    </Container>
  )
}
