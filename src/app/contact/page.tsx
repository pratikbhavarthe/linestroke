import type { Metadata } from "next";

import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation with Linestroke about your next industrial design or engineering program.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <NewsletterCta />
    </>
  );
}
