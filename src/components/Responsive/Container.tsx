// Container.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
