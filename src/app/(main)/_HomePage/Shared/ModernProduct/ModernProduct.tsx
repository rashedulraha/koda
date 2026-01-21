// import image section
import image1 from "@/modern_Image/modern1.png";
import image2 from "@/modern_Image/modern2.png";
import image3 from "@/modern_Image/modern3.png";
const cards = [
  {
    image: image1,
    title: "Purpose-build for development",
  },
  {
    image: image2,
    title: "Designed to move fast",
  },
  {
    image: image3,
    title: "Crafted to perfection",
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
        <div className="my-5 md:my-8 lg:my-12 flex items-center overflow-x-auto gap-4 pb-4 snap-x no-scrollbar p-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-70 snap-center border rounded-2xl bg-card hover:-translate-y-2 transition-all duration-300">
              <div className="w-full flex-1">
                <Image
                  className="w-full object-cover"
                  src={card.image}
                  alt="modern image"
                />
              </div>

              <div className="px-5 pb-5 flex items-center justify-between gap-3 ">
                <h2
                  title={card.title}
                  className="text-base lg:text-xl font-bold truncate">
                  {card.title}
                </h2>

                <Button variant="outline" className="cursor-pointer">
                  <Plus />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/*third section */}
        <div className="my-5 md:my-8 lg:my-12 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-1 font-bold leading-14">
            Plan the present. Build the future.
          </h2>
          <div className="space-x-3 ">
            <Button variant={"outline"}>Contact sales</Button>
            <Button>Get start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernProduct;
