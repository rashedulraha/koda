import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ModernProduct = () => {
  return (
    <div className="my-15 md:my-20 lg:my-25">
      <div>
        <div className="flex items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-1 font-bold ">
            Made for modern product teams
          </h2>
          <p className="flex-1 text-sm font-normal">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
            <Link href={"/make-the-switch"}>
              <span className="flex items-center font-bold group w-fit">
                Make the switch
                <ChevronRight
                  size={17}
                  className="group-hover:translate-x-1 transition-normal duration-100 "
                />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernProduct;
