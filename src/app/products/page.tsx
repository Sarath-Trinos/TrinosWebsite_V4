import type { Metadata } from "next";
import Header from "@/components/site/Header";
import ProductsHero from "@/components/site/ProductsHero";
import ProductGrid from "@/components/site/ProductGrid";
import ProductsProof from "@/components/site/ProductsProof";
import ProductsCTA from "@/components/site/ProductsCTA";
import Footer from "@/components/site/Footer";
import { productsContent, productOrder } from "@/lib/products-content";

export const metadata: Metadata = {
  title: "AI Products | Trinos Technologies",
  description:
    "Trinos builds, launches and scales its own AI platforms across decision intelligence (Moltter Studio), travel operations (Trip11) and industrial traceability (TraceFlow), proven under production conditions.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Trinos AI Products",
  itemListElement: productOrder.map((slug, i) => {
    const p = productsContent[slug];
    return {
      "@type": "ListItem",
      position: i + 1,
      name: p.h1,
      url: `https://trinos.ai/products/${p.slug}`,
    };
  }),
};

export default function ProductsPage() {
  return (
    <main className="landing-wide min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Header />
      <ProductsHero />
      <ProductGrid />
      <ProductsProof />
      <ProductsCTA />
      <Footer />
    </main>
  );
}
