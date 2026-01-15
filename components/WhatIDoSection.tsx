"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./motion";
import { useMotion } from "./motion";

export function WhatIDoSection() {
  const { shouldReduceMotion } = useMotion();

  const statements = [
    "I create applications that solve problems.",
    "I build websites that ship on time.",
    "I design systems with clarity and intent.",
    "I turn concepts into working products.",
  ];

  return (
    <section className="py-[clamp(6rem,15vh,10rem)] overflow-hidden">
      <Container>
        <div className="max-w-[50rem] mx-auto text-center">

          {/* Heading - MASSIVE */}
          <Reveal delay={0.1}>
            <h2 className="text-[clamp(3rem,8vw,5rem)] font-extrabold tracking-tighter leading-[0.95] mb-[clamp(2rem,5vh,4rem)] text-[var(--color-fg)]">
              What I do
            </h2>
          </Reveal>

          {/* Tagline - LARGE with dramatic reveal */}
          <Reveal delay={0.3}>
            <motion.p
              className="text-[clamp(1.75rem,4vw,3rem)] font-light leading-tight text-[var(--color-fg)] mb-[clamp(3rem,8vh,5rem)]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              I make ideas real.
            </motion.p>
          </Reveal>

          {/* Statements - LINE-BY-LINE dramatic reveal */}
          <div className="space-y-[clamp(1.5rem,3vh,2.5rem)]">
            {statements.map((statement, index) => (
              <motion.p
                key={index}
                className="text-[clamp(1.25rem,2.5vw,1.75rem)] text-[var(--color-muted-light)] leading-relaxed"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.6 + (index * 0.2),
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {statement}
              </motion.p>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
