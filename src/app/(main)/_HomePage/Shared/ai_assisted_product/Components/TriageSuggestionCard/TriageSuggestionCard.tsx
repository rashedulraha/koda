"use client";

import { useState } from "react";
import { Sparkles, Smartphone, Check, BarChart2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Status = "suggested" | "in_progress";

const STATUS_STYLES: Record<Status, string> = {
  suggested: "border-primary/40 bg-primary/10 text-primary",
  in_progress: "border-chart-4/40 bg-chart-4/10 text-chart-4",
};

const TriageIntelligence = () => {
  const [status, setStatus] = useState<Status>("suggested");

  return (
    <div className="relative my-5 min-h-112.5 p-8 font-sans">
      {/* ================= Background Layer ================= */}
      <div
        className="max-w-2xl transition-all duration-700"
        style={{
          maskImage: "linear-gradient(to right, black 40%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 40%, transparent 95%)",
        }}>
        <Card className="w-120 border-border bg-card shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-1 opacity-60">
              <Sparkles className="size-4" />
              <CardTitle className="text-[13px] font-medium tracking-wide leading-none">
                Triage Intelligence
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            {/* Suggestions */}
            <div className="flex items-center">
              <span className="w-28 text-[13px] text-muted-foreground">
                Suggestions
              </span>

              <div className="flex gap-2">
                {/* nan */}
                <Badge
                  variant="outline"
                  className="border-dashed bg-muted/30 px-2  font-normal">
                  <span className="mr-1.5 flex size-4 items-center justify-center rounded-full bg-muted text-[8px]">
                    nan
                  </span>
                  <span className="opacity-70">nan</span>
                </Badge>

                {/* Active */}
                <Badge
                  variant="outline"
                  className={`border-dashed px-2 font-normal transition-colors ${STATUS_STYLES[status]}`}>
                  <Smartphone className="mr-1.5 size-3.5" />
                  Mobile App Refactor
                </Badge>

                {/* Slack */}
                <Badge
                  variant="outline"
                  className="border-dashed bg-muted/30 px-2 font-normal">
                  <span className="mr-1.5 size-1.5 rounded-full bg-destructive" />
                  <span className="opacity-70">Slack</span>
                </Badge>
              </div>
            </div>

            {/* Empty rows */}
            {["Duplicate of", "Related to"].map((label) => (
              <div key={label} className="flex items-center">
                <span className="w-28 text-[13px] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ================= Foreground Floating Card ================= */}
      <Card className="text-card-foreground flex flex-col gap-2 rounded-xl border absolute left-35 top-38 z-10 w-85 animate-in zoom-in-95 fade-in border-border bg-popover p-5 shadow-2xl duration-500">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Smartphone className="size-4 text-primary" />
          <span className="text-sm font-semibold tracking-tight">
            Mobile App Refactor
          </span>
        </div>

        <p className="text-[14px] text-muted-foreground">
          Optimize mobile app performance
        </p>

        {/* Status row */}
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className={`flex items-center gap-1.5 px-2 py-0.5 text-[12px] font-medium ${STATUS_STYLES[status]}`}>
            {status === "in_progress" ? (
              <Loader2 className="size-3 animate-spin" />
            ) : (
              <span className="size-2 animate-pulse rounded-full bg-primary" />
            )}
            {status === "in_progress" ? "In Progress" : "Suggested"}
          </Badge>

          <div className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
            <BarChart2 className="size-3.5 rotate-90" />
            Medium
          </div>
        </div>

        {/* Why section */}
        <div className="mt-6 border-t border-border/50 pt-5">
          <h4
            title="Why this project was suggested"
            className="mb-1 text-sm font-bold uppercase tracking-widest text-foreground/80 truncate">
            Why this project was suggested
          </h4>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            The current issue seems to be a mobile app related bug that would
            fit well within the scope of this project.
          </p>
        </div>

        {/* Action */}
        {status === "suggested" && (
          <Button
            variant="secondary"
            onClick={() => setStatus("in_progress")}
            className="flex w-full items-center justify-center gap-2 border border-border shadow-sm">
            <Check className="size-4" />
            Accept suggestion
          </Button>
        )}
      </Card>
    </div>
  );
};

export default TriageIntelligence;
