import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const TrinosEdgeCTA = () => (
  <section id="trinos-edge-cta" className="py-16 md:py-20">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="tile bg-gradient-cta px-8 py-10 md:px-12 md:py-12 lg:px-20 lg:py-14 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="relative">
          <h2 className={`${t.sectionHeadline} text-white`}>
            Build an AI Advantage for Your Enterprise.
          </h2>
          <p className={`mt-5 ${t.subheadline} text-white/85 max-w-3xl mx-auto`}>
            Speak with the Trinos leadership team to understand how the Trinos Edge can support
            your operations and long term AI roadmap.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
            >
              Book a Discovery Workshop <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
            <a href="/products" className="hover:text-white transition-colors">
              Explore Our Products
            </a>
            <span className="text-white/50" aria-hidden>
              |
            </span>
            <a href="/services" className="hover:text-white transition-colors">
              Services
            </a>
            <span className="text-white/50" aria-hidden>
              |
            </span>
            <a href="/about" className="hover:text-white transition-colors">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrinosEdgeCTA;
