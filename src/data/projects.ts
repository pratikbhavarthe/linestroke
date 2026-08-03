import type { StaticImageData } from "next/image";

import scooterDetailImage from "@/app/assets/scooter-detail.webp";
import scooterFrontImage from "@/app/assets/scooter-front.webp";
import scooterMobileImage from "@/app/assets/scooter-mobile.webp";
import scooterSideImage from "@/app/assets/scooter-side.webp";

export interface Project {
  slug: string;
  title: string;
  sector: string;
  year: string;
  summary: string;
  image?: {
    src: StaticImageData;
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
    image: {
      src: scooterSideImage,
      alt: "Side render of Linestroke's urban electric two-wheeler platform",
    },
  },
  {
    slug: "modular-battery-enclosure",
    title: "Modular Battery Enclosure",
    sector: "EV / Industrial Equipment",
    year: "2024",
    summary:
      "A Class A surfaced battery housing engineered for thermal performance and single tool manufacturing.",
    image: {
      src: scooterDetailImage,
      alt: "Close-up render showing the surfaced lower enclosure of an electric scooter",
    },
  },
  {
    slug: "connected-hardware-console",
    title: "Connected Hardware Console",
    sector: "Smart Hardware",
    year: "2024",
    summary:
      "An industrial control console designed for continuous use, harsh environments, and clear at a glance status.",
    image: {
      src: scooterFrontImage,
      alt: "Front render illustrating connected hardware integration on an electric scooter",
    },
  },
  {
    slug: "portable-energy-unit",
    title: "Portable Energy Unit",
    sector: "Energy",
    year: "2023",
    summary:
      "A field ready power unit taken from clay model to validated, production documented final form.",
    image: {
      src: scooterMobileImage,
      alt: "Product render used to illustrate Linestroke's portable energy design work",
    },
  },
];
