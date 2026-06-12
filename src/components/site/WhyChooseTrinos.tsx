"use client";

import { Cpu, Repeat, Package, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Cpu,
    title: "AI-First Engineering",
    image: "/home/magnific__talk__91259.jpeg",
    description:
      "Built from the ground up utilizing advanced neural architectures to automate workflows and optimize enterprise data pipelines seamlessly.",
    href: "/trinos-edge",
  },
  {
    icon: Repeat,
    title: "Self Improving Systems",
    image: "/home/magnific__talk__31260.jpeg",
    description:
      "Continuous learning feedback loops ensure that the system adapts to your enterprise data patterns and grows smarter with every interaction.",
    href: "/trinos-edge",
  },
  {
    icon: Package,
    title: "Proven Through Products",
    image: "/home/magnific_3007480450.jpeg",
    description:
      "Battle-tested across production environments, delivering measurable efficiency gains and robust security standards for scaling enterprises.",
    href: "/trinos-edge",
  },
];

const WhyChooseTrinos = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="why-choose-trinos" className="py-10 bg-surface-tint">
      <div className="container-px max-w-[1200px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          titleExtraClassName="font-manrope"
          title={
            <>
              Why Enterprises Choose{" "}
              <span className="text-brand-gradient">Trinos</span>
            </>
          }
          description="The longer you use Trinos, the smarter it gets."
          exploreHref="/trinos-edge"
          exploreLabel="Discover the Trinos Edge"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:items-stretch">
          <div className="md:col-span-3 tile overflow-hidden relative aspect-[4/5] md:aspect-auto md:h-[26rem] lg:h-[30rem]">
            {cards.map((card, i) => (
              <Image
                key={card.title}
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={cn(
                  "object-cover transition-opacity duration-500 ease-out",
                  i === (activeIndex ?? 0) ? "opacity-100" : "opacity-0"
                )}
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <div className="md:col-span-2 flex flex-col justify-center gap-8 md:gap-8 lg:gap-10 md:h-[26rem] lg:h-[30rem]">
            {cards.map((it, i) => {
              const isActive = i === activeIndex;
              const isDark = true;
              return (
                <a
                  key={it.title}
                  href={it.href}
                  onClick={(e) => {
                    // Toggle: first click opens the card, clicking it again closes it.
                    e.preventDefault();
                    setActiveIndex(isActive ? null : i);
                  }}
                  aria-expanded={isActive}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "tile border border-l-[3px] p-5 md:p-4 lg:p-6 text-left w-full h-auto transition-all duration-300 ease-out md:min-h-0 md:flex-none hover:!translate-y-0",
                    isDark
                      ? "bg-surface-dark text-on-surface-dark border-white/10 border-l-transparent hover:shadow-glow"
                      : "bg-card",
                    !isDark &&
                      (isActive
                        ? "border-primary border-l-primary shadow-glow"
                        : "border-border border-l-transparent hover:border-primary/40 hover:bg-slate-50/50 hover:shadow-soft")
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-3 lg:gap-4 min-w-0">
                      <div
                        className={cn(
                          "w-11 h-11 md:w-9 md:h-9 lg:w-11 lg:h-11 shrink-0 rounded-2xl grid place-items-center transition-colors duration-300",
                          isDark
                            ? "bg-white/10 text-primary-glow"
                            : isActive
                            ? "bg-gradient-primary text-white"
                            : "bg-gradient-tile text-primary"
                        )}
                      >
                        <it.icon className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                      </div>
                      <h3
                        className={cn(
                          t.cardHeadline,
                          "font-manrope min-w-0",
                          isDark && "text-white"
                        )}
                      >
                        {it.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 shrink-0 transition-transform duration-300 ease-out",
                        isDark ? "text-white/70" : "text-muted-foreground",
                        isActive && "rotate-180",
                        isActive && !isDark && "text-primary"
                      )}
                    />
                  </div>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <p
                      className={cn(
                        t.bodySm,
                        "overflow-hidden",
                        isDark ? "text-white/85" : "text-muted-foreground"
                      )}
                    >
                      {it.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrinos;
