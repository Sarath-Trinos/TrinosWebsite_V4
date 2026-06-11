import { ArrowRight, ArrowLeft } from "lucide-react";
import { type as t } from "@/lib/typography";
import type { JobContent } from "@/lib/careers-content";

type Props = { job: JobContent };

const JobDetail = ({ job }: Props) => {
  return (
    <article className="bg-background">
      {/* spacer so content clears the fixed header */}
      <div className="h-[5rem]" aria-hidden="true" />

      <div className="container-px max-w-[1100px] mx-auto py-16 lg:py-24">
        <a
          href="/careers#open-positions"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4" /> Back to open positions
        </a>

        <p className="mt-8 text-sm text-muted-foreground">
          {job.department}
          <span className="mx-1.5 text-muted-foreground/50">|</span>
          {job.location}
          <span className="mx-1.5 text-muted-foreground/50">|</span>
          {job.type}
        </p>

        <h1 className={`mt-3 ${t.heroHeadline} text-foreground`}>
          {job.title}
        </h1>

        <p className={`mt-6 ${t.bodyLg} text-muted-foreground`}>{job.summary}</p>

        <a
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
        >
          Apply now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-12 space-y-12">
          {job.sections.map((section) => (
            <section key={section.heading}>
              <h2 className={`${t.sectionHeadlineMd} text-foreground`}>
                {section.heading}
              </h2>

              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className={`mt-4 ${t.body} text-muted-foreground`}
                >
                  {p}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 ${t.body} text-muted-foreground`}
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
          >
            Apply now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default JobDetail;
