import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bakamo — Build on Reality",
  description:
    "We inspect the cultural ground before you build. Unfiltered consumer intelligence for leaders who need to get the foundation right.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5ZQTVMCV');`}
        </Script>
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

        {/* Minimal fixed header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone/30">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-lg font-bold tracking-tight text-ink">
              BAKAMO<span className="font-light text-earth">.</span>
            </a>
            <nav className="flex items-center gap-8 text-sm font-medium text-charcoal">
              <a href="/about" className="hover:text-ink transition-colors">About</a>
              <a href="/blog" className="hover:text-ink transition-colors">Insights</a>
              <a
                href="#contact"
                className="cta-button !py-2 !px-5 !text-xs tracking-widest uppercase"
              >
                Start the Inspection
              </a>
            </nav>
          </div>
        </header>

        {/* Content */}
        <div className="pt-[72px]">
          {children}
        </div>

      </body>
    </html>
  );
}