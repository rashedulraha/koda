"use client";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  loading: () => (
    <p className="text-center text-muted-foreground">Loading Map...</p>
  ),

  ssr: false,
});

export function WorldMapDemo() {
  const title = "Presence";

  return (
    <div className="w-full py-10 ">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="font-semibold text-2xl md:text-4xl text-foreground">
          Global{" "}
          <span className="text-primary">
            {title.split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.025 }}>
                {char}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="mt-3 md:mt-5 text-sm md:text-base md:leading-8 text-muted-foreground max-w-2xl mx-auto">
          Empowering teams across the globe with high-performance solutions. Our
          distributed network ensures your business stays connected, no matter
          where your journey takes you.
        </p>
      </div>

      <div className="mt-8">
        <WorldMap
          lineColor="#fff"
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: 34.0522, lng: -118.2437 },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            },

            {
              start: { lat: 64.2008, lng: -149.4937 }, // Anchorage
              end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Anchorage
              end: { lat: -15.7975, lng: -47.8919 }, // Brasília
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brasília
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },

            {
              start: { lat: 40.7128, lng: -74.006 }, // New York
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: 48.8566, lng: 2.3522 }, // Paris
              end: { lat: 25.2048, lng: 55.2708 }, // Dubai
            },
            {
              start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney
            },
            {
              start: { lat: -23.5505, lng: -46.6333 }, // São Paulo
              end: { lat: 6.5244, lng: 3.3792 }, // Lagos
            },
            {
              start: { lat: 30.0444, lng: 31.2357 }, // Cairo
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
          ]}
        />
      </div>
    </div>
  );
}
