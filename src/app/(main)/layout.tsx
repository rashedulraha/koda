// app/(main)/layout.tsx
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header><Navbar /></header>
      <main className="flex-1">{children}</main>
      <footer><Footer /></footer>
    </div>
  );
}