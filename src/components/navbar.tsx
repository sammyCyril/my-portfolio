"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll background + shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // slightly later trigger for cleaner look
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // offset for better active feel

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        if (
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={cn(
        "relative py-1.5 px-1 transition-all duration-200 text-sm font-medium",
        active === id
          ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full"
          : "text-muted-foreground hover:text-primary"
      )}
    >
      {label}
    </a>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center">
          <h1 className="font-bold text-xl tracking-tight">Samuel</h1>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLink("home", "Home")}
          {navLink("about", "About")}
          {navLink("projects", "Work")}      
          {navLink("contact", "Contact")}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
             <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors md:hidden">
  <Menu className="h-5 w-5" />
  <span className="sr-only">Toggle menu</span>
</SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-16">
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {navLink("home", "Home")}
                  {navLink("about", "About")}
                  {navLink("projects", "Work")}
                  {navLink("contact", "Contact")}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}