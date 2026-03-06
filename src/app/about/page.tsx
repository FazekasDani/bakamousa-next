import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bakamo was founded on a radical conviction: research must begin with reality. We bridge cultural intelligence with statistical precision.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bakamo",
    description:
      "Bakamo was founded on a radical conviction: research must begin with reality. We bridge cultural intelligence with statistical precision.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-white text-gray-900 overflow-x-hidden pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-32 space-y-24">
        
        {/* About Section */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            About Bakamo
          </h1>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Bakamo was founded on a simple but radical conviction: research must begin with reality — not with assumptions.
            </p>
            <p>
              For too long, the industry has relied on pre-structured questionnaires, predefined hypotheses, and artificial settings that distance us from how people actually think, speak, and live. The outcome is often elegant data resting on fragile premises.
            </p>
            <p>
              We believe the standard must change.
            </p>
            <p>
              We came together to build that new standard by combining old and new — listening with asking. We unite unfiltered cultural intelligence with nationwide statistical rigour to measure what truly matters to people, not what organisations presume matters. We uncover how people naturally articulate their needs, tensions, values, and decisions in the wild — and translate those lived narratives into representative, decision-ready measurement frameworks.
            </p>
            <p className="font-bold text-2xl text-black mt-8">
              Build on reality.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Mission Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
            Our Mission
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              We believe the world works better when we listen — properly, patiently, and without interruption.
            </p>
            <p>
              Real understanding never begins with our own categories. As Hans-Georg Gadamer taught, insight only emerges when we let others invite us into their world. The difference between the old world and the new is the difference between kicking a soccer ball and kicking a dog: reality is complex, unpredictable, and far messier than any model.
            </p>
            <p className="font-medium text-black">
              Bakamo was built on that truth: understand first, model second, never pretend the universe is simpler than it is.
            </p>
            <p>
              We bridge quantitative and qualitative traditions to solve the industry&apos;s oldest tension — how to combine the raw depth of unfiltered cultural listening with the power of statistical representation. Traditional research starts with a hypothesis and a questionnaire. We start with reality.
            </p>
            <p>
              Our anthropological approach captures the language, narratives, emotional tensions, and unmet needs that surface in natural conversations. From there, we translate those grounded truths into representative qualitative and quantitative instruments that measure what actually exists in culture — not what we assumed.
            </p>
            <p>
              The result is more than insight. It is risk reduction.
            </p>
            <p>
              We help brands, institutions, and researchers avoid costly misalignment by anchoring decisions in real cultural signals instead of internal projections.
            </p>
            <p className="font-bold text-xl text-black pt-2">
              Because better listening doesn&apos;t just feel right. It leads to better decisions.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Leadership Section */}
        <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Leader 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">Phd. Sandra Baumann</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Bridging cultural intelligence with statistical precision.
              </p>
            </div>

            {/* Leader 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">Miki Varadi</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Driving anthropological depth and narrative clarity.
              </p>
            </div>

            {/* Leader 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">Daniel Fazekas</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Campaigning for &quot;insights without asking&quot; and global social intelligence innovation.</span>
              </p>
            </div>

            {/* Leader 4 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">Dan Foreman</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Strategic integration and market-facing execution.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
