import { Section } from "./Section";
import { AnimateOnScroll } from "./AnimateOnScroll";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageType: "banner" | "icon";
  tags: string[];
};

const eyla: Project = {
  id: 1,
  title: "EYLA",
  description:
    "Long-term system designed to preserve intent, structure, and continuity. Projects are modeled as first-class entities with persistent state, evolvable roadmaps, and a deterministic core focused on clarity and orientation rather than rigid workflows.",
  image: "/images/eyla-banner.png",
  imageType: "banner",
  tags: ["System Design", "Backend", "Architecture", "TypeScript"],
};

const secondaryProjects: Project[] = [
  {
    id: 2,
    title: "Flight Fare Optimizer",
    description:
      "Java 17 desktop application for flight search, filtering, and price ranking. Includes modular architecture, stream-based business logic, PDF report generation, and unit-tested core services separated from the UI layer.",
    image: "/images/FlightFare.png",
    imageType: "icon",
    tags: ["Java 17", "JavaFX", "JUnit", "Desktop"],
  },
  {
    id: 3,
    title: "EYLA Mobile",
    description:
      "Mobile extension of EYLA focused on cross-platform delivery. Built with React Native and TypeScript, designed to integrate with the core system while preserving the same principles of clarity, intent, and long-term orientation.",
    image: "/images/eyla-mobile.png",
    imageType: "icon",
    tags: ["React Native", "TypeScript", "Mobile"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isBanner = project.imageType === "banner";

  return (
    <article
      className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)] flex flex-col hover-lift hover:border-[var(--color-accent)]/30"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      {/* Project visual */}
      <div
        className={`mb-[var(--space-md)] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] overflow-hidden
          ${
            isBanner
              ? "aspect-video"
              : "aspect-square flex items-center justify-center p-4"
          }
        `}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={
            isBanner
              ? "w-full h-full object-cover"
              : "w-56 h-56 md:w-60 md:h-60 object-contain"
          }
        />
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
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work and experiments">
      <div className="flex flex-col gap-[var(--space-lg)]">
        {/* Row 1: EYLA (full width, banner fills container) */}
        <AnimateOnScroll>
          <ProjectCard project={eyla} />
        </AnimateOnScroll>

        {/* Row 2: Secondary projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]">
          {secondaryProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={(index + 1) * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
