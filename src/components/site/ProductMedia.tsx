"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
  images: string[];
  alt: string;
  /**
   * Fallback icon shown in the gradient placeholder when no images exist.
   * Passed as a pre-rendered node — Lucide components are functions and can't
   * cross the server → client boundary as props.
   */
  iconSlot: ReactNode;
  /** Gradient tint classes (composed with `bg-gradient-to-br`). */
  tile: string;
  intervalMs?: number;
};

/**
 * Product imagery for detail pages. Renders a fading slideshow when real,
 * cleared screenshots exist, or a branded gradient placeholder otherwise.
 * Consistent 16/10 aspect ratio across all products.
 */
const ProductMedia = ({ images, alt, iconSlot, tile, intervalMs = 3500 }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) {
    return (
      <div className="relative tile bg-card p-0 overflow-hidden">
        <div
          className={`relative w-full aspect-[16/10] grid place-items-center bg-gradient-to-br ${tile}`}
          role="img"
          aria-label={alt}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="relative w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 grid place-items-center shadow-soft">
            {iconSlot}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative tile bg-card pt-0 px-0 pb-3 md:pb-4">
      <div
        data-product-media-frame
        className="relative w-full aspect-[3582/1832] overflow-hidden rounded-[22px] bg-surface-soft"
      >
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={`object-contain transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show image ${i + 1}`}
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

export default ProductMedia;
