"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Reveal, WordReveal } from "./motion";
import { useMotion } from "./motion";

export function AwardsSection() {
  const { shouldReduceMotion } = useMotion();

  return (
    <Section id="awards" title="Recognition" subtitle="Selected achievements">
      <div className="flex flex-col gap-[var(--space-xl)]">
        {/* Main Award Card */}
        <Reveal delay={0.1}>
          <motion.div
            className="group relative bg-[var(--color-surface)] border border-white/[0.08] dark:border-white/[0.06] rounded-2xl p-[var(--space-lg)] overflow-hidden"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -6,
                    boxShadow: "0 28px 70px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  }
            }
          >
            {/* Light sweep effect - MORE VISIBLE */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 ease-out pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-[var(--space-lg)] items-start">
              {/* Certificate Image */}
              <div className="relative w-full lg:w-[400px] xl:w-[480px] aspect-[4/3] rounded-xl overflow-hidden border border-[var(--color-border)]/30 flex-shrink-0">
                <Image
                  src="/content/certificate/cert.jpg"
                  alt="Innovation Award Certificate"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  quality={90}
                />
              </div>

              {/* Award Details */}
              <div className="flex-1 space-y-[var(--space-md)]">
                <div className="space-y-[var(--space-xs)]">
                  <span className="text-[var(--font-size-xs)] font-medium text-[var(--color-muted-light)] uppercase tracking-wide">
                    2024
                  </span>
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight">
                    <WordReveal stagger={0.04} delay={0}>
                      Innovation Award
                    </WordReveal>
                  </h3>
                </div>

                <p className="text-[var(--font-size-base)] text-[var(--color-muted-light)] leading-relaxed">
                  Recognized for demonstrating initiative, creative problem-solving, and impactful contributions
                  to technical projects. This recognition reflects a commitment to building systems that matter.
                </p>

                {/* LinkedIn Link */}
                <motion.a
                  href="https://www.linkedin.com/posts/kevin-prieto-developer_durante-mis-pr%C3%A1cticas-universitarias-en-activity-7278824918698528768-RfDw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--font-size-sm)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] transition-colors duration-200"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { x: 6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>View announcement</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
