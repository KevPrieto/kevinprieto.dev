interface StatCardProps {
  value: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="group relative glass rounded-xl px-4 sm:px-[var(--space-md)] py-2 sm:py-[var(--space-sm)] inline-flex flex-col overflow-hidden transition-all duration-400 hover:scale-[1.06] hover:-translate-y-1">
      {/* Light sweep on hover - more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none" />
      <span className="relative text-[1.5rem] sm:text-[var(--font-size-2xl)] font-bold leading-none text-[var(--color-fg)]">
        {value}
      </span>
      <span className="relative text-[0.875rem] sm:text-[var(--font-size-sm)] mt-1 text-[var(--color-muted-light)]">
        {label}
      </span>
    </div>
  );
}
