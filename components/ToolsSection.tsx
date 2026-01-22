"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "./Section";
import { Reveal, StaggerContainer, StaggerItem } from "./motion";
import { useMotion } from "./motion";

const logos: Record<string, string> = {
  java: "/logos/java.svg",
  maven: "/logos/maven.svg",
  spring: "/logos/spring.svg",
  nextjs: "/logos/nextjs.svg",
  react: "/logos/react.svg",
  typescript: "/logos/typescript.svg",
  python: "/logos/python.svg",
  bash: "/logos/bash.svg",
  postgresql: "/logos/postgresql.svg",
  csharp: "/logos/csharp.svg",
  kotlin: "/logos/kotlin.svg",
  swift: "/logos/swift.svg",
  "windows-terminal": "/logos/windows-terminal.svg",
  powershell: "/logos/powershell.svg",
  git: "/logos/git.svg",
  github: "/logos/github.svg",
  gitlab: "/logos/gitlab.svg",
  antigravity: "/logos/antigravity.svg",
  powerbi: "/logos/powerbi.svg",
  excel: "/logos/excel.svg",
  sonarqube: "/logos/sonarqube.svg",
  jira: "/logos/jira.svg",
  postman: "/logos/postman.svg",
  openai: "/logos/openai.svg",
  claude: "/logos/claude.svg",
  vercel: "/logos/vercel.svg",
  "android-studio": "/logos/android-studio.svg",
  unity: "/logos/unity.svg",
  "github-copilot": "/logos/github-copilot.svg",
  cursor: "/logos/cursor.svg",
  opencode: "/logos/opencode.svg",
};

const toolCategories = {
  primary: {
    label: "Core Backend & JVM",
    tools: [
      { name: "Java", logo: "java" },
      { name: "Maven", logo: "maven" },
      { name: "Spring Boot", logo: "spring" },
    ],
  },
  standard: [
    {
      label: "Web & Frontend",
      tools: [
        { name: "Next.js", logo: "nextjs" },
        { name: "React", logo: "react" },
        { name: "TypeScript", logo: "typescript" },
        { name: "Vercel", logo: "vercel" },
      ],
    },
    {
      label: "Scripting & Automation",
      tools: [
        { name: "Bash", logo: "bash" },
        { name: "Python", logo: "python" },
      ],
    },
    {
      label: "Databases",
      tools: [{ name: "PostgreSQL", logo: "postgresql" }],
    },
    {
      label: "Languages",
      tools: [
        { name: "Python", logo: "python" },
        { name: "C#", logo: "csharp" },
        { name: "Kotlin", logo: "kotlin" },
        { name: "Swift", logo: "swift" },
      ],
    },
    {
      label: "Development Environments",
      tools: [
        { name: "Android Studio", logo: "android-studio" },
        { name: "Unity", logo: "unity" },
      ],
    },
    {
      label: "DevOps / Terminals",
      tools: [
        { name: "Bash", logo: "bash" },
        { name: "cmd", logo: "windows-terminal" },
        { name: "PowerShell", logo: "powershell" },
      ],
    },
    {
      label: "Version Control",
      tools: [
        { name: "Git", logo: "git" },
        { name: "GitHub", logo: "github" },
        { name: "GitLab", logo: "gitlab" },
      ],
    },
  ],
  supporting: [
    {
      label: "Data / Analytics",
      tools: [
        { name: "Power BI", logo: "powerbi" },
        { name: "Excel", logo: "excel" },
      ],
    },
    {
      label: "Quality / Delivery",
      tools: [
        { name: "SonarQube", logo: "sonarqube" },
        { name: "Jira", logo: "jira" },
        { name: "Postman", logo: "postman" },
      ],
    },
  ],
  auxiliary: {
    label: "AI Tools",
    tools: [
      { name: "ChatGPT", logo: "openai" },
      { name: "Claude", logo: "claude" },
      { name: "GitHub Copilot", logo: "github-copilot" },
      { name: "Cursor", logo: "cursor" },
      { name: "OpenCode", logo: "opencode" },
      { name: "Antigravity", logo: "antigravity" },
    ],
  },
};

