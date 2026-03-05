"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function SiteNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      if (y > lastScrollY.current && y > 100) setIsHidden(true);
      else setIsHidden(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "expo.out", delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-near-black/80 backdrop-blur-md border-b border-border-grey/50"
          : "bg-transparent"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-white text-sm font-light tracking-[0.25em] hover:text-accent transition-colors"
          >
            BAKAMO
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-text-muted text-xs uppercase tracking-[0.15em] hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-text-muted text-xs uppercase tracking-[0.15em] hover:text-white transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.15em] text-accent hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
