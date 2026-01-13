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
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <ul className="w-100">Hello</ul>
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
