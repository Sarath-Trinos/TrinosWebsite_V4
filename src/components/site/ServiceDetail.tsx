import { ArrowRight, Check, Sparkles } from "lucide-react";
import { type as t } from "@/lib/typography";
import type { ServiceContent } from "@/lib/services-content";

type Props = { service: ServiceContent };

const ServiceDetail = ({ service }: Props) => {
  const Icon = service.icon;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-dark text-on-surface-dark">
        <div className="h-[5rem]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-px max-w-[1400px] mx-auto relative z-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-3xl animate-fade-up">
              <span className="chip mb-5 bg-white/10 text-white border-white/20">
                {service.eyebrow}
              </span>
              <h1 className={`${t.heroHeadline} text-white`}>
                <span className="text-white">{service.h1Lead}</span>{" "}
                <span className="text-brand-gradient-reverse">
                  {service.h1Highlight}
                </span>
                <span className="text-white">.</span>
              </h1>
              <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
                {service.subHeadline}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={service.primaryCTA.href}
                  className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
                >
                  {service.primaryCTA.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={service.secondaryCTA.href}
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
                >
                  {service.secondaryCTA.label}
                </a>
              </div>
            </div>
            <div className="hidden lg:flex w-44 h-44 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 items-center justify-center shadow-soft">
              <Icon className="w-20 h-20 text-white" strokeWidth={1.4} />
            </div>
          </div>

          <div className="mt-12 max-w-4xl flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5">
            <Sparkles className="w-5 h-5 text-primary-glow mt-1 shrink-0" />
            <p className={`${t.bodyResponsive} text-white/85`}>
              {service.credibility}
            </p>
          </div>
        </div>
      </section>

      {/* ANSWER BLOCK */}
      <section className="py-20 bg-background">
        <div className="container-px max-w-[1400px] mx-auto">
          <div className="tile bg-surface-soft p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-3xl" />
            <div className="relative max-w-4xl">
              <span className="chip mb-5">At a glance</span>
              <h2 className={`${t.sectionHeadlineMd} text-foreground`}>
                {service.answerHeading}
              </h2>
              <p className={`mt-5 ${t.bodyLg} text-muted-foreground`}>
                {service.answerBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="container-px max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">What we</span>{" "}
              <span className="text-brand-gradient-reverse">deliver</span>
            </h2>
            <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
              Capabilities Trinos brings to {service.eyebrow.toLowerCase()} engagements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.deliverables.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-cta text-primary-foreground grid place-items-center shadow-soft">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className={`${t.cardHeadlineSemibold} text-foreground`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2 ${t.body} text-muted-foreground`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES & RESULTS */}
      <section className="py-20 bg-background">
        <div className="container-px max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">Use cases &</span>{" "}
              <span className="text-brand-gradient-reverse">results</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {service.useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="rounded-2xl border border-border bg-surface-soft p-8 shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                  Use case 0{i + 1}
                </div>
                <h3 className={`${t.cardHeadlineMedium} text-foreground`}>
                  {uc.title}
                </h3>
                <p className={`mt-3 ${t.body} text-muted-foreground`}>
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-surface-dark text-on-surface-dark p-8 md:p-10 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-glow mb-3">
              The result
            </div>
            <p className={`${t.subheadlineNormal} text-white/90 max-w-4xl`}>
              {service.result}
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK & INDUSTRIES */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="container-px max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                Tech stack & tools
              </div>
              <h3 className={`${t.cardHeadlineMedium} text-foreground mb-5`}>
                The toolchain we work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-surface-soft text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                Industries
              </div>
              <h3 className={`${t.cardHeadlineMedium} text-foreground mb-5`}>
                Where this service is applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-gradient-cta text-primary-foreground shadow-soft"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container-px max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">Frequently asked</span>{" "}
              <span className="text-brand-gradient-reverse">questions</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {service.faqs.map((faq, i) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft open:shadow-card transition-all"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-start gap-4 cursor-pointer list-none">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-surface-soft text-primary font-bold grid place-items-center text-sm">
                    Q
                  </span>
                  <h3 className={`${t.cardHeadlineSm} text-foreground flex-1`}>
                    {faq.question}
                  </h3>
                  <span className="shrink-0 text-primary text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-4 pl-12">
                  <p className={`${t.body} text-muted-foreground`}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & RELATED */}
      <section className="py-24">
        <div className="container-px max-w-[1400px] mx-auto">
          <div className="tile bg-[#E0F2FF] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/40 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/40 blur-3xl" />
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className={`${t.sectionHeadline} text-[#0C4A6E]`}>
                {service.finalHeadline}
              </h2>
              <p className={`mt-5 ${t.subheadline} text-[#0C4A6E]/80`}>
                {service.finalSubText}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={service.finalCTA.href}
                  className="inline-flex items-center gap-2 bg-[#0369A1] text-white hover:bg-[#0C4A6E] font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
                >
                  {service.finalCTA.label} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {service.related.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#0C4A6E]/15">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0C4A6E] mb-4">
                    Related services
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {service.related.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 hover:bg-white text-[#0C4A6E] text-sm font-medium border border-[#0C4A6E]/15 hover:border-[#0C4A6E]/30 transition-colors"
                      >
                        {link.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
