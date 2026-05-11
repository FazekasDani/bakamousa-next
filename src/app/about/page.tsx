import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "How the Bakamo + Baumann merger created the \u201cFixed Quant\u201d category\u2014bridging cultural intelligence with statistical precision.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bakamo",
    description:
      "How the Bakamo + Baumann merger created the \u201cFixed Quant\u201d category\u2014bridging cultural intelligence with statistical precision.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-near-black text-text-primary overflow-x-hidden pb-24">
      <div className="grain-overlay" />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6">The Story</p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight text-white">
            How We Created the<br />
            <span className="text-accent-glow font-light">&ldquo;Fixed Quant&rdquo;</span> Category
          </h1>
          <div className="w-16 h-px bg-accent mt-10" />
        </div>
      </section>

      {/* The Origin Story */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-8 text-lg font-light leading-relaxed text-text-secondary">
          <p className="text-text-primary text-xl">
            Research has a design flaw. Quantitative studies measure the answers you already thought to ask. 
            Qualitative studies give you depth without scale. Neither starts with reality.
          </p>
          <p>
            Bakamo was built on a different premise: that the richest consumer data already exists
            in the wild&mdash;in unfiltered conversations, organic debates, and the language people
            actually use when no brand is listening. For over a decade, our anthropological radar
            has extracted the emotional tensions, hidden needs, and cultural fault lines that
            pre-structured research simply cannot see.
          </p>
          <p>
            But a radar without a ruler is just intuition.
          </p>
          <p>
            The partnership with <span className="text-white font-medium">Dr.&nbsp;Sandra Baumann</span> and
            her team of statistical methodologists solved the equation. By fusing Bakamo&apos;s
            observational intelligence with rigorous quantitative calibration&mdash;representative
            panels, exhaustive attribute mapping, and bias-reducing survey design&mdash;we created
            something the industry didn&apos;t have: <span className="text-white">a single instrument
            that begins with lived reality and ends with statistically defensible data.</span>
          </p>
          <p className="text-white text-2xl font-extralight pt-4">
            We didn&apos;t improve quant. We fixed it.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Manifesto */}
      <section className="px-6 py-32 md:py-40">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-6 text-center">A Manifesto</p>
          <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-extralight leading-[0.95] tracking-tight text-white text-center mb-16">
            For Social <span className="text-accent-glow font-light">Truth</span>
          </h2>

          <p className="text-center text-[clamp(1.5rem,3.5vw,2.5rem)] font-light italic text-accent-glow mb-24">
            Build on reality.
          </p>

          {/* I */}
          <div className="mb-24">
            <div className="flex items-baseline gap-6 mb-10">
              <span className="text-accent font-light text-xl md:text-2xl tracking-[0.15em] shrink-0">I.</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-white leading-tight">
                Decisions are social.
              </h3>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-text-secondary pl-10 md:pl-12 border-l border-border-grey">
              <p className="pl-2 -ml-2">
                People do not decide alone. Not what to buy, not who to vote for, not what to trust.
                They decide inside cultures &mdash; inside shared assumptions about what is normal,
                what is ridiculous, what goes without saying. These assumptions were not designed by
                anyone. They emerged between people, in millions of exchanges, and they govern what
                any new product, policy, message, or strategy is allowed to become.
              </p>
              <p className="pl-2 -ml-2">
                A brand enters a conversation that started before the brief. A government enters a
                debate its citizens have been having without it. A campaign enters a culture that has
                already built the terrain it will have to cross &mdash; the permissions, the
                resistance, the things that are sayable and the things that are not. None of this
                waits for a launch date.
              </p>
              <p className="pl-2 -ml-2 text-text-primary">
                Most research treats the world as a collection of individuals who can be isolated and
                asked. That model is not wrong about individuals. It is wrong about what moves them.
              </p>
            </div>
          </div>

          {/* II */}
          <div className="mb-24">
            <div className="flex items-baseline gap-6 mb-10">
              <span className="text-accent font-light text-xl md:text-2xl tracking-[0.15em] shrink-0">II.</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-white leading-tight">
                Social truth.
              </h3>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-text-secondary pl-10 md:pl-12 border-l border-border-grey">
              <p className="pl-2 -ml-2">
                There is a name for what lives between people.
              </p>
              <p className="pl-2 -ml-2">
                <span className="text-white">Social truth</span> is what the conversation has already
                stabilised before anyone is asked anything. It is not opinion &mdash; opinion lives
                inside a person. It is not sentiment &mdash; sentiment is a score applied after the
                fact. Social truth is the shared meanings, tensions, and silent agreements that hold
                groups together and govern how they act.
              </p>
              <p className="pl-2 -ml-2">
                It includes what a culture celebrates and what it will not forgive. What it assumes
                and what it is fighting about. The stories people tell each other &mdash; and the
                ones they have quietly stopped telling.
              </p>
              <p className="pl-2 -ml-2 text-white text-xl md:text-2xl font-extralight italic py-2">
                It moves first. Individuals catch up.
              </p>
              <p className="pl-2 -ml-2">
                Human truth tells you who someone is. Social truth tells you what holds them together
                &mdash; and whether your strategy will survive contact with them.
              </p>
            </div>
          </div>

          {/* III */}
          <div className="mb-24">
            <div className="flex items-baseline gap-6 mb-10">
              <span className="text-accent font-light text-xl md:text-2xl tracking-[0.15em] shrink-0">III.</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-white leading-tight">
                The blind spot.
              </h3>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-text-secondary pl-10 md:pl-12 border-l border-border-grey">
              <p className="pl-2 -ml-2">
                If social truth governs outcomes, why does nobody measure it?
              </p>
              <p className="pl-2 -ml-2">
                Because the tools were not built for it. Surveys isolate the individual. Focus groups
                pull people out of their context. Trackers count mentions. Dashboards flatten meaning
                into a sentiment score. Every standard instrument probes what lives inside a person
                &mdash; stated intentions, narrow preferences &mdash; while ignoring the thing that
                actually moves them.
              </p>
              <p className="pl-2 -ml-2 text-white">
                The instruments are precise. They are perfectly calibrated for the wrong target.
              </p>
              <p className="pl-2 -ml-2">
                It is not that good decisions never accounted for culture. Some strategists had the
                instinct &mdash; they could read a room. But that instinct was dismissed as art.
                Unteachable. Unrepeatable. Undefendable when the budget moved. Numbers were called
                rigour. Culture was called vibes.
              </p>
              <p className="pl-2 -ml-2">
                The result: an industry that built precision for the surface, and left the layer that
                decides outcomes to luck.
              </p>
            </div>
          </div>

          {/* IV */}
          <div className="mb-24">
            <div className="flex items-baseline gap-6 mb-10">
              <span className="text-accent font-light text-xl md:text-2xl tracking-[0.15em] shrink-0">IV.</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-white leading-tight">
                We start outside.
              </h3>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-text-secondary pl-10 md:pl-12 border-l border-border-grey">
              <p className="pl-2 -ml-2 text-white">
                We read the conversation before we write the questionnaire.
              </p>
              <p className="pl-2 -ml-2">
                We begin with what people actually say to each other &mdash; unprompted, unfiltered,
                where no researcher is in the room. Not what they say when asked. What they say when
                they are talking to each other about the things that matter to them.
              </p>
              <p className="pl-2 -ml-2">
                From that, we map the narratives. The tensions people carry. The groups forming. The
                fault lines. The things everyone in the market knows but no one has put into a brief.
              </p>
              <p className="pl-2 -ml-2">
                Then we build the instrument. The survey mirrors how people actually speak. The
                categories come from the culture, not the workshop. Measurement is grounded in what
                we found, not what we assumed.
              </p>
              <p className="pl-2 -ml-2 text-white text-xl md:text-2xl font-extralight italic py-2">
                Discovery first. Measurement second. Strategy third.
              </p>
              <p className="pl-2 -ml-2">
                Before the budget commits, before the policy launches, before the campaign runs
                &mdash; we tell you whether the world your plan is built for actually exists.
              </p>
            </div>
          </div>

          {/* V */}
          <div className="mb-24">
            <div className="flex items-baseline gap-6 mb-10">
              <span className="text-accent font-light text-xl md:text-2xl tracking-[0.15em] shrink-0">V.</span>
              <h3 className="text-2xl md:text-3xl font-extralight text-white leading-tight">
                The promise kept.
              </h3>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-text-secondary pl-10 md:pl-12 border-l border-border-grey">
              <p className="pl-2 -ml-2">
                None of this is new thinking.
              </p>
              <p className="pl-2 -ml-2">
                Every qualitative researcher who ever pushed back against a rushed questionnaire knew
                it. Every anthropologist who sat in a community before writing a report lived it.
                Every human-centred designer, every ethnographer, every explorer who believed that
                understanding must come before measurement &mdash; they have carried these principles
                for decades.
              </p>
              <p className="pl-2 -ml-2 text-white text-xl md:text-2xl font-extralight italic py-2">
                Listen first. Start with culture. Understand before you count.
              </p>
              <p className="pl-2 -ml-2">
                These are not radical demands. They are the oldest commitments in the discipline.
                What is new is not the belief. What is new is the ability to deliver on it &mdash;
                to detect and map social truth, and to build the instruments that can represent it.
              </p>
              <p className="pl-2 -ml-2 text-white">
                The promise was always there. Now we can keep it.
              </p>
            </div>
          </div>

          <div className="section-divider my-16" />

          <p className="text-center text-[clamp(1.75rem,4vw,3rem)] font-light italic text-accent-glow">
            Build on reality.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Leadership */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-16">
            The Founding Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Daniel Fazekas</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Founder &amp; CEO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Pioneer of &ldquo;insights without asking&rdquo;&mdash;built Bakamo&apos;s anthropological
                radar into a global social intelligence platform serving Fortune&nbsp;500 brands.
              </p>
            </div>
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Dr.&nbsp;Sandra Baumann</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Founder &amp; CEO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Brings statistical precision and quantitative rigor&mdash;transforming cultural
                signals into representative, defensible measurement frameworks.
              </p>
            </div>
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Miki Varadi</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Head of Research</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Drives anthropological depth and narrative clarity across every engagement,
                ensuring cultural nuance is never lost to scale.
              </p>
            </div>
            <div className="diff-card">
              <h3 className="text-white text-xl font-medium">Dan Foreman</h3>
              <p className="text-accent text-xs uppercase tracking-[0.12em] mt-1 mb-4">Strategic Advisor</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Industry veteran bridging strategic integration with market-facing execution
                across global research operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
