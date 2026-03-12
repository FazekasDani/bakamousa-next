import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Bakamo's AI-human research engine: harvesting, semantic analysis, qualitative decoding, and quantitative calibration in one pipeline.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Technology | Bakamo",
    description:
      "Bakamo's AI-human research engine: harvesting, semantic analysis, qualitative decoding, and quantitative calibration in one pipeline.",
  },
};

const SYSTEM_SIGNALS = [
  {
    label: "Role of AI",
    value: "Propose",
    body: "Models accelerate pattern detection and clustering, but they do not own the final judgment.",
  },
  {
    label: "Role of researchers",
    value: "Decide",
    body: "Human analysts validate meaning, context, nuance, and cultural signal before anything becomes an insight.",
  },
  {
    label: "Role of quant",
    value: "Calibrate",
    body: "Signals are translated into instruments that can be tested, scaled, and used with confidence.",
  },
];

const ENGINE_LAYERS = [
  {
    number: "01",
    title: "Proprietary harvesting",
    body: "Researchers manually identify relevant communities across the digital landscape, including the niche public spaces standard automation rarely sees.",
    proof: "The result is broader, more authentic coverage of how the category actually gets discussed.",
  },
  {
    number: "02",
    title: "LLM-augmented analysis",
    body: "Large language models help surface patterns, cluster narratives, and accelerate semantic sorting across very large volumes of discourse.",
    proof: "The models speed the work up, but they are never treated as the final authority on meaning.",
  },
  {
    number: "03",
    title: "Qualitative decoding",
    body: "Senior analysts apply anthropological and semiotic lenses to decode sarcasm, irony, taboo, power, and the unspoken tensions hiding inside the material.",
    proof: "This is where the so-what emerges and where shallow automation usually fails.",
  },
  {
    number: "04",
    title: "Quantitative calibration",
    body: "Cultural signals are translated into robust survey instruments and measurement systems grounded in reality rather than inherited questionnaire logic.",
    proof: "That gives the business a cleaner way to validate, track, and act at scale.",
  },
];

const OPERATING_RULES = [
  {
    title: "Machines propose, humans adjudicate",
    body: "Bakamo uses AI for acceleration, not as a substitute for trained cultural judgment.",
  },
  {
    title: "Coverage beats convenience",
    body: "The system is designed to find relevant discourse where it actually lives, not just where APIs make collection easy.",
  },
  {
    title: "Ethics are built into the workflow",
    body: "We operate within ESOMAR and EPHMRA standards so the work stays rigorous, privacy-conscious, and defensible.",
  },
  {
    title: "Outputs must be decision-ready",
    body: "The point is not to produce dashboards. The point is to improve briefs, trackers, segmentation systems, and strategic choices.",
  },
];

const RESEARCH_CAPABILITIES = [
  "Human-led community discovery across niche and mainstream channels",
  "Senior researcher review of model outputs and semantic clusters",
  "Anthropological and semiotic interpretation of discourse",
  "Calibration of qualitative signals into quantitative instruments",
];

