"use client";

import { motion } from "framer-motion";
import { useMotion } from "./motion";

interface StatCardProps {
  value: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function StatCard({ value, label }: StatCardProps) {
  const { shouldReduceMotion } = useMotion();

  return (
    <motion.div
      className="group relative glass rounded-xl px-4 sm:px-[var(--space-md)] py-2 sm:py-[var(--space-sm)] inline-flex flex-col overflow-hidden"
      whileHover={shouldReduceMotion ? {} : {
        scale: 1.12,
        y: -8,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
      }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
    >
      {/* Light sweep on hover - more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.20] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-out pointer-events-none" />
      <span className="relative text-[1.5rem] sm:text-[var(--font-size-2xl)] font-bold leading-none text-[var(--color-fg)]">
        {value}
      </span>
      <span className="relative text-[0.875rem] sm:text-[var(--font-size-sm)] mt-1 text-[var(--color-muted-light)]">
        {label}
      </span>
    </motion.div>
  );
}
