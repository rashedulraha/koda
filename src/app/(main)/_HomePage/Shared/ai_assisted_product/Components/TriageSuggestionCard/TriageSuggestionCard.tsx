"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Smartphone, Check, BarChart2, Loader2 } from "lucide-react";

const TriageIntelligence = () => {
  const [status, setStatus] = useState<"suggested" | "in_progress">(
    "suggested",
  );

  // main content
  return (
    <div className="relative my-5 p-8 min-h-100 font-sans">
      <div
        className="max-w-2xl transition-all duration-700"
        style={{
          maskImage: "linear-gradient(to right, black 40%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 40%, transparent 90%)",
        }}>
        <div className="w-120 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-8 flex items-center gap-2 opacity-60">
            <Sparkles className="size-4" />
            <h3 className="text-[13px] font-medium tracking-wide">
              Triage Intelligence
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <span className="w-28 text-[13px] text-muted-foreground">
                Suggestions
              </span>
              <div className="flex gap-2">
                {/* nan badge */}
                <div className="flex items-center gap-1.5 rounded-md border border-dashed border-border bg-muted/30 px-2 py-1 text-[13px]">
                  <div className="flex size-4 items-center justify-center rounded-full bg-muted text-[8px]">
                    nan
                  </div>
                  <span className="opacity-70">nan</span>
                </div>

                {/* Active Suggestion Badge */}
                <div
                  className={`flex items-center gap-1.5 rounded-md border border-dashed px-2 py-1 text-[13px] transition-colors ${
                    status === "in_progress"
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-primary/40 bg-primary/10 text-primary"
                  }`}>
                  <Smartphone className="size-3.5" />
                  <span>Mobile App Refactor</span>
                </div>

                {/* Slack badge */}
                <div className="flex items-center gap-1.5 rounded-md border border-dashed border-border bg-muted/30 px-2 py-1 text-[13px]">
                  <div className="size-1.5 rounded-full bg-destructive" />
                  <span className="opacity-70">Slack</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="w-28 text-[13px] text-muted-foreground">
                Duplicate of
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-28 text-[13px] text-muted-foreground">
                Related to
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FOREGROUND LAYER: Floating Detail Card
         Placed absolutely over the faded background.
      */}
      <div className="absolute left-35 top-25 w-85 animate-in zoom-in-95 fade-in rounded-xl border border-border bg-popover p-5 shadow-2xl duration-500">
        <div className="mb-1.5 flex items-center gap-2">
          <Smartphone
            className={`size-4 ${status === "in_progress" ? "text-primary" : "text-blue-400"}`}
          />
          <span className="text-[15px] font-semibold">Mobile App Refactor</span>
        </div>

        <p className="mb-4 text-[14px] text-muted-foreground">
          Optimize mobile app performance
        </p>

        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[12px] font-medium transition-all ${
              status === "in_progress"
                ? "border-chart-4/40 bg-chart-4/10 text-chart-4"
                : "border-yellow-500/30 bg-yellow-500/10 text-yellow-500"
            }`}>
            {status === "in_progress" ? (
              <Loader2 className="size-3 animate-spin" />
            ) : (
              <div className="size-2 rounded-full bg-yellow-500 animate-pulse" />
            )}
            {status === "in_progress" ? "In Progress" : "Suggested"}
          </div>

          <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <BarChart2 className="size-3.5 rotate-90" />
            Medium
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-foreground/80">
            Why this project was suggested
          </h4>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            The current issue seems to be a mobile app related bug that would
            fit well within the scope of this project.
          </p>
        </div>

        {/* Action Button: Only shows if not yet accepted */}
        {status === "suggested" && (
          <Button
            onClick={() => setStatus("in_progress")}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-secondary/80 text-secondary-foreground hover:bg-secondary border border-border">
            <Check className="size-4" />
            Accept suggestion
          </Button>
        )}
      </div>
    </div>
  );
};

export default TriageIntelligence;
