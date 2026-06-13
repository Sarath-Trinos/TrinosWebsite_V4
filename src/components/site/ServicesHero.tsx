"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { type as t } from "@/lib/typography";

const ServicesHero = () => {
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
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
          src={encodeURI("/service/Service-Hub-hero.mp4")}
          poster={encodeURI("/service/Service-hub-hero.jpg")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 from-10% via-black/55 via-35% to-transparent to-55%" />

        <div className="container-px max-w-[1200px] mx-auto relative z-10 flex items-center min-h-[20rem] lg:min-h-[24rem]">
          <div className="max-w-full lg:max-w-[75%] animate-fade-up">
            <span className="chip mb-5">Enterprise AI &amp; Platform Engineering</span>
            <h1 className={`${t.heroHeadline} text-white`}>
              <span className="text-white">Enterprise AI Built for</span>{" "}
              <span className="text-white">
                Real Workflows
              </span>
              <span className="text-white">.</span>
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
              Trinos designs, builds and integrates AI first systems across automation, analytics,
              ERP, voice, vision, web and mobile, so enterprise teams move from AI ideas to systems
              they can actually run.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
              >
                Book a Discovery Workshop
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#our-services"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Explore the 10 Services ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
