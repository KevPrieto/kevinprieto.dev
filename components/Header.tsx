"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "./Container";
import { useTheme } from "./ThemeProvider";
import {
  HomeIcon,
  ProjectsIcon,
  ToolsIcon,
  AboutIcon,
  ContactIcon,
  LogoIcon,
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

  const getBackgroundClass = () => {
    if (!isScrolled) {
      return "bg-[var(--color-bg)]/70";
    }
    return scrollDirection === "down"
      ? "bg-[var(--color-bg)]/80"
      : "bg-[var(--color-bg)]/95";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-xl border-b border-[var(--color-border)]/50 animate-navbar-enter transition-all duration-300 ${getBackgroundClass()}`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="text-[var(--color-accent)] hover:opacity-80 transition-opacity"
          >
            <LogoIcon size={24} />
          </a>
          <div className="flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] transition-all duration-200"
                      aria-label={item.label}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="w-px h-6 bg-[var(--color-border)] mx-2" />
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] transition-all duration-200"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
