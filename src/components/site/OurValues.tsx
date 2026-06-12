import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

const values = [
  {
    title: "Think Ahead",
    description:
      "We explore emerging technologies and turn ambitious ideas into practical systems that create measurable business value.",
    image:
      "/about-us/Gemini_Generated_Image_7f0jcg7f0jcg7f0j.jpg",
    cardBg: "bg-surface-dark text-on-surface-dark",
    linkText: "text-primary-glow",
  },
  {
    title: "Build With Trust",
    description:
      "Security, transparency and trust guide every engagement and every technical decision.",
    image:
      "/about-us/Gemini_Generated_Image_vwxiflvwxiflvwxi.jpg",
    cardBg: "bg-surface-dark text-on-surface-dark",
    linkText: "text-primary-glow",
  },
  {
    title: "Improve Every Cycle",
    description:
      "We deliver reliable engineering, thoughtful execution and high-quality outcomes.",
    image:
      "/about-us/Gemini_Generated_Image_1v2fy61v2fy61v2f.jpg",
    cardBg: "bg-surface-dark text-on-surface-dark",
    linkText: "text-primary-glow",
  },
];

const OurValues = () => (
  <section id="our-values" className="bg-background py-10">
    <div className="container-px max-w-[1200px] mx-auto">
      <SectionHeader
        titleClassName={t.sectionHeadlineLg}
        subtitleClassName="font-normal text-muted-foreground"
        title={
          <>
            <span className="text-black">Our</span>{" "}
            <span className="text-brand-gradient-reverse">values</span>
          </>
        }
        subtitle="What we stand for"
        description="Trinos culture is built on trust, respect and inclusivity. Innovation, Integrity and Excellence guide our engineering decisions, client relationships and delivery standards."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {values.map(
          ({ title, description, image, cardBg, linkText }) => (
            <div
              key={title}
              className={`${cardBg} group relative rounded-3xl border border-white/10 pt-8 md:pt-10 pb-6 px-6 flex flex-col transition-shadow hover:shadow-glow`}
            >
              <div className="flex-1 flex flex-col">
                <h3 className={`${t.cardHeadlineMd} text-on-surface-dark`}>
                  {title}
                </h3>

                <p className={`mt-5 ${t.bodyResponsive} text-white/70`}>
                  {description}
                </p>

                <a
                  href="#"
                  className={`mt-6 inline-flex items-center gap-2 font-semibold ${linkText}`}
                >
                  Read more
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={500}
                  className="w-full h-44 sm:h-auto sm:aspect-square lg:aspect-auto lg:h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default OurValues;
