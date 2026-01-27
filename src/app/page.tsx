import { GlassCard } from "@/components/GlassCard";
import { ProcessBackground } from "@/components/ProcessBackground";
import { RotatingTaglines } from "@/components/RotatingTaglines";

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo pr-2">
              Reality.
            </span>{" "}
            Measured.
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            The biggest risk in strategic decision-making isn&apos;t execution.
          </p>
          <p className="mx-auto max-w-2xl text-xl font-semibold text-white">
            It&apos;s acting on a false understanding of reality.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-bakamo-cyan font-semibold">
            Bakamo USA exists to remove that risk.
          </p>

          <p className="mx-auto max-w-2xl text-base text-zinc-500">
            We establish unfiltered consumer reality — what people say, believe, and argue about when no research is watching. Only then do we measure it, rigorously and nationally.
          </p>

          <div className="pt-4 space-y-2">
            <p className="mx-auto max-w-2xl text-base text-zinc-400">
              This is not faster research.
            </p>
            <p className="mx-auto max-w-2xl text-lg font-semibold text-white">
              It is truer research.
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo font-bold pt-2">
            Ground truth before strategy.
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
            Why good teams still make the wrong calls
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-zinc-400">
            Most research doesn&apos;t fail because of bad data.
          </p>
          <p className="text-xl font-semibold text-white">
            It fails because the questions were wrong from the start.
          </p>
          <p className="text-lg text-zinc-400">
            Surveys, interviews, and workshops begin with internal assumptions about what matters. Consumers are then asked to respond inside those frames.
          </p>
          <p className="text-base text-zinc-500">
            The result is familiar to every senior leader:
          </p>
          <p className="text-xl font-semibold text-bakamo-cyan">
            Statistically robust answers to culturally irrelevant questions.
          </p>
          <p className="text-lg text-zinc-400 pt-4">
            Decisions feel informed — but quietly drift away from reality.
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
            We analyze millions of organic, unprompted conversations across the digital public sphere — before research design interferes.
          </p>

          <div className="pt-6">
            <p className="text-lg text-zinc-300 mb-4">This reveals:</p>
            <ul className="space-y-3 text-lg text-zinc-300 max-w-xl mx-auto">
              <li className="flex items-center justify-center gap-3">
                <span className="text-bakamo-cyan">→</span>
                <span>What actually matters to people</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-bakamo-cyan">→</span>
                <span>How they naturally frame problems and trade-offs</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-bakamo-cyan">→</span>
                <span>Which narratives are emerging, declining, or contested</span>
              </li>
            </ul>
          </div>

          <p className="text-xl font-semibold text-white pt-6">
            This is unfiltered reality.
          </p>
          <p className="text-base text-zinc-500">
            Not opinion. Not recall. Not post-rationalization.
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
              A two-stage intelligence system
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              Traditional research combines methods. We sequence them correctly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Stage 1: The Radar */}
            <GlassCard className="text-left">
              <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-bakamo-cyan/20 text-bakamo-cyan font-bold">1</div>
              <h3 className="text-2xl font-bold text-white mb-2">THE RADAR</h3>
              <p className="text-bakamo-cyan font-medium mb-4">Unfiltered Reality</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                We capture and analyze natural conversations at scale. No surveys. No moderators. No framing.
              </p>
              <p className="text-zinc-300 text-sm mb-2">This surfaces:</p>
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
                  <span>Blind spots and unknown unknowns</span>
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
                Once reality is established, we measure it. We design quantitative instruments grounded in lived culture — not hypotheses.
              </p>
              <p className="text-zinc-300 text-sm mb-2">This delivers:</p>
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

      {/* WHAT REALITY UNLOCKS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">What Reality Unlocks</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              For Decision-Makers
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              This is what Bakamo&apos;s reality changes for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassCard>
              <div className="text-3xl font-bold text-bakamo-cyan/30 mb-3">01</div>
              <h3 className="text-lg font-bold text-white mb-2">Fewer blind spots</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You stop investing in questions, segments, and strategies that don&apos;t exist outside the building.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="text-3xl font-bold text-bakamo-cyan/30 mb-3">02</div>
              <h3 className="text-lg font-bold text-white mb-2">Stronger strategic conviction</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Decisions are grounded in how people actually think and behave — not how teams assume they do.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="text-3xl font-bold text-bakamo-cyan/30 mb-3">03</div>
              <h3 className="text-lg font-bold text-white mb-2">Earlier signals</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You see cultural and consumer shifts before they show up in KPIs, trackers, or quarterly reports.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="text-3xl font-bold text-bakamo-cyan/30 mb-3">04</div>
              <h3 className="text-lg font-bold text-white mb-2">Faster internal alignment</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Ground truth cuts through opinion, hierarchy, and internal politics.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="text-3xl font-bold text-bakamo-cyan/30 mb-3">05</div>
              <h3 className="text-lg font-bold text-white mb-2">Less wasted research spend</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every study is anchored in something real — before it is scaled, segmented, or modeled.
              </p>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-bakamo-cyan/10 to-bakamo-indigo/10">
              <div className="h-full flex flex-col justify-center">
                <p className="text-lg font-semibold text-white leading-relaxed">
                  Bakamo doesn&apos;t just show you reality.
                </p>
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo mt-2">
                  It removes the risk of acting on the wrong one.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* WHY BAKAMO IS DIFFERENT */}
      <section className="bg-bakamo-panel/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-bakamo-indigo mb-4">Why Bakamo Is Different</p>
          
          <div className="space-y-6">
            <div>
              <p className="text-lg text-zinc-400">Consultancies model reality.</p>
              <p className="text-xl font-bold text-white">Bakamo establishes it.</p>
            </div>
            
            <div>
              <p className="text-lg text-zinc-400">Market research firms ask better questions.</p>
              <p className="text-xl font-bold text-white">Bakamo ensures the questions matter at all.</p>
            </div>
          </div>

          <p className="text-lg text-bakamo-cyan font-semibold pt-4">
            We sit upstream of strategy — where the cost of being wrong is highest.
          </p>
        </div>
      </section>

      {/* PROVEN AT HIGHEST STAKES */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven at the Highest Stakes
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Bakamo has delivered ground-truth intelligence across 45+ countries, supporting:
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl border border-white/5 bg-white/5">
              <p className="text-white font-medium">Fortune 100 companies</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-white/5 bg-white/5">
              <p className="text-white font-medium">Governments and regulators</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-white/5 bg-white/5">
              <p className="text-white font-medium">NGOs and civil society</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-white/5 bg-white/5">
              <p className="text-white font-medium">High-visibility decisions</p>
            </div>
          </div>

          <p className="text-center text-zinc-500 mt-8">
            Our work is trusted where misunderstanding reality has real consequences.
          </p>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-bakamo-panel/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">Who We Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Leaders responsible for decisions that cannot be undone
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300">CEOs and executive teams</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300">CMOs and brand leaders</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300">Heads of insight and strategy</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300">Boards navigating uncertainty</span>
          </div>

          <p className="text-lg text-bakamo-cyan font-semibold mt-10">
            When the decision matters, reality comes first.
          </p>
        </div>
      </section>

      {/* ROTATING TAGLINES */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-xl">
          <RotatingTaglines />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-32 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-bakamo-cyan/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Measure what actually matters
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            If your next decision carries real financial, reputational, or strategic risk, start with ground truth.
          </p>
          <a
            href="mailto:hello@bakamousa.com"
            className="inline-flex rounded-lg bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition shadow-xl shadow-bakamo-cyan/20"
          >
            Schedule a Conversation
          </a>
        </div>
      </section>

    </main>
  );
}
