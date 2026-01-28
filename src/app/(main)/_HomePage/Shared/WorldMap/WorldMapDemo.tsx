"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  const title = "Presence";

  return (
    <div className="w-full py-10 ">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="font-bold text-2xl md:text-5xl text-foreground">
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
          lineColor="#0ea5e9"
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
          ]}
        />
      </div>
    </div>
  );
}
