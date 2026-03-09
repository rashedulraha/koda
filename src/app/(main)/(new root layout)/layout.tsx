"use client";

import Container from "@/components/Responsive/Container";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Wifi } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Data ---
// Placing data outside the component prevents it from being re-defined on every render.
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

// --- Sub-Components ---

const NavMenu = ({ currentPath }: { currentPath: string }) => {
  return (
    <nav className="w-full md:w-auto overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 md:gap-5 text-sm md:text-base font-normal capitalize text-muted-foreground whitespace-nowrap py-1 min-w-max">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`transition-colors ${
              currentPath === link.path
                ? "text-foreground font-semibold"
                : "hover:text-foreground"
            }`}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

/**
 * SearchBar Component: Encapsulates the search input and buttons.
 */
const SearchBar = () => {
  return (
    <div className="w-full md:w-auto shrink-0">
      <Field>
        <FieldLabel htmlFor="search-input" className="text-sm">
          Search
        </FieldLabel>
        <ButtonGroup>
          <Input
            id="search-input"
            placeholder="Type to search..."
            className="w-full md:w-64" // Set a specific width on larger screens
          />
          <Button variant="outline">Search</Button>
          <Button
            variant="default"
            size="icon"
            className="cursor-pointer border hidden sm:flex"
            aria-label="Connect" // Added for accessibility
          >
            <Wifi className="h-4 w-4" />
          </Button>
        </ButtonGroup>
      </Field>
    </div>
  );
};

// --- Main Layout Component ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Container>
      {/* Page Header */}
      <header className="mt-8 md:mt-14 lg:mt-20">
        <h1 className="capitalize font-bold text-lg md:text-2xl">New</h1>
      </header>

      {/* Navigation and Search Section */}
      <section className="mt-5 md:mt-8 lg:mt-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <NavMenu currentPath={pathname} />
          <SearchBar />
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mt-5 md:mt-8 lg:mt-10">{children}</main>
    </Container>
  );
};

export default Layout;
