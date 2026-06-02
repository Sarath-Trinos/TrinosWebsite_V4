import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";
import { Layers, Hexagon, Activity, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BentoCard = {
  label: string;
  title: string;
  body: string;
  Icon: LucideIcon;
  illustration: "orchestration" | "mcp" | "rag" | "security";
  className: string;
};

const cards: BentoCard[] = [
  {
    label: "SLMS",
    title: "Small Language Models for Business",
    body: "We fine-tune compact, domain-specific models on your industry data. The result is a model that is more accurate, less costly to run and far harder for competitors to replicate.",
    Icon: Layers,
    illustration: "orchestration",
    className: "col-span-12 lg:col-span-8",
  },
  {
    label: "SELF-IMPROVING",
    title: "Self-Improving AI",
    body: "Your systems learn from new data and validated outcomes over time. Every approved output becomes a signal that makes the next response more reliable.",
    Icon: Hexagon,
    illustration: "mcp",
    className: "col-span-12 lg:col-span-4",
  },
  {
    label: "FEEDBACK LOOP",
    title: "The Feedback Loop",
    body: "Human corrections and approvals shape AI outputs to your organizational standards. Every review cycle raises the quality bar for every future output.",
    Icon: Activity,
    illustration: "rag",
    className: "col-span-12 lg:col-span-4",
  },
  {
    label: "RAD",
    title: "Rapid Application Development",
    body: "AI accelerates our internal engineering workflows so we build and iterate production-grade platforms faster. Compounding velocity means your outcomes ship sooner every cycle.",
    Icon: ShieldCheck,
    illustration: "security",
    className: "col-span-12 lg:col-span-8",
  },
];

function Illustration({ kind }: { kind: BentoCard["illustration"] }) {
  if (kind === "orchestration") {
    return (
      <svg viewBox="0 0 400 130" className="h-full w-full" aria-hidden>
        <line
          x1="70"
          y1="80"
          x2="180"
          y2="55"
          stroke="hsl(196 100% 47%)"
          strokeWidth="1.5"
          opacity="0.45"
          strokeDasharray="6 4"
          style={{ animation: "line-dash 2.4s linear infinite" }}
        />
        <line
          x1="180"
          y1="55"
          x2="280"
          y2="85"
          stroke="hsl(196 100% 47%)"
          strokeWidth="1.5"
          opacity="0.45"
          strokeDasharray="6 4"
          style={{ animation: "line-dash 2.8s linear infinite" }}
        />
        <line
          x1="280"
          y1="85"
          x2="340"
          y2="60"
          stroke="hsl(196 100% 47%)"
          strokeWidth="1.5"
          opacity="0.45"
          strokeDasharray="6 4"
          style={{ animation: "line-dash 2.2s linear infinite" }}
        />
        <circle
          cx="70"
          cy="80"
          r="9"
          fill="hsl(196 100% 47%)"
          style={{
            transformOrigin: "70px 80px",
            animation: "node-pulse 2.6s ease-in-out infinite",
          }}
        />
        <circle
          cx="180"
          cy="55"
          r="7"
          fill="hsl(210 90% 55%)"
          opacity="0.85"
          style={{
            transformOrigin: "180px 55px",
            animation: "node-pulse 2.6s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
        <circle
          cx="280"
          cy="85"
          r="6"
          fill="hsl(196 100% 47%)"
          opacity="0.8"
          style={{
            transformOrigin: "280px 85px",
            animation: "node-pulse 2.6s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <circle
          cx="340"
          cy="60"
          r="8"
          fill="hsl(210 90% 55%)"
          style={{
            transformOrigin: "340px 60px",
            animation: "node-pulse 2.6s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
      </svg>
    );
  }
  if (kind === "mcp") {
    return (
      <svg viewBox="0 0 400 130" className="h-full w-full" aria-hidden>
        <rect x="140" y="55" width="48" height="22" rx="6" fill="hsl(196 100% 47%)" />
        <line
          x1="188"
          y1="66"
          x2="220"
          y2="66"
          stroke="hsl(196 100% 47%)"
          strokeWidth="2"
          strokeDasharray="4 3"
          style={{ animation: "line-dash 1.8s linear infinite" }}
        />
        <rect
          x="220"
          y="50"
          width="36"
          height="32"
          rx="8"
          fill="none"
          stroke="hsl(196 100% 47%)"
          strokeWidth="2"
        />
        <circle
          cx="238"
          cy="66"
          r="4"
          fill="hsl(196 100% 47%)"
          style={{
            transformOrigin: "238px 66px",
            animation: "node-pulse 1.8s ease-in-out infinite",
          }}
        />
        <circle
          r="3"
          fill="hsl(196 100% 47%)"
          opacity="0.75"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: "packet-travel 2.2s ease-in-out infinite",
          }}
          cx="190"
          cy="66"
        />
      </svg>
    );
  }
  if (kind === "rag") {
    return (
      <svg viewBox="0 0 400 130" className="h-full w-full" aria-hidden>
        <rect
          x="80"
          y="58"
          width="240"
          height="6"
          rx="3"
          fill="hsl(196 100% 47%)"
          opacity="0.85"
          style={{
            transformBox: "fill-box",
            animation: "bar-grow 3s ease-in-out infinite",
          }}
        />
        <rect
          x="80"
          y="72"
          width="180"
          height="6"
          rx="3"
          fill="hsl(196 100% 47%)"
          opacity="0.55"
          style={{
            transformBox: "fill-box",
            animation: "bar-grow 3s ease-in-out infinite",
            animationDelay: "0.4s",
          }}
        />
        <rect
          x="80"
          y="86"
          width="120"
          height="6"
          rx="3"
          fill="hsl(196 100% 47%)"
          opacity="0.3"
          style={{
            transformBox: "fill-box",
            animation: "bar-grow 3s ease-in-out infinite",
            animationDelay: "0.8s",
          }}
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 130" className="h-full w-full" aria-hidden>
      <circle
        cx="200"
        cy="65"
        r="40"
        fill="none"
        stroke="hsl(196 100% 47%)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        opacity="0.5"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animation: "ring-spin-slow 14s linear infinite",
        }}
      />
      <path
        d="M200 38 L222 50 V70 C222 84 212 92 200 96 C188 92 178 84 178 70 V50 Z"
        fill="none"
        stroke="hsl(196 100% 47%)"
        strokeWidth="2"
        style={{ animation: "shield-glow 2.8s ease-in-out infinite" }}
      />
      <path
        d="M192 66 L198 72 L210 60"
        stroke="hsl(196 100% 47%)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BentoCardInner({ label, title, body, Icon, illustration }: Omit<BentoCard, "className">) {
  return (
    <div className="relative z-[1] flex h-full flex-col">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
        <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
      </div>
      <h3 className={`${t.cardHeadline} text-surface-dark`}>{title}</h3>
      <p className={`mt-3 ${t.bodyCaption} text-muted-foreground`}>{body}</p>
      <div className="mt-auto pt-8">
        <div className="relative h-[140px] overflow-hidden rounded-2xl bg-[hsl(196_100%_95%)] md:h-[160px]">
          <Illustration kind={illustration} />
        </div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

const WhatWeDeliver = () => (
  <section id="what-we-deliver" className="bg-[#F9F9F7] py-24">
    <div className="container-px mx-auto max-w-[1400px]">
      <p className="mb-10 max-w-3xl text-sm md:text-base text-muted-foreground border-l-2 border-primary pl-4">
        The Trinos Edge powers production AI platforms and helps products like
        Molter Studio improve through repeated operational cycles.
      </p>

      <div className="mb-14 max-w-3xl md:mb-16">
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">Four Capabilities</span>{" "}
          <span className="text-brand-gradient-reverse">That Compound Over Time</span>
        </h2>
        <p className={`mt-3 max-w-2xl ${t.subheadlineSemibold} text-black`}>
          Built to get better the more you use them.
        </p>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          Every Trinos deployment combines these building blocks. Your AI investment
          captures proprietary workflows, business logic and operational patterns with
          every cycle.
        </p>
      </div>

      <div className="grid grid-cols-12 items-stretch gap-5 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className={cn(
              "group relative overflow-hidden rounded-[28px] border border-primary/15 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card lg:p-10",
              card.className,
            )}
          >
            <BentoCardInner
              label={card.label}
              title={card.title}
              body={card.body}
              Icon={card.Icon}
              illustration={card.illustration}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDeliver;
