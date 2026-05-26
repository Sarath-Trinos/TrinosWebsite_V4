import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import ProofStrip from "@/components/site/ProofStrip";
import TwoTracks from "@/components/site/TwoTracks";
import AgentPlatform from "@/components/site/AgentPlatform";
import ErpCrmModernization from "@/components/site/ErpCrmModernization";
import HealthcareAI from "@/components/site/HealthcareAI";
import EnterpriseProof from "@/components/site/EnterpriseProof";
import WhyChooseTrinos from "@/components/site/WhyChooseTrinos";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProofStrip />
      <TwoTracks />
      <AgentPlatform />
      <ErpCrmModernization />
      <HealthcareAI />
      <EnterpriseProof />
      <WhyChooseTrinos />
      <CTASection
        variant="purple"
        title="Ready to deploy AI that actually works?"
        subtitle="Start with a Discovery Workshop. Trinos will map your operational bottlenecks and identify where AI can create the fastest, safest, and most measurable business impact."
        buttonLabel="Book a Discovery Workshop"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
