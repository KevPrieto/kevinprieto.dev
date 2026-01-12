import { Container } from "./Container";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-[var(--space-2xl)] relative">
      <Container>
        <div className="mb-[var(--space-xl)]">
          <h2 className="text-[var(--font-size-4xl)] font-bold mb-[var(--space-sm)] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[var(--font-size-xl)] text-[var(--color-muted-light)] font-light">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
