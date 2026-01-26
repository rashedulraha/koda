"use client";
import Container from "@/components/Responsive/Container";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen overflow-hidden bg-neutral-950 relative flex flex-col  antialiased py-10 md:pt-14 lg:pt-20 ">
      <Container>
        <h1 className="text-2xl text-left sm:text-3xl md:text-5xl lg:text-6xl font-medium md:leading-17 text-wrap relative z-10  bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600">
          Koda is a purpose-built tool for <br /> planning and building products
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-8 mt-3 md:mt-5">
          Meet the system for modern software development. <br />
          Streamline issues, projects, and product roadmaps
        </p>
        {/* action button */}
        <div className="mt-5 md:mt-8 space-x-5 space-y-4 md:space-y-0 ">
          <Button className="cursor-pointer">Start building</Button>
          <Button variant={"outline"} className="cursor-pointer">
            <span className="font-bold capitalize text-sidebar-primary">
              new :
            </span>
            koda agent for slack <ChevronRight />
          </Button>
        </div>
      </Container>
      <BackgroundBeams />
    </div>
  );
}
