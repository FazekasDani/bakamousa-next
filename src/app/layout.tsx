import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-bakamo-dark text-foreground`}>
        
        {/* Floating Header */}
        <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-2xl">
          <div className="mx-4 flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur-md shadow-2xl">
            <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tighter text-white">
              <span className="text-bakamo-cyan">BAKAMO</span>USA
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/blog" className="hover:text-white transition-colors">Insights</a>
              <a href="#contact" className="hidden sm:block rounded-full bg-white/10 px-4 py-1.5 text-xs text-white hover:bg-white/20 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Content with padding to account for fixed header */}
        <div className="pt-24">
          {children}
        </div>

        <footer className="mt-20 border-t border-white/10 bg-black/40 py-12 text-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Bakamo USA. Measuring Reality.</p>
        </footer>
      </body>
    </html>
  );
}