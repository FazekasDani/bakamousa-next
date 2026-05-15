"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Method", href: "/our-method" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

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
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-[11px] font-light tracking-[0.16em] text-white transition-colors hover:text-accent sm:text-sm sm:tracking-[0.25em]"
            data-analytics-event="nav_click"
            data-analytics-label="Bakamo Home"
            data-analytics-location="top_nav"
            data-analytics-destination="/"
          >
            BAKAMO
          </Link>

          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[8px] uppercase tracking-[0.08em] transition-colors hover:text-white min-[390px]:text-[9px] sm:text-xs sm:tracking-[0.15em] ${
                  item.href === "/contact" ? "text-accent" : "text-text-muted"
                }`}
                data-analytics-event="nav_click"
                data-analytics-label={item.label}
                data-analytics-location="top_nav"
                data-analytics-destination={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
