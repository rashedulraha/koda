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

const Navbar = () => {
  return (
    <div className="py-3 border-b">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2>Koda</h2>
          </div>
          <div className="flex-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 md:w-125 lg:w-150 lg:grid-cols-[.75fr_1fr]">
                      <div className="bg-red-500">Hello</div>
                      <div>Hello</div>
                      <div>Hello</div>
                      <div>Hello</div>
                    </div>
                    <div className="w-full py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <h2 className="font-bold text-foreground">
                          New : Team owner
                        </h2>
                        <span className="text-muted-foreground ml-2">
                          permission for team level setting
                        </span>
                      </div>

                      <span>Changelog</span>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex-1 flex items-center space-x-3 justify-end">
            <ModeToggle />
            <Button variant={"outline"}>Login</Button>
            <Button>Signup</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
