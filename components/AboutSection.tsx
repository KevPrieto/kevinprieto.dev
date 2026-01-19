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

          {/* Vertical Video Column - Clean, no heavy shadows */}
          <Reveal delay={0.2}>
            <motion.div
              className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden mx-auto lg:mx-0"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/content/desktop-video/VIDEO-DESKTOP.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </Reveal>
        </div>

        {/* Row 2: Horizontal Image - Full width, cinematic */}
        <Reveal delay={0.3}>
          <motion.div
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Image
              src="/content/about-pic/DSC03127-2.png"
              alt="Kevin Prieto workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              quality={90}
              priority={false}
            />
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
