"use client";

import React from "react";

interface StageCardProps {
  stage: number;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tagline: string;
  accentColor: "cyan" | "indigo";
}

export function StageCard({
  stage,
  title,
  subtitle,
  description,
  points,
  tagline,
  accentColor,
}: StageCardProps) {
  const isRadar = accentColor === "cyan";

  return (
    <div className="group relative">
      {/* Outer glow container */}
      <div
        className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${
          isRadar
            ? "from-bakamo-cyan/30 via-bakamo-cyan/10 to-transparent"
            : "from-bakamo-indigo/30 via-bakamo-indigo/10 to-transparent"
        } opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          {isRadar ? (
            // Radar circles
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-bakamo-cyan/30"
              />
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-bakamo-cyan/20"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-bakamo-cyan/10"
              />
              <line
                x1="100"
                y1="100"
                x2="190"
                y2="100"
                stroke="currentColor"
                strokeWidth="2"
                className="text-bakamo-cyan/40 origin-center animate-[spin_4s_linear_infinite]"
                style={{ transformOrigin: "100px 100px" }}
              />
            </svg>
          ) : (
            // Chart bars
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <rect x="20" y="120" width="30" height="60" fill="currentColor" className="text-bakamo-indigo/20" />
              <rect x="60" y="80" width="30" height="100" fill="currentColor" className="text-bakamo-indigo/30" />
              <rect x="100" y="100" width="30" height="80" fill="currentColor" className="text-bakamo-indigo/25" />
              <rect x="140" y="50" width="30" height="130" fill="currentColor" className="text-bakamo-indigo/35" />
            </svg>
          )}
        </div>

        {/* Stage number badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 ${
            isRadar
              ? "bg-bakamo-cyan/20 text-bakamo-cyan"
              : "bg-bakamo-indigo/20 text-bakamo-indigo"
          }`}
        >
          <span className={`w-6 h-6 rounded-full ${isRadar ? "bg-bakamo-cyan" : "bg-bakamo-indigo"} text-black flex items-center justify-center text-xs font-bold`}>
            {stage}
          </span>
          Stage {stage}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className={`text-lg font-medium mb-6 ${isRadar ? "text-bakamo-cyan" : "text-bakamo-indigo"}`}>
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed mb-6">{description}</p>

        {/* Points */}
        <div className="space-y-3 mb-6">
          <p className="text-sm text-zinc-300 font-medium">This {isRadar ? "surfaces" : "delivers"}:</p>
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                  isRadar ? "bg-bakamo-cyan" : "bg-bakamo-indigo"
                }`}
              />
              <span className="text-zinc-300">{point}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className={`pt-4 border-t ${isRadar ? "border-bakamo-cyan/20" : "border-bakamo-indigo/20"}`}>
          <p className={`font-semibold ${isRadar ? "text-bakamo-cyan" : "text-bakamo-indigo"}`}>
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
