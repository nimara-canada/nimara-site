# Nimara Website Brand Guidelines

> **Version 1.0** · Last updated: December 2024  
> For Canadian nonprofit EDs, Ops, and Finance leads

---

## Brand Identity

### Who We Serve
Canadian nonprofit executive directors, operations managers, and finance leads who do strong work in the community but feel messy on the inside.

### Brand Personality
- **Warm** — like a trusted colleague, not a vendor
- **Calm** — no urgency tactics or pressure
- **Clear** — grade 5/6 language, no jargon
- **Trustworthy** — funder-grade, professional
- **Simple** — systems setup, not software

### What Nimara Is
Nimara is a **service** that helps nonprofits set up simple systems. We install governance, finance, HR, and program systems—not software products.

---

## A) Brand Voice & Writing Rules

### Language Level
- **Grade 5/6 reading level** (aim for 8th grade or below on readability tests)
- Short sentences (under 20 words when possible)
- Active voice preferred

### Words to Use
| Instead of... | Write... |
|---------------|----------|
| Baseline assessment | Quick check |
| Tier ladder | Where you stand |
| Bundles | What you get |
| Compliance-heavy | Funder-ready |
| Organizational health | How your systems work |
| Capacity building | Setting up systems |
| Implementation | Setup / Install |
| Onboarding | Getting started |

### Domain Language
Use these consistent terms for the four core areas:
- **Board** (governance, roles, policies)
- **Money** (finance, books, compliance)
- **People** (HR, staff, contractors)
- **Programs** (services, delivery, records)

### CTA Language
Keep calls-to-action plain and action-based:

| Good CTAs | Avoid |
|-----------|-------|
| Start the 4-minute check | Take our assessment |
| Get urgent help | Request emergency consultation |
| Book a call | Schedule a discovery session |
| Start free | Begin your journey |

### Pricing Transparency
When any paid step is mentioned, be honest:
- "Start free → Upgrade only if helpful"
- "The free check stands on its own"
- "No pressure. Upgrade only if it helps."

### Tone Guidelines
- Be direct and kind
- No hype or exaggeration
- No "amazing," "revolutionary," "game-changing"
- No urgency pressure ("limited time," "act now")
- Acknowledge that change is hard

---

## B) Color System

### Global Backgrounds

| Role | Color | HSL | Hex |
|------|-------|-----|-----|
| **Base background** (site-wide) | Deep navy | `220 53% 8%` | `#0A101F` |
| **Alternate section** (sparingly, 1 in 3–4 sections) | Lighter navy | `229 48% 15%` | `#1F2957` |

**Subtle gradient overlay** (optional on base):
```css
background: linear-gradient(180deg, 
  hsl(220 53% 8%) 0%, 
  hsl(225 45% 12%) 60%, 
  hsl(220 53% 8%) 100%
);
```

### Surface Colors (Cards/Panels/Forms)

| Role | HSL | Hex | Usage |
|------|-----|-----|-------|
| Card background | `229 48% 10%` | `#10192F` | Primary cards |
| Card background alt | `229 45% 14%` | `#141F3A` | Hover states |
| Border | `0 0% 100% / 0.06` | `rgba(255,255,255,0.06)` | Card borders |
| Border hover | `0 0% 100% / 0.10` | `rgba(255,255,255,0.10)` | Active states |

**Card styling:**
- Border radius: `1rem` (16px)
- Shadow: soft, minimal (`0 8px 24px rgba(0,0,0,0.15)`)
- Backdrop blur optional for glassmorphism

### Text Colors

| Role | HSL | Hex | Usage |
|------|-----|-----|-------|
| **Headings** | `225 30% 97%` | `#F5F7FF` | H1, H2, H3, titles |
| **Body** | `225 30% 97% / 0.75` | `rgba(245,247,255,0.75)` | Main readable text |
| **Muted/Supporting** | `225 30% 97% / 0.55` | `rgba(245,247,255,0.55)` | Labels, captions |
| **Very muted** | `225 30% 97% / 0.40` | `rgba(245,247,255,0.40)` | Disclaimers |

### Accent Colors (Strict Roles)

| Color | HSL | Hex | Role |
|-------|-----|-----|------|
| **Mint** | `162 91% 83%` | `#ACFCE3` | Primary CTA buttons, positive indicators, friendly accents |
| **Purple** | `252 58% 56%` | `#6945D8` | High-intent actions only (Book a call, Upgrade, Pay). Use sparingly (5–10% max) |
| **Slate** | `220 13% 65%` | `#96A0B5` | Secondary text, labels, borders only |

### Accent Usage Rules

**Mint (default primary):**
- Primary buttons ("Start the check", "Get help")
- Check marks and success states
- Highlight text and badges
- Domain pills (Board/Money/People/Programs)

**Purple (high-intent only):**
- "Book a call" buttons
- "Upgrade" or "Pay" actions
- Selected/active states
- Interactive focus rings

**Never:**
- Purple for general CTAs
- Mint on mint backgrounds
- White text on light backgrounds

