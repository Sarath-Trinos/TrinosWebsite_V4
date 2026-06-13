"use client";

import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const items = [
  {
    video: "/videos/LLM fine tuning.mp4",
    title: "LLM Fine-Tuning",
    desc: "Enterprise language models tailored to your documents, policies, terminology and workflows-delivering more accurate responses, stronger governance and higher user trust.",
    cta: "Explore Fine-Tuning",
    href: "/services/llm-fine-tuning",
  },
  {
    video: "/videos/Generative AI.mp4",
    title: "Generative AI and Analytics",
    desc: "Conversational dashboards, intelligent reports and executive briefings generated from your enterprise data and grounded in approved sources reducing hallucination risk and improving decision confidence.",
    cta: "Explore Analytics",
    href: "/services/generative-ai-analytics",
  },
  {
    video: "/videos/Computer Vision.mp4",
    title: "Computer Vision",
    desc: "Defect detection on the line. OCR on the floor. Object tracking at the edge. Vision systems for the places where a missed call costs real money.",
    cta: "Explore Computer Vision",
    href: "/services/computer-vision",
  },
];

function CardVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    const tryPlay = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

const ErpCrmModernization = () => (
  <section className="py-10">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="mb-6 flex flex-col gap-4">
        <h2
          className={cn(
            t.sectionHeadlineLg,
            "font-manrope font-normal text-foreground",
          )}
        >
          AI Intelligence{" "}
          <span className="text-brand-gradient-reverse">Systems</span>
        </h2>
        <p
          className={cn(
            t.bodyLg,
            "text-muted-foreground max-w-none text-wrap",
          )}
        >
          Language models, generative analytics and computer vision systems tuned to your terminology, workflows and domain. Trinos builds AI that works where generic tools usually fail inside real enterprise complexity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((it) => (
          <article key={it.title} className="flex flex-col">
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-surface-soft mb-6">
              <CardVideo src={it.video} />
            </div>
            <h3 className={`${t.cardHeadlineMd} font-manrope mb-3`}>
              {it.title}
            </h3>
            <p className="text-muted-foreground mb-6 flex-1">{it.desc}</p>
            <a
              href={it.href}
              className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors"
            >
              {it.cta} <ChevronRight className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-4 lg:mt-6 flex justify-center">
        <p className={`text-center ${t.bodyLg} text-muted-foreground max-w-3xl lg:max-w-none lg:whitespace-nowrap`}>
          Helping enterprises move from isolated AI experiments to intelligent systems that operate inside real workflows.
        </p>
      </div>
    </div>
  </section>
);

export default ErpCrmModernization;
