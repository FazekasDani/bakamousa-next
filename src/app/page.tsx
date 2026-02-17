import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import ArchitecturalDiagram from "@/components/ArchitecturalDiagram";

export default function Home() {
  return (
    <main>

      {/* ═══════════════════════════════════════════
          HERO — "The Pulse"
          Interactive input + floating smoke answers
          + soil strata data viz
      ═══════════════════════════════════════════ */}
      <HeroSection />


      {/* ═══════════════════════════════════════════
          SECTION 1 — "The Shift"
          Warm earthy greyscale · left-aligned editorial
      ═══════════════════════════════════════════ */}
      <section className="bg-off-white py-28 md:py-36">
        <div className="section-editorial">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-earth mb-8">The Shift</p>
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-[1.15] mb-10">
              The ground moved.<br />We just kept building.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              We call it the &ldquo;new normal,&rdquo; but that implies stability.
              It wasn&apos;t a return to normal; it was a change in the{" "}
              <em>soil composition</em> of society.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ul className="space-y-4 text-lg text-charcoal mb-10">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
                2008 fractured economic trust.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
                Algorithms fragmented our reality.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
                Affordability reshaped aspiration.
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              The mainstream didn&apos;t just shift; it dissolved into parallel realities.
            </p>
            <p className="pull-quote">
              Yet, most strategies are still built for a world that no longer exists.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 2 — "The Metaphor"
          Architectural line-drawing + geological survey
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Illustration */}
            <ScrollReveal>
              <ArchitecturalDiagram />
            </ScrollReveal>

            {/* Copy */}
            <ScrollReveal delay={150}>
              <p className="text-xs uppercase tracking-[0.2em] text-earth mb-6">The Metaphor</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-[1.15] mb-8">
                Would you build a high-rise without a geological survey?
              </h2>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                In construction, before a single beam is laid, engineers test the ground.
                They look for load-bearing capacity, hidden water tables, and fault lines.
              </p>
              <p className="text-lg font-semibold text-ink mb-6">
                The Business Reality:
              </p>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                In business, organisations routinely pour strategic foundations
                without testing the cultural soil.
              </p>
              <ul className="space-y-3 text-base text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                  They run surveys that validate internal assumptions.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                  They test language that was written inside a boardroom.
                </li>
              </ul>
              <p className="text-base text-earth italic">
                This isn&apos;t ground inspection. It&apos;s blueprint confirmation.
                And in unstable terrain, blueprint confirmation is a liability.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 3 — "The Bakamo Method"
          Split screen: old way vs. Bakamo way + process
      ═══════════════════════════════════════════ */}
      <section className="bg-off-white py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-earth mb-6 text-center">The Bakamo Method</p>
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-[1.15] mb-6 text-center">
              We inspect the ground first.
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto text-center mb-16">
              At Bakamo, we don&apos;t ask people to explain themselves.
              We observe them being themselves.
            </p>
          </ScrollReveal>

          {/* Split comparison */}
          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-stone/40 mb-20">
              {/* Old Way */}
              <div className="bg-warm-grey p-10 md:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-earth mb-4">The Old Way</p>
                <ul className="space-y-4 text-base text-charcoal">
                  <li className="flex items-start gap-3">
                    <span className="text-earth mt-0.5">&#x2717;</span>
                    Start with internal hypotheses
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-earth mt-0.5">&#x2717;</span>
                    Ask questions that frame the answer
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-earth mt-0.5">&#x2717;</span>
                    Validate what you already assumed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-earth mt-0.5">&#x2717;</span>
                    Static surveys &amp; charts
                  </li>
                </ul>
              </div>
              {/* Bakamo Way */}
              <div className="bg-ink p-10 md:p-12 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-highlight mb-4">The Bakamo Way</p>
                <ul className="space-y-4 text-base text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-highlight mt-0.5">&#x2713;</span>
                    Start with unfiltered reality
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-highlight mt-0.5">&#x2713;</span>
                    Observe organic conversation at scale
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-highlight mt-0.5">&#x2713;</span>
                    Discover what you didn&apos;t know to ask
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-highlight mt-0.5">&#x2713;</span>
                    Dynamic, living narrative networks
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Process steps */}
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border-2 border-ink text-ink text-xl font-bold mb-5">
                  1
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Listen</h3>
                <p className="text-base text-charcoal">
                  We map the &ldquo;underground&rdquo; drivers of culture —
                  the anxieties, identities, and signals that shape decisions.
                </p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border-2 border-ink text-ink text-xl font-bold mb-5">
                  2
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Measure</h3>
                <p className="text-base text-charcoal">
                  We quantify the weight each narrative can carry —
                  statistically, demographically, nationally.
                </p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border-2 border-ink text-ink text-xl font-bold mb-5">
                  3
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Stress-Test</h3>
                <p className="text-base text-charcoal">
                  We calculate if your strategy can survive on this terrain —
                  before you break ground.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 4 — "The Deliverable"
          Foundation before Facade
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-36">
        <div className="section-editorial">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-earth mb-6">The Deliverable</p>
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-[1.15] mb-10">
              Foundation before Facade.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              Branding is the facade. Strategy is the structure.{" "}
              <span className="font-semibold text-ink">Insight is the foundation.</span>
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              If your foundation is weak, the cracks won&apos;t appear on day one.
              They will appear as:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ul className="space-y-4 text-lg text-charcoal mb-12">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                Failed repositioning.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                Cultural backlash.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                Mysterious declines in trust.
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="pull-quote !text-xl md:!text-2xl">
              Most business failures are not creative failures.<br />
              They are foundation failures.
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-lg font-semibold text-ink mb-8 mt-12">
              We provide the insurance policy for your reality:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-stone/40 p-6">
                <p className="text-sm font-bold text-ink mb-2 uppercase tracking-wider">01</p>
                <p className="text-base text-charcoal">Discovery before validation.</p>
              </div>
              <div className="rounded-lg border border-stone/40 p-6">
                <p className="text-sm font-bold text-ink mb-2 uppercase tracking-wider">02</p>
                <p className="text-base text-charcoal">Early detection of cultural fault lines.</p>
              </div>
              <div className="rounded-lg border border-stone/40 p-6">
                <p className="text-sm font-bold text-ink mb-2 uppercase tracking-wider">03</p>
                <p className="text-base text-charcoal">Confidence to build for the long term.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FOOTER / CTA
          Stark minimalism, center-aligned
      ═══════════════════════════════════════════ */}
      <section id="contact" className="bg-white py-32 md:py-44 text-center">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl px-6 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-[1.15]">
              Stop building on sand.
            </h2>
            <p className="text-lg md:text-xl text-charcoal">
              Let&apos;s inspect the ground your customers are standing on.
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@bakamousa.com"
                className="cta-button text-base tracking-widest uppercase"
              >
                Start the Inspection
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Micro footer */}
      <footer className="border-t border-stone/30 bg-white py-10 text-center">
        <p className="text-sm font-semibold tracking-[0.15em] text-earth uppercase">
          Bakamo. Build on Reality.
        </p>
        <p className="mt-3 text-xs text-stone">
          &copy; {new Date().getFullYear()} Bakamo USA
        </p>
      </footer>

    </main>
  );
}
