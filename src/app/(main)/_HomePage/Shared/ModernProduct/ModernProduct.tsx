// import image section
import image1 from "@/modern_Image/modern1.png";
import image2 from "@/modern_Image/modern2.png";
import image3 from "@/modern_Image/modern3.png";
const cards = [
  {
    image: image1,
    title: "Purpose built for product development",
  },
  {
    image: image2,
    title: "Purpose built for product development",
  },
  {
    image: image3,
    title: "Purpose built for product development",
  },
];

import { Button } from "@/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ModernProduct = () => {
  return (
    <div className="my-15 md:my-20 lg:my-25 ">
      <div>
        {/* first section */}
        <div className="flex items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-1 font-bold leading-14">
            Made for modern product teams
          </h2>
          <p className="flex-1 text-sm font-normal ">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
            <Link href={"/make-the-switch"}>
              <span className="flex items-center font-bold group w-fit text-sidebar-primary">
                Make the switch
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-normal duration-100 "
                />
              </span>
            </Link>
          </p>
        </div>

        {/* second section */}
        <div className="my-5 md:my-8 lg:my-12 flex overflow-x-auto gap-4 pb-4 snap-x no-scrollbar">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-70 snap-center border rounded-2xl bg-card">
              <div className="w-full">
                <Image
                  className="w-full object-cover"
                  src={card.image}
                  alt="modern image"
                />
              </div>

              <div className="px-5 pb-5 flex items-center justify-between gap-3">
                <h2 className="text-base lg:text-xl font-bold">{card.title}</h2>

                <Button variant="outline" className="cursor-pointer">
                  <Plus />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernProduct;
