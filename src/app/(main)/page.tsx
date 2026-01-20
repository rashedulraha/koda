import Container from "@/components/Responsive/Container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-10 md:mt-20">
          <h1 className="text-2xl text-center md:text-left sm:text-3xl md:text-5xl lg:text-6xl font-medium md:leading-17">
            Koda is a purpose-built tool for <br /> planning and building
            products
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-8 mt-3 md:mt-5">
            Meet the system for modern software development. <br />
            Streamline issues, projects, and product roadmaps
          </p>
          {/* action button */}
          <div className="mt-5 md:mt-8 space-x-5">
            <Button className="cursor-pointer">Start building</Button>
            <Button variant={"outline"} className="cursor-pointer">
              <span className="font-bold capitalize text-sidebar-primary">
                new :
              </span>
              koda agent for slack <ChevronRight />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
