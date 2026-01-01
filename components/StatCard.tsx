interface StatCardProps {
  value: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function StatCard({ value, label, variant = "primary" }: StatCardProps) {
  const styles = variant === "primary"
    ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
    : "bg-[var(--color-accent-secondary)] text-[var(--color-bg)]";

  return (
    <div
      className={`${styles} rounded-xl px-[var(--space-md)] py-[var(--space-sm)] inline-flex flex-col hover-scale`}
    >
      <span className="text-[var(--font-size-2xl)] font-bold leading-none">
        {value}
      </span>
      <span className="text-[var(--font-size-sm)] opacity-80 mt-1">
        {label}
      </span>
    </div>
  );
}
