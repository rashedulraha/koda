import Container from "@/components/Responsive/Container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-wrapper flex flex-col min-h-screen">
      <header className="relative p-4  border-b backdrop-blur-3xl">
        <Container>
          <div className="flex items-center">
            <div className="absolute">
              <Link href={"/"} className="flex items-end gap-1">
                <ArrowLeft /> <h2>Home</h2>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <h2>Authentication Portal</h2>
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>

      <footer className="text-center text-sm text-gray-500 p-4">
        © 2026 Koda App
      </footer>
    </div>
  );
}
