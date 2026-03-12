"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const HERO_BLIND_SPOTS = [
  {
    title: "Boardroom language",
    body: "Most research instruments still begin inside the company, so they inherit the company's assumptions before consumers ever enter the frame.",
  },
  {
    title: "Dashboard abstraction",
    body: "Automated summaries scale outputs, not understanding. They flatten the nuance that strategy actually depends on.",
  },
  {
    title: "Validation too early",
    body: "Teams move to quant before they have discovered the right tensions, vocabulary, or hypotheses to measure.",
  },
];

const HERO_SIGNALS = [
  {
    label: "Radar first",
    value: "Discovery before validation",
    body: "We start with unprompted discourse so the next study begins closer to reality.",
  },
  {
    label: "Human-led",
    value: "Interpretation, not word clouds",
    body: "PhD-level researchers decode tensions, context, and cultural meaning that software alone misses.",
  },
  {
    label: "Decision-ready",
    value: "Sharper quant and strategy",
    body: "The output is a stronger instrument, a clearer brief, and fewer expensive detours.",
  },
];

const TERRAIN_MARKERS = [
  {
    label: "2008",
    title: "Economic trust fractured",
    body: "People did not simply become more price-sensitive. Their expectations about stability, institutions, and aspiration changed underneath them.",
  },
  {
    label: "Algorithms",
    title: "Reality split into feeds",
    body: "Audiences now live inside parallel narrative systems, which means the old idea of one mainstream culture is no longer enough.",
  },
  {
    label: "Affordability",
    title: "Trade-offs became identity",
    body: "Household pressure now shapes self-image, status, and decision-making in ways standard trackers often under-read.",
  },
];

const WORKFLOW_COMPARISON = [
  {
    label: "Old workflow",
    body: "Brief -> questionnaire -> fieldwork -> post-rationalized insight",
  },
  {
    label: "Bakamo workflow",
    body: "Radar -> narrative map -> calibrated instrument -> stronger strategy",
  },
];

const METHOD_STEPS = [
  {
    number: "01",
    title: "Listen",
    subtitle: "The Radar",
    body: "Map the underground drivers of culture: the anxieties, identities, workarounds, and signals that shape decisions before anyone asks a question.",
  },
  {
    number: "02",
    title: "Measure",
    subtitle: "The Bridge",
    body: "Quantify the weight of those narratives across national panels, segments, and markets so strategic choices can be grounded in scale as well as meaning.",
  },
  {
    number: "03",
    title: "Stress-Test",
    subtitle: "The Insurance",
    body: "See whether your strategy can survive the terrain people actually live on, not the world the boardroom still assumes exists.",
  },
];

const INSTRUMENT_FAILURES = [
  {
    number: "I",
    title: "Eliminating coverage error",
    logic:
      "Traditional sampling overlooks the outlier communities that often define where a category is going next.",
    proof:
      "Bakamo surfaces fringe behaviors, emerging identities, and weak signals before they become obvious enough for everyone else to measure.",
  },
  {
    number: "II",
    title: "Fixing attribute mapping",
    logic:
      "If the important driver never makes it into the answer set, it does not exist in the data no matter how large the sample becomes.",
    proof:
      "We use social discourse to calibrate the language, options, and tensions that deserve to be measured instead of guessing them in a workshop.",
  },
  {
    number: "III",
    title: "Reducing response bias",
    logic:
      "Corporate language produces shallow response behavior because respondents do not hear themselves in the survey.",
    proof:
      "When the instrument mirrors the way people actually speak and frame their lives, engagement rises and the data gets cleaner.",
  },
];

