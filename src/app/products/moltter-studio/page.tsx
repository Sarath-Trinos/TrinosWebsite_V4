import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ProductDetail from "@/components/site/ProductDetail";
import { productsContent } from "@/lib/products-content";

const product = productsContent["moltter-studio"];

export const metadata: Metadata = {
  title: product.pageTitle,
  description: product.metaDescription,
  alternates: { canonical: `/products/${product.slug}` },
  openGraph: { url: `/products/${product.slug}` },
};

export default function MoltterStudioPage() {
  return (
    <main className="landing-wide min-h-screen bg-background">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
