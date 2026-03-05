"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════
   WeFixedQuant — immersive vertical landing (Active Theory / y.co style)
   ═══════════════════════════════════════════════════════════ */

// ── Data ─────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    title: "Deep Psychological Decoding vs. Surface Sentiment",
    body: "While conventional listening tools passively measure generic 'positive/negative' keyword volume, our approach identifies the deep psychological frictions and specific trust barriers actually driving behavior.",
  },
  {
    title: "Strategic Architecture vs. Raw Metrics",
    body: "Instead of delivering disjointed charts, we map unstructured social discourse directly against established reputational pillars (Connection, Consistency, and Benevolence) to reveal actionable dimensions of relevance.",
  },
  {
    title: "Anthropological Context vs. Algorithmic Counting",
    body: "We utilize manual, qualitative interpretation to decode the complex power dynamics, compliance nuances, and relational context of the patient-HCP relationship, moving beyond what automated tools can capture.",
  },
];

const CAPABILITIES = [
  {
    title: "Omnichannel, Human-Led Harvesting",
    body: "Our expert researchers manually explore and identify highly relevant patient and HCP communities across the digital landscape, capturing critical, authentic conversations in niche public spaces that standard automated listening tools miss.",
  },
  {
    title: "Senior Human-in-the-Loop Analysis",
    body: "We invest significant qualitative resources into actively reading, understanding, and empathetically decoding the nuanced reality of the community, ensuring no context is lost to an algorithm.",
  },
  {
    title: "Anthropological Curation & Deep Semantic Decoding",
    body: "We apply rigorous cultural frameworks to curate the raw data, conducting deep semantic analysis to uncover the hidden emotional tensions, unmet needs, and true drivers behind treatment decisions.",
  },
  {
    title: "Rigorous & Ethical Compliance",
    body: "We operate strictly within ESOMAR & EPHMRA guidelines to ensure protection of privacy, and compliant reporting of Adverse Events (AEs).",
  },
];

const METHODOLOGY = [
  {
    number: "01",
    title: "Listen",
    subtitle: "The Radar",
    body: `We map the 'underground' drivers of culture using unfiltered social discourse. We don't frame the answer with a question; we discover what we didn't know to ask. We extract real insights, map them to real drivers, and build the survey from lived reality.`,
  },
  {
    number: "02",
    title: "Measure",
    subtitle: "The Bridge",
    body: "We then use traditional quantitative methods to calculate the weight each narrative carries — statistically, demographically, and nationally.",
  },
  {
    number: "03",
    title: "Stress-Test",
    subtitle: "The Insurance",
    body: "We calculate if a strategy can survive on the detected terrain, identifying 'cultural fault lines' before they lead to market failure.",
  },
];

const BENEFITS = [
  {
    title: `Embeds the "Why" into the "What"`,
    body: "Because the survey options are sourced directly from organic cultural narratives, the underlying emotional drivers behind each data point are understood before the quantitative survey is even fielded.",
  },
  {
    title: "Drives Higher Data Quality",
    body: "When respondents see their authentic lived experiences — such as specific lifestyle impacts or adherence frictions — reflected in the survey options, they feel understood, which significantly reduces 'straight-lining' and survey drop-off.",
  },
  {
    title: "Accelerates Speed to Field",
    body: "By harvesting real-time cultural topics to design the questionnaire, we bypass the need for lengthy exploratory qualitative phases, getting a highly calibrated, relevant instrument into the field faster.",
  },
  {
    title: "Bigger Scale, Lower Cost",
    body: "Cheaper than focus groups, bigger in scale — cultural intelligence at a fraction of the cost of traditional qualitative phases.",
  },
];

const CASE_STUDIES = [
  {
    client: "Sanofi",
    title: "The Inflection Point",
    body: `We didn't just profile a 'target group.' We exposed the exact moments of parental anxiety and medical hesitation that traditional surveys never saw. Our discovery became the launch strategy.`,
  },
  {
    client: "Janssen",
    title: "The Sensitive Truth",
    body: "Some subjects are too heavy for a survey. We decoded organic, unfiltered conversations to give HCPs the missing vocabulary they needed to move patients toward better outcomes — without the interference of a research lens.",
  },
  {
    client: "Janssen",
    title: "The Misdiagnosis Gap",
    body: `Traditional recall surveys rely on memory. We mapped lived reality. By tracing the authentic 'misdiagnosis journey' through organic discourse, we captured the peer-level data that standard research leaves behind.`,
  },
];

// ── Component ────────────────────────────────────────────

