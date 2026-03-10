import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For In-House Teams | Bakamo",
  description:
    "Smarter research, designed by reality. Align with consumer reality, access the invisible data layer, and stress-test internal insights.",
  alternates: {
    canonical: "/in-house-teams",
  },
  openGraph: {
    title: "For In-House Teams | Bakamo",
    description:
      "Smarter research, designed by reality. Align with consumer reality, access the invisible data layer, and stress-test internal insights.",
  },
};

const PILLARS = [
  {
    number: "01",
    title: "Smarter Research, Designed by Reality",
    intro:
      "Internal teams often operate within \u201cboardroom bubbles,\u201d relying on legacy segmentation models or corporate terminology that can distance research from actual consumer life. Bakamo reverses this sequence by listening first.",
    points: [
      {
        name: "Align with Consumer Reality",
        body: "We surface the actual language and framing people use, ensuring your downstream surveys measure what truly matters to consumers, not just what matters to your organization.",
      },
      {
        name: "Streamline Downstream Surveys",
        body: "By identifying the right questions early, we help you reduce unnecessary survey length and improve questionnaire design.",
      },
      {
        name: "Drives Higher Data Quality",
        body: "When respondents see their authentic lived experiences reflected in your survey options, \u201cstraight-lining\u201d drops and engagement peaks.",
      },
    ],
  },
  {
    number: "02",
    title: "Access the \u201cInvisible\u201d Data Layer",
    intro:
      "Standard social listening tools often prioritize volume and sentiment, frequently missing the nuanced conversations happening in difficult-to-capture digital spaces.",
    points: [
      {
        name: "Beyond Automated Tools",
        body: "We combine advanced technology with PhD-level social scientists to identify narratives and lived experiences that remain outside the scope of conventional dashboards.",
      },
      {
        name: "Unknown Unknowns",
        body: "Our \u201cRadar\u201d approach identifies early signals, niche communities, and overlooked tensions that reveal entirely new directions for strategy or innovation.",
      },
      {
        name: "Holistic Usage & Attitude Insights",
        body: "We uncover broader motivations and emerging behaviors within your category and adjacent spaces that traditional category-focused research misses.",
      },
    ],
  },
  {
    number: "03",
    title: "Strategic Insurance for Internal Insights",
    intro:
      "Bakamo acts as an independent \u201cground truth engine,\u201d helping in-house teams stress-test hypotheses and avoid internal echo chambers.",
    points: [
      {
        name: "Validate Internal Hypotheses",
        body: "Social conversations provide unfiltered evidence that can either validate or challenge your internal findings, acting as strategic insurance for high-stakes decisions.",
      },
      {
        name: "Bias Reduction",
        body: "Our method forces you to confront uncomfortable or unexpected themes that bubble up organically, rather than just confirming what your team already believes.",
      },
      {
        name: "Calibrate Tracking for Impact",
        body: "We integrate social intelligence with your quantitative systems to ensure your metrics measure the real drivers of consumer perception.",
      },
    ],
  },
  {
    number: "04",
    title: "Efficiency at the Pace of Business",
    intro:
      "Working with Bakamo enables in-house teams to spend research budgets more intelligently and move faster from exploration to action.",
    points: [
      {
        name: "Cost-Efficient Discovery",
        body: "We mine existing conversations to figure out what to ask, allowing you to avoid expensive \u201cresearch detours\u201d later in the project lifecycle.",
      },
      {
        name: "Rapid Intelligence Pulses",
        body: "Most projects are completed within a few weeks, cutting significant time from the overall research process.",
      },
      {
        name: "10-Day \u201cFirst Read\u201d",
        body: "Within 7\u201310 days, teams typically receive early narrative mapping and recommended next research steps to quickly evaluate where deeper research will create the most value.",
      },
    ],
  },
];

export default function InHouseTeamsPage() {
  return (
    <main className="relative w-full min-h-screen bg-near-black text-text-primary overflow-x-hidden pb-24">
      <div className="grain-overlay" />

      {/* ═══════ Hero ═══════ */}
      <section className="pt-32 md:pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
            For In-House Teams
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white">
            Smarter Research,
            <br />
            <span className="text-accent-glow font-light">
              Designed by Reality
            </span>
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
          <p className="mt-10 text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
            Internal teams often operate within &ldquo;boardroom bubbles,&rdquo;
            relying on legacy segmentation models or corporate terminology that
            can distance research from actual consumer life. Bakamo reverses
            this sequence by listening first.
          </p>
        </div>
      </section>

      {/* ═══════ Four Pillars ═══════ */}
      {PILLARS.map((pillar, pi) => (
        <section
          key={pillar.number}
          className={`px-6 py-28 ${pi % 2 === 1 ? "bg-dark-grey" : ""}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-accent font-mono text-sm">
                {pillar.number}
              </span>
              <h2 className="text-3xl md:text-4xl font-extralight text-white">
                {pillar.title}
              </h2>
            </div>
            <p className="text-text-secondary text-lg font-light leading-relaxed max-w-3xl mb-16">
              {pillar.intro}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {pillar.points.map((point, i) => (
                <div key={i} className="diff-card">
                  <h3 className="text-white text-lg font-medium mb-4 leading-snug">
                    {point.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══════ Final CTA ═══════ */}
      <section className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-12" />
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
            Stop Measuring Your Own Assumptions.
          </h2>
          <p className="text-text-secondary text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&rsquo;s calibrate your upcoming tracker, segmentation, or
            innovation pipeline against reality&mdash;starting with a 10-day
            First Read.
          </p>
          <Link href="/contact" className="cta-button text-sm">
            Schedule a Strategy Stress-Test
          </Link>
        </div>
      </section>
    </main>
  );
}
