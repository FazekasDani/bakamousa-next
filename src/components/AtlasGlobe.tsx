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

type GeoPoint = {
  lat: number;
  lng: number;
};

type ProjectedGeoPoint = GeoPoint & {
  x: number;
  y: number;
  visible: boolean;
  depth: number;
};

type Landmass = {
  id: string;
  points: GeoPoint[];
};

const WIDTH = 900;
const HEIGHT = 560;
const BASE_RADIUS = 230;

const LANDMASSES: Landmass[] = [
  {
    id: "north-america",
    points: [
      { lat: 72, lng: -164 },
      { lat: 70, lng: -136 },
      { lat: 58, lng: -122 },
      { lat: 50, lng: -100 },
      { lat: 31, lng: -106 },
      { lat: 18, lng: -94 },
      { lat: 9, lng: -83 },
      { lat: 18, lng: -73 },
      { lat: 31, lng: -81 },
      { lat: 40, lng: -73 },
      { lat: 51, lng: -60 },
      { lat: 60, lng: -72 },
      { lat: 64, lng: -96 },
      { lat: 70, lng: -118 },
    ],
  },
  {
    id: "south-america",
    points: [
      { lat: 12, lng: -81 },
      { lat: 7, lng: -61 },
      { lat: -3, lng: -44 },
      { lat: -17, lng: -39 },
      { lat: -34, lng: -53 },
      { lat: -55, lng: -68 },
      { lat: -42, lng: -74 },
      { lat: -20, lng: -72 },
      { lat: 2, lng: -78 },
    ],
  },
  {
    id: "europe",
    points: [
      { lat: 71, lng: -10 },
      { lat: 66, lng: 26 },
      { lat: 55, lng: 40 },
      { lat: 44, lng: 31 },
      { lat: 37, lng: 22 },
      { lat: 41, lng: 4 },
      { lat: 36, lng: -9 },
      { lat: 50, lng: -10 },
      { lat: 60, lng: -6 },
    ],
  },
  {
    id: "africa",
    points: [
      { lat: 37, lng: -17 },
      { lat: 33, lng: 31 },
      { lat: 14, lng: 51 },
      { lat: -12, lng: 43 },
      { lat: -35, lng: 20 },
      { lat: -30, lng: 5 },
      { lat: -1, lng: -17 },
      { lat: 18, lng: -16 },
    ],
  },
  {
    id: "asia",
    points: [
      { lat: 69, lng: 36 },
      { lat: 70, lng: 92 },
      { lat: 59, lng: 142 },
      { lat: 43, lng: 151 },
      { lat: 22, lng: 122 },
      { lat: 7, lng: 100 },
      { lat: 22, lng: 78 },
      { lat: 10, lng: 45 },
      { lat: 32, lng: 34 },
      { lat: 51, lng: 48 },
    ],
  },
  {
    id: "australia",
    points: [
      { lat: -11, lng: 113 },
      { lat: -16, lng: 146 },
      { lat: -30, lng: 153 },
      { lat: -43, lng: 145 },
      { lat: -35, lng: 116 },
      { lat: -22, lng: 113 },
    ],
  },
  {
    id: "greenland",
    points: [
      { lat: 82, lng: -54 },
      { lat: 76, lng: -20 },
      { lat: 65, lng: -31 },
      { lat: 60, lng: -45 },
      { lat: 66, lng: -58 },
      { lat: 76, lng: -72 },
    ],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function round(value: number) {
  return Number(value.toFixed(3));
}

function projectGeoPoint(point: GeoPoint, rotation: number, tilt: number, zoom: number): ProjectedGeoPoint {
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

function projectPoint(point: AtlasPoint, rotation: number, tilt: number, zoom: number): ProjectedPoint {
  return {
    ...point,
    ...projectGeoPoint(point, rotation, tilt, zoom),
  };
}

function makeLandPath(landmass: Landmass, rotation: number, tilt: number, zoom: number) {
  const projected = landmass.points
    .map((point) => projectGeoPoint(point, rotation, tilt, zoom))
    .filter((point) => point.visible);

  if (projected.length < 3) return null;

  const averageDepth = projected.reduce((total, point) => total + point.depth, 0) / projected.length;
  const opacity = clamp(0.22 + averageDepth * 0.16, 0.12, 0.36);
  const path = projected
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  return {
    id: landmass.id,
    opacity: round(opacity),
    path: `${path} Z`,
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
  const landPaths = LANDMASSES.map((landmass) => makeLandPath(landmass, rotation, tilt, zoom)).filter(
    (landPath): landPath is NonNullable<typeof landPath> => landPath !== null,
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
            <stop offset="0%" stopColor="#163342" />
            <stop offset="56%" stopColor="#08151f" />
            <stop offset="100%" stopColor="#020508" />
          </radialGradient>
          <radialGradient id="atlasAtmosphere" cx="42%" cy="34%" r="68%">
            <stop offset="0%" stopColor="#4fa4b8" stopOpacity="0.18" />
            <stop offset="62%" stopColor="#123646" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#07131b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="atlasLand" x1="25%" y1="15%" x2="82%" y2="92%">
            <stop offset="0%" stopColor="#345464" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#13242f" stopOpacity="0.62" />
          </linearGradient>
          <filter id="atlasLandSoftness" x="-8%" y="-8%" width="116%" height="116%">
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
          <clipPath id="atlasClip">
            <circle cx={WIDTH / 2} cy={HEIGHT / 2} r={round(BASE_RADIUS * zoom)} />
          </clipPath>
        </defs>

        <circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2}
          r={round(BASE_RADIUS * zoom)}
          fill="url(#atlasSurface)"
          stroke="#2b4f5f"
          strokeWidth="1"
        />
        <circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2}
          r={round(BASE_RADIUS * zoom)}
          fill="url(#atlasAtmosphere)"
        />
        <g clipPath="url(#atlasClip)" filter="url(#atlasLandSoftness)">
          {landPaths.map((landPath) => (
            <path
              key={landPath.id}
              d={landPath.path}
              fill="url(#atlasLand)"
              opacity={landPath.opacity}
              stroke="#7bb5c4"
              strokeOpacity="0.11"
              strokeWidth="0.85"
            />
          ))}
        </g>
        <g clipPath="url(#atlasClip)" opacity="0.46">
          {parallels.map((parallel, index) => (
            <polyline
              key={`parallel-${index}`}
              points={parallel}
              fill="none"
              stroke="#315261"
              strokeWidth="0.8"
            />
          ))}
          {meridians.map((meridian, index) => (
            <polyline
              key={`meridian-${index}`}
              points={meridian}
              fill="none"
              stroke="#315261"
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
