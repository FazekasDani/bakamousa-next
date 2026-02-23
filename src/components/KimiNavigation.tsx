"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function KimiNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo entrance
      gsap.fromTo(
        logoRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.6, ease: "expo.out" }
      );

      // Links entrance
      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll("a");
        gsap.fromTo(
          links,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "expo.out", delay: 0.2 }
        );
      }

      // CTA entrance
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", delay: 0.4 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            className="text-xl font-bold tracking-tight text-ink hover:tracking-wider transition-all duration-300"
          >
            BAKAMO<span className="font-light text-earth">.</span>
          </Link>

          {/* Navigation Links */}
          <div ref={linksRef} className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="relative text-sm font-medium text-charcoal opacity-80 hover:opacity-100 transition-opacity after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-ink hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="relative text-sm font-medium text-charcoal opacity-80 hover:opacity-100 transition-opacity after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-ink hover:after:w-full after:transition-all after:duration-300"
            >
              Insights
            </Link>
          </div>

          {/* CTA Button */}
          <a
            ref={ctaRef}
            href="#contact"
            className="group flex items-center gap-2 px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-full hover:bg-charcoal transition-colors duration-300"
          >
            <span>Start the Inspection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}
