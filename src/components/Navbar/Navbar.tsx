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
              {/* menu bar products section */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-background">
                      <div className="flex items-start  md:w-150 lg:w-180 lg:grid-cols-[.75fr_1fr] bg-card rounded">
                        {/* products first container */}
                        <div className="flex-1 p-4">
                          <h2 className="text-sm font-medium text-muted-foreground p-3">
                            Core features
                          </h2>
                          <div className=" flex items-center flex-col">
                            <Link
                              href={"/plan"}
                              className="hover:bg-background/30 p-3 rounded ">
                              <h2 className="text-sm font-medium ">Plan</h2>
                              <p className="text-sm text-muted-foreground ">
                                Set the product direction with project and
                                initiates
                              </p>
                            </Link>
                            <Link
                              href={"/build"}
                              className="hover:bg-background/30 p-3 rounded ">
                              <h2 className="text-sm font-medium">Build</h2>
                              <p className="text-sm text-muted-foreground ">
                                Make progress and issue tracking and cycle
                                planing
                              </p>
                            </Link>
                          </div>
                        </div>
                        {/* products second container */}
                        <div className="flex-2  p-4 border-l border-muted">
                          <h2 className="text-sm p-3 text-muted-foreground font-medium">
                            More
                          </h2>
                          <div className="flex justify-start gap-5 w-full">
                            {/* more first  container */}
                            <div className="flex flex-col flex-1">
                              <Link
                                href={"/plan"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Customer requests
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Manage user feedback
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Insights
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Real time analytics
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Koda ask
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  work place request
                                </p>
                              </Link>
                            </div>
                            {/* more second  container */}
                            <div className=" flex flex-col flex-1">
                              <Link
                                href={"/plan"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Integration
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Collaborator across tools
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Mobile app
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Koda in your pocket
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Artificial Intelligence
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Ai powered workflows
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full py-3 px-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <h2 className="font-bold text-sm">
                            New : Team owner
                          </h2>
                          <span className="text-muted-foreground text-sm font-medium  ml-2">
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

              {/* menu bar recurse section */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Recurse</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-background">
                      <div className="flex items-start  md:w-120 lg:w-150 lg:grid-cols-[.75fr_1fr] bg-card rounded">
                        {/* Recurse first container */}
                        <div className="flex-1 p-4">
                          <h2 className="text-sm font-medium text-muted-foreground p-3">
                            Company
                          </h2>
                          <div className=" flex items-start flex-col w-full">
                            <Link
                              href={"/plan"}
                              className="hover:bg-background/30 p-3 rounded w-full ">
                              <h2 className="text-sm font-medium ">About</h2>
                              <p className="text-sm text-muted-foreground ">
                                Meet the team
                              </p>
                            </Link>
                            <Link
                              href={"/build"}
                              className="hover:bg-background/30 p-3 rounded  w-full">
                              <h2 className="text-sm font-medium">Careers</h2>
                              <p className="text-sm text-muted-foreground ">
                                We are hiring
                              </p>
                            </Link>
                          </div>
                        </div>
                        {/* Recurse second container */}
                        <div className="flex-2  p-4 border-l border-muted">
                          <h2 className="text-sm p-3 text-muted-foreground font-medium">
                            Explore
                          </h2>
                          <div className="flex justify-start gap-5 w-full">
                            {/* more first  container */}
                            <div className="flex flex-col flex-1">
                              <Link
                                href={"/plan"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Developer
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Build in the koda api
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Security
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  safe , secure and privet
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">Docs</h2>
                                <p className="text-sm text-muted-foreground ">
                                  How to use koda
                                </p>
                              </Link>
                            </div>
                            {/* more second  container */}
                            <div className=" flex flex-col flex-1">
                              <Link
                                href={"/plan"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Switch to koda
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Migration guide
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">
                                  Download app
                                </h2>
                                <p className="text-sm text-muted-foreground ">
                                  Get the app
                                </p>
                              </Link>
                              <Link
                                href={"/build"}
                                className="hover:bg-background/30 p-3 rounded ">
                                <h2 className="text-sm font-medium">Quality</h2>
                                <p className="text-sm text-muted-foreground ">
                                  Conversation and quality
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full py-3 px-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <h2 className="font-bold text-sm">
                            New : Team owner
                          </h2>
                          <span className="text-muted-foreground text-sm font-medium  ml-2">
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
