"use client";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  id: string;
  title: string;
  desc: string;
}

export const FeaturePreview = ({ id, title, desc }: Props) => {
  return (
    <div className="w-full bg-card border border-border rounded-xl overflow-hidden shadow-sm shadow-sidebar-primary/5">
      {/* Window Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/20">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-border" />
          <div className="size-2.5 rounded-full bg-border" />
          <div className="size-2.5 rounded-full bg-border" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground tracking-tighter">
          KODA / CORE / {id.toUpperCase()}
        </div>
      </div>

      <div className="p-8 md:p-14 min-h-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full border border-sidebar-primary/20 bg-sidebar-primary/10 px-2.5 py-0.5 text-xs font-semibold text-sidebar-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Feature
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {title}
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
              {desc}
            </p>

            {/* Skeleton Decorations (Clean) */}
            <div className="space-y-4 pt-4">
              <div className="h-px w-full bg-linear-to-r from-border to-transparent" />
              <div className="h-px w-3/4 bg-linear-to-r from-border to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