---

## C) Buttons & Inputs

### Button Hierarchy

| Type | Background | Text | Border | Usage |
|------|------------|------|--------|-------|
| **Primary** | Mint (`#ACFCE3`) | Dark navy (`#0A101F`) | None | Default CTAs |
| **High-intent** | Purple (`#6945D8`) | White | None | Book a call, Pay, Upgrade |
| **Secondary** | Transparent | White | White/10 | Alternative actions |
| **Ghost** | Transparent | White/70 | None | Subtle links |

### Button Styling
- Border radius: `9999px` (pill shape) or `0.75rem` (rounded)
- Min height: `44px` (accessibility)
- Padding: `0.75rem 1.5rem`
- Font weight: `600` (semibold)
- Transition: smooth hover states

### Input Fields
- **Always use visible labels** (placeholders are not labels)
- Background: `rgba(255,255,255,0.05)`
- Border: `rgba(255,255,255,0.20)`
- Focus border: Mint accent
- Border radius: `0.75rem`
- Min height: `48px`

---

## D) Layout Consistency

### Spacing Scale
- Section padding: `py-24 md:py-36 lg:py-44`
- Container max-width: `max-w-7xl`
- Container padding: `px-6 lg:px-12`
- Card padding: `p-6 sm:p-8` or `p-8 md:p-10 lg:p-12`

### Typography Scale
| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| H1 | 48–64px | 32–40px | 500 (medium) |
| H2 | 40–56px | 28–36px | 500 (medium) |
| H3 | 24–32px | 20–24px | 600 (semibold) |
| Body | 17–18px | 16–17px | 400 (regular) |
| Small | 14px | 14px | 400 (regular) |

### Font Families
- **Headings:** Serif (elegant, editorial feel)
- **Body:** Inter Variable (clean, readable)

### Hierarchy
1. Big H1 with animated/italic accent
2. Short subhead (1–2 sentences)
3. Clear next action (CTA)

---

## E) Component Standards

### Pills/Chips (Domain indicators)
```
Board · Money · People · Programs
```
- Background: `rgba(255,255,255,0.05)`
- Border: `rgba(255,255,255,0.10)`
- Text: `rgba(255,255,255,0.60)`
- Border radius: `9999px`
- Padding: `0.375rem 0.75rem`

### Checklists
- Use custom checkboxes with mint accent
- Checked state: Mint background with dark checkmark
- Unchecked: Transparent with white border

### Two-Path Cards
| Path | Style | Accent |
|------|-------|--------|
| Urgent Fix | Light card on light section | Minimal |
| Build My Systems | Dark navy card | Mint accents, "Recommended" label |

**Messaging:**
- Urgent Fix: "1–4 weeks · One problem, one clear fix"
- Build My Systems: "Start free → Upgrade only if you want us to go deeper"

### Guarantee/Proof Badges
- Small mint dot indicator
- Text: `text-xs font-medium`
- Border: subtle accent border
- Example: "● Money-back guarantee included"

---

## F) Animation Guidelines

### Motion Principles
- **Subtle and purposeful** — animations should guide, not distract
- **Respect reduced motion** — always check `prefers-reduced-motion`
- **Consistent timing** — use `[0.22, 1, 0.36, 1]` easing curve

### Standard Animations
- Fade in: `opacity: 0 → 1, y: 20 → 0`
- Stagger: `0.05–0.1s` delay between items
- Duration: `0.5–0.8s` for section reveals

---

## G) Accessibility Requirements

### Minimum Standards
- WCAG 2.1 AA compliance
- Color contrast: 4.5:1 for body text, 3:1 for large text
- Focus indicators: visible purple ring
- Touch targets: minimum 44×44px
- Semantic HTML: proper heading hierarchy

### Screen Reader Support
- Meaningful alt text for images
- ARIA labels for interactive elements
- Skip to content link
- Announce dynamic content changes

---

## Quick Reference

### The Nimara Palette
```css
--base-bg: hsl(220 53% 8%);          /* #0A101F */
--alt-bg: hsl(229 48% 15%);          /* #1F2957 */
--card-bg: hsl(229 48% 10%);         /* #10192F */
--text-heading: hsl(225 30% 97%);    /* #F5F7FF */
--text-body: hsl(225 30% 97% / 0.75);
--text-muted: hsl(225 30% 97% / 0.55);
--accent-mint: hsl(162 91% 83%);     /* #ACFCE3 */
--accent-purple: hsl(252 58% 56%);   /* #6945D8 */
--border: hsl(0 0% 100% / 0.06);
```

### CTA Quick Reference
| Action | Button Style | Text |
|--------|--------------|------|
| Start check | Mint primary | "Start the 4-minute check" |
| Get help fast | Mint primary | "Get urgent help" |
| Book call | Purple | "Book a call" |
| Secondary | Ghost link | "Learn more →" |

---

*These guidelines ensure a consistent, warm, and trustworthy experience for Canadian nonprofit leaders seeking help with their systems.*
