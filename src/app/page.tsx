import { GlassCard } from "@/components/GlassCard";
import { ProcessBackground } from "@/components/ProcessBackground";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-bakamo-indigo/10 via-transparent to-transparent" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-bakamo-cyan/10 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bakamo-indigo/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-bakamo-cyan/25 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo">
              Reality. 
            </span>{" "}
            Measured.
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Most strategic failures don’t come from bad execution.
          </p>
          <p className="mx-auto max-w-2xl text-xl font-semibold text-white">
            They come from misunderstanding reality.
          </p>

          <p className="mx-auto max-w-2xl text-base text-zinc-500">
            Bakamo USA establishes unfiltered consumer reality — what people say, believe, and argue about when no research is watching.
            Only then do we measure it, rigorously and nationally.
          </p>

          <p className="mx-auto max-w-2xl text-lg text-bakamo-cyan font-semibold">
            Ground truth before strategy.
          </p>

          <p className="mx-auto max-w-2xl text-sm text-zinc-500">
            Consultancies model reality. We establish it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="#contact" className="rounded-lg bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo px-8 py-3.5 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-bakamo-cyan/20">
              Talk to Us
            </a>
            <a href="#how-it-works" className="rounded-lg border border-white/20 bg-transparent px-8 py-3.5 font-semibold text-white hover:bg-white/10 transition">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            The hidden risk in modern research
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-zinc-400">
            Most research doesn’t fail because of bad data.
          </p>
          <p className="text-xl font-semibold text-white">
            It fails because the questions were wrong.
          </p>
          <p className="text-lg text-zinc-400">
            Internal assumptions shape surveys, interviews, and workshops —
            forcing consumers to respond inside predefined frames.
          </p>
          <p className="text-xl font-semibold text-bakamo-cyan">
            Statistically robust answers to culturally irrelevant questions.
          </p>
        </div>
      </section>

      {/* SHIFT */}
      <section className="bg-bakamo-panel/30 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-bakamo-indigo">The Shift</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            From asking better questions<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo">
              to knowing what matters
            </span>
          </h2>

          <p className="text-xl font-semibold text-white pt-6">
            Bakamo reverses the research sequence.
          </p>
          <p className="text-2xl font-bold text-bakamo-cyan">
            We listen first.
          </p>

          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            We analyze millions of organic, unprompted conversations —
            before research design interferes.
          </p>

          <p className="text-xl font-semibold text-white">
            This is unfiltered reality.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative bg-bakamo-panel/50 py-24 overflow-hidden">
        {/* Animated Background */}
        <ProcessBackground />
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              From Chaos to Clarity
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              We don&apos;t force reality into a survey. We discover it first, then measure it with precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Stage 1: The Radar */}
            <GlassCard className="text-left">
              <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-bakamo-cyan/20 text-bakamo-cyan font-bold">1</div>
              <h3 className="text-2xl font-bold text-white mb-2">THE RADAR</h3>
              <p className="text-bakamo-cyan font-medium mb-4">Unfiltered Reality</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                We capture millions of organic conversations at scale. No surveys. No moderators. No framing biasing the results.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-bakamo-cyan mt-0.5">→</span>
                  <span>Ground-truth needs and tensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bakamo-cyan mt-0.5">→</span>
                  <span>Authentic consumer language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bakamo-cyan mt-0.5">→</span>
                  <span>Unknown unknowns</span>
                </li>
              </ul>
              <p className="text-bakamo-cyan font-semibold mt-4 text-sm">
                Insights without asking.
              </p>
            </GlassCard>

            {/* Stage 2: The Engine */}
            <GlassCard className="text-left">
              <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-bakamo-indigo/20 text-bakamo-indigo font-bold">2</div>
              <h3 className="text-2xl font-bold text-white mb-2">THE ENGINE</h3>
              <p className="text-bakamo-indigo font-medium mb-4">Reality Measured</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Once reality is understood, we measure it. Quantitative instruments grounded in lived culture — not hypotheses.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-bakamo-indigo mt-0.5">→</span>
                  <span>Representative U.S. samples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bakamo-indigo mt-0.5">→</span>
                  <span>Statistical rigor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bakamo-indigo mt-0.5">→</span>
                  <span>Board-ready confidence</span>
                </li>
              </ul>
              <p className="text-bakamo-indigo font-semibold mt-4 text-sm">
                Reality, validated.
              </p>
            </GlassCard>

          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proven at the highest stakes
          </h2>
          <p className="text-lg text-zinc-400">
            Bakamo has delivered ground-truth intelligence across 45+ countries —
            supporting Fortune 100 companies, governments, NGOs, and high-risk strategic decisions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Measure what actually matters
        </h2>
        <p className="text-lg text-zinc-400 mb-10">
          If your next decision carries real risk, start with ground truth.
        </p>
        <a
          href="mailto:hello@bakamousa.com"
          className="inline-flex rounded-lg bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo px-10 py-4 text-lg font-semibold text-white"
        >
          Schedule a Conversation
        </a>
      </section>

    </main>
  );
}
