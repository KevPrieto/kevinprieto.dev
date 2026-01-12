# Visual Overhaul Plan: Approaching itsjay.us Aesthetic

## Pre-Flight Check: PASSED

**Layout structure verified** (`app/layout.tsx:36-42`):
```tsx
<ThemeProvider>
  <MotionProvider>
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </MotionProvider>
</ThemeProvider>
```
No duplication. Structure is correct.

---

## Executive Summary

Transform kevprieto.com from a "solid portfolio" to a **premium, cinematic engineer showcase** that communicates depth and seriousness in < 30 seconds. EYLA must become the undeniable centerpiece.

---

## Section 1: HERO OVERHAUL

### Current State
- Multilingual greeting carousel (8 languages, rotates every 2.8s)
- Two-column layout: text left, profile card right
- Typography: `clamp(2.5rem,8vw,5rem)`
- Stat cards: "+4 Projects", "2+ Years", "∞ Curiosity"

### Problems
1. Greeting carousel dilutes focus (English-only mandate)
2. Scale feels modest, not commanding
3. Profile card competes with message
4. Stats feel generic

### Changes

| Element | Before | After |
|---------|--------|-------|
| **Greeting carousel** | 8 languages rotating | REMOVE entirely |
| **Hero tagline** | "Building systems. Driving direction." | Keep, but increase scale dramatically |
| **Typography size** | `clamp(2.5rem,8vw,5rem)` | `clamp(3.5rem,10vw,7rem)` |
| **Layout** | Side-by-side (text + profile card) | **Full-width hero** with profile below or integrated subtly |
| **Subtitle** | Small paragraph | Larger, more impactful single statement |
| **Stat cards** | 3 generic badges | Either REMOVE or redesign with meaningful content |
| **Motion** | Multiple stagger animations | Single, decisive reveal sequence |
| **Vertical space** | `min-h-[90vh]` | `min-h-[100vh]` for full-screen impact |

### Visual Target
- Hero fills viewport
- Name/tagline dominate
- Immediate clarity: "This is Kevin. He builds systems."

---

## Section 2: PROJECTS SECTION (CRITICAL)

### Current State
- EYLA: same card size as other projects, short description
- No GitHub links visible
- Flight Fare Optimizer: same visual weight as EYLA
- EYLA Mobile: listed as separate equal project

### Problems
1. EYLA is not differentiated
2. No repository links
3. Descriptions too brief for flagship project
4. Projects feel like a list, not a narrative

### Changes

#### EYLA (FLAGSHIP)

| Element | Before | After |
|---------|--------|-------|
| **Visual size** | Same as other cards | **2-3x larger**, potentially full-width |
| **Description** | 2 sentences | **5-7 sentences** covering: problem, philosophy, architecture, vision |
| **Presentation** | Card in grid | **Featured showcase section** with dedicated treatment |
| **Links** | None | GitHub icon links: eyla (main), eyla-mobile |
| **Tags** | Generic | More specific: "Determinism", "State Management", "Long-term Architecture" |

**New EYLA content block** (expanded narrative):
```
EYLA is a long-term system designed to preserve intent, structure, and continuity across projects and time.

**The Problem**: Most project management tools optimize for velocity, not clarity. They become noise machines that lose context over time.

**The Approach**: EYLA models projects as first-class entities with persistent state, evolvable roadmaps, and deterministic behavior. Instead of rigid workflows, it provides orientation—helping developers maintain focus on what matters.

**Architecture**: Built with a backend-first philosophy prioritizing explicit state, testable modules, and separation of concerns. Designed to evolve without breaking its own foundations.

**Vision**: A personal operating system for engineering work—not a task list, but a thinking environment that compounds rather than decays.
```

**GitHub Links** (mandatory, with icons):
- `github.com/KevPrieto/eyla`
- `github.com/KevPrieto/eyla-mobile`

#### Secondary Projects

| Project | Changes |
|---------|---------|
| **Flight Fare Optimizer** | Add GitHub link: `github.com/KevPrieto/Flight-Fare-Optimizer`, keep concise |
| **EYLA Mobile** | Demote to smaller mention OR integrate into EYLA section as "Mobile companion" |