interface ToolItemProps {
  name: string;
  logo: string;
  size?: "lg" | "md" | "sm";
}

function ToolItem({ name, logo, size = "md" }: ToolItemProps) {
  const { shouldReduceMotion } = useMotion();
  const containerSizes = {
    lg: "w-16 h-16",
    md: "w-12 h-12",
    sm: "w-10 h-10",
  };

  const iconSizes = {
    lg: 36,
    md: 28,
    sm: 22,
  };

  const logoSrc = logos[logo];

  return (
    <motion.div
      className="group flex flex-col items-center gap-3"
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
    >
      <motion.div
        className={`${containerSizes[size]} rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center transition-colors duration-200`}
        style={{ boxShadow: "var(--shadow-soft)" }}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                borderColor: "rgba(255, 255, 255, 0.15)",
                backgroundColor: "var(--color-surface)",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                scale: 1.05,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }
        }
      >
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={name}
            width={iconSizes[size]}
            height={iconSizes[size]}
            className="object-contain"
          />
        )}
      </motion.div>
      <span className="text-[var(--font-size-xs)] text-[var(--color-muted-light)] text-center leading-tight max-w-[80px]">
        {name}
      </span>
    </motion.div>
  );
}

interface CategoryGroupProps {
  label: string;
  tools: Array<{ name: string; logo: string }>;
  variant?: "primary" | "standard" | "supporting" | "auxiliary";
}

function CategoryGroup({ label, tools, variant = "standard" }: CategoryGroupProps) {
  const isPrimary = variant === "primary";
  const isAuxiliary = variant === "auxiliary";

  return (
    <div
      className={`${
        isPrimary
          ? "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-[var(--space-xl)]"
          : ""
      }`}
      style={isPrimary ? { boxShadow: "var(--shadow-soft)" } : undefined}
    >
      <p
        className={`text-[var(--font-size-xs)] font-medium uppercase tracking-wider mb-[var(--space-md)] ${
          isAuxiliary ? "text-[var(--color-muted)]" : "text-[var(--color-muted-light)]"
        }`}
      >
        {label}
      </p>
      <StaggerContainer
        staggerDelay={0.05}
        className={`flex flex-wrap ${
          isPrimary ? "gap-[var(--space-xl)] justify-center md:justify-start" : "gap-[var(--space-lg)]"
        }`}
      >
        {tools.map((tool, index) => (
          <StaggerItem key={`${tool.logo}-${index}`}>
            <ToolItem
              name={tool.name}
              logo={tool.logo}
              size={isPrimary ? "lg" : isAuxiliary ? "sm" : "md"}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function ToolsSection() {
  return (
    <Section id="tools" title="Tools" subtitle="Technologies and platforms I work with">
      <div className="space-y-[var(--space-3xl)]">
        {/* Primary Category - Core Backend & JVM */}
        <Reveal>
          <CategoryGroup
            label={toolCategories.primary.label}
            tools={toolCategories.primary.tools}
            variant="primary"
          />
        </Reveal>

        {/* Standard Categories - Grid Layout */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[var(--space-2xl)] gap-y-[var(--space-xl)]"
        >
          {toolCategories.standard.map((category) => (
            <StaggerItem key={category.label}>
              <div className="min-h-[120px]">
                <CategoryGroup
                  label={category.label}
                  tools={category.tools}
                  variant="standard"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Supporting Categories */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-[var(--space-2xl)] gap-y-[var(--space-xl)]"
        >
          {toolCategories.supporting.map((category) => (
            <StaggerItem key={category.label}>
              <CategoryGroup
                label={category.label}
                tools={category.tools}
                variant="supporting"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Auxiliary Category - AI Tools */}
        <Reveal delay={0.1}>
          <div className="pt-[var(--space-lg)] border-t border-[var(--color-border)]/50">
            <CategoryGroup
              label={toolCategories.auxiliary.label}
              tools={toolCategories.auxiliary.tools}
              variant="auxiliary"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
