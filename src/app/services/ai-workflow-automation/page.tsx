import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ServiceDetail from "@/components/site/ServiceDetail";
import { servicesContent } from "@/lib/services-content";

const service = servicesContent["ai-workflow-automation"];

export const metadata: Metadata = {
  title: service.pageTitle,
  description: service.metaDescription,
};

export default function AIWorkflowAutomationPage() {
  return (
    <main className="landing-wide min-h-screen bg-background">
      <Header />
      <ServiceDetail
        service={service}
        heroImage="/service/ai-workflow-automation.png"
      />
      <Footer />
    </main>
  );
}
