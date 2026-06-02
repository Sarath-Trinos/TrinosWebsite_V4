import type { Metadata } from "next";
import Header from "@/components/site/Header";
import ServicesHero from "@/components/site/ServicesHero";
import ServicesAnswerBlock from "@/components/site/ServicesAnswerBlock";
import OurServices from "@/components/site/OurServices";
import ServicesIndustries from "@/components/site/ServicesIndustries";
import ServicesCTA from "@/components/site/ServicesCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "AI-First Enterprise Services | Trinos Technologies",
  description:
    "Explore Trinos services across agentic AI, AI workflow automation, LLM fine tuning, generative analytics, voice assistants, computer vision, ERP, social media automation, web development and mobile app development.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesAnswerBlock />
      <OurServices />
      <ServicesIndustries />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
