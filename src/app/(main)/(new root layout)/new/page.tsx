import React from "react";

import CardOne from "../_shared/card/cardOne";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allData } from "../data/allData";

const allArrayOfObjectData = allData;

const newAllArrayOfObject = allArrayOfObjectData.slice(0, 4);

const New = () => {
  return (
    <>
      <div className="my-5 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {newAllArrayOfObject.map((singleObject) => (
            <CardOne key={singleObject.id} data={singleObject} />
          ))}

          {/* bottom button  */}
        </div>

        {/* changelog partition */}
        <hr className="my-10 md:my-14" />

        {/* change log content  */}
        <div>
          {/* changelog header section */}
          <div className="flex items-center justify-between w-full">
            <h2 className="capitalize font-bold text-lg md:text-2xl">
              changelog
            </h2>
            <Link
              className="capitalize flex items-center gap-1 text-muted-foreground hover:text-foreground duration-150"
              href={"/all-updates"}>
              all update <ChevronRight size={20} />
            </Link>
          </div>
          {/* change log main card section */}
          <div className="my-5 md:my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8"></div>
        </div>

        {/*  new page load more button  */}
        <div className="w-full flex items-center justify-center">
          <Button className="mt-5 md:mt-10 cursor-pointer" variant={"outline"}>
            Load more
          </Button>
        </div>
      </div>
    </>
  );
};

export default New;
