import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { profile, siteUrl } from "@/data/site";

import "./globals.css";

/* ------------------------------- typography ------------------------------- */

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

/* --------------------------------- metadata -------------------------------- */

const title = `${profile.name} — Full-Stack Developer & AI/ML Enthusiast`;
const description =
  "Om Kumar is a third-year Computer Science undergraduate at MMMUT Gorakhpur building full-stack web applications with the MERN stack and applied AI/ML systems. Explore FinSight, an AI-powered finance tracker, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Om Kumar",
    "full-stack developer",
    "MERN stack developer",
    "React developer",
    "Node.js developer",
    "AI ML enthusiast",
    "machine learning",
    "recommendation systems",
    "DSA",
    "C++",
    "MMMUT Gorakhpur",
    "computer science undergraduate",
    "software engineering intern",
    "portfolio",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

/* ---------------------------------- layout --------------------------------- */

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <a
          href="#main"
          className="sr-only z-[70] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[#160e00]"
        >
          Skip to content
        </a>

        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
