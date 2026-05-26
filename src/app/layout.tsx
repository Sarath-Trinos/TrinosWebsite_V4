import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Providers } from "./providers";
import { CustomCursor } from "@/components/site/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trinos.ai"),
  title: "Trinos Technologies | AI-First Enterprise Technology & Products",
  description:
    "Trinos builds AI-first enterprise systems, agentic automation, AI-powered analytics, ERP platforms, web applications, and mobile experiences for global businesses.",
  icons: {
    icon: [{ url: "/Logo.png", type: "image/png" }],
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "Trinos Technologies | AI-First Enterprise Technology & Products",
    description:
      "Trinos builds AI-first enterprise systems, agentic automation, AI-powered analytics, ERP platforms, web applications, and mobile experiences for global businesses.",
    type: "website",
    url: "https://trinos.ai",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <CustomCursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
