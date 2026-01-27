"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { StatCard } from "./StatCard";
import { Reveal, StaggerContainer, StaggerItem } from "./motion";
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
  "Welcome, I'm Kevin",
  "Hola, soy Kevin",
  "Ciao, sono Kevin",
  "Olá, sou Kevin",
  "Bonjour, je suis Kevin",
  "안녕하세요, 저는 Kevin입니다",
  "ようこそ、ケビンです",
  "你好，我是 Kevin",
  "Hallo, ich bin Kevin",
  "नमस्ते, मैं केविन हूँ",
];

// Editorial easing — controlled, confident, no bounce
const editorialEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

// Line reveal component — masked vertical slide with hover lift
function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block cursor-default"
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
          delay,
          ease: editorialEase,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          filter: "drop-shadow(0 12px 32px rgba(255, 255, 255, 0.25))",
          transition: { duration: 0.25, ease: editorialEase },
        }}
        style={{ willChange: "transform, filter" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Fade element — for subordinate content
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: editorialEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const { shouldReduceMotion } = useMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Timing
  const lineStagger = 0.1;
  const headlineEnd = 0.3 + lineStagger * 3; // ~0.6s
  const subheadingDelay = headlineEnd + 0.15;
  const imageDelay = 0.2;
  const secondaryDelay = headlineEnd + 0.3;

  return (
    <>
      <style jsx>{`
        @keyframes ellipsis-animation {
          0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; }
        }
        .ellipsis-dot { animation: ellipsis-animation 1.5s ease-in-out infinite; }
        .ellipsis-dot:nth-child(2) { animation-delay: 0.2s; }
        .ellipsis-dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <section className="relative min-h-screen flex flex-col justify-center pt-[8rem] pb-[var(--space-xl)] overflow-hidden">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:gap-14 max-w-7xl mx-auto">

            {/* Availability Badge */}
            <FadeIn delay={0}>
              <div className="glass inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--color-border)]/50">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-ring" />
                <span className="text-[0.8125rem] sm:text-[var(--font-size-xs)] font-medium text-[var(--color-fg)]">
                  Available for work<span className="ellipsis-dot">.</span><span className="ellipsis-dot">.</span><span className="ellipsis-dot">.</span>
                </span>
              </div>
            </FadeIn>

            {/* Greeting Carousel */}
            <div className="h-8 flex items-center justify-center w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={greetingIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: editorialEase }}
                  className="text-[var(--color-muted)] font-medium text-lg lg:text-xl text-center"
                >
                  {greetings[greetingIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Main Content Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left: Headline */}
              <div className="text-center lg:text-left flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                <h1 className="text-[clamp(2.75rem,5.5vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)]">
                  <RevealLine delay={0.3}>I build systems.</RevealLine>
                  <RevealLine delay={0.3 + lineStagger}>And I think a lot about</RevealLine>
                  <RevealLine delay={0.3 + lineStagger * 2}>where they're taking us.</RevealLine>
                </h1>

                {/* Subheading */}
                <FadeIn delay={subheadingDelay}>
                  <p className="max-w-xl mx-auto lg:mx-0 text-[clamp(1.1rem,1.4vw,1.3rem)] text-[var(--color-muted-light)] leading-[1.6]">
                    Software engineer focused on backend systems, web applications, and automation. I ship working products.
                  </p>
                </FadeIn>
              </div>

              {/* Right: Portrait */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <motion.div
                  className="relative w-full max-w-[420px] lg:max-w-[500px] aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] border border-[var(--color-border)]/15 shadow-2xl bg-neutral-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: imageDelay, ease: editorialEase }}
                >
                  <Image
                    src="/content/profile-pic/image00100.jpeg"
                    alt="Kevin Prieto"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 500px"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>

            {/* Bottom: Stats & Social */}
            <FadeIn delay={secondaryDelay}>
              <div className="flex flex-col items-center gap-10 w-full pt-4">

                {/* Stats */}
                <div className="w-full flex justify-center">
                  <StaggerContainer staggerDelay={0.1} className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                    <StaggerItem>
                      <StatCard value="+3" label="Years Coding Everyday" variant="primary" />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard value="∞" label="Curiosity" variant="secondary" />
                    </StaggerItem>
                  </StaggerContainer>
                </div>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center">
                  <div className="flex items-center gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-border)] transition-colors duration-300 shadow-sm"
                        >
                          <Icon size={26} />
                        </a>
                      );
                    })}
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-[var(--color-border)]/50" />
                  <a
                    href="/cv/CV-Kevin-Jan2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full border border-[var(--color-border)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:border-[var(--color-fg)] transition-colors duration-300 font-medium text-base bg-[var(--color-surface)]/50 backdrop-blur-sm"
                  >
                    <span>Download CV</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </Container>
      </section>
    </>
  );
}
