"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.4,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current) return;

    animate(
      "span",
      {
        opacity: 1,
        y: 0,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.06),
        ease: "easeOut",
      },
    );
  }, [animate, duration, filter, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div
        ref={scope}
        className="flex flex-wrap justify-center items-center text-center font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block opacity-0 text-foreground"
            style={{
              transform: "translateY(20px)",
              filter: filter ? "blur(8px)" : "none",
            }}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
