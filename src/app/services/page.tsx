import type { Metadata } from "next";
import Header from "@/components/site/Header";
import ServicesHero from "@/components/site/ServicesHero";
import ServicesAnswerBlock from "@/components/site/ServicesAnswerBlock";
import OurServices from "@/components/site/OurServices";
import ServicesCTA from "@/components/site/ServicesCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Enterprise AI Services and Platform Engineering | Trinos",
  description:
    "Explore Trinos enterprise AI services across agentic AI, workflow automation, analytics, ERP, voice AI, computer vision, web and mobile platforms.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesAnswerBlock />
      <OurServices />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
