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
  title: "Solutions",
  description:
    "TensionScope, Bakamo Circle, and Bakamo Tracking: three ways to ground strategy, innovation, and measurement in consumer reality.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Bakamo",
    description:
      "TensionScope, Bakamo Circle, and Bakamo Tracking: three ways to ground strategy, innovation, and measurement in consumer reality.",
  },
};

const GUIDE = [
  {
    title: "You need to understand the hidden force",
    pick: "TensionScope",
    body: "Use it when the behavior is visible but the emotional mechanism is still unclear.",
  },
  {
    title: "You need the whole map",
    pick: "Bakamo Circle",
    body: "Use it when the category, journey, or audience system needs to be re-seen from the ground up.",
  },
  {
    title: "You need a stronger baseline",
    pick: "Bakamo Tracking",
    body: "Use it when an ongoing tracker or measurement system needs to reflect what matters now, not what mattered years ago.",
  },
];

const SOLUTIONS = [
  {
    label: "A",
    name: "TensionScope",
    role: "The Diagnostic",
    headline: "Decode the why behind the what.",
    body: "Standard research tells you what people say. TensionScope identifies the emotional and psychological tensions that actually move behavior, categories, and markets.",
    best: "Category entry, innovation, and emotional repositioning.",
    lens: "Best when the team needs the mechanism beneath the behavior.",
    output: "Outputs a tension map, language system, and clearer strategic brief.",
    result: "Changes how the organization frames the problem before it over-invests in the wrong answer.",
  },
  {
    label: "B",
    name: "Bakamo Circle",
    role: "The Deep Map",
    headline: "See the ecosystem, not just the segment.",
    body: "Bakamo Circle maps personas, narratives, category codes, and the non-linear consumer journey to show how meaning actually moves through a market.",
    best: "Market segmentation and brand architecture.",
    lens: "Best when the organization needs a full reframing of the category landscape.",
    output: "Outputs a 360-degree map of audiences, narratives, and lived decision pathways.",
    result: "Changes how teams define the market, structure segmentation, and locate whitespace.",
  },
  {
    label: "C",
    name: "Bakamo Tracking",
    role: "The Baseline",
    headline: "Measure what still matters tomorrow.",
    body: "We calibrate trackers against live discourse so long-term measurement reflects the real drivers of perception and behavior rather than stale internal categories.",
    best: "Brand reputation and long-term equity monitoring.",
    lens: "Best when the business already measures, but is no longer sure the instrument is asking the right things.",
    output: "Outputs a sharper metric system, better attribute set, and more credible trendline.",
    result: "Changes what the business watches over time and how confidently leaders can act on those signals.",
  },
];

const SHARED_DISCIPLINES = [
  {
    title: "Reality first",
    body: "All three solutions start with unprompted discourse before the framework, tracker, or questionnaire gets locked in.",
  },
  {
    title: "Human interpretation",
    body: "The method depends on researchers reading, decoding, and validating the material rather than outsourcing judgment to software.",
  },
  {
    title: "Downstream impact",
    body: "These are not reporting products. They are decision tools designed to improve what your team does next.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-near-black pb-24 text-text-primary">
      <div className="grain-overlay" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] overflow-hidden">
        <div
          className="absolute left-[-7rem] top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(201, 169, 110, 0.16)" }}
        />
        <div
          className="absolute right-[-9rem] top-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        />
      </div>

      <section className="relative px-6 pb-20 pt-32 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.22em] text-accent">
                The Toolkit
              </p>
              <h1
                className={`${cormorant.className} max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.88] tracking-tight text-white`}
              >
                Three ways to get closer to reality.
              </h1>
              <div className="mt-10 h-px w-16 bg-accent" />
              <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
                Different strategic questions require different instruments. The
                common denominator is that each one starts from how people
                actually live, speak, and decide, not from internal shorthand.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="cta-button text-sm">
                  Book a Strategy Consult
                </Link>
                <Link
                  href="/technology"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.16em] text-white transition-colors hover:border-accent hover:text-accent"
                >
                  See the Engine
                </Link>
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
                How to choose the right instrument
              </p>
              <div className="mt-8 space-y-6">
                {GUIDE.map((item) => (
                  <div
                    key={item.title}
                    className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                  >
                    <p className="text-sm uppercase tracking-[0.14em] text-text-muted">
                      {item.pick}
                    </p>
                    <h2 className="mt-2 text-lg font-medium text-white">
                      {item.title}
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

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl space-y-8">
          {SOLUTIONS.map((solution, index) => (
            <article
              key={solution.label}
              className="rounded-[2rem] border border-white/10 p-8 md:p-10"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(140deg, rgba(201,169,110,0.1), rgba(20,20,20,0.95) 30%, rgba(10,10,10,0.98))"
                    : "linear-gradient(140deg, rgba(255,255,255,0.05), rgba(20,20,20,0.95) 28%, rgba(10,10,10,0.98))",
              }}
            >
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-start">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent">
                      {solution.label}
                    </span>
                    <p className="text-xs uppercase tracking-[0.16em] text-text-muted">
                      {solution.role}
                    </p>
                  </div>
                  <h2 className="mt-5 text-3xl font-light leading-tight text-white md:text-4xl">
                    {solution.name}
                  </h2>
                  <h3 className="mt-6 text-xl font-medium leading-snug text-white">
                    {solution.headline}
                  </h3>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
                    {solution.body}
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.14em] text-accent">
                    Best for: {solution.best}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">
                      Lens
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      {solution.lens}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">
                      Output
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      {solution.output}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">
                      What changes
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      {solution.result}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-dark-grey/70 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Shared discipline
            </p>
            <h2 className="mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              Different products. Same research standard.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SHARED_DISCIPLINES.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
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
            Not sure which pathway fits? Start with the decision you need to make.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
            We can help you decide whether the job is diagnosis, deep mapping,
            or calibrated measurement before the project scope gets fixed in the
            wrong shape.
          </p>
          <Link href="/contact" className="cta-button mt-10 text-sm">
            Book a Strategy Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
