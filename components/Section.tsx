import { Container } from "./Container";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-[var(--space-3xl)] relative">
      <Container>
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[var(--font-size-4xl)] font-bold mb-[var(--space-sm)] tracking-tight text-[var(--color-fg)]">
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
