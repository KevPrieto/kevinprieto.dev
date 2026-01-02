import { Section } from "./Section";
import { AnimateOnScroll } from "./AnimateOnScroll";
import {
  JavaIcon,
  MavenIcon,
  SpringBootIcon,
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  PythonIcon,
  BashIcon,
  PostgreSQLIcon,
  CSharpIcon,
  KotlinIcon,
  SwiftIcon,
  PowerShellIcon,
  TerminalIcon,
  GitIcon,
  GitHubToolIcon,
  GitLabIcon,
  PowerBIIcon,
  ExcelIcon,
  SonarQubeIcon,
  JiraIcon,
  PostmanIcon,
  ChatGPTIcon,
  ClaudeIcon,
} from "./ToolIcons";

// Tool categories with visual hierarchy
const toolCategories = {
  primary: {
    label: "Core Backend & JVM",
    tools: [
      { name: "Java", icon: JavaIcon },
      { name: "Maven", icon: MavenIcon },
      { name: "Spring Boot", icon: SpringBootIcon },
    ],
  },
  standard: [
    {
      label: "Web & Frontend",
      tools: [
        { name: "Next.js", icon: NextjsIcon },
        { name: "React", icon: ReactIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
      ],
    },
    {
      label: "Scripting & Automation",
      tools: [
        { name: "Bash scripting", icon: BashIcon },
        { name: "Python", icon: PythonIcon },
      ],
    },
    {
      label: "Databases",
      tools: [{ name: "PostgreSQL", icon: PostgreSQLIcon }],
    },
    {
      label: "Languages",
      tools: [
        { name: "Python", icon: PythonIcon },
        { name: "C#", icon: CSharpIcon },
        { name: "Kotlin", icon: KotlinIcon },
        { name: "Swift", icon: SwiftIcon },
      ],
    },
    {
      label: "DevOps / Terminals",
      tools: [
        { name: "Bash", icon: BashIcon },
        { name: "cmd", icon: TerminalIcon },
        { name: "PowerShell", icon: PowerShellIcon },
      ],
    },
    {
      label: "Version Control",
      tools: [
        { name: "Git", icon: GitIcon },
        { name: "GitHub", icon: GitHubToolIcon },
        { name: "GitLab", icon: GitLabIcon },
      ],
    },
  ],
  supporting: [
    {
      label: "Data / Analytics",
      tools: [
        { name: "Power BI", icon: PowerBIIcon },
        { name: "Excel", icon: ExcelIcon },
      ],
    },
    {
      label: "Quality / Delivery",
      tools: [
        { name: "SonarQube", icon: SonarQubeIcon },
        { name: "Jira", icon: JiraIcon },
        { name: "Postman", icon: PostmanIcon },
      ],
    },
  ],
  auxiliary: {
    label: "AI Tools",
    tools: [
      { name: "ChatGPT Pro", icon: ChatGPTIcon },
      { name: "Claude Pro", icon: ClaudeIcon },
    ],
  },
};

interface ToolItemProps {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: "lg" | "md" | "sm";
}

function ToolItem({ name, icon: Icon, size = "md" }: ToolItemProps) {
  const sizeClasses = {
    lg: "w-14 h-14",
    md: "w-11 h-11",
    sm: "w-9 h-9",
  };

  const iconSizes = {
    lg: 32,
    md: 24,
    sm: 20,
  };

  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-fg)] group-hover:border-[var(--color-accent)]/40 group-hover:bg-[var(--color-surface)] transition-all duration-200`}
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <Icon size={iconSizes[size]} />
      </div>
      <span className="text-[var(--font-size-xs)] text-[var(--color-muted-light)] text-center leading-tight max-w-[80px]">
        {name}
      </span>
    </div>
  );
}

interface CategoryGroupProps {
  label: string;
  tools: Array<{
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }>;
  variant?: "primary" | "standard" | "supporting" | "auxiliary";
}

function CategoryGroup({ label, tools, variant = "standard" }: CategoryGroupProps) {
  const isPrimary = variant === "primary";
  const isAuxiliary = variant === "auxiliary";

  return (
    <div
      className={`${
        isPrimary
          ? "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-lg)]"
          : ""
      }`}
      style={isPrimary ? { boxShadow: "var(--shadow-soft)" } : undefined}
    >
      <p
        className={`text-[var(--font-size-xs)] font-medium uppercase tracking-wider mb-[var(--space-sm)] ${
          isAuxiliary ? "text-[var(--color-muted)]" : "text-[var(--color-muted-light)]"
        }`}
      >
        {label}
      </p>
      <div className={`flex flex-wrap gap-[var(--space-md)] ${isPrimary ? "gap-[var(--space-lg)]" : ""}`}>
        {tools.map((tool) => (
          <ToolItem
            key={tool.name}
            name={tool.name}
            icon={tool.icon}
            size={isPrimary ? "lg" : isAuxiliary ? "sm" : "md"}
          />
        ))}
      </div>
    </div>
  );
}

export function ToolsSection() {
  return (
    <Section id="tools" title="Tools" subtitle="Technologies and platforms I work with">
      <div className="space-y-[var(--space-xl)]">
        {/* Primary Category - Core Backend & JVM (Full Width, Prominent) */}
        <AnimateOnScroll>
          <CategoryGroup
            label={toolCategories.primary.label}
            tools={toolCategories.primary.tools}
            variant="primary"
          />
        </AnimateOnScroll>

        {/* Standard Categories - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[var(--space-xl)] gap-y-[var(--space-lg)]">
          {toolCategories.standard.map((category, index) => (
            <AnimateOnScroll key={category.label} delay={index * 50}>
              <CategoryGroup
                label={category.label}
                tools={category.tools}
                variant="standard"
              />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Supporting Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[var(--space-xl)] gap-y-[var(--space-lg)]">
          {toolCategories.supporting.map((category, index) => (
            <AnimateOnScroll key={category.label} delay={index * 50}>
              <CategoryGroup
                label={category.label}
                tools={category.tools}
                variant="supporting"
              />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Auxiliary Category - AI Tools (Subdued, Last) */}
        <AnimateOnScroll delay={100}>
          <div className="pt-[var(--space-md)] border-t border-[var(--color-border)]">
            <CategoryGroup
              label={toolCategories.auxiliary.label}
              tools={toolCategories.auxiliary.tools}
              variant="auxiliary"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
