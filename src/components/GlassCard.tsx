import React from "react";

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-6 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-bakamo-cyan/5 ${className}`}>
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-bakamo-cyan/5 via-transparent to-bakamo-indigo/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Subtle shine effect */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-bakamo-cyan/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bakamo-cyan/50 to-transparent scale-x-0 transition-transform duration-500 origin-center group-hover:scale-x-100" />
    </div>
  );
}