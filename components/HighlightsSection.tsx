import { Container } from "./Container";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function HighlightsSection() {
  return (
    <section className="py-[var(--space-2xl)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-md)]">
          {/* Card 1 - Accent background */}
          <AnimateOnScroll>
            <div className="bg-[var(--color-accent)] rounded-2xl p-[var(--space-xl)] flex flex-col justify-between min-h-[320px] hover-scale">
              <div>
                <p className="text-[var(--color-bg)] text-[var(--font-size-sm)] opacity-80 mb-[var(--space-sm)]">
                  Approach
                </p>
                <h3 className="text-[var(--color-bg)] text-[var(--font-size-3xl)] font-bold leading-tight">
                  Clean Code,
                  <br />
                  Clear Purpose
                </h3>
              </div>
              <div className="flex items-center justify-between mt-[var(--space-lg)]">
                <p className="text-[var(--color-bg)] text-[var(--font-size-sm)] opacity-80 max-w-[70%]">
                  Placeholder text about development philosophy and approach.
                </p>
                {/* Arrow indicator */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] flex items-center justify-center">
                  <span className="text-[var(--color-accent)] text-[var(--font-size-xl)]">→</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Card 2 - Surface background */}
          <AnimateOnScroll delay={100}>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-xl)] flex flex-col justify-between min-h-[320px] hover-scale hover:border-[var(--color-accent)]/30">
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
                      className="text-[var(--font-size-xs)] text-[var(--color-fg)] bg-[var(--color-border)] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Arrow indicator */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-secondary)] flex items-center justify-center flex-shrink-0 ml-[var(--space-sm)]">
                  <span className="text-[var(--color-bg)] text-[var(--font-size-xl)]">→</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
