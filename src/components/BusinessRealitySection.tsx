"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessRealitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const overlapCardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main card 3D flip entrance
      const st1 = ScrollTrigger.create({
        trigger: mainCardRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            mainCardRef.current,
            { rotateY: -15, x: -100, opacity: 0 },
            { rotateY: 0, x: 0, opacity: 1, duration: 0.8, ease: "expo.out" }
          );
        },
        once: true,
      });
      localTriggers.current.push(st1);

      // Overlap card slide in
      const st2 = ScrollTrigger.create({
        trigger: overlapCardRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            overlapCardRef.current,
            { x: 100, y: 50, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 0.7, ease: "expo.out", delay: 0.3 }
          );
        },
        once: true,
      });
      localTriggers.current.push(st2);

      // Connection line draw
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });

        const st3 = ScrollTrigger.create({
          trigger: lineRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(lineRef.current, { strokeDashoffset: 0, duration: 0.6, ease: "expo.out", delay: 0.6 });
          },
          once: true,
        });
        localTriggers.current.push(st3);
      }

      // Scroll-based subtle rotation
      const st4 = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (mainCardRef.current) {
            gsap.to(mainCardRef.current, { rotateY: (self.progress - 0.5) * 10, duration: 0.1 });
          }
          if (overlapCardRef.current) {
            gsap.to(overlapCardRef.current, { y: (self.progress - 0.5) * -60, duration: 0.1 });
          }
        },
      });
      localTriggers.current.push(st4);
    });

    return () => {
      localTriggers.current.forEach((st) => st.kill());
      localTriggers.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-28 md:py-36 bg-white overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Main card */}
            <div
              ref={mainCardRef}
              className="relative z-10 w-full lg:w-[70%] p-8 lg:p-12 bg-white rounded-3xl opacity-0"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08), 0 12px 24px -8px rgba(0,0,0,0.04)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-highlight mb-6">The Business Reality</p>

              <h3 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight text-ink">
                Would you build a high-rise without a geological survey?
              </h3>

              <p className="text-lg leading-relaxed text-charcoal mb-6">
                In construction, before a single beam is laid, engineers test the ground. They look for load-bearing
                capacity, hidden water tables, and fault lines.
              </p>

              <p className="text-lg leading-relaxed text-charcoal">
                In business, organisations routinely pour strategic foundations without testing the cultural soil.
              </p>
            </div>

            {/* Overlap card */}
            <div
              ref={overlapCardRef}
              className="relative lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/3 w-full lg:w-[45%] mt-6 lg:mt-0 p-8 lg:p-10 bg-off-white rounded-3xl opacity-0"
              style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.06)" }}
            >
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-charcoal">
                  They run surveys that validate internal assumptions.
                </p>
                <p className="text-base leading-relaxed text-charcoal">
                  They test language that was written inside a boardroom.
                </p>
                <div className="pt-4 border-t border-stone/40">
                  <p className="text-base leading-relaxed font-medium text-ink">
                    This isn&apos;t ground inspection. It&apos;s blueprint confirmation. And in unstable terrain,
                    blueprint confirmation is a liability.
                  </p>
                </div>
              </div>
            </div>

            {/* Connection line SVG */}
            <svg
              className="hidden lg:block absolute top-1/2 left-[60%] w-[20%] h-32 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 200 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                ref={lineRef}
                d="M0 50 Q100 0 200 50"
                stroke="var(--stone)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
