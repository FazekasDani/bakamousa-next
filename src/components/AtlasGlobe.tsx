"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { ATLAS_POINTS, type AtlasPoint, type AtlasCase } from "@/lib/atlas";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

type ProjectedPoint = AtlasPoint & {
  x: number;
  y: number;
  visible: boolean;
  depth: number;
};

const WIDTH = 900;
const HEIGHT = 560;
const BASE_RADIUS = 230;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function round(value: number) {
  return Number(value.toFixed(3));
}

function projectPoint(point: AtlasPoint, rotation: number, tilt: number, zoom: number): ProjectedPoint {
  const radius = BASE_RADIUS * zoom;
  const lat = (point.lat * Math.PI) / 180;
  const lon = ((point.lng + rotation) * Math.PI) / 180;
  const tiltRad = (tilt * Math.PI) / 180;

  const cosLat = Math.cos(lat);
  const sinLat = Math.sin(lat);
  const cosLon = Math.cos(lon);
  const sinLon = Math.sin(lon);
  const cosTilt = Math.cos(tiltRad);
  const sinTilt = Math.sin(tiltRad);

  const x = radius * cosLat * sinLon;
  const y = radius * (sinLat * cosTilt - cosLat * cosLon * sinTilt);
  const z = sinLat * sinTilt + cosLat * cosLon * cosTilt;

  return {
    ...point,
    x: round(WIDTH / 2 + x),
    y: round(HEIGHT / 2 - y),
    depth: round(z),
    visible: z > -0.08,
  };
}

function makeMeridian(rotation: number, tilt: number, zoom: number, meridian: number) {
  return Array.from({ length: 49 }, (_, index) => {
    const lat = -72 + index * 3;
    return projectPoint(
      { id: `m-${meridian}-${index}`, status: "inert", lat, lng: meridian },
      rotation,
      tilt,
      zoom,
    );
  })
    .filter((point) => point.visible)
    .map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`)
    .join(" ");
}

function makeParallel(rotation: number, tilt: number, zoom: number, parallel: number) {
  return Array.from({ length: 73 }, (_, index) => {
    const lng = -180 + index * 5;
    return projectPoint(
      { id: `p-${parallel}-${index}`, status: "inert", lat: parallel, lng },
      rotation,
      tilt,
      zoom,
    );
  })
    .filter((point) => point.visible)
    .map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`)
    .join(" ");
}

function isActivePoint(point: ProjectedPoint): point is ProjectedPoint & AtlasCase & { status: "active" } {
  return point.status === "active";
}

