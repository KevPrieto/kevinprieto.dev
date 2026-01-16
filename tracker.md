# Bug Fixes & Features Tracker

## Status Legend
- [ ] Pending
- [x] Completed

---

## CRITICAL BUGS

### 1. [x] Hero Profile Image Not Visible
- **File:** `components/Hero.tsx`
- **Fix:** Use explicit widths `w-[320px] sm:w-[380px] lg:w-[450px]`

### 2. [x] Download CV Button - White on White (Dark Mode)
- **File:** `components/Hero.tsx`
- **Fix:** Change to `bg-[var(--color-accent)] text-white`

### 3. [x] Hydration Error - div inside p
- **File:** `components/AboutSection.tsx`
- **Fix:** Change `motion.p` to `motion.div` (lines 17, 52)

### 4. [x] FloatingCTA Position - Move to Top Right
- **File:** `components/FloatingCTA.tsx`
- **Fix:** Change `bottom-8` to `top-24`

### 5. [x] YouTube URL Wrong
- **File:** `components/Hero.tsx`
- **Fix:** Change `@kevprs` to `@kevprieto`

---

## UI/UX IMPROVEMENTS

### 6. [x] Social Media Icons Too Small
- **File:** `components/Hero.tsx`
- **Fix:** Increase to `w-14 h-14` and `size={28}`

### 7. [x] Glass/Crystal iOS Style Not Visible
- **Files:** `app/globals.css`, `components/Header.tsx`
- **Fix:** Enhance blur to 24px, stronger opacity, saturation, inset highlights

### 8. [x] Replace Video Placeholder with Actual Video
- **File:** `components/AboutSection.tsx`
- **Fix:** Move video to public folder, embed `<video>` element

---

## PROGRESS

| # | Task | Status |
|---|------|--------|
| 1 | Hero Image | DONE |
| 2 | CV Button | DONE |
| 3 | Hydration Error | DONE |
| 4 | FloatingCTA Position | DONE |
| 5 | YouTube URL | DONE |
| 6 | Social Icons Size | DONE |
| 7 | Glass Effect | DONE |
| 8 | Video Embed | DONE |

**Completed: 8/8**

---

## ITERATION 2 - UI/UX REFINEMENTS (Jan 2026)

### 9. [x] Download CV Button - Crystal iOS Gray Glass Style
- **File:** `components/Hero.tsx`
- **Issue:** Button uses blue accent color (`bg-[var(--color-accent)]`)
- **Fix:** Changed to `glass` class with `text-[var(--color-fg)]`, matching navbar style

### 10. [x] Get in Touch Button - Crystal iOS Gray Glass Style
- **File:** `components/FloatingCTA.tsx`
- **Issue:** Button uses blue accent color (`bg-[var(--color-accent)]`)
- **Fix:** Changed to `glass` class with `text-[var(--color-fg)]`, removed blue glow effects

### 11. [x] Hero Section Visual Distribution
- **File:** `components/Hero.tsx`
- **Issue:** Image column too small (45%), needed more visual presence
- **Fix:**
  - Increased column width to 50%
  - Increased image sizes (500px on desktop)
  - Added decorative blur background gradient
  - Added subtle gradient overlay on image
  - Improved aspect ratio (4/5 on desktop)
  - Added subtle border for depth

### 12. [x] About Section Visual Distribution
- **File:** `components/AboutSection.tsx`
- **Issue:** Video squeezed side-by-side with text
- **Fix:**
  - Full-width cinematic video at top (aspect 21:9 / 2.5:1)
  - Text content reorganized into two-column layout below
  - Better visual hierarchy with video as hero element
  - Elevated shadow for more depth

---

## ITERATION 2 PROGRESS

| # | Task | Status |
|---|------|--------|
| 9 | Download CV Glass Style | DONE |
| 10 | Get in Touch Glass Style | DONE |
| 11 | Hero Visual Layout | DONE |
| 12 | About Visual Layout | DONE |

**Completed: 4/4**

---

