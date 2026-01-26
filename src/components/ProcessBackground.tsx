"use client";

import React, { useEffect, useState, useMemo } from "react";

// Spread particles across the full viewport width/height
const RADAR_POSITIONS = [
  { id: 1, x: 8, y: 15 },
  { id: 2, x: 92, y: 12 },
  { id: 3, x: 45, y: 45 },
  { id: 4, x: 5, y: 78 },
  { id: 5, x: 95, y: 85 },
  { id: 6, x: 28, y: 92 },
  { id: 7, x: 75, y: 55 },
  { id: 8, x: 62, y: 8 },
  { id: 9, x: 35, y: 35 },
  { id: 10, x: 18, y: 5 },
  { id: 11, x: 88, y: 42 },
  { id: 12, x: 3, y: 55 },
  { id: 13, x: 55, y: 88 },
  { id: 14, x: 82, y: 28 },
  { id: 15, x: 22, y: 65 },
  { id: 16, x: 48, y: 18 },
  { id: 17, x: 68, y: 72 },
  { id: 18, x: 12, y: 38 },
  { id: 19, x: 78, y: 8 },
  { id: 20, x: 38, y: 75 },
  { id: 21, x: 58, y: 62 },
  { id: 22, x: 85, y: 65 },
  { id: 23, x: 15, y: 88 },
  { id: 24, x: 72, y: 38 },
];

// Structured bar chart positions (spread across full width)
const ENGINE_POSITIONS = [
  // Bar 1 (x: 15%)
  { id: 4, x: 15, y: 85 },
  { id: 10, x: 15, y: 70 },
  { id: 18, x: 15, y: 55 },
  // Bar 2 (x: 35%)
  { id: 1, x: 35, y: 85 },
  { id: 9, x: 35, y: 70 },
  { id: 3, x: 35, y: 55 },
  { id: 8, x: 35, y: 40 },
  { id: 16, x: 35, y: 25 },
  // Bar 3 (x: 55%)
  { id: 6, x: 55, y: 85 },
  { id: 7, x: 55, y: 70 },
  { id: 13, x: 55, y: 55 },
  { id: 21, x: 55, y: 40 },
  // Bar 4 (x: 75%)
  { id: 5, x: 75, y: 85 },
  { id: 2, x: 75, y: 70 },
  { id: 11, x: 75, y: 55 },
  { id: 14, x: 75, y: 40 },
  { id: 19, x: 75, y: 25 },
  { id: 24, x: 75, y: 10 },
  // Bar 5 (x: 90%)
  { id: 12, x: 90, y: 85 },
  { id: 15, x: 90, y: 70 },
  { id: 17, x: 90, y: 55 },
  { id: 20, x: 90, y: 40 },
  { id: 22, x: 90, y: 25 },
  { id: 23, x: 90, y: 10 },
];

// Drift patterns for organic floating
const DRIFT_OFFSETS = [
  { dx: 3, dy: 4 }, { dx: -4, dy: 3 }, { dx: 2, dy: -3 }, { dx: -3, dy: -4 },
  { dx: 4, dy: 2 }, { dx: -2, dy: 4 }, { dx: 3, dy: -2 }, { dx: -4, dy: -3 },
  { dx: 2, dy: 3 }, { dx: -3, dy: 2 }, { dx: 4, dy: -4 }, { dx: -2, dy: -2 },
  { dx: 3, dy: 3 }, { dx: -4, dy: 4 }, { dx: 2, dy: -4 }, { dx: -3, dy: 3 },
  { dx: 4, dy: -2 }, { dx: -2, dy: 2 }, { dx: 3, dy: 4 }, { dx: -4, dy: -2 },
  { dx: 2, dy: 2 }, { dx: -3, dy: -3 }, { dx: 4, dy: 3 }, { dx: -2, dy: 4 },
];

