"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { StatCard } from "./StatCard";
import { Reveal, WordReveal, StaggerContainer, StaggerItem } from "./motion";
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

// Interactive Letter Component -> UPDATED: "GREATER" Effect
const HoverLetter = ({ children, delay = 0 }: { children: string, delay?: number }) => {
  const { shouldReduceMotion } = useMotion();
  if (children === " ") return <span className="inline-block w-[0.25em]">&nbsp;</span>;
  return (
    <motion.span
      className="inline-block cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }}
      whileHover={shouldReduceMotion ? {} : {
        y: -10, // Increased lift (was -3)
        scale: 1.25, // Increased scale (was 1.05)
        color: "#60a5fa", // Bright Blue (Tailwind blue-400) to SHOW
        textShadow: "0 10px 20px rgba(96, 165, 250, 0.3)", // Glow
        transition: { type: "spring", stiffness: 300, damping: 15 } // Snappy spring
      }}
    >
      {children}
    </motion.span>
  );
};

const AnimatedHeadline = ({ text, baseDelay = 0.1 }: { text: string, baseDelay?: number }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <HoverLetter key={`${wordIndex}-${charIndex}`} delay={baseDelay + (wordIndex * 0.1) + (charIndex * 0.02)}>
              {char}
            </HoverLetter>
          ))}
        </span>
      ))}
    </span>
  );
};

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
          0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; }
        }
        .ellipsis-dot { animation: ellipsis-animation 1.5s ease-in-out infinite; }
        .ellipsis-dot:nth-child(2) { animation-delay: 0.2s; }
        .ellipsis-dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <section className="relative min-h-screen flex flex-col justify-center pt-[8rem] pb-[var(--space-xl)] overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] opacity-20 dark:opacity-40"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.1) 0%, rgba(200, 200, 200, 0.05) 40%, transparent 70%)' }} />
        </div>

        <Container>
          {/* HYBRID LAYOUT: Badge Centered -> Split Top -> Bottom Stack Centered */}
          <div className="flex flex-col items-center gap-10 lg:gap-14 max-w-7xl mx-auto">

            {/* 1. Availability Badge -> ALWAYS CENTERED */}
            <div className="w-full flex justify-center">
              <Reveal direction="down" delay={0}>
                <div className="glass inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--color-border)]/50">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-ring" />
                  <span className="text-[0.8125rem] sm:text-[var(--font-size-xs)] font-medium text-[var(--color-fg)]">
                    Available for work<span className="ellipsis-dot">.</span><span className="ellipsis-dot">.</span><span className="ellipsis-dot">.</span>
                  </span>
                </div>
              </Reveal>
            </div>

            {/* 2. Greeting Carousel -> MOVED HERE TO BE CENTERED */}
            <div className="h-8 flex items-center justify-center w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={greetingIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-[var(--color-muted)] font-medium text-lg lg:text-xl text-center"
                >
                  {greetings[greetingIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* 3. SPLIT SECTION (Letters Left / Picture Right) on Desktop */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* LEFT COLUMN: Letters (Headline + Paragraph) */}
              <div className="text-center lg:text-left flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">

                {/* Headline ("LETTERS") */}
                <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.1] tracking-[var(--letter-spacing-tight)] text-[var(--color-fg)] overflow-visible">
                  <AnimatedHeadline text="I build systems." baseDelay={0.1} />
                  <br />
                  <AnimatedHeadline text="And I think a lot about" baseDelay={0.4} />
                  <br className="hidden sm:block" />
                  <AnimatedHeadline text=" where they're taking us." baseDelay={0.7} />
                </h1>

                {/* Paragraph (Included in "Letters" block for cohesion) */}
                <div className="max-w-xl mx-auto lg:mx-0">
                  <Reveal delay={0.6}>
                    <p className="text-[clamp(1.15rem,1.5vw,1.35rem)] text-[var(--color-muted-light)] leading-[1.6]">
                      Software engineer focused on backend systems, web applications, and automation. I ship working products.
                    </p>
                  </Reveal>
                </div>
              </div>

              {/* RIGHT COLUMN: Picture */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <motion.div
                  className="relative w-full max-w-[420px] lg:max-w-[500px] aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] border border-[var(--color-border)]/15 shadow-2xl bg-neutral-800"
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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

            {/* 4. CENTERED BOTTOM STACK ("Rest not touched") */}
            <div className="flex flex-col items-center gap-10 w-full pt-4">

              {/* Stats -> CENTERED - UPDATED: 2 CARDS ONLY */}
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

              {/* Social/CV -> CENTERED */}
              <Reveal delay={0.8}>
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center">
                  <div className="flex items-center gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-border)] transition-all duration-300 shadow-sm"
                          whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.1 }}
                          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        >
                          <Icon size={26} />
                        </motion.a>
                      );
                    })}
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-[var(--color-border)]/50"></div>
                  <motion.a
                    href="/cv/CV-Kevin-Jan2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full border border-[var(--color-border)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] hover:border-[var(--color-fg)] transition-all duration-300 font-medium text-base group bg-[var(--color-surface)]/50 backdrop-blur-sm"
                    whileHover={shouldReduceMotion ? {} : { y: -4, boxShadow: "0 10px 20px -10px rgba(0,0,0,0.1)" }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  >
                    <span>Download CV</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </motion.a>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
