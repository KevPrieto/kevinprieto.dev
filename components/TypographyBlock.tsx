import { Container } from "./Container";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function TypographyBlock() {
  return (
    <section className="py-[var(--space-2xl)] overflow-hidden">
      <Container>
        <div className="relative">
          {/* Background text - large, faded - uses theme-aware opacity */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,20vw,16rem)] font-bold leading-none select-none pointer-events-none whitespace-nowrap"
            style={{
              color: "var(--color-fg)",
              opacity: 0.05,
            }}
            aria-hidden="true"
          >
            DEVELOPER
          </div>

          {/* Main typography */}
          <AnimateOnScroll>
            <div className="relative text-center py-[var(--space-xl)]">
              <p className="text-[var(--font-size-lg)] text-[var(--color-muted-light)] mb-[var(--space-sm)]">
                What I do
              </p>
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
                <span className="block">SOFTWARE</span>
                <span className="block text-[var(--color-accent)] text-glow">ENGINEER</span>
              </h2>
              <p className="text-[var(--font-size-xl)] mt-[var(--space-lg)] max-w-[32rem] mx-auto" style={{ color: "var(--color-fg)", opacity: 0.7 }}>
                Building robust systems and web applications.
                Java · Next.js · Automation · Product-focused engineering.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
