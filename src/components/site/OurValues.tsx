import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

const values = [
  {
    title: "Innovation",
    description:
      "We bring practical AI thinking to real business challenges and focus on systems that work in production.",
    image:
      "/about-us/Gemini_Generated_Image_7f0jcg7f0jcg7f0j.jpg",
    cardBg: "bg-[#EFE6FF]",
    linkText: "text-[#6D28D9]",
  },
  {
    title: "Integrity",
    description:
      "Security, transparency and trust guide every engagement and every technical decision.",
    image:
      "/about-us/Gemini_Generated_Image_vwxiflvwxiflvwxi.jpg",
    cardBg: "bg-[#FFE9CC]",
    linkText: "text-[#9A4B00]",
  },
  {
    title: "Excellence",
    description:
      "We deliver reliable engineering, thoughtful execution and high-quality outcomes.",
    image:
      "/about-us/Gemini_Generated_Image_1v2fy61v2fy61v2f.jpg",
    cardBg: "bg-[#D6F4E4]",
    linkText: "text-[#0F7A41]",
  },
];

const OurValues = () => (
  <section className="bg-background py-24">
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
              className={`${cardBg} group relative rounded-3xl pt-8 md:pt-10 pb-6 px-6 flex flex-col transition-shadow hover:shadow-card`}
            >
              <div className="flex-1 flex flex-col">
                <h3 className={`${t.cardHeadlineMd} text-foreground`}>
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