## ITERATION 3 - FINAL POLISH (Jan 2026)

### 13. [x] FloatingCTA - Larger Glass Bubble, Top Corner
- **File:** `components/FloatingCTA.tsx`
- **Issue:** CTA was too small, felt like footer element
- **Fix:**
  - Increased padding: `px-8 py-4`
  - Larger text: `text-[var(--font-size-base)]`
  - Position confirmed at top: `top-20 right-6`
  - Enhanced box-shadow with inset highlights
  - Added inner glow gradient effect
  - Stronger hover animation (y: -6, scale: 1.05)

### 14. [x] Hero Profile Image - Significantly Larger
- **File:** `components/Hero.tsx`
- **Issue:** Image was too small (500px), didn't balance headline
- **Fix:**
  - Column width increased: 50% → 55%
  - Image sizes drastically increased: `w-[380px] sm:w-[480px] lg:w-[580px] xl:w-[640px]`
  - Aspect ratio: 3/4 (portrait, editorial)
  - Quality increased to 95
  - Larger decorative blur background
  - Image now matches headline visual weight

### 15. [x] About Video - Vertical 9:16 + Renamed File
- **File:** `components/AboutSection.tsx`
- **Issue:** Video was landscape, lost impact, wrong filename
- **Fix:**
  - Updated source: `/content/desktop-video/VIDEO-DESKTOP.mp4`
  - Changed to vertical aspect ratio: `aspect-[9/16]`
  - Width: `w-[280px] sm:w-[320px] lg:w-[380px]`
  - Editorial layout: text left, tall video right
  - Strong elevated shadow for presence
  - Inner border glow effect

### 16. [x] Copy Video to Public Folder
- **Source:** `content/desktop-video/VIDEO-DESKTOP.mp4`
- **Destination:** `public/content/desktop-video/VIDEO-DESKTOP.mp4`
- **Fix:** Copied video file for Next.js static serving

---

## ITERATION 3 PROGRESS

| # | Task | Status |
|---|------|--------|
| 13 | FloatingCTA Larger | DONE |
| 14 | Hero Image Larger | DONE |
| 15 | Video Vertical 9:16 | DONE |
| 16 | Copy Video File | DONE |

**Completed: 4/4**

---

## ITERATION 4 - Hero Alignment & CTA Repositioning (Jan 2026)

### 17. [x] FloatingCTA - Move to Hero Section Top Corner
- **Files:** `components/Hero.tsx`, `components/ClientLayout.tsx`
- **Issue:** CTA used `fixed` positioning relative to viewport, not Hero section
- **Fix:**
  - Integrated FloatingCTA directly into Hero component (Hero.tsx:64-111)
  - Changed from `fixed` to `absolute` positioning
  - Positioned at `top-0 right-0 md:right-6` within Hero Container
  - Added `relative` to Hero section (line 61)
  - Removed FloatingCTA import and usage from ClientLayout.tsx

### 18. [x] Hero Image - Vertical Alignment with Text
- **File:** `components/Hero.tsx`
- **Issue:** Image had fixed aspect ratio, didn't align with text vertically
- **Fix:**
  - Changed flex container to `items-start` (line 146)
  - Added `lg:self-stretch` to image column (line 223)
  - Removed `aspect-[3/4]` constraint
  - Changed to `h-full` with `min-h-[500px] lg:min-h-0` (line 234)
  - Added `object-top` to Image for top alignment (line 239)
  - Image now spans from headline to Download CV button

### 19. [x] Video File Verification
- **File:** `components/AboutSection.tsx`
- **Status:** Video already using correct file `VIDEO-DESKTOP.mp4`
- **Location:** `public/content/desktop-video/VIDEO-DESKTOP.mp4`

---

## ITERATION 4 PROGRESS

| # | Task | Status |
|---|------|--------|
| 17 | FloatingCTA to Hero Section | DONE |
| 18 | Hero Image Vertical Alignment | DONE |
| 19 | Video File Verification | DONE |

**Completed: 3/3**
