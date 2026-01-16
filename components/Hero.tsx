"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { StatCard } from "./StatCard";
import { Reveal, StaggerContainer, StaggerItem, WordReveal, LetterReveal } from "./motion";
import { useMotion } from "./motion";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon, YouTubeIcon } from "./Icons";

const socialLinks = [
  { href: "https://github.com/KevPrieto", label: "GitHub", icon: GitHubIcon },
  { href: "https://www.linkedin.com/in/kevin-prieto-developer/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://x.com/bykevin12", label: "Twitter", icon: XIcon },
  { href: "https://www.instagram.com/kevprs/", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.youtube.com/@kevprieto", label: "YouTube", icon: YouTubeIcon },
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
  const { shouldReduceMotion } = useMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2800);
    return () => clearInterval(interval);
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

      <section className="relative min-h-screen flex flex-col py-[var(--space-xl)] pt-[calc(var(--space-xl)+4rem)]">
        <Container>
          {/* FloatingCTA - Top Right Corner of Hero Section */}
          <motion.a
            href="https://calendly.com/kgps1003/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="glass absolute top-0 right-0 md:right-6 z-40 group px-8 py-4 rounded-full text-[var(--color-fg)] font-semibold text-[var(--font-size-base)] inline-flex items-center gap-3 overflow-hidden transition-all duration-300"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -6,
                    scale: 1.05,
                    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    transition: { duration: 0.3 },
                  }
            }
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            aria-label="Get in touch via Calendly"
          >
            {/* iOS-style shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />

            {/* Inner glow highlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* Button content */}
            <span className="relative z-10">Get in touch</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

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
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[clamp(1.25rem,3vw,2rem)] text-[var(--color-muted-light)] font-medium"
              >
                {greetings[greetingIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Main Hero Content */}
          <div className="flex-1 flex items-center">
            <div className="w-full flex flex-col lg:flex-row items-start gap-[var(--space-3xl)]">
              {/* Text Column */}
              <div className="flex-1 order-2 lg:order-1">
                <Reveal delay={0.1}>
                  <h1 className="text-[clamp(3.5rem,10vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter mb-[var(--space-xl)]">
                    <WordReveal delay={0} stagger={0.08}>
                      Building systems.
                    </WordReveal>
                    <br />
                    <WordReveal delay={0.3} stagger={0.08}>
                      Driving direction.
                    </WordReveal>
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] text-[var(--color-muted-light)] leading-relaxed max-w-[28rem] mb-[var(--space-xl)]">
                    Software engineer focused on backend systems, web applications, and automation. I ship working products.
                  </p>
                </Reveal>

                {/* Stats Row */}
                <StaggerContainer staggerDelay={0.1} className="flex flex-wrap gap-[var(--space-sm)] mb-[var(--space-xl)]">
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

                {/* Social Icons */}
                <StaggerContainer staggerDelay={0.08} className="flex items-center gap-5 mb-[var(--space-xl)]">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <StaggerItem key={link.label}>
                        <motion.a
                          href={link.href}
                          className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] transition-all duration-200"
                          aria-label={link.label}
                          whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -3 }}
                          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        >
                          <Icon size={28} />
                        </motion.a>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                {/* Action CTA */}
                <Reveal delay={0.5}>
                  <motion.a
                    href="/cv/CV-Kevin-Jan2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-2 px-6 py-3 rounded-full text-[var(--color-fg)] text-[var(--font-size-sm)] font-medium transition-all duration-200 hover:bg-[rgba(255,255,255,0.2)]"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  >
                    <span className="relative z-10">Download CV</span>
                    <svg
                      className="relative z-10 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </motion.a>
                </Reveal>
              </div>

              {/* Image Column - Editorial, Dominant, Aligned with Text */}
              <div className="w-full lg:w-[55%] order-1 lg:order-2 flex justify-center lg:justify-end lg:self-stretch">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01, transition: { duration: 0.5 } }}
                >
                  {/* Decorative blur background - larger and more prominent */}
                  <div className="absolute -inset-12 bg-gradient-to-br from-[var(--color-surface-2)]/40 via-transparent to-[var(--color-surface-2)]/20 rounded-[4rem] blur-3xl opacity-70" />

                  {/* Large editorial image - Stretches to match text column height */}
                  <div className="relative w-[380px] sm:w-[480px] lg:w-[580px] xl:w-[640px] h-full min-h-[500px] lg:min-h-0 overflow-hidden rounded-[2.5rem] border border-[var(--color-border)]/20">
                    <Image
                      src="/content/profile-pic/image00100.jpeg"
                      alt="Kevin Prieto"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, (max-width: 1280px) 580px, 640px"
                      quality={95}
                    />
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/15 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
