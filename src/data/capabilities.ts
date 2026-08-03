export interface Capability {
  index: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Industrial Design",
    description:
      "From research and ideation to final styling, products shaped to be functional, market ready, and unmistakably resolved.",
  },
  {
    index: "02",
    title: "Class A Surfacing",
    description:
      "Precision Class A surfaces engineered for manufacturing, where every curve is defined for tooling, not just for render.",
  },
  {
    index: "03",
    title: "Clay Modeling",
    description:
      "Physical clay models and mockups used to explore, evaluate, and validate form before a single tool is cut.",
  },
  {
    index: "04",
    title: "EV Consulting",
    description:
      "Architecture, regulatory, and homologation guidance for electric vehicle programs, from concept through compliance.",
  },
  {
    index: "05",
    title: "BOM & Documentation",
    description:
      "Accurate bill of materials, part listings, and technical documentation that carry a design cleanly into production.",
  },
];
