import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnalyticsInstrumentation from "@/components/AnalyticsInstrumentation";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import CookieBanner from "@/components/CookieBanner";
import SiteNavigation from "@/components/SiteNavigation";
import { getSiteUrlSync } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = getSiteUrlSync();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bakamo — We Fixed Quant",
    template: "%s | Bakamo",
  },
  description:
    "We deliver the real human narrative behind the decimal point. Unfiltered consumer intelligence for leaders who need reality, not assumptions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bakamo",
    title: "Bakamo — We Fixed Quant",
    description:
      "We deliver the real human narrative behind the decimal point.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakamo — We Fixed Quant",
    description:
      "We deliver the real human narrative behind the decimal point.",
  },
};

async function OrganizationJsonLd() {
  const { getSiteUrl } = await import("@/lib/site-url");
  const siteUrl = await getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bakamo",
    url: siteUrl,
    description:
      "We deliver the real human narrative behind the decimal point. Unfiltered consumer intelligence.",
    foundingDate: "2015",
    founder: {
      "@type": "Person",
      name: "Daniel Fazekas",
      jobTitle: "Founder & CEO",
    },
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-near-black text-text-primary`}>
        <AnalyticsInstrumentation />
        <AnnouncementBanner />
        <SiteNavigation />
        <OrganizationJsonLd />

        {children}

        <CookieBanner />
      </body>
    </html>
  );
}