"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Reveal, StaggerContainer, StaggerItem, WordReveal } from "./motion";
import { useMotion } from "./motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageType: "banner" | "icon";
  tags: string[];
  githubUrl?: string;
  externalUrl?: string;
  video?: string;
};

const vera: Project = {
  id: 0,
  title: "VÉRA",
  description:
    "Full-stack ecommerce platform for premium DTC brands. Handles the complete purchase lifecycle—from product discovery to secure checkout and order fulfillment—with infrastructure built to scale. Payments flow through Stripe webhooks that never lose a transaction, authentication uses row-level security, and the storefront regenerates dynamically without downtime.",
  image: "/images/vera-banner.png",
  imageType: "banner",
  tags: ["Full-Stack", "Ecommerce", "Next.js", "Stripe", "Supabase"],
  externalUrl: "https://ecommerce.kevprieto.com",
  video: "/videos/vera.mp4",
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
    title: "AuthFlow",
    description:
      "Production-grade backend for SaaS authentication, authorization (RBAC), multi-tenant organizations, and audit logging. Built as a modular monolith with clean architecture, migrations, and containerized runtime.",
    image: "/content/authflow-pic/authflow.png",
    imageType: "icon",
    tags: ["Backend", "Auth", "RBAC", "Multi-tenant", "PostgreSQL"],
    githubUrl: "https://github.com/KevPrieto/Authflow",
  },
  {
    id: 3,
    title: "Flight Fare Optimizer",
    description:
      "Java 17 desktop application for flight search, filtering, and price ranking. Includes modular architecture, stream-based business logic, PDF report generation, and unit-tested core services separated from the UI layer.",
    image: "/images/FlightFare.png",
    imageType: "icon",
    tags: ["Java 17", "JavaFX", "JUnit", "Desktop"],
    githubUrl: "https://github.com/KevPrieto/Flight-Fare-Optimizer",
  },
  {
    id: 4,
    title: "EYLA Mobile",
    description:
      "Mobile extension of EYLA focused on cross-platform delivery. Built with React Native and TypeScript, designed to integrate with the core system while preserving the same principles of clarity, intent, and long-term orientation.",
    image: "/images/eyla-mobile.png",
    imageType: "icon",
    tags: ["React Native", "TypeScript", "Mobile"],
    githubUrl: "https://github.com/KevPrieto/eyla-mobile",
  },
  {
    id: 5,
    title: "n8n Automation Server",
    description:
      "Self-hosted n8n instance deployed on a VPS to orchestrate automations, integrations, and backend workflows. Focused on reliability, security, and extensibility for production-ready automation pipelines.",
    image: "/images/n8n-server.png",
    imageType: "icon",
    tags: ["n8n", "VPS", "Automation", "Backend"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isBanner = project.imageType === "banner";
  const { shouldReduceMotion } = useMotion();

  // Determine link URL and type
  const linkUrl = project.externalUrl || project.githubUrl;
  const isExternal = !!project.externalUrl;
  const hasLink = !!linkUrl;

  const CardWrapper = hasLink ? motion.a : motion.article;
  const cardProps = hasLink
    ? {
      href: linkUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": isExternal
        ? `View ${project.title} live site (opens in new tab)`
        : `View ${project.title} repository (opens in new tab)`,
      className: "group relative bg-[var(--color-surface)] border border-white/[0.08] dark:border-white/[0.06] rounded-xl p-[var(--space-lg)] flex flex-col overflow-hidden transition-all duration-500 cursor-pointer",
    }
    : {
      className: "group relative bg-[var(--color-surface)] border border-white/[0.08] dark:border-white/[0.06] rounded-xl p-[var(--space-lg)] flex flex-col overflow-hidden transition-all duration-500",
    };

  return (
    <CardWrapper
      {...cardProps}
      style={{ boxShadow: "var(--shadow-soft)" }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
            y: -12,
            scale: 1.03,
            boxShadow: "0 40px 100px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.35)",
            transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
          }
      }
    >
      {/* Magical illuminated border glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%)',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {/* Premium light sweep effect on hover - MORE VISIBLE */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.18] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.22] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none rounded-xl" />
      {/* Project visual - video or image with subtle zoom on hover */}
      <div
        className={`relative mb-[var(--space-md)] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] overflow-hidden
          ${isBanner ? "aspect-video" : "aspect-square"}
        `}
      >
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.08]"
          />
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className={`transition-transform duration-600 ease-out group-hover:scale-[1.12] ${isBanner
              ? "object-cover"
              : "object-contain p-4"
              }`}
            sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 768px) calc(50vw - 2rem), 400px"
            quality={75}
          />
        )}
      </div>

      <h3 className="text-[var(--font-size-xl)] font-bold mb-[var(--space-xs)]">
        <WordReveal stagger={0.05} delay={0.1}>
          {project.title}
        </WordReveal>
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

      {/* Link indicator - External or GitHub */}
      {(project.externalUrl || project.githubUrl) && (
        <div className="inline-flex items-center gap-2 text-[var(--font-size-sm)] text-[var(--color-muted-light)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {project.externalUrl ? (
            /* Globe icon for external/live sites */
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          ) : (
            /* GitHub icon */
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          )}
          <span>{project.externalUrl ? "View Live Site" : "View Repository"}</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      )}
    </CardWrapper>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work and experiments">
      <div className="flex flex-col gap-[var(--space-lg)]">
        {/* Row 1: VÉRA (featured, full width) */}
        <Reveal>
          <ProjectCard project={vera} />
        </Reveal>

        {/* Row 2: EYLA (full width, banner fills container) */}
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
