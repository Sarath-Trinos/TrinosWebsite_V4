import { ArrowRight, ShieldCheck } from "lucide-react";
import { type as t } from "@/lib/typography";

const EnterpriseProof = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-dark text-on-surface-dark relative overflow-hidden">
    <div className="absolute -top-40 left-1/3 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-primary/20 blur-3xl" />
    <div className="container-px max-w-[1400px] mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
        <div>
          <span className="chip bg-white/10 text-white border border-white/10">Built for the enterprise</span>
          <h2 className={`mt-5 ${t.sectionHeadline}`}>
            Where most transformations stall,{" "}
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">we deliver.</span>
          </h2>
          <p className={`mt-5 ${t.bodyResponsive} text-white/70`}>
            Enterprises don&apos;t struggle because the technology fails — they struggle when AI, Cloud,
            and ERP modernization collide with legacy systems, fragmented data, and strict compliance
            mandates. Trinos brings AI-first engineering, security by design, and deep enterprise
            expertise together to ship transformation that actually reaches production.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 mt-8 bg-gradient-cta text-primary-foreground font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-glow text-sm sm:text-base">
            Talk to our experts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {[
            { stat: "AI-First", label: "engineering across every solution we build and deliver" },
            { stat: "10x", label: "faster time to production with secure, scalable architectures" },
            { stat: "End-to-End", label: "expertise across AI, Cloud, ERP, CRM, and Cyber Security" },
          ].map((s) => (
            <div key={s.stat} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className={`${t.stat} bg-gradient-to-br from-primary-glow to-white bg-clip-text text-transparent sm:whitespace-nowrap`}>
                {s.stat}
              </div>
              <p className={`${t.bodySm} text-white/80`}>{s.label}</p>
            </div>
          ))}
          <div className="flex items-center gap-3 mt-2 text-white/70 text-xs sm:text-sm">
            <ShieldCheck className="w-5 h-5 text-primary-glow flex-shrink-0" />
            Native Trust Layer for security, compliance & data integrity.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnterpriseProof;
