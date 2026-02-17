"use client";

import { useState, useCallback, useRef, useEffect } from "react";

/* ── Seed answers that float behind the input on load ── */
const SEED_ANSWERS = [
  "When I couldn't afford rent anymore",
  "September 11, 2001",
  "When the algorithm chose my news",
  "After COVID, nothing felt the same",
  "The 2008 crash — everything after was pretend",
  "When my kids stopped trusting institutions",
  "Brexit. It broke something.",
  "When facts became opinions",
  "Climate anxiety hit me all at once",
  "The day I deleted social media",
  "When groceries doubled in price",
  "AI started writing the news",
];

/* ── Individual floating answer ── */
function FloatingAnswer({ text, x, delay }: { text: string; x: number; delay: number }) {
  return (
    <span
      className="smoke-answer text-sm md:text-base text-stone select-none"
      style={{
        left: `${x}%`,
        bottom: "0%",
        animationDelay: `${delay}s`,
      }}
    >
      {text}
    </span>
  );
}

/* ── Soil Strata data viz ── */
function SoilStrata() {
  return (
    <div className="mt-16 w-full max-w-xl mx-auto">
      <p className="text-sm uppercase tracking-[0.2em] text-earth mb-6 text-center">
        Here is the ground we are standing on
      </p>

      <div className="relative space-y-0 rounded-lg overflow-hidden border border-stone/40">
        {/* Surface layer */}
        <div className="strata-layer bg-warm-grey px-6 py-5 border-b border-stone/30">
          <p className="text-xs uppercase tracking-[0.15em] text-earth mb-1">Surface</p>
          <p className="text-base font-semibold text-ink">
            Affordability &amp; Anxiety
          </p>
        </div>

        {/* Middle layer */}
        <div className="strata-layer bg-stone/30 px-6 py-5 border-b border-stone/30">
          <p className="text-xs uppercase tracking-[0.15em] text-earth mb-1">Middle</p>
          <p className="text-base font-semibold text-charcoal">
            The fragmentation of truth
          </p>
        </div>

        {/* Deep layer */}
        <div className="strata-layer bg-accent/10 px-6 py-5">
          <p className="text-xs uppercase tracking-[0.15em] text-earth mb-1">Deep</p>
          <p className="text-base font-semibold text-accent">
            Loss of trust (2008)
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Hero ── */
export default function HeroSection() {
  const [answers, setAnswers] = useState<{ id: number; text: string; x: number; delay: number }[]>([]);
  const [input, setInput] = useState("");
  const [showStrata, setShowStrata] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const nextId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Seed some floating answers on mount */
  useEffect(() => {
    const seeds = SEED_ANSWERS.map((text, i) => ({
      id: nextId.current++,
      text,
      x: 5 + Math.random() * 70,
      delay: i * 0.7,
    }));
    setAnswers(seeds);
  }, []);

  /* Clean up old answers periodically */
  useEffect(() => {
    const interval = setInterval(() => {
      setAnswers((prev) => prev.slice(-20));
    }, 10_000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      /* Add the user's answer to the floating stream */
      const newAnswer = {
        id: nextId.current++,
        text: input.trim(),
        x: 10 + Math.random() * 60,
        delay: 0,
      };
      setAnswers((prev) => [...prev, newAnswer]);
      setInput("");

      /* After first real submission, trigger the transition text & strata */
      if (!showTransition) {
        setShowTransition(true);
        setTimeout(() => setShowStrata(true), 1200);
      }
    },
    [input, showTransition],
  );

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-6 text-center overflow-hidden bg-white">
      {/* Floating answer smoke */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {answers.map((a) => (
          <FloatingAnswer key={a.id} text={a.text} x={a.x} delay={a.delay} />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-2xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
          When did the world<br />
          start changing for you?
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer here…"
            className="w-full sm:w-[400px] rounded-none border-b-2 border-ink bg-transparent px-1 py-3 text-lg text-ink placeholder:text-earth focus:outline-none focus:border-charcoal transition-colors"
          />
          <button
            type="submit"
            className="cta-button !py-3 !px-8 text-sm tracking-widest uppercase whitespace-nowrap"
          >
            Submit
          </button>
        </form>

        {/* Transition text */}
        {showTransition && (
          <div className="space-y-2 animate-[fade-in-up_0.8s_ease-out_forwards]">
            <p className="text-xl md:text-2xl font-semibold text-ink">You are not alone.</p>
          </div>
        )}

        {/* Soil strata data visualisation */}
        {showStrata && <SoilStrata />}
      </div>

      {/* Scroll cue */}
      {!showStrata && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-earth">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </section>
  );
}
