import React from "react";
import { CanvasText } from "./canvas-text";
import { cn } from "@/lib/utils";

const Join_developers = () => {
  return (
    <h2
      className={cn(
        "group relative mx-auto mt-4 max-w-2xl text-2xl font-semibold mb-2 leading-tight tracking-tight text-center",
      )}>
      Join developers from{" "}
      <span className="inline-block align-middle">
        <CanvasText
          text="leading companies"
          backgroundClassName="bg-blue-600 dark:bg-blue-700"
          colors={[
            "rgba(0, 153, 255, 1)",
            "rgba(0, 153, 255, 0.9)",
            "rgba(0, 153, 255, 0.8)",
            "rgba(0, 153, 255, 0.7)",
            "rgba(0, 153, 255, 0.6)",
            "rgba(0, 153, 255, 0.5)",
            "rgba(0, 153, 255, 0.4)",
            "rgba(0, 153, 255, 0.3)",
            "rgba(0, 153, 255, 0.2)",
            "rgba(0, 153, 255, 0.1)",
          ]}
          lineGap={4}
          animationDuration={20}
        />
      </span>
    </h2>
  );
};

export default Join_developers;
