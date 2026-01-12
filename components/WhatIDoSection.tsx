"use client";

import { Container } from "./Container";
import { Reveal, StaggerContainer, StaggerItem } from "./motion";

export function WhatIDoSection() {
  const statements = [
    "I create applications that solve problems.",
    "I build websites that ship on time.",
    "I design systems with clarity and intent.",
    "I turn concepts into working products.",
  ];

  return (
    <section className="py-[var(--space-3xl)]">
      <Container>
        <div className="max-w-[42rem] mx-auto text-center">
          <Reveal delay={0.1}>
            <h2 className="text-[var(--font-size-4xl)] font-bold mb-[var(--space-xl)] tracking-tight text-[var(--color-fg)]">
              What I do
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[var(--font-size-2xl)] font-light leading-[1.8] text-[var(--color-fg)] mb-[var(--space-lg)]">
              I make ideas real.
            </p>
          </Reveal>

          <StaggerContainer
            staggerDelay={0.15}
            className="space-y-[var(--space-md)]"
          >
            {statements.map((statement, index) => (
              <StaggerItem key={index}>
                <p className="text-[var(--font-size-lg)] text-[var(--color-muted-light)] leading-[1.8]">
                  {statement}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
