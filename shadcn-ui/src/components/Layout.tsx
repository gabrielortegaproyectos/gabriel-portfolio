import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
        <Outlet />
      </main>
      <footer className="max-w-7xl mx-auto py-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Gabriel Ortega Hernández. Built with React, Tailwind & Shadcn/ui.</p>
      </footer>
    </div>
  );
};