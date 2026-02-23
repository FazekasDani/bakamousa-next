"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      'We map the "underground" drivers of culture — the anxieties, identities, and signals that shape decisions.',
  },
  {
    number: "02",
    title: "Measure",
    description:
      "We quantify the weight each narrative can carry — statistically, demographically, nationally.",
  },
  {
    number: "03",
    title: "Stress-Test",
    description:
      "We calculate if your strategy can survive on this terrain — before you break ground.",
  },
];

const comparison = {
  old: "Static surveys & charts",
  new: "Dynamic, living narrative networks",
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned scroll experience
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          // Update progress bar
          if (progressRef.current) {
            gsap.to(progressRef.current, { scaleY: progress, duration: 0.1 });
          }

          // Update active step
          if (progress < 0.33) {
            setActiveStep(0);
          } else if (progress < 0.66) {
            setActiveStep(1);
          } else {
            setActiveStep(2);
          }
        },
      });
      localTriggers.current.push(st);

      // Comparison entrance
      const comparisonEl = sectionRef.current?.querySelector(".comparison-section");
      if (comparisonEl) {
        const st2 = ScrollTrigger.create({
          trigger: comparisonEl,
          start: "top 90%",
          onEnter: () => {
            gsap.fromTo(comparisonEl, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
          },
          once: true,
        });
        localTriggers.current.push(st2);
      }
    });

    return () => {
      localTriggers.current.forEach((st) => st.kill());
      localTriggers.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="insights" className="relative w-full min-h-screen bg-off-white overflow-hidden">
      <div className="w-full h-screen px-6 lg:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section label */}
          <p className="text-xs uppercase tracking-[0.2em] text-earth mb-10">The Bakamo Method</p>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Progress indicator */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center">
              <div className="relative w-1 h-64 bg-stone/30 rounded-full overflow-hidden">
                <div
                  ref={progressRef}
                  className="absolute bottom-0 left-0 w-full bg-ink rounded-full origin-bottom"
                  style={{ transform: "scaleY(0)" }}
                />
              </div>
            </div>

            {/* Steps content */}
            <div className="lg:col-span-7">
              <div className="relative h-[300px]">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeStep
                        ? "opacity-100 translate-x-0"
                        : index < activeStep
                        ? "opacity-0 -translate-x-12"
                        : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    <div className="flex items-start gap-6">
                      <span
                        className={`text-7xl lg:text-8xl font-bold transition-all duration-500 ${
                          index === activeStep ? "text-ink" : "text-stone"
                        }`}
                        style={{
                          WebkitTextStroke: index === activeStep ? "0" : "2px var(--ink)",
                          color: index === activeStep ? "var(--ink)" : "transparent",
                        }}
                      >
                        {step.number}
                      </span>
                      <div className="pt-8">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-ink">{step.title}</h3>
                        <p className="text-lg lg:text-xl text-charcoal leading-relaxed max-w-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison section */}
            <div className="lg:col-span-4 comparison-section opacity-0">
              <div className="p-8 bg-white rounded-2xl border border-stone/20">
                <p className="text-xs uppercase tracking-[0.2em] text-earth mb-6">Our Approach</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-earth">
                    <X className="w-5 h-5 flex-shrink-0" />
                    <span className="line-through">{comparison.old}</span>
                  </div>
                  <div className="flex items-center gap-3 text-ink font-medium">
                    <Check className="w-5 h-5 flex-shrink-0 text-highlight" />
                    <span>{comparison.new}</span>
                  </div>
                </div>
              </div>

              {/* Step indicators */}
              <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-12 h-1 rounded-full transition-all duration-500 ${
                      index === activeStep ? "bg-ink" : "bg-stone/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
