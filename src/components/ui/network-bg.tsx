import { motion } from "framer-motion";

export function NetworkBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Animated lines */}
      <motion.line
        x1="0"
        y1="150"
        x2="150"
        y2="0"
        stroke="rgba(139, 92, 246, 0.3)"
        strokeWidth="2"
        animate={{
          x2: [150, 200, 150],
          y2: [0, 50, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.line
        x1="100%"
        y1="300"
        x2="100% - 150"
        y2="150"
        stroke="rgba(59, 130, 246, 0.3)"
        strokeWidth="2"
        animate={{
          x1: ["100%", `100% - 200`, "100%"],
          y1: [300, 350, 300],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </svg>
  );
}
