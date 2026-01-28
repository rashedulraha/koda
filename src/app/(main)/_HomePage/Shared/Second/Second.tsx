import Link from "next/link";
import { Customer_Data } from "../Customer_Data/Customer_data";
import Customer_Marquee from "../Customer_Marquee/Customer_Marquee";
import { ChevronRight } from "lucide-react";

const Second = () => {
  return (
    <div>
      <div className="mt-5 md:mt-10 lg:mt-14">
        <div className="text-center space-y-1">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold">
            Powering the world’s best product teams.
          </h3>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-muted-foreground">
            From next-gen startups to established enterprises.
          </h3>
        </div>

        {/* hover and customer section  */}
        <div className="my-5 md:my-10 relative group ">
          <div>
            <div className="hidden lg:grid grid-cols-4 gap-11 items-center justify-center place-content-center text-center transition-all decoration-800 group group-hover:blur-sm">
              {/*  customer data  */}
              {Customer_Data.map((customer) => (
                <h2 key={customer.id} className="text-2xl font-bold">
                  {customer.name}
                </h2>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  group opacity-0 group-hover:opacity-100">
              <button className="p-0 h-auto hover:bg-transparent group">
                <Link
                  href={"/meet-our-customer"}
                  className="no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-foreground inline-block bg-muted">
                  {/* Animated Gradient Border Overlay */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>

                  {/* Inner Content Container */}
                  <div className="relative flex items-center  z-10 rounded-full bg-background py-1 px-4 ring-1 ring-border/50">
                    <span className="font-bold capitalize text-primary mr-1">
                      new:
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      koda agent for slack
                    </span>

                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>

                  {/* Bottom Shine Effect */}
                  <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              </button>
            </div>
            <div className="lg:hidden">
              <Customer_Marquee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