export default function TechnologyPage() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-near-black pb-24 text-text-primary">
      <div className="grain-overlay" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] overflow-hidden">
        <div
          className="absolute left-[-7rem] top-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(201, 169, 110, 0.16)" }}
        />
        <div
          className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        />
      </div>

      <section
        className="relative px-6 pb-20 pt-32 md:pb-24 md:pt-44"
        data-analytics-section="technology_hero"
        data-analytics-label="Technology Hero"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-end">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.22em] text-accent">
                The Engine
              </p>
              <h1
                className={`${cormorant.className} max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.88] tracking-tight text-white`}
              >
                Machines propose. Researchers decide.
              </h1>
              <div className="mt-10 h-px w-16 bg-accent" />
              <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
                Bakamo&apos;s technology stack is a research pipeline, not a software
                theater demo. It combines harvesting, LLM-assisted analysis,
                qualitative interpretation, and quantitative calibration into a
                single system designed to improve decisions.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="cta-button text-sm"
                  data-analytics-event="cta_click"
                  data-analytics-label="Book a Demo"
                  data-analytics-location="technology_hero"
                  data-analytics-destination="/contact"
                  data-analytics-service-area="technology"
                >
                  Book a Demo
                </Link>
                <p className="max-w-sm text-sm uppercase tracking-[0.16em] text-text-muted">
                  Built to find signal, preserve nuance, and make downstream
                  measurement stronger
                </p>
              </div>
            </div>

            <aside
              className="overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              style={{
                background:
                  "linear-gradient(160deg, rgba(201,169,110,0.16), rgba(20,20,20,0.92) 38%, rgba(10,10,10,0.98))",
              }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                What the system actually does
              </p>
              <div className="mt-8 space-y-6">
                {SYSTEM_SIGNALS.map((item) => (
                  <div
                    key={item.label}
                    className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-text-muted">
                      {item.label}
                    </p>
                    <h2 className="mt-2 text-2xl font-light text-white">
                      {item.value}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24 md:py-28"
        data-analytics-section="technology_pipeline"
        data-analytics-label="Technology Pipeline"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              The pipeline
            </p>
            <h2 className="mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              Four layers of intelligence working in sequence.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {ENGINE_LAYERS.map((layer, index) => (
              <article
                key={layer.number}
                className="rounded-[1.75rem] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(145deg, rgba(201,169,110,0.1), rgba(20,20,20,0.95) 32%, rgba(10,10,10,0.98))"
                      : "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(20,20,20,0.95) 30%, rgba(10,10,10,0.98))",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">
                    {layer.number}
                  </span>
                  <h3 className="text-2xl font-light text-white">
                    {layer.title}
                  </h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-text-secondary">
                  {layer.body}
                </p>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm leading-relaxed text-text-primary">
                    <span className="font-medium text-accent">What this protects against:</span>{" "}
                    {layer.proof}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-dark-grey/70 px-6 py-24 md:py-28"
        data-analytics-section="technology_doctrine"
        data-analytics-label="Technology Doctrine"
      >
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Operating doctrine
            </p>
            <h2 className="mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              The system is designed to stay honest.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-text-secondary">
              Bakamo&apos;s technology matters because of the rules around it. The
              workflow is built to preserve nuance, protect rigor, and avoid the
              false confidence that shallow automation creates.
            </p>

            <div
              className="mt-10 rounded-[1.75rem] border border-accent/20 p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(145deg, rgba(201,169,110,0.12), rgba(20,20,20,0.94) 34%, rgba(10,10,10,0.98))",
              }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                Core research capabilities
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
                {RESEARCH_CAPABILITIES.map((capability) => (
                  <li key={capability} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {OPERATING_RULES.map((rule) => (
              <div
                key={rule.title}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
              >
                <h3 className="text-lg font-medium text-white">{rule.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24"
        data-analytics-section="technology_final_cta"
        data-analytics-label="Technology Final CTA"
      >
        <div
          className="mx-auto max-w-5xl rounded-[2rem] border border-accent/20 p-8 text-center md:p-12"
          style={{
            background:
              "linear-gradient(145deg, rgba(201,169,110,0.14), rgba(20,20,20,0.94) 36%, rgba(10,10,10,1))",
          }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Next step
          </p>
          <h2
            className={`${cormorant.className} mt-6 text-4xl leading-[0.96] text-white md:text-5xl`}
          >
            See the engine in action, not just described in theory.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
            We can walk you through how harvesting, AI-assisted analysis,
            qualitative interpretation, and quantitative calibration work
            together on a real strategic question.
          </p>
          <Link
            href="/contact"
            className="cta-button mt-10 text-sm"
            data-analytics-event="cta_click"
            data-analytics-label="Book a Demo"
            data-analytics-location="technology_final_cta"
            data-analytics-destination="/contact"
            data-analytics-service-area="technology"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
