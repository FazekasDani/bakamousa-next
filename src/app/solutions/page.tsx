import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "TensionScope\u2122, Bakamo Circle\u2122, and Bakamo Tracking\u2122\u2014three pathways to reality-grounded consumer intelligence.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Bakamo",
    description:
      "TensionScope\u2122, Bakamo Circle\u2122, and Bakamo Tracking\u2122\u2014three pathways to reality-grounded consumer intelligence.",
  },
};

const SOLUTIONS = [
  {
    label: "A",
    name: "TensionScope\u2122",
    role: "The Diagnostic",
    headline: `Decode the \u201cWhy\u201d behind the \u201cWhat.\u201d`,
    body: `Standard research tells you what people say. TensionScope identifies the emotional and psychological tensions\u2014the \u201cpush and pull\u201d\u2014that actually drive their behavior. By mapping conversations against universal human needs (Security, Autonomy, Belonging), we provide a Tension Index to anticipate market shifts before they happen.`,
    best: "Category entry, innovation, and emotional repositioning.",
  },
  {
    label: "B",
    name: "Bakamo Circle\u2122",
    role: "The Deep Map",
    headline: "360\u00b0 Cultural Intelligence.",
    body: "A full-spectrum analysis of the consumer ecosystem. We move beyond basic demographics to map authentic Personas, organic Narratives, and the non-linear Consumer Journey. This is the qualitative \u201csoul\u201d of your market, scaled into quantitative reality.",
    best: "Market segmentation and brand architecture.",
  },
  {
    label: "C",
    name: "Bakamo Tracking\u2122",
    role: "The Baseline",
    headline: "Measure what matters.",
    body: "Traditional trackers are sterile. Ours are grounded. By using social intelligence to calibrate your tracking instrument, we ensure you are measuring the drivers that actually move the needle, weighted against representative, national panels.",
    best: "Brand reputation and long-term equity monitoring.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="relative w-full min-h-screen bg-near-black text-text-primary overflow-x-hidden pb-24">
      <div className="grain-overlay" />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">The Toolkit</p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white">
            Three Pathways<br />
            <span className="text-accent-glow font-light">to Reality</span>
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
        </div>
      </section>

      {/* Solutions Deep-Dives */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto space-y-24">
          {SOLUTIONS.map((s) => (
            <div key={s.label} className="diff-card relative">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-accent font-mono text-xl">{s.label}</span>
                <h2 className="text-white text-3xl md:text-4xl font-light">{s.name}</h2>
              </div>
              <p className="text-text-muted text-sm uppercase tracking-[0.15em] mb-6">
                {s.role}
              </p>
              <h3 className="text-white text-xl font-medium mb-6">{s.headline}</h3>
              <p className="text-text-secondary text-base leading-relaxed max-w-3xl mb-6">
                {s.body}
              </p>
              <p className="text-accent text-sm uppercase tracking-[0.12em]">
                Best for: {s.best}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-12" />
          <p className="text-text-secondary text-lg font-light mb-8">
            Not sure which pathway fits? Let&apos;s find out.
          </p>
          <Link href="/contact" className="cta-button text-sm">
            Book a Strategy Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
