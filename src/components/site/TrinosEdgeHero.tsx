"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { type as t } from "@/lib/typography";

const TrinosEdgeHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="h-[5rem]" aria-hidden="true" />
      <div className="relative pt-12 lg:pt-16 pb-16">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/mp_ (3).mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container-px max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl animate-fade-up">
            <span className="chip mb-5">Our AI-First Advantage</span>
            <h1 className={`${t.heroHeadline} text-white [text-wrap:normal]`}>
              The Longer You Use Trinos,
              <br />
              <span className="text-brand-gradient-reverse">
                the Smarter It Gets
              </span>
              .
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80`}>
              Most software stays the same after you deploy it. Trinos is different. Every
              deployment captures your workflows, business logic and operational patterns so
              your AI investment grows more valuable over time.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#what-we-deliver"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                What we deliver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrinosEdgeHero;
