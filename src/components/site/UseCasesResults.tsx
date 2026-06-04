import Image from "next/image";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

type UseCase = {
  image: string;
  title: string;
  description: string;
  href: string;
};

const useCases: UseCase[] = [
  {
    image: "/trinos/high-accurancy.jpg",
    title: "High Accuracy Operations",
    description:
      "Targeted models can improve accuracy on complex domain language and repeatable workflows. This is valuable when teams need consistent outputs across documents, reports or operational decisions.",
    href: "/contact",
  },
  {
    image: "/trinos/performance-optimization-with-data-analytics.jpg",
    title: "Continuous Optimization",
    description:
      "Approved corrections and production signals can reduce repeated errors and improve system behavior over time. The improvement comes from structured feedback and controlled updates, not from unmanaged model changes.",
    href: "/contact",
  },
  {
    image: "/trinos/results.jpg",
    title: "The Result",
    description:
      "Your AI investment can become more valuable as it captures proprietary workflows, business logic and operational patterns. Over time, this creates a stronger foundation for automation, analytics and AI enabled decision support.",
    href: "/contact",
  },
];

const UseCasesResults = () => (
  <section id="use-cases" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1200px] mx-auto">
      <SectionHeader
        titleClassName={t.sectionHeadlineLg}
        title={
          <>
            <span className="text-black">Use cases</span>{" "}
            <span className="text-brand-gradient-reverse">and results</span>
          </>
        }
        subtitle="From targeted accuracy gains to long term operational leverage."
        description="The Trinos Edge is designed to turn practical usage into measurable business improvement."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {useCases.map(({ image, title, description, href }) => (
          <a
            key={title}
            href={href}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={80}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-7 flex flex-col gap-4 flex-1">
              <h3 className={`${t.cardHeadline} text-foreground`}>
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                {description}
              </p>
              <span className="mt-auto text-sm font-semibold uppercase tracking-wider text-primary group-hover:underline">
                Learn More
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesResults;
