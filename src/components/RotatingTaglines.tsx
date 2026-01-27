"use client";

import React, { useEffect, useState } from "react";

const TAGLINES = [
  "Ground Truth for High-Stakes Decisions",
  "Decision-Making, Grounded in Reality",
  "Before You Decide. Listen.",
  "Where Strategy Meets Reality",
];

export function RotatingTaglines() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TAGLINES.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-bakamo-panel/80 via-black/60 to-bakamo-panel/80 backdrop-blur-xl p-8 shadow-2xl">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-bakamo-cyan/30 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-bakamo-indigo/30 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-bakamo-indigo/30 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-bakamo-cyan/30 rounded-br-2xl" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-gradient-to-r from-bakamo-cyan/10 via-bakamo-indigo/10 to-bakamo-cyan/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          {TAGLINES.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-bakamo-cyan to-bakamo-indigo"
                  : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

        <div className="h-16 flex items-center justify-center overflow-hidden">
          <p
            className={`text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bakamo-cyan via-white to-bakamo-indigo transition-all duration-500 ${
              isAnimating
                ? "opacity-0 translate-y-4 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            }`}
          >
            {TAGLINES[currentIndex]}
          </p>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mt-4">
          Bakamo USA
        </p>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div
          className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_6s_infinite]"
          style={{
            animation: "shimmer 6s infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
