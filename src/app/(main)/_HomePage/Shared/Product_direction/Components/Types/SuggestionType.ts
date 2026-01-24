type SuggestionType = "project" | "platform" | "empty";
export type Status = "suggested" | "in_progress";

export interface Suggestion {
  id: string;
  title: string;
  description: string;
  type: SuggestionType;
  status: Status;
  icon?: React.ComponentType<{ className?: string }>;
  platformIcon?: "dot";
}
