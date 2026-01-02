"use client";

import Image from "next/image";
import { Container } from "./Container";
import { StatCard } from "./StatCard";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

const socialLinks = [
  { href: "#", label: "GitHub", icon: GitHubIcon },
  { href: "#", label: "LinkedIn", icon: LinkedInIcon },
  { href: "#", label: "Twitter", icon: XIcon },
];

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center py-[var(--space-xl)] pt-[calc(var(--space-xl)+4rem)]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-[var(--space-xl)] lg:gap-[var(--space-2xl)]">
          {/* Text Column */}
          <div className="flex-1 lg:max-w-[55%] order-2 lg:order-1">
            <AnimateOnScroll>
              <h1 className="text-[var(--font-size-6xl)] font-bold leading-[1] tracking-tight mb-[var(--space-md)]">
                Building digital
                <br />
                products with
                <br />
                <span className="text-[var(--color-accent)]">clarity.</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-[var(--font-size-lg)] text-[var(--color-muted-light)] leading-relaxed max-w-[28rem] mb-[var(--space-lg)]">
                Developer focused on creating thoughtful, well-crafted software.
                Placeholder text describing technical approach.
              </p>
            </AnimateOnScroll>

            {/* Stats Row */}
            <AnimateOnScroll delay={200}>
              <div className="flex flex-wrap gap-[var(--space-sm)]">
                <StatCard value="+12" label="Projects" variant="primary" />
                <StatCard value="5+" label="Years" variant="secondary" />
                <StatCard value="∞" label="Curiosity" variant="primary" />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image Column - Card Container */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2">
            <AnimateOnScroll delay={150}>
              <div
                className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-lg)] hover-scale"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-[var(--color-accent-secondary)]" />

                <div
                  className="relative aspect-[4/5] w-full max-w-[280px] mx-auto overflow-hidden rounded-xl border border-[var(--color-border)]"
                  style={{ boxShadow: "var(--shadow-elevated)" }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Kevin Prieto"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Social Icons */}
                <div className="mt-[var(--space-md)] flex items-center justify-center gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-accent)]/20 transition-all duration-200"
                        aria-label={link.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
