"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Container from "../Responsive/Container";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
            <div className="flex-1">
              <h2 className="font-bold  text-2xl">Koda</h2>
            </div>
            <div className="flex-2  items-center justify-center text-muted-foreground  gap-5 hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-background">
                      <div className="grid grid-cols-2 gap-2 md:w-115 lg:w-125 lg:grid-cols-[.75fr_1fr] bg-card rounded p-2">
                        <div className="bg-red-500">Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                      </div>
                      <div className="w-full py-3 flex items-center justify-between">
                        <div className="flex items-center">
                          <h2 className="font-bold text-sm">
                            New : Team owner
                          </h2>
                          <span className="text-muted-foreground ml-2 ">
                            permission for team level setting
                          </span>
                        </div>

                        <span className="text-sm text-sidebar-primary  font-medium">
                          Changelog
                        </span>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {desktopMobileMenuLink}
            </div>
            <div className="flex-1 flex items-center space-x-3 justify-end">
              <ModeToggle />
              <Button variant={"outline"}>Login</Button>
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
