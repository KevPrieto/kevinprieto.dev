interface StatCardProps {
  value: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function StatCard({ value, label, variant = "primary" }: StatCardProps) {
  const styles = variant === "primary"
    ? "glass-button"
    : "glass border-white/30";

  return (
    <div
      className={`${styles} rounded-xl px-[var(--space-md)] py-[var(--space-sm)] inline-flex flex-col hover-scale text-white`}
    >
      <span className="text-[var(--font-size-2xl)] font-bold leading-none">
        {value}
      </span>
      <span className="text-[var(--font-size-sm)] mt-1 opacity-90">
        {label}
      </span>
    </div>
  );
}
