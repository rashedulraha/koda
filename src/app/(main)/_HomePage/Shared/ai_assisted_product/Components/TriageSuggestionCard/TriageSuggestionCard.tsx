"use client";

import { useState } from "react";
import { Sparkles, Check, BarChart2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SuggestionsData } from "../Data/SuggestionsData";
import { Status, Suggestion } from "../Types/SuggestionType";

const STATUS_STYLES: Record<Status, string> = {
  suggested: "border-primary/40 bg-primary/10 text-primary",
  in_progress: "border-chart-4/40 bg-chart-4/10 text-chart-4",
};

const TriageIntelligence = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(
    SuggestionsData as Suggestion[],
  );

  const [activeSuggestionId, setActiveSuggestionId] =
    useState<string>("mobile-refactor");

  const activeSuggestion = suggestions.find((s) => s.id === activeSuggestionId);

  const handleAcceptSuggestion = () => {
    setSuggestions((prevSuggestions) =>
      prevSuggestions.map((s) =>
        s.id === activeSuggestionId
          ? { ...s, status: "in_progress" as Status }
          : s,
      ),
    );
  };

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
            <div className="flex items-center">
              <span className="w-28 text-[13px] text-muted-foreground">
                Suggestions
              </span>

              <div className="flex gap-2">
                {suggestions.map((suggestion) => {
                  const isActive = suggestion.id === activeSuggestionId;
                  const Icon = suggestion.icon;

                  return (
                    <Badge
                      key={suggestion.id}
                      variant="outline"
                      className={`border-dashed px-2 font-normal transition-colors cursor-pointer hover:bg-accent ${
                        isActive
                          ? STATUS_STYLES[suggestion.status]
                          : "bg-muted/30"
                      }`}
                      onClick={() => setActiveSuggestionId(suggestion.id)}>
                      {Icon && <Icon className="mr-1.5 size-3.5" />}
                      {suggestion.platformIcon === "dot" && (
                        <span className="mr-1.5 size-1.5 rounded-full bg-destructive" />
                      )}
                      {suggestion.id === "nan-placeholder" ? (
                        <>
                          <span className="mr-1.5 flex size-4 items-center justify-center rounded-full bg-muted text-[8px]">
                            nan
                          </span>
                          <span className="opacity-70">nan</span>
                        </>
                      ) : (
                        <span className={isActive ? "" : "opacity-70"}>
                          {suggestion.title}
                        </span>
                      )}
                    </Badge>
                  );
                })}
              </div>
            </div>

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

      {activeSuggestion && activeSuggestion.type !== "empty" && (
        <Card className="text-card-foreground flex flex-col gap-2 rounded-xl border absolute left-35 top-38 z-10 w-85 animate-in zoom-in-95 fade-in border-border bg-popover p-5 shadow-2xl duration-500">
          <div className="flex items-center gap-2">
            {activeSuggestion.icon && (
              <activeSuggestion.icon className="size-4 text-primary" />
            )}
            <span className="text-sm font-semibold tracking-tight">
              {activeSuggestion.title}
            </span>
          </div>

          <p className="text-[14px] text-muted-foreground">
            {activeSuggestion.description}
          </p>

          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className={`flex items-center gap-1.5 px-2 py-0.5 text-[12px] font-medium ${STATUS_STYLES[activeSuggestion.status]}`}>
              {activeSuggestion.status === "in_progress" ? (
                <Loader2 className="size-3 animate-spin" />
              ) : (
                <span className="size-2 animate-pulse rounded-full bg-primary" />
              )}
              {activeSuggestion.status === "in_progress"
                ? "In Progress"
                : "Suggested"}
            </Badge>

            <div className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
              <BarChart2 className="size-3.5 rotate-90" />
              Medium
            </div>
          </div>

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

          {activeSuggestion.status === "suggested" &&
            activeSuggestion.type === "project" && (
              <Button
                variant="secondary"
                onClick={handleAcceptSuggestion}
                className="flex w-full items-center justify-center gap-2 border border-border shadow-sm">
                <Check className="size-4" />
                Accept suggestion
              </Button>
            )}
        </Card>
      )}
    </div>
  );
};

export default TriageIntelligence;
