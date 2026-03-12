import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Science",
  description:
    "The theoretical foundations behind Bakamo's methodology: systems theory, everyday life, and the structure-agency tension.",
  alternates: {
    canonical: "/science",
  },
  openGraph: {
    title: "Science | Bakamo",
    description:
      "The theoretical foundations behind Bakamo's methodology: systems theory, everyday life, and the structure-agency tension.",
  },
};

const FOUNDATIONS = [
  {
    number: "01",
    thinker: "Niklas Luhmann",
    framework: "Systems Theory",
    body: "Luhmann showed that society operates as a network of communication systems, each with its own logic, codes, and blind spots. Markets, media, healthcare, and politics do not perceive the world the same way. Bakamo uses that lens to understand why the same message resonates in one setting and fails in another.",
    insight:
      "Communication is not about intention. It is about how systems select, process, and reproduce meaning.",
  },
  {
    number: "02",
    thinker: "Michel de Certeau",
    framework: "The Practice of Everyday Life",
    body: "De Certeau distinguished between institutional strategies and the improvised tactics people use to navigate them. Consumers do not simply receive messaging. They reinterpret, repurpose, and bend it around lived needs. Bakamo reads those tactics in the wild: workarounds, slang, micro-rebellions, and practical adaptations.",
    insight:
      "The powerful write the rules. Everyday life rewrites them.",
  },
  {
    number: "03",
    thinker: "Structure and Agency",
    framework: "Constraint vs. Action",
    body: "Bakamo works with the tension between structural limits and human action. People are shaped by culture, economics, institutions, and power, but they are not reducible to them. This dual lens stops research from treating consumers as either fully rational calculators or passive products of circumstance.",
    insight:
      "Research has to capture both the cage and the flight.",
  },
];

const WHAT_THEORY_PREVENTS = [
  {
    title: "Naive literalism",
    body: "It prevents us from mistaking surface statements for complete explanations of behavior.",
  },
  {
    title: "Category flattening",
    body: "It stops us from pretending one message, one audience, or one system explains the whole market.",
  },
  {
    title: "Method without judgment",
    body: "It keeps the work from collapsing into instrument worship, automation theater, or fashionable but shallow trend talk.",
  },
];

const APPLICATIONS = [
  {
    title: "How messaging travels",
    body: "Systems theory helps explain why the same brand claim lands differently in media discourse, everyday talk, and institutional settings.",
  },
  {
    title: "How people improvise around structure",
    body: "Everyday life theory helps us see the informal behaviors and creative adaptations that standard research often misses.",
  },
  {
    title: "How power and possibility coexist",
    body: "The structure-agency lens helps decode both the pressures shaping behavior and the surprising acts of refusal, aspiration, or reinvention inside them.",
  },
];

export default function SciencePage() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-near-black pb-24 text-text-primary">
      <div className="grain-overlay" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] overflow-hidden">
        <div
          className="absolute left-[-7rem] top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(201, 169, 110, 0.16)" }}
        />
        <div
          className="absolute right-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        />
      </div>

      <section className="relative px-6 pb-20 pt-32 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-end">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.22em] text-accent">
                Theoretical Foundations
              </p>
              <h1
                className={`${cormorant.className} max-w-4xl text-[clamp(3.1rem,7vw,6.4rem)] leading-[0.88] tracking-tight text-white`}
              >
                Theory keeps the method honest.
              </h1>
              <div className="mt-10 h-px w-16 bg-accent" />
              <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
                Bakamo is not built on trend reports, platform metrics, or
                fashionable jargon. The work is grounded in intellectual
                traditions that help explain how meaning moves, how people adapt,
                and why culture rarely behaves the way boardroom models assume.
              </p>
            </div>

            <aside
              className="overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              style={{
                background:
                  "linear-gradient(160deg, rgba(201,169,110,0.16), rgba(20,20,20,0.92) 38%, rgba(10,10,10,0.98))",
              }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                What theory protects against
              </p>
              <div className="mt-8 space-y-6">
                {WHAT_THEORY_PREVENTS.map((item) => (
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
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl space-y-8">
          {FOUNDATIONS.map((foundation, index) => (
            <article
              key={foundation.number}
              className="rounded-[2rem] border border-white/10 p-8 md:p-10"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(140deg, rgba(201,169,110,0.1), rgba(20,20,20,0.95) 30%, rgba(10,10,10,0.98))"
                    : "linear-gradient(140deg, rgba(255,255,255,0.05), rgba(20,20,20,0.95) 28%, rgba(10,10,10,0.98))",
              }}
            >
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:items-start">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent">
                      {foundation.number}
                    </span>
                    <p className="text-xs uppercase tracking-[0.16em] text-text-muted">
                      {foundation.framework}
                    </p>
                  </div>
                  <h2 className="mt-5 text-3xl font-light leading-tight text-white md:text-4xl">
                    {foundation.thinker}
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {foundation.body}
                  </p>
                  <div className="mt-8 border-l border-accent/70 pl-6">
                    <p className="text-lg font-light italic leading-relaxed text-white">
                      {foundation.insight}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-dark-grey/70 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Why this matters in practice
            </p>
            <h2 className="mt-6 text-3xl font-extralight leading-tight text-white md:text-5xl">
              Theory without method is philosophy. Method without theory is guessing.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {APPLICATIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24"
        data-analytics-section="science_final_cta"
        data-analytics-label="Science Final CTA"
      >
        <div
          className="mx-auto max-w-5xl rounded-[2rem] border border-accent/20 p-8 text-center md:p-12"
          style={{
            background:
              "linear-gradient(145deg, rgba(201,169,110,0.14), rgba(20,20,20,0.94) 36%, rgba(10,10,10,1))",
          }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Next step
          </p>
          <h2
            className={`${cormorant.className} mt-6 text-4xl leading-[0.96] text-white md:text-5xl`}
          >
            Want to see how theory changes the work on a live brief?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
            We can show how these foundations shape the way Bakamo reads
            discourse, frames tension, and turns cultural observation into
            strategic action.
          </p>
          <Link
            href="/contact"
            className="cta-button mt-10 text-sm"
            data-analytics-event="cta_click"
            data-analytics-label="Book a Strategy Consult"
            data-analytics-location="science_final_cta"
            data-analytics-destination="/contact"
            data-analytics-service-area="science"
          >
            Book a Strategy Consult
          </Link>
        </div>
      </section>
    </main>
  );
}
