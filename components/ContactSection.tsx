import { Section } from "./Section";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

const socialPlatforms = [
  { name: "GitHub", handle: "@placeholder", icon: GitHubIcon },
  { name: "LinkedIn", handle: "@placeholder", icon: LinkedInIcon },
  { name: "Twitter", handle: "@placeholder", icon: XIcon },
];

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" subtitle="Get in touch">
      {/* Wide container wrapper */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-[var(--space-xl)] lg:gap-[var(--space-2xl)]">
          {/* Contact Form - Primary Visual Element (60%) */}
          <div
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-[var(--space-xl)] lg:p-[var(--space-2xl)]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
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
                  rows={5}
                  placeholder="Your message..."
                  className="w-full resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3.5 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info - Supporting Column (40%) */}
          <div className="space-y-[var(--space-md)]">
            <div
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-lg)]"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <h3 className="text-[var(--font-size-lg)] font-bold mb-[var(--space-xs)]">
                Direct Contact
              </h3>
              <p className="text-[var(--font-size-sm)] text-[var(--color-muted-light)] mb-[var(--space-sm)]">
                Prefer a direct line? Reach out via email.
              </p>
              <p className="text-[var(--font-size-sm)] text-[var(--color-accent)] font-medium">
                email@placeholder.dev
              </p>
            </div>

            <div className="space-y-[var(--space-sm)]">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={platform.name}
                    className="flex items-center justify-between bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-[var(--space-md)]"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-[var(--color-muted-light)]" />
                      <span className="text-[var(--font-size-sm)] font-medium">{platform.name}</span>
                    </div>
                    <span className="text-[var(--color-muted-light)] text-[var(--font-size-xs)]">
                      {platform.handle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
