"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./motion";
import { useMotion } from "./motion";

export function TypographyBlock() {
  const containerRef = useRef<HTMLElement>(null);
  const { shouldReduceMotion } = useMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.05, 0.03]);

  return (
    <section ref={containerRef} className="py-[var(--space-2xl)] overflow-hidden">
      <Container>
        <div className="relative">
          {/* Background text with subtle parallax */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,20vw,16rem)] font-bold leading-none select-none pointer-events-none whitespace-nowrap"
            style={{
              color: "var(--color-fg)",
              opacity: shouldReduceMotion ? 0.05 : backgroundOpacity,
              y: shouldReduceMotion ? 0 : backgroundY,
            }}
            aria-hidden="true"
          >
            DEVELOPER
          </motion.div>

          {/* Main typography */}
          <Reveal>
            <div className="relative text-center py-[var(--space-xl)]">
              <motion.p
                className="text-[var(--font-size-lg)] text-[var(--color-muted-light)] mb-[var(--space-sm)]"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                What I do
              </motion.p>
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
                <motion.span
                  className="block"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  SOFTWARE
                </motion.span>
                <motion.span
                  className="block text-[var(--color-accent)] text-glow"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  ENGINEER
                </motion.span>
              </h2>
              <motion.p
                className="text-[var(--font-size-xl)] mt-[var(--space-lg)] max-w-[32rem] mx-auto"
                style={{ color: "var(--color-fg)", opacity: 0.7 }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Building robust systems and web applications.
                Java · Next.js · Automation · Product-focused engineering.
              </motion.p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
