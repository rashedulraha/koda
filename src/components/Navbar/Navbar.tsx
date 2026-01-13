import React from "react";
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
          <div className="flex-2"></div>
          <div className="flex-1 flex items-center space-x-3">
            <ModeToggle />
            <Button>Login</Button>
            <Button>Signup</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
