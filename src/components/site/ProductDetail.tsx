import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { type as t } from "@/lib/typography";
import type { ProductContent } from "@/lib/products-content";
import { productCTA } from "@/lib/products-content";
import ProductMedia from "@/components/site/ProductMedia";
import ProductMobileMedia from "@/components/site/ProductMobileMedia";

type Props = { product: ProductContent; heroImage?: string };

const ProductDetail = ({ product, heroImage }: Props) => {
  const Icon = product.icon;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.h1,
    category: product.category,
    description: product.summary,
    brand: { "@type": "Brand", name: "Trinos Technologies" },
    url: `https://trinos.ai/products/${product.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

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
        <div className="container-px max-w-[1200px] mx-auto relative z-10 pt-12 lg:pt-16 pb-16 lg:pb-20">
          <a
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All products
          </a>
          <div className="max-w-3xl animate-fade-up">
            <span className="chip mb-5 bg-white/10 text-white border-white/20">
              {product.caseNumber} · {product.category}
            </span>
            <h1 className={`${t.heroHeadline} text-white`}>{product.h1}</h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
              {product.summary}
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT-LED BLOCK + STICKY STAT RAIL */}
      <section className="py-10 bg-background">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_22rem] gap-8 lg:gap-12 items-start">
            {/* Left: media + what/who/features */}
            <div className="space-y-10">
              <ProductMedia
                images={product.images}
                alt={product.imageAlt}
                iconSlot={<Icon className="w-10 h-10 text-white" strokeWidth={1.5} />}
                tile={product.accent.tile}
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="tile bg-surface-soft p-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                    What it does
                  </div>
                  <p className={`${t.body} text-muted-foreground`}>{product.whatItDoes}</p>
                </div>
                <div className="tile bg-surface-soft p-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                    Who it's for
                  </div>
                  <p className={`${t.body} text-muted-foreground`}>{product.whoItsFor}</p>
                </div>
              </div>

              <div>
                <h2 className={`${t.cardHeadlineMedium} text-foreground mb-5`}>Key features</h2>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-gradient-primary grid place-items-center shadow-soft">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: sticky Key Capabilities stat panel (stacks below on mobile) */}
            <aside className="lg:sticky lg:top-24 space-y-6">
              {product.mobileImages && product.mobileImages.length > 0 && (
                <ProductMobileMedia
                  images={product.mobileImages}
                  alt={product.mobileImageAlt ?? product.imageAlt}
                />
              )}

              <div className="tile bg-surface-dark text-on-surface-dark p-7 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`w-1 h-6 rounded-full ${product.accent.bar}`} aria-hidden="true" />
                    <h2 className="font-display font-bold text-sm uppercase tracking-[0.16em] text-white/90">
                      Key Capabilities
                    </h2>
                  </div>
                  <dl className="space-y-5">
                    {product.capabilities.map((stat) => (
                      <div key={stat.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <dt className="text-xs text-white/60 mb-1">{stat.label}</dt>
                        <dd className={`${t.cardHeadlineMedium} text-white`}>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CHALLENGE → SOLUTION → IMPACT */}
      <section className="py-10 bg-[#F9F9F7]">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className={t.sectionHeadlineLg}>
              <span className="text-black">The</span>{" "}
              <span className="text-brand-gradient-reverse">case study</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "The Challenge", body: product.challenge },
              { label: "The Solution", body: product.solution },
              { label: "The Impact", body: product.impact },
            ].map((block, i) => (
              <div
                key={block.label}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-card transition-shadow flex flex-col"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
                  Step 0{i + 1}
                </div>
                <h3 className={`${t.cardHeadlineMedium} text-foreground`}>{block.label}</h3>
                <p className={`mt-3 ${t.body} text-muted-foreground`}>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAIN ADDRESSED */}
      <section className="py-10 bg-background">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="max-w-3xl mb-8">
            <h2 className={t.sectionHeadlineMd}>
              <span className="text-black">Domain</span>{" "}
              <span className="text-brand-gradient-reverse">addressed</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.domains.map((domain) => (
              <span
                key={domain}
                className="inline-flex items-center px-4 py-2 rounded-full bg-surface-soft border border-border text-sm font-medium text-foreground"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & RELATED */}
      <section className="bg-background py-10">
        <div className="container-px max-w-[1200px] mx-auto">
          <div className="relative overflow-hidden tile bg-surface-dark text-on-surface-dark p-8 md:p-12 lg:p-14">
            <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-primary-glow/15 blur-3xl" />
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className={`${t.sectionHeadline} text-white`}>Let's build together.</h2>
              <p className={`mt-5 ${t.subheadline} text-white/85`}>
                We propose a phased engagement that starts by understanding your challenges and
                moves quickly to a working proof of concept.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={productCTA.href}
                  className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
                >
                  {productCTA.label} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {product.related.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80 mb-4">
                    Other products
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {product.related.map((link) => (
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
      </section>
    </>
  );
};

export default ProductDetail;
