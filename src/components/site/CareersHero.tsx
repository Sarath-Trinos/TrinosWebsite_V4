"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { type as t } from "@/lib/typography";

const CareersHero = () => {
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
      <div className="relative pt-16 lg:pt-24 pb-24">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
          src="/videos/0_Interview_Team_3840x2160.mp4"
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
          <div className="max-w-3xl animate-fade-up">
            <span className="chip mb-5">Careers</span>
            <h1 className={`${t.heroHeadline} text-white`}>
              Join a team of{" "}
              <span className="text-white">
                passionate innovators
              </span>
              .
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
              Work on meaningful projects, grow your tech skills and make a lasting career
              impact at Trinos.
            </p>

            <a
              href="#open-positions"
              className="group mt-9 inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
            >
              View open roles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
