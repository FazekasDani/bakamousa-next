import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-r from-blue-50 via-white to-gray-100">
        {/* Visual: Split screen idea placeholder */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-blue-100 opacity-30" />
          <div className="w-1/2 bg-gray-200 opacity-30" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          {/* Logos */}
          <div className="flex items-center mb-6">
            <img src="/bakamo-logo.png" alt="Bakamo Logo" className="h-12 mr-4" />
            <span className="text-3xl font-bold">X</span>
            <img src="/sandra-baumann-logo.png" alt="Sandra Baumann Logo" className="h-12 ml-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Measure Reality. Not Assumptions.</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">The Truth, Quantified.</h2>
          <p className="max-w-2xl text-lg md:text-xl mb-6 text-center">
            We’ve solved the biggest problem in traditional market research: The bias of the question itself.<br />
            Introducing the partnership between Bakamo Social’s unfiltered intelligence and renowned US quantitative researcher Sandra Baumann. We don't start with a hypothesis. We start with reality, and then we measure it with nationwide rigor.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-800 transition">De-Risk Your Next Study</a>
            <a href="#how-it-works" className="text-blue-700 underline font-semibold px-4 py-3">How It Works</a>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 px-4 bg-white" id="problem">
        <div className="max-w-3xl mx-auto text-center">
          {/* Visual: Boardroom bubble icon placeholder */}
          <div className="mx-auto mb-4">
            <span role="img" aria-label="Boardroom in bubble" className="text-5xl">💼🫧</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">The Echo Chamber</h3>
          <p className="text-lg mb-4 font-semibold">Your biggest risk isn't bad data. It's irrelevant questions.</p>
          <p className="mb-2">Traditional quantitative research has a fatal flaw. It begins in a boardroom, defining what you want to learn. You write surveys based on internal assumptions, creating an echo chamber where consumers can only answer what you decide to ask.</p>
          <p className="mb-2">You get statistically significant answers to culturally insignificant questions.</p>
          <p className="mb-2">We flipped the model. We don’t ask. We listen first.</p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-16 px-4 bg-gray-50" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Unfiltered Reality Meets Rigorous Validation</h3>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Bakamo Social Column */}
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <h4 className="text-xl font-bold mb-2">THE RADAR: Discovering Unfiltered Reality</h4>
              <p className="font-semibold mb-2">"Insights Without Asking"</p>
              <ul className="list-disc ml-6 mb-2">
                <li>Bakamo analyzes millions of organic, unprompted conversations across the digital ecosystem.</li>
                <li>We identify the language consumers actually use, the needs they express when no brand is watching, and the "unknown unknowns" that traditional surveys miss.</li>
              </ul>
              <ul className="list-disc ml-6">
                <li>Discover emerging narratives.</li>
                <li>Identify authentic consumer language.</li>
                <li>Define the right inputs for Quant.</li>
              </ul>
            </div>
            {/* Sandra Baumann Column */}
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <h4 className="text-xl font-bold mb-2">THE ENGINE: Nationwide Quantification</h4>
              <p className="font-semibold mb-2">"Statistical Rigor & Scale"</p>
              <ul className="list-disc ml-6 mb-2">
                <li>Sandra Baumann, one of America’s most trusted names in quantitative research, takes Bakamo’s organic insights and subjects them to rigorous statistical validation.</li>
                <li>We design survey instruments based on reality, not guesswork, scaled to representative US samples.</li>
              </ul>
              <ul className="list-disc ml-6">
                <li>Validate the size of the opportunity.</li>
                <li>Board-ready statistical confidence.</li>
                <li>Measure prevalence across demographics.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Why This Matters for the US Market</h3>
          <ul className="list-decimal ml-8 mb-4">
            <li className="mb-2"><b>De-Risk Your Research Budget:</b> Stop spending six figures validating internal assumptions. We ensure you are measuring concepts that actually exist in the minds of consumers before you deploy a nationwide survey.</li>
            <li className="mb-2"><b>Speed to Culture:</b> Traditional survey design takes weeks of internal alignment. Bakamo accelerates the front-end by harvesting real-time cultural topics, allowing Baumann to get into the field faster with relevant questions.</li>
            <li className="mb-2"><b>The End of the "Say-Do" Gap:</b> By grounding our quant in unprompted social behavior, we bridge the gap between what people say in surveys and what they actually care about in real life.</li>
          </ul>
        </div>
      </section>

      {/* AUTHORITY / TRUST SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Visual: Professional photos placeholder */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-4xl">SB</div>
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-4xl">B</div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Proven Innovation meets US Credibility.</h3>
          <blockquote className="italic mb-4">“I’ve spent my career ensuring data is statistically sound. But my biggest concern has always been the inputs—are we asking the right questions? Partnering with Bakamo solves the input problem. They provide the raw, unfiltered truth of what’s happening in culture, allowing me to design quantitative studies that are wildly more accurate to reality.”<br /><span className="font-bold">— Sandra Baumann</span></blockquote>
          <blockquote className="italic mb-4">“[Short quote from Bakamo leadership about entering the US market and the power of this combination.]”<br /><span className="font-bold">— [Bakamo Founder Name/Title]</span></blockquote>
        </div>
      </section>

      {/* FOOTER / FINAL CTA */}
      <footer className="py-12 px-4 bg-blue-900 text-white text-center" id="contact">
        <h3 className="text-2xl font-bold mb-4">Are you ready to measure what actually matters?</h3>
        <p className="mb-6">Let’s discuss how Grounded Quantification can calibrate your upcoming segmentation, tracker, or innovation pipeline.</p>
        <a href="mailto:info@bakamousa.com" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold shadow hover:bg-gray-100 transition mb-4 inline-block">Schedule an Introduction with Sandra & Bakamo</a>
        <div className="mt-8 text-sm">© 2024 Bakamo Social. All Rights Reserved. <a href="/privacy-policy" className="underline">Privacy Policy</a>.</div>
      </footer>
    </main>
  );
}