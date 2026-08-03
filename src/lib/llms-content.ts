import { capabilities } from "@/data/capabilities";
import { contact } from "@/data/contact";
import { faqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { navItems } from "@/data/nav";
import { processSteps } from "@/data/process";
import { projects } from "@/data/projects";
import { studioValues } from "@/data/studio-values";
import { siteConfig } from "@/lib/site-config";

function pageLinks(): string[] {
  return [
    `- [Home](${siteConfig.url}/): ${siteConfig.name} overview`,
    ...navItems.map((item) => `- [${item.label}](${siteConfig.url}${item.href})`),
  ];
}

export function buildLlmsSummary(): string {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Pages",
    ...pageLinks(),
    "",
    "## Capabilities",
    ...capabilities.map((capability) => `- ${capability.title}: ${capability.description}`),
  ];

  return lines.join("\n");
}

export function buildLlmsFull(): string {
  const sections = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## About",
    `${siteConfig.name} is an industrial design and engineering studio based in ${contact.location}, helping startups and companies turn ideas into impactful physical products.`,
    "",
    "## Capabilities",
    capabilities.map((capability) => `### ${capability.title}\n${capability.description}`).join("\n\n"),
    "",
    "## Process",
    processSteps.map((step) => `### ${step.index}. ${step.title}\n${step.description}`).join("\n\n"),
    "",
    "## Studio Values",
    studioValues.map((value) => `### ${value.title}\n${value.description}`).join("\n\n"),
    "",
    "## Industries Served",
    industries.map((industry) => `- ${industry}`).join("\n"),
    "",
    "## Selected Work",
    projects
      .map((project) => `### ${project.title} (${project.year})\nSector: ${project.sector}\n${project.summary}`)
      .join("\n\n"),
    "",
    "## Frequently Asked Questions",
    faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n"),
    "",
    "## Contact",
    `Email: ${contact.email}`,
    `Phone: ${contact.phone}`,
    `Location: ${contact.location}`,
    "",
    "## Pages",
    pageLinks().join("\n"),
  ];

  return sections.join("\n\n");
}
