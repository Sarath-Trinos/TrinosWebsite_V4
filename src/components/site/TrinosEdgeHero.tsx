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
      <div className="relative pt-28 lg:pt-40 pb-24">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/team/mp_.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 from-10% via-black/55 via-35% to-transparent to-55%" />

        <div className="container-px max-w-[1200px] mx-auto relative z-10 flex items-center min-h-[20rem] lg:min-h-[24rem]">
          <div className="max-w-4xl animate-fade-up">
            <span className="chip mb-5">Our AI-First Advantage</span>
            <h1 className={`${t.heroHeadline} text-white`}>
              AI Systems That Get Smarter{" "}
              <span className="text-white">
                With Every Workflow
              </span>
              .
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-none`}>
              The Trinos Edge helps AI systems learn from approved feedback,
              real workflows and controlled updates so every deployment becomes
              more useful over time.
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
