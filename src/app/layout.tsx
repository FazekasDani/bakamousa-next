import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { readFileSync } from "fs";
import { join } from "path";
import KimiNavigation from "@/components/KimiNavigation";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
    default: "Bakamo — Build on Reality",
    template: "%s | Bakamo",
  },
  description:
    "We inspect the cultural ground before you build. Unfiltered consumer intelligence for leaders who need to get the foundation right.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bakamo",
    title: "Bakamo — Build on Reality",
    description:
      "We inspect the cultural ground before you build. Unfiltered consumer intelligence for leaders who need to get the foundation right.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakamo — Build on Reality",
    description:
      "Unfiltered consumer intelligence for leaders who need to get the foundation right.",
  },
};

function getNavigationContent() {
  const filePath = join(process.cwd(), "content", "homepage.json");
  const raw = readFileSync(filePath, "utf8");
  const content = JSON.parse(raw);
  return content.navigation;
}

async function OrganizationJsonLd() {
  const { getSiteUrl } = await import("@/lib/site-url");
  const siteUrl = await getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bakamo",
    url: siteUrl,
    description:
      "Unfiltered consumer intelligence — we inspect the cultural ground before you build.",
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
  const navContent = getNavigationContent();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager — must be as high in <head> as possible */}
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
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZQTVMCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* GA4 direct tracking (SPA-aware) */}
        <GoogleAnalytics />

        {/* Kimi-style auto-hiding glassmorphic nav */}
        <KimiNavigation content={navContent} />

        {/* Organization JSON-LD */}
        <OrganizationJsonLd />

        {/* Content — no top padding, hero is full-screen */}
        {children}

      </body>
    </html>
  );
}