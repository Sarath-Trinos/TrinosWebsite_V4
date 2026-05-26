import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

type Track = {
  number: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const tracks: Track[] = [
  {
    number: "01",
    title: "We Build AI Products",
    body:
      "Moltter Studio. TraceFlow. VoteSense. Travel One. Four production AI platforms, built and operated by Trinos. The architecture proves itself in market before it ever reaches a client deployment.",
    cta: "Explore Our Products",
    href: "/products",
  },
  {
    number: "02",
    title: "We Power AI Enterprises",
    body:
      "Agentic AI. Fine-tuned models. Voice. Vision. ERP. Web. Mobile. We deploy each of these where your business actually runs. Wired into your data, your permissions, your approval chains.",
    cta: "Explore Our Services",
    href: "/services",
  },
];

const TwoTracks = () => (
  <section className="py-24 bg-surface-tint">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Our operating model"
        headlineWeight="normal"
        headingLayout="centered"
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
            key={track.number}
            className="tile bg-card border border-border p-8 md:p-10 lg:p-12 flex flex-col h-full hover:shadow-card transition-shadow"
          >
            <div className={`${t.badge} text-primary mb-6`}>{track.number}</div>
            <h3 className={`${t.featureHeadline} font-semibold mb-5`}>
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
