import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

const values = [
  {
    number: "01",
    tag: "Our Value",
    title: "Innovation",
    description: "We bring cutting-edge AI to real business challenges.",
    image:
      "/about-us/Gemini_Generated_Image_7f0jcg7f0jcg7f0j.jpg",
    cardBg: "bg-[#EFE6FF]",
    tagText: "text-[#6D28D9]",
    linkText: "text-[#6D28D9]",
  },
  {
    number: "02",
    tag: "Our Value",
    title: "Integrity",
    description: "Security, transparency, and trust define every engagement.",
    image:
      "/about-us/Gemini_Generated_Image_vwxiflvwxiflvwxi.jpg",
    cardBg: "bg-[#FFE9CC]",
    tagText: "text-[#9A4B00]",
    linkText: "text-[#9A4B00]",
  },
  {
    number: "03",
    tag: "Our Value",
    title: "Excellence",
    description: "We deliver engineering precision and world-class quality.",
    image:
      "/about-us/Gemini_Generated_Image_1v2fy61v2fy61v2f.jpg",
    cardBg: "bg-[#D6F4E4]",
    tagText: "text-[#0F7A41]",
    linkText: "text-[#0F7A41]",
  },
];

const OurValues = () => (
  <section className="bg-background py-24">
    <div className="container-px max-w-[1400px] mx-auto">
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
        description="Trinos culture is built on trust, respect, and inclusivity — with Innovation, Integrity, and Excellence as the wellspring of our growth. Everyone is welcome at Trinos regardless of background, age, gender, or experience level."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {values.map(
          ({ number, tag, title, description, image, cardBg, tagText, linkText }) => (
            <div
              key={title}
              className={`${cardBg} group relative rounded-3xl pt-8 md:pt-10 pb-6 px-6 flex flex-col transition-shadow hover:shadow-card`}
            >
              <span
                className={`absolute top-6 right-6 ${t.statLg} ${tagText} opacity-25`}
              >
                {number}
              </span>

              <div className="flex-1 flex flex-col">
                <span
                  className={`inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold ${tagText}`}
                >
                  {tag}
                </span>

                <h3 className={`mt-8 ${t.cardHeadlineMd} text-foreground`}>
                  {title}
                </h3>

                <p className={`mt-5 ${t.bodyResponsive} text-foreground/70`}>
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
