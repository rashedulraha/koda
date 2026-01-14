"use client";

import Container from "../Responsive/Container";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import RecourseNavLink from "./_Shared/RecourseNavLink/RecourseNavLink";
import ProductNavLink from "./_Shared/ProductNavLink/ProductNavLink";

const desktopMobileMenuLink = (
  <>
    <div className="text-sm font-medium flex flex-col md:flex-row  items-start gap-5 capitalize">
      <Link href={"/pricing"}>pricing</Link>
      <Link href={"/customers"}>Customer</Link>
      <Link href={"/new"}>New</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="py-3 border-b">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold  text-2xl">Koda</h2>
            </div>
            <div className="flex-2  items-center justify-center text-muted-foreground  gap-5 hidden md:flex">
              {/* menu bar products section */}
              <ProductNavLink />

              {/* menu bar recurse section */}
              <RecourseNavLink />

              {desktopMobileMenuLink}
            </div>
            <div className="flex items-center space-x-3 justify-end">
              <ModeToggle />
              <Button>Signup</Button>
              <div onClick={handleOpenMenu} className="md:hidden">
                {open ? <X /> : <Menu />}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* mobile menu section */}
      <div className="md:hidden w-full  bg-card absolute z-10 top-15">
        <Container>
          {open && <div className="py-5">{desktopMobileMenuLink}</div>}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
