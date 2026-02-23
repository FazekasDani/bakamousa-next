"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KimiFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Border draw from center
      const st1 = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(borderRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "expo.out" });
        },
        once: true,
      });
      localTriggers.current.push(st1);

      // Logo entrance
      const st2 = ScrollTrigger.create({
        trigger: logoRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "expo.out", delay: 0.2 }
          );
        },
        once: true,
      });
      localTriggers.current.push(st2);

      // Tagline entrance
      const st3 = ScrollTrigger.create({
        trigger: taglineRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(
            taglineRef.current,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "expo.out", delay: 0.4 }
          );
        },
        once: true,
      });
      localTriggers.current.push(st3);

      // Copyright entrance
      const st4 = ScrollTrigger.create({
        trigger: copyrightRef.current,
        start: "top 95%",
        onEnter: () => {
          gsap.fromTo(copyrightRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 0.6 });
        },
        once: true,
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
    <footer ref={sectionRef} className="relative w-full py-16 lg:py-24 bg-white">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 px-6 lg:px-12">
        <div ref={borderRef} className="h-px bg-stone origin-center" style={{ transform: "scaleX(0)" }} />
      </div>

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div ref={logoRef} className="mb-4 opacity-0">
            <span className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Bakamo<span className="font-light text-earth">.</span>
            </span>
          </div>

          {/* Tagline */}
          <p ref={taglineRef} className="text-xl lg:text-2xl text-charcoal mb-8 opacity-0">
            Build on Reality.
          </p>

          {/* Copyright */}
          <p ref={copyrightRef} className="text-sm text-earth opacity-0">
            &copy; {new Date().getFullYear()} Bakamo USA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
