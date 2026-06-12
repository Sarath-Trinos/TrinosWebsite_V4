import type { Metadata } from "next";
import Header from "@/components/site/Header";
import AboutHero from "@/components/site/AboutHero";
import Leadership from "@/components/site/Leadership";
import WhoWeAre from "@/components/site/WhoWeAre";
import MissionVision from "@/components/site/MissionVision";
import OurValues from "@/components/site/OurValues";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "About Trinos Technologies | AI-First Enterprise Engineering Company",
  description:
    "Learn about Trinos Technologies, an AI-first engineering company based in Chennai with enterprise experience across AI, ERP and platform development.",
  keywords: [
    "AI-first engineering company",
    "Trinos Technologies",
    "enterprise AI company",
    "AI software development company in Chennai",
  ],
};

export default function AboutPage() {
  return (
    <main className="landing-wide min-h-screen bg-background">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <OurValues />
      <MissionVision />
      <Leadership />
      <CTASection variant="dark" />
      <Footer />
    </main>
  );
}
