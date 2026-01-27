"use client";

import Container from "@/components/Responsive/Container";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Layers, Palette, Rocket } from "lucide-react";
import { TextGenerateEffectDemo } from "../TextGenerateEffectDemo/TextGenerateEffectDemo";

export function BackgroundBeamsDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-background py-10 md:py-14 lg:py-20 lg:min-h-[calc(100vh-62px)]">
      <Container>
        <div className="relative z-10">
          <TextGenerateEffectDemo />

          <p className="mt-3 md:mt-5 text-sm md:text-base leading-8 text-muted-foreground max-w-2xl">
            Meet the system for modern software development. <br />
            Streamline issues, projects, and product roadmaps.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 bg-secondary/30">
              <Zap size={14} className="text-yellow-500" /> Fast setup
            </span>
            <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 bg-secondary/30">
              <Layers size={14} className="text-blue-500" /> Modular
            </span>
            <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 bg-secondary/30">
              <Palette size={14} className="text-purple-500" /> Custom UI
            </span>
            <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 bg-secondary/30">
              <Rocket size={14} className="text-orange-500" /> Production ready
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Get started free
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 transition-all duration-300 hover:bg-secondary/50 hover:-translate-y-0.5">
              <span className="font-bold text-blue-500">New : </span>
              Koda agent for Slack
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground opacity-80">
            Trusted by 1,000+ developers · Open source · MIT Licensed
          </p>
        </div>
      </Container>

      <BackgroundBeams />
    </div>
  );
}
