"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Tracks the rendered height of the left product media (the "big screen") so the
 * phone frame's screen can match it. Returns null until measured / on the server.
 */
const useProductMediaHeight = () => {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const target = document.querySelector<HTMLElement>("[data-product-media-frame]");
    if (!target) return;

    const update = () => setHeight(target.getBoundingClientRect().height);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return height;
};

type Props = {
  images: string[];
  alt: string;
  intervalMs?: number;
};

/**
 * Mobile-app imagery for product detail pages. Renders the screenshots one at a
 * time inside a phone frame, cross-fading between them on an interval. Designed
 * to sit in the sticky aside beneath the Key Capabilities card.
 */
const ProductMobileMedia = ({ images, alt, intervalMs = 3500 }: Props) => {
  const [index, setIndex] = useState(0);
  const mediaHeight = useProductMediaHeight();

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col items-center lg:items-start lg:pl-2">
      {/* Phone frame */}
      <div className="relative w-full max-w-[18rem] rounded-[2.5rem] bg-[#0f1115] p-3 shadow-card">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 h-5 w-24 rounded-b-2xl bg-[#0f1115]" />
        <div
          className="relative w-full overflow-hidden rounded-[1.75rem] bg-black"
          style={mediaHeight ? { height: mediaHeight } : { aspectRatio: "9 / 19.5" }}
        >
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 15rem, 60vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="mt-5 w-full max-w-[18rem] flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show mobile screenshot ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductMobileMedia;
