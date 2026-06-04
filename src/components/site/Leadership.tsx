"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { type as t } from "@/lib/typography";

const leaders = [
  {
    name: "Rajeshkumar Ganesan",
    role: "Co-Founder & CEO",
    image: "/team/Rajesh.webp",
    bio: "18+ years across IT, ITES and semiconductor industries. Drives global business development, strategy and partnerships across the USA, Europe, India, the Middle East and Southeast Asia. He turns enterprise relationships into long-term partnerships, aligning what Trinos builds with where the market is heading.",
  },
  {
    name: "Mukesh Vaidyanathan",
    role: "Co-Founder & Chief Strategy Officer",
    image: "/team/Mukesh.webp",
    bio: "25+ years in enterprise systems and ERP. Brings cross-industry implementation experience that helps AI systems connect with the legacy enterprise tools organizations already depend on. He bridges the gap between ambitious AI and the operational reality of the businesses that adopt it.",
  },
  {
    name: "Rajkumar Gangadharan",
    role: "Co-Founder & CTO",
    image: "/team/Raj.webp",
    bio: "17+ years in software development, system architecture and AI. Chief architect behind multi-agent orchestration, workflow automation and the AI infrastructure that supports Trinos platforms. He sets the technical direction and is hands-on in the work — designing the systems the rest of the team builds on.",
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
    <section id="leadership" className="py-24 bg-white">
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

        {/* Image-only cards — click to reveal the bio in a modal */}
        <div className="mt-14 grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {leaders.map((leader, i) => (
            <button
              key={leader.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${leader.name}, ${leader.role}`}
              className="group relative mx-auto block w-full max-w-[310px] overflow-hidden rounded-2xl bg-surface-soft text-left shadow-soft transition-all duration-300 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  fill
                  className="object-cover grayscale-[0.15] transition-transform duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  sizes="(min-width: 640px) 310px, 100vw"
                />
              </div>

              {/* Name caption overlay */}
              <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-4 py-2.5 text-center shadow-soft backdrop-blur-sm">
                <span className="block font-display text-lg font-semibold leading-tight text-foreground">
                  {leader.name}
                </span>
                <span className={`mt-1 block ${t.bodySm} font-medium text-muted-foreground`}>
                  {leader.role}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel — slides up from the bottom, blurs the page behind it */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name}, ${selected.role}`}
        >
          {/* Backdrop with blur */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute inset-0 bg-black/40 backdrop-blur-md animate-fade-up"
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
                  <p className={`mt-6 ${t.bodyLg} text-muted-foreground`}>{selected.bio}</p>
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
