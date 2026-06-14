import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  // Image Optimization: serve modern formats and cache optimized variants
  // aggressively. Source files live in /public and are rendered via next/image,
  // so Next.js generates AVIF/WebP on demand and caches them at the edge.
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 1 year (sources are immutable / content-hashed paths).
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // Match the breakpoints the site actually renders at; trims wasted variants.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Long-lived caching for raw static media served straight from /public
  // (videos, posters, and the logo). These are versioned by deploy, so a long
  // immutable cache is safe and eliminates re-downloads on repeat visits.
  async headers() {
    return [
      {
        source:
          "/:path*.(mp4|webm|mov|jpg|jpeg|png|webp|avif|svg|gif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
