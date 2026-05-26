"use client";

import { Building2, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Building2,
    title: "Enterprise Resource Planning",
    image: "/home/magnific__talk__91259.jpeg",
    description:
      "ERP architecture, implementation, integration, and AI-ready workflow design — backed by 25+ years of enterprise systems leadership across SAP, Oracle, Microsoft Dynamics, Infor, QAD, and Epicor.",
    href: "/services/enterprise-resource-planning",
  },
  {
    icon: Globe,
    title: "Web Development",
    image: "/home/magnific__talk__31260.jpeg",
    description:
      "Production-grade web platforms engineered for scale, performance, and AI-native experiences across customer and internal applications.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    image: "/home/magnific_3007480450.jpeg",
    description:
      "Native and cross-platform mobile apps that put AI in users' hands — built for reliability, accessibility, and enterprise integration.",
    href: "/services/mobile-app-development",
  },
];

const HealthcareAI = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-surface-tint">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              Enterprise <span className="text-brand-gradient">Platforms</span>
            </>
          }
          description="The execution layer for AI-ready operations — ERP that connects, web platforms that scale, mobile apps that put AI in users' hands."
          exploreHref="/services"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:items-stretch">
          <div className="md:col-span-2 tile overflow-hidden relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
            {cards.map((card, i) => (
              <Image
                key={card.title}
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={cn(
                  "object-cover transition-opacity duration-500 ease-out",
                  i === activeIndex ? "opacity-100" : "opacity-0"
                )}
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 p-7 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent text-on-surface-dark">
              <h3 className={`${t.cardHeadlineMd} mb-2`}>
                {cards[activeIndex].title}
              </h3>
              <p className={`${t.bodySm} text-white/85`}>
                {cards[activeIndex].description}
              </p>
            </div>
          </div>

          <div className="md:col-span-3 grid gap-4 md:gap-3 lg:gap-6 md:grid-rows-3 md:h-full">
            {cards.map((it, i) => {
              const isActive = i === activeIndex;
              return (
                <a
                  key={it.title}
                  href={it.href}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "tile bg-card border p-6 md:p-3 md:py-2 lg:p-7 flex items-center gap-5 md:gap-3 lg:gap-5 text-left w-full md:h-full transition-all duration-300 ease-out",
                    isActive
                      ? "border-primary shadow-glow scale-[1.01]"
                      : "border-border hover:border-primary/40 hover:shadow-soft"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 md:w-9 md:h-9 lg:w-12 lg:h-12 shrink-0 rounded-2xl grid place-items-center transition-colors duration-300",
                      isActive
                        ? "bg-gradient-primary text-white"
                        : "bg-gradient-tile text-primary"
                    )}
                  >
                    <it.icon className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className={`${t.cardHeadline} flex-1`}>{it.title}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareAI;
