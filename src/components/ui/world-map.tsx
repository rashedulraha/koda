/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useMemo, useState, memo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface WorldMapProps {
  dots?: Array<{
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  }>;
  lineColor?: string;
}

const WorldMap: React.FC<WorldMapProps> = ({
  dots = [],
  lineColor = "#0ea5e9",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const svgMapData = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "white",
      shape: "circle",
    });
  }, []);

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  });

  if (!mounted) return <div className="w-full aspect-2/1 rounded-lg" />;

  return (
    <div className="relative w-full aspect-2/1 rounded-lg overflow-hidden select-none">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMapData)}`}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:invert-0 invert transition-all duration-500"
        alt="World Map"
        draggable={false}
      />

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
            <g key={i}>
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
              {[start, end].map((point, idx) => (
                <g key={`${i}-${idx}`}>
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
