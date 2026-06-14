"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { type as t } from "@/lib/typography";

const leaders = [
  {
    name: "Rajeshkumar Ganesan",
    role: "Co-Founder & CEO",
    image: "/team/rajesh-sir.png",
    position: "object-[center_30%]",
    bio: "Rajeshkumar Ganesan is a Goal-Driven, Business Leader with over 18 years of experience driving business growth and operational excellence across the IT, ITES and Semiconductor industries. He provides strategic leadership, guiding the organization's direction to ensure sustainable growth and long-term value in the global AI market.\n\nA Startup & Scale-up Specialist, he has a proven track record of building organizations from the ground up and leading key functions including Sales, Business Development, and Strategic Partnerships across the USA, Europe, India, the Middle East and Southeast Asia. He focuses on client success, with strengths in market analysis, account planning and relationship building.\n\nWith a strong people management foundation, he fosters people-centric cultures, strengthens leadership pipelines and enhances workforce productivity.",
  },
  {
    name: "Mukesh Vaidyanathan",
    role: "Co-Founder & Chief Strategy Officer",
    image: "/team/mukesh-sir.png",
    position: "object-top",
    bio: "Mukesh Vaidyanathan is the Co-Founder and Chief Strategy Officer at Trinos, bringing over 25 years of hands-on experience in enterprise systems, ERP and IT Services. He is the strategic force behind Trinos's vision - connecting business goals with technology execution to drive growth and ensure the company delivers on its promises.\n\nHaving spent his entire career at the intersection of ERP and enterprise IT, Mukesh has delivered transformative solutions for clients across Manufacturing, Healthcare, Automobile and Engineering industries in India, the USA, Europe, the Middle East and APAC. He leads strategic partnerships and alliances, building the relationships that open new markets and deepen client trust.\n\nMukesh brings a rare combination of deep domain knowledge and commercial acumen - making him the bridge between what technology can do and what businesses actually need.",
  },
  {
    name: "Rajkumar Gangadharan",
    role: "Co-Founder & CTO",
    image: "/team/raj-sir.png",
    position: "object-top",
    bio: "Rajkumar Gangadharan is the Co-Founder and Chief Technology Officer at Trinos, with over 17 years of experience in software development, system architecture and technology leadership. He is the technical mind behind Trinos - architecting the AI-powered platforms that define what the company builds and how it delivers.\n\nAn Expert Architect in the AI space, he designs and delivers intelligent, scalable systems across artificial intelligence, multi-agent orchestration and workflow automation. He is known for setting high engineering standards, building resilient platforms and leading teams that consistently deliver under complexity.\n\nWith cross-sector experience serving Healthcare, Finance, Legal and Manufacturing clients across the USA and Canada, Rajkumar brings both the technical depth and the practical mindset to turn ambitious ideas into production-ready, future-proof solutions.",
  },
];

const Leadership = () => {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : leaders[active];

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="leadership" className="py-10 bg-white">
      <div className="container-px max-w-[1200px] mx-auto">
        <div className="max-w-3xl">
          <span className="chip mb-5">Leadership</span>
          <h2 className={t.sectionHeadline}>
            <span className="text-black">The minds</span>{" "}
            <span className="text-brand-gradient-reverse">behind Trinos</span>
          </h2>
          <p className={`mt-4 ${t.body} text-muted-foreground`}>
            Operators with decades of enterprise, engineering and AI experience who have
            built and shipped the kind of systems they now help others deploy.
          </p>
        </div>

        {/* Image-only cards - click to reveal the bio in a modal */}
        <div className="mt-14 grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {leaders.map((leader, i) => (
            <button
              key={leader.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${leader.name}, ${leader.role}`}
              className="group relative mx-auto block w-[min(310px,100%)] overflow-hidden rounded-2xl bg-surface-soft text-left shadow-soft transition-all duration-300 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  fill
                  className={`scale-[1.18] object-cover ${leader.position} grayscale-[0.15] transition-transform duration-500 group-hover:scale-[1.21] group-hover:grayscale-0`}
                  sizes="(min-width: 640px) 310px, 100vw"
                />
              </div>

              {/* Name caption overlay */}
              <div className="pointer-events-none absolute inset-x-2 bottom-3 rounded-xl bg-white/95 px-2 py-2.5 text-center shadow-soft backdrop-blur-sm">
                <span className="block font-display text-lg font-semibold leading-tight text-foreground">
                  {leader.name}
                </span>
                <span className={`mt-1 block whitespace-nowrap ${t.bodySm} font-medium text-muted-foreground`}>
                  {leader.role}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel - slides up from the bottom, blurs the page behind it */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name}, ${selected.role}`}
        >
          {/* Backdrop - light dim, no blur (blur on a full-screen overlay janks the animation) */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute inset-0 bg-black/50 animate-backdrop-in"
          />

          {/* Bottom panel */}
          <div className="relative z-10 max-h-[90vh] w-full animate-slide-up-panel overflow-y-auto rounded-t-3xl bg-white shadow-card">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-surface-soft text-foreground shadow-soft transition-colors hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="container-px max-w-[1200px] mx-auto py-10 sm:py-14">
              <div className="grid items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14 lg:gap-20">
                <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl">
                  <Image
                    src={selected.image}
                    alt={`${selected.name}, ${selected.role}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                </div>

                <div>
                  <h3 className={`${t.sectionHeadlineMd} text-foreground`}>{selected.name}</h3>
                  <p className={`mt-2 ${t.role} text-brand-gradient-reverse`}>{selected.role}</p>
                  <p className={`mt-6 whitespace-pre-line ${t.bodyLg} text-muted-foreground`}>{selected.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leadership;
