"use client";

import { useEffect, useRef } from "react";

/**
 * SVG illustration of a house with cracks forming in the ground beneath it.
 * Lines draw themselves on scroll via CSS animation triggered by IntersectionObserver.
 */
export default function ArchitecturalDiagram() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("line-draw");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
      aria-label="Architectural diagram: a house with cracks forming in the earth beneath it"
    >
      {/* House outline */}
      <path
        d="M120 160 L200 90 L280 160"
        stroke="#2c2c2c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M140 160 L140 230 L260 230 L260 160"
        stroke="#2c2c2c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Door */}
      <path
        d="M185 230 L185 195 L215 195 L215 230"
        stroke="#2c2c2c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Window left */}
      <path
        d="M150 175 L170 175 L170 200 L150 200 Z"
        stroke="#2c2c2c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Window right */}
      <path
        d="M230 175 L250 175 L250 200 L230 200 Z"
        stroke="#2c2c2c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Ground line */}
      <path
        d="M40 230 L360 230"
        stroke="#a39e93"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Cracks beneath */}
      <path
        d="M180 230 L172 260 L160 280 L148 310"
        stroke="#c9a96e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M172 260 L185 275 L178 300"
        stroke="#c9a96e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M220 230 L228 255 L240 285 L250 310"
        stroke="#c9a96e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M228 255 L215 278 L222 305"
        stroke="#c9a96e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small debris cracks */}
      <path
        d="M160 230 L155 248 L148 258"
        stroke="#d6d0c4"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M245 230 L250 250 L258 262"
        stroke="#d6d0c4"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
