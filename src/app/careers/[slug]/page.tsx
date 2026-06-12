import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CTASection from "@/components/site/CTASection";
import JobDetail from "@/components/site/JobDetail";
import { careersContent, careerSlugs } from "@/lib/careers-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return careerSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = careersContent[slug];
  if (!job) return {};
  return {
    title: job.pageTitle,
    description: job.metaDescription,
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const job = careersContent[slug];
  if (!job) notFound();

  return (
    <main className="landing-wide min-h-screen bg-background">
      <Header />
      <JobDetail job={job} />
      <CTASection variant="dark" />
      <Footer />
    </main>
  );
}
