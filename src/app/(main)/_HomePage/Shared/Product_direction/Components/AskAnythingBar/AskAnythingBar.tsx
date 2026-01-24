"use client";

import { Paperclip, Globe, Sparkles } from "lucide-react";
import { useState } from "react";

const AskAnythingBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative mx-auto mt-10 w-full max-w-xl">
      {/* Glow / shadow background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-background blur-xl opacity-80" />

      <div className="rounded-2xl border border-border bg-card shadow-xl">
        {/* Input */}
        <div className="px-4 pt-4">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask anything"
            className="
              w-full bg-transparent text-sm text-foreground
              placeholder:text-muted-foreground
              outline-none
            "
          />
        </div>

        {/* Bottom actions */}
        <div className="mt-4 flex items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-2">
            <ActionButton
              icon={<Paperclip className="size-4" />}
              label="Attach"
            />
            <ActionButton icon={<Globe className="size-4" />} label="Search" />
            <ActionButton
              icon={<Sparkles className="size-4" />}
              label="Reason"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type ActionButtonProps = {
  icon: React.ReactNode;
  label: string;
};

const ActionButton = ({ icon, label }: ActionButtonProps) => {
  return (
    <button
      className="
        flex items-center gap-1.5 rounded-lg border border-border
        bg-muted/40 px-2.5 py-1.5 text-xs font-medium
        text-muted-foreground
        transition hover:bg-muted
      ">
      {icon}
      {label}
    </button>
  );
};

export default AskAnythingBar;
