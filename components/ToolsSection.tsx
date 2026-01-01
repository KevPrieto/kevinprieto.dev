import { Section } from "./Section";
import { AnimateOnScroll } from "./AnimateOnScroll";

const tools = [
  { name: "React", initial: "R", description: "UI Components", accent: true },
  { name: "TypeScript", initial: "TS", description: "Type Safety", accent: false },
  { name: "Next.js", initial: "N", description: "Framework", accent: true },
  { name: "Node.js", initial: "No", description: "Runtime", accent: false },
  { name: "Tailwind", initial: "T", description: "Styling", accent: true },
  { name: "PostgreSQL", initial: "P", description: "Database", accent: false },
  { name: "Git", initial: "G", description: "Version Control", accent: false },
  { name: "Figma", initial: "F", description: "Design", accent: true },
];

export function ToolsSection() {
  return (
    <Section id="tools" title="Tools" subtitle="Technologies I work with">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-sm)]">
        {tools.map((tool, index) => (
          <AnimateOnScroll key={tool.name} delay={index * 50}>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-md)] flex items-center gap-[var(--space-sm)] hover-lift hover:border-[var(--color-accent)]/30">
              {/* Initial as visual placeholder */}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-[var(--font-size-lg)] font-bold ${
                  tool.accent
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                    : "bg-[var(--color-border)] text-[var(--color-fg)]"
                }`}
              >
                {tool.initial}
              </div>
              <div>
                <p className="font-bold text-[var(--font-size-base)]">{tool.name}</p>
                <p className="text-[var(--font-size-xs)] text-[var(--color-muted-light)]">
                  {tool.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
