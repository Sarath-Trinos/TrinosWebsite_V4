import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import { careersContent } from "@/lib/careers-content";

const positions = Object.values(careersContent);

const OpenPositions = () => (
  <section id="open-positions" className="py-10">
    <div className="container-px max-w-[1200px] mx-auto">
      <div>
        <h2 className={`${t.sectionHeadlineLg} text-foreground`}>
          Open <span className="text-brand-gradient">positions</span>
        </h2>
        <p className={`mt-3 max-w-xl ${t.subheadlineSemibold} text-foreground`}>
          Find your next role
        </p>
        <p className={`mt-6 max-w-4xl ${t.bodyLg} text-muted-foreground`}>
          Explore exciting opportunities to join our team and help shape the future of
          enterprise AI.
        </p>
        <a href="#demo" className="link-arrow mt-8 inline-flex">
          Explore more vacancies <ArrowRight className="w-4 h-4" />
        </a>

        <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {positions.map(({ slug, title, department, location, type }) => (
            <div key={slug} className="flex flex-col">
              <h3 className={`${t.sectionHeadlineMd} text-foreground`}>{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {department} <span className="mx-1.5 text-muted-foreground/50">|</span> {location}{" "}
                <span className="mx-1.5 text-muted-foreground/50">|</span> {type}
              </p>
              <a
                href={`/careers/${slug}`}
                className="mt-6 inline-flex self-start rounded-md border border-primary/60 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OpenPositions;
