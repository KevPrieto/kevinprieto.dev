"use client";

import { Container } from "./Container";
import { Reveal } from "./motion";

export function WhatIDoSection() {
  return (
    <section className="py-[var(--space-3xl)]">
      <Container>
        <div className="max-w-[42rem] mx-auto text-center">
          <Reveal delay={0.1}>
            <h2 className="text-[var(--font-size-4xl)] font-bold mb-[var(--space-xl)] tracking-tight">
              What I do
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[var(--font-size-2xl)] font-light leading-[1.8] text-[var(--color-fg)] mb-[var(--space-lg)]">
              I make ideas real.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-[var(--space-md)] text-[var(--font-size-lg)] text-[var(--color-muted-light)] leading-[1.8]">
              <p>I create applications that solve problems.</p>
              <p>I build websites that ship on time.</p>
              <p>I design systems with clarity and intent.</p>
              <p>I turn concepts into working products.</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
