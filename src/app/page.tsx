import type { Metadata } from "next";

import { Hero } from "@/components/hero/hero";
import { CapabilityList } from "@/components/sections/capability-list";
import { ClosingCta } from "@/components/sections/closing-cta";
import { IndustriesList } from "@/components/sections/industries-list";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SelectedWork } from "@/components/sections/selected-work";
import { StudioIntro } from "@/components/sections/studio-intro";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  description: siteConfig.description,
  path: "",
});

export default function Home() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <CapabilityList />
      </RevealOnScroll>
      <RevealOnScroll>
        <SelectedWork />
      </RevealOnScroll>
      <RevealOnScroll>
        <StudioIntro />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProcessSteps />
      </RevealOnScroll>
      <RevealOnScroll>
        <IndustriesList />
      </RevealOnScroll>
      <RevealOnScroll>
        <ClosingCta accent />
      </RevealOnScroll>
    </>
  );
}
