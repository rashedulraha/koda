"use client";

import Container from "@/components/Responsive/Container";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Wifi } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: "All", path: "/new" },
    { name: "Changelog", path: "/changelog" },
    { name: "Community", path: "/community" },
    { name: "News", path: "/news" },
    { name: "Craft", path: "/craft" },
    { name: "Ai", path: "/ai" },
    { name: "Practices", path: "/practices" },
    { name: "Press", path: "/press" },
  ];

  return (
    <Container>
      <div className="mt-8 md:mt-14 lg:mt-20">
        <h1 className="capitalize font-bold text-lg md:text-2xl">New</h1>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-10 flex items-end justify-between">
        <div className="font-normal text-sm md:text-base flex gap-5 capitalize text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-foreground font-semibold "
                  : "hover:text-foreground"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>

        <div>
          <Field>
            <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
            <ButtonGroup>
              <Input id="input-button-group" placeholder="Type to search..." />
              <Button variant="outline">Search</Button>
              <Button variant="outline">
                <Wifi />
              </Button>
            </ButtonGroup>
          </Field>
        </div>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-10">{children}</div>
    </Container>
  );
};

export default Layout;
