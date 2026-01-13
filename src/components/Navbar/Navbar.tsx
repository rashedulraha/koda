import React from "react";
import Container from "../Responsive/Container";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2>Koda</h2>
          </div>
          <div className="flex-2"></div>
          <div className="flex-1">
            <Button>Login</Button>
            <Button>Signup</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
