"use client";

import React, { useEffect, useState, useMemo } from "react";

// Deterministic positions for the Radar phase (chaos - organic scattered dots)
const RADAR_POSITIONS = [
  { id: 1, x: 18, y: 28 },
  { id: 2, x: 82, y: 22 },
  { id: 3, x: 48, y: 52 },
  { id: 4, x: 12, y: 72 },
  { id: 5, x: 88, y: 78 },
  { id: 6, x: 32, y: 88 },
  { id: 7, x: 72, y: 58 },
  { id: 8, x: 62, y: 18 },
  { id: 9, x: 38, y: 42 },
  { id: 10, x: 22, y: 12 },
  { id: 11, x: 92, y: 48 },
  { id: 12, x: 8, y: 52 },
  { id: 13, x: 58, y: 82 },
  { id: 14, x: 78, y: 38 },
  { id: 15, x: 28, y: 68 },
  { id: 16, x: 45, y: 25 },
];

// Structured positions for the Engine phase (forming a bar chart)
const ENGINE_POSITIONS = [
  // Bar 1 (height: 2 dots) - x: 20%
  { id: 4, x: 20, y: 78 },
  { id: 10, x: 20, y: 62 },
  // Bar 2 (height: 4 dots) - x: 40%
  { id: 1, x: 40, y: 78 },
  { id: 9, x: 40, y: 62 },
  { id: 3, x: 40, y: 46 },
  { id: 8, x: 40, y: 30 },
  // Bar 3 (height: 3 dots) - x: 60%
  { id: 6, x: 60, y: 78 },
  { id: 7, x: 60, y: 62 },
  { id: 13, x: 60, y: 46 },
  // Bar 4 (height: 5 dots) - x: 80%
  { id: 5, x: 80, y: 78 },
  { id: 2, x: 80, y: 62 },
  { id: 11, x: 80, y: 46 },
  { id: 14, x: 80, y: 30 },
  { id: 12, x: 80, y: 14 },
  // Extra dots
  { id: 15, x: 20, y: 46 },
  { id: 16, x: 60, y: 30 },
];

// Slight drift offsets for the floating effect in radar phase
const DRIFT_OFFSETS = [
  { dx: 2, dy: 3 },
  { dx: -3, dy: 2 },
  { dx: 1, dy: -2 },
  { dx: -2, dy: -3 },
  { dx: 3, dy: 1 },
  { dx: -1, dy: 3 },
  { dx: 2, dy: -1 },
  { dx: -3, dy: -2 },
  { dx: 1, dy: 2 },
  { dx: -2, dy: 1 },
  { dx: 3, dy: -3 },
  { dx: -1, dy: -1 },
  { dx: 2, dy: 2 },
  { dx: -3, dy: 3 },
  { dx: 1, dy: -3 },
  { dx: -2, dy: 2 },
];

