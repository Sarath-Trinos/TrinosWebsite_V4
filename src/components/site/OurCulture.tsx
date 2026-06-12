import Image from "next/image";
import { Lightbulb, Users, BookOpen } from "lucide-react";
import { type as t } from "@/lib/typography";

type Pillar = {
  Icon: typeof Lightbulb;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    Icon: Lightbulb,
    title: "Innovation First",
    description:
      "We encourage bold ideas, creative thinking and practical solutions that challenge the usual way of working.",
  },
  {
    Icon: Users,
    title: "Collaboration",
    description:
      "We grow together by sharing knowledge, supporting each other and building as one team.",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Curiosity drives us. We help our team keep learning, improving and growing with every project.",
  },
];

const OurCulture = () => (
  <section
    id="culture"
    className="relative overflow-hidden bg-gradient-to-b from-white via-surface-soft to-white py-10"
  >
    {/* Ambient decorative background */}
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ transform: "translateZ(0)", willChange: "transform", contain: "paint" }}
    >
      {/* soft radial blue glows */}
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-primary-glow/10 blur-3xl" />

      {/* dotted abstract pattern, top-left */}
      <svg
        aria-hidden="true"
        className="absolute left-0 top-12 h-64 w-64 opacity-50"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <radialGradient id="cultureDotsLeft" cx="20%" cy="50%" r="60%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="cultureDotsLeftPattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="hsl(var(--primary))" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#cultureDotsLeftPattern)" />
        <rect width="200" height="200" fill="url(#cultureDotsLeft)" />
      </svg>

      {/* dotted abstract pattern, bottom-right */}
      <svg
        aria-hidden="true"
        className="absolute bottom-12 right-0 h-72 w-72 opacity-50"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <radialGradient id="cultureDotsRight" cx="80%" cy="50%" r="60%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="cultureDotsRightPattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="hsl(var(--primary))" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#cultureDotsRightPattern)" />
        <rect width="200" height="200" fill="url(#cultureDotsRight)" />
      </svg>
    </div>

    <div className="container-px mx-auto w-full max-w-[1200px]">
      <div className="grid items-stretch gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* LEFT - heading, copy, illustration */}
        <div className="relative flex flex-col">
          {/* Headline */}
          <h2 className={`${t.sectionHeadlineLg} text-foreground`}>
            Our <span className="text-brand-gradient">Culture</span>
          </h2>

          {/* Subheadline */}
          <p className={`mt-3 max-w-xl ${t.subheadlineSemibold} text-foreground`}>
            A Culture Built on Ownership
          </p>

          {/* Copy */}
          <p className={`mt-8 max-w-xl ${t.bodyResponsive} text-muted-foreground`}>
            At Trinos, we build a culture of innovation, collaboration and
            continuous learning. We encourage every team member to take
            ownership, think creatively and create meaningful impact.
          </p>
          <p className={`mt-5 max-w-xl ${t.bodyResponsive} text-muted-foreground`}>
            Join us in building the future of AI first enterprise technology.
          </p>

          {/* Landscape illustration */}
          <div className="relative mt-10 min-h-[14rem] flex-1 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_18px_50px_-22px_hsl(210_60%_25%/0.28)]">
            <Image
              src="/career/Our culture.png"
              alt="Trinos team culture"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        {/* RIGHT - pillar cards */}
        <div className="relative flex flex-col gap-6 sm:gap-7">
          {pillars.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-sky-200 bg-white p-6 shadow-[0_10px_40px_-18px_hsl(210_60%_25%/0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)] sm:p-7"
              style={{ animation: `fade-up 0.7s var(--ease-out) ${i * 120}ms both` }}
            >
              {/* Glow border on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 0%, hsl(var(--primary-glow)/0.08), transparent 60%)",
                }}
              />

<div className="relative flex items-start gap-5 sm:gap-6">
                <div className="flex shrink-0 flex-col items-center gap-3">
                  {/* Icon tile */}
                  <div className="relative h-16 w-16 sm:h-[72px] sm:w-[72px]">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-1 rounded-full bg-primary/15 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary-glow via-primary to-primary-deep shadow-[0_10px_28px_-8px_hsl(var(--primary)/0.55),inset_0_1px_0_0_rgba(255,255,255,0.35)] ring-1 ring-white/40">
                      <Icon
                        className="h-7 w-7 text-white sm:h-8 sm:w-8"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mt-1 hidden h-20 w-px shrink-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent sm:block" />

                {/* Text */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className={`${t.cardHeadline} text-foreground`}>
                    {title}
                  </h3>
                  <p className={`mt-3 ${t.bodyCaption} text-muted-foreground`}>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurCulture;
