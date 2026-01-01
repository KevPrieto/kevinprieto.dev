import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" title="About" subtitle="Background and approach">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)]">
        {/* Text Column */}
        <div className="space-y-[var(--space-md)]">
          <p className="text-[var(--font-size-lg)] leading-relaxed">
            Placeholder paragraph about background, experience, and professional
            journey. This section will contain a genuine introduction.
          </p>
          <p className="text-[var(--color-muted-light)] leading-relaxed">
            Additional placeholder text describing technical interests, development
            philosophy, and what drives the work. Focus on clarity and craft.
          </p>
        </div>

        {/* Highlights Column */}
        <div className="space-y-[var(--space-md)]">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)]">
            <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--space-sm)]">
              Focus Areas
            </h3>
            <ul className="space-y-2 text-[var(--color-muted-light)]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Frontend Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-secondary)]" />
                System Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Developer Experience
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)]">
            <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--space-sm)]">
              Currently
            </h3>
            <p className="text-[var(--color-muted-light)]">
              Placeholder for current work, interests, or availability status.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
