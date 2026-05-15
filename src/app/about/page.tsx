import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Bakamo is a boutique research firm built around Social Truth.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bakamo",
    description: "Bakamo is a boutique research firm built around Social Truth.",
  },
};

const TEAM = [
  {
    name: "Daniel Fazekas",
    role: "Founder & CEO",
    initials: "DF",
    bio: "Drives client partnerships and external strategy. Background in discourse analysis and social research.",
  },
  {
    name: "Dr. Sandra Baumann",
    role: "Co-founder & CEO",
    initials: "SB",
    bio: "Leads quantitative methodology and instrument design. Two decades of survey research experience across categories.",
  },
  {
    name: "Daniel Foreman",
    role: "Co-founder & Strategic Advisor",
    initials: "DF",
    bio: "Shapes how Social Truth translates into business decisions for senior clients.",
  },
  {
    name: "Miki Varadi",
    role: "Head of Research",
    initials: "MV",
    bio: "Leads anthropological depth and narrative clarity across engagements, keeping cultural nuance intact at scale.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-near-black text-text-primary">
      <div className="grain-overlay" />

      <section className="px-6 pb-24 pt-32 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <h1 className="max-w-4xl text-4xl font-light leading-tight text-white md:text-6xl">
            A boutique research firm built around one idea.
          </h1>
          <div className="mt-10 h-px w-16 bg-accent" />
          <div className="mt-12 max-w-3xl text-xl font-light leading-relaxed text-text-secondary">
            <p>
              Bakamo was founded by people who had spent careers in research and saw the same gap
              from different angles: the gap between what consumers say in a survey and what they
              live in their actual lives. Closing that gap is not a feature. It is the whole
              product. We built the firm to do one thing - produce research grounded in Social Truth
              - and to do it without the overhead, the layers, or the methodological compromises of
              larger shops.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border-grey px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
            The people who do the work.
          </h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <article key={member.name} className="border-t border-border-grey pt-6">
                <div className="flex aspect-[4/5] items-center justify-center border border-border-grey bg-dark-grey text-3xl font-light tracking-[0.18em] text-accent">
                  {member.initials}
                </div>
                <h3 className="mt-7 text-2xl font-light text-white">{member.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-accent">
                  {member.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
              </article>
            ))}
          </div>
          <Link
            href="/our-method"
            className="mt-14 inline-flex text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-white"
            data-analytics-event="cta_click"
            data-analytics-label="See how Social Truth is made"
            data-analytics-location="about_team"
            data-analytics-destination="/our-method"
          >
            See how Social Truth is made &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
