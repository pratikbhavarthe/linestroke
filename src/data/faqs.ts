export interface Faq {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  description: string;
  items: Faq[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Getting started",
    description: "What we do and how to begin",
    items: [
      {
        question: "What does Linestroke do?",
        answer:
          "Linestroke is an industrial design and engineering studio. We take physical products from first sketch through Class A surfacing, clay modeling, and engineering, to production-ready documentation.",
      },
      {
        question: "How do I start a project with Linestroke?",
        answer:
          "Send us a message through the contact form or email hello@linestroke.com with a short description of what you are building. We will get back to you to schedule an introductory call.",
      },
    ],
  },
  {
    title: "Project fit",
    description: "Industries, teams, and product stages",
    items: [
      {
        question: "What industries do you work with?",
        answer:
          "We focus on mobility, electric vehicles, industrial equipment, smart hardware, energy, and consumer products.",
      },
      {
        question: "Do you work with early-stage startups?",
        answer:
          "Yes. We help early-stage teams turn a concept or rough prototype into a manufacturable product, while also supporting established companies running larger programs.",
      },
    ],
  },
  {
    title: "Delivery",
    description: "Timelines, manufacturing, and handoff",
    items: [
      {
        question: "Do you handle manufacturing and production?",
        answer:
          "We design for manufacturing rather than operate factories. Our BOM and documentation work is built to carry a design cleanly into your production partner's hands.",
      },
      {
        question: "How long does a typical program take?",
        answer:
          "Timing depends on scope. A focused design sprint may take a few months, while a complete concept-to-compliance program can run for a year or more.",
      },
    ],
  },
];

export const faqs: Faq[] = faqCategories.flatMap((category) => category.items);
