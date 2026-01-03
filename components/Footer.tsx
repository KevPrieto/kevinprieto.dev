import { Container } from "./Container";
import {
  ProjectsIcon,
  ToolsIcon,
  AboutIcon,
  ContactIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "./Icons";

const navLinks = [
  { href: "#projects", label: "Projects", icon: ProjectsIcon },
  { href: "#tools", label: "Tools", icon: ToolsIcon },
  { href: "#about", label: "About", icon: AboutIcon },
  { href: "#contact", label: "Contact", icon: ContactIcon },
];

const socialLinks = [
  { href: "https://github.com/KevPrieto", label: "GitHub", icon: GitHubIcon },
  { href: "https://www.linkedin.com/in/kevin-prieto-developer/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://x.com/bykevin12", label: "Twitter", icon: XIcon },
];

export function Footer() {
  return (
    <footer className="mt-auto py-[var(--space-xl)] border-t border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--space-lg)]">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-bold text-[var(--font-size-lg)] mb-[var(--space-xs)]">
              Kevin Prieto
            </p>
            <p className="text-[var(--font-size-sm)] text-[var(--color-muted-light)] max-w-[20rem]">
              Building digital products with clarity and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[var(--font-size-sm)] font-bold text-[var(--color-muted)] mb-[var(--space-sm)]">
              Navigation
            </p>
            <div className="flex items-center gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] transition-all duration-200"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[var(--font-size-sm)] font-bold text-[var(--color-muted)] mb-[var(--space-sm)]">
              Connect
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] transition-all duration-200"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[var(--space-xl)] pt-[var(--space-lg)] border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-[var(--space-sm)]">
          <p className="text-[var(--font-size-xs)] text-[var(--color-muted)]">
            Designed and built with care.
          </p>
          <p className="text-[var(--font-size-xs)] text-[var(--color-muted)]">
            Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}
