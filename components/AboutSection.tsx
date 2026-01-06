import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" title="About" subtitle="Background and approach">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)]">
        {/* Text Column */}
        <div className="space-y-[var(--space-md)]">
          <p className="text-[var(--font-size-lg)] leading-relaxed">
            I’m a software engineer with a backend-oriented mindset, focused on
            building systems that prioritize clarity, structure, and long-term
            maintainability. I care less about shipping features quickly and more
            about designing foundations that don’t collapse under their own
            complexity.
          </p>

          <p className="text-[var(--color-muted-light)] leading-relaxed">
            My background spans backend development, automation, and data-driven
            work, with a strong focus on Java, clean architecture, and testing.
            Alongside professional experience, I actively build independent
            systems like EYLA, where I explore how software can preserve intent,
            continuity, and orientation over time instead of becoming disposable.
          </p>

          <p className="text-[var(--color-muted-light)] leading-relaxed">
            I’m particularly interested in how developers think, how systems age,
            and how small architectural decisions compound over the long run. I
            prefer explicit models, deterministic behavior, and tools that help
            humans reason clearly about what they are building.
          </p>
        </div>

        {/* Highlights Column */}
        <div className="space-y-[var(--space-md)]">
          <div
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--space-sm)]">
              Focus Areas
            </h3>
            <ul className="space-y-2 text-[var(--color-muted-light)]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Backend systems and clean architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-secondary)]" />
                State, continuity, and long-term system design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Testing, automation, and developer tooling
              </li>
            </ul>
          </div>

          <div
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--space-sm)]">
              Currently
            </h3>
            <p className="text-[var(--color-muted-light)] leading-relaxed">
              Building EYLA as a long-term personal project while continuing to
              deepen my backend engineering skills. Open to roles where I can work
              on real systems, learn from strong engineers, and contribute to
              codebases meant to last.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
