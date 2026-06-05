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
      "The execution layer underneath the AI. ERP that holds the data. Web that scales the access. Mobile that puts intelligence where the work actually happens.",
    href: "/services/enterprise-resource-planning",
  },
  {
    icon: Globe,
    title: "Web Development",
    image: "/home/magnific__talk__31260.jpeg",
    description:
      "Production-grade web platforms engineered for scale, performance and AI-native experiences across customer and internal applications.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    image: "/home/magnific_3007480450.jpeg",
    description:
      "Native and cross platform mobile apps that place AI directly in users' hands, built for reliability, accessibility, security and seamless enterprise integration.",
    href: "/services/mobile-app-development",
  },
];

const HealthcareAI = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface-tint">
      <div className="container-px max-w-[1200px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              Enterprise <span className="text-brand-gradient">Platforms</span>
            </>
          }
          description="The enterprise execution layer beneath AI. ERP systems that manage core data, web platforms that scale access and mobile apps that bring intelligence to where work actually happens."
          exploreHref="/services"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:items-stretch">
          <div className="md:col-span-2 tile overflow-hidden relative aspect-[4/5] md:aspect-auto md:h-[26rem] lg:h-[30rem]">
            {cards.map((card, i) => (
              <Image
                key={card.title}
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
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

          <div
            className={cn(
              "md:col-span-3 flex flex-col gap-4 md:gap-3 lg:gap-6 md:h-[26rem] lg:h-[30rem]",
              activeIndex === null && "md:justify-center"
            )}
          >
            {cards.map((it, i) => {
              const isActive = i === activeIndex;
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
                    "tile bg-card border p-6 md:p-4 lg:p-7 flex items-center gap-5 md:gap-4 lg:gap-5 text-left w-full transition-[border-color,box-shadow] duration-300 ease-out md:min-h-0 hover:!translate-y-0",
                    isActive
                      ? "border-primary shadow-glow md:flex-1"
                      : "border-border hover:border-primary/40 hover:shadow-soft md:flex-none"
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
                  <div className="flex-1 min-w-0">
                    <h3 className={t.cardHeadline}>{it.title}</h3>
                    <div
                      className={cn(
                        "grid transition-opacity duration-300 ease-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <p
                        className={cn(
                          t.bodySm,
                          "overflow-hidden text-muted-foreground"
                        )}
                      >
                        {it.description}
                      </p>
                    </div>
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

export default HealthcareAI;
