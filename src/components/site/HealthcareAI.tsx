"use client";

import { CloudUpload, Gauge, Layers, Server } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: CloudUpload,
    title: "Cloud Migration",
    image: "/home/magnific__talk__91259.jpeg",
    description:
      "Seamlessly transition your infrastructure to the cloud with minimal downtime and maximum efficiency.",
  },
  {
    icon: Layers,
    title: "Cloud Architecture Design",
    image: "/home/magnific__talk__31260.jpeg",
    description:
      "Design scalable, secure, and cost-effective cloud architectures tailored to your business needs.",
  },
  {
    icon: Gauge,
    title: "Resource Optimization",
    image: "/home/magnific_3007480450.jpeg",
    description:
      "Optimize cloud resources to reduce costs while improving performance and scalability.",
  },
  {
    icon: Server,
    title: "Managed Cloud Services",
    image: "/home/magnific_fill-the-empty-parts_3006956021.jpeg",
    description:
      "24/7 monitoring, maintenance, and support to ensure your cloud infrastructure runs smoothly.",
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
              Cloud <span className="text-brand-gradient">Solutions</span>
            </>
          }
          description="We enable enterprises to modernize, migrate, and optimize on the cloud with confidence."
          exploreHref="#"
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

          <div className="md:col-span-3 grid gap-4 md:gap-3 lg:gap-6 md:grid-rows-4 md:h-full">
            {cards.map((it, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={it.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
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
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareAI;
