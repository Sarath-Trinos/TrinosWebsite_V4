import type { Metadata } from "next";
import Header from "@/components/site/Header";
import IndustryHero from "@/components/site/IndustryHero";
import IndustryGrid from "@/components/site/IndustryGrid";
import IndustryCTA from "@/components/site/IndustryCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Industries We Serve | Trinos Technologies",
  description:
    "Trinos delivers AI-first solutions across manufacturing, insurance, financial services, healthcare, government, enterprise technology, travel & hospitality and automobile & engineering.",
};

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <IndustryHero />
      <IndustryGrid />
      <IndustryCTA />
      <Footer />
    </main>
  );
}
