"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "AI-First Engineering",
    description:
      "We embed artificial intelligence at the core of every solution, ensuring your technology stack is future-ready and intelligent by design.",
  },
  {
    title: "Security by Design",
    description:
      "Security isn't an afterthought — it's woven into every layer of our architecture, protecting your data and systems from day one.",
  },
  {
    title: "Enterprise Expertise",
    description:
      "Years of combined experience working with Fortune 500 companies, understanding complex enterprise needs and delivering scalable solutions.",
  },
  {
    title: "Rapid Delivery",
    description:
      "Move fast without compromising quality. Our agile methodologies and modern architectures enable quick deployment at enterprise scale.",
  },
];

const WhyChooseTrinos = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  // visibleCount: 0 = nothing yet, 1 = pillar 1 only, ..., 4 = all four
  const [visibleCount, setVisibleCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setVisibleCount(pillars.length);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;

      // Before the section pins, hide everything.
      if (rect.top > 0) {
        setVisibleCount(0);
        return;
      }
      if (total <= 0) {
        setVisibleCount(pillars.length);
        return;
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total; // 0..1 across the pinned span

      // Reserve the first ~15% of the pinned span to show the heading + pillar 1,
      // then reveal pillars 2, 3, 4 across the remaining 85%.
      const headLead = 0.15;
      let count: number;
      if (progress < headLead) {
        count = 1;
      } else {
        const remaining = (progress - headLead) / (1 - headLead); // 0..1
        // 0..1 → reveals pillars 2,3,4 → final count grows from 1 to 4
        count = 1 + Math.min(Math.floor(remaining * (pillars.length - 1)) + 1, pillars.length - 1);
      }
      setVisibleCount(count);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isDesktop]);

  const connectorPct =
    visibleCount <= 0
      ? 0
      : visibleCount >= pillars.length
        ? 100
        : ((visibleCount - 0.5) / (pillars.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="why-choose-trinos"
      className="relative bg-surface-soft py-16 sm:py-20 lg:py-0"
      style={isDesktop ? { height: `${pillars.length * 35 + 60}vh` } : undefined}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center lg:overflow-hidden">
        <div className="container-px max-w-[1400px] mx-auto w-full">
          <div className="max-w-2xl mb-10 sm:mb-12 lg:mb-16">
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-balance leading-tight text-foreground">
              Why{" "}
              <span className="text-brand-gradient">Trinos</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Why choose Trinos
            </p>
          </div>

          <div className="relative">
            {/* Connector line — base */}
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-border" />
            {/* Connector line — progress fill */}
            <div
              className="hidden lg:block absolute left-0 top-7 h-px bg-gradient-to-r from-primary via-primary-glow to-primary-deep transition-[width] duration-700 ease-out"
              style={{ width: `${connectorPct}%` }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
              {pillars.map((p, i) => {
                const isVisible = !isDesktop || i < visibleCount;
                return (
                  <div
                    key={p.title}
                    className={cn(
                      "relative transition-all duration-700 ease-out",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center font-mono text-sm font-bold transition-all duration-500",
                        isVisible
                          ? "bg-foreground text-on-surface-dark shadow-glow"
                          : "bg-foreground/80 text-on-surface-dark"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <h3 className="mt-6 sm:mt-8 font-display font-bold text-xl sm:text-2xl text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrinos;
