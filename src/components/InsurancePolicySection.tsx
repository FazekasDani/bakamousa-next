"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const promises = [
  { number: "01", text: "Discovery before validation." },
  { number: "02", text: "Early detection of cultural fault lines." },
  { number: "03", text: "Confidence to build for the long term." },
];

export default function InsurancePolicySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      const st1 = ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(headingRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
        },
        once: true,
      });
      localTriggers.current.push(st1);

      // Cards 3D rise entrance
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".promise-card");
        const st2 = ScrollTrigger.create({
          trigger: cardsRef.current,
          start: "top 75%",
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 80, rotateX: 20, opacity: 0 },
              { y: 0, rotateX: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "expo.out" }
            );
          },
          once: true,
        });
        localTriggers.current.push(st2);
      }

      // Connection line
      const st3 = ScrollTrigger.create({
        trigger: lineRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "expo.out", delay: 0.5 });
        },
        once: true,
      });
      localTriggers.current.push(st3);

      // CTA entrance
      const st4 = ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" });
        },
        once: true,
      });
      localTriggers.current.push(st4);

      // Parallax on cards
      const st5 = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll(".promise-card");
            cards.forEach((card, index) => {
              gsap.to(card, { y: (self.progress - 0.5) * -(index * 20), duration: 0.1 });
            });
          }
        },
      });
      localTriggers.current.push(st5);
    });

    return () => {
      localTriggers.current.forEach((st) => st.kill());
      localTriggers.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full py-28 md:py-36 bg-off-white overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-3xl lg:text-4xl font-bold mb-16 opacity-0 text-center lg:text-left text-ink"
          >
            We provide the insurance policy for your reality:
          </h2>

          {/* Cards container */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12" style={{ perspective: "1000px" }}>
            {promises.map((promise, index) => (
              <div
                key={index}
                className="promise-card group relative p-8 bg-white rounded-2xl border border-stone/20 hover:-translate-y-2 transition-all duration-300 opacity-0"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 4px 20px -4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Number */}
                <div className="mb-6">
                  <span
                    className="text-6xl lg:text-7xl font-bold transition-all duration-500 group-hover:text-ink"
                    style={{
                      WebkitTextStroke: "2px var(--ink)",
                      color: "transparent",
                    }}
                  >
                    {promise.number}
                  </span>
                </div>

                {/* Text */}
                <p className="text-lg lg:text-xl font-medium leading-relaxed text-ink">{promise.text}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Connection line */}
          <div className="hidden md:block relative h-px mb-12">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-stone to-transparent origin-center"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="text-center opacity-0">
            <p className="text-xl lg:text-2xl font-medium mb-8 text-ink">
              Stop building on sand.
              <br />
              <span className="text-charcoal">
                Let&apos;s inspect the ground your customers are standing on.
              </span>
            </p>

            <a
              href="mailto:hello@bakamousa.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-white text-lg font-medium rounded-full hover:bg-charcoal transition-all duration-300"
            >
              <span>Start the Inspection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
