# This is my personal website.

<img width="1146" height="879" alt="image" src="https://github.com/user-attachments/assets/fc3de048-9273-4f0e-ab81-9eac06726aa2" />

Its purpose is to clearly communicate who I am, how I think, what I build  and the kind of systems I focus on.

## Professional intent

This website is built with a clear priority order:

1. **Getting noticed** by technical teams and recruiters
2. **Presenting real projects** with architectural intent
3. **Building a professional audience** through building in public
4. **Providing a clean, professional contact channel**

---

## Positioning

I am a software engineer with a backend-oriented mindset.

I focus on:

- system design over surface-level features
- clarity over cleverness
- maintainability over novelty
- shipping working products over demos

The site reflects the same principles I apply to software:
intentional structure, minimal abstraction, and long-term thinking.

---

## Technology stack (intentional by design)

The stack is intentionally conservative, explicit, and industry-aligned:

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui (used selectively, no heavy UI kits)
- **Motion:** Framer Motion (subtle, optional, reduced-motion aware)
- **Scrolling:** Lenis
- **Hosting:** Vercel

There is **no traditional backend**.

### Backend rationale

This site does not require:
- user accounts
- business logic
- stateful workflows
- databases
- background jobs

Adding a backend would introduce complexity without value.

The only server-side logic is a minimal serverless function used to send emails from the contact form.

This decision is intentional:
- reduced maintenance
- reduced attack surface
- reduced cognitive overhead
- higher signal-to-noise ratio

---

## Content philosophy

- English only
- Static, version-controlled content
- No trackers by default
- No cookies unless strictly required
- No vanity analytics
- No marketing copy

If something is on the site, it has a reason to be there.

---

## Projects

The site highlights **real systems**, not experiments.

### Flagship project: EYLA

EYLA is a long-term system focused on:
- roadmap orientation instead of task lists
- deterministic structure instead of AI-driven ambiguity
- preserving user intent over time
- clean architecture and backend-first thinking

Other projects include:
- Java desktop applications
- backend system design work
- automation and data tooling
- structured game development projects

Each project exists to demonstrate how I think, not just what I can build.

---

## Accessibility & quality standards

Basic quality is non-negotiable:

- semantic HTML
- correct button and link usage
- labeled form inputs
- keyboard navigation
- reduced-motion support

Animations are never required to understand content.
Motion exists to support perception, not to attract attention.

---

## Local development

```bash
npm install
npm run dev
