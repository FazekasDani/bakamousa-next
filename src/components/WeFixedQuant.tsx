"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════
   WeFixedQuant — premium research agency landing
   ═══════════════════════════════════════════════════════════ */

// ── Data ─────────────────────────────────────────────────

const SUITE = [
  {
    label: "A",
    name: "TensionScope\u2122",
    role: "The Diagnostic",
    headline: `Decode the \u201cWhy\u201d behind the \u201cWhat.\u201d`,
    body: `Standard research tells you what people say. TensionScope identifies the emotional and psychological tensions\u2014the \u201cpush and pull\u201d\u2014that actually drive their behavior. By mapping conversations against universal human needs (Security, Autonomy, Belonging), we provide a Tension Index to anticipate market shifts before they happen.`,
    best: "Category entry, innovation, and emotional repositioning.",
  },
  {
    label: "B",
    name: "Bakamo Circle\u2122",
    role: "The Deep Map",
    headline: "360\u00b0 Cultural Intelligence.",
    body: "A full-spectrum analysis of the consumer ecosystem. We move beyond basic demographics to map authentic Personas, organic Narratives, and the non-linear Consumer Journey. This is the qualitative \u201csoul\u201d of your market, scaled into quantitative reality.",
    best: "Market segmentation and brand architecture.",
  },
  {
    label: "C",
    name: "Bakamo Tracking\u2122",
    role: "The Baseline",
    headline: "Measure what matters.",
    body: "Traditional trackers are sterile. Ours are grounded. By using social intelligence to calibrate your tracking instrument, we ensure you are measuring the drivers that actually move the needle, weighted against representative, national panels.",
    best: "Brand reputation and long-term equity monitoring.",
  },
];

const RIGOR_POINTS = [
  {
    number: "I",
    title: "Eliminating Coverage Error",
    logic:
      'Traditional sampling ignores the \u201cOutlier\u201d segments who define the future.',
    proof:
      "While the industry looked at Gen\u00a0Z for NA beverages, our radar found the Recovery Community. We captured a market that standard trackers simply didn\u2019t see.",
  },
  {
    number: "II",
    title: "Exhaustive Attribute Mapping",
    logic:
      'If a driver isn\u2019t in your \u201cTop\u00a010\u201d list, it doesn\u2019t exist in your data.',
    proof:
      "We use social discourse to calibrate your instrument. We don\u2019t guess the multiple-choice options; we harvest them from the street.",
  },
  {
    number: "III",
    title: "Reducing Response Bias",
    logic:
      'Corporate language leads to \u201cSatisficing\u201d\u2014mindless clicking.',
    proof:
      "We use Natural Language Synthesis to mirror authentic vernacular. When respondents see their reality reflected in the survey, data quality peaks.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Cognitive Architecture",
    body: "We categorize the chaos of social discourse into a rigorous framework of Universal Human Needs and Emotional Tensions.",
  },
  {
    title: "Decoding Friction, Not Sentiment",
    body: "Most tools measure \u2018Positive vs.\u00a0Negative\u2019\u2014a metric that rarely predicts behavior. We identify the deep psychological barriers and cultural \u2018stop-signs\u2019 that actually derail the consumer journey. We don\u2019t just tell you how people feel; we tell you what is stopping them from acting.",
  },
  {
    title: "Anthropological Context",
    body: "Algorithms miss sarcasm. Our PhD-led researchers decode the nuance machines ignore.",
  },
];

const OUTCOME_STEPS = [
  {
    number: "01",
    title: "Listen",
    subtitle: "The Radar",
    body: "Map the \u201cunderground\u201d drivers. Discover what you didn\u2019t know to ask.",
  },
  {
    number: "02",
    title: "Measure",
    subtitle: "The Bridge",
    body: "Calculate the statistical weight of those narratives across national panels.",
  },
  {
    number: "03",
    title: "Stress-Test",
    subtitle: "The Insurance",
    body: "Identify cultural fault lines to see if your strategy can survive the real world.",
  },
];

// ── Hero background videos ──────────────────────────────
const HERO_VIDEOS = [
  "/media/india-bg.mp4",
  "/media/ukstreet-bg.mp4",
  "/media/shopping-bg.mp4",
];

// ── Component ────────────────────────────────────────────

