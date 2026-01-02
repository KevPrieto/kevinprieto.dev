import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" subtitle="Get in touch">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-[var(--space-xl)]">
        {/* Contact Form */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-xl)] lg:px-[var(--space-2xl)]">
          <h3 className="text-[var(--font-size-2xl)] font-bold mb-[var(--space-lg)]">
            Send a message
          </h3>
          <form className="space-y-[var(--space-md)]">
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
                placeholder="Your name"
                className="w-full"
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
                placeholder="your@email.com"
                className="w-full"
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
                rows={4}
                placeholder="Your message..."
                className="w-full resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-[var(--space-md)]">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)]">
            <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--space-sm)]">
              Direct Contact
            </h3>
            <p className="text-[var(--color-muted-light)] mb-[var(--space-md)]">
              Prefer a direct line? Reach out via email.
            </p>
            <p className="text-[var(--color-accent)] font-medium">
              email@placeholder.dev
            </p>
          </div>

          <div className="space-y-[var(--space-sm)]">
            {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
              <div
                key={platform}
                className="flex items-center justify-between bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-md)]"
              >
                <span className="font-bold">{platform}</span>
                <span className="text-[var(--color-muted-light)] text-[var(--font-size-sm)]">
                  @placeholder
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
