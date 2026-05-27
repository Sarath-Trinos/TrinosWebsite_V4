import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import ProofStrip from "@/components/site/ProofStrip";
import EnterpriseProblem from "@/components/site/EnterpriseProblem";
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
      <EnterpriseProblem />
      <TwoTracks />
      <AgentPlatform />
      <ErpCrmModernization />
      <HealthcareAI />
      <EnterpriseProof />
      <WhyChooseTrinos />
      <CTASection
        variant="gradient"
        title="Stop piloting. Start shipping."
        subtitle="A Discovery Workshop with Trinos maps your bottlenecks, your data, your systems, and shows you exactly where AI creates the fastest measurable impact. Two hours. No slideware."
        buttonLabel="Book a Discovery Workshop"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
