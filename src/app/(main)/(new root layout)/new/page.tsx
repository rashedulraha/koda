import React from "react";
import allData from "../data/allData";
import CardOne from "../_shared/card/cardOne";
import { Button } from "@/components/ui/button";

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
