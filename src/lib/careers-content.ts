export type JobSection = {
  heading: string;
  /** Paragraphs of intro/prose for this section (optional). */
  paragraphs?: string[];
  /** Bullet points for this section (optional). */
  bullets?: string[];
};

export type JobContent = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  pageTitle: string;
  metaDescription: string;
  /** Short lead paragraph shown directly under the headline. */
  summary: string;
  sections: JobSection[];
};

const aboutTrinos: JobSection = {
  heading: "About Trinos",
  paragraphs: [
    "Trinos Technologies builds enterprise AI that moves beyond answers to completed work. We design and deploy agentic AI, AI voice assistants, workflow automation, computer vision, generative analytics and ERP modernization for organizations across financial services, healthcare, retail, logistics and the public sector.",
    "Our teams ship production AI with the guardrails enterprises require: human approvals, permissions and audit trails. If you want to work on AI that real businesses depend on every day, you'll feel at home here.",
  ],
};

export const careersContent: Record<string, JobContent> = {
  "senior-ai-engineer": {
    slug: "senior-ai-engineer",
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    pageTitle: "Senior AI Engineer | Careers at Trinos Technologies",
    metaDescription:
      "Join Trinos as a Senior AI Engineer building production agentic AI, LLM-powered systems and enterprise automation with real-world impact.",
    summary:
      "As a Senior AI Engineer at Trinos, you'll architect and ship the AI systems behind our agentic AI, voice and automation products, taking models from prototype to dependable, production-grade enterprise software.",
    sections: [
      {
        heading: "Job description",
        paragraphs: [
          "You will own AI features end-to-end: from understanding the enterprise problem and shaping the approach, to building, evaluating and operating the systems in production. You'll work across LLMs, retrieval, tool-use and orchestration to deliver agents that plan tasks, act across systems and stay within clear approvals.",
        ],
        bullets: [
          "Design and build agentic AI workflows that connect to enterprise systems and data sources.",
          "Develop and fine-tune LLM-powered features: retrieval, prompting, tool-calling and evaluation pipelines.",
          "Take models and prototypes to production: latency, cost, observability, guardrails and audit trails.",
          "Partner with product and delivery teams to translate customer requirements into reliable AI systems.",
          "Set engineering standards for testing, evaluation and responsible AI across the team.",
        ],
      },
      {
        heading: "Requirements",
        bullets: [
          "5+ years building software, with recent hands-on experience shipping ML or LLM-powered systems to production.",
          "Strong Python and solid software engineering fundamentals (testing, code review, CI/CD).",
          "Practical experience with LLMs: prompting, retrieval-augmented generation, fine-tuning or agent/tool-use frameworks.",
          "Comfort with cloud infrastructure and deploying services that are observable and cost-aware.",
          "Clear communication and a bias for solving the customer's problem, not just the model's metric.",
        ],
      },
      {
        heading: "Nice to have",
        bullets: [
          "Experience with conversational AI, voice, or computer vision in an enterprise setting.",
          "Background integrating AI with ERP/CRM or other line-of-business systems.",
          "Contributions to open-source AI tooling or published applied AI work.",
        ],
      },
      aboutTrinos,
    ],
  },

  "product-manager": {
    slug: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote / Hybrid",
    type: "Full-time",
    pageTitle: "Product Manager | Careers at Trinos Technologies",
    metaDescription:
      "Join Trinos as a Product Manager driving the strategy and roadmap for enterprise AI products: agentic AI, voice assistants and automation.",
    summary:
      "As a Product Manager at Trinos, you'll own the strategy and roadmap for our enterprise AI products end-to-end, understanding the evolving AI landscape, capturing customer needs and driving releases that turn AI into completed work.",
    sections: [
      {
        heading: "Job description",
        paragraphs: [
          "Your responsibilities will be end-to-end: from understanding the rapidly evolving enterprise AI landscape and interacting with customers, to capturing requirements, managing the long-term roadmap and short-term releases, and ultimately being accountable for products that customers love and adopt.",
        ],
        bullets: [
          "Define and drive Trinos' product strategy based on the enterprise AI landscape, competitive analysis and customer needs.",
          "Lead product definition, requirements analysis, documentation and positioning across our AI services.",
          "Work closely with leadership, engineering and design to build and maintain a clear product roadmap.",
          "Validate product direction by engaging directly with customers and internal stakeholders.",
          "Produce product collateral and messaging, partnering with sales and marketing to accelerate go-to-market.",
        ],
      },
      {
        heading: "Requirements",
        bullets: [
          "5+ years of product experience in enterprise software, ideally including AI/ML or automation products.",
          "Deep understanding of enterprise buyers and a working knowledge of AI, machine learning and data.",
          "Proven experience across the full product lifecycle: discovery, requirements, prioritization and launch.",
          "Excellent communication skills to evangelize the product to both internal and external audiences.",
          "Strong analytical mindset and a data-driven approach to solving complex business problems.",
        ],
      },
      {
        heading: "Nice to have",
        bullets: [
          "Experience with conversational AI, voice products or contact-center technology.",
          "Familiarity with ERP/CRM modernization and line-of-business application integration.",
          "Understanding of user-centered design: journey mapping, persona identification and pain-point analysis.",
        ],
      },
      aboutTrinos,
    ],
  },

  "ux-ui-designer": {
    slug: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    pageTitle: "UX/UI Designer | Careers at Trinos Technologies",
    metaDescription:
      "Join Trinos as a UX/UI Designer crafting intuitive, trustworthy interfaces for enterprise AI products used by teams every day.",
    summary:
      "As a UX/UI Designer at Trinos, you'll shape how people experience enterprise AI, turning complex agentic, voice and automation capabilities into interfaces that feel clear, trustworthy and effortless.",
    sections: [
      {
        heading: "Job description",
        paragraphs: [
          "You'll own the design of our product experiences from concept to polished interface, partnering with product and engineering to make sophisticated AI approachable. You'll design for moments where users hand work to AI and need confidence, control and clarity at every step.",
        ],
        bullets: [
          "Design end-to-end user experiences for AI products: flows, wireframes, prototypes and high-fidelity UI.",
          "Translate complex agentic and automation concepts into clear, usable interfaces.",
          "Build and maintain a consistent design system in close partnership with engineering.",
          "Run lightweight research and usability testing to validate decisions with real users.",
          "Champion accessibility and a high bar for craft across every screen we ship.",
        ],
      },
      {
        heading: "Requirements",
        bullets: [
          "4+ years of product design experience, with a portfolio of shipped web or SaaS products.",
          "Strong command of interaction design, visual design and modern design tooling (e.g. Figma).",
          "Experience designing data-rich, workflow-driven or B2B/enterprise applications.",
          "Understanding of design systems and close collaboration with front-end engineers.",
          "Solid grasp of accessibility standards and responsive design.",
        ],
      },
      {
        heading: "Nice to have",
        bullets: [
          "Experience designing for AI, conversational or voice-driven products.",
          "Comfort with motion and prototyping to communicate interaction details.",
          "Familiarity with front-end fundamentals (HTML/CSS/Tailwind) to collaborate closely with engineers.",
        ],
      },
      aboutTrinos,
    ],
  },
};

export const careerSlugs = Object.keys(careersContent);

export function jobSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
