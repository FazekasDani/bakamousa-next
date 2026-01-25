import React from "react";

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl transition hover:border-bakamo-cyan/50 ${className}`}>
      {/* Subtle shine effect */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-bakamo-cyan/10 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}