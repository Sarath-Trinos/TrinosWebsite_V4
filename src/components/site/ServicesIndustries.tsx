import Image from "next/image";
import { type as t } from "@/lib/typography";

type Industry = {
  image: string;
  name: string;
  bg?: string;
};

const industries: Industry[] = [
  { image: "/service/Manufacturing.png", name: "Manufacturing", bg: "bg-[#FF6B3D]" },
  { image: "/service/Insurance.png", name: "Insurance", bg: "bg-[#1F3A68]" },
  { image: "/service/Enterprise.png", name: "Enterprise Technology", bg: "bg-[#5B8DEF]" },
  { image: "/service/Healthcare.png", name: "Healthcare", bg: "bg-[#1AA39A]" },
  { image: "/service/Travel%26Hospitality.png", name: "Travel & Hospitality", bg: "bg-[#F26A5A]" },
  { image: "/service/Government.png", name: "Government", bg: "bg-[#A06A2C]" },
  { image: "/service/Financial_Service.png", name: "Financial Services", bg: "bg-[#7FC7E8]" },
  { image: "/service/Automobile%26Engineering.png", name: "Automobile & Engineering", bg: "bg-[#2E2E2E]" },
];

const ServicesIndustries = () => (
  <section id="who-we-help" className="bg-[#F9F9F7] py-12 lg:min-h-screen lg:flex lg:items-center">
    <div className="container-px max-w-[1400px] mx-auto w-full">
      <div className="mb-8 max-w-3xl">
        <span className="chip mb-5">Who we help</span>
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">Built for</span>{" "}
          <span className="text-brand-gradient-reverse">operations-heavy industries</span>
        </h2>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          We work with enterprises where AI must be secure, auditable, and aligned with business
          rules — across manufacturing, insurance, financial services, healthcare, government,
          enterprise technology, travel and hospitality, automobile and engineering, and other
          operations-heavy sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12 items-start">
        {industries.map(({ image, name, bg }, index) => {
          const isLastTwo = index >= industries.length - 2;
          const cellClass = isLastTwo
            ? "lg:col-span-2 lg:[&:nth-last-child(2)]:col-start-2"
            : "lg:col-span-2";
          return (
            <div
              key={name}
              className={`group flex flex-col items-center gap-4 ${cellClass}`}
            >
              <div
                className={`aspect-[16/10] w-full overflow-hidden rounded-xl ${bg ?? ""}`}
              >
                <Image
                  src={image}
                  alt={name}
                  width={640}
                  height={400}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="font-semibold text-foreground text-center text-lg">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesIndustries;
