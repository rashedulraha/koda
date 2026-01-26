"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Koda is a purpose-built tool for planning and building products`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
