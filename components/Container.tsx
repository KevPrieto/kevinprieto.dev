interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[var(--content-width)] px-[var(--content-padding)]">
      {children}
    </div>
  );
}
