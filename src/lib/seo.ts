import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

interface PageSeoInput {
  /** Page title. Omit for the homepage to inherit the root layout's default title. */
  title?: string;
  description: string;
  /** Path starting with "/", or "" for the homepage. */
  path: string;
}

export function buildMetadata({ title, description, path }: PageSeoInput): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path || "/",
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
