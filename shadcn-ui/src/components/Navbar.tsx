import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-zinc-100">
              Gabriel Ortega Hernández
            </span>
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "transition-colors hover:text-zinc-50",
                  location.pathname === item.path
                    ? "text-zinc-50"
                    : "text-zinc-400"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex flex-1 items-center justify-between md:hidden">
          <Link to="/" className="font-bold text-zinc-100">
            Gabriel Ortega
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-zinc-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};