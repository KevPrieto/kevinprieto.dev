"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Reveal, WordReveal } from "./motion";
import { useMotion } from "./motion";

export function AboutSection() {
  const { shouldReduceMotion } = useMotion();

  return (
    <Section id="about" title="About" subtitle="Background and approach">
      {/* Editorial Layout: Text Left, Vertical Video Right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[var(--space-xl)] items-start">
        {/* Text Content Column */}
        <div className="space-y-[var(--space-lg)] lg:max-w-[600px]">
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
              className="text-[clamp(1.125rem,2vw,1.5rem)] text-[var(--color-muted-light)] leading-relaxed"
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
              className="text-[clamp(1.125rem,2vw,1.5rem)] text-[var(--color-muted-light)] leading-relaxed"
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
              className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-relaxed pt-[var(--space-md)]"
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

        {/* Vertical Video Column - Editorial Reel Style */}
        <Reveal delay={0.2}>
          <motion.div
            className="relative w-[280px] sm:w-[320px] lg:w-[380px] aspect-[9/16] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-3xl overflow-hidden mx-auto lg:mx-0"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.15)" }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/content/desktop-video/VIDEO-DESKTOP.mp4" type="video/mp4" />
            </video>
            {/* Subtle inner border glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
