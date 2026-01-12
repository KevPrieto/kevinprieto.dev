"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "./motion";
import { useMotion } from "./motion";

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { shouldReduceMotion } = useMotion();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-[var(--space-3xl)] relative">
      <Container>
        <div className="max-w-[42rem] mx-auto text-center">
          <Reveal delay={0.1}>
            <h2 className="text-[var(--font-size-4xl)] font-bold mb-[var(--space-xl)] tracking-tight text-[var(--color-fg)]">
              Or send a message
            </h2>
          </Reveal>
        </div>

        <div className="max-w-[32rem] mx-auto">
          <Reveal delay={0.2}>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-xl)]" style={{ boxShadow: "var(--shadow-soft)" }}>

              {/* Success Message */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="mb-[var(--space-md)] p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-green-500 text-[var(--font-size-sm)]">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    className="mb-[var(--space-md)] p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-red-500 text-[var(--font-size-sm)]">
                      {errorMessage}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-[var(--space-md)]">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[var(--font-size-sm)] text-[var(--color-muted-light)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[var(--font-size-sm)] text-[var(--color-muted-light)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[var(--font-size-sm)] text-[var(--color-muted-light)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full resize-none"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[var(--color-fg)] text-[var(--color-bg)] font-medium py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-accent)] transition-colors duration-200"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
