import Image from "next/image";
import React from "react";
import { updateDataTypes } from "../../_types/newLayoutTypes";

const UpdateCard = ({ data }: { data: updateDataTypes }) => {
  return (
    <div className="bg-background border border-border/50 rounded-md overflow-hidden transition hover:border-border hover:shadow-lg">
      {/* Image */}
      <div className="relative h-40 ">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        {/* Divider */}
        <div className="border-t border-border/60 mb-4"></div>

        {/* Date */}
        <p className="text-muted-foreground text-sm mb-2">{data.date}</p>

        {/* Title */}
        <h2 className="text-foreground text-sm font-semibold mb-2 leading-snug">
          {data.title}
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default UpdateCard;
