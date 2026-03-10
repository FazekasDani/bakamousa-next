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
  title: "For In-House Teams",
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

const BLIND_SPOTS = [
  {
    title: "Inherited frameworks",
    body: "Segmentation models, tracker logic, and internal shorthand get reused long after the market has moved on.",
  },
  {
    title: "Automation theater",
    body: "Most listening platforms summarize at scale, but they do not interpret meaning, tension, or context with enough rigor.",
  },
  {
    title: "Late-stage correction",
    body: "By the time the real blind spots show up, the questionnaire is written and the budget is already committed.",
  },
];

const HERO_SIGNALS = [
  {
    label: "First read",
    value: "7-10 days",
    body: "An initial narrative map and next-question guidance before the bigger research program begins.",
  },
  {
    label: "Best use",
    value: "Pressure-test assumptions",
    body: "Useful ahead of tracker redesigns, segmentation work, innovation screens, or brand repositioning.",
  },
  {
    label: "Outcome",
    value: "Sharper research instruments",
    body: "The next study starts from how people actually speak and live, not from internal vocabulary.",
  },
];

const MANIFESTO_POINTS = [
  {
    title: "Human interpretation",
    body: "Our researchers read and decode conversations directly instead of relying on automated summaries no one has validated.",
  },
  {
    title: "Unknown unknowns",
    body: "Open listening surfaces tensions, edge cases, and weak signals that traditional briefs rarely capture.",
  },
  {
    title: "Adjacent behaviors",
    body: "We look outside tidy category boundaries to see what else is shaping decision-making and demand.",
  },
  {
    title: "Research calibration",
    body: "The output is not another dashboard. It is a smarter set of questions, concepts, and priorities.",
  },
];

const ENTRY_POINTS = [
  {
    title: "Before a tracker refresh",
    body: "Check whether the instrument still reflects live reality rather than last year's assumptions.",
  },
  {
    title: "Before segmentation fieldwork",
    body: "Refine categories, language, and hypotheses before a large quantitative investment locks them in.",
  },
  {
    title: "Before innovation screening",
    body: "See the tensions, workarounds, and unmet needs people reveal without prompting.",
  },
  {
    title: "When leadership needs an outside read",
    body: "Bring in an independent ground-truth layer when internal consensus may be masking important blind spots.",
  },
];

const OUTCOMES = [
  "Lower concept rejection rates",
  "Higher survey engagement",
  "Questions consumers recognize as relevant",
];

const CTA_DELIVERABLES = [
  "A narrative map of the category as consumers experience it",
  "Blind spots and tensions that deserve follow-up",
  "Recommended research questions for the next phase",
];

const PILLARS = [
  {
    number: "01",
    title: "Design Research Around Reality",
    intro:
      "Internal teams often operate within boardroom bubbles: inherited segmentation models, legacy terminology, and assumptions that gradually drift away from real consumer life. Bakamo reverses the sequence. We listen first.",
    points: [
      {
        name: "Align with Consumer Reality",
        body: "We surface the authentic language and mental framing consumers use when discussing your category, so downstream research measures what truly matters to people rather than what matters internally.",
      },
      {
        name: "Streamline Downstream Surveys",
        body: "By identifying the right questions early, we help teams eliminate unnecessary complexity and design questionnaires that are sharper, faster, and easier to complete.",
      },
      {
        name: "Improve Data Quality",
        body: "When respondents recognize their real experiences in the questions and answer choices, engagement improves and low-quality behavior drops.",
      },
    ],
  },
  {
    number: "02",
    title: "Access the Invisible Data Layer",
    intro:
      "Every year, new AI tools promise to revolutionize listening. Most deliver the same outputs: volume charts, sentiment scores, and word clouds that no strategist can act on. Bakamo focuses on what lies beneath.",
    points: [
      {
        name: "Beyond Automated Tools",
        body: "Our work combines proprietary technology with PhD-level social scientists who read and interpret conversations directly, revealing cultural narratives and lived experiences that algorithms miss.",
      },
      {
        name: "Identify the Unknown Unknowns",
        body: "Our Radar methodology surfaces early signals, niche communities, and overlooked tensions that reveal entirely new strategic opportunities.",
      },
      {
        name: "Expand the Lens",
        body: "Because people rarely discuss their lives within neat category boundaries, we uncover adjacent motivations and emerging behaviors that strongly influence your category.",
      },
    ],
  },
  {
    number: "03",
    title: "Strategic Insurance for Internal Insights",
    intro:
      "Even excellent research teams can become constrained by organizational assumptions or strategic momentum. Bakamo provides an independent ground-truth layer that helps teams stress-test their thinking.",
    points: [
      {
        name: "Validate Strategic Hypotheses",
        body: "Unprompted conversations provide unfiltered evidence that can confirm or challenge internal assumptions before major investments are made.",
      },
      {
        name: "Reduce Confirmation Bias",
        body: "Because the work starts with open listening rather than predefined questions, unexpected themes surface early and force teams to confront realities traditional research may overlook.",
      },
      {
        name: "Calibrate Tracking Systems",
        body: "We help integrate social intelligence with existing quantitative trackers so the metrics reflect the real drivers of perception and behavior.",
      },
    ],
  },
  {
    number: "04",
    title: "Efficiency at the Pace of Business",
    intro:
      "Bakamo helps in-house teams move from exploration to action faster. By mining existing conversations, we identify the questions worth asking before large research investments are made.",
    points: [
      {
        name: "Cost-Efficient Discovery",
        body: "Understanding what matters to consumers early helps teams avoid expensive research detours later in the project lifecycle.",
      },
      {
        name: "Rapid Intelligence Pulses",
        body: "Most projects are delivered within a few weeks, which makes it easier to integrate insights into live strategy cycles.",
      },
      {
        name: "The 10-Day First Read",
        body: "Within 7-10 days, teams typically receive an initial narrative map of the category landscape together with the next research moves worth making.",
      },
    ],
  },
];

