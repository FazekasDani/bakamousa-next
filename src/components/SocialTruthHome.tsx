import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import AtlasGlobe from "@/components/AtlasGlobe";
import ClientMarquee from "@/components/ClientMarquee";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const HOW_IT_WORKS = [
  {
    title: "Listen",
    body: "We read what people say to each other when no brand is in the room. Reddit, patient forums, TikTok, YouTube, the open web. Unprompted discourse, where no question has been asked.",
  },
  {
    title: "Map",
    body: "We surface the narratives, tensions, and decision drivers that actually structure the category. The constructs people use. The language they reach for. The questions they argue about.",
  },
  {
    title: "Measure",
    body: "Only then do we build the quantitative instrument. Calibrated against reality. Worded in consumer language. Measuring the variables that matter, not the ones a 21-year-old questionnaire assumed.",
  },
];

const WORK_MODES = [
  {
    title: "The Full Social Truth Study",
    body: "We run the entire engagement: discovery, instrument design, fielding, analysis, and findings. Sandra Baumann leads the quantitative work. You receive a complete study built on validated reality, not boardroom assumption.",
    best: "Best for: strategic decisions, category entry, repositioning, brand architecture.",
  },
  {
    title: "Better Surveys for Your Team",
    body: "Keep your in-house or agency quant capability. We deliver the discovery phase that makes your instruments sharper: the constructs, the language, the variables that should be in the survey before you write it.",
    best: "Best for: in-house research teams, brand teams with existing partners, agencies under pressure to improve quality.",
  },
];

export default function SocialTruthHome() {
  return (
    <div className="relative text-text-primary">
      <div className="grain-overlay" />

      <section
        className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-border-grey bg-near-black px-6 pb-20 pt-32 md:pt-40"
        data-analytics-section="home_hero"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            Social Truth
          </p>
          <h1
            className={`${cormorant.className} mt-8 max-w-6xl text-[clamp(4.4rem,10vw,9.5rem)] leading-[0.82] tracking-tight text-white`}
          >
            Social Truth transforms decisions.
          </h1>
          <p className="mt-10 max-w-3xl text-lg font-light leading-relaxed text-text-secondary md:text-xl">
            The conversation between people &mdash; what they say to each other when no brand is in
            the room &mdash; has already decided what your category allows, rejects, and rewards. We
            surface that reality, then build the quantitative instruments that measure it. Better
            quant, because reality was here first.
          </p>
          <Link
            href="#atlas"
            className="cta-button mt-10 text-sm"
            data-analytics-event="cta_click"
            data-analytics-label="See what Social Truth reveals"
            data-analytics-location="home_hero"
            data-analytics-destination="#atlas"
          >
            See what Social Truth reveals
          </Link>
        </div>
      </section>

      <section className="border-t border-border-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-light leading-tight text-white md:text-5xl">
            Social Truth is what the conversation has already decided.
          </h2>
          <div className="mt-16 divide-y divide-border-grey">
            <p className="py-10 text-2xl font-light leading-snug text-text-secondary">
              <strong className="font-medium text-white">It is not opinion.</strong> Opinion lives
              inside a person. Social Truth lives between people &mdash; in the shared meanings,
              tensions, and silent agreements that govern how groups actually behave.
            </p>
            <p className="py-10 text-2xl font-light leading-snug text-text-secondary">
              <strong className="font-medium text-white">It is not sentiment.</strong> Sentiment is a
              score applied after the fact. Social Truth is the architecture underneath &mdash; what
              a culture celebrates, what it will not forgive, what it has stopped saying out loud.
            </p>
            <p className="py-10 text-2xl font-light leading-snug text-text-secondary">
              <strong className="font-medium text-white">It moves first.</strong> Individuals catch
              up. Markets follow. Surveys arrive last. By the time conventional research registers a
              shift, the conversation that authorized it has already done its work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-4xl text-3xl font-light leading-tight text-white md:text-5xl">
            The instruments are precise. They are calibrated for the wrong target.
          </h2>
          <div className="mt-12 max-w-3xl space-y-7 text-xl font-light leading-relaxed text-text-secondary">
            <p>
              Surveys isolate the individual. Focus groups pull people out of their context.
              Trackers count mentions. Dashboards flatten meaning into a sentiment score. Every
              standard instrument probes what lives inside a person &mdash; stated intentions,
              narrow preferences &mdash; while ignoring the thing that actually moves them.
            </p>
            <p>
              The result is an industry that built precision for the surface, and left the layer
              that decides outcomes to luck.
            </p>
          </div>
          <p className="mt-14 max-w-4xl border-l border-accent pl-7 text-2xl font-light leading-snug text-white">
            Briefs encode assumptions. Expertise reinforces them. Surveys confirm them. The loop
            closes before the first respondent answers.
          </p>
        </div>
      </section>

      <section id="atlas" className="px-6 py-24 md:py-32" data-analytics-section="home_atlas">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className={`${cormorant.className} text-5xl leading-none text-white md:text-7xl`}>
            The Atlas of Social Truths.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
            Wherever the conversation lives, we have read it. Click a dot.
          </p>
        </div>
        <AtlasGlobe />
        <p className="mx-auto mt-16 max-w-2xl text-center text-2xl font-light text-white">
          The Atlas grows. The method does not change.
        </p>
        <div className="mx-auto max-w-6xl">
          <ClientMarquee />
        </div>
      </section>

      <section className="border-t border-border-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
              Listen. Map. Measure.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-text-secondary">
              Discovery first. Measurement second. Strategy third. The order of operations the rest
              of the industry has wrong.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {HOW_IT_WORKS.map((step) => (
              <article key={step.title} className="border-t border-border-grey pt-8">
                <h3 className="text-3xl font-light text-white">{step.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-text-secondary">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-16 max-w-3xl text-center text-2xl font-light leading-snug text-white">
            The result is a survey that measures the category as consumers live it &mdash; not as the
            industry assumes it.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/our-method"
              className="text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-white"
              data-analytics-event="cta_click"
              data-analytics-label="See how Social Truth is made"
              data-analytics-location="home_method"
              data-analytics-destination="/our-method"
            >
              See how Social Truth is made &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
              Two ways to work with us.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-text-secondary">
              Whether you need a complete study or stronger questions for your own team, the
              discovery phase is the same. Reality first, then measurement.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:divide-x md:divide-border-grey">
            {WORK_MODES.map((mode, index) => (
              <article key={mode.title} className={index === 1 ? "md:pl-10" : ""}>
                <h3 className="text-3xl font-light text-white">{mode.title}</h3>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">{mode.body}</p>
                <p className="mt-6 text-sm italic leading-relaxed text-text-muted">{mode.best}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center md:py-40" data-analytics-section="home_close">
        <div className="mx-auto max-w-5xl">
          <h2 className={`${cormorant.className} text-5xl leading-none text-white md:text-8xl`}>
            Build on reality.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-lg font-light leading-relaxed text-text-secondary md:text-xl">
            Listen first. Start with culture. Understand before you count. These are the oldest
            commitments in research. What is new is the ability to deliver on them &mdash; to detect
            and map Social Truth, and to build the instruments that measure it. The promise was
            always there. Now it can be kept.
          </p>
          <Link
            href="#atlas"
            className="cta-button mt-10 text-sm"
            data-analytics-event="cta_click"
            data-analytics-label="See what Social Truth reveals"
            data-analytics-location="home_close"
            data-analytics-destination="#atlas"
          >
            See what Social Truth reveals
          </Link>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-text-muted">
            One conversation. No deck. We will tell you whether the ground your next decision is
            built on actually holds.
          </p>
        </div>
      </section>
    </div>
  );
}
