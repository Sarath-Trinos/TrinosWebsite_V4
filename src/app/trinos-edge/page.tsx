import type { Metadata } from "next";
import Header from "@/components/site/Header";
import TrinosEdgeHero from "@/components/site/TrinosEdgeHero";
import WhatWeDeliver from "@/components/site/WhatWeDeliver";
import UseCasesResults from "@/components/site/UseCasesResults";
import TrinosEdgeCTA from "@/components/site/TrinosEdgeCTA";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "The Trinos Edge | AI-First Enterprise Advantage | Trinos Technologies",
  description:
    "Discover the Trinos Edge: small language models, self-improving AI, feedback loops, and rapid application development for enterprise AI systems.",
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
