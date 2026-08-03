import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/work", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/studio", priority: 0.8 },
  { path: "/process", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
