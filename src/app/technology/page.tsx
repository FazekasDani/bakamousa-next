import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Our proprietary harvesting engine and AI-Human hybrid\u2014LLMs + Qualitative + Quantitative expertise working in concert.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Technology | Bakamo",
    description:
      "Our proprietary harvesting engine and AI-Human hybrid\u2014LLMs + Qualitative + Quantitative expertise working in concert.",
  },
};

const ENGINE_LAYERS = [
  {
    number: "01",
    title: "Proprietary Harvesting",
    body: "Our expert researchers manually explore and identify highly relevant communities across the digital landscape, capturing critical, authentic conversations in niche public spaces that standard automated listening tools miss. We go where the algorithms don\u2019t\u2014forums, micro-communities, regional platforms\u2014to build an exhaustive map of organic discourse.",
  },
  {
    number: "02",
    title: "LLM-Augmented Semantic Analysis",
    body: "We deploy large language models to surface patterns, cluster emergent narratives, and accelerate the categorisation of millions of data points. But the models don\u2019t decide\u2014they propose. Every insight is validated by human researchers who understand the cultural, emotional, and rhetorical context that machines consistently miss.",
  },
  {
    number: "03",
    title: "Qualitative Deep Decoding",
    body: "Senior analysts apply anthropological and semiotic frameworks to decode the nuance behind the data: sarcasm, irony, cultural taboos, power dynamics, and the unspoken tensions that quantitative instruments cannot capture. This is where the \u201cso what\u201d lives.",
  },
  {
    number: "04",
    title: "Quantitative Calibration",
    body: "The decoded cultural signals are translated into statistically robust survey instruments\u2014calibrated against representative national panels. We ensure every attribute, driver, and segment we measure is grounded in reality, not inherited from legacy questionnaires.",
  },
];

const CAPABILITIES = [
  {
    title: "Omnichannel, Human-Led Harvesting",
    body: "We manually explore and identify communities across the digital landscape\u2014capturing authentic conversations that standard automated tools miss.",
  },
  {
    title: "Senior Human-in-the-Loop Analysis",
    body: "We invest significant qualitative resources into actively reading, understanding, and empathetically decoding the nuanced reality of the community.",
  },
  {
    title: "Anthropological Curation & Semantic Decoding",
    body: "We apply rigorous cultural frameworks to curate raw data, conducting deep semantic analysis to uncover hidden emotional tensions and true drivers.",
  },
  {
    title: "Rigorous & Ethical Compliance",
    body: "We operate strictly within ESOMAR & EPHMRA guidelines to ensure privacy protection and compliant reporting.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="relative w-full min-h-screen bg-near-black text-text-primary overflow-x-hidden pb-24">
      <div className="grain-overlay" />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">The Engine</p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white">
            AI-Human Hybrid<br />
            <span className="text-accent-glow font-light">Intelligence</span>
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
          <p className="mt-10 text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
            Our proprietary engine combines large language models, qualitative expertise, and
            quantitative rigour into a single pipeline. Machines propose. Researchers decide.
            Statistics validate.
          </p>
        </div>
      </section>

      {/* The Four-Layer Engine */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">The Pipeline</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-20">
            Four Layers of Intelligence
          </h2>
          <div className="space-y-20">
            {ENGINE_LAYERS.map((layer) => (
              <div key={layer.number} className="method-step">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-accent font-mono text-sm">{layer.number}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-light">{layer.title}</h3>
                </div>
                <p className="text-text-secondary font-light leading-relaxed max-w-2xl">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Researcher Capabilities */}
      <section className="px-6 pb-32 bg-dark-grey py-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Our Researchers</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-16 max-w-2xl">
            Researchers, not coders. Perspective, not software.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CAPABILITIES.map((c, i) => (
              <div key={i} className="diff-card">
                <span className="text-accent text-sm font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-white text-lg font-medium mb-4 leading-snug">{c.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-12" />
          <p className="text-text-secondary text-lg font-light mb-8">
            See the engine in action.
          </p>
          <Link href="/contact" className="cta-button text-sm">
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
