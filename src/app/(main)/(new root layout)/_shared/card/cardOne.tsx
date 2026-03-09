import React from "react";
import Image from "next/image";
import { cardOneTypes } from "../../_types/newLayoutTypes";
import { ArrowUpRight } from "lucide-react";

const CardOne = ({ data }: { data: cardOneTypes }) => {
  return (
    <div className="max-w-xl group">
      {/* Image */}
      <div className="relative rounded-md overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={400}
          className="w-full h-65 object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground text-sm flex items-center gap-2">
            <span>{data.category}</span>
            <span>•</span>
            <span>{data.date}</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100">
            <ArrowUpRight />
          </div>
        </div>

        <h2 className="text-lg md:text-2xl text-foreground font-semibold my-3">
          {data.title}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default CardOne;
