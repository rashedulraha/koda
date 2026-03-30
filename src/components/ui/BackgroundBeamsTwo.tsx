"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseHue: number;
  connections: number[];
  pulsePhase: number;
  pulseSpeed: number;
}

interface MousePosition {
  x: number;
  y: number;
}

// Helper to get CSS variables
const getCSSVariable = (variableName: string) => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

// Helper to set alpha channel for colors
const setAlpha = (colorString: string, alpha: number) => {
  if (colorString.startsWith("oklch(")) {
    return colorString.replace(")", ` / ${alpha})`);
  }
  if (colorString.startsWith("rgb(")) {
    return colorString.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  }
  return colorString;
};

export const BackgroundBeamsTwo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<MousePosition>({ x: -9999, y: -9999 }); // Start off-screen
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Configuration ---
    const config = {
      particleCount: Math.min(
        100,
        Math.floor((window.innerWidth * window.innerHeight) / 12000),
      ),
      connectionDistance: 150,
      mouseRepulsionRadius: 120,
      mouseAttractionRadius: 250,
      beamCount: 3,
      dampingFactor: 0.98,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];

      for (let i = 0; i < config.particleCount; i++) {
        const hue = (i / config.particleCount) * 60 + 200; // Blue to purple range
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
          baseHue: hue, // Store the hue
          connections: [],
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // --- Main Animation Logic ---
    const animate = () => {
      // Create a subtle trail effect by fading the background
      const trailColor =
        getCSSVariable("--particle-trail-color") || "rgba(0, 0, 0, 0.05)";
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.01;
      const particleLightness = getCSSVariable("--particle-lightness") || "60%";

      particlesRef.current.forEach((particle, i) => {
        // --- PREMIUM FEATURE: Advanced Mouse Interaction (Gravity Field) ---
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.mouseRepulsionRadius) {
          // Strong repulsion force when very close
          const force = (1 - distance / config.mouseRepulsionRadius) ** 2; // Squared for stronger effect
          particle.vx -= (dx / distance) * force * 0.8;
          particle.vy -= (dy / distance) * force * 0.8;
        } else if (distance < config.mouseAttractionRadius) {
          // Gentle attraction force when at a medium distance
          const force =
            (distance - config.mouseRepulsionRadius) /
            (config.mouseAttractionRadius - config.mouseRepulsionRadius);
          particle.vx += (dx / distance) * force * 0.03;
          particle.vy += (dy / distance) * force * 0.03;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply damping to make motion smoother
        particle.vx *= config.dampingFactor;
        particle.vy *= config.dampingFactor;

        // --- PREMIUM FEATURE: Seamless World (Edge Wrapping) ---
        // Particles wrap around the screen edges instead of bouncing
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // --- Draw Connections ---
        particle.connections = [];
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx_other = other.x - particle.x;
          const dy_other = other.y - particle.y;
          const dist = Math.sqrt(dx_other * dx_other + dy_other * dy_other);

          if (dist < config.connectionDistance) {
            particle.connections.push(j);
            const opacity = (1 - dist / config.connectionDistance) ** 2 * 0.4; // Fade out connection lines

            // Use a neutral color for connections to avoid visual clutter
            ctx.strokeStyle = `hsla(220, 70%, ${particleLightness}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);

            // Create a subtle curve in the connection
            const cpx =
              (particle.x + other.x) / 2 + Math.sin(timeRef.current + i) * 15;
            const cpy =
              (particle.y + other.y) / 2 + Math.cos(timeRef.current + i) * 15;
            ctx.quadraticCurveTo(cpx, cpy, other.x, other.y);
            ctx.stroke();
          }
        }

        // --- PREMIUM FEATURE: Rich, Layered Glow Effect ---
        particle.pulsePhase += particle.pulseSpeed;
        const pulseFactor = Math.sin(particle.pulsePhase) * 0.2 + 1;
        const currentRadius = particle.radius * pulseFactor;
        const particleColor = `hsl(${particle.baseHue}, 70%, ${particleLightness})`;

        // 1. Outer, large, and very faint glow
        const outerGlow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          currentRadius * 8,
        );
        outerGlow.addColorStop(
          0,
          particleColor.replace("hsl", "hsla").replace(")", ", 0.1)"),
        );
        outerGlow.addColorStop(
          1,
          particleColor.replace("hsl", "hsla").replace(")", ", 0)"),
        );
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 8, 0, Math.PI * 2);
        ctx.fill();

        // 2. Mid-range, brighter glow
        const midGlow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          currentRadius * 3,
        );
        midGlow.addColorStop(
          0,
          particleColor.replace("hsl", "hsla").replace(")", ", 0.4)"),
        );
        midGlow.addColorStop(
          1,
          particleColor.replace("hsl", "hsla").replace(")", ", 0)"),
        );
        ctx.fillStyle = midGlow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // 3. The solid particle core
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- PREMIUM FEATURE: Dense, Luminous Beams ---
      const beamBaseColor =
        getCSSVariable("--beam-color") || "rgba(100, 200, 255, 0.5)";

      for (let i = 0; i < config.beamCount; i++) {
        const progress = (timeRef.current * 0.05 + i / config.beamCount) % 1;
        const x = progress * canvas.width;
        const y =
          canvas.height / 2 + Math.sin(progress * Math.PI * 4 + i * 2) * 150;

        // Create a vertical gradient for the beam
        const beamGradient = ctx.createLinearGradient(x, y - 10, x, y + 10);
        const beamOpacity = 0.15 * Math.sin(timeRef.current + i) + 0.1;
        beamGradient.addColorStop(0, setAlpha(beamBaseColor, 0));
        beamGradient.addColorStop(0.5, setAlpha(beamBaseColor, beamOpacity));
        beamGradient.addColorStop(1, setAlpha(beamBaseColor, 0));

        ctx.fillStyle = beamGradient;

        // Draw multiple layers to create a dense, glowing effect
        ctx.save(); // Save the current context state
        ctx.globalAlpha = 0.4;
        ctx.fillRect(x - 150, y - 0.5, 300, 1); // Thin core
        ctx.globalAlpha = 0.2;
        ctx.fillRect(x - 150, y - 2, 300, 4); // Middle layer
        ctx.globalAlpha = 0.1;
        ctx.fillRect(x - 150, y - 4, 300, 8); // Outer layer
        ctx.restore(); // Restore the context state (resets globalAlpha)
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.9 }} // Slightly increased opacity for more presence
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-60" />
    </div>
  );
};
