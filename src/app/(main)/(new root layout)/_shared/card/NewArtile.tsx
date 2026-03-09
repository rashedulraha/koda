import Image from "next/image";
import React from "react";
import { NewArticleTypes } from "../../_types/newLayoutTypes";

const NewArticle = ({ data }: { data: NewArticleTypes }) => {
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
        <div className="flex items-center gap-3">
          <p className="text-muted-foreground text-sm mb-2">{data.author}</p>
          <p className="text-muted-foreground text-sm mb-2">{data.date}</p>
        </div>

        {/* Title */}
        <h2 className="text-foreground text-sm font-semibold mb-2 leading-snug">
          {data.title}
        </h2>

        {/* Description */}
      </div>
    </div>
  );
};

export default NewArticle;
