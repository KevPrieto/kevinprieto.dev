"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Reveal, StaggerContainer, StaggerItem } from "./motion";
import { useMotion } from "./motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageType: "banner" | "icon";
  tags: string[];
  githubUrl?: string;
};

const eyla: Project = {
  id: 1,
  title: "EYLA",
  description:
    "Long-term system designed to preserve intent, structure, and continuity. Projects are modeled as first-class entities with persistent state, evolvable roadmaps, and a deterministic core focused on clarity and orientation rather than rigid workflows.",
  image: "/images/eyla-banner.png",
  imageType: "banner",
  tags: ["System Design", "Backend", "Architecture", "TypeScript"],
  githubUrl: "https://github.com/KevPrieto/eyla",
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
    githubUrl: "https://github.com/KevPrieto/Flight-Fare-Optimizer",
  },
  {
    id: 3,
    title: "EYLA Mobile",
    description:
      "Mobile extension of EYLA focused on cross-platform delivery. Built with React Native and TypeScript, designed to integrate with the core system while preserving the same principles of clarity, intent, and long-term orientation.",
    image: "/images/eyla-mobile.png",
    imageType: "icon",
    tags: ["React Native", "TypeScript", "Mobile"],
    githubUrl: "https://github.com/KevPrieto/eyla-mobile",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isBanner = project.imageType === "banner";
  const { shouldReduceMotion } = useMotion();

  return (
    <motion.article
      className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-lg)] flex flex-col overflow-hidden"
      style={{ boxShadow: "var(--shadow-soft)" }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              boxShadow: "var(--shadow-elevated)",
              borderColor: "rgba(124, 58, 237, 0.4)",
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }
      }
    >
      {/* Project visual */}
      <motion.div
        className={`mb-[var(--space-md)] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] overflow-hidden
          ${isBanner ? "aspect-video" : "aspect-square flex items-center justify-center"}
        `}
        whileHover={
          shouldReduceMotion
            ? {}
            : { scale: 1.02, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }
        }
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={
            isBanner
              ? "w-full h-full object-cover"
              : "w-full h-full object-contain p-4"
          }
        />
      </motion.div>

      <h3 className="text-[var(--font-size-xl)] font-bold mb-[var(--space-xs)]">
        {project.title}
      </h3>

      <p className="text-[var(--font-size-sm)] text-[var(--color-muted-light)] mb-[var(--space-md)] flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-[var(--space-md)]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[var(--font-size-xs)] text-[var(--color-fg)] bg-[var(--color-surface-2)] px-3 py-1 rounded-full border border-[var(--color-border)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      {project.githubUrl && (
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--font-size-sm)] text-[var(--color-muted-light)] hover:text-[var(--color-accent)] transition-colors duration-200"
          whileHover={
            shouldReduceMotion
              ? {}
              : { x: 4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }
          }
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View Repository</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      )}
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work and experiments">
      <div className="flex flex-col gap-[var(--space-lg)]">
        {/* Row 1: EYLA (full width, banner fills container) */}
        <Reveal>
          <ProjectCard project={eyla} />
        </Reveal>

        {/* Row 2: Secondary projects */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]"
        >
          {secondaryProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
