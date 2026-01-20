import Container from "@/components/Responsive/Container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Customer_Marquee from "./Shared/Customer_Marquee/Customer_Marquee";
import { Customer_Data } from "./Shared/Customer_Data/Customer_data";
import ModernProduct from "./Shared/ModernProduct/ModernProduct";

const HomePage = () => {
  return (
    <Container>
      <div className="mt-10 md:mt-20">
        {/* first section */}
        <div>
          <h1 className="text-2xl text-center md:text-left sm:text-3xl md:text-5xl lg:text-6xl font-medium md:leading-17">
            Koda is a purpose-built tool for <br /> planning and building
            products
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-8 mt-3 md:mt-5">
            Meet the system for modern software development. <br />
            Streamline issues, projects, and product roadmaps
          </p>
          {/* action button */}
          <div className="mt-5 md:mt-8 space-x-5">
            <Button className="cursor-pointer">Start building</Button>
            <Button variant={"outline"} className="cursor-pointer">
              <span className="font-bold capitalize text-sidebar-primary">
                new :
              </span>
              koda agent for slack <ChevronRight />
            </Button>
          </div>
        </div>

        {/* second section */}
        <div className="mt-5 md:mt-10">
          <div className="text-center space-y-2 ">
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
              <div className="hidden lg:grid grid-cols-4 gap-11 items-center justify-center place-content-center text-center transition-all decoration-800 group group-hover:blur-xl">
                {/*  customer data  */}
                {Customer_Data.map((customer) => (
                  <>
                    <h2 key={customer.id} className="text-2xl font-bold">
                      {customer.name}
                    </h2>
                  </>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  group opacity-0 group-hover:opacity-100">
                <Link href={"/meet-our-customer"}>
                  <Button
                    variant={"outline"}
                    className="rounded-full cursor-pointer">
                    Meet our customer <ChevronRight />
                  </Button>
                </Link>
              </div>
              <div className="lg:hidden">
                <Customer_Marquee />
              </div>
            </div>
          </div>
        </div>

        {/* third section  */}
        <div>
          <ModernProduct />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
