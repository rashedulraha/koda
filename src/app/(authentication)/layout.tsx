"use client";

import { ArrowLeft, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import React from "react";
import { SiCodeproject } from "react-icons/si";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="auth-wrapper flex flex-col min-h-screen">
      {/* Floating Pill Header */}
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
            "flex h-12 sm:h-14 items-center justify-between gap-4",
            "px-4 sm:px-6",
            "border border-foreground/10 rounded-full",
            "backdrop-blur-xl bg-background/80",
            "shadow-lg shadow-black/5",
            "transition-all duration-300",
            scrolled && "shadow-xl shadow-black/10",
            "w-auto min-w-50",
          )}>
          {/* Back Button */}
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 group shrink-0 active:scale-95 transition-all duration-300">
            <motion.div
              whileHover={{ x: -3 }}
              transition={{ duration: 0.2 }}
              className="p-1.5 sm:p-2 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            </motion.div>
            <span className="text-sm sm:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
              Home
            </span>
          </Link>

          {/* Center Logo/Brand */}
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="p-1.5 sm:p-2 rounded-full bg-foreground/5">
              <SiCodeproject className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            </motion.div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">
              Authentication Portal
            </h2>
          </div>

          {/* Placeholder for balance - invisible spacer */}
          <div className="w-8 sm:w-12 opacity-0 pointer-events-none">
            {/* This maintains the centered look */}
          </div>
        </div>
      </motion.header>

      {/* Spacer to prevent content overlap */}
      <div className="h-17 sm:h-19" />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="px-4 w-full max-w-md">
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-sm text-muted-foreground p-4 border-t border-foreground/5 mt-8">
        <p>
          © 2026 Koda App ||{" "}
          <span className="text-foreground/80 font-medium">Rashedul Raha</span>
        </p>
      </motion.footer>
    </div>
  );
}
