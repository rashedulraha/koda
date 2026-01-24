import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const Ai_assisted_product = () => {
  return (
    <div className="space-y-6 bg-card">
      <div className="flex items-center  ">
        <h2 className="text-sm font-semibold">Artificial intelligent</h2>
        <ChevronRight size={19} />
      </div>
      {/*  assisted h1 section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:text-bold ">
        AI-assisted product development
      </h1>
      <p className="max-w-84 font-semibold text-muted-foreground ">
        <span className="font-bold text-white">Linear for Agents. </span>Choose
        from a variety of AI agents and start delegating work, from code
        generation to other technical tasks.
      </p>
      <Button variant={"outline"}>
        learn more <ChevronRight size={19} />
      </Button>
    </div>
  );
};

export default Ai_assisted_product;
