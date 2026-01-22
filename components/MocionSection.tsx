"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { WordReveal } from "./motion";
import { useMotion } from "./motion";
import Image from "next/image";

export function MocionSection() {
  const { shouldReduceMotion } = useMotion();

  return (
    <section className="py-[clamp(6rem,15vh,10rem)]">
      <Container>
        <div className="max-w-[65rem] mx-auto">
          {/* Large Cinematic Image - First thing eye sees */}
          <motion.div
            className="group relative w-full mb-[clamp(3rem,8vh,5rem)] overflow-hidden rounded-[1.5rem]"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="/content/mocion-pic/mocion.png"
                alt="Moción game"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                priority
                sizes="(max-width: 768px) 100vw, 65rem"
              />
            </div>
          </motion.div>

          {/* Section Heading */}
          <WordReveal
            delay={0.4}
            stagger={0.12}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tighter leading-[1.05] mb-[clamp(2rem,5vh,4rem)] text-[var(--color-fg)]"
          >
            Moción
          </WordReveal>

          {/* Narrative Block */}
          <div className="space-y-[clamp(2rem,4vh,3rem)] mb-[clamp(3rem,8vh,5rem)]">
            <motion.p
              className="text-[clamp(1.25rem,2.5vw,1.75rem)] text-[var(--color-fg)] leading-relaxed"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              Moción is a narrative RPG adventure game for mobile devices,
              where players discover the story of Samuel.
            </motion.p>

            <motion.p
              className="text-[clamp(1.125rem,2vw,1.5rem)] text-[var(--color-muted-light)] leading-relaxed"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              The experience blends science fiction and spirituality,
              inviting reflection and encouraging players to look beyond
              their own perception of reality.
            </motion.p>

            <motion.p
              className="text-[clamp(1.125rem,2vw,1.5rem)] text-[var(--color-muted-light)] leading-relaxed"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              The game focuses on story, atmosphere, and decision-making,
              guiding the player through an emotional and introspective journey.
            </motion.p>
          </div>

          {/* Tooling Block - Visually Separated */}
          <div className="pt-[var(--space-xl)] border-t border-[var(--color-border)] mb-[clamp(3rem,8vh,5rem)]">
            <motion.p
              className="text-[var(--font-size-sm)] font-medium uppercase tracking-wider mb-[var(--space-md)] text-[var(--color-muted)]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              Built with
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {[
                "Unity",
                "C#",
                "Gameplay systems",
                "Object-oriented design",
                "GitLab"
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[var(--font-size-sm)] text-[var(--color-fg)] bg-[var(--color-surface-2)] px-4 py-2 rounded-full border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* CTA Link */}
          <motion.a
            href="https://mocionplay.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[clamp(1.125rem,2vw,1.5rem)] font-medium text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors duration-300"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            whileHover={shouldReduceMotion ? {} : { x: 6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
          >
            <span>Explore Moción</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
