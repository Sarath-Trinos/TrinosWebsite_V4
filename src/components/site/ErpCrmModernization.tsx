"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";
import erpAnalytics from "@/assets/erp-analytics.jpg";
import erpUx from "@/assets/erp-ux.jpg";
import erpWorkflow from "@/assets/erp-workflow.jpg";

const items = [
  {
    image: erpAnalytics,
    video: "/videos/ab_cdef_abcdefmp_.mp4",
    title: "LLM Fine Tuning",
    desc: "Small and large language models, fine-tuned on your documents, your rules, your formats. Cheaper to run. Harder to fool. Aligned to how your business actually speaks.",
    cta: "Explore Fine Tuning",
    href: "/services/llm-fine-tuning",
  },
  {
    image: erpUx,
    video: "/videos/Can_you_animate_this_into_a_.mp4",
    title: "Generative AI & Analytics",
    desc: "Conversational dashboards, intelligent reports, executive briefings, generated from your data and grounded in your approved sources. The hallucination problem ends here.",
    cta: "Explore Analytics",
    href: "/services/generative-ai-analytics",
  },
  {
    image: erpWorkflow,
    video: "/videos/f_mp_.mp4",
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
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="mb-16 flex flex-col gap-4">
        <h2
          className={cn(
            t.sectionHeadlineLg,
            "font-normal text-foreground",
          )}
        >
          AI Intelligence{" "}
          <span className="text-brand-gradient-reverse">Systems</span>
        </h2>
        <p
          className={cn(
            t.bodyLg,
            "text-muted-foreground max-w-2xl",
          )}
        >
          Language models, generative analytics, and computer vision, tuned to your terminology, your workflows, your domain. Generic AI stops working at the edges. This is the edges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((it) => (
          <article key={it.title} className="flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-soft mb-6">
              {it.video ? (
                <CardVideo src={it.video} />
              ) : (
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
            </div>
            <h3 className={`${t.cardHeadlineMd} mb-3`}>
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

      <div className="mt-16 flex justify-center">
        <p className={`text-center ${t.bodyLg} text-muted-foreground max-w-2xl`}>
          Helping enterprises move from isolated AI experiments to intelligent systems that operate inside real workflows.
        </p>
      </div>
    </div>
  </section>
);

export default ErpCrmModernization;
