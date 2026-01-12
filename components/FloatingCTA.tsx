"use client";

import { motion } from "framer-motion";
import { useMotion } from "./motion";

interface FloatingCTAProps {
  onClick: () => void;
}

export function FloatingCTA({ onClick }: FloatingCTAProps) {
  const { shouldReduceMotion } = useMotion();

  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 md:bottom-8 md:right-8 sm:bottom-6 sm:right-6 z-50 bg-[var(--color-surface)] text-[var(--color-fg)] border border-[var(--color-border)] px-6 py-3 sm:px-4 sm:py-2 rounded-full font-medium text-[var(--font-size-sm)] sm:text-[var(--font-size-xs)] inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors duration-200"
      style={{ boxShadow: "var(--shadow-elevated)" }}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -2,
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
              transition: { duration: 0.2 },
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      aria-label="Get in touch via Calendly"
    >
      <span>Get in touch</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        <path
          d="M6 3L11 8L6 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
