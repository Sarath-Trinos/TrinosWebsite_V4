"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { type as t } from "@/lib/typography";

const AboutHero = () => {
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
          src="/about%20us%20/b_f_cb_d_ca_ef_f_b_a_b_c_b_b_f_e_mp_.mp4"
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
          <div className="max-w-3xl animate-fade-up">
            <span className="chip mb-5">About Trinos</span>
            <h1 className={`${t.heroHeadline} text-white`}>
              Building intelligent{" "}
              <span className="text-brand-gradient-reverse">
                technology ecosystems
              </span>
              .
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
              From humble beginnings to industry-leading builds, our story is shaped by passion,
              craftsmanship, and a commitment to delivering lasting impact.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#who-we-are"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Our story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
