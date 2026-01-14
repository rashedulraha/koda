import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const RecourseNavLink = () => {
  return (
    <div>
      {" "}
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
                        <h2 className="text-sm font-medium">Developer</h2>
                        <p className="text-sm text-muted-foreground ">
                          Build in the koda api
                        </p>
                      </Link>
                      <Link
                        href={"/build"}
                        className="hover:bg-background/30 p-3 rounded ">
                        <h2 className="text-sm font-medium">Security</h2>
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
                        <h2 className="text-sm font-medium">Switch to koda</h2>
                        <p className="text-sm text-muted-foreground ">
                          Migration guide
                        </p>
                      </Link>
                      <Link
                        href={"/build"}
                        className="hover:bg-background/30 p-3 rounded ">
                        <h2 className="text-sm font-medium">Download app</h2>
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
                  <h2 className="font-bold text-sm">New : Team owner</h2>
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
    </div>
  );
};

export default RecourseNavLink;
