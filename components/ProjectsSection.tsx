import { Section } from "./Section";
import { AnimateOnScroll } from "./AnimateOnScroll";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Placeholder description for project. Technical details and approach.",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Placeholder description for project. Technical details and approach.",
    tags: ["Next.js", "Node"],
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Placeholder description for project. Technical details and approach.",
    tags: ["Python", "API"],
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work and experiments">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 100}>
            <article
              className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)] flex flex-col hover-lift hover:border-[var(--color-accent)]/30"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              {/* Project visual placeholder */}
              <div className="aspect-video bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg mb-[var(--space-md)] flex items-center justify-center">
                <span className="text-[var(--color-muted)] text-[var(--font-size-sm)]">
                  Preview
                </span>
              </div>

              <h3 className="text-[var(--font-size-xl)] font-bold mb-[var(--space-xs)]">
                {project.title}
              </h3>
              <p className="text-[var(--font-size-sm)] text-[var(--color-muted-light)] mb-[var(--space-md)] flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[var(--font-size-xs)] text-[var(--color-fg)] bg-[var(--color-surface-2)] px-3 py-1 rounded-full border border-[var(--color-border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
