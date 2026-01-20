// app/(authentication)/layout.tsx
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-wrapper">
      <header className="p-4 text-center border-b backdrop-blur-3xl">
        Authentication Portal
      </header>
      
      <main>{children}</main>
      
      <footer className="mt-10 text-center text-sm text-gray-500">
        © 2026 Koda App
      </footer>
    </div>
  );
}