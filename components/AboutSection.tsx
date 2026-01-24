"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Reveal, WordReveal } from "./motion";
import { useMotion } from "./motion";

export function AboutSection() {
  const { shouldReduceMotion } = useMotion();

  return (
    <Section id="about" title="About" subtitle="Background and approach">
      {/* Main Layout: Two columns on desktop */}
      <div className="flex flex-col gap-[var(--space-xl)]">

        {/* Row 1: Text + Video side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[var(--space-lg)] lg:gap-[var(--space-xl)] items-start">
          {/* Text Content Column */}
          <div className="space-y-[var(--space-md)] lg:max-w-[560px]">
            <Reveal delay={0.1}>
              <motion.div
                className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2] font-medium"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
              >
                <WordReveal stagger={0.05} delay={0}>
                  I build systems where structure matters.
                </WordReveal>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.p
                className="text-[clamp(1rem,1.8vw,1.25rem)] text-[var(--color-muted-light)] leading-relaxed"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
              >
                My background is backend development, but my work goes beyond code:
                I develop games, design interactive experiences, and explore how systems
                behave when pushed to their limits.
              </motion.p>
            </Reveal>

            <Reveal delay={0.3}>
              <motion.p
                className="text-[clamp(1rem,1.8vw,1.25rem)] text-[var(--color-muted-light)] leading-relaxed"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
              >
                I also create content where I share tools, workflows, and technical ideas
                across platforms like LinkedIn, Instagram, and YouTube.
              </motion.p>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.div
                className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-relaxed pt-[var(--space-sm)]"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
              >
                <WordReveal stagger={0.05} delay={0}>
                  Curiosity drives everything I build.
                </WordReveal>
              </motion.div>
            </Reveal>
          </div>

          {/* Vertical Video Column - Large, immersive, editorial treatment */}
          <Reveal delay={0.2}>
            <motion.div
              className="group relative w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[480px] aspect-[9/16] rounded-3xl overflow-visible mx-auto lg:mx-0"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.05, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {/* Atmospheric glow behind video - intensifies on hover */}
              <div
                className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-40 dark:opacity-60 group-hover:opacity-90 transition-opacity duration-600 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(200, 200, 200, 0.2) 0%, transparent 70%)',
                }}
              />
              {/* Video with border - premium hover */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[var(--color-border)]/30 group-hover:border-[var(--color-border)]/80 transition-colors duration-400">
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.10]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/content/desktop-video/VIDEO-DESKTOP.mp4" type="video/mp4" />
                </video>
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                {/* Light sweep on hover - MORE VISIBLE */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.20] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
