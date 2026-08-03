import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/json-ld";
import { faqCategories, faqs } from "@/data/faqs";
import { contact } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about working with Linestroke, from project timelines and industries served to how to start a program.",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="border-b border-white/10 bg-background pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48">
        <Container>
          <h1
            aria-label="Frequently Asked Questions"
            className="mx-auto max-w-[92rem] text-center font-display text-[clamp(4rem,10.5vw,11rem)] leading-[0.88] font-medium tracking-[-0.075em] text-primary uppercase"
          >
            <span aria-hidden="true" className="block">Frequently</span>
            <span aria-hidden="true" className="mt-[0.14em] block">Asked questions</span>
          </h1>
          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-[clamp(1.25rem,1.8vw,1.75rem)] leading-tight text-foreground sm:mt-16">
            Curious about what we do or how it works?<br />
            We&apos;ve answered the most common questions below.
          </p>
        </Container>
      </section>

      <section className="bg-background pb-section">
        <Container>
          <Accordion type="single" collapsible className="border-t border-white/15">
            {faqCategories.map((category) => (
              <AccordionItem
                key={category.title}
                value={category.title}
                className="border-b border-white/15"
              >
                <AccordionTrigger className="grid min-h-24 grid-cols-[1fr_auto] items-center gap-8 rounded-none py-6 hover:no-underline md:grid-cols-[0.8fr_1.3fr_auto] md:px-0">
                  <span className="font-display text-xl font-medium text-primary md:text-2xl">
                    {category.title}
                  </span>
                  <span className="hidden text-left text-body text-muted-foreground md:block">
                    {category.description}
                  </span>
                  <span className="mr-8 hidden whitespace-nowrap font-mono text-meta uppercase text-muted-foreground lg:block">
                    {category.items.length.toString().padStart(2, "0")} questions
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 md:pl-[40%]">
                  <div className="divide-y divide-white/10 border-t border-white/10">
                    {category.items.map((faq, index) => (
                      <article key={faq.question} className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr]">
                        <span className="font-mono text-meta text-primary">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div>
                          <h2 className="font-display text-xl font-medium text-foreground sm:text-2xl">
                            {faq.question}
                          </h2>
                          <p className="mt-3 max-w-3xl text-body-lg leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-muted py-24 sm:py-32">
        <Container className="flex flex-col items-center text-center">
          <p className="font-display text-[clamp(1.75rem,3vw,3.5rem)] leading-tight font-medium tracking-[-0.04em] text-foreground">
            Didn&apos;t find the answer you were looking for?
          </p>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent("Question for Linestroke")}`}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-8 font-display text-base font-semibold text-primary-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Get in Touch With Us
          </a>
        </Container>
      </section>
    </>
  );
}
