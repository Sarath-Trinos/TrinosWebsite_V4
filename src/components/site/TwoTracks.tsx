import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

type Track = {
  title: string;
  body: string;
  cta: string;
  href: string;
};

const tracks: Track[] = [
  {
    title: "We Build AI Products",
    body:
      "We design, build, and operate AI products such as Moltter Studio, TraceFlow, and Travel One. These platforms validate our architecture in real market environments before we apply it to enterprise client deployments.",
    cta: "Explore Our Products",
    href: "/products",
  },
  {
    title: "We Power AI Enterprises",
    body:
      "From Agentic AI, fine-tuned models, voice, vision, ERP, web, and mobile systems, we deploy intelligence where your business actually operates — connected to your data, permissions, workflows, and approval chains.",
    cta: "Explore Our Services",
    href: "/services",
  },
];

const TwoTracks = () => (
  <section className="py-24 bg-surface-tint">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        headlineWeight="normal"
        contentClassName="max-w-none"
        titleClassName="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight font-normal text-foreground whitespace-nowrap"
        title={
          <>
            Two Tracks. One AI-First{" "}
            <span className="text-brand-gradient">Engine</span>.
          </>
        }
      />

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {tracks.map((track) => (
          <article
            key={track.title}
            className="tile bg-card border border-sky-200 p-8 md:p-10 lg:p-12 flex flex-col items-center text-center h-full hover:shadow-card transition-shadow"
          >
            <h3
              className="mb-5"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "28px",
                lineHeight: "32px",
                fontWeight: 600,
                color: "#252525",
              }}
            >
              {track.title}
            </h3>
            <p className={`${t.bodyLg} text-muted-foreground flex-1`}>
              {track.body}
            </p>
            <a
              href={track.href}
              className="group inline-flex items-center gap-1 mt-8 font-semibold text-primary hover:text-primary-deep transition-colors"
            >
              {track.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TwoTracks;