export default function WeFixedQuant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heroVideo] = useState(
    () => HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        ".hero-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.7 }
      );
      gsap.fromTo(
        ".hero-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "expo.out", delay: 1.0 }
      );

      gsap.to(".hero-bg-gradient", {
        yPercent: 30,
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
    <div ref={containerRef}>
      <div className="grain-overlay" />

      {/* ════════ SECTION 1 — THE PROVOCATION ════════ */}
      <section className="hero-section full-section relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero-bg-gradient absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#111]/40 to-[#0a0a0a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-[clamp(3rem,10vw,8rem)] font-extralight leading-[0.95] tracking-tight text-white">
            We Fixed <span className="text-accent-glow font-light">Quant</span>
          </h1>
          <div className="hero-line w-16 h-px bg-accent mx-auto mt-8 origin-left" />
          <p className="hero-subtitle mt-8 text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            48% of executives report that traditional quant fails to deliver actionable insights
            because it lacks contextual depth.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
        </div>
      </section>

      {/* ════════ PROVOCATION — BODY ════════ */}
      <section className="full-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal manifesto-quote">
            Most surveys are just the boardroom talking to itself.
          </p>
          <div className="reveal mt-12 space-y-6 text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              You spend six figures to confirm your own assumptions in language your customers
              don&rsquo;t use.
            </p>
            <p className="text-text-muted">
              It&rsquo;s elegant data built on a blind spot.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 2 — THE NEW STANDARD ════════ */}
      <section className="full-section bg-dark-grey">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-6">
            The New Standard
          </p>
          <h2 className="reveal text-[clamp(1.75rem,4vw,3.5rem)] font-extralight leading-tight text-white">
            We set a new standard.
          </h2>
          <div className="reveal mt-10 space-y-6 text-text-secondary text-lg font-light leading-relaxed">
            <p className="text-text-primary text-xl">
              We don&rsquo;t start with a blank survey. We start with a Radar.
            </p>
            <p>
              We capture unprompted, authentic reality before a single question is asked.
            </p>
            <p>
              We surface the &ldquo;unknown unknowns&rdquo;&mdash;the lived experience that research
              interference usually kills.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 3 — THE SUITE ════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">The Suite</p>
          <h2 className="reveal text-3xl md:text-5xl font-extralight text-white mb-20">
            Three Pathways to Reality
          </h2>
          <div className="space-y-16">
            {SUITE.map((s) => (
              <div key={s.label} className="reveal diff-card relative">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-accent font-mono text-sm">{s.label}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-light">{s.name}</h3>
                  <span className="text-text-muted text-sm hidden md:inline">&mdash; {s.role}</span>
                </div>
                <p className="text-white text-lg font-medium mt-4 mb-4">{s.headline}</p>
                <p className="text-text-secondary text-sm leading-relaxed max-w-3xl">{s.body}</p>
                <p className="mt-4 text-accent text-xs uppercase tracking-[0.15em]">
                  Best for: {s.best}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SECTION 4 — SCIENCE OF RIGOR ════════ */}
      <section className="py-32 px-6 bg-dark-grey">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">
            The Science of Rigor
          </p>
          <h2 className="reveal text-3xl md:text-4xl font-extralight text-white mb-20 max-w-3xl">
            We solve the three critical failures of the research instrument.
          </h2>
          <div className="space-y-20">
            {RIGOR_POINTS.map((r) => (
              <div key={r.number} className="reveal method-step">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-accent font-mono text-sm">{r.number}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-light">{r.title}</h3>
                </div>
                <div className="space-y-3 max-w-2xl">
                  <p className="text-text-primary text-sm leading-relaxed">
                    <span className="text-accent font-medium">The Logic:</span> {r.logic}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent font-medium">The Proof:</span> {r.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SECTION 5 — THE DIFFERENTIATOR ════════ */}
      <section className="full-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal manifesto-quote">
            We Are Researchers, Not Coders.
          </p>
          <div className="section-divider reveal mt-10" />
          <div className="reveal mt-10">
            <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
              To most leaders, social listening is a &ldquo;creepy&rdquo; vanity project&mdash;60%
              bot noise and shallow word clouds. Most tools are built by software engineers to sell
              subscriptions. We fixed it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className="reveal diff-card">
                <span className="text-accent text-sm font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-white text-lg font-medium mb-4 leading-snug">{d.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SECTION 6 — THE OUTCOME ════════ */}
      <section className="py-32 px-6 bg-dark-grey">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">
            The Outcome
          </p>
          <h2 className="reveal text-3xl md:text-5xl font-extralight text-white mb-20">
            Strategic Insurance
          </h2>
          <div className="space-y-20">
            {OUTCOME_STEPS.map((m) => (
              <div key={m.number} className="reveal method-step">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-accent font-mono text-sm">{m.number}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-light">{m.title}</h3>
                  <span className="text-text-muted text-sm hidden md:inline">&mdash; {m.subtitle}</span>
                </div>
                <p className="text-text-secondary font-light leading-relaxed max-w-2xl">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLOSING CTA ════════ */}
      <section className="full-section relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.05)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-8">
            Once Your Quant is Fixed, You Can
          </p>
          <h2 className="reveal text-[clamp(2.5rem,7vw,6rem)] font-extralight leading-[0.95] text-white">
            <span className="text-accent-glow font-light">Build on Reality.</span>
          </h2>
          <div className="reveal mt-16 flex justify-center">
            <a href="/contact" className="pulse-cta group relative flex items-center justify-center w-40 h-40">
              <span className="absolute inset-0 rounded-full border border-accent/20 animate-[cta-ping_3s_ease-out_infinite]" />
              <span className="absolute inset-0 rounded-full border border-accent/15 animate-[cta-ping_3s_ease-out_0.6s_infinite]" />
              <span className="absolute inset-0 rounded-full border border-accent/10 animate-[cta-ping_3s_ease-out_1.2s_infinite]" />
              <span className="absolute inset-2 rounded-full bg-accent/5 transition-all duration-700 group-hover:bg-accent/15 group-hover:inset-0" />
              <span className="absolute inset-4 rounded-full border border-accent/40 transition-all duration-500 group-hover:border-accent group-hover:inset-3" />
              <span className="relative text-xs uppercase tracking-[0.2em] text-accent transition-colors duration-500 group-hover:text-white">
                Get in touch
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="py-16 px-6 border-t border-border-grey">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white text-lg font-light tracking-wide">BAKAMO</span>
          </div>
          <div className="flex gap-8 text-sm text-text-muted">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
            <Link href="/science" className="hover:text-white transition-colors">Science</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Bakamo USA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
