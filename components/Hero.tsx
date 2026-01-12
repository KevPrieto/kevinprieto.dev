"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { StatCard } from "./StatCard";
import { Reveal, StaggerContainer, StaggerItem } from "./motion";
import { useMotion } from "./motion";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

const socialLinks = [
  { href: "https://github.com/KevPrieto", label: "GitHub", icon: GitHubIcon },
  { href: "https://www.linkedin.com/in/kevin-prieto-developer/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://x.com/bykevin12", label: "Twitter", icon: XIcon },
];

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
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { shouldReduceMotion } = useMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
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

      <section className="min-h-screen flex flex-col py-[var(--space-xl)] pt-[calc(var(--space-xl)+4rem)]">
        <Container>
          {/* Status Indicator */}
          <Reveal direction="down" delay={0}>
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
          </Reveal>

          {/* Multilingual Greeting */}
          <div className="text-center mb-[var(--space-xl)] min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={greetingIndex}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="
                  text-sm 
                  lg:text-base 
                  tracking-wide 
                  text-[var(--color-muted-light)] 
                  opacity-70
                "
              >
                {greetings[greetingIndex]}
              </motion.p>

            </AnimatePresence>
          </div>

          {/* Main Hero Content */}
          <div className="flex-1 flex items-center">
            <div className="flex flex-col lg:flex-row items-center gap-[var(--space-xl)] lg:gap-[var(--space-2xl)] w-full">
              {/* Text Column */}
              <div className="flex-1 lg:max-w-[55%] order-2 lg:order-1">
                <Reveal delay={0.1}>
                  <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold leading-[1.05] tracking-tight mb-[var(--space-lg)]">
                    Building systems.
                    <br />
                    Driving{" "}
                    <span className="relative inline-block">
                      <span className="text-primary opacity-80">
                        direction
                      </span>

                      <motion.svg
                        className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
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
                      </motion.svg>
                    </span>
                  </h1>

                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[var(--font-size-lg)] text-[var(--color-muted-light)] leading-relaxed max-w-[28rem] mb-[var(--space-lg)]">
                    Software engineer focused on backend systems, web applications, and automation. I ship working products.
                  </p>
                </Reveal>

                {/* Stats Row */}
                <StaggerContainer staggerDelay={0.1} className="flex flex-wrap gap-[var(--space-sm)]">
                  <StaggerItem>
                    <StatCard value="+4" label="Projects" variant="primary" />
                  </StaggerItem>
                  <StaggerItem>
                    <StatCard value="2+" label="Years" variant="secondary" />
                  </StaggerItem>
                  <StaggerItem>
                    <StatCard value="∞" label="Curiosity" variant="primary" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Image Column */}
              <div className="w-full lg:w-[45%] order-1 lg:order-2">
                <Reveal delay={0.15} direction="left">
                  <motion.div
                    className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-lg)]"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
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
                      {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <motion.a
                            key={link.label}
                            href={link.href}
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-accent)]/20 transition-colors duration-200"
                            aria-label={link.label}
                            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                          >
                            <Icon size={20} />
                          </motion.a>
                        );
                      })}
                    </div>

                    {/* Action CTAs */}
                    <div className="mt-[var(--space-md)] flex flex-col gap-3 items-center">
                      <motion.button
                        onClick={openCalendly}
                        className="glass-button px-8 py-3.5 rounded-full text-white text-[var(--font-size-sm)] font-medium"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      >
                        Let&apos;s build together
                      </motion.button>
                      <motion.a
                        href="/cv/CV-Kevin-Jan2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-fg)] text-[var(--font-size-sm)] font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      >
                        Download CV
                      </motion.a>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Calendly Modal */}
      <AnimatePresence>
        {isCalendlyOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeCalendly}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
              style={{
                width: "min(900px, 92vw)",
                maxWidth: "900px",
                boxShadow: "var(--shadow-elevated)",
              }}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <button
                onClick={closeCalendly}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-accent)]/20 transition-all duration-200 text-xl font-light"
                aria-label="Close modal"
              >
                ×
              </button>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/kgps1003/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
