import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For In-House Teams | Bakamo",
  description:
    "Calibration & ground truth for corporate insights teams. Align your research with unfiltered reality.",
  alternates: {
    canonical: "/in-house-teams",
  },
  openGraph: {
    title: "For In-House Teams | Bakamo",
    description:
      "Calibration & ground truth for corporate insights teams. Align your research with unfiltered reality.",
  },
};

const SERVICE_LAYERS = [
  {
    number: "01",
    name: "The Strategic Diagnostic",
    subtitle: "The Scan",
    purpose:
      "A rapid audit to find hidden friction points and evaluate your current market stance.",
    deliverable:
      "A Category TensionScope\u2122 to identify cultural and competitive tensions ripe for disruption.",
  },
  {
    number: "02",
    name: "The Construction Suite",
    subtitle: "Strategic Projects",
    purpose:
      "A highly collaborative phase to turn insights into actionable, road-tested strategies.",
    deliverable:
      "Detailed personas, market landscapes, and a Validated Strategy Playbook with tested messaging.",
  },
  {
    number: "03",
    name: "Strategic Synthesis",
    subtitle: "Maintenance Engine",
    purpose:
      "A partnership to keep your \u201cear to the ground\u201d long after strategy launch.",
    deliverable:
      "AI-enabled trackers and custom dashboards that separate meaningful cultural signals from noise.",
  },
];

const BENEFITS = [
  {
    title: "Embed the \u201cWhy\u201d into the \u201cWhat\u201d",
    body: "Understand the emotional drivers behind the data points before you even field the quantitative study.",
  },
  {
    title: "Drive Higher Data Quality",
    body: "When respondents see their authentic lived experiences reflected in your survey options, \u201cstraight-lining\u201d and drop-offs disappear.",
  },
  {
    title: "Speed to Culture",
    body: "Bypass lengthy exploratory qualitative phases by harvesting real-time cultural topics to design your questionnaire.",
  },
  {
    title: "Strategic Insurance",
    body: "We calculate if your strategy can survive on the detected terrain, identifying \u201ccultural fault lines\u201d before they lead to market failure.",
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
            Calibration &amp;&nbsp;Ground&nbsp;Truth
            <br />
            <span className="text-accent-glow font-light">
              for In-House Teams
            </span>
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
        </div>
      </section>

      {/* ═══════ Section 1 — The Provocation ═══════ */}
      <section className="px-6 pb-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
            The Reality Check
          </p>
          <h2 className="text-3xl md:text-5xl font-extralight text-white mb-10">
            Are You Asking the Right Questions?
          </h2>
          <div className="space-y-6 text-text-secondary text-lg font-light leading-relaxed">
            <p>
              Most research fails not because of bad data, but because the
              questions were wrong from the start. Traditional quantitative
              research often begins in a boardroom, fueled by internal
              assumptions.
            </p>
            <p>
              When you spend six figures validating what leadership already
              believes, using corporate language your customers don&rsquo;t use,
              you aren&rsquo;t measuring the market&mdash;you&rsquo;re measuring
              your own bias.
            </p>
            <p className="text-white text-xl font-medium italic">
              Statistically significant answers to culturally insignificant
              questions.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ Section 2 — The Solution ═══════ */}
      <section className="px-6 pb-28 bg-dark-grey py-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
            How We Help
          </p>
          <h2 className="text-3xl md:text-5xl font-extralight text-white mb-10">
            Align Your Research with Unfiltered Reality
          </h2>
          <div className="space-y-8 text-text-secondary text-lg font-light leading-relaxed">
            <div>
              <h3 className="text-white text-lg font-medium mb-2">
                We Reverse the Sequence
              </h3>
              <p>
                We don&rsquo;t start with a blank survey; we start with a
                &ldquo;Radar&rdquo; that captures unprompted, authentic audience
                reality.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-2">
                Discover the &ldquo;Unknown Unknowns&rdquo;
              </h3>
              <p>
                By analyzing organic conversations where consumers speak freely
                without research interference, we identify the exact language,
                emotional tensions, and hidden decision-engines they use when no
                brand is watching.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-2">
                Grounded Instrument Design
              </h3>
              <p>
                We harvest every organic friction point to ensure your survey
                options are exhaustive. We turn &ldquo;real-world rants&rdquo;
                into statistically weighted metrics, ensuring your research is
                worth the investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Section 3 — Service Layers ═══════ */}
      <section className="px-6 py-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
            Our Service Layers
          </p>
          <h2 className="text-3xl md:text-5xl font-extralight text-white mb-20">
            Modular Intelligence to Support Your Cycle
          </h2>
          <div className="space-y-20">
            {SERVICE_LAYERS.map((layer) => (
              <div key={layer.number} className="method-step">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-accent font-mono text-sm">
                    {layer.number}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-light">
                    {layer.name}
                  </h3>
                  <span className="text-text-muted text-sm hidden md:inline">
                    &mdash; {layer.subtitle}
                  </span>
                </div>
                <div className="space-y-2 max-w-2xl">
                  <p className="text-text-primary text-sm leading-relaxed">
                    <span className="text-accent font-medium">Purpose:</span>{" "}
                    {layer.purpose}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent font-medium">
                      Deliverable:
                    </span>{" "}
                    {layer.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Section 4 — Benefits ═══════ */}
      <section className="px-6 py-28 bg-dark-grey">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
            The Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-extralight text-white mb-16">
            Why Grounded Quantification Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="diff-card">
                <span className="text-accent text-sm font-mono mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="text-white text-lg font-medium mb-4 leading-snug">
                  {b.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Final CTA ═══════ */}
      <section className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-12" />
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
            Protect Your Investment from Blind Spots.
          </h2>
          <p className="text-text-secondary text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Don&rsquo;t bet your next high-stakes decision on a boardroom
            hypothesis. Let&rsquo;s calibrate your upcoming tracker,
            segmentation, or innovation pipeline against reality.
          </p>
          <Link href="/contact" className="cta-button text-sm">
            Schedule a Strategy Stress-Test
          </Link>
        </div>
      </section>
    </main>
  );
}
