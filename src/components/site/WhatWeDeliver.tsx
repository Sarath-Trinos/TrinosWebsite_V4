import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";

type DotTone = "purple" | "blue" | "orange" | "red";

const dotClass: Record<DotTone, string> = {
  purple: "bg-violet-500",
  blue: "bg-sky-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

type BentoCard = {
  label: string;
  dot: DotTone;
  title: string;
  body: string;
  className: string;
};

const cards: BentoCard[] = [
  {
    label: "SLMS",
    dot: "purple",
    title: "Small Language Models for Business",
    body: "We fine-tune compact domain-specific models on industry data to improve accuracy, reduce cost, and increase control compared with generic public models.",
    className: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    label: "SELF-IMPROVING",
    dot: "blue",
    title: "Self-Improving AI",
    body: "Systems are designed to learn from new data, validated outcomes, and controlled feedback loops over time.",
    className: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    label: "FEEDBACK LOOP",
    dot: "orange",
    title: "The Feedback Loop",
    body: "Corrections and approvals from human teams are captured so AI outputs can become more aligned to organizational standards.",
    className: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    label: "RAD",
    dot: "red",
    title: "Rapid Application Development",
    body: "AI accelerates Trinos internal engineering workflows, helping the team build and iterate production-grade platforms quickly.",
    className: "col-span-12 md:col-span-6 lg:col-span-6",
  },
];

function BentoCardInner({
  label,
  dot,
  title,
  body,
}: Omit<BentoCard, "className">) {
  return (
    <div className="relative z-[1] flex h-full flex-col">
      <div className="mb-5 flex items-center gap-2.5">
        <span
          className={cn("h-2 w-2 shrink-0 rounded-full", dotClass[dot])}
          aria-hidden
        />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-glow">
          {label}
        </span>
      </div>
      <h3 className={`${t.cardHeadline} text-on-surface-dark`}>{title}</h3>
      <p className={`mt-3 ${t.bodyCaption} text-white/70`}>{body}</p>
    </div>
  );
}

const WhatWeDeliver = () => (
  <section id="what-we-deliver" className="bg-[#F9F9F7] py-24">
    <div className="container-px mx-auto max-w-[1400px]">
      <p className="mb-10 max-w-3xl text-sm md:text-base text-muted-foreground border-l-2 border-primary pl-4">
        The Trinos Edge powers production AI platforms and helps products like
        Moltter Studio improve through repeated operational cycles.
      </p>

      <div className="mb-14 max-w-3xl md:mb-16">
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">What</span>{" "}
          <span className="text-brand-gradient-reverse">we deliver</span>
        </h2>
        <p className={`mt-3 max-w-2xl ${t.subheadlineSemibold} text-black`}>
          Four compounding capabilities, engineered to compound advantage.
        </p>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          Every Trinos deployment combines these building blocks so your AI investment
          captures proprietary workflows, business logic, and operational patterns over
          time.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-5">
        {cards.map((card) => (
          <div
            key={card.label}
            className={cn(
              "group relative overflow-hidden rounded-[28px] border border-white/10 p-8 shadow-card lg:p-10",
              "min-h-[200px] md:min-h-[220px]",
              card.className,
            )}
          >
            <div className="absolute inset-0 bg-surface-dark" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0 opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse 90% 75% at 100% 0%, rgba(255,255,255,0.09) 0%, transparent 58%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden
            />
            <BentoCardInner
              label={card.label}
              dot={card.dot}
              title={card.title}
              body={card.body}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDeliver;
