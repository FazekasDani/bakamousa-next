import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bakamo USA",
  description: "Bakamo Web USA (headless WordPress frontend)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--background)] text-[color:var(--foreground)]`}
      >
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/40">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="text-sm font-semibold tracking-tight">
              Bakamo USA
            </a>
            <nav className="flex items-center gap-5 text-sm text-zinc-700 dark:text-zinc-300">
              <a href="/about" className="hover:text-black dark:hover:text-white">
                About
              </a>
              <a href="/blog" className="hover:text-black dark:hover:text-white">
                Blog
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-16 border-t border-black/10 py-10 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6">
            <p>© {new Date().getFullYear()} Bakamo USA</p>
            <p className="text-xs">Powered by WordPress + Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
