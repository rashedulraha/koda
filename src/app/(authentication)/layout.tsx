// app/(authentication)/layout.tsx
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-wrapper flex flex-col min-h-screen">
      <header className="p-4 text-center border-b backdrop-blur-3xl">
        Authentication Portal
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
