"use client";

import { useState, FormEvent } from "react";
import { Section } from "./Section";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const socialPlatforms = [
  { name: "GitHub", handle: "@KevPrieto", icon: GitHubIcon, href: "https://github.com/KevPrieto" },
  { name: "LinkedIn", handle: "kevin-prieto-developer", icon: LinkedInIcon, href: "https://www.linkedin.com/in/kevin-prieto-developer/" },
  { name: "X", handle: "@ByKevin12", icon: XIcon, href: "https://x.com/ByKevin12" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

      // Reset success message after 5 seconds
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
    <Section id="contact" title="Contact" subtitle="Get in touch">
      {/* Wide container wrapper */}
      <div className="max-w-[1280px] mx-auto px-[var(--space-md)]">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-[var(--space-xl)] lg:gap-[var(--space-2xl)]">
          {/* Contact Form - Primary Visual Element (57%) */}
          <div
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-xl)] lg:p-[var(--space-2xl)]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h3 className="text-[var(--font-size-2xl)] font-bold mb-[var(--space-lg)]">
              Send a message
            </h3>

            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-[var(--space-md)] p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-500 text-[var(--font-size-sm)]">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-[var(--space-md)] p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-500 text-[var(--font-size-sm)]">
                  {errorMessage}
                </p>
              </div>
            )}

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
              <button
                type="submit"
                disabled={status === 'loading'}
                className="glass-button w-full text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
              </button>
            </form>
          </div>

          {/* Contact Info - Supporting Column (43%) */}
          <div className="space-y-[var(--space-md)]">
            <div className="space-y-3">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-md)] hover:border-[var(--color-accent)]/40 transition-all duration-200"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-[var(--color-muted-light)]" />
                      <span className="text-[var(--font-size-sm)] font-medium">{platform.name}</span>
                    </div>
                    <span className="text-[var(--color-muted-light)] text-[var(--font-size-xs)]">
                      {platform.handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
