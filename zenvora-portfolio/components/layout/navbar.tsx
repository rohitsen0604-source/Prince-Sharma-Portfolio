"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" }, // 👈 Add this
  { label: "Growth", href: "/growth" },
  { label: "Contact", href: "/contact" },
];
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Prince Sharma
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden sm:block"
          >
            <Button>
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-6 py-4">

            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 transition-colors ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4"
            >
              <Button className="w-full">
                Get Started
              </Button>
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}