"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OFFICES = [
  { city: "New Jersey", country: "USA" },
  { city: "London", country: "UK" },
  { city: "Dortmund", country: "Germany" },
  { city: "Budapest", country: "Hungary" },
  { city: "Kuala Lumpur", country: "Malaysia" },
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
    if (emailRef.current) {
      const email = getEmailForDomain();
      emailRef.current.href = `mailto:${email}`;
      emailRef.current.textContent = email;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      gsap.fromTo(
        ".info-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "expo.out", delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Grain */}
      <div className="grain-overlay" />

      {/* ════════ Earth Video Hero ════════ */}
      <section className="relative w-full h-[70vh] min-h-[480px] overflow-hidden flex items-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
        >
          <source src="/media/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-near-black/80 via-transparent to-near-black" />

        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-16">
          <p className="contact-subtitle text-accent uppercase tracking-[0.2em] text-sm mb-4">
            The Consult
          </p>
          <h1 className="contact-title text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] text-white">
            Book a Strategy<br />Stress-Test
          </h1>
        </div>
      </section>

      {/* ─── Contact Info Grid ─── */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 py-24">
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

        {/* Request Strategy Stress-Test */}
        <div className="info-card diff-card flex flex-col">
          <span className="text-accent text-xs uppercase tracking-[0.15em] font-medium">Strategy Stress-Test</span>
          <p className="mt-6 text-text-secondary text-sm leading-relaxed flex-1">
            Find out if your strategy can survive the real world. We&rsquo;ll identify the cultural
            fault lines before they become market failures.
          </p>
          <a
            href="mailto:info@bakamousa.com?subject=Book%20a%20Strategy%20Stress-Test"
            className="cta-button mt-6 text-xs"
          >
            Book a Stress-Test
          </a>
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="max-w-5xl mx-auto text-center px-6 pb-20">
        <div className="section-divider mb-10" />
        <p className="text-text-muted text-sm tracking-wide">
          Ready to build on reality?
        </p>
      </div>
    </div>
  );
}
