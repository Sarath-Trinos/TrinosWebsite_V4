import Image from "next/image";
import { type as t } from "@/lib/typography";

type DeliverCard = {
  label: string;
  title: string;
  body: string;
  image: string;
  objectPosition?: string;
};

const cards: DeliverCard[] = [
  {
    label: "AGENTIC REASONING",
    title: "Agentic Reasoning Models",
    body: "Purpose-built small and mid-scale models that plan, decide and act across multi-step enterprise workflows, so high accuracy at a fraction of frontier-model cost.",
    image: "/trinos/Agentic Reasoning.png",
  },
  {
    label: "MEMORY-DRIVEN",
    title: "Memory-Driven Agents with MCP",
    body: "Agents equipped with enterprise tools, long-term memory and contextual recall, turning one-shot AI into compounding intelligence.",
    image: "/trinos/MCP.png",
  },
  {
    label: "HUMAN-IN-THE-LOOP",
    title: "Human-in-the-Loop Control",
    body: "Every approval, correction, and override is captured as signal, making agents safer, more aligned and measurably better over time.",
    image: "/trinos/Human_loop.png",
    objectPosition: "center top",
  },
  {
    label: "RAPID APP DEV",
    title: "Rapid application dev",
    body: "Production-grade AI systems designed, built and deployed in weeks not months.",
    image: "/trinos/Rapid application.png",
  },
];

const WhatWeDeliver = () => (
  <section id="what-we-deliver" className="bg-[#F9F9F7] py-10">
    <div className="container-px mx-auto max-w-[1200px]">
      <div className="mb-14 max-w-6xl md:mb-16">
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">What we</span>{" "}
          <span className="text-brand-gradient-reverse">deliver</span>
        </h2>
        <p className={`mt-3 ${t.subheadlineSemibold} text-black`}>
          Four capabilities that support long term AI value.
        </p>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          Every Trinos deployment combines focused models, agent memory, feedback loops
          and controlled improvement cycles. Together, these building blocks help AI systems
          capture business logic, workflow patterns and organizational knowledge over time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {cards.map(({ label, title, body, image, objectPosition }) => (
          <div
            key={label}
            className="group flex flex-col overflow-hidden rounded-2xl bg-surface-dark text-on-surface-dark border border-white/10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={80}
                style={objectPosition ? { objectPosition } : undefined}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className={`${t.cardHeadline} text-on-surface-dark`}>{title}</h3>
              <p className="text-sm leading-relaxed text-white/70 text-balance">
                {body}
              </p>
              <span className="sr-only">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDeliver;
