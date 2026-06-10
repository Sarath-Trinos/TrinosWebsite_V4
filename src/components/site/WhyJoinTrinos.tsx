"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

type Slide = {
  title: string;
  description: string;
  image: string;
  bg: string;
};

const slides: Slide[] = [
  {
    title: "Career growth",
    description:
      "Continuous learning opportunities and clear career progression paths.",
    image: "/career/growth-strategy-team-collaboration-grow-business-success-teamwork-partnership-develop.jpg",
    bg: "bg-[#EFE6FF]",
  },
  {
    title: "Work-life balance",
    description:
      "Flexible schedules and remote work options to support your lifestyle.",
    image: "/career/smiling-attractive-woman-holding-coffee-cup-while-working-laptop.jpg",
    bg: "bg-[#FFE9CC]",
  },
  {
    title: "Innovation",
    description:
      "Work on cutting-edge AI projects that shape the future of technology.",
    image: "/career/ai-chatbot.jpg",
    bg: "bg-[#D6F4E4]",
  },
  {
    title: "Global impact",
    description: "Build solutions that transform enterprises worldwide.",
    image: "/career/people-celebrating-world-population-day.jpg",
    bg: "bg-[#DCEBFF]",
  },
];

const SLIDE_MS = 700;
const AUTOPLAY_MS = 4200;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function ActiveCard({ slide }: { slide: Slide }) {
  return (
    <div
      className={`flex h-full w-full items-stretch gap-6 rounded-3xl p-4 md:gap-8 md:p-5 text-foreground ${slide.bg}`}
    >
      <div className="relative aspect-[4/3] w-1/2 shrink-0 overflow-hidden rounded-2xl md:w-[44%]">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="(max-width: 768px) 50vw, 360px"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col justify-start py-2 pr-2 md:py-3 md:pr-4">
        <h3 className={t.featureHeadline}>{slide.title}</h3>
        <p className={`mt-4 max-w-md ${t.bodySm} md:mt-6 text-foreground/70`}>
          {slide.description}
        </p>
      </div>
    </div>
  );
}

function PreviewCard({ slide }: { slide: Slide }) {
  return (
    <div className="flex h-full w-full items-end gap-5 p-2 lg:gap-6 lg:p-4">
      <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl bg-white lg:w-56">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="(max-width: 1024px) 160px, 224px"
          className="object-cover"
        />
      </div>
      <div className="flex aspect-square flex-1 flex-col justify-center gap-3 pt-8 lg:gap-4 lg:pt-12">
        <h4 className={`${t.cardHeadline} text-foreground`}>{slide.title}</h4>
        <p className={`${t.bodySm} text-muted-foreground`}>
          {slide.description}
        </p>
      </div>
    </div>
  );
}

