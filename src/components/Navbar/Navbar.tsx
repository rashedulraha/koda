"use client";

import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";
import { SiCodeproject } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import RecourseNavLink from "./_Shared/RecourseNavLink/RecourseNavLink";
import ProductNavLink from "./_Shared/ProductNavLink/ProductNavLink";
import { MenuLink } from "./_NavLink/NavLink";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

const desktopMobileMenuLink = (
  <div className="text-sm font-medium flex flex-col md:flex-row items-center capitalize gap-1 transition-all duration-700">
    <MenuLink data={{ to: "/pricing", label: "Pricing" }} />
    <MenuLink data={{ to: "/customer", label: "Customers" }} />
    <MenuLink data={{ to: "/new", label: "New" }} />
    <MenuLink data={{ to: "/contact", label: "Contact" }} />
    <MenuLink data={{ to: "/dashboard", label: "Dashboard" }} />
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu open/close
  const handleOpenMenu = () => {
    setOpen(!open);
  };

  // Handle open github repository link
  const handleOpenGithub = () => {
    window.open("https://github.com/rashedulraha/koda");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
        className={cn(
          "fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500",
          scrolled && "top-2",
        )}>
        {/* Floating Pill Container */}
        <div
          className={cn(
            "flex h-12 sm:h-16 items-center justify-between gap-4 md:gap-8",
            "px-4",
            "border border-foreground/10 rounded-full",
            "backdrop-blur-xl bg-background/80",
            "shadow-lg shadow-black/5",
            "transition-all duration-300",
            scrolled && "shadow-xl shadow-black/10",
            "w-auto max-w-7xl",
          )}>
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0 active:scale-95 transition-transform">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="p-2 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
              <SiCodeproject className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            </motion.div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tighter text-foreground">
              Koda
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center text-muted-foreground gap-1">
            <ProductNavLink />
            <RecourseNavLink />
            {desktopMobileMenuLink}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub Button */}
            <Button
              onClick={handleOpenGithub}
              variant="ghost"
              className="hidden sm:flex rounded-full px-3 lg:px-4 h-9 lg:h-10 gap-2 text-sm font-medium hover:bg-foreground/5 hover:text-foreground transition-all duration-300 border">
              <GrGithub className="h-4 w-4" />
              <span>1.4k</span>
            </Button>

            {/* Desktop Signup Button */}
            <Button asChild size="sm" className="rounded-full">
              <Link href="/signup">
                Signup
                <Send className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            {/* Theme Toggle */}
            <div className="hidden sm:block">
              <ModeToggle />
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleOpenMenu}
                className="h-9 w-9 text-foreground hover:bg-foreground/5 transition-all rounded-full">
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 left-4 right-4 z-40 md:hidden">
            <div className="bg-background/98 backdrop-blur-2xl rounded-2xl border border-foreground/10 shadow-xl p-4">
              <div className="flex flex-col gap-2">
                <ProductNavLink />
                <RecourseNavLink />
                {desktopMobileMenuLink}
                <div className="border-t border-foreground/10 my-2 pt-2">
                  <Button
                    onClick={handleOpenGithub}
                    variant="ghost"
                    className="w-full justify-start gap-2 rounded-lg">
                    <GrGithub className="h-4 w-4" />
                    <span>GitHub • 1.4k</span>
                  </Button>
                  <Button
                    asChild
                    className="w-full mt-2 rounded-lg bg-foreground text-background hover:bg-foreground/90">
                    <Link href="/signup">Signup</Link>
                  </Button>
                  <div className="mt-3 pt-2 border-t border-foreground/10">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Theme
                      </span>
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="h-17 sm:h-21" />
    </>
  );
};

export default Navbar;
