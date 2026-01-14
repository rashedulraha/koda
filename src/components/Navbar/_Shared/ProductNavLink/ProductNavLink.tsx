import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NavLink from "../../_NavLink/NavLink";

const ProductNavLink = () => {
  return (
    <div>
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
                  <div className="flex gap-3 flex-col">
                    {/* plan menu link */}
                    <NavLink
                      data={{
                        to: "/plan",
                        title: "Plan",
                        subTitle:
                          "Set the product direction with project and initiates",
                      }}
                    />
                    {/* build menu link */}
                    <NavLink
                      data={{
                        to: "/build",
                        title: "Build",
                        subTitle:
                          "Make progress and issue tracking and cycle planing",
                      }}
                    />
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
                        <h2 className="text-sm font-medium">Insights</h2>
                        <p className="text-sm text-muted-foreground ">
                          Real time analytics
                        </p>
                      </Link>
                      <Link
                        href={"/build"}
                        className="hover:bg-background/30 p-3 rounded ">
                        <h2 className="text-sm font-medium">Koda ask</h2>
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
                        <h2 className="text-sm font-medium">Integration</h2>
                        <p className="text-sm text-muted-foreground ">
                          Collaborator across tools
                        </p>
                      </Link>
                      <Link
                        href={"/build"}
                        className="hover:bg-background/30 p-3 rounded ">
                        <h2 className="text-sm font-medium">Mobile app</h2>
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

export default ProductNavLink;
