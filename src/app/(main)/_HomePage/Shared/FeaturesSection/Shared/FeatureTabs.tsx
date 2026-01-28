"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Feature {
  id: string;
  label: string;
}

interface Props {
  features: Feature[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const FeatureTabs = ({ features, activeId, onSelect }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      {features.map((f) => {
        const isActive = activeId === f.id;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className="relative flex items-center py-3 px-4 rounded-md transition-all group overflow-hidden">
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-muted/30 border-l-2 border-sidebar-primary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            <span
              className={cn(
                "relative z-10 text-base font-medium transition-colors duration-300",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground group-hover:text-foreground/70",
              )}>
              {f.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
