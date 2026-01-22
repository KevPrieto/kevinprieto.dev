"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { StaggerContainer, StaggerItem } from "./motion";
import { useMotion } from "./motion";
import { ArrowRightIcon } from "./Icons";

export function HighlightsSection() {
  const { shouldReduceMotion } = useMotion();

  return (
    <section className="py-[var(--space-2xl)]">
      <Container>
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-md)]"
        >
          {/* Card 1 - Accent background */}
          <StaggerItem>
            <motion.div
              className="bg-[var(--color-accent)] rounded-2xl p-[var(--space-xl)] flex flex-col justify-between min-h-[320px]"
              style={{ boxShadow: "var(--shadow-elevated)" }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.05, y: -4, boxShadow: "0 32px 80px rgba(0, 0, 0, 0.2)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }
            >
              <div>
                <p className="text-[var(--color-accent-text)] text-[var(--font-size-sm)] mb-[var(--space-sm)] opacity-80">
                  Approach
                </p>
                <h3 className="text-[var(--color-accent-text)] text-[var(--font-size-3xl)] font-bold leading-tight">
                  Clean Code,
                  <br />
                  Clear Purpose
                </h3>
              </div>
              <div className="flex items-center justify-between mt-[var(--space-lg)]">
                <p className="text-[var(--color-accent-text)] text-[var(--font-size-sm)] max-w-[70%] opacity-90">
                  Placeholder text about development philosophy and approach.
                </p>
                <motion.div
                  className="w-12 h-12 rounded-full bg-[var(--color-bg)] flex items-center justify-center"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: -10 }}
                >
                  <ArrowRightIcon className="text-[var(--color-accent)]" size={20} />
                </motion.div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Card 2 - Surface background */}
          <StaggerItem>
            <motion.div
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-xl)] flex flex-col justify-between min-h-[320px]"
              style={{ boxShadow: "var(--shadow-soft)" }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.05,
                      y: -4,
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 28px 70px rgba(0, 0, 0, 0.18)",
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    }
              }
            >
              <div>
                <p className="text-[var(--color-muted-light)] text-[var(--font-size-sm)] mb-[var(--space-sm)]">
                  Stack
                </p>
                <h3 className="text-[var(--font-size-3xl)] font-bold leading-tight">
                  Modern
                  <br />
                  <span className="text-[var(--color-accent)]">Technologies</span>
                </h3>
              </div>
              <div className="flex items-center justify-between mt-[var(--space-lg)]">
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[var(--font-size-xs)] text-[var(--color-fg)] bg-[var(--color-surface-2)] border border-[var(--color-border)] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-[var(--color-accent-secondary)] flex items-center justify-center flex-shrink-0 ml-[var(--space-sm)]"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: -10 }}
                >
                  <ArrowRightIcon className="text-[var(--color-bg)]" size={20} />
                </motion.div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}
