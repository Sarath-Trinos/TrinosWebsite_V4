"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, Workflow, Mic, Share2 } from "lucide-react";
import Image from "next/image";
import { type as t } from "@/lib/typography";
import type { StaticImageData } from "next/image";
import SectionHeader from "./SectionHeader";
import grace from "@/assets/agent-grace.jpg";
import daphne from "@/assets/agent-daphne.jpg";
import johnny from "@/assets/agent-johnny.jpg";
import manish from "@/assets/agent-manish.jpg";

type Tile = {
  icon: typeof Bot;
  title: string;
  headline: string;
  description: string;
  image: StaticImageData;
  video?: string;
  href: string;
};

const tiles: Tile[] = [
  {
    icon: Bot,
    title: "Agentic AI",
    headline: "Agentic AI",
    description:
      "Agents that reason, call tools and execute multi-step work. Bounded by your permissions, your approvals, your audit trail. The autonomy is real. The guardrails are too.",
    image: grace,
    video: "/videos/don_t_need_the_right_side_card.mp4",
    href: "/services/agentic-ai",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    headline: "AI Workflow Automation",
    description:
      "Intelligent automation that streamlines business processes end to end — removing manual handoffs, eliminating bottlenecks and keeping humans in control where it matters.",
    image: daphne,
    video: "/videos/I_need_the_reference_video_in.mp4",
    href: "/services/ai-workflow-automation",
  },
  {
    icon: Mic,
    title: "AI Voice Assistants",
    headline: "AI Voice Assistants",
    description:
      "Real-time, domain-aware voice agents for support, sales and internal operations — natural conversations with speech-to-text, TTS and grounded responses.",
    image: johnny,
    video: "/videos/Can_you_animate_this_into_a_ (1).mp4",
    href: "/services/ai-voice-assistants",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    headline: "Social Media Automation",
    description:
      "AI-driven content, scheduling and engagement workflows that keep your brand active across channels — with editorial guardrails and approval flows built in.",
    image: manish,
    video: "/videos/mp_ (1).mp4",
    href: "/services/social-media-automation",
  },
];

const AgentPlatform = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = imageWrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleActivate = useCallback((i: number) => {
    if (isScrollingRef.current) return;
    setActiveIndex((prev) => (prev === i ? prev : i));
  }, []);

  return (
    <section id="agents" className="py-24">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              Agentic{" "}
              <span className="text-brand-gradient">Automation</span>
            </>
          }
          description="Production-ready AI agents and workflow systems designed to operate inside real enterprise environments beyond chatbots, pilots and disconnected automation tools."
        />
        <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-4 xl:gap-5">
          {/* Left: media + overlay — slow horizontal slide into view */}
          <div
            ref={imageWrapperRef}
            className="md:col-span-7 lg:col-span-8 flex md:h-full items-stretch justify-center md:justify-start"
          >
            <div className="relative w-full md:h-full md:aspect-auto overflow-hidden rounded-3xl aspect-[16/9]">
              {tiles.map((tile, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={tile.title}
                    aria-hidden={!isActive}
                    className="absolute inset-0 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transition-transform [transition-duration:2800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                        imageVisible ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                      {isActive && tile.video ? (
                        <video
                          src={tile.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Image
                          src={tile.image}
                          alt={tile.headline}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1024px) 26vw, 90vw"
                          className="object-cover"
                          priority={i === 0}
                          fetchPriority={i === 0 ? "high" : "auto"}
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-5 md:p-6">
                        <h3 className={`${t.cardHeadline} text-white`}>
                          {tile.headline}
                        </h3>
                        <p className={`mt-2 ${t.bodyCaption} text-white/85`}>
                          {tile.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Platform overview — vertical stack of service tabs */}
          <div className="md:col-span-5 lg:col-span-4 tile py-6 md:py-8 px-5 md:px-5 lg:px-8 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#1a3556_0%,_#0f1e35_45%,_#0a1628_100%)] flex items-center justify-center">
            <div className="w-full grid grid-cols-1 gap-3 md:gap-4">
              {tiles.map(({ icon: Icon, title, href }, i) => {
                const isActive = i === activeIndex;
                return (
                  <a
                    key={title}
                    href={href}
                    onMouseEnter={() => handleActivate(i)}
                    onFocus={() => handleActivate(i)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group rounded-2xl border border-white/10 bg-white/5 p-3 md:p-3.5 flex items-center gap-3 min-h-[82px] md:min-h-[86px] cursor-pointer shadow-none outline-none transition-[background-color,box-shadow,border-color] duration-200 hover:border-transparent hover:bg-card hover:shadow-glow focus-visible:border-transparent focus-visible:bg-card focus-visible:shadow-glow ${
                      isActive ? "ring-2 ring-primary/40" : ""
                    }`}
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-primary grid place-items-center">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 font-semibold text-[13px] md:text-sm text-white/95 leading-snug group-hover:text-foreground group-focus-visible:text-foreground">
                      {title}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentPlatform;
