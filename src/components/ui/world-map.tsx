/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useMemo, useState, memo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

// --- Interfaces ---
interface Coordinate {
  lat: number;
  lng: number;
  label?: string;
}

interface DotPath {
  start: Coordinate;
  end: Coordinate;
}

interface WorldMapProps {
  dots?: DotPath[];
  lineColor?: string;
}

const generateStaticDarkMap = (): string => {
  const map = new DottedMap({ height: 60, grid: "diagonal" });

  return map.getSVG({
    radius: 0.22,
    color: "rgba(255, 255, 255, 0.3)",
    shape: "circle",
    backgroundColor: "black",
  });
};

const projectPoint = (lat: number, lng: number) => {
  return {
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  };
};

// --- Main Component ---
const WorldMap: React.FC<WorldMapProps> = ({
  dots = [],
  lineColor = "#0ea5e9",
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const svgMapData = useMemo(() => generateStaticDarkMap(), []);

  // Hydration safety check
  if (!mounted) {
    return <div className="w-full aspect-2/1 bg-background rounded-lg" />;
  }

  return (
    <div className="relative w-full aspect-2/1 bg-background rounded-lg overflow-hidden select-none">
      {/* Background Static Map */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMapData)}`}
        className="absolute inset-0 w-full h-full pointer-events-none"
        alt="World Map Background"
        draggable={false}
      />

      {/* Animation Layer */}
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient
            id="map-path-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          const midX = (start.x + end.x) / 2;
          const midY = Math.min(start.y, end.y) - 50;

          const pathD = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

          return (
            <g key={`path-group-${i}`}>
              {/* The Path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#map-path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing Points */}
              {[start, end].map((point, idx) => (
                <g key={`point-${idx}-${i}`}>
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="2"
                    fill={lineColor}
                    opacity="0.5">
                    <animate
                      attributeName="r"
                      from="2"
                      to="6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default memo(WorldMap);
