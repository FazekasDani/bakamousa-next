"use client";

import React, { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Bakamo showed us what our customers actually think — not what we assumed they did. It changed our entire product strategy.",
    author: "Chief Strategy Officer",
    company: "Fortune 100 Consumer Brand",
  },
  {
    quote: "The gap between what our surveys told us and what Bakamo revealed was staggering. We were asking all the wrong questions.",
    author: "VP of Consumer Insights",
    company: "Global CPG Company",
  },
  {
    quote: "Ground truth intelligence that actually moves the needle. Our board presentations are now anchored in reality, not assumptions.",
    author: "CMO",
    company: "Financial Services Leader",
  },
  {
    quote: "We stopped wasting research budget on validating internal hypotheses. Bakamo tells us what matters before we even ask.",
    author: "Head of Strategy",
    company: "Tech Enterprise",
  },
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Main testimonial display */}
      <div className="relative h-[280px] md:h-[220px] overflow-hidden">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${
              index === activeIndex
                ? "opacity-100 translate-x-0"
                : index < activeIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Quote */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-8 -left-4 text-6xl text-bakamo-cyan/20 font-serif">"</div>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="absolute -bottom-8 -right-4 text-6xl text-bakamo-cyan/20 font-serif rotate-180">"</div>
            </div>

            {/* Attribution */}
            <div className="mt-8">
              <p className="text-bakamo-cyan font-semibold">{testimonial.author}</p>
              <p className="text-zinc-500 text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative h-1 rounded-full transition-all duration-500 ${
              index === activeIndex ? "w-12 bg-bakamo-cyan" : "w-6 bg-white/20 hover:bg-white/40"
            }`}
          >
            {index === activeIndex && (
              <div className="absolute inset-0 rounded-full bg-bakamo-cyan animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
