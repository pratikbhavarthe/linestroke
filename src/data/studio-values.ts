export interface StudioValue {
  index: string;
  title: string;
  description: string;
}

export const studioValues: StudioValue[] = [
  {
    index: "01",
    title: "Design Philosophy",
    description:
      "Every surface, edge, and proportion is a decision, not a default. We design with intent, not convention.",
  },
  {
    index: "02",
    title: "Engineering Mindset",
    description:
      "Form is validated against manufacturing reality from the first sketch, so nothing beautiful gets stuck at the tooling stage.",
  },
  {
    index: "03",
    title: "Collaboration",
    description:
      "We work alongside founders and engineering teams as one studio, not a vendor handing off files at the end of a project.",
  },
  {
    index: "04",
    title: "Human Centered Design",
    description:
      "Products are shaped around how people actually use them in the real world, not how they look in a render.",
  },
  {
    index: "05",
    title: "Manufacturing Awareness",
    description:
      "We design for the factory as much as the customer, understanding tooling, tolerances, and cost from day one.",
  },
];
