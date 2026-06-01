"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { type as t } from "@/lib/typography";

type Industry = {
  title: string;
  description: string;
  image: string;
};

const INDUSTRIES: Industry[] = [
  {
    title: "Healthcare & Life Sciences",
    description:
      "We help healthcare organizations reduce administrative burden while improving patient outcomes.",
    image: "/industry/doctor-holds-green-object-with-word-i-m.jpg",
  },
  {
    title: "Financial Services & Insurance",
    description:
      "Banks, Insurers, and Fintechs need to move fast without compromising trust.",
    image:
      "/industry/happy-couple-clients-signing-house-buying-rent-contract-insurance-agreement-filling-bank-papers-mortgage-loan-meeting-with-lawyer-broker-realtor-real-estate-agent-office.jpg",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Retail today means competing on speed, personalization, and seamless operations.",
    image:
      "/industry/shopping-mens-blazers-online-exploring-various-colors-using-laptop-ecommerce-platform-seamless-experience.jpg",
  },
  {
    title: "Manufacturing & Industrial AI",
    description: "We connect the shop floor to the top floor.",
    image: "/industry/ai-managing-energy-resources-remote-areas.jpg",
  },
  {
    title: "Legal & Professional Services",
    description: "Your experts should focus on strategy, not paperwork.",
    image:
      "/industry/smart-law-legal-advice-icons-savvy-lawyer-working-tools-lawyers-office.jpg",
  },
  {
    title: "Real Estate & Property Management",
    description:
      "Managing properties means juggling tenants, maintenance, finances, and investors.",
    image:
      "/industry/real-estate-investment-concept-person-showing-house-icon-growth-graph-virtual-screen.jpg",
  },
  {
    title: "Media & Entertainment",
    description: "Content creation is complex, and so is the business behind it.",
    image:
      "/industry/team-working-together-cover-live-events-update-news-stories-real-time.jpg",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Every mile and every minute counts.",
    image:
      "/industry/smart-warehouse-management-system-with-innovative-internet-things-technology (1).jpg",
  },
  {
    title: "Education & EdTech",
    description: "Learning should be personal, even at scale.",
    image: "/industry/computer-screen-with-globe-screen-globe-screen.jpg",
  },
  {
    title: "Energy & Utilities",
    description: "Asset-intensive operations demand reliability and efficiency.",
    image: "/industry/man-looking-out-window-with-words-welcome-bottom.jpg",
  },
  {
    title: "Construction & Engineering",
    description: "From bid to closeout, visibility is everything.",
    image:
      "/industry/team-working-urban-infrastructure-upgrades-using-digital-tools-datadriven-insights.jpg",
  },
  {
    title: "Hospitality & Tourism",
    description: "Great guest experiences start behind the scenes.",
    image:
      "/industry/business-people-tablet-workplace-discussion-presentation-brainstorming-boardroom-group-teamwork-technology-career-workshop-as-colleagues-meeting-working-together.jpg",
  },
];

const CARDS_PER_ROW = 4;
const STAGGER_MS = 150;

const IndustryGrid = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const animatedRows = useRef<Set<number>>(new Set());
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    const observers: IntersectionObserver[] = [];

    rows.forEach((row, rowIndex) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !animatedRows.current.has(rowIndex)) {
            animatedRows.current.add(rowIndex);
            for (let col = 0; col < CARDS_PER_ROW; col++) {
              const cardIndex = rowIndex * CARDS_PER_ROW + col;
              window.setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, cardIndex])]);
              }, col * STAGGER_MS);
            }
          }
        },
        { threshold: 0.2, rootMargin: "50px 0px" }
      );
      observer.observe(row);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const id = window.setTimeout(() => {
      expandedRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 250);
    return () => window.clearTimeout(id);
  }, [activeIndex]);

  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
    idle(() => {
      INDUSTRIES.forEach((industry) => {
        const img = new window.Image();
        img.decoding = "async";
        img.src = industry.image;
      });
    });
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const activeIndustry = activeIndex !== null ? INDUSTRIES[activeIndex] : null;
  const visibleIndustries = INDUSTRIES.map((industry, originalIndex) => ({
    industry,
    originalIndex,
  })).filter(({ originalIndex }) => originalIndex !== activeIndex);
  const rowCount = Math.ceil(visibleIndustries.length / CARDS_PER_ROW);
  const activeRow =
    activeIndex !== null
      ? Math.min(Math.floor(activeIndex / CARDS_PER_ROW), rowCount)
      : null;

  return (
    <section id="industries-grid" className="py-16 lg:py-24 bg-background">
      <div className="container-px max-w-[1400px] mx-auto">
        <div className="max-w-3xl mb-12 lg:mb-16 animate-fade-up">
          <span className="chip mb-5">Industry-specific solutions</span>
          <h2 className={`${t.sectionHeadline} text-foreground`}>
            Solutions tailored to your industry
          </h2>
          <p className={`mt-5 ${t.subheadline} text-muted-foreground`}>
            Discover tailored AI and ERP solutions designed to address the unique
            challenges and opportunities in your industry.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-8 md:gap-10">
              {activeRow === rowIndex && activeIndustry && (
                <div
                  ref={expandedRef}
                  key={activeIndex}
                  className="animate-expand-grow [transform-origin:top_center]"
                >
                  <div className="relative w-full overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border/60 [contain:layout_paint]">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      aria-label="Close expanded industry"
                      className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-foreground hover:bg-white hover:rotate-90 shadow-soft transition-all duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="relative w-full aspect-[16/7] md:aspect-[16/6] overflow-hidden">
                      <Image
                        src={activeIndustry.image}
                        alt={activeIndustry.title}
                        fill
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        quality={75}
                        className="object-cover animate-ken-burns"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                    <div className="p-6 md:p-10">
                      <h3
                        className={`${t.featureHeadline} text-foreground font-semibold animate-slide-up-soft`}
                        style={{ animationDelay: "0.15s" }}
                      >
                        {activeIndustry.title}
                      </h3>
                      <p
                        className={`mt-4 ${t.subheadline} text-muted-foreground max-w-3xl animate-slide-up-soft`}
                        style={{ animationDelay: "0.3s" }}
                      >
                        {activeIndustry.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div
                ref={(el) => {
                  rowRefs.current[rowIndex] = el;
                }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              >
                {visibleIndustries
                  .slice(
                    rowIndex * CARDS_PER_ROW,
                    rowIndex * CARDS_PER_ROW + CARDS_PER_ROW
                  )
                  .map(({ industry, originalIndex }) => {
                    const isVisible = visibleCards.includes(originalIndex);
                    return (
                    <button
                      type="button"
                      key={industry.title}
                      onClick={() => handleCardClick(originalIndex)}
                      className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0) translateX(0)"
                          : "translateY(30px) translateX(-20px)",
                        transition:
                          "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-2xl">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          quality={70}
                          loading="lazy"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                      <h3 className={`${t.cardHeadline} text-foreground mb-3`}>
                        {industry.title}
                      </h3>
                      <p
                        className={`${t.body} text-muted-foreground leading-relaxed line-clamp-1`}
                      >
                        {industry.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
