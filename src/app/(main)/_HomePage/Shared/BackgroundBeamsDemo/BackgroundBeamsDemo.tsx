"use client";
import Container from "@/components/Responsive/Container";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function BackgroundBeamsDemo() {
  return (
    <div className="lg:min-h-[calc(100vh-62px)] overflow-hidden bg-background relative flex flex-col antialiased py-10 md:py-14 lg:py-20">
      <Container>
        <div className="relative z-10">
          <h1 className="text-2xl text-left sm:text-3xl md:text-5xl lg:text-6xl font-medium md:leading-17 text-wrap bg-clip-text text-transparent bg-linear-to-b from-foreground to-muted-foreground/60">
            Koda is a purpose-built tool for <br /> planning and building
            products
          </h1>

          <p className="text-muted-foreground text-sm md:text-base leading-8 mt-3 md:mt-5 max-w-2xl">
            Meet the system for modern software development. <br />
            Streamline issues, projects, and product roadmaps
          </p>

          <div className="mt-5 md:mt-8 flex flex-wrap gap-4">
            <Button className="cursor-pointer">Start building</Button>

            <Button variant="outline" className="cursor-pointer">
              <span className="font-bold capitalize text-sidebar-primary">
                new :
              </span>
              koda agent for slack <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>

      {/* BackgroundBeams */}
      <BackgroundBeams />
    </div>
  );
}
