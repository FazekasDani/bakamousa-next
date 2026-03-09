import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Science",
  description:
    "The theoretical foundations behind our methodology\u2014Luhmann\u2019s systems theory, de Certeau\u2019s everyday life, and agency theory.",
  alternates: {
    canonical: "/science",
  },
  openGraph: {
    title: "Science | Bakamo",
    description:
      "The theoretical foundations behind our methodology\u2014Luhmann\u2019s systems theory, de Certeau\u2019s everyday life, and agency theory.",
  },
};

const FOUNDATIONS = [
  {
    number: "01",
    thinker: "Niklas Luhmann",
    framework: "Systems Theory",
    body: "Luhmann demonstrated that society operates as a network of self-referential communication systems\u2014each with its own logic, codes, and blind spots. Markets, media, healthcare, and politics are not monolithic; they are distinct systems that perceive the world through different lenses. Our methodology maps these system boundaries to understand why the same message resonates in one context and fails in another. We don\u2019t flatten complexity\u2014we navigate it.",
    insight:
      "Communication is not about intention. It\u2019s about how systems select, process, and reproduce meaning.",
  },
  {
    number: "02",
    thinker: "Michel de Certeau",
    framework: "The Practice of Everyday Life",
    body: "De Certeau distinguished between \u201cstrategies\u201d\u2014the structured rules imposed by institutions\u2014and \u201ctactics\u201d\u2014the improvised, creative ways ordinary people navigate those structures. Consumers are not passive recipients of brand messaging; they re-purpose, subvert, and reinterpret it according to their lived needs. Our radar captures these everyday tactics: the workarounds, the slang, the micro-rebellions that reveal how people actually engage with markets on the ground.",
    insight:
      "The powerful write the rules. The everyday person rewrites them\u2014and that\u2019s where real insight lives.",
  },
  {
    number: "03",
    thinker: "Agency Theory",
    framework: "Structure vs. Action",
    body: "The classical tension between structure and agency\u2014between the systems that constrain behavior and the capacity of individuals to act within, against, or beyond those constraints\u2014is central to how we interpret cultural discourse. We don\u2019t just measure what people say; we decode the structural pressures shaping what they can say, and the creative agency they exercise to push back. This dual lens prevents the common research failure of treating consumers as either entirely rational actors or entirely cultural products.",
    insight:
      "People are neither free agents nor passive subjects. Research must capture both the cage and the flight.",
  },
];

export default function SciencePage() {
  return (
    <main className="relative w-full min-h-screen bg-near-black text-text-primary overflow-x-hidden pb-24">
      <div className="grain-overlay" />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
            Theoretical Foundations
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white">
            The Science Behind<br />
            <span className="text-accent-glow font-light">the Method</span>
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
          <p className="mt-10 text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
            Our approach is not built on trend reports or industry best-practices.
            It is grounded in three intellectual traditions that fundamentally reframe
            how we understand communication, culture, and human behaviour.
          </p>
        </div>
      </section>

      {/* Foundations */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-28">
          {FOUNDATIONS.map((f) => (
            <div key={f.number}>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-accent font-mono text-sm">{f.number}</span>
                <p className="text-text-muted text-sm uppercase tracking-[0.15em]">
                  {f.framework}
                </p>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-light mb-8">
                {f.thinker}
              </h2>
              <p className="text-text-secondary text-base leading-relaxed max-w-3xl mb-6">
                {f.body}
              </p>
              <div className="border-l border-accent pl-6">
                <p className="text-white text-base font-light italic leading-relaxed">
                  {f.insight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="px-6 py-32 bg-dark-grey">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-8">
            Why This Matters
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-10 leading-snug">
            Theory without method is philosophy.<br />
            Method without theory is guessing.
          </h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto mb-6">
            These foundations ensure that every observation we make, every tension we
            identify, and every recommendation we deliver is rooted in a rigorous
            understanding of how meaning is created, contested, and transformed in culture.
          </p>
          <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just collect data. We understand the architecture of reality.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-12" />
          <p className="text-text-secondary text-lg font-light mb-8">
            Want to see how theory translates to practice?
          </p>
          <Link href="/contact" className="cta-button text-sm">
            Book a Strategy Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
