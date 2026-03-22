"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BANNER_KEY = "bakamo_announcement_hu_election_2026";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(BANNER_KEY);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(BANNER_KEY, "dismissed");
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(BANNER_KEY, "dismissed");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-4 px-4 py-3 text-sm"
      style={{
        background: "linear-gradient(90deg, rgba(201,169,110,0.15), rgba(201,169,110,0.08) 50%, rgba(201,169,110,0.15))",
        borderBottom: "1px solid rgba(201,169,110,0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-accent shrink-0">
        New Research
      </span>
      <p className="text-xs font-light text-text-secondary text-center">
        Bakamo publishes psychographic analysis of Hungarian political discourse ahead of April&nbsp;12
      </p>
      <Link
        href="/elections"
        onClick={dismiss}
        className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-accent border border-accent/40 rounded-full px-3 py-1 hover:bg-accent/10 transition-colors"
      >
        Read Report
      </Link>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="shrink-0 text-text-muted hover:text-white transition-colors ml-1"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
