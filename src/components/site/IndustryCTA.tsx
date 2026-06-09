import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const IndustryCTA = () => (
  <section id="industry-cta" className="py-16 md:py-20">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="tile bg-gradient-cta px-8 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="relative">
          <h2 className={`${t.sectionHeadline} text-white`}>
            Don't see your industry? Let's still talk.
          </h2>
          <p className={`mt-5 ${t.subheadline} text-white/85 max-w-4xl mx-auto`}>
            Our playbook is built for regulated, operations-heavy enterprises. If your
            business depends on data, workflows and trust, Trinos can help you put AI
            to work safely.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
            >
              Book a Discovery Workshop <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              Explore our services
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndustryCTA;