const SUITE = [
  {
    label: "A",
    name: "TensionScope",
    role: "The Diagnostic",
    headline: "Decode the why behind the what.",
    body: "Standard research describes stated behavior. TensionScope identifies the emotional and psychological tensions that actually move people, categories, and markets.",
    best: "Best for category entry, innovation, and repositioning.",
  },
  {
    label: "B",
    name: "Bakamo Circle",
    role: "The Deep Map",
    headline: "See the ecosystem, not just the segment.",
    body: "Bakamo Circle maps personas, narratives, and the non-linear consumer journey to show how meaning actually moves through a category.",
    best: "Best for market segmentation and brand architecture.",
  },
  {
    label: "C",
    name: "Bakamo Tracking",
    role: "The Baseline",
    headline: "Measure what still matters tomorrow.",
    body: "We calibrate trackers against live discourse so long-term measurement reflects the real drivers of perception and behavior rather than stale internal categories.",
    best: "Best for brand reputation and long-term equity monitoring.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Researchers, not dashboard vendors",
    body: "Bakamo is built around interpretation. We use technology to find the material, then trained researchers do the work that software cannot do responsibly on its own.",
  },
  {
    title: "Tensions, not sentiment",
    body: "Positive versus negative is not a strategy. We identify the friction, hesitation, and psychological stop-signs that shape whether people move at all.",
  },
  {
    title: "Anthropological context",
    body: "Sarcasm, contradiction, coded language, and lived context matter. Bakamo reads discourse with cultural intelligence instead of flattening it into sentiment metrics.",
  },
];

const CTA_POINTS = [
  {
    label: "01",
    body: "Discovery before validation, so the next study starts from live reality.",
  },
  {
    label: "02",
    body: "A narrative map of the category, including fault lines and overlooked opportunities.",
  },
  {
    label: "03",
    body: "A sharper brief for tracking, segmentation, innovation, or repositioning work.",
  },
];

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Science", href: "/science" },
  { label: "In-House Teams", href: "/in-house-teams" },
  { label: "Contact", href: "/contact" },
];

const HERO_VIDEOS = [
  "/media/india-bg.mp4",
  "/media/protests-bg.mp4",
  "/media/ukstreet-bg.mp4",
  "/media/shopping-bg.mp4",
];

