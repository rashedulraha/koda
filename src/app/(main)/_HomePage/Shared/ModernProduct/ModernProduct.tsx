// import image section
import image1 from "@/modern_Image/modern1.png";
import image2 from "@/modern_Image/modern2.png";
import image3 from "@/modern_Image/modern3.png";

const cards = [
  {
    image: image1,
    title: "Purpose-built for development",
    description: "Streamline your workflow with purpose-built tools",
  },
  {
    image: image2,
    title: "Designed to move fast",
    description: "Lightning-fast performance for modern teams",
  },
  {
    image: image3,
    title: "Crafted to perfection",
    description: "Meticulously designed for exceptional experiences",
  },
];

import { Button } from "@/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ModernProduct = () => {
  return (
    <div className="modern-product-section py-12 md:py-16 lg:py-20 px-4 md:px-6">
      {/* Header Section */}
      <div className="header-container max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.2] tracking-tight">
            Made for modern product teams
          </h2>

          <div className="description-wrapper space-y-3">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.
            </p>

            <Link href="/make-the-switch" className="inline-block">
              <span className="switch-link group inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors duration-300">
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
      <div className="cards-container max-w-7xl mx-auto">
        <div className="cards-scroll-wrapper relative">
          {/* Gradient Overlays for Scroll Indication */}
          <div className="scroll-gradient left absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 md:hidden" />
          <div className="scroll-gradient right absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 md:hidden" />

          <div className="cards-grid flex overflow-x-auto gap-5 md:gap-6 lg:gap-7 pb-6 snap-x snap-mandatory scrollbar-custom">
            {cards.map((card, index) => (
              <div
                key={index}
                className="card-item flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] snap-center group">
                <div className="card-inner bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20">
                  {/* Image Container */}
                  <div className="image-container relative overflow-hidden aspect-video bg-muted/30">
                    <Image
                      className="image-zoom object-cover transition-transform duration-700 group-hover:scale-110"
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                      priority={index === 0}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="card-content p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <h3
                          title={card.title}
                          className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight line-clamp-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {card.description}
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        className="add-button flex-shrink-0 rounded-full w-10 h-10 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary group-hover:border-primary">
                        <Plus
                          size={18}
                          className="transition-transform duration-300 group-hover:rotate-90"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator for Mobile */}
        <div className="scroll-indicator flex justify-center gap-2 mt-6 md:hidden">
          {cards.map((_, index) => (
            <div
              key={index}
              className="h-1.5 w-6 rounded-full bg-muted-foreground/20 transition-all duration-300"
              data-index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernProduct;
