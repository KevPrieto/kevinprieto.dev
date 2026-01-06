"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { StatCard } from "./StatCard";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

const socialLinks = [
  { href: "https://github.com/KevPrieto", label: "GitHub", icon: GitHubIcon },
  { href: "https://www.linkedin.com/in/kevin-prieto-developer/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://x.com/bykevin12", label: "Twitter", icon: XIcon },
];

// Greetings sequence: loops infinitely through all languages
const greetings = [
  "Bienvenido, soy Kevin",
  "Welcome, I'm Kevin",
  "Hola, soy Kevin",
  "Ciao, sono Kevin",
  "Olá, sou Kevin",
  "Bonjour, je suis Kevin",
  "안녕하세요, 저는 Kevin입니다",
  "ようこそ、ケビンです",
];

export function Hero() {
  // Multilingual greeting state
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingPhase, setGreetingPhase] = useState<"enter" | "visible" | "exit">("enter");

  // Calendly modal state
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Multilingual greeting animation effect - loops infinitely
  useEffect(() => {
    if (greetingPhase === "enter") {
      const timer = setTimeout(() => {
        setGreetingPhase("visible");
      }, 500);
      return () => clearTimeout(timer);
    }

    if (greetingPhase === "visible") {
      const timer = setTimeout(() => {
        setGreetingPhase("exit");
      }, 1800);
      return () => clearTimeout(timer);
    }

    if (greetingPhase === "exit") {
      const timer = setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setGreetingPhase("enter");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [greetingPhase]);

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
    switch (greetingPhase) {
      case "enter":
        return {
          opacity: 0,
          transform: "translateY(8px)",
          transition: "all 500ms ease-out",
        };
      case "visible":
        return {
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 500ms ease-out",
        };
      case "exit":
        return {
          opacity: 0,
          transform: "translateY(-8px)",
          transition: "all 500ms ease-in",
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
          {/* Part 1: Status Indicator - Centered at top with Glassmorphism */}
          <div className="flex justify-center mb-[var(--space-lg)]">
            <div className="glass flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              <span className="text-[var(--font-size-xs)] font-medium text-[var(--color-fg)]">
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
                  <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight mb-[var(--space-md)]">
                    Building systems.
                    <br />
                    Driving{" "}
                    <span className="relative inline-block">
                      <span className="text-[var(--color-accent)] text-glow">direction</span>
                      <svg
                        className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 20L32 20M32 20L24 12M32 20L24 28"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[var(--color-accent)]"
                          style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))' }}
                        />
                      </svg>
                    </span>
                    .
                  </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={100}>
                  <p className="text-[var(--font-size-lg)] text-[var(--color-muted-light)] leading-relaxed max-w-[28rem] mb-[var(--space-lg)]">
                    Software engineer focused on backend systems, web applications, and automation. I ship working products.
                  </p>
                </AnimateOnScroll>

                {/* Stats Row */}
                <AnimateOnScroll delay={200}>
                  <div className="flex flex-wrap gap-[var(--space-sm)]">
                    <StatCard value="+4" label="Projects" variant="primary" />
                    <StatCard value="2+" label="Years" variant="secondary" />
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
                        src="/images/profile2.jpg"
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
                    <div className="mt-[var(--space-md)] flex flex-col gap-3 items-center">
                      {/* Primary CTA - Opens Calendly Modal with Glassmorphism */}
                      <button
                        onClick={openCalendly}
                        className="glass-button px-8 py-3.5 rounded-full text-white text-[var(--font-size-sm)] font-medium transition-all duration-300"
                      >
                        Let&apos;s build together
                      </button>
                      {/* CV Button */}
                      <a href="/cv/CV-Kevin-Jan2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-fg)] text-[var(--font-size-sm)] font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200" >
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
