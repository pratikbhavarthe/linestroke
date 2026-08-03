import type { Metadata } from "next";

import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHeader } from "@/components/sections/page-header";
import { ProcessList } from "@/components/sections/process-list";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Process",
  description:
    "How Linestroke takes a product from concept to compliance: research, design, engineering, prototype, validate, and deliver.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title="From concept to compliance"
        lead="Six steps take every program from first sketch to production ready documentation."
      />
      <section className="py-section">
        <Container>
          <ProcessList />
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
