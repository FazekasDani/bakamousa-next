import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5ZQTVMCV');`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-near-black text-text-primary`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZQTVMCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <GoogleAnalytics />
        <SiteNavigation />
        <OrganizationJsonLd />

        {children}
      </body>
    </html>
  );
}