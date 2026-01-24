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
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 35px 90px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                  }
            }
          >
            {/* Light sweep effect - MORE VISIBLE */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.20] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-[var(--space-lg)] items-start">
              {/* Certificate Image */}
              <div className="relative w-full lg:w-[400px] xl:w-[480px] aspect-[4/3] rounded-xl overflow-hidden border border-[var(--color-border)]/30 flex-shrink-0">
                <Image
                  src="/content/certificate/cert.jpg"
                  alt="Innovation Award Certificate"
                  fill
                  className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.10]"
                  sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 90vw, 480px"
                  quality={90}
                />
              </div>

              {/* Award Details */}
              <div className="flex-1 space-y-[var(--space-md)]">
                <div className="space-y-[var(--space-xs)]">
                  <span className="text-[var(--font-size-xs)] font-medium text-[var(--color-muted-light)] uppercase tracking-wide">
                    2025
                  </span>
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight">
                    <WordReveal stagger={0.04} delay={0}>
                      Innovation Award
                    </WordReveal>
                  </h3>
                </div>

                <p className="text-[var(--font-size-base)] text-[var(--color-muted-light)] leading-relaxed">
                  Awarded at the PepsiCo x Evolve Hackathon for developing Cheetos Active — a complete rebranding concept created in one hour. Led a team through an intense creative challenge that reinforced a core belief: building innovative solutions that push boundaries and create what doesn&apos;t exist yet.
                </p>

                {/* LinkedIn Link */}
                <motion.a
                  href="https://www.linkedin.com/posts/kevin-prieto-developer_innovaciaejn-tecnologaeda-creatividad-activity-7394432939041656833-AXEQ?utm_source=share&utm_medium=member_ios&rcm=ACoAADT0-ogBwOyYTzmJqxzWrNURr1IXkH6Oq3U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--font-size-sm)] text-[var(--color-muted-light)] hover:text-[var(--color-fg)] transition-colors duration-200"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { x: 10, scale: 1.05, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }
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

        {/* Horizontal Image - LinkedIn Post Visual */}
        <Reveal delay={0.2}>
          <motion.a
            href="https://www.linkedin.com/posts/kevin-prieto-developer_innovaciaejn-tecnologaeda-creatividad-activity-7394432939041656833-AXEQ?utm_source=share&utm_medium=member_ios&rcm=ACoAADT0-ogBwOyYTzmJqxzWrNURr1IXkH6Oq3U"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.03, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Image
              src="/content/about-pic/DSC03127-2.png"
              alt="Kevin Prieto - Innovation and Creativity"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              quality={90}
              priority={false}
            />
            {/* Border on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-white/[0.12] dark:group-hover:border-white/[0.10] rounded-2xl transition-colors duration-400 pointer-events-none" />
            {/* Light sweep on hover - MORE VISIBLE */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.22] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
          </motion.a>
        </Reveal>
      </div>
    </Section>
  );
}
