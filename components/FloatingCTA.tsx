"use client";

import { motion } from "framer-motion";
import { useMotion } from "./motion";

export function FloatingCTA() {
  const { shouldReduceMotion } = useMotion();

  return (
    <motion.a
      href="https://calendly.com/kgps1003/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="glass fixed top-20 right-6 md:top-24 md:right-10 z-40 group relative px-8 py-4 rounded-full text-[var(--color-fg)] font-semibold text-[var(--font-size-base)] inline-flex items-center gap-3 overflow-hidden transition-all duration-300"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              scale: 1.05,
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3 },
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
      aria-label="Get in touch via Calendly"
    >
      {/* iOS-style shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />

      {/* Inner glow highlight */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* Button content */}
      <span className="relative z-10">Get in touch</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