export default function InHouseTeamsPage() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-near-black pb-24 text-text-primary">
      <div className="grain-overlay" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] overflow-hidden">
        <div
          className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(201, 169, 110, 0.16)" }}
        />
        <div
          className="absolute right-[-10rem] top-28 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        />
        <div
          className="absolute inset-x-0 top-0 h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(10,10,10,0))",
          }}
        />
      </div>

      <section className="relative px-6 pb-20 pt-32 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.22em] text-accent">
                For In-House Teams
              </p>
              <h1
                className={`${cormorant.className} max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.88] tracking-tight text-white`}
              >
                Make the research feel like the market again.
              </h1>
              <div className="mt-10 h-px w-16 bg-accent" />
              <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
                Bakamo helps internal insights, marketing, and innovation teams
                pressure-test their assumptions against unprompted consumer
                behavior before the next major study goes live.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                We read the conversations people have when no moderator, survey,
                or brand is shaping the frame. That gives your team a faster way
                to spot blind spots, validate strategy, and design sharper
                research.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="cta-button text-sm">
                  Schedule a Strategy Stress-Test
                </Link>
                <p className="max-w-sm text-sm uppercase tracking-[0.16em] text-text-muted">
                  10-day first read for tracker, segmentation, innovation, and
                  brand work
                </p>
              </div>
            </div>

            <aside
              className="relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              style={{
                background:
                  "linear-gradient(160deg, rgba(201,169,110,0.16), rgba(20,20,20,0.92) 38%, rgba(10,10,10,0.98))",
              }}
            >
              <div
                className="absolute inset-x-6 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0), rgba(201,169,110,0.9), rgba(255,255,255,0))",
                }}
              />
              <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                What internal teams are up against
              </p>
              <div className="mt-8 space-y-6">
                {BLIND_SPOTS.map((item) => (
                  <div
                    key={item.title}
                    className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                  >
                    <h2 className="text-lg font-medium text-white">
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

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {HERO_SIGNALS.map((signal) => (
              <div
                key={signal.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  {signal.label}
                </p>
                <p className="mt-4 text-2xl font-light leading-tight text-white">
                  {signal.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {signal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.94), rgba(10,10,10,0.98))",
          }}
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-accent">
                Human-first interpretation
              </p>
              <h2
                className={`${cormorant.className} text-4xl leading-[0.96] text-white md:text-5xl`}
              >
                AI dashboards promise the world. They deliver word clouds.
              </h2>
              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-text-secondary">
                The market is flooded with platforms that automatically generate
                insights no human has actually read, interpreted, or validated.
                Those systems scale noise rather than understanding.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
                Bakamo does the opposite. We combine advanced technology with
                human interpretation to surface the meanings, tensions, and
                narratives that automated tools consistently miss.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {MANIFESTO_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-medium text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {OUTCOMES.map((outcome) => (
              <span
                key={outcome}
                className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm text-white"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Four ways Bakamo changes the work
            </p>
            <h2 className="mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              A better front end for everything your team does next.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-text-secondary">
              Instead of another generic capability grid, think of these as the
              four places where grounded consumer reality improves the quality of
              your downstream decisions.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {PILLARS.map((pillar, index) => (
              <article
                key={pillar.number}
                className="rounded-[2rem] border border-white/10 p-8 md:p-10"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(20,20,20,0.96) 28%, rgba(10,10,10,0.98))"
                      : "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(20,20,20,0.96) 24%, rgba(10,10,10,0.98))",
                }}
              >
                <div className="grid gap-8 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:items-start">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-accent">
                        {pillar.number}
                      </span>
                      <div className="h-px w-12 bg-accent/70" />
                    </div>
                    <h3 className="mt-6 text-2xl font-light leading-tight text-white md:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-text-secondary">
                      {pillar.intro}
                    </p>
                    <p className="mt-8 text-xs uppercase tracking-[0.18em] text-text-muted">
                      Three ways this changes the work
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {pillar.points.map((point, pointIndex) => (
                      <div
                        key={point.name}
                        className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                      >
                        <p className="text-xs uppercase tracking-[0.16em] text-accent">
                          0{pointIndex + 1}
                        </p>
                        <h4 className="mt-4 text-lg font-medium leading-snug text-white">
                          {point.name}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {point.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-grey/70 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">
                Where this plugs in
              </p>
              <h2 className="mt-6 text-3xl font-extralight leading-tight text-white md:text-4xl">
                Most useful right before the expensive part starts.
              </h2>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-text-secondary">
                Bakamo is especially valuable at moments when internal teams are
                about to lock in language, hypotheses, or investment levels.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ENTRY_POINTS.map((entry) => (
                <div
                  key={entry.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-lg font-medium text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {entry.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] border border-accent/20 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(140deg, rgba(201,169,110,0.14), rgba(20,20,20,0.94) 34%, rgba(10,10,10,1))",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">
                The 10-day first read
              </p>
              <h2
                className={`${cormorant.className} mt-6 text-4xl leading-[0.96] text-white md:text-5xl`}
              >
                No dashboard will ever replace understanding.
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
                Before launching your next tracker, segmentation, or innovation
                program, calibrate it against how people actually talk about
                their lives. Start with a focused outside read of the market as
                it exists now.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                What your team walks away with
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
                {CTA_DELIVERABLES.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="cta-button mt-8 w-full text-sm sm:w-auto"
              >
                Schedule a Strategy Stress-Test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
