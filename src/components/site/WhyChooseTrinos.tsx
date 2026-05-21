"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, ShieldCheck, Building2, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";

type Pillar = {
  title: string;
  description: string;
  Icon: typeof Cpu;
};

const pillars: Pillar[] = [
  {
    title: "AI-First Engineering",
    description:
      "We embed artificial intelligence at the core of every solution, ensuring your technology stack is future-ready and intelligent by design.",
    Icon: Cpu,
  },
  {
    title: "Security by Design",
    description:
      "Security isn't an afterthought — it's woven into every layer of our architecture, protecting your data and systems from day one.",
    Icon: ShieldCheck,
  },
  {
    title: "Enterprise Expertise",
    description:
      "Years of combined experience working with Fortune 500 companies, understanding complex enterprise needs and delivering scalable solutions.",
    Icon: Building2,
  },
  {
    title: "Rapid Delivery",
    description:
      "Move fast without compromising quality. Our agile methodologies and modern architectures enable quick deployment at enterprise scale.",
    Icon: Gauge,
  },
];

const WhyChooseTrinos = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1 reveal progress driven by scroll

  useEffect(() => {
    const update = () => {
      const el = cardsRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      // Start revealing as soon as the cards enter the viewport,
      // fully revealed by the time the cards' top reaches ~55% of the viewport
      // so the section heading is still visible when the last card lands.
      const start = viewportH * 0.90;
      const end = viewportH * 0.50;
      const p = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, p));
      setProgress(clamped);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const cardCount = pillars.length;
  // Each card occupies an equal slice of the overall progress; within its slice,
  // the card animates from 0 to 1 so it reveals smoothly in sequence.
  const cardProgress = (i: number) => {
    const slice = 1 / cardCount;
    return Math.max(0, Math.min(1, (progress - i * slice) / slice));
  };

  return (
    <section
      ref={sectionRef}
      id="why-choose-trinos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-surface-soft to-white py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft radial blue glows */}
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-primary-glow/10 blur-3xl" />
        {/* dotted abstract pattern, top-left */}
        <svg
          aria-hidden="true"
          className="absolute left-0 top-16 h-72 w-72 opacity-50"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs>
            <radialGradient id="dotsFadeLeft" cx="20%" cy="50%" r="60%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <pattern id="dotsLeft" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1.2" cy="1.2" r="1.2" fill="hsl(var(--primary))" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dotsLeft)" />
          <rect width="200" height="200" fill="url(#dotsFadeLeft)" />
        </svg>
        {/* thin concentric rings, top-right */}
        <svg
          aria-hidden="true"
          className="absolute right-0 top-10 h-80 w-80 opacity-40"
          viewBox="0 0 200 200"
          fill="none"
        >
          <g stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="0.6">
            <circle cx="180" cy="60" r="40" />
            <circle cx="180" cy="60" r="70" />
            <circle cx="180" cy="60" r="100" />
            <circle cx="180" cy="60" r="130" />
          </g>
          <circle cx="220" cy="60" r="2.5" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <div className="container-px mx-auto w-full max-w-[1400px]">
        {/* Heading */}
        <h2 className={`${t.sectionHeadline} text-foreground`}>
          Why <span className="text-brand-gradient">Trinos</span>
        </h2>
        <p className={`mt-5 max-w-2xl ${t.bodyResponsive} text-muted-foreground`}>
          Built on innovation. Driven by trust. Delivered with excellence.
        </p>

        {/* Timeline + cards */}
        <div ref={cardsRef} className="relative mt-20 sm:mt-24">
          {/* Timeline line + dots (desktop only) — drawn on top of the cards' top border */}
          <div className="pointer-events-none absolute inset-x-0 z-10 hidden lg:block" style={{ top: "1.75rem" }}>
            <div className="relative mx-auto" style={{ width: "75%", height: "2px" }}>
              <div className="absolute inset-0 rounded-full bg-primary/25" />
              <div
                className="absolute inset-y-0 left-0 origin-left rounded-full bg-gradient-to-r from-primary via-primary-glow to-primary-deep"
                style={{ width: "100%", transform: `scaleX(${progress})`, transition: "transform 200ms ease-out" }}
              />
              {/* Connector dots placed in the midpoint of each gap between badges (3 dots between 4 cards) */}
              {[1, 3, 5].map((n) => {
                const pos = n / 6;
                const dotProgress = Math.max(0, Math.min(1, (progress - pos) * 10));
                return (
                  <span
                    key={n}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pos * 100}%`, top: "50%" }}
                  >
                    <span
                      className="block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
                      style={{
                        opacity: dotProgress,
                        transform: `scale(${0.4 + dotProgress * 0.6})`,
                        transition: "opacity 200ms ease-out, transform 200ms ease-out",
                      }}
                    />
                  </span>
                );
              })}
            </div>
          </div>

          {/* Number badge row (desktop only) — sits above the line so it masks the segment passing behind each badge */}
          <div className="pointer-events-none absolute inset-x-0 z-20 hidden lg:grid lg:grid-cols-4" style={{ top: 0 }}>
            {pillars.map((_, i) => {
              const cp = cardProgress(i);
              return (
                <div key={i} className="flex justify-center">
                  <div
                    className="relative h-14 w-14 rounded-full bg-white shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.35)] ring-1 ring-primary/15"
                    style={{
                      opacity: cp,
                      transform: `scale(${0.6 + cp * 0.4})`,
                      transition: "opacity 300ms ease-out, transform 300ms ease-out",
                    }}
                  >
                    <span className={`relative grid h-full w-full place-items-center ${t.badge} text-foreground/80`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:items-stretch lg:pt-7">
            {pillars.map((p, i) => {
              const { Icon } = p;
              const cp = cardProgress(i);
              return (
                <div
                  key={p.title}
                  className="group relative flex h-full flex-col items-center"
                  style={{
                    opacity: cp,
                    transform: `translateY(${(1 - cp) * 24}px)`,
                    transition: "opacity 300ms ease-out, transform 300ms ease-out",
                  }}
                >
                  {/* Mobile-only inline badge (desktop badges are rendered in the absolutely-positioned row above) */}
                  <div className="relative z-20 -mb-7 lg:hidden">
                    <div className="relative h-14 w-14 rounded-full bg-white shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.35)] ring-1 ring-primary/15">
                      <span className={`relative grid h-full w-full place-items-center ${t.badge} text-foreground/80`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card — equal height via flex column, h-full */}
                  <div
                    className={cn(
                      "relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/60",
                      "bg-white/70",
                      "px-6 pt-12 pb-8 sm:px-7 sm:pt-14",
                      "shadow-[0_10px_40px_-18px_hsl(210_60%_25%/0.25)]"
                    )}
                  >
                    {/* Icon tile */}
                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-primary/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_8px_20px_-10px_hsl(var(--primary)/0.45)] ring-1 ring-primary/10">
                        <Icon
                          className="h-8 w-8 text-primary"
                          strokeWidth={1.6}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`relative mt-6 text-center ${t.cardHeadlineSm} text-foreground`}>
                      {p.title}
                    </h3>
                    {/* Accent underline */}
                    <div className="relative mx-auto mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-primary to-primary-glow" />

                    {/* Description */}
                    <p className={`relative mt-5 text-center ${t.bodyCaption} text-muted-foreground`}>
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrinos;
