import Link from "next/link";

export const metadata = {
  title: "About | Bakamo USA",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">About Bakamo USA</h1>
        <p className="mt-2 text-zinc-600">Partnering unfiltered cultural intelligence with nationwide statistical rigor to measure what actually matters to people in the U.S.</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="mb-3">Traditional quantitative research starts with a hypothesis and a questionnaire. We start with reality. Bakamo’s social listening discovers the language, needs, and narratives people use in the wild; Sandra Baumann’s team then translates that reality into representative, board-ready quantitative instruments.</p>
        <p>We help brands and researchers reduce the risk of wasted budgets by ensuring you’re measuring genuine cultural signals, not internal assumptions.</p>
      </section>

      <section className="mb-10 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">How We Work</h3>
        <ol className="list-decimal ml-6 space-y-2">
          <li><b>Listen:</b> Harvest millions of unprompted conversations to surface real consumer language and emergent themes.</li>
          <li><b>Translate:</b> Convert authentic narratives into clear, testable constructs and measures.</li>
          <li><b>Validate:</b> Field representative surveys to quantify prevalence, size, and demographic patterns.</li>
          <li><b>Advise:</b> Deliver board-ready recommendations and measurement frameworks that scale.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Who This Is For</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>CMOs and insights leaders who need fast, defensible answers about cultural opportunity.</li>
          <li>Product and innovation teams looking to validate new concepts before large-scale investment.</li>
          <li>Research teams seeking to eliminate bias from study design and improve the actionability of results.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Ready to Ground Your Next Study?</h3>
        <p className="mb-4">Get in touch to discuss how we can de-risk your segmentation, tracker, or innovation pipeline with grounded quantification.</p>
        <a href="mailto:info@bakamousa.com" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-800 transition">Schedule an Introduction</a>
      </section>

      <div className="text-sm text-zinc-600">
        <Link href="/">← Home</Link>
      </div>
    </main>
  );
}
