import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ServiceDetail from "@/components/site/ServiceDetail";
import { servicesContent } from "@/lib/services-content";

const service = servicesContent["web-development"];

export const metadata: Metadata = {
  title: service.pageTitle,
  description: service.metaDescription,
};

export default function WebDevelopmentPage() {
  return (
    <main className="landing-wide min-h-screen bg-background">
      <Header />
      <ServiceDetail service={service} heroImage="/service/Web%20app.webp" />
      <Footer />
    </main>
  );
}
