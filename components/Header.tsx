"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import {
  HomeIcon,
  ProjectsIcon,
  ToolsIcon,
  AboutIcon,
  ContactIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

const navItems = [
  { href: "#", label: "Home", icon: HomeIcon },
  { href: "#projects", label: "Projects", icon: ProjectsIcon },
  { href: "#tools", label: "Tools", icon: ToolsIcon },
  { href: "#about", label: "About", icon: AboutIcon },
  { href: "#contact", label: "Contact", icon: ContactIcon },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 5) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current - 5) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundOpacity = () => {
    if (!isScrolled) return "0.7";
    return scrollDirection === "down" ? "0.8" : "0.95";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 pointer-events-none animate-navbar-enter">
      <nav className="flex justify-center pointer-events-auto">
        {/* Floating capsule navbar - iOS glass style */}
        <div
          className="glass flex items-center gap-1 px-4 py-2.5 rounded-full transition-all duration-300"
          style={{
            boxShadow: isScrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface-2)] transition-all duration-200"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className="w-px h-5 mx-2 opacity-30"
            style={{ backgroundColor: 'var(--color-fg)' }}
          />
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface-2)] transition-all duration-200"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
