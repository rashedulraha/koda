// BackgroundBeamsTwo.tsx
"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  connections: number[];
  pulsePhase: number;
  pulseSpeed: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export const BackgroundBeamsTwo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  // --- সমস্যাটি এখানে ছিল, এটি সংশোধন করা হয়েছে ---
  const animationRef = useRef<number | undefined>(undefined);
  // ----------------------------------------------------
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.min(
        80,
        Math.floor((window.innerWidth * window.innerHeight) / 15000),
      );
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const hue = (i / particleCount) * 60 + 200; // Blue to purple range
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: `hsl(${hue}, 70%, 60%)`,
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

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.01;

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
        }

        // Apply damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Update pulse
        particle.pulsePhase += particle.pulseSpeed;

        // Draw connections
        particle.connections = [];
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            particle.connections.push(j);

            // Draw connection line
            const opacity = (1 - distance / 120) * 0.5;
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              other.x,
              other.y,
            );
            gradient.addColorStop(
              0,
              particle.color
                .replace("60%", "50%")
                .replace(")", `, ${opacity})`),
            );
            gradient.addColorStop(
              1,
              other.color.replace("60%", "50%").replace(")", `, ${opacity})`),
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);

            // Create curved connection
            const cpx =
              (particle.x + other.x) / 2 + Math.sin(timeRef.current + i) * 10;
            const cpy =
              (particle.y + other.y) / 2 + Math.cos(timeRef.current + i) * 10;
            ctx.quadraticCurveTo(cpx, cpy, other.x, other.y);

            ctx.stroke();
          }
        }

        // Draw particle with glow effect
        const pulseSize = Math.sin(particle.pulsePhase) * 0.5 + 1;
        const currentRadius = particle.radius * pulseSize;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          currentRadius * 4,
        );
        glowGradient.addColorStop(
          0,
          particle.color.replace("60%", "70%").replace(")", ", 0.3)"),
        );
        glowGradient.addColorStop(
          1,
          particle.color.replace("60%", "70%").replace(")", ", 0)"),
        );

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw flowing beams
      const beamCount = 3;
      for (let i = 0; i < beamCount; i++) {
        const progress = (timeRef.current * 0.1 + i / beamCount) % 1;
        const x = progress * canvas.width;
        const y =
          canvas.height / 2 + Math.sin(progress * Math.PI * 2 + i) * 100;

        const gradient = ctx.createLinearGradient(x - 100, y, x + 100, y);
        gradient.addColorStop(0, "rgba(100, 200, 255, 0)");
        gradient.addColorStop(
          0.5,
          `rgba(100, 200, 255, ${0.1 * Math.sin(timeRef.current + i) * 0.5 + 0.05})`,
        );
        gradient.addColorStop(1, "rgba(100, 200, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(x - 100, y - 2, 200, 4);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
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
        style={{ opacity: 0.8 }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background opacity-50" />
    </div>
  );
};
