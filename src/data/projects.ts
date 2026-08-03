export interface Project {
  slug: string;
  title: string;
  sector: string;
  year: string;
  summary: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const projects: Project[] = [
  {
    slug: "urban-two-wheeler-platform",
    title: "Urban Two Wheeler Platform",
    sector: "Mobility / EV",
    year: "2025",
    summary:
      "A ground up electric scooter platform balancing range, serviceability, and a distinct road presence.",
  },
  {
    slug: "modular-battery-enclosure",
    title: "Modular Battery Enclosure",
    sector: "EV / Industrial Equipment",
    year: "2024",
    summary:
      "A Class A surfaced battery housing engineered for thermal performance and single tool manufacturing.",
  },
  {
    slug: "connected-hardware-console",
    title: "Connected Hardware Console",
    sector: "Smart Hardware",
    year: "2024",
    summary:
      "An industrial control console designed for continuous use, harsh environments, and clear at a glance status.",
  },
  {
    slug: "portable-energy-unit",
    title: "Portable Energy Unit",
    sector: "Energy",
    year: "2023",
    summary:
      "A field ready power unit taken from clay model to validated, production documented final form.",
  },
];
