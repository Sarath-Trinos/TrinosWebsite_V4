"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { type as t } from "@/lib/typography";

type Industry = {
  title: string;
  taglines?: [string, string];
  description: string;
  image: string;
  helpsWith?: string[];
  businessImpact?: string[];
  cta?: { label: string; href: string };
};

const INDUSTRIES: Industry[] = [
  {
    title: "Healthcare and Life Sciences",
    taglines: ["Smarter care, less paperwork", "Secure, AI-first operations"],
    description:
      "Trinos helps healthcare and life science organizations reduce manual work, improve patient support and make better use of clinical and operational data. Our AI first systems support secure workflows, faster decisions and smoother day to day operations.",
    image: "/industry/Healthcare (1).png",
    helpsWith: [
      "Patient support automation",
      "Appointment and follow up workflows",
      "Medical record search and summaries",
      "Claims and billing support",
      "Internal operations dashboards",
      "Secure data handling",
    ],
    businessImpact: [
      "Less administrative workload",
      "Faster access to patient information",
      "Better team productivity",
      "Improved patient experience",
      "Secure and reliable operations",
    ],
    cta: { label: "Explore Healthcare AI Solutions", href: "/contact" },
  },
  {
    title: "Financial Services & Insurance",
    taglines: ["Faster service, stronger trust", "Compliance-ready automation"],
    description:
      "Trinos helps banks, insurers and fintech companies move faster while maintaining trust, compliance and data security. Our AI first systems improve customer service, document processing, risk checks and internal workflows without disrupting core operations.",
    image: "/industry/Finance.png",
    helpsWith: [
      "Customer support automation",
      "Claims processing support",
      "Loan and policy document review",
      "Fraud and risk monitoring",
      "Compliance reporting support",
      "Internal workflow dashboards",
      "Secure data management",
    ],
    businessImpact: [
      "Faster customer response",
      "Reduced manual review work",
      "Improved operational accuracy",
      "Stronger compliance support",
      "Better visibility across teams",
      "Secure and scalable processes",
    ],
    cta: { label: "Explore Secure Financial AI", href: "/contact" },
  },
  {
    title: "Retail & E-Commerce",
    taglines: ["Personalized at every touchpoint", "Operations that scale with demand"],
    description:
      "Trinos helps retail and ecommerce businesses improve speed, personalization and operational efficiency. Our AI first systems support customer journeys, inventory visibility, order workflows and business insights across online and offline channels.",
    image: "/industry/retail and ecommerce.jpg",
    helpsWith: [
      "Customer support automation",
      "Product search and recommendations",
      "Order tracking workflows",
      "Inventory and demand insights",
      "Sales and customer dashboards",
      "Marketing workflow automation",
      "Personalized shopping experiences",
    ],
    businessImpact: [
      "Faster customer response",
      "Better shopping experience",
      "Improved inventory visibility",
      "Higher team productivity",
      "Smarter sales decisions",
      "Scalable retail operations",
    ],
    cta: { label: "Create Better Shopping Experiences", href: "/contact" },
  },
  {
    title: "Manufacturing & Industrial AI",
    taglines: ["Connected shop floor to office", "Faster, data-driven decisions"],
    description:
      "Trinos helps manufacturers connect plant operations, production data and business systems for better visibility and faster decisions. Our AI first systems support quality checks, workflow automation and operational intelligence across the shop floor and office teams.",
    image: "/industry/manufacturing (1).png",
    helpsWith: [
      "Production workflow automation",
      "Quality inspection support",
      "Machine and process monitoring",
      "Inventory and supply chain visibility",
      "Maintenance alerts and issue tracking",
      "Operational dashboards",
      "ERP and plant system integration",
    ],
    businessImpact: [
      "Improved production visibility",
      "Faster issue detection",
      "Reduced manual reporting",
      "Better quality control",
      "Smarter resource planning",
      "More connected operations",
    ],
    cta: { label: "Connect Manufacturing Operations", href: "/contact" },
  },
  {
    title: "Legal & Professional Services",
    taglines: ["Less paperwork, more strategy", "Knowledge at your fingertips"],
    description:
      "Trinos helps legal firms, consulting teams and professional service companies reduce paperwork and improve service speed. Our AI first systems support document review, client workflows and internal knowledge access so experts can focus more on strategy and client outcomes.",
    image: "/industry/Legal & professional services.png",
    helpsWith: [
      "Contract and document review",
      "Legal research support",
      "Client request automation",
      "Case and matter tracking",
      "Internal knowledge search",
      "Compliance workflow support",
      "Billing and reporting dashboards",
    ],
    businessImpact: [
      "Less manual paperwork",
      "Faster document review",
      "Better client response time",
      "Improved team productivity",
      "Easier access to knowledge",
      "More reliable service delivery",
    ],
    cta: { label: "Automate Document Workflows", href: "/contact" },
  },
  {
    title: "Logistics & Supply Chain",
    taglines: ["Every mile, every minute counts", "End-to-end shipment visibility"],
    description:
      "Trinos helps logistics and supply chain teams move goods faster with better visibility and fewer delays. Our AI first systems support shipment tracking, warehouse workflows, demand planning and operational reporting across complex, multi-party networks.",
    image: "/industry/Industries  - logistics.png",
    helpsWith: [
      "Shipment tracking automation",
      "Warehouse workflow support",
      "Demand and inventory planning",
      "Route and delivery visibility",
      "Exception and delay alerts",
      "Operations dashboards",
    ],
    businessImpact: [
      "Faster, more reliable delivery",
      "Better end-to-end visibility",
      "Reduced manual coordination",
      "Smarter inventory decisions",
      "Fewer delays and exceptions",
      "More resilient operations",
    ],
    cta: { label: "Streamline Your Supply Chain", href: "/contact" },
  },
  {
    title: "Education & EdTech",
    taglines: ["Personalized learning at scale", "Less admin, more teaching"],
    description:
      "Trinos helps schools, universities and EdTech companies improve learning support, student engagement and administrative efficiency. Our AI first systems support personalized learning, student services, content workflows and data driven decisions across education teams.",
    image: "/industry/Edtech.png",
    helpsWith: [
      "Student support automation",
      "Personalized learning assistance",
      "Course content creation support",
      "Assessment and feedback workflows",
      "Admission and enquiry management",
      "Learning performance dashboards",
      "Internal admin automation",
    ],
    businessImpact: [
      "Better student engagement",
      "Faster learner support",
      "Reduced admin workload",
      "Improved content delivery",
      "Clearer learning insights",
      "Scalable education operations",
    ],
    cta: { label: "Personalize Learning Experiences", href: "/contact" },
  },
  {
    title: "Energy & Utilities",
    taglines: ["Reliable assets, fewer outages", "Field operations, fully connected"],
    description:
      "Trinos helps energy and utility companies improve asset visibility, field operations and service reliability. Our AI first systems support maintenance workflows, outage response, compliance tasks and operational dashboards across asset heavy environments.",
    image: "/industry/Energy & utility.png",
    helpsWith: [
      "Asset monitoring and alerts",
      "Predictive maintenance support",
      "Field service workflow automation",
      "Outage and issue response",
      "Compliance and safety reporting",
      "Energy usage dashboards",
      "Customer service automation",
    ],
    businessImpact: [
      "Better asset visibility",
      "Faster issue response",
      "Reduced maintenance delays",
      "Improved field productivity",
      "Stronger compliance support",
      "More reliable operations",
    ],
    cta: { label: "Improve Asset Performance", href: "/contact" },
  },
  {
    title: "Construction & Engineering",
    taglines: ["Projects on time, on budget", "Site and office in sync"],
    description:
      "Trinos helps construction and engineering teams improve project visibility, document control and site coordination. Our AI first systems support planning, reporting and workflow automation from bidding to project completion.",
    image: "/industry/Construction .png",
    helpsWith: [
      "Project tracking and reporting",
      "Bid and proposal support",
      "Document search and management",
      "Site issue tracking",
      "Approval workflow automation",
      "Resource and schedule visibility",
      "Safety and compliance reporting",
    ],
    businessImpact: [
      "Better project visibility",
      "Faster document access",
      "Reduced manual reporting",
      "Improved team coordination",
      "Stronger compliance support",
      "Smoother project delivery",
    ],
    cta: { label: "Track Projects Better", href: "/contact" },
  },
  {
    title: "Hospitality & Tourism",
    taglines: ["Guest experiences that delight", "Operations that run smoother"],
    description:
      "Trinos helps hotels, resorts and travel companies improve guest service, booking workflows and daily operations. Our AI first systems support faster responses, smoother coordination and more personalized experiences across guest facing and internal teams.",
    image: "/industry/Hospitality and tourism.png",
    helpsWith: [
      "Guest support automation",
      "Booking and enquiry management",
      "Personalized travel assistance",
      "Housekeeping and service workflows",
      "Feedback and review insights",
      "Staff task tracking",
      "Operations dashboards",
    ],
    businessImpact: [
      "Faster guest response",
      "Better service coordination",
      "Improved guest satisfaction",
      "Reduced manual follow ups",
      "Clearer operational visibility",
      "More efficient hospitality workflows",
    ],
    cta: { label: "Enhance Guest Operations", href: "/contact" },
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
      expandedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="container-px max-w-[1200px] mx-auto">
        <div className="max-w-7xl mb-12 lg:mb-16 animate-fade-up">
          <span className="chip mb-5">Industry-specific solutions</span>
          <h2 className={t.sectionHeadline}>
            <span className="text-black">Solutions tailored to your</span>{" "}
            <span className="text-brand-gradient-reverse">industry</span>
          </h2>
          <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
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
                  className="animate-expand-grow [transform-origin:top_center] scroll-mt-24"
                >
                  <div className="relative w-full overflow-hidden rounded-2xl bg-card shadow-[0_0_40px_-4px_hsl(210_60%_25%/0.22)] ring-1 ring-border/60 [contain:layout_paint]">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      aria-label="Close expanded industry"
                      className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-foreground hover:bg-white hover:rotate-90 shadow-soft transition-all duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 md:p-10 lg:p-12">
                      {/* Header: industry name chip + single tagline headline, centered */}
                      <div className="mx-auto max-w-3xl text-center">
                        <span className="chip mb-5">{activeIndustry.title}</span>
                        {activeIndustry.taglines && (
                          <h3
                            className={`${t.featureHeadline} text-foreground animate-slide-up-soft`}
                            style={{ animationDelay: "0.15s" }}
                          >
                            {activeIndustry.taglines[0]}
                          </h3>
                        )}
                      </div>

                      {/* Two-column body: description + Helps With / Business Impact on the left, image on the right */}
                      <div className="mt-8 grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-start">
                        <div
                          className="animate-slide-up-soft"
                          style={{ animationDelay: "0.35s" }}
                        >
                          <p className={`${t.body} text-muted-foreground`}>
                            {activeIndustry.description}
                          </p>

                          {(activeIndustry.helpsWith || activeIndustry.businessImpact) && (
                            <div className="mt-8 grid gap-8 sm:grid-cols-2">
                              {activeIndustry.helpsWith && (
                                <div>
                                  <h4 className={`${t.cardHeadline} text-foreground mb-4`}>
                                    What Trinos Helps With
                                  </h4>
                                  <ul className="grid gap-y-2.5">
                                    {activeIndustry.helpsWith.map((item) => (
                                      <li
                                        key={item}
                                        className={`${t.body} flex items-start gap-3 text-muted-foreground`}
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {activeIndustry.businessImpact && (
                                <div>
                                  <h4 className={`${t.cardHeadline} text-foreground mb-4`}>
                                    Business Impact
                                  </h4>
                                  <ul className="grid gap-y-2.5">
                                    {activeIndustry.businessImpact.map((item) => (
                                      <li
                                        key={item}
                                        className={`${t.body} flex items-start gap-3 text-muted-foreground`}
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}

                          {activeIndustry.cta && (
                            <div className="mt-8">
                              <a
                                href={activeIndustry.cta.href}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-white font-medium shadow-glow transition-transform duration-300 hover:scale-[1.03]"
                              >
                                {activeIndustry.cta.label}
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          )}
                        </div>

                        <div
                          className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-soft ring-1 ring-border/60 animate-slide-up-soft"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <Image
                            src={activeIndustry.image}
                            alt={activeIndustry.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            quality={75}
                            className="object-cover animate-ken-burns"
                            priority
                          />
                          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        </div>
                      </div>
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
                      className="group flex flex-col text-left rounded-2xl overflow-hidden bg-surface-dark text-on-surface-dark shadow-card hover:shadow-glow transition-shadow duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0) translateX(0)"
                          : "translateY(30px) translateX(-20px)",
                        transition:
                          "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div className="relative h-44 w-full overflow-hidden">
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

                      <div className="p-6">
                        <h4 className={t.cardHeadlineSemibold}>
                          {industry.title}
                        </h4>
                        <p className="mt-3 text-sm text-white/70 leading-relaxed line-clamp-3">
                          {industry.description}
                        </p>
                        <p className="mt-4 text-xs font-medium text-primary-glow">Learn More</p>
                      </div>
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
