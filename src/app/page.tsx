import { GlassCard } from "@/components/GlassCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center overflow-hidden">
        {/* Split-screen inspired background */}
        <div className="absolute inset-0 z-0">
          {/* Left side: chaotic word cloud / network vibe */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-bakamo-indigo/10 via-transparent to-transparent" />
          {/* Right side: structured data grid vibe */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-bakamo-cyan/10 via-transparent to-transparent" />
          {/* Center merge glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bakamo-indigo/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-bakamo-cyan/25 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-8">
          {/* Logo placement indicator */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xl font-bold tracking-tight text-white">BAKAMO</span>
            <span className="text-zinc-500">×</span>
            <span className="text-xl font-medium tracking-tight text-zinc-300">Sandra Baumann</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-bakamo-cyan backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Grounded Quantification
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo">Reality</span>,
            <br />
            Quantified.
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400 leading-relaxed">
            We&apos;ve solved the biggest problem in traditional market research: <strong className="text-white">the bias of the question itself.</strong>
          </p>
          <p className="mx-auto max-w-2xl text-base text-zinc-500">
            Introducing the partnership between Bakamo Social&apos;s unfiltered intelligence and renowned US quantitative researcher Sandra Baumann. We don&apos;t start with a hypothesis. We start with reality, and then we measure it with nationwide rigor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="#contact" className="rounded-lg bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo px-8 py-3.5 font-semibold text-white hover:opacity-90 transition shadow-lg shadow-bakamo-cyan/20">
              De-Risk Your Next Study
            </a>
            <a href="#how-it-works" className="rounded-lg border border-white/20 bg-transparent px-8 py-3.5 font-semibold text-white hover:bg-white/10 transition">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE PROBLEM SECTION: "THE ECHO CHAMBER"
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-4xl">🫧</span>
          </div>
          <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">The Echo Chamber</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Your biggest risk isn&apos;t bad data.<br />
            <span className="text-zinc-400">It&apos;s irrelevant questions.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-zinc-400 leading-relaxed">
            Traditional quantitative research has a fatal flaw. It begins in a boardroom, defining what you want to learn. You write surveys based on internal assumptions, creating an echo chamber where consumers can only answer what you decide to ask.
          </p>
          <p className="text-xl font-semibold text-white">
            You get statistically significant answers to culturally insignificant questions.
          </p>
          <div className="pt-4">
            <p className="text-bakamo-cyan font-medium text-lg">
              We flipped the model. We don&apos;t ask. We listen first.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE SOLUTION: THE HYBRID ENGINE
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="bg-bakamo-panel/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">The Hybrid Engine</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Unfiltered Reality Meets<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo">Rigorous Validation</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
              We have combined two distinct disciplines to ensure your data is both authentic and scalable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Column 1: Bakamo Social */}
            <GlassCard>
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-bakamo-cyan/20 text-bakamo-cyan mb-4">BAKAMO SOCIAL</span>
                  <h3 className="text-2xl font-bold text-white mb-2">THE RADAR</h3>
                  <p className="text-bakamo-cyan font-medium">Discovering Unfiltered Reality</p>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <em>&quot;Insights Without Asking&quot;</em> — Bakamo analyzes millions of organic, unprompted conversations across the digital ecosystem. We identify the language consumers actually use, the needs they express when no brand is watching, and the &quot;unknown unknowns&quot; that traditional surveys miss.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-bakamo-cyan mt-1">→</span>
                    <span>Discover emerging narratives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bakamo-cyan mt-1">→</span>
                    <span>Identify authentic consumer language.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bakamo-cyan mt-1">→</span>
                    <span>Define the right inputs for Quant.</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Column 2: Sandra Baumann */}
            <GlassCard>
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-bakamo-indigo/20 text-bakamo-indigo mb-4">SANDRA BAUMANN</span>
                  <h3 className="text-2xl font-bold text-white mb-2">THE ENGINE</h3>
                  <p className="text-bakamo-indigo font-medium">Nationwide Quantification</p>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <em>&quot;Statistical Rigor &amp; Scale&quot;</em> — Sandra Baumann, one of America&apos;s most trusted names in quantitative research, takes Bakamo&apos;s organic insights and subjects them to rigorous statistical validation. We design survey instruments based on reality, not guesswork, scaled to representative US samples.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-bakamo-indigo mt-1">→</span>
                    <span>Validate the size of the opportunity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bakamo-indigo mt-1">→</span>
                    <span>Board-ready statistical confidence.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bakamo-indigo mt-1">→</span>
                    <span>Measure prevalence across demographics.</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE VALUE PROPOSITION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">Why This Matters</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Why This Matters for the US Market
          </h2>
          <p className="mt-6 text-xl text-zinc-400">
            We are introducing a new standard: <strong className="text-white">Grounded Quantification.</strong>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <GlassCard>
            <div className="text-5xl font-bold text-bakamo-cyan/30 mb-4">01</div>
            <h3 className="text-xl font-bold text-white mb-3">De-Risk Your Research Budget</h3>
            <p className="text-zinc-400 leading-relaxed">
              Stop spending six figures validating internal assumptions. We ensure you are measuring concepts that actually exist in the minds of consumers before you deploy a nationwide survey.
            </p>
          </GlassCard>

          <GlassCard>
            <div className="text-5xl font-bold text-bakamo-cyan/30 mb-4">02</div>
            <h3 className="text-xl font-bold text-white mb-3">Speed to Culture</h3>
            <p className="text-zinc-400 leading-relaxed">
              Traditional survey design takes weeks of internal alignment. Bakamo accelerates the front-end by harvesting real-time cultural topics, allowing Baumann to get into the field faster with relevant questions.
            </p>
          </GlassCard>

          <GlassCard>
            <div className="text-5xl font-bold text-bakamo-cyan/30 mb-4">03</div>
            <h3 className="text-xl font-bold text-white mb-3">The End of the &quot;Say-Do&quot; Gap</h3>
            <p className="text-zinc-400 leading-relaxed">
              By grounding our quant in unprompted social behavior, we bridge the gap between what people say in surveys and what they actually care about in real life.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE AUTHORITY / TRUST SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bakamo-panel/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-bakamo-cyan mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Proven Innovation Meets US Credibility
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Sandra Baumann Quote */}
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl text-bakamo-cyan/20 font-serif">&quot;</div>
              <blockquote className="relative z-10 pl-6 border-l-2 border-bakamo-cyan/40">
                <p className="text-lg text-zinc-300 leading-relaxed italic mb-6">
                  I&apos;ve spent my career ensuring data is statistically sound. But my biggest concern has always been the inputs—are we asking the right questions? Partnering with Bakamo solves the input problem. They provide the raw, unfiltered truth of what&apos;s happening in culture, allowing me to design quantitative studies that are wildly more accurate to reality.
                </p>
                <footer className="text-white font-semibold">
                  — Sandra Baumann
                  <span className="block text-sm text-zinc-500 font-normal mt-1">Quantitative Research Expert</span>
                </footer>
              </blockquote>
            </div>

            {/* Bakamo Leadership Quote */}
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl text-bakamo-indigo/20 font-serif">&quot;</div>
              <blockquote className="relative z-10 pl-6 border-l-2 border-bakamo-indigo/40">
                <p className="text-lg text-zinc-300 leading-relaxed italic mb-6">
                  Entering the US market with Sandra Baumann is a game-changer. Her reputation for statistical rigor combined with our ability to surface authentic cultural narratives creates something the industry has never seen: research that starts with reality.
                </p>
                <footer className="text-white font-semibold">
                  — Bakamo Leadership
                  <span className="block text-sm text-zinc-500 font-normal mt-1">Bakamo Social</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER / FINAL CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-bakamo-cyan/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Are you ready to measure<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo">what actually matters?</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how Grounded Quantification can calibrate your upcoming segmentation, tracker, or innovation pipeline.
          </p>
          <a 
            href="mailto:hello@bakamousa.com" 
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition shadow-xl shadow-bakamo-cyan/20"
          >
            Schedule an Introduction with Sandra &amp; Bakamo
          </a>
        </div>
      </section>

    </main>
  );
}
