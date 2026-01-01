import { Container } from "./Container";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
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
              Placeholder tagline text.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[var(--font-size-sm)] font-bold text-[var(--color-muted)] mb-[var(--space-sm)]">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--font-size-sm)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[var(--font-size-sm)] font-bold text-[var(--color-muted)] mb-[var(--space-sm)]">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--font-size-sm)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
