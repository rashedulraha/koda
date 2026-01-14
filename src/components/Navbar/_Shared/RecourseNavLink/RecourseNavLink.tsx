import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLink } from "../../_NavLink/NavLink";

const RecourseNavLink = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Recurse</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-background">
              <div className="flex items-start  md:w-120 lg:w-150 lg:grid-cols-[.75fr_1fr] bg-card rounded border border-muted">
                {/* Recurse first container */}
                <div className="flex-1 p-4 w-full">
                  <h2 className="text-sm font-medium text-muted-foreground p-3">
                    Company
                  </h2>
                  <div className=" flex items-start flex-col w-full">
                    <NavLink
                      data={{
                        to: "/about",
                        title: "About",
                        subTitle: "Meet the team",
                      }}
                    />
                    <NavLink
                      data={{
                        to: "/careers",
                        title: "Careers",
                        subTitle: "We are hiring",
                      }}
                    />
                  </div>
                </div>
                {/* Recurse second container */}
                <div className="flex-2  p-4 border-l border-muted">
                  <h2 className="text-sm p-3 text-muted-foreground font-medium">
                    Explore
                  </h2>
                  <div className="flex justify-start w-full">
                    {/* more first  container */}
                    <div className="flex flex-col flex-1">
                      <NavLink
                        data={{
                          to: "/developer",
                          title: "Developer",
                          subTitle: "Build in the Koda api",
                        }}
                      />
                      <NavLink
                        data={{
                          to: "/security",
                          title: "Security",
                          subTitle: "safe and secure and privet",
                        }}
                      />
                      <NavLink
                        data={{
                          to: "/docs",
                          title: "Docs",
                          subTitle: "How to use koda",
                        }}
                      />
                    </div>
                    {/* more second  container */}
                    <div className=" flex flex-col flex-1">
                      <NavLink
                        data={{
                          to: "/switch-to-koda",
                          title: "Switch to koda",
                          subTitle: "Migration guide",
                        }}
                      />
                      <NavLink
                        data={{
                          to: "/Download",
                          title: "Download koda app",
                          subTitle: "Get the app",
                        }}
                      />
                      <NavLink
                        data={{
                          to: "/quality",
                          title: "Quality",
                          subTitle: "Conversation and quality",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default RecourseNavLink;
