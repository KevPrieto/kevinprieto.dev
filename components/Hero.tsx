"use client";

import { useState, useEffect, useCallback } from "react";
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

// Greetings sequence: starts and ends with "Hello, I'm Kevin"
const greetings = [
  "Hello, I'm Kevin",
  "Hola, soy Kevin",
  "Ciao, sono Kevin",
  "Olá, sou Kevin",
  "Bonjour, je suis Kevin",
  "안녕하세요, 저는 Kevin입니다",
  "Hello, I'm Kevin",
];

export function Hero() {
  // Multilingual greeting state
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingPhase, setGreetingPhase] = useState<"enter" | "visible" | "exit">("enter");
  const [greetingComplete, setGreetingComplete] = useState(false);

  // Calendly modal state
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Multilingual greeting animation effect
  useEffect(() => {
    if (greetingComplete) return;

    const isLastGreeting = greetingIndex === greetings.length - 1;

    if (greetingPhase === "enter") {
      const timer = setTimeout(() => {
        setGreetingPhase("visible");
      }, 300);
      return () => clearTimeout(timer);
    }

    if (greetingPhase === "visible") {
      const timer = setTimeout(() => {
        if (isLastGreeting) {
          setGreetingComplete(true);
        } else {
          setGreetingPhase("exit");
        }
      }, 800);
      return () => clearTimeout(timer);
    }

    if (greetingPhase === "exit") {
      const timer = setTimeout(() => {
        setGreetingIndex((prev) => prev + 1);
        setGreetingPhase("enter");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [greetingPhase, greetingIndex, greetingComplete]);

  // Load Calendly script when modal opens
  useEffect(() => {
    if (isCalendlyOpen) {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isCalendlyOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCalendlyOpen(false);
    };
    if (isCalendlyOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "";
      };
    }
  }, [isCalendlyOpen]);

  const openCalendly = useCallback(() => {
    setIsCalendlyOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  // Greeting animation styles
  const getGreetingStyle = (): React.CSSProperties => {
    if (greetingComplete) {
      return {
        opacity: 0.5,
        transform: "translateY(0)",
        transition: "all 600ms ease-out",
      };
    }

    switch (greetingPhase) {
      case "enter":
        return {
          opacity: 0,
          transform: "translateY(12px)",
          transition: "all 300ms ease-out",
        };
      case "visible":
        return {
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 300ms ease-out",
        };
      case "exit":
        return {
          opacity: 0,
          transform: "translateY(-12px)",
          transition: "all 300ms ease-in",
        };
    }
  };

  return (
    <>
      {/* CSS for ellipsis animation */}
      <style jsx>{`
        @keyframes ellipsis-animation {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        .ellipsis-dot {
          animation: ellipsis-animation 1.5s ease-in-out infinite;
        }
        .ellipsis-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .ellipsis-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      <section className="min-h-[90vh] flex flex-col py-[var(--space-xl)] pt-[calc(var(--space-xl)+4rem)]">
        <Container>
          {/* Part 1: Status Indicator - Centered at top */}
          <div className="flex justify-center mb-[var(--space-lg)]">
            <div className="flex items-center gap-2 opacity-80">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[var(--font-size-xs)] text-[var(--color-muted-light)]">
                Available for work
                <span className="ellipsis-dot">.</span>
                <span className="ellipsis-dot">.</span>
                <span className="ellipsis-dot">.</span>
              </span>
            </div>
          </div>

          {/* Part 2: Apple-style Multilingual Greeting - Large, Centered */}
          <div className="text-center mb-[var(--space-xl)] min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
            <p
              className="text-[var(--font-size-4xl)] lg:text-[var(--font-size-5xl)] text-[var(--color-muted-light)] font-medium"
              style={getGreetingStyle()}
            >
              {greetings[greetingIndex]}
            </p>
          </div>

          {/* Main Hero Content */}
          <div className="flex-1 flex items-center">
            <div className="flex flex-col lg:flex-row items-center gap-[var(--space-xl)] lg:gap-[var(--space-2xl)] w-full">
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

                    {/* Action CTAs */}
                    <div className="mt-[var(--space-md)] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {/* Primary CTA - Opens Calendly Modal */}
                      <button
                        onClick={openCalendly}
                        className="flex-1 px-5 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] text-[var(--font-size-sm)] font-medium hover:opacity-90 transition-opacity duration-200"
                      >
                        Let&apos;s build together
                      </button>

                      {/* Secondary CTA - Download CV */}
                      <a
                        href="/cv.pdf"
                        download
                        className="flex-1 px-5 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-muted-light)] text-[var(--font-size-sm)] font-medium text-center hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)] transition-all duration-200"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Part 3: Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCalendly}
          />
          {/* Panel - Wide */}
          <div
            className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
            style={{
              width: "min(900px, 92vw)",
              maxWidth: "900px",
              boxShadow: "var(--shadow-elevated)",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeCalendly}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-accent)]/20 transition-all duration-200 text-xl font-light"
              aria-label="Close modal"
            >
              ×
            </button>
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/kgps1003/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
