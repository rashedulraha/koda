// import image section
import image1 from "@/modern_Image/modern1.png";
import image2 from "@/modern_Image/modern2.png";
import image3 from "@/modern_Image/modern3.png";

const cards = [
  {
    image: image1,
    title: "Purpose-built for development",
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
    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight flex-1">
            Made for modern product teams
          </h2>

          <div className="flex-1 space-y-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.
            </p>

            <Link href="/make-the-switch" className="inline-block">
              <span className="group inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors duration-300">
                Make the switch
                <ChevronRight
                  size={18}
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-5 md:gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="shrink-0 w-70 md:w-[320px] lg:w-90 snap-center group">
              <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ">
                {/* Image Container */}
                <div className="relative w-full aspect-video bg-muted/30 overflow-hidden">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      title={card.title}
                      className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight truncate flex-1">
                      {card.title}
                    </h3>

                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-10 h-10 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground shrink-0">
                      <Plus size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator for Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {cards.map((_, index) => (
            <div
              key={index}
              className="h-1.5 w-6 rounded-full bg-muted-foreground/20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernProduct;
