import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";

type DotTone = "purple" | "blue" | "orange";

const dotClass: Record<DotTone, string> = {
  purple: "bg-violet-500",
  blue: "bg-sky-500",
  orange: "bg-orange-500",
};

type PillarItem = { label: string; href: string };

type Pillar = {
  label: string;
  dot: DotTone;
  title: string;
  items: PillarItem[];
  className: string;
};

const pillars: Pillar[] = [
  {
    label: "PILLAR 01",
    dot: "purple",
    title: "Agentic Automation",
    items: [
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "AI Voice Assistants", href: "/services/ai-voice-assistants" },
      { label: "Social Media Automation", href: "/services/social-media-automation" },
    ],
    className: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    label: "PILLAR 02",
    dot: "blue",
    title: "AI Intelligence Systems",
    items: [
      { label: "LLM Fine Tuning", href: "/services/llm-fine-tuning" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Computer Vision", href: "/services/computer-vision" },
    ],
    className: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    label: "PILLAR 03",
    dot: "orange",
    title: "Enterprise Platforms",
    items: [
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
    className: "col-span-12 md:col-span-12 lg:col-span-4",
  },
];

const ServicesCapabilities = () => (
  <section id="capabilities" className="bg-[#F9F9F7] py-24">
    <div className="container-px mx-auto max-w-[1400px]">
      <div className="mb-14 max-w-6xl md:mb-16">
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">Service</span>{" "}
          <span className="text-brand-gradient-reverse">pillars</span>
        </h2>
        <p className={`mt-3 ${t.subheadlineSemibold} text-black`}>
          Three pillars covering the full AI-first enterprise stack.
        </p>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          From autonomous agents to intelligence systems to the enterprise platforms that run
          your business — built to operate together inside real workflows.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className={cn(
              "group relative overflow-hidden rounded-[28px] border border-white/10 p-8 shadow-card lg:p-10",
              "min-h-[280px] md:min-h-[320px]",
              pillar.className,
            )}
          >
            <div
              className="absolute inset-0 bg-surface-dark"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse 90% 75% at 100% 0%, rgba(255,255,255,0.09) 0%, transparent 58%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden
            />
            <div className="relative z-[1] flex h-full flex-col">
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className={cn("h-2 w-2 shrink-0 rounded-full", dotClass[pillar.dot])}
                  aria-hidden
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-glow">
                  {pillar.label}
                </span>
              </div>
              <h3 className={`${t.cardHeadline} text-on-surface-dark`}>
                {pillar.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {pillar.items.map((item) => (
                  <li
                    key={item.href}
                    className={`flex items-start gap-2.5 ${t.bodyCaption} text-white/80`}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow"
                      aria-hidden
                    />
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesCapabilities;