### Layout Change
```
Before:
┌─────────────────────────────┐
│         EYLA (card)         │
├──────────────┬──────────────┤
│ Flight Fare  │ EYLA Mobile  │
└──────────────┴──────────────┘

After:
┌─────────────────────────────────────────┐
│                                         │
│            EYLA (FLAGSHIP)              │
│     Full narrative + dual links         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Other Projects (smaller, linked)       │
│  - Flight Fare Optimizer [GitHub]       │
│  - EYLA Mobile (companion mention)      │
│                                         │
└─────────────────────────────────────────┘
```

---

## Section 3: TOOLS SECTION

### Current State
Missing: Vercel, Android Studio, Kotlin (present but not prominent), C# (present), Unity

### Changes

| Action | Details |
|--------|---------|
| **Add Vercel** | Under "DevOps / Terminals" or new "Deployment" category |
| **Add Android Studio** | Under "Languages" or new "Mobile" category |
| **Add Unity** | New "Game Development" category or "Other" |
| **Ensure visible**: Kotlin, C# | Already present, verify prominence |

**New logos needed**:
- `vercel.svg`
- `android-studio.svg`
- `unity.svg`

These must match existing visual language (monochrome SVGs, consistent sizing).

---

## Section 4: MOTION & LAYOUT REFINEMENTS

### Motion Philosophy
**Before**: Motion everywhere (stagger on everything, hover on everything)
**After**: Motion as punctuation, not decoration

| Component | Current Motion | New Motion |
|-----------|----------------|------------|
| **Hero** | Multiple staggers | Single coordinated reveal |
| **Projects** | Hover lift on all | Subtle on secondary, none or minimal on EYLA |
| **Tools** | Stagger on each tool | Remove or reduce |
| **Sections** | `Reveal` wrapper on everything | Keep for section entrances, remove granular staggers |

### Layout Rhythm
- Increase `--space-2xl` for section separators
- Hero should breathe: full viewport height
- EYLA section should have extra padding to signal importance

---

## Section 5: TYPOGRAPHY BLOCK

### Current State
Large "DEVELOPER" background text, "SOFTWARE ENGINEER" foreground

### Changes
Consider removing or simplifying. This section may dilute rather than enhance.

**Option A**: Remove entirely (less is more)
**Option B**: Keep but reduce to subtle accent

---

## Section 6: HIGHLIGHTS SECTION

### Current State
Two cards with placeholder text ("Placeholder text about development philosophy")

### Changes
Either:
1. **Fill with real content** (philosophy, approach)
2. **Remove entirely** if content isn't ready

Placeholder text damages credibility.

---

## Files to Modify

| File | Changes |
|------|---------|
| `components/Hero.tsx` | Major overhaul: remove carousel, increase scale, simplify layout |
| `components/ProjectsSection.tsx` | EYLA flagship treatment, add GitHub links, restructure hierarchy |
| `components/ToolsSection.tsx` | Add Vercel, Android Studio, Unity |
| `public/logos/` | Add new SVG logos |
| `app/globals.css` | Potentially increase spacing variables |
| `components/TypographyBlock.tsx` | Remove or simplify |
| `components/HighlightsSection.tsx` | Remove placeholder or add real content |
| `components/Section.tsx` | Potentially increase title scale |

---

## What Will NOT Change

- Language: English only (maintained)
- Tone: calm, technical, reflective, serious
- Core project: EYLA remains central (now emphasized)
- Stack: Next.js, TypeScript, Tailwind, shadcn/ui
- Color palette: Violet/Indigo accent system
- Theme system: Dark/Light toggle
- Lenis smooth scrolling
- Framer Motion as animation library

---

## Success Criteria Checklist

After implementation:

- [ ] Hero feels **immediately stronger** (noticeable in 2 seconds)
- [ ] EYLA is **unmistakably the flagship** (visual dominance)
- [ ] GitHub links visible for EYLA (both repos), Flight Fare Optimizer
- [ ] Tools section includes: Vercel, Android Studio, Kotlin, C#, Unity
- [ ] No placeholder text remains
- [ ] Motion is purposeful, not decorative
- [ ] Site feels **heavier, calmer, more serious**
- [ ] A recruiter understands depth in < 30 seconds

---

## Execution Order

1. **Hero overhaul** (highest visual impact)
2. **Projects section restructure** (EYLA flagship)
3. **Tools section additions** (lower risk)
4. **Motion cleanup** (refinement)
5. **Remove/fix TypographyBlock and Highlights** (cleanup)

---

## Awaiting Approval

This plan is ready for review. Upon confirmation, execution will proceed with Sonnet 4.5 in incremental steps.
