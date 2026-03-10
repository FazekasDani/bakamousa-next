import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For In-House Teams | Bakamo",
  description:
    "Unfiltered consumer intelligence that complements your internal research. Human understanding, not AI dashboards.",
  alternates: {
    canonical: "/in-house-teams",
  },
  openGraph: {
    title: "For In-House Teams | Bakamo",
    description:
      "Unfiltered consumer intelligence that complements your internal research. Human understanding, not AI dashboards.",
  },
};

const PILLARS = [
  {
    number: "01",
    title: "Design Research Around Reality",
    intro:
      "Internal teams often operate within \u201cboardroom bubbles\u201d\u2014working with inherited segmentation models, legacy terminology, or internal assumptions that gradually drift away from real consumer life. Bakamo reverses the sequence. We listen first.",
    points: [
      {
        name: "Align with Consumer Reality",
        body: "We surface the authentic language and mental framing consumers use when discussing your category. This ensures that downstream research measures what truly matters to people\u2014not just what matters internally.",
      },
      {
        name: "Streamline Downstream Surveys",
        body: "By identifying the right questions early, we help teams eliminate unnecessary survey complexity and design questionnaires that are sharper, faster, and easier to complete.",
      },
      {
        name: "Improve Data Quality",
        body: "When respondents recognize their real experiences in survey questions and response options, engagement increases and low-quality behaviors like straight-lining drop dramatically.",
      },
    ],
  },
  {
    number: "02",
    title: "Access the \u201cInvisible\u201d Data Layer",
    intro:
      "Every year, new AI tools promise to \u201crevolutionize listening.\u201d Most deliver the same outputs: volume charts, sentiment scores, and word clouds that no strategist can act on. Bakamo focuses on what lies beneath.",
    points: [
      {
        name: "Beyond Automated Tools",
        body: "Our work combines proprietary technology with PhD-level social scientists who read and interpret conversations directly. This allows us to identify cultural narratives, lived experiences, and emerging meanings that algorithms cannot detect.",
      },
      {
        name: "Identify the Unknown Unknowns",
        body: "Our Radar methodology surfaces early signals, niche communities, and overlooked tensions that reveal entirely new strategic opportunities.",
      },
      {
        name: "Expand the Lens",
        body: "Because people rarely discuss their lives within neat category boundaries, we uncover motivations and emerging behaviors that often sit adjacent to your category\u2014but strongly influence it.",
      },
    ],
  },
  {
    number: "03",
    title: "Strategic Insurance for Internal Insights",
    intro:
      "Even the best internal research teams can become constrained by organizational assumptions or strategic momentum. Bakamo provides an independent ground-truth layer that helps teams stress-test their thinking.",
    points: [
      {
        name: "Validate Strategic Hypotheses",
        body: "Unprompted conversations provide unfiltered evidence that can confirm\u2014or challenge\u2014internal assumptions before major investments are made.",
      },
      {
        name: "Reduce Confirmation Bias",
        body: "Because our method starts with open listening rather than predefined questions, unexpected themes frequently surface\u2014forcing teams to confront realities that traditional research may overlook.",
      },
      {
        name: "Calibrate Tracking Systems",
        body: "We help integrate social intelligence with existing quantitative trackers to ensure that metrics measure the real drivers of consumer perception and behavior.",
      },
    ],
  },
  {
    number: "04",
    title: "Efficiency at the Pace of Business",
    intro:
      "Bakamo allows in-house teams to move from exploration to action much faster. By mining existing conversations, we identify the questions worth asking before large research investments are made.",
    points: [
      {
        name: "Cost-Efficient Discovery",
        body: "Understanding what matters to consumers early helps teams avoid expensive research detours later in the project lifecycle.",
      },
      {
        name: "Rapid Intelligence Pulses",
        body: "Most projects are delivered within a few weeks, allowing teams to integrate insights into ongoing strategy cycles.",
      },
      {
        name: "The 10-Day First Read",
        body: "Within 7\u201310 days, teams typically receive an initial narrative map of the category landscape together with recommended next research steps\u2014providing a rapid way to assess where deeper investigation will create the most value.",
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
            Human
            <br />
            <span className="text-accent-glow font-light">
              Understanding
            </span>
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
          <p className="mt-10 text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
            Unfiltered consumer intelligence for in-house insight teams.
          </p>
          <p className="mt-6 text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
            Bakamo helps internal insights, marketing, and innovation teams see
            the world through the eyes of their consumers. We analyze unprompted
            social conversations to uncover blind spots, validate strategic
            assumptions, and help teams design better research&mdash;faster and
            more efficiently.
          </p>
          <p className="mt-6 text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
            The result is research grounded in how people actually think, speak,
            and live, not how organizations imagine they do.
          </p>
        </div>
      </section>

      {/* ═══════ Human-First Manifesto ═══════ */}
      <section className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="manifesto-quote">
            AI dashboards promise the world.<br />
            They deliver word clouds.
          </p>
          <div className="section-divider mt-10 mb-10" />
          <div className="space-y-6 text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              The market is flooded with platforms that automatically generate
              &ldquo;insights&rdquo; no human has actually read, interpreted, or
              validated. These systems scale noise rather than understanding.
            </p>
            <p>
              Bakamo does the opposite. We combine advanced technology with human
              interpretation. Our researchers read, analyze, and decode thousands
              of real conversations to surface the meanings, tensions, and
              narratives that automated tools consistently miss.
            </p>
            <p>
              This produces a layer of consumer understanding that traditional
              surveys and standard social listening rarely access.
            </p>
            <p>
              A single unfiltered analysis allows teams to see their category as
              consumers experience it&mdash;and to ask better questions about the
              issues that actually matter to them.
            </p>
            <p className="text-white text-xl font-medium mt-8">The result:</p>
            <ul className="text-white text-lg font-medium space-y-3 list-none mt-4">
              <li>lower concept rejection rates</li>
              <li>higher engagement in surveys</li>
              <li>research that people recognize as relevant to their lives</li>
            </ul>
          </div>
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
            No dashboard will ever replace understanding.
          </h2>
          <p className="text-text-secondary text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Before launching your next tracker, segmentation, or innovation
            program, calibrate it against how people actually talk about their
            lives. Start with a 10-Day First Read.
          </p>
          <Link href="/contact" className="cta-button text-sm">
            Schedule a Strategy Stress-Test
          </Link>
        </div>
      </section>
    </main>
  );
}
