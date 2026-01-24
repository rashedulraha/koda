import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import TriageSuggestionCard from "./Components/TriageSuggestionCard/TriageSuggestionCard";

import AskAnythingBar from "./Components/AskAnythingBar/AskAnythingBar";
import Container from "@/components/Responsive/Container";

const Product_direction = () => {
  return (
    <>
      {/* Hero Section */}
      <Container>
        <div className="space-y-3 ">
          <div className="flex items-center hover:translate-x-1 transition-all duration-500 cursor-pointer">
            <p className="text-sm font-semibold">
              Project and long-term planning
            </p>
            <ChevronRight size={17} />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Set the product direction
          </h1>

          {/* Description */}
          <p className="max-w-md font-semibold text-muted-foreground">
            <span className="text-bold text-card-foreground">
              Align your team around a unified product timeline.
            </span>{" "}
            Plan, manage, and track all product initiatives with Linear’s visual
            planning tools.
          </p>

          {/* CTA Button */}
          <Button variant="outline" className="w-full sm:w-fit">
            learn more <ChevronRight size={19} className="ml-1" />
          </Button>
        </div>
      </Container>

      {/* Two-Column Section */}
      <div className="max-w-250 mx-auto flex flex-col md:flex-row my-12  divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 p-6 lg:p-10">
          <h2 className="font-semibold text-xl md:text-2xl mb-3">
            Self-driving product operations
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Streamline your product development workflows with AI assistance for
            routine, manual tasks.
          </p>
          {/* Card Component */}
          <TriageSuggestionCard />
        </div>

        {/* Right Column */}
        <Container>
          <div className="flex-1 py-4 md:p-6 lg:p-10">
            <h2 className="font-semibold text-xl md:text-2xl mb-3">Koda MCP</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Connect Linear to your favorite tools including Cursor, Claude,
              ChatGPT, and more.
            </p>
            {/* Koda Component */}
            <AskAnythingBar />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Product_direction;