export default function AtlasGlobe() {
  const [rotation, setRotation] = useState(-20);
  const [tilt, setTilt] = useState(8);
  const [zoom, setZoom] = useState(1);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isPointerInside, setIsPointerInside] = useState(false);
  const [selectedCase, setSelectedCase] = useState<AtlasCase | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dragRef = useRef({ x: 0, y: 0, rotation: 0, tilt: 0 });
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const elapsed = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!reducedMotion && !isPointerInside && !selectedCase && !isDragging) {
        setRotation((current) => (current + (elapsed / 1000) * (360 / 55)) % 360);
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isDragging, isPointerInside, reducedMotion, selectedCase]);

  const points = useMemo(
    () =>
      ATLAS_POINTS.map((point) => projectPoint(point, rotation, tilt, zoom)).sort(
        (a, b) => a.depth - b.depth,
      ),
    [rotation, tilt, zoom],
  );

  const hoveredPoint = points.find(
    (point): point is ProjectedPoint & AtlasCase & { status: "active" } =>
      point.id === hovered && isActivePoint(point),
  );
  const meridians = [-120, -60, 0, 60, 120, 180].map((value) =>
    makeMeridian(rotation, tilt, zoom, value),
  );
  const parallels = [-60, -30, 0, 30, 60].map((value) =>
    makeParallel(rotation, tilt, zoom, value),
  );

  return (
    <div
      className="relative mx-auto mt-14 w-full max-w-6xl touch-none select-none"
      onPointerEnter={() => setIsPointerInside(true)}
      onPointerLeave={() => {
        setIsPointerInside(false);
        setHovered(null);
      }}
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Interactive globe showing the Atlas of Social Truths"
        className="h-auto w-full"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          dragRef.current = {
            x: event.clientX,
            y: event.clientY,
            rotation,
            tilt,
          };
          setIsDragging(true);
        }}
        onPointerMove={(event) => {
          if (!isDragging) return;
          const dx = event.clientX - dragRef.current.x;
          const dy = event.clientY - dragRef.current.y;
          setRotation(dragRef.current.rotation + dx * 0.35);
          setTilt(clamp(dragRef.current.tilt + dy * 0.18, -42, 42));
        }}
        onPointerUp={() => setIsDragging(false)}
        onPointerCancel={() => setIsDragging(false)}
        onWheel={(event) => {
          event.preventDefault();
          setZoom((current) => clamp(current - event.deltaY * 0.0007, 0.82, 1.34));
        }}
      >
        <defs>
          <radialGradient id="atlasSurface" cx="38%" cy="30%" r="68%">
            <stop offset="0%" stopColor="var(--mid-grey)" />
            <stop offset="70%" stopColor="var(--near-black)" />
            <stop offset="100%" stopColor="var(--black)" />
          </radialGradient>
          <clipPath id="atlasClip">
            <circle cx={WIDTH / 2} cy={HEIGHT / 2} r={round(BASE_RADIUS * zoom)} />
          </clipPath>
        </defs>

        <circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2}
          r={round(BASE_RADIUS * zoom)}
          fill="url(#atlasSurface)"
          stroke="var(--border-grey)"
          strokeWidth="1"
        />
        <g clipPath="url(#atlasClip)" opacity="0.46">
          {parallels.map((parallel, index) => (
            <polyline
              key={`parallel-${index}`}
              points={parallel}
              fill="none"
              stroke="var(--border-grey)"
              strokeWidth="0.8"
            />
          ))}
          {meridians.map((meridian, index) => (
            <polyline
              key={`meridian-${index}`}
              points={meridian}
              fill="none"
              stroke="var(--border-grey)"
              strokeWidth="0.8"
            />
          ))}
        </g>

        {points.map((point) => {
          if (!point.visible) return null;
          const active = isActivePoint(point);
          const radius = active ? 5.5 : 4.2;
          return (
            <g
              key={point.id}
              className={active ? "cursor-pointer" : ""}
              pointerEvents={active ? "all" : "none"}
              onPointerDown={(event) => {
                if (active) event.stopPropagation();
              }}
              onPointerUp={(event) => {
                if (!active) return;
                event.stopPropagation();
                setSelectedCase(point);
              }}
              onPointerEnter={() => {
                if (active) setHovered(point.id);
              }}
              onPointerLeave={() => {
                if (active) setHovered(null);
              }}
              onClick={(event) => {
                if (!active) return;
                event.stopPropagation();
                setSelectedCase(point);
              }}
            >
              {active ? (
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={radius + 8}
                  fill="var(--accent)"
                  opacity="0.14"
                  className="atlas-pulse"
                  pointerEvents="all"
                />
              ) : null}
              <circle
                cx={point.x}
                cy={point.y}
                r={radius}
                fill="var(--accent)"
                opacity={active ? 0.95 : 0.42}
                stroke={active ? "var(--near-black)" : "transparent"}
                strokeWidth="1.5"
                pointerEvents={active ? "all" : "none"}
              />
            </g>
          );
        })}
      </svg>

      {points.map((point) => {
        if (!point.visible || !isActivePoint(point)) return null;
        return (
          <button
            key={`hit-${point.id}`}
            type="button"
            aria-label={`Open ${point.name}`}
            className="absolute z-10 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent"
            style={{
              left: `${(point.x / WIDTH) * 100}%`,
              top: `${(point.y / HEIGHT) * 100}%`,
            }}
            onPointerEnter={() => setHovered(point.id)}
            onPointerLeave={() => setHovered(null)}
            onPointerDown={(event) => {
              event.stopPropagation();
              setSelectedCase(point);
            }}
            onClick={() => setSelectedCase(point)}
          />
        );
      })}

      {hoveredPoint ? (
        <div
          className="pointer-events-none absolute z-20 max-w-[16rem] border border-border-grey bg-near-black px-4 py-3 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{
            left: `${(hoveredPoint.x / WIDTH) * 100}%`,
            top: `${(hoveredPoint.y / HEIGHT) * 100}%`,
            transform: "translate(-50%, calc(-100% - 14px))",
          }}
        >
          <p className="text-sm text-white">{hoveredPoint.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-text-muted">
            {hoveredPoint.sector}
          </p>
        </div>
      ) : null}

      {selectedCase ? (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/68 px-0 md:px-8">
          <article className="relative flex h-full w-full flex-col overflow-y-auto border border-border-grey bg-near-black p-7 text-left md:h-auto md:max-h-[88%] md:w-[68vw] md:max-w-3xl md:p-10">
            <button
              type="button"
              aria-label="Close case panel"
              className="absolute right-5 top-5 text-xs uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-white"
              onClick={() => setSelectedCase(null)}
            >
              Close
            </button>
            <h3 className="pr-20 text-4xl font-light leading-none text-white md:text-5xl">
              {selectedCase.name}
            </h3>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">
              {selectedCase.sectorRegion}
            </p>
            <p
              className={`${cormorant.className} mt-8 border-l border-accent pl-6 text-xl italic leading-snug text-white md:text-2xl`}
            >
              {selectedCase.essence}
            </p>
            {selectedCase.challenge || selectedCase.truth || selectedCase.impact ? (
              <div className="mt-10 space-y-7 text-base leading-relaxed text-text-secondary">
                {selectedCase.challenge ? (
                  <section>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-white">The Challenge</h4>
                    <p className="mt-3">{selectedCase.challenge}</p>
                  </section>
                ) : null}
                {selectedCase.truth ? (
                  <section>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-white">
                      How It Surfaced
                    </h4>
                    <p className="mt-3">{selectedCase.truth}</p>
                  </section>
                ) : null}
                {selectedCase.impact ? (
                  <section>
                    <h4 className="text-xs uppercase tracking-[0.18em] text-white">The Impact</h4>
                    <p className="mt-3">{selectedCase.impact}</p>
                  </section>
                ) : null}
              </div>
            ) : null}
          </article>
        </div>
      ) : null}
    </div>
  );
}
