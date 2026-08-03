import type { Metadata } from "next";

import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Selected industrial design and engineering programs by Linestroke, spanning mobility, EV, energy, and smart hardware.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Work"
        lead="A selection of programs across mobility, energy, and smart hardware, from first sketch to production documentation."
      />
      <section className="py-section">
        <Container>
          <ProjectGrid />
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
