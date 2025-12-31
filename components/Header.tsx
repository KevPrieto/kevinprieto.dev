import { Container } from "./Container";

export function Header() {
  return (
    <header className="py-[var(--space-md)]">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Navigation links will go here */}
        </nav>
      </Container>
    </header>
  );
}
