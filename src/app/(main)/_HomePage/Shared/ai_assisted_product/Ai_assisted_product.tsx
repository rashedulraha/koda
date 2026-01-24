import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const Ai_assisted_product = () => {
  return (
    <>
      {/*  fires section */}
      <div className="space-y-6">
        <div className="flex items-center hover:translate-x-1 transition-all duration-500 ">
          <h2 className="text-sm font-semibold ">Artificial intelligent</h2>
          <ChevronRight size={17} />
        </div>
        {/*  assisted h1 section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:text-bold ">
          AI-assisted product development
        </h1>
        <p className="max-w-84 font-semibold text-muted-foreground ">
          <span className="font-bold text-white">Linear for Agents. </span>
          Choose from a variety of AI agents and start delegating work, from
          code generation to other technical tasks.
        </p>
        <Button variant={"outline"}>
          learn more <ChevronRight size={19} />
        </Button>
      </div>
      {/*  second section */}
      <div className="flex items-center flex-col md:flex-row my-5 md:my-8 lg:my-12">
        <div className="flex-1 p-6 lg:p-10 border border-l-0">
          <h2 className="font-semibold text-lg sm:text-xl md:text-xl lg:text-2xl mb-3 ">
            Self-driving product operations
          </h2>
          <p className="text-sm font-semibold  md:text-base text-muted-foreground">
            Streamline your product development workflows with AI assistance for
            routine, manual tasks.
          </p>
        </div>
        <div className="flex-1 p-6 lg:p-10  border-t border-b">
          <h2 className="font-semibold text-lg sm:text-xl md:text-xl lg:text-2xl mb-3 ">
            Koda MCP
          </h2>
          <p className="text-sm font-semibold md:text-base text-muted-foreground">
            Connect Linear to your favorite tools including Cursor, Claude,
            ChatGPT, and more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Ai_assisted_product;
