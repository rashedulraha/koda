import { Button } from "@/components/ui/button";
import React from "react";

const Build_the_future = () => {
  return (
    <div className="my-5 md:my-8 lg:my-12 flex items-center flex-col md:flex-row justify-between">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-1 font-bold leading-14">
        Plan the present. Build the future.
      </h2>
      <div className="space-x-3 ">
        <Button variant={"outline"}>Contact sales</Button>
        <Button>Get start</Button>
      </div>
    </div>
  );
};

export default Build_the_future;