export function ProcessBackground() {
  const [phase, setPhase] = useState<"radar" | "transitioning" | "engine">("radar");
  const [driftCycle, setDriftCycle] = useState(0);

  useEffect(() => {
    const cyclePhases = () => {
      setPhase("radar");
      setTimeout(() => setPhase("transitioning"), 4000);
      setTimeout(() => setPhase("engine"), 5500);
      setTimeout(() => setPhase("radar"), 10000);
    };

    cyclePhases();
    const interval = setInterval(cyclePhases, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === "radar") {
      const driftInterval = setInterval(() => {
        setDriftCycle((prev) => (prev + 1) % 4);
      }, 1200);
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
        size: 2 + (index % 3), // Varied sizes: 2, 3, or 4
      };
    });
  }, []);

  const isRadarPhase = phase === "radar";
  const isEnginePhase = phase === "engine";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ═══ RADAR PHASE BACKGROUND ═══ */}
      <div
        className={`absolute inset-0 transition-opacity duration-1500 ${
          isRadarPhase ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Large concentric circles */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/10" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/8" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/5" />
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bakamo-cyan/3" />

        {/* Radar Sweep */}
        <div
          className="absolute inset-0 animate-[spin_6s_linear_infinite]"
          style={{ transformOrigin: "center center" }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[450px] w-[3px] origin-bottom"
            style={{
              background: "linear-gradient(to top, transparent, rgba(6, 182, 212, 0.4))",
              transform: "translateX(-50%) translateY(-100%)",
            }}
          />
          {/* Sweep trail gradient */}
          <div
            className="absolute left-1/2 top-1/2 h-[450px] w-[150px] origin-bottom"
            style={{
              background: "conic-gradient(from -30deg, transparent, rgba(6, 182, 212, 0.08), transparent)",
              transform: "translateX(-50%) translateY(-100%)",
            }}
          />
        </div>

        {/* Center pulse */}
        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bakamo-cyan/20 animate-ping" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bakamo-cyan/40" />
      </div>

      {/* ═══ ENGINE PHASE BACKGROUND (Chart Grid) ═══ */}
      <div
        className={`absolute inset-0 transition-opacity duration-1500 ${
          isEnginePhase ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Vertical grid lines */}
        {[15, 35, 55, 75, 90].map((x) => (
          <div
            key={x}
            className="absolute top-0 bottom-[10%] w-px bg-bakamo-indigo/10"
            style={{ left: `${x}%` }}
          />
        ))}
        {/* Horizontal grid lines */}
        {[25, 40, 55, 70, 85].map((y) => (
          <div
            key={y}
            className="absolute left-[5%] right-[5%] h-px bg-bakamo-indigo/5"
            style={{ top: `${y}%` }}
          />
        ))}
        {/* Base line */}
        <div className="absolute left-[5%] right-[5%] bottom-[10%] h-px bg-bakamo-indigo/15" />
      </div>

      {/* ═══ FLOATING / SNAPPING PARTICLES ═══ */}
      {particles.map((particle) => {
        const driftMultiplier = [1, -1, 0.7, -0.7][driftCycle];
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
                ? "duration-[1800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                : "duration-1000 ease-out"
            }`}
            style={{
              left: `${currentX}%`,
              top: `${currentY}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Outer glow */}
            <div
              className={`absolute rounded-full blur-lg transition-all duration-1000 ${
                isEnginePhase ? "bg-bakamo-indigo/30" : "bg-bakamo-cyan/20"
              }`}
              style={{
                width: `${particle.size * 8}px`,
                height: `${particle.size * 8}px`,
                margin: `-${particle.size * 2}px`,
              }}
            />
            {/* Core particle */}
            <div
              className={`rounded-full transition-all duration-1000 ${
                isEnginePhase ? "bg-bakamo-indigo/40" : "bg-bakamo-cyan/30"
              }`}
              style={{
                width: `${particle.size * 2}px`,
                height: `${particle.size * 2}px`,
                boxShadow: isEnginePhase
                  ? `0 0 ${particle.size * 4}px rgba(99, 102, 241, 0.3)`
                  : `0 0 ${particle.size * 4}px rgba(6, 182, 212, 0.3)`,
              }}
            />
          </div>
        );
      })}

      {/* ═══ AMBIENT GRADIENT OVERLAY ═══ */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ${
          isRadarPhase ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.03) 0%, transparent 70%)",
        }}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ${
          isEnginePhase ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.03) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
