"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type MetaphorContent = {
  heading: string;
  paragraph1: string;
  highlightWord: string;
  timeline: { year: string; text: string }[];
  paragraph2: string;
  paragraph3: string;
  sideLabel: string;
  sideQuote: string;
};

export default function MetaphorSection({ content }: { content: MetaphorContent }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance — clip-path wipe
      const st1 = ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { x: -100, opacity: 0, clipPath: "inset(0 100% 0 0)" },
            { x: 0, opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "expo.out" }
          );
        },
        once: true,
      });
      localTriggers.current.push(st1);

      // Paragraphs stagger entrance
      if (paragraphsRef.current) {
        const paragraphs = paragraphsRef.current.querySelectorAll("p, .stagger-item");
        const st2 = ScrollTrigger.create({
          trigger: paragraphsRef.current,
          start: "top 75%",
          onEnter: () => {
            gsap.fromTo(
              paragraphs,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "expo.out" }
            );
          },
          once: true,
        });
        localTriggers.current.push(st2);
      }

      // Highlight word animation
      const st3 = ScrollTrigger.create({
        trigger: highlightRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(
            highlightRef.current,
            { scale: 0.9, color: "var(--earth)" },
            { scale: 1, color: "var(--ink)", duration: 0.5, ease: "elastic.out(1, 0.5)" }
          );
        },
        once: true,
      });
      localTriggers.current.push(st3);

      // SVG line draw
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });

        const st4 = ScrollTrigger.create({
          trigger: lineRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(lineRef.current, { strokeDashoffset: 0, duration: 0.8, ease: "expo.out" });
          },
          once: true,
        });
        localTriggers.current.push(st4);
      }

      // Parallax on highlight
      const st5 = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (highlightRef.current) {
            gsap.to(highlightRef.current, {
              y: (self.progress - 0.5) * -60,
              scale: 1 + self.progress * 0.05,
              duration: 0.1,
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
    <section ref={sectionRef} id="about" className="relative w-full py-28 md:py-36 bg-off-white overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 ref={headingRef} className="text-4xl lg:text-6xl font-bold mb-16 opacity-0 text-ink">
            {content.heading}
          </h2>

          {/* Content grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main content */}
            <div ref={paragraphsRef} className="lg:col-span-7 space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed text-charcoal opacity-0">
                {content.paragraph1}{" "}
                <span ref={highlightRef} className="inline-block font-semibold text-2xl lg:text-3xl opacity-0">
                  {content.highlightWord}
                </span>{" "}
                of society.
              </p>

              <div className="space-y-2 py-4 stagger-item opacity-0">
                {content.timeline.map((item, index) => (
                  <p key={index} className="text-lg lg:text-xl leading-relaxed">
                    <span className="font-semibold text-ink">{item.year}</span>{" "}
                    <span className="text-charcoal">{item.text}</span>
                  </p>
                ))}
              </div>

              <p className="text-lg lg:text-xl leading-relaxed text-charcoal opacity-0">
                {content.paragraph2}
              </p>

              <p className="text-lg lg:text-xl leading-relaxed font-medium text-ink opacity-0">
                {content.paragraph3}
              </p>
            </div>

            {/* Side accent */}
            <div className="lg:col-span-5 relative">
              <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 200 400" fill="none">
                <line ref={lineRef} x1="100" y1="0" x2="50" y2="400" stroke="var(--stone)" strokeWidth="1" />
              </svg>

              <div className="relative z-10 lg:pt-24">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone/20">
                  <p className="text-xs uppercase tracking-[0.2em] text-earth mb-4">{content.sideLabel}</p>
                  <p className="text-2xl lg:text-3xl font-bold leading-tight text-ink">
                    {content.sideQuote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
