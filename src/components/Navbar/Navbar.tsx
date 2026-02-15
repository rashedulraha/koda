"use client";

import Container from "../Responsive/Container";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import RecourseNavLink from "./_Shared/RecourseNavLink/RecourseNavLink";
import ProductNavLink from "./_Shared/ProductNavLink/ProductNavLink";
import { MenuLink } from "./_NavLink/NavLink";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

const desktopMobileMenuLink = (
  <>
    <div className="text-sm font-medium flex flex-col md:flex-row  items-center  capitalize gap-1 transition-all duration-700">
      <MenuLink data={{ to: "/pricing", label: "Pricing" }} />
      <MenuLink data={{ to: "/customer", label: "Customers" }} />
      <MenuLink data={{ to: "/new", label: "New" }} />
      <MenuLink data={{ to: "/contact", label: "Contact" }} />
    </div>
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  //? handle navbar mobile menu open and close
  const handleOpenMenu = () => {
    setOpen(!open);
  };

  //?  handle open github repository link
  const handleOpenGithub = () => {
    window.open("https://github.com/rashedulraha/koda");
  };

  return (
    <div>
      <div className="py-3 border-b  sticky top-0 z-999">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold  text-2xl">
                <Link href="/">Koda</Link>
              </h2>
            </div>
            <div className="flex-2  items-center justify-center text-muted-foreground gap-1 hidden md:flex">
              {/* menu bar products section */}
              <ProductNavLink />

              {/* menu bar recurse section */}
              <RecourseNavLink />

              {desktopMobileMenuLink}
            </div>
            <div className="flex items-center space-x-3 md:space-x-7 justify-end">
              <ModeToggle />
              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleOpenGithub}
                  variant={"ghost"}
                  className="rounded-full">
                  <GrGithub />
                </Button>
                <Link href={"/signup"}>
                  <Button className="cursor-pointer">Signup</Button>
                </Link>
              </div>
              <div onClick={handleOpenMenu} className="md:hidden">
                {open ? <X /> : <Menu />}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* mobile menu section */}
      <div
        className="md:hidden w-full  bg-card absolute z-10 top-15"
        data-aos="fade-down">
        <Container>
          {open && <div className="py-5">{desktopMobileMenuLink}</div>}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
