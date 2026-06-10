"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 lg:pt-32 pb-20 min-h-screen flex items-center overflow-hidden isolate"
      style={{ contain: "layout paint" }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/home/May_05_0114_pm_31s_202605061102_hnu9v.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 from-10% via-black/55 via-35% to-transparent to-55%" />

      <div className="container-px max-w-[1200px] mx-auto relative z-10 w-full">
        <div className="max-w-4xl animate-fade-up text-white font-inter-tight">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
            AI-First Enterprise Technology
          </p>
          <h1 className={`${t.heroHeadlineHome} font-inter-tight`}>
            We Build AI Products.{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            We Power AI Enterprises.
          </h1>
          <p className={`mt-6 ${t.subheadline} font-inter-tight text-white/85 max-w-none`}>
          We deliver production-ready AI platforms and engineering systems that bring intelligence into real enterprise operations without disrupting what already works.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/services" className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all">
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors">
              Talk to an AI Architect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
