import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import AnalyticsInstrumentation from "@/components/AnalyticsInstrumentation";
import SiteNavigation from "@/components/SiteNavigation";
import { getSiteUrlSync } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = getSiteUrlSync();
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
      {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      <body className={`${inter.className} antialiased bg-near-black text-text-primary`}>
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        <AnalyticsInstrumentation />
        <SiteNavigation />
        <OrganizationJsonLd />

        {children}
      </body>
    </html>
  );
}