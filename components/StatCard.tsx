interface StatCardProps {
  value: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="glass rounded-xl px-[var(--space-md)] py-[var(--space-sm)] inline-flex flex-col hover-scale">
      <span className="text-[var(--font-size-2xl)] font-bold leading-none text-[var(--color-fg)]">
        {value}
      </span>
      <span className="text-[var(--font-size-sm)] mt-1 text-[var(--color-muted-light)]">
        {label}
      </span>
    </div>
  );
}
