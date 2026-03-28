import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import TriageSuggestionCard from "./Components/TriageSuggestionCard/TriageSuggestionCard";
import AskAnythingBar from "./Components/AskAnythingBar/AskAnythingBar";
import Container from "@/components/Responsive/Container";

const Ai_assisted_product = () => {
  return (
    <>
      {/* Hero Section */}
      <Container>
        <div className="hero-content space-y-4 md:space-y-5">
          {/* AI Badge */}
          <div className="ai-badge group flex items-center cursor-pointer transition-all duration-300 hover:translate-x-1">
            <h2 className="text-sm font-semibold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Artificial intelligent
            </h2>
            <ChevronRight
              size={17}
              className="ml-1 text-primary transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </div>

          {/* Main Heading */}
          <h1 className="heading-gradient text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
            AI-assisted product development
          </h1>

          {/* Description */}
          <p className="description max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-foreground">
              Koda for Agents.
            </span>{" "}
            Choose from a variety of AI agents and start delegating work, from
            code generation to other technical tasks.
          </p>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="cta-button group w-full sm:w-auto px-6 py-5 text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Learn more
            <ChevronRight
              size={19}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </Container>

      {/* Two-Column Section */}
      <div className="two-column-section max-w-7xl mx-auto my-16 md:my-20 lg:my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border rounded-xl overflow-hidden border border-border/50 bg-background shadow-sm">
          {/* Left Column */}
          <div className="col-left p-6 md:p-8 lg:p-10 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
                Self-driving product operations
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Streamline your product development workflows with AI assistance
                for routine, manual tasks.
              </p>
            </div>
            <div className="mt-4">
              <TriageSuggestionCard />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-right p-6 md:p-8 lg:p-10 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
                Koda MCP
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Connect Linear to your favorite tools including Cursor, Claude,
                ChatGPT, and more.
              </p>
            </div>
            <div className="mt-4">
              <AskAnythingBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ai_assisted_product;
