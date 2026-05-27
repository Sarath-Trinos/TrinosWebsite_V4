import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ServiceDetail from "@/components/site/ServiceDetail";
import { servicesContent } from "@/lib/services-content";

const service = servicesContent["llm-fine-tuning"];

export const metadata: Metadata = {
  title: service.pageTitle,
  description: service.metaDescription,
};

export default function LLMFineTuningPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceDetail service={service} />
      <Footer />
    </main>
  );
}
