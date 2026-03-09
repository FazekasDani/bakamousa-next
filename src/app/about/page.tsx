import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "How the Bakamo + Baumann merger created the \u201cFixed Quant\u201d category\u2014bridging cultural intelligence with statistical precision.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bakamo",
    description:
      "How the Bakamo + Baumann merger created the \u201cFixed Quant\u201d category\u2014bridging cultural intelligence with statistical precision.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-near-black text-text-primary overflow-x-hidden pb-24">
      <div className="grain-overlay" />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">The Story</p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white">
            How We Created the<br />
            <span className="text-accent-glow font-light">&ldquo;Fixed Quant&rdquo;</span> Category
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
        </div>
      </section>

      {/* The Origin Story */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-8 text-lg font-light leading-relaxed text-text-secondary">
          <p className="text-text-primary text-xl">
            Research has a design flaw. Quantitative studies measure the answers you already thought to ask. 
            Qualitative studies give you depth without scale. Neither starts with reality.
          </p>
          <p>
            Bakamo was built on a different premise: that the richest consumer data already exists
            in the wild&mdash;in unfiltered conversations, organic debates, and the language people
            actually use when no brand is listening. For over a decade, our anthropological radar
            has extracted the emotional tensions, hidden needs, and cultural fault lines that
            pre-structured research simply cannot see.
          </p>
          <p>
            But a radar without a ruler is just intuition.
          </p>
          <p>
            The partnership with <span className="text-white font-medium">Dr.&nbsp;Sandra Baumann</span> and
            her team of statistical methodologists solved the equation. By fusing Bakamo&apos;s
            observational intelligence with rigorous quantitative calibration&mdash;representative
            panels, exhaustive attribute mapping, and bias-reducing survey design&mdash;we created
            something the industry didn&apos;t have: <span className="text-white">a single instrument
            that begins with lived reality and ends with statistically defensible data.</span>
          </p>
          <p className="text-white text-2xl font-extralight pt-4">
            We didn&apos;t improve quant. We fixed it.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Leadership */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-16">
            The Founding Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Daniel Fazekas</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Founder &amp; CEO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Pioneer of &ldquo;insights without asking&rdquo;&mdash;built Bakamo&apos;s anthropological
                radar into a global social intelligence platform serving Fortune&nbsp;500 brands.
              </p>
            </div>
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Dr.&nbsp;Sandra Baumann</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Chief Methodologist</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Brings statistical precision and quantitative rigor&mdash;transforming cultural
                signals into representative, defensible measurement frameworks.
              </p>
            </div>
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Miki Varadi</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Head of Research</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Drives anthropological depth and narrative clarity across every engagement,
                ensuring cultural nuance is never lost to scale.
              </p>
            </div>
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Dan Foreman</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Strategic Advisor</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Industry veteran bridging strategic integration with market-facing execution
                across global research operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
