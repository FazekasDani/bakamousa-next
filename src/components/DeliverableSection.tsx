"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type DeliverableContent = {
  label: string;
  heading: string;
  layers: { name: string; description: string }[];
  bodyText: string;
  cracksList: string[];
  conclusion: string;
  conclusionHighlight: string;
};

export default function DeliverableSection({ content }: { content: DeliverableContent }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const bodyTextRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLParagraphElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  const layers = content.layers;

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

      // Layers stagger entrance
      if (layersRef.current) {
        const layerElements = layersRef.current.querySelectorAll(".layer-item");
        const st2 = ScrollTrigger.create({
          trigger: layersRef.current,
          start: "top 75%",
          onEnter: () => {
            gsap.fromTo(
              layerElements,
              { y: 100, scaleX: 0, opacity: 0 },
              { y: 0, scaleX: 1, opacity: 1, duration: 0.7, stagger: 0.2, ease: "expo.out", transformOrigin: "left center" }
            );
          },
          once: true,
        });
        localTriggers.current.push(st2);
      }

      // Body text entrance
      if (bodyTextRef.current) {
        const items = bodyTextRef.current.querySelectorAll("p");
        const st3 = ScrollTrigger.create({
          trigger: bodyTextRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(items, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "expo.out" });
          },
          once: true,
        });
        localTriggers.current.push(st3);
      }

      // Conclusion entrance
      const st4 = ScrollTrigger.create({
        trigger: conclusionRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            conclusionRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }
          );
        },
        once: true,
      });
      localTriggers.current.push(st4);

      // Parallax on layers
      const st5 = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (layersRef.current) {
            const layerElements = layersRef.current.querySelectorAll(".layer-item");
            layerElements.forEach((layer, index) => {
              gsap.to(layer, { y: (self.progress - 0.5) * (30 - index * 10), duration: 0.1 });
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

  // Compute layer widths based on index (same as original)
  const layerWidths = ["60%", "80%", "100%"];

  return (
    <section ref={sectionRef} className="relative w-full py-28 md:py-36 bg-white overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <p className="text-xs uppercase tracking-[0.2em] text-earth mb-6">{content.label}</p>
          <h2 ref={headingRef} className="text-4xl lg:text-6xl font-bold mb-16 opacity-0 text-ink">
            {content.heading}
          </h2>

          {/* Layers visual */}
          <div ref={layersRef} className="relative mb-16">
            <div className="space-y-4">
              {layers.map((layer, index) => {
                const isDark = index === layers.length - 1;
                return (
                  <div key={index} className="layer-item relative opacity-0" style={{ width: layerWidths[index] || "100%" }}>
                    <div
                      className={`h-20 lg:h-24 rounded-xl flex items-center px-6 lg:px-8 transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${isDark
                          ? "bg-gradient-to-r from-charcoal to-ink"
                          : index === 0
                            ? "bg-gradient-to-r from-warm-grey to-stone/50"
                            : "bg-gradient-to-r from-stone/60 to-earth/40"
                        }`}
                      style={{
                        boxShadow: isDark
                          ? "0 25px 50px -12px rgba(0,0,0,0.15)"
                          : "0 10px 30px -10px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className={`text-xl lg:text-2xl font-bold ${isDark ? "text-white" : "text-ink"}`}>
                          {layer.name}
                        </span>
                        <span
                          className={`text-base lg:text-lg group-hover:opacity-100 opacity-70 transition-opacity ${isDark ? "text-stone" : "text-charcoal"
                            }`}
                        >
                          {layer.description}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Body text */}
          <div ref={bodyTextRef} className="max-w-2xl mb-12">
            <p className="text-lg lg:text-xl leading-relaxed text-charcoal mb-6 opacity-0">
              {content.bodyText}
            </p>

            <div className="space-y-3 pl-6 border-l-2 border-stone/40">
              {content.cracksList.map((crack, index) => (
                <p key={index} className="text-lg font-medium text-ink opacity-0">{crack}</p>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <p ref={conclusionRef} className="text-2xl lg:text-3xl font-bold opacity-0 text-ink">
            {content.conclusion}
            <br />
            <span className="text-highlight">{content.conclusionHighlight}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
