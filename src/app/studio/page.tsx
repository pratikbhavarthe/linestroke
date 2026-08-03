import type { Metadata } from "next";

import studioImage from "@/app/assets/group.jpeg";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHeader } from "@/components/sections/page-header";
import { StudioStats } from "@/components/sections/studio-stats";
import { StudioValues } from "@/components/sections/studio-values";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description:
    "Linestroke is an industrial design studio in Gurugram helping startups and companies turn ideas into impactful physical products.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Linestroke"
        title="Design. Engineer. Deliver."
        lead="We help startups and companies turn ideas into impactful physical products. With expertise spanning industrial design and engineering, we ensure every product is ready for the road and the market."
        image={studioImage}
        imageAlt="The Linestroke team reviewing sketches and physical models at the studio"
      />

      <section className="border-b border-border bg-muted py-16">
        <Container>
          <StudioStats className="grid grid-cols-3 gap-6" />
        </Container>
      </section>

      <StudioValues />
      <ClosingCta />
    </>
  );
}
