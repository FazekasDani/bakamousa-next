"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/* ─── Office locations with map coordinates (Mercator-ish %) ─── */
const OFFICES = [
  { city: "New Jersey", country: "USA", x: 28, y: 38 },
  { city: "London", country: "UK", x: 48, y: 33 },
  { city: "Dortmund", country: "Germany", x: 51, y: 33 },
  { city: "Budapest", country: "Hungary", x: 53, y: 35 },
  { city: "Kuala Lumpur", country: "Malaysia", x: 77, y: 57 },
];

/* Additional coverage dots (no label, just presence) */
const COVERAGE_DOTS = [
  { x: 22, y: 42 },   // LA / West Coast
  { x: 38, y: 52 },   // São Paulo
  { x: 46, y: 28 },   // Scandinavia
  { x: 56, y: 38 },   // Istanbul
  { x: 60, y: 34 },   // Middle East
  { x: 68, y: 37 },   // Mumbai
  { x: 82, y: 42 },   // Tokyo
  { x: 85, y: 62 },   // Sydney
  { x: 44, y: 48 },   // Lagos
  { x: 72, y: 46 },   // Singapore 
];

function getEmailForDomain(): string {
  if (typeof window === "undefined") return "info@bakamousa.com";
  const host = window.location.hostname.toLowerCase();
  if (host.includes("bakamosocial")) return "info@bakamosocial.com";
  return "info@bakamousa.com";
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Set correct email on mount
    if (emailRef.current) {
      const email = getEmailForDomain();
      emailRef.current.href = `mailto:${email}`;
      emailRef.current.textContent = email;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
      gsap.fromTo(
        ".contact-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".contact-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "expo.out", delay: 0.5 }
      );

      // Map entrance
      gsap.fromTo(
        ".world-map",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out", delay: 0.4 }
      );

      // Office dots pulse in
      gsap.fromTo(
        ".office-dot",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.12, ease: "back.out(2)", delay: 0.8 }
      );

      // Coverage dots fade in
      gsap.fromTo(
        ".coverage-dot",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.4, duration: 0.4, stagger: 0.06, ease: "expo.out", delay: 1.2 }
      );

      // Info cards
      gsap.fromTo(
        ".info-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "expo.out", delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-20 px-6">
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-20">
        <p className="contact-subtitle text-accent uppercase tracking-[0.2em] text-sm mb-4">
          Get in Touch
        </p>
        <h1 className="contact-title text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] text-white">
          Contact
        </h1>
      </div>

      {/* ─── World Map ─── */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="world-map relative w-full aspect-[2/1] bg-dark-grey border border-border-grey rounded-sm overflow-hidden">
          {/* Grid lines for subtle geo feel */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            {/* Horizontal lines */}
            {[10, 20, 30, 40].map((y) => (
              <line
                key={`h-${y}`}
                x1="0" y1={y} x2="100" y2={y}
                stroke="var(--border-grey)" strokeWidth="0.15"
              />
            ))}
            {/* Vertical lines */}
            {[20, 40, 60, 80].map((x) => (
              <line
                key={`v-${x}`}
                x1={x} y1="0" x2={x} y2="50"
                stroke="var(--border-grey)" strokeWidth="0.15"
              />
            ))}

            {/* Simplified world outline (abstract) */}
            <path
              d="M5,22 Q10,18 15,20 Q18,16 22,18 L28,15 Q32,14 35,17 L38,18
                 Q40,15 42,16 L45,14 Q48,12 50,14 L53,13 Q55,15 57,14 L60,16
                 Q63,14 65,16 L68,15 Q72,17 75,16 L78,18 Q80,16 82,18 L85,17
                 Q88,19 90,18 L95,20
                 M10,25 Q15,28 18,26 L22,28 Q25,30 28,28
                 M32,25 Q35,22 38,23 L42,21 Q45,23 48,22 L55,24 Q58,22 60,24
                 L62,23 Q65,25 68,24
                 M38,30 Q40,35 42,38 L40,42 Q38,45 36,42
                 M55,28 Q58,32 56,36 L58,40 Q56,42 54,38
                 M62,26 Q65,30 68,32 L72,28 Q75,30 78,28 L80,32 Q82,35 85,33
                 M75,35 Q78,40 80,38 Q82,42 85,44 L88,40"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="0.2"
              opacity="0.3"
            />
          </svg>

          {/* Office dots with labels */}
          {OFFICES.map((office, i) => (
            <div
              key={i}
              className="office-dot absolute"
              style={{ left: `${office.x}%`, top: `${office.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Pulse ring */}
              <div className="absolute inset-0 w-4 h-4 -m-2 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
              {/* Dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(201,169,110,0.5)]" />
              {/* Label */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] text-white font-medium tracking-wide">{office.city}</span>
              </div>
            </div>
          ))}

          {/* Coverage dots (smaller, muted) */}
          {COVERAGE_DOTS.map((dot, i) => (
            <div
              key={i}
              className="coverage-dot absolute w-1.5 h-1.5 rounded-full bg-text-muted"
              style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: "translate(-50%, -50%)" }}
            />
          ))}

          {/* Global coverage label */}
          <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Global Coverage
          </div>
        </div>
      </div>

      {/* ─── Contact Info Grid ─── */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-24">
        {/* Offices */}
        <div className="info-card diff-card">
          <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium">Offices</span>
          <div className="mt-6 space-y-4">
            {OFFICES.map((office, i) => (
              <div key={i}>
                <p className="text-white text-sm font-medium">{office.city}</p>
                <p className="text-text-muted text-xs">{office.country}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get in Touch */}
        <div className="info-card diff-card">
          <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium">Get in Touch</span>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-text-muted text-xs mb-1">Email</p>
              <a
                ref={emailRef}
                href="mailto:info@bakamousa.com"
                className="text-white text-sm hover:text-accent transition-colors"
              >
                info@bakamousa.com
              </a>
            </div>
            <div>
              <p className="text-text-muted text-xs mb-1">Phone</p>
              <a
                href="tel:+441553432939"
                className="text-white text-sm hover:text-accent transition-colors"
              >
                +44 1553 432939
              </a>
            </div>
          </div>
        </div>

        {/* Request Case Studies */}
        <div className="info-card diff-card flex flex-col">
          <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium">Case Studies</span>
          <p className="mt-6 text-text-secondary text-sm leading-relaxed flex-1">
            See how we&rsquo;ve helped Sanofi, Janssen, and other leading organizations uncover the real narratives driving their markets.
          </p>
          <a
            href="mailto:info@bakamousa.com?subject=Request%20Case%20Studies"
            className="cta-button mt-6 text-xs"
          >
            Request Case Studies
          </a>
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="section-divider mb-10" />
        <p className="text-text-muted text-sm tracking-wide">
          Ready to fix your quant?
        </p>
      </div>
    </div>
  );
}
