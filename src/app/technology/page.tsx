import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technology",
  description: "Technology helps Bakamo scale Social Truth. Human judgment produces it.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Technology | Bakamo",
    description: "Technology helps Bakamo scale Social Truth. Human judgment produces it.",
  },
};

const STAGES = [
  {
    marker: "AI",
    title: "Sourcing",
    body: "We identify the platforms, communities, conversations, and time windows where the category lives. AI scans the open web at scale, flags candidate sources, and prioritizes them by volume, recency, and relevance.",
  },
  {
    marker: "AI",
    title: "Collection",
    body: "Selected sources are scraped and stored. Volume varies by engagement - from tens of thousands of posts for a niche category to millions for a mainstream one.",
  },
  {
    marker: "Human + AI",
    title: "Pattern recognition and clustering",
    body: "AI clusters the discourse by theme, language pattern, and emergent topic. Human analysts review the clusters, correct misreadings, merge what AI separated and separate what AI merged. Sarcasm, irony, coded language, and lived context require human judgment. Software cannot read culture, only count it.",
  },
  {
    marker: "Human",
    title: "Interpretation",
    body: "The senior analyst reads the material, surfaces the constructs and tensions that organize the category, identifies the language consumers actually use, and writes the discovery architecture. AI is not used for interpretation. This is the work that determines whether the survey will measure reality or recreate the brief.",
  },
  {
    marker: "Human + AI",
    title: "Survey design and quantitative analysis",
    body: "Sandra Baumann designs the survey instrument from the discovery architecture. AI assists with sampling logic, statistical analysis, and quality control on the fielded data. Interpretation of findings is human, in consultation with the discovery work.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-near-black text-text-primary">
      <div className="grain-overlay" />

      <section className="px-6 pb-24 pt-32 md:pb-32 md:pt-44" data-analytics-section="technology_hero">
        <div className="mx-auto max-w-6xl">
          <h1
            className={`${cormorant.className} max-w-5xl text-[clamp(3.6rem,7.5vw,7rem)] leading-[0.88] tracking-tight text-white`}
          >
            Technology is how we scale Social Truth. It is not what produces it.
          </h1>
          <div className="mt-10 h-px w-16 bg-accent" />
          <p className="mt-10 max-w-3xl text-xl font-light leading-relaxed text-text-secondary">
            Discovery requires reading enormous volumes of unprompted human conversation across
            platforms. No human team can do that alone. Our technology lets human analysts work at
            the scale the question requires - and stops there.
          </p>
        </div>
      </section>

      <section className="border-t border-border-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
            Where technology applies.
          </h2>
          <div className="mt-16">
            {STAGES.map((stage, index) => (
              <article
                key={stage.title}
                className="relative grid gap-6 border-t border-border-grey py-9 md:grid-cols-[minmax(0,1fr)_10rem]"
              >
                <div className="absolute bottom-0 left-0 top-9 hidden w-px bg-border-grey md:block" />
                <div className="md:pl-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-3 text-3xl font-light text-white">{stage.title}</h3>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary">
                    {stage.body}
                  </p>
                </div>
                <div className="md:flex md:justify-end">
                  <span className="inline-flex min-w-32 justify-center border border-border-grey px-4 py-3 text-xs uppercase tracking-[0.16em] text-accent md:h-fit">
                    {stage.marker}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl border-l border-accent pl-7 text-2xl font-light leading-snug text-white">
            AI lets us read at scale. Humans decide what was read.
          </p>
        </div>
      </section>

      <section className="bg-dark-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
            The judgment is ours.
          </h2>
          <p className="mt-10 max-w-4xl text-xl font-light leading-relaxed text-text-secondary">
            AI is a tool, not a researcher. It can read at scale, count at scale, cluster at scale.
            It cannot tell the difference between what a consumer says and what a consumer means. It
            cannot read a culture, only a corpus. The work that determines whether your study is
            right or wrong - what to look for, how to interpret what we find, what to build the
            survey around - is done by experienced researchers, with two decades of category
            knowledge between them. The technology serves the judgment, not the other way around.
          </p>
          <Link
            href="/our-method"
            className="mt-12 inline-flex text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-white"
            data-analytics-event="cta_click"
            data-analytics-label="See how Social Truth is made"
            data-analytics-location="technology_judgment"
            data-analytics-destination="/our-method"
          >
            See how Social Truth is made &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
