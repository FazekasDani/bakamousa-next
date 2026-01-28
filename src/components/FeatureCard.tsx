"use client";

import React from "react";

interface FeatureCardProps {
  number?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor?: "cyan" | "indigo";
  className?: string;
  size?: "default" | "large" | "featured";
}

export function FeatureCard({
  number,
  title,
  description,
  icon,
  accentColor = "cyan",
  className = "",
  size = "default",
}: FeatureCardProps) {
  const accentClasses = {
    cyan: {
      text: "text-bakamo-cyan",
      bg: "bg-bakamo-cyan",
      glow: "shadow-bakamo-cyan/20",
      border: "hover:border-bakamo-cyan/50",
      gradient: "from-bakamo-cyan/20 to-transparent",
    },
    indigo: {
      text: "text-bakamo-indigo",
      bg: "bg-bakamo-indigo",
      glow: "shadow-bakamo-indigo/20",
      border: "hover:border-bakamo-indigo/50",
      gradient: "from-bakamo-indigo/20 to-transparent",
    },
  };

  const accent = accentClasses[accentColor];

  const sizeClasses = {
    default: "p-6",
    large: "p-8",
    featured: "p-8 md:col-span-2",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] ${accent.border} ${sizeClasses[size]} ${className}`}
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${accent.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-r ${accentColor === "cyan" ? "from-bakamo-cyan/20 via-transparent to-bakamo-cyan/20" : "from-bakamo-indigo/20 via-transparent to-bakamo-indigo/20"}`} />
      </div>

      <div className="relative z-10">
        {/* Icon or Number */}
        {icon ? (
          <div className={`mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl ${accent.bg}/10 ${accent.text}`}>
            {icon}
          </div>
        ) : number ? (
          <div className={`text-4xl font-bold ${accent.text}/20 mb-3 transition-colors duration-300 group-hover:${accent.text}/40`}>
            {number}
          </div>
        ) : null}

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${accent.bg} scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100`} />
    </div>
  );
}
