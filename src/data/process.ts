export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Research",
    description: "Understanding user needs, market context, and the regulatory landscape.",
  },
  {
    index: "02",
    title: "Design",
    description: "Concept development and industrial design exploration.",
  },
  {
    index: "03",
    title: "Engineering",
    description: "Class A surfacing, CAD, and technical development for manufacturing.",
  },
  {
    index: "04",
    title: "Prototype",
    description: "Clay modeling and physical prototyping for hands on validation.",
  },
  {
    index: "05",
    title: "Validate",
    description: "Homologation support and compliance consulting.",
  },
  {
    index: "06",
    title: "Deliver",
    description: "BOM, documentation, and handover for manufacturing.",
  },
];
