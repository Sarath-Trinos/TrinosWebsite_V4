"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { type as t } from "@/lib/typography";

type Industry = {
  title: string;
  description: string;
  image: string;
  helpsWith?: string[];
  businessImpact?: string[];
  cta?: { label: string; href: string };
};

const INDUSTRIES: Industry[] = [
  {
    title: "Healthcare and Life Sciences",
    description:
      "Trinos helps healthcare and life science organizations reduce manual work, improve patient support and make better use of clinical and operational data. Our AI first systems support secure workflows, faster decisions and smoother day to day operations.",
    image: "/industry/doctor-holds-green-object-with-word-i-m.jpg",
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
    cta: { label: "Explore Healthcare AI Solutions", href: "/services" },
  },
  {
    title: "Financial Services & Insurance",
    description:
      "Trinos helps banks, insurers and fintech companies move faster while maintaining trust, compliance and data security. Our AI first systems improve customer service, document processing, risk checks and internal workflows without disrupting core operations.",
    image:
      "/industry/happy-couple-clients-signing-house-buying-rent-contract-insurance-agreement-filling-bank-papers-mortgage-loan-meeting-with-lawyer-broker-realtor-real-estate-agent-office.jpg",
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
    cta: { label: "Explore Secure Financial AI", href: "/services" },
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Trinos helps retail and ecommerce businesses improve speed, personalization and operational efficiency. Our AI first systems support customer journeys, inventory visibility, order workflows and business insights across online and offline channels.",
    image:
      "/industry/shopping-mens-blazers-online-exploring-various-colors-using-laptop-ecommerce-platform-seamless-experience.jpg",
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
    cta: { label: "Create Better Shopping Experiences", href: "/services" },
  },
  {
    title: "Manufacturing & Industrial AI",
    description:
      "Trinos helps manufacturers connect plant operations, production data and business systems for better visibility and faster decisions. Our AI first systems support quality checks, workflow automation and operational intelligence across the shop floor and office teams.",
    image: "/industry/ai-managing-energy-resources-remote-areas.jpg",
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
    cta: { label: "Connect Manufacturing Operations", href: "/services" },
  },
  {
    title: "Legal & Professional Services",
    description:
      "Trinos helps legal firms, consulting teams and professional service companies reduce paperwork and improve service speed. Our AI first systems support document review, client workflows and internal knowledge access so experts can focus more on strategy and client outcomes.",
    image:
      "/industry/smart-law-legal-advice-icons-savvy-lawyer-working-tools-lawyers-office.jpg",
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
    cta: { label: "Automate Document Workflows", href: "/services" },
  },
  {
    title: "Real Estate & Property Management",
    description:
      "Trinos helps real estate and property management teams manage tenants, maintenance, finances and investor updates with better speed and visibility. Our AI first systems simplify service requests, property workflows and operational reporting across residential, commercial and portfolio teams.",
    image:
      "/industry/real-estate-investment-concept-person-showing-house-icon-growth-graph-virtual-screen.jpg",
    helpsWith: [
      "Tenant support automation",
      "Maintenance request tracking",
      "Lease and document management",
      "Property performance dashboards",
      "Rent and finance workflow support",
      "Investor reporting support",
      "Portfolio data visibility",
    ],
    businessImpact: [
      "Faster tenant response",
      "Better maintenance coordination",
      "Improved document access",
      "Clearer financial visibility",
      "Reduced manual follow ups",
      "Smarter property decisions",
    ],
    cta: { label: "Simplify Property Management", href: "/services" },
  },
  {
    title: "Media & Entertainment",
    description:
      "Trinos helps media and entertainment teams manage content, workflows and audience engagement with better speed and clarity. Our AI first systems support content planning, production workflows, asset management and business insights across creative and operational teams.",
    image:
      "/industry/team-working-together-cover-live-events-update-news-stories-real-time.jpg",
    helpsWith: [
      "Content workflow automation",
      "Media asset search and organization",
      "Audience engagement insights",
      "Campaign and publishing support",
      "Production task tracking",
      "Creative review workflows",
      "Performance dashboards",
    ],
    businessImpact: [
      "Faster content operations",
      "Better asset visibility",
      "Improved team coordination",
      "Smarter audience decisions",
      "Reduced manual follow ups",
      "More efficient production workflows",
    ],
    cta: { label: "Optimize Content Operations", href: "/services" },
  },
  {
    title: "Logistics & Supply Chain",
    description: "Every mile and every minute counts.",
    image:
      "/industry/smart-warehouse-management-system-with-innovative-internet-things-technology (1).jpg",
  },
  {
    title: "Education & EdTech",
    description:
      "Trinos helps schools, universities and EdTech companies improve learning support, student engagement and administrative efficiency. Our AI first systems support personalized learning, student services, content workflows and data driven decisions across education teams.",
    image: "/industry/computer-screen-with-globe-screen-globe-screen.jpg",
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
    cta: { label: "Personalize Learning Experiences", href: "/services" },
  },
  {
    title: "Energy & Utilities",
    description:
      "Trinos helps energy and utility companies improve asset visibility, field operations and service reliability. Our AI first systems support maintenance workflows, outage response, compliance tasks and operational dashboards across asset heavy environments.",
    image: "/industry/man-looking-out-window-with-words-welcome-bottom.jpg",
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
    cta: { label: "Improve Asset Performance", href: "/services" },
  },
  {
    title: "Construction & Engineering",
    description:
      "Trinos helps construction and engineering teams improve project visibility, document control and site coordination. Our AI first systems support planning, reporting and workflow automation from bidding to project completion.",
    image:
      "/industry/team-working-urban-infrastructure-upgrades-using-digital-tools-datadriven-insights.jpg",
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
    cta: { label: "Track Projects Better", href: "/services" },
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Trinos helps hotels, resorts and travel companies improve guest service, booking workflows and daily operations. Our AI first systems support faster responses, smoother coordination and more personalized experiences across guest facing and internal teams.",
    image:
      "/industry/business-people-tablet-workplace-discussion-presentation-brainstorming-boardroom-group-teamwork-technology-career-workshop-as-colleagues-meeting-working-together.jpg",
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
    cta: { label: "Enhance Guest Operations", href: "/services" },
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
      <div className="container-px max-w-[1400px] mx-auto">
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
                        className={`mt-4 ${t.body} text-muted-foreground max-w-5xl animate-slide-up-soft`}
                        style={{ animationDelay: "0.3s" }}
                      >
                        {activeIndustry.description}
                      </p>

                      {(activeIndustry.helpsWith || activeIndustry.businessImpact) && (
                        <div
                          className="mt-8 grid gap-8 md:grid-cols-2 animate-slide-up-soft"
                          style={{ animationDelay: "0.4s" }}
                        >
                          {activeIndustry.helpsWith && (
                            <div>
                              <h4
                                className={`${t.cardHeadline} text-foreground mb-4`}
                              >
                                What Trinos Helps With
                              </h4>
                              <ul className="space-y-2.5">
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
                              <h4
                                className={`${t.cardHeadline} text-foreground mb-4`}
                              >
                                Business Impact
                              </h4>
                              <ul className="space-y-2.5">
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
                        <div
                          className="mt-8 animate-slide-up-soft"
                          style={{ animationDelay: "0.5s" }}
                        >
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
                      <h3 className={`${t.cardHeadlineSemibold} text-foreground mb-3 min-h-[2lh]`}>
                        {industry.title}
                      </h3>
                      <p
                        className={`${t.body} text-muted-foreground leading-relaxed line-clamp-2`}
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
