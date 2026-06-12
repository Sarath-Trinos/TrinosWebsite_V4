import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const ServicesCTA = () => (
  <section id="services-cta" className="py-10">
    <div className="container-px max-w-[1200px] mx-auto mb-12">
      <a
        href="/trinos-edge"
        className="group flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between tile bg-surface-soft px-6 py-5 md:px-8 transition-shadow hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
      >
        <p className={`${t.body} text-muted-foreground`}>
          Our services are powered by the{" "}
          <span className="font-semibold text-foreground">Trinos Edge</span> approach: small
          language models, self-improving AI and rapid delivery.
        </p>
        <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-primary">
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </div>

    <div className="container-px max-w-fit mx-auto">
      <div className="tile bg-gradient-cta w-full max-w-full lg:min-w-[82rem] px-8 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="relative">
          <h2 className={`${t.sectionHeadline} text-white lg:whitespace-nowrap`}>
            Ready to Build Your AI-First System?
          </h2>
          <p className={`mt-5 ${t.subheadline} text-white/85 max-w-6xl mx-auto text-balance`}>
            Start with a Discovery Workshop. Trinos will review your workflows, data systems and
            operational bottlenecks, then recommend the right approach for your environment, with
            no obligation to build.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
            >
              Book a Discovery Workshop <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesCTA;
