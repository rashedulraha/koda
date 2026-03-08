import React from "react";
import { cardOneTypes } from "../../_types/newLayoutTypes";

const CardOne = ({ data }: { data: cardOneTypes }) => {
  return (
    <div className="">
      <div className="text-muted-foreground text-sm font-normal flex items-center">
        <span>{data.category}</span>
        <span>{data.date}</span>
      </div>
      <h2 className="text-lg md:text-2xl text-foreground font-semibold my-5">
        {data.title}
      </h2>
      <p className="text-muted-foreground">{data.description}</p>
    </div>
  );
};

export default CardOne;