export function ProcessVisualizer() {
  const [phase, setPhase] = useState<"radar" | "transitioning" | "engine">("radar");
  const [driftCycle, setDriftCycle] = useState(0);

  useEffect(() => {
    // Main phase cycle: radar (3.5s) -> transitioning (1.5s) -> engine (3.5s) -> radar...
    const cyclePhases = () => {
      setPhase("radar");
      setTimeout(() => setPhase("transitioning"), 3500);
      setTimeout(() => setPhase("engine"), 5000);
      setTimeout(() => setPhase("radar"), 8500);
    };

    cyclePhases();
    const interval = setInterval(cyclePhases, 8500);
    return () => clearInterval(interval);
  }, []);

  // Subtle drift animation for radar phase
  useEffect(() => {
    if (phase === "radar") {
      const driftInterval = setInterval(() => {
        setDriftCycle((prev) => (prev + 1) % 4);
      }, 800);
      return () => clearInterval(driftInterval);
    }
  }, [phase]);

  const particles = useMemo(() => {
    return RADAR_POSITIONS.map((radarPos, index) => {
      const enginePos = ENGINE_POSITIONS.find((p) => p.id === radarPos.id) || radarPos;
      const drift = DRIFT_OFFSETS[index] || { dx: 0, dy: 0 };
      return {
        ...radarPos,
        engineX: enginePos.x,
        engineY: enginePos.y,
        drift,
      };
    });
  }, []);

  const isRadarPhase = phase === "radar";
  const isEnginePhase = phase === "engine";

  return (
    <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-black/60 shadow-2xl backdrop-blur-xl">
      {/* Outer glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-bakamo-cyan/20 via-transparent to-bakamo-indigo/20 blur-xl opacity-50" />

      {/* ═══ RADAR BACKGROUND ═══ */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isRadarPhase ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Concentric circles */}
        <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/30" />
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/20" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/10" />

        {/* Radar Sweep - improved visibility */}
        <div
          className="absolute inset-0 animate-[spin_3s_linear_infinite]"
          style={{ transformOrigin: "center center" }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[140px] w-[2px] origin-bottom"
            style={{
              background: "linear-gradient(to top, transparent, rgba(6, 182, 212, 0.8))",
              transform: "translateX(-50%)",
              boxShadow: "0 0 20px 4px rgba(6, 182, 212, 0.4)",
            }}
          />
          {/* Sweep trail */}
          <div
            className="absolute left-1/2 top-1/2 h-[140px] w-[60px] origin-bottom-left"
            style={{
              background: "linear-gradient(to left, transparent, rgba(6, 182, 212, 0.15))",
              transform: "translateX(-50%) rotate(-30deg)",
              transformOrigin: "bottom center",
            }}
          />
        </div>

        {/* Center pulse */}
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bakamo-cyan/80 animate-ping" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bakamo-cyan" />
      </div>

      {/* ═══ ENGINE BACKGROUND (Chart Grid) ═══ */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isEnginePhase ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Y Axis */}
        <div className="absolute left-[10%] top-[10%] bottom-[15%] w-px bg-white/20" />
        {/* X Axis */}
        <div className="absolute left-[10%] right-[5%] bottom-[15%] h-px bg-white/20" />
        {/* Grid lines */}
        <div className="absolute left-[10%] right-[5%] bottom-[35%] h-px bg-white/5" />
        <div className="absolute left-[10%] right-[5%] bottom-[55%] h-px bg-white/5" />
        <div className="absolute left-[10%] right-[5%] bottom-[75%] h-px bg-white/5" />
        {/* Bar base indicators */}
        <div className="absolute left-[20%] bottom-[12%] text-[8px] text-zinc-600 -translate-x-1/2">Q1</div>
        <div className="absolute left-[40%] bottom-[12%] text-[8px] text-zinc-600 -translate-x-1/2">Q2</div>
        <div className="absolute left-[60%] bottom-[12%] text-[8px] text-zinc-600 -translate-x-1/2">Q3</div>
        <div className="absolute left-[80%] bottom-[12%] text-[8px] text-zinc-600 -translate-x-1/2">Q4</div>
      </div>

      {/* ═══ DATA POINTS ═══ */}
      {particles.map((particle, index) => {
        const driftMultiplier = [1, -1, 0.5, -0.5][driftCycle];
        const currentX = isRadarPhase
          ? particle.x + particle.drift.dx * driftMultiplier
          : particle.engineX;
        const currentY = isRadarPhase
          ? particle.y + particle.drift.dy * driftMultiplier
          : particle.engineY;

        return (
          <div
            key={particle.id}
            className={`absolute rounded-full transition-all ${
              phase === "transitioning"
                ? "duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                : "duration-700 ease-out"
            }`}
            style={{
              left: `${currentX}%`,
              top: `${currentY}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Outer glow */}
            <div
              className={`absolute inset-0 rounded-full blur-md transition-all duration-700 ${
                isEnginePhase
                  ? "bg-bakamo-indigo/60 scale-150"
                  : "bg-bakamo-cyan/40 scale-100"
              }`}
              style={{ width: "16px", height: "16px", margin: "-4px" }}
            />
            {/* Core dot */}
            <div
              className={`relative h-3 w-3 rounded-full shadow-lg transition-all duration-700 ${
                isEnginePhase
                  ? "bg-bakamo-indigo scale-110"
                  : "bg-bakamo-cyan scale-100"
              }`}
              style={{
                boxShadow: isEnginePhase
                  ? "0 0 12px 2px rgba(99, 102, 241, 0.6)"
                  : "0 0 12px 2px rgba(6, 182, 212, 0.6)",
              }}
            />
          </div>
        );
      })}

      {/* ═══ PHASE LABELS ═══ */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="text-center">
          <div
            className={`text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
              isRadarPhase
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="text-bakamo-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
              ● Listening to Reality...
            </span>
          </div>
          <div
            className={`text-xs font-bold tracking-widest uppercase transition-all duration-500 absolute inset-x-0 bottom-4 ${
              phase === "transitioning"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <span className="text-white/80">Processing...</span>
          </div>
          <div
            className={`text-xs font-bold tracking-widest uppercase transition-all duration-500 absolute inset-x-0 bottom-4 ${
              isEnginePhase
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <span className="text-bakamo-indigo drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]">
              ✓ Reality Measured
            </span>
          </div>
        </div>
      </div>

      {/* ═══ CORNER ACCENTS ═══ */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 rounded-br-2xl" />
    </div>
  );
}