export default function WeFixedQuant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heroVideo] = useState(
    () => HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        ".hero-title",
        { y: 64, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.15, ease: "expo.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".hero-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "expo.out",
          delay: 0.75,
          transformOrigin: "left center",
        }
      );
      gsap.fromTo(
        ".hero-body",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.65 }
      );
      gsap.fromTo(
        ".hero-actions",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", delay: 0.95 }
      );
      gsap.fromTo(
        ".hero-panel",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.8 }
      );
      gsap.fromTo(
        ".hero-signal",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          delay: 1.05,
        }
      );

      gsap.to(".hero-video-layer", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="grain-overlay" />

      <section
        className="hero-section relative isolate overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-44"
        data-analytics-section="home_hero"
        data-analytics-label="Home Hero"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-layer absolute inset-0 h-full w-full object-cover opacity-30 select-none pointer-events-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-near-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,169,110,0.18),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_50%_78%,rgba(201,169,110,0.08),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.04] to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-end">
            <div>
              <h1
                className={`${cormorant.className} hero-title max-w-4xl text-[clamp(3.4rem,8vw,7rem)] leading-[0.88] tracking-tight text-white`}
              >
                Build on <span className="text-accent-glow">reality</span>
                <br />
                before you build the strategy.
              </h1>
              <div className="hero-line mt-10 h-px w-16 bg-accent" />
              <p className="hero-body mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-secondary md:text-xl">
                Bakamo gives leaders a ground-truth layer before they commit to
                positioning, innovation, brand tracking, or segmentation. We
                listen to real, unprompted consumer discourse, then turn it into
                sharper instruments and stronger strategic decisions.
              </p>
              <div className="hero-actions mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="cta-button text-sm"
                  data-analytics-event="cta_click"
                  data-analytics-label="Start the Inspection"
                  data-analytics-location="home_hero"
                  data-analytics-destination="/contact"
                >
                  Start the Inspection
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.16em] text-white transition-colors hover:border-accent hover:text-accent"
                  data-analytics-event="cta_click"
                  data-analytics-label="Explore the Toolkit"
                  data-analytics-location="home_hero"
                  data-analytics-destination="/solutions"
                >
                  Explore the Toolkit
                </Link>
              </div>
            </div>

            <aside
              className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
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
                Why most research breaks
              </p>
              <div className="mt-8 space-y-6">
                {HERO_BLIND_SPOTS.map((item) => (
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
                className="hero-signal rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
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

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent" />
        </div>
      </section>

      <section
        className="px-6 py-24 md:py-32"
        data-analytics-section="home_terrain"
        data-analytics-label="Home Terrain"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div>
            <p className="reveal text-sm uppercase tracking-[0.2em] text-accent">
              The terrain shifted
            </p>
            <h2
              className={`${cormorant.className} reveal mt-6 text-4xl leading-[0.94] text-white md:text-5xl lg:text-6xl`}
            >
              The world did not just shift. It fractured into parallel realities.
            </h2>
            <p className="reveal mt-8 max-w-xl text-lg font-light leading-relaxed text-text-secondary">
              We still build too many strategies for a stable mainstream that no
              longer exists. Economic trust, media systems, and everyday
              aspiration all moved. The old playbooks often did not.
            </p>
            <div className="reveal mt-10 border-l border-accent/60 pl-6">
              <p className="text-lg font-light italic leading-relaxed text-white">
                Culture shifts like tectonic plates: slowly, then all at once.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {TERRAIN_MARKERS.map((marker) => (
              <article
                key={marker.label}
                className="reveal rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">
                    {marker.label}
                  </span>
                  <h3 className="text-xl font-light text-white">
                    {marker.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {marker.body}
                </p>
              </article>
            ))}

            <div
              className="reveal rounded-[1.75rem] border border-accent/20 p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(145deg, rgba(201,169,110,0.12), rgba(20,20,20,0.94) 34%, rgba(10,10,10,0.98))",
              }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                The business reality
              </p>
              <h3 className="mt-4 text-2xl font-light leading-snug text-white">
                Would you build a high-rise without a geological survey?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Most organizations still validate a blueprint without testing the
                cultural soil underneath it. That is not insight. It is blueprint
                confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-dark-grey px-6 py-24 md:py-32"
        data-analytics-section="home_method"
        data-analytics-label="Home Method"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div>
            <p className="reveal text-sm uppercase tracking-[0.2em] text-accent">
              The Bakamo method
            </p>
            <h2 className="reveal mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              Discovery first. Measurement second. Strategy third.
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg font-light leading-relaxed text-text-secondary">
              Bakamo works like a front-end stress test for strategy. We inspect
              the ground before teams commit language, budget, and momentum to a
              single research direction.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {WORKFLOW_COMPARISON.map((item) => (
                <div
                  key={item.label}
                  className="reveal rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {METHOD_STEPS.map((step) => (
              <article
                key={step.number}
                className="reveal rounded-[1.75rem] border border-white/10 bg-black/20 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-light text-white">
                    {step.title}
                  </h3>
                  <span className="text-sm uppercase tracking-[0.14em] text-text-muted">
                    {step.subtitle}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24 md:py-32"
        data-analytics-section="home_failures"
        data-analytics-label="Home Failures"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="reveal text-sm uppercase tracking-[0.2em] text-accent">
              Research instrument failures
            </p>
            <h2 className="reveal mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              We fix the part of quant that usually breaks first.
            </h2>
            <p className="reveal mt-6 text-lg font-light leading-relaxed text-text-secondary">
              Bigger sample sizes do not rescue weak inputs. If the frame is
              wrong, the measurement only scales the mistake.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {INSTRUMENT_FAILURES.map((item) => (
              <article
                key={item.number}
                className="reveal rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <p className="font-mono text-sm text-accent">{item.number}</p>
                <h3 className="mt-5 text-2xl font-light leading-snug text-white">
                  {item.title}
                </h3>
                <div className="mt-6 space-y-5 border-t border-white/10 pt-6">
                  <p className="text-sm leading-relaxed text-text-primary">
                    <span className="font-medium text-accent">The logic:</span>{" "}
                    {item.logic}
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    <span className="font-medium text-accent">The proof:</span>{" "}
                    {item.proof}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-dark-grey/70 px-6 py-24 md:py-32"
        data-analytics-section="home_suite"
        data-analytics-label="Home Suite"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="reveal text-sm uppercase tracking-[0.2em] text-accent">
                The suite
              </p>
              <h2 className="reveal mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
                Three pathways to reality.
              </h2>
              <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
                Different briefs require different instruments. The common
                denominator is that each one starts from reality, not internal
                shorthand.
              </p>
            </div>
            <Link
              href="/solutions"
              className="reveal text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-white"
              data-analytics-event="cta_click"
              data-analytics-label="Explore all solutions"
              data-analytics-location="home_suite"
              data-analytics-destination="/solutions"
            >
              Explore all solutions
            </Link>
          </div>

          <div className="mt-16 grid gap-6 xl:grid-cols-3">
            {SUITE.map((item, index) => (
              <article
                key={item.label}
                className="reveal rounded-[1.75rem] border border-white/10 p-6 md:p-8"
                style={{
                  background:
                    index === 1
                      ? "linear-gradient(145deg, rgba(201,169,110,0.08), rgba(20,20,20,0.94) 26%, rgba(10,10,10,0.98))"
                      : "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(20,20,20,0.94) 30%, rgba(10,10,10,0.98))",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">
                    {item.label}
                  </span>
                  <div>
                    <h3 className="text-2xl font-light text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-lg font-medium leading-snug text-white">
                  {item.headline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-accent">
                  {item.best}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24 md:py-32"
        data-analytics-section="home_final_cta"
        data-analytics-label="Home Final CTA"
      >
        <div
          className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(160deg, rgba(201,169,110,0.12), rgba(20,20,20,0.95) 30%, rgba(10,10,10,0.98))",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="reveal text-sm uppercase tracking-[0.2em] text-accent">
                Why Bakamo feels different
              </p>
              <h2
                className={`${cormorant.className} reveal mt-6 text-4xl leading-[0.96] text-white md:text-5xl`}
              >
                We are not selling software theater.
              </h2>
              <p className="reveal mt-8 max-w-xl text-lg font-light leading-relaxed text-text-secondary">
                Most social intelligence platforms are designed to sell access
                to dashboards. Bakamo is designed to improve decisions.
              </p>
              <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
                The difference is not aesthetic. It is methodological. We treat
                cultural discourse as research material that has to be read,
                interpreted, challenged, and translated into action.
              </p>
            </div>

            <div className="grid gap-4">
              {DIFFERENTIATORS.map((item) => (
                <article
                  key={item.title}
                  className="reveal rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-accent/20 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(145deg, rgba(201,169,110,0.16), rgba(20,20,20,0.94) 34%, rgba(10,10,10,1))",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center">
            <div>
              <p className="reveal text-sm uppercase tracking-[0.2em] text-accent">
                The insurance policy
              </p>
              <h2
                className={`${cormorant.className} reveal mt-6 text-4xl leading-[0.96] text-white md:text-5xl lg:text-6xl`}
              >
                Stop building on sand.
              </h2>
              <p className="reveal mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
                Before the next tracker refresh, segmentation project,
                innovation screen, or repositioning brief, inspect the ground
                your customers are actually standing on.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6 md:p-8">
              <p className="reveal text-xs uppercase tracking-[0.18em] text-accent">
                What your team gets
              </p>
              <div className="mt-6 space-y-4">
                {CTA_POINTS.map((item) => (
                  <div key={item.label} className="reveal flex gap-4">
                    <span className="font-mono text-sm text-accent">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="cta-button mt-8 w-full text-sm sm:w-auto"
                data-analytics-event="cta_click"
                data-analytics-label="Start the Inspection"
                data-analytics-location="home_final_cta"
                data-analytics-destination="/contact"
              >
                Start the Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border-grey px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white">
              Bakamo
            </p>
            <p className="mt-2 text-sm text-text-muted">Build on reality.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.14em] text-text-muted">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Bakamo USA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
