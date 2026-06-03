import type { Metadata } from "next";
import Header from "@/components/site/Header";
import TrinosEdgeHero from "@/components/site/TrinosEdgeHero";
import WhatWeDeliver from "@/components/site/WhatWeDeliver";
import UseCasesResults from "@/components/site/UseCasesResults";
import TrinosEdgeCTA from "@/components/site/TrinosEdgeCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "The Trinos Edge | AI First Advantage for Enterprises",
  description:
    "Discover the Trinos Edge, a compounding AI advantage built on small language models, feedback loops, controlled improvement and rapid application development.",
  keywords: [
    "AI first advantage",
    "feedback driven AI",
    "small language models for business",
    "enterprise AI improvement",
    "AI feedback loop",
  ],
};

export default function TrinosEdgePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TrinosEdgeHero />
      <WhatWeDeliver />
      <UseCasesResults />
      <TrinosEdgeCTA />
      <Footer />
    </main>
  );
}
