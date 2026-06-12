import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import type { ServiceContent } from "@/lib/services-content";
import TechStackIndustries from "@/components/site/TechStackIndustries";
import ServiceFAQ from "@/components/site/ServiceFAQ";

type Props = { service: ServiceContent; heroImage?: string };

const ServiceDetail = ({ service, heroImage }: Props) => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-dark text-on-surface-dark">
        <div className="h-[5rem]" aria-hidden="true" />
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_55%)]" />
        <div className={`absolute inset-0 ${heroImage ? "bg-black/60" : "bg-black/30"}`} />
        <div className="container-px max-w-[1200px] mx-auto relative z-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="items-center">
            <div className="max-w-3xl animate-fade-up">
              <span className="chip mb-5 bg-white/10 text-white border-white/20">
                {service.eyebrow}
              </span>
              <h1 className={`${t.heroHeadline} text-white`}>
                <span className="text-white">{service.h1Lead}</span>{" "}
                <span className="text-white">
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
          </div>
        </div>
      </section>

      {/* ANSWER BLOCK */}
      <section className="py-10 bg-background">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="tile bg-surface-soft p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-primary-glow/10 blur-3xl" />
            <div className="relative">
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
      <section className="py-10 bg-[#F9F9F7]">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="max-w-6xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">What we</span>{" "}
              <span className="text-brand-gradient-reverse">deliver</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.deliverables.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-glow transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <h3 className={`${t.cardHeadlineSemibold} text-foreground`}>
                  {item.title}
                </h3>
                <p className={`mt-3 ${t.body} text-muted-foreground`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY & RESULTS */}
      <section className="py-10 bg-background">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">Case Study &</span>{" "}
              <span className="text-brand-gradient-reverse">results</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.useCases.map((uc, i) =>
              uc.image ? (
                <div
                  key={uc.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={uc.image}
                      alt={uc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {uc.badge && (
                      <span className="absolute top-4 right-4 inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-cta text-primary-foreground shadow-soft">
                        {uc.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className={`${t.cardHeadlineMedium} text-foreground`}>
                      {uc.title}
                    </h3>
                    <p className={`mt-3 ${t.body} text-muted-foreground`}>
                      {uc.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={uc.title}
                  className="rounded-2xl border border-border bg-surface-soft p-8 shadow-soft"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                    Case study 0{i + 1}
                  </div>
                  <h3 className={`${t.cardHeadlineMedium} text-foreground`}>
                    {uc.title}
                  </h3>
                  <p className={`mt-3 ${t.body} text-muted-foreground`}>
                    {uc.description}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="mt-8 rounded-2xl bg-surface-dark text-on-surface-dark p-8 md:p-10 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-glow mb-3">
              The result
            </div>
            <p className={`${t.subheadlineNormal} text-white/90`}>
              {service.result}
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK & INDUSTRIES */}
      <TechStackIndustries
        techStack={service.techStack}
        industries={service.industries}
      />

      {/* FAQ */}
      <section className="py-10 bg-background">
        {service.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">Frequently asked</span>{" "}
              <span className="text-brand-gradient-reverse">questions</span>
            </h2>
          </div>
          <ServiceFAQ faqs={service.faqs} />
        </div>
      </section>

      {/* FINAL CTA & RELATED - fixed parallax image spanning the full viewport width */}
      <section className="bg-background pt-10 pb-0">
        <div className="w-full">
          <div className="relative overflow-hidden bg-surface-dark text-on-surface-dark shadow-card flex items-center justify-center">
            {/* Fixed background image, clipped to this card (stays pinned while content scrolls over it) */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(/service/final-cta-bg.jpg)` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_55%)]" />
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

            {/* Content flows above the fixed image */}
            <div className="relative z-10 px-6 sm:px-10 py-12 lg:py-14 w-full">
              <div className="relative text-center max-w-3xl mx-auto">
              <h2 className={`${t.sectionHeadline} text-white`}>
                {service.finalHeadline}
              </h2>
              <p className={`mt-5 ${t.subheadline} text-white/85`}>
                {service.finalSubText}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={service.finalCTA.href}
                  className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
                >
                  {service.finalCTA.label} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {service.related.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80 mb-4">
                    Related services
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {service.related.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-medium border border-white/25 hover:border-white/40 backdrop-blur-sm transition-colors"
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
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