const WhyJoinTrinos = () => {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  indexRef.current = index;
  const isAnimatingRef = useRef(false);
  const autoplayIdRef = useRef<number | null>(null);

  const go = useCallback(
    (nextIdx: number) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIndex(nextIdx);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, SLIDE_MS + 50);
    },
    [],
  );

  const advance = useCallback(() => {
    go((indexRef.current + 1) % total);
  }, [go, total]);

  const retreat = useCallback(() => {
    go((indexRef.current - 1 + total) % total);
  }, [go, total]);

  const startAutoplay = useCallback(() => {
    if (autoplayIdRef.current !== null) {
      window.clearInterval(autoplayIdRef.current);
    }
    autoplayIdRef.current = window.setInterval(() => {
      advance();
    }, AUTOPLAY_MS);
  }, [advance]);

  const handleManual = useCallback(
    (fn: () => void) => {
      fn();
      startAutoplay();
    },
    [startAutoplay],
  );

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayIdRef.current !== null) {
        window.clearInterval(autoplayIdRef.current);
        autoplayIdRef.current = null;
      }
    };
  }, [startAutoplay]);

  const activeSlide = slides[index];
  const previewSlide = slides[(index + 1) % total];

  return (
    <section id="why-join" className="py-24 bg-surface-soft">
      <div className="container-px max-w-[1200px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              Why join <span className="text-brand-gradient">Trinos</span>
            </>
          }
          titleClassName={`${t.sectionHeadlineLg} text-foreground`}
          subtitle="Build Work That Matters"
          description="At Trinos, you will work with a team of innovators building AI first technology for enterprises. Grow your skills, solve meaningful problems and build a career with real impact."
        />

        <SliderStage
          index={index}
          activeSlide={activeSlide}
          previewSlide={previewSlide}
        />

        <div className="mt-10 flex items-center gap-6">
          <div className="relative h-px flex-1 bg-border">
            <div
              className="absolute inset-y-0 left-0 bg-foreground transition-all [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${((index + 1) / total) * 100}%`,
                transitionDuration: `${SLIDE_MS}ms`,
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => handleManual(retreat)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => handleManual(advance)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// SliderStage cross-fades the active card and slides the preview card.
// Strict order: previewSlide at index N becomes activeSlide at index N+1.
function SliderStage({
  index,
  activeSlide,
  previewSlide,
}: {
  index: number;
  activeSlide: Slide;
  previewSlide: Slide;
}) {
  // Track the previous active slide for the outgoing animation.
  const [prevActive, setPrevActive] = useState<Slide | null>(null);
  const [prevPreview, setPrevPreview] = useState<Slide | null>(null);
  const [animating, setAnimating] = useState(false);
  const lastIndexRef = useRef(index);

  useEffect(() => {
    if (index === lastIndexRef.current) return;
    // Capture the outgoing state.
    setPrevActive(slides[lastIndexRef.current]);
    setPrevPreview(slides[(lastIndexRef.current + 1) % slides.length]);
    setAnimating(true);
    lastIndexRef.current = index;

    const id = window.setTimeout(() => {
      setAnimating(false);
      setPrevActive(null);
      setPrevPreview(null);
    }, SLIDE_MS + 40);
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div className="grid h-[320px] grid-cols-1 items-stretch gap-6 sm:h-[360px] lg:h-[340px] lg:grid-cols-12 lg:gap-10">
          {/* ACTIVE SLOT */}
          <div className="relative overflow-hidden lg:col-span-7">
            {/* Outgoing active: slides off left while fading out */}
            {animating && prevActive && (
              <FxLayer
                key={`a-out-${lastIndexRef.current}`}
                from={{ transform: "translateX(0)", opacity: 1 }}
                to={{ transform: "translateX(-110%)", opacity: 1 }}
                zIndex={3}
              >
                <ActiveCard slide={prevActive} />
              </FxLayer>
            )}
            {/* Incoming active: enters from the right (where the preview was)
                wearing the preview design, then settles in place. We layer
                an ActiveCard underneath that fades in, so the design morphs. */}
            {animating ? (
              <FxLayer
                key={`a-in-${index}-active`}
                from={{ transform: "translateX(0)", opacity: 1 }}
                to={{ transform: "translateX(0)", opacity: 1 }}
                zIndex={1}
              >
                <ActiveCard slide={activeSlide} />
              </FxLayer>
            ) : (
              <div className="absolute inset-0" style={{ zIndex: 1 }}>
                <ActiveCard slide={activeSlide} />
              </div>
            )}
          </div>

          {/* PREVIEW SLOT */}
          <div className="relative hidden overflow-hidden lg:col-span-5 lg:block">
            {animating && prevPreview && (
              <FxLayer
                key={`p-out-${lastIndexRef.current}`}
                from={{ transform: "translateX(0)", opacity: 1 }}
                to={{ transform: "translateX(-130%)", opacity: 0 }}
                zIndex={2}
              >
                <PreviewCard slide={prevPreview} />
              </FxLayer>
            )}
            {animating ? (
              <FxLayer
                key={`p-in-${index}`}
                from={{ transform: "translateX(110%)", opacity: 1 }}
                to={{ transform: "translateX(0)", opacity: 1 }}
                zIndex={1}
              >
                <PreviewCard slide={previewSlide} />
              </FxLayer>
            ) : (
              <div className="absolute inset-0" style={{ zIndex: 1 }}>
                <PreviewCard slide={previewSlide} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// A layer that mounts at `from` state and transitions to `to` state on the
// next frame. Re-mounted via key for each new transition.
function FxLayer({
  from,
  to,
  zIndex,
  children,
}: {
  from: { transform: string; opacity: number };
  to: { transform: string; opacity: number };
  zIndex: number;
  children: React.ReactNode;
}) {
  const [style, setStyle] = useState(from);

  useEffect(() => {
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => {
        setStyle(to);
      });
      // Cleanup pattern: cancel inner frame if outer effect re-runs.
      return () => cancelAnimationFrame(r2);
    });
    return () => cancelAnimationFrame(r1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: style.transform,
        opacity: style.opacity,
        transition: `transform ${SLIDE_MS}ms ${EASE}, opacity ${SLIDE_MS}ms ${EASE}`,
        zIndex,
      }}
    >
      {children}
    </div>
  );
}

export default WhyJoinTrinos;
