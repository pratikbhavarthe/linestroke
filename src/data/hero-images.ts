import type { StaticImageData } from "next/image";

import heroLed from "@/app/assets/scooter-side.webp";
import heroDetail from "@/app/assets/scooter-detail.webp";
import heroClay from "@/app/assets/clay-brisk.jpeg";

export interface HeroImage {
  src: StaticImageData;
  alt: string;
  focus?: string;
}

export const heroImages: HeroImage[] = [
  {
    src: heroLed,
    alt: "Close up of an electric scooter's front LED headlight assembly, designed by Linestroke",
    focus: "center 30%",
  },
  {
    src: heroDetail,
    alt: "Detail shot of a scooter's underbody panel, red accent striping, and front suspension, designed by Linestroke",
    focus: "center 55%",
  },
  {
    src: heroClay,
    alt: "Full-scale clay model of a scooter concept in the Linestroke studio",
    focus: "center",
  },
];