export default function WeFixedQuant() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate every .reveal element on scroll
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

      // Animate .reveal-left elements
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

      // Hero title entrance (no scroll trigger — immediate)
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

      // Parallax on hero
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
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* ════════ HERO ════════ */}
      <section className="hero-section full-section relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
        >
          <source src="/media/india-bg.mp4" type="video/mp4" />
        </video>

        <div className="hero-bg-gradient absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#111]/40 to-[#0a0a0a]" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-[clamp(3rem,10vw,8rem)] font-extralight leading-[0.95] tracking-tight text-white">
            We Fixed <span className="text-accent-glow font-light">Quant</span>
          </h1>
          <div className="hero-line w-16 h-px bg-accent mx-auto mt-8 origin-left" />
          <p className="hero-subtitle mt-8 text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            We deliver the real human narrative behind the decimal point.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
        </div>
      </section>

      {/* ════════ PROBLEM ════════ */}
      <section className="full-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal manifesto-quote">
            Most surveys are just the boardroom talking to itself.
          </p>
          <div className="reveal mt-12 space-y-6 text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              You spend six figures to ask questions you wrote, in language you use, to confirm what you already think.
            </p>
            <p className="text-text-muted">
              It&rsquo;s elegant data built on an assumption, far from reality.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ SOLUTION INTRO ════════ */}
      <section className="full-section bg-dark-grey">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-6">We fixed it</p>
          <h2 className="reveal text-[clamp(1.75rem,4vw,3.5rem)] font-extralight leading-tight text-white">
            We don&rsquo;t start with a blank survey.<br />
            <span className="text-text-secondary">We start by listening to the unfiltered reality.</span>
          </h2>
        </div>
      </section>

      {/* ════════ THE RADAR ════════ */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal space-y-8 text-lg font-light leading-relaxed text-text-secondary">
            <p className="text-text-primary text-xl">
              We start with an observational &ldquo;radar&rdquo; that captures unprompted, authentic audience
              reality by analyzing organic conversations in the digital public sphere — before any
              research questions are asked.
            </p>
            <p>
              It identifies the exact language, emotional tensions, and hidden decision-making engines
              consumers express when no brand is watching.
            </p>
            <p>
              It surfaces the &ldquo;unknown unknowns&rdquo; and emerging narratives mapping consumers&rsquo;
              lived experiences without research interference.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL LISTENING CRITIQUE ════════ */}
      <section className="full-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal manifesto-quote">
            &lsquo;Social Listening is a Polluted Mess&rsquo;
          </p>
          <div className="section-divider reveal mt-10" />
          <div className="reveal mt-10">
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">We fixed it</p>
            <p className="text-2xl md:text-3xl font-extralight text-white leading-snug">
              We don&rsquo;t sell software. We sell perspective.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ OUR APPROACH (3 differentiators) ════════ */}
      <section className="py-32 px-6 bg-dark-grey">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">Our Approach</p>
          <h2 className="reveal text-3xl md:text-4xl font-extralight text-white mb-16">
            Different from Standard Social Listening
          </h2>
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

      {/* ════════ HUMAN-LED ════════ */}
      <section className="full-section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal manifesto-quote">
            &lsquo;Most tools are built by software engineers, not researchers&rsquo;
          </p>
          <div className="section-divider reveal mt-10" />
          <div className="reveal mt-10">
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">We fixed it</p>
            <p className="text-2xl md:text-3xl font-extralight text-white leading-snug">
              Algorithms don&rsquo;t understand irony. We do.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ RESEARCHER CAPABILITIES ════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">Our Researchers</p>
          <h2 className="reveal text-2xl md:text-3xl font-extralight text-white mb-16 max-w-2xl">
            Surveys delivered by researchers with experience in both social intelligence and quant.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CAPABILITIES.map((c, i) => (
              <div key={i} className="reveal diff-card">
                <span className="text-accent text-sm font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-white text-lg font-medium mb-4 leading-snug">{c.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ METHODOLOGY ════════ */}
      <section className="py-32 px-6 bg-dark-grey">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">Step by Step</p>
          <h2 className="reveal text-3xl md:text-5xl font-extralight text-white mb-20">
            Methodology
          </h2>
          <div className="space-y-20">
            {METHODOLOGY.map((m) => (
              <div key={m.number} className="reveal method-step">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-accent font-mono text-sm">{m.number}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-light">{m.title}</h3>
                  <span className="text-text-muted text-sm hidden md:inline">— {m.subtitle}</span>
                </div>
                <p className="text-text-secondary font-light leading-relaxed max-w-2xl">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ BENEFITS ════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">Benefits</p>
          <h2 className="reveal text-3xl md:text-4xl font-extralight text-white mb-16">
            Why it works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="reveal diff-card">
                <h3 className="text-white text-lg font-medium mb-4 leading-snug">{b.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDIES ════════ */}
      <section className="py-32 px-6 bg-dark-grey">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-4">Case Studies</p>
          <h2 className="reveal text-3xl md:text-4xl font-extralight text-white mb-16">
            Proof in the field
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="reveal case-card">
                <span className="text-accent uppercase tracking-[0.15em] text-xs font-medium">{cs.client}</span>
                <h3 className="text-white text-xl font-medium mt-3 mb-4">{cs.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{cs.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLOSING CTA ════════ */}
      <section className="full-section relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.05)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="reveal text-accent uppercase tracking-[0.2em] text-sm mb-8">
            Once Your Quant is Fixed
          </p>
          <h2 className="reveal text-[clamp(2.5rem,7vw,6rem)] font-extralight leading-[0.95] text-white">
            You Can Start to<br />
            <span className="text-accent-glow font-light">Build On Reality</span>
          </h2>
          <div className="reveal mt-16 flex justify-center">
            <a href="/contact" className="pulse-cta group relative flex items-center justify-center w-40 h-40">
              {/* Outer pulsing rings */}
              <span className="absolute inset-0 rounded-full border border-accent/20 animate-[cta-ping_3s_ease-out_infinite]" />
              <span className="absolute inset-0 rounded-full border border-accent/15 animate-[cta-ping_3s_ease-out_0.6s_infinite]" />
              <span className="absolute inset-0 rounded-full border border-accent/10 animate-[cta-ping_3s_ease-out_1.2s_infinite]" />
              {/* Glow backdrop */}
              <span className="absolute inset-2 rounded-full bg-accent/5 transition-all duration-700 group-hover:bg-accent/15 group-hover:inset-0" />
              {/* Core circle */}
              <span className="absolute inset-4 rounded-full border border-accent/40 transition-all duration-500 group-hover:border-accent group-hover:inset-3" />
              {/* Label */}
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
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/blog" className="hover:text-white transition-colors">Insights</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Bakamo USA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
