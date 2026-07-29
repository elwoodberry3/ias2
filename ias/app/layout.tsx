import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { site } from "@/lib/site.config";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

/**
 * Fonts are self-hosted (woff2 in ./fonts) rather than fetched from Google
 * Fonts at build time. This removes a build-time network dependency and a
 * third-party runtime request — the whole site ships from one origin.
 */
const spaceGrotesk = localFont({
  variable: "--font-space-grotesk",
  display: "swap",
  src: [
    { path: "./fonts/space-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/space-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/space-grotesk-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/space-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "./fonts/dm-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/dm-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/dm-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/dm-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const spaceMono = localFont({
  variable: "--font-space-mono",
  display: "swap",
  src: [
    { path: "./fonts/space-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/space-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.intro,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
