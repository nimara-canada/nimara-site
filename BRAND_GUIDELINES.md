# Nimara Website Brand Guidelines v2.0

> **Light-First Design System**  
> Last updated: December 2024

---

## Critical Rule: Only 3 Dark Sections Allowed

Dark backgrounds (`#0A101F`) are permitted **ONLY** in:
1. **Hero section**
2. **"Two Ways to Start" section**
3. **Footer**

**All other sections must use light backgrounds (white or soft light).**

---

## Brand Goals

- **Audience**: Canadian nonprofit EDs, Ops, Finance leads
- **Tone**: Warm, calm, clear, grade 5/6 language
- **Feel**: Modern, funder-grade, trustworthy, simple
- **Identity**: Nimara is a service (systems setup), not software

---

## A) Voice + Writing Rules

### Language Standards
- **Grade 5/6 reading level** — no jargon, no buzzwords
- Short sentences. Plain English.
- Use clear domain labels: **Board / Money / People / Programs**

### CTA Language (Consistent Across Site)
- "Start the 4-minute check"
- "Get urgent help"
- "Book a call"
- "Schedule a call"

### Pricing Transparency
When mentioning paid steps, be honest:
> "Start free → upgrade only if helpful."

### Words to Avoid
- Baseline, tier ladder, bundles, compliance-heavy phrases
- "Leverage", "optimize", "streamline", "synergy"
- Technical jargon without explanation

---

## B) Color System (LIGHT-FIRST)

### 1) Light Backgrounds (Default)

| Token | Value | Usage |
|-------|-------|-------|
| `--nim-light-bg` | `#FFFFFF` | Base background for most sections |
| `--nim-light-alt` | `#F7F8FC` | Soft alternate section (1 in 3-4 sections) |
| `--nim-light-border` | `rgba(10,16,31,0.08)` | Borders on light surfaces |

### 2) Dark Backgrounds (Hero, Two Ways, Footer ONLY)

| Token | Value | Usage |
|-------|-------|-------|
| `--nim-dark-bg` | `#0A101F` | Dark section base |
| `--nim-dark-depth` | `#121A33` | Subtle dark depth |

Optional subtle dark gradient (keep low intensity):
```css
linear-gradient(180deg, #0A101F 0%, #121A33 60%, #0A101F 100%)
```

### 3) Surfaces (Cards/Panels/Forms)

**On Light Sections:**
| Element | Value |
|---------|-------|
| Card background | `#FFFFFF` |
| Border | `rgba(10,16,31,0.08)` |
| Shadow | Soft, minimal |

**On Dark Sections:**
| Element | Value |
|---------|-------|
| Card background | `#10192F` to `#141F3A` |
| Border | `rgba(255,255,255,0.06)` |
| Shadow | Soft, minimal |

### 4) Text Colors (Accessibility)

**On Light Backgrounds:**
| Type | Value |
|------|-------|
| Headings | `#0A101F` |
| Body | `rgba(10,16,31,0.78)` |
| Muted | `rgba(10,16,31,0.55)` |

**On Dark Backgrounds:**
| Type | Value |
|------|-------|
| Headings | `#F5F7FF` |
| Body | `rgba(245,247,255,0.75)` |
| Muted | `rgba(245,247,255,0.55)` |

### 5) Accent Colors (Strict Roles)

| Color | Hex | Role |
|-------|-----|------|
| **Mint** | `#ACFCE3` | Friendly emphasis, panels, default primary CTAs |
| **Purple** | `#6945D8` | High-intent actions ONLY (Book/Upgrade/Pay), selected states |
| **Slate** | `#96A0B5` | Secondary labels, helper text only |
| **White** | `#FFFFFF` | Text/surfaces on light backgrounds |

**Purple Usage Rule**: Use sparingly (5-10% of accents). Reserve for:
- "Book a call" buttons
- "Pay" / "Upgrade" actions
- Selected/active states

---

## C) Buttons + Inputs

### Button Hierarchy

| Type | Style | Usage |
|------|-------|-------|
| **Primary** | Mint fill, dark text, pill shape | Default CTAs |
| **High-intent** | Purple fill, white text, pill shape | Book/Pay/Upgrade only |
| **Secondary** | Outline/ghost | Secondary actions |

### Form Rules
- Inputs must have **visible labels** (not placeholder-only)
- Use clear error states with accessible colors
- Minimum 44px touch targets

---

## D) Layout Rhythm

### Section Background Pattern
1. Most sections are **light** (`#FFFFFF`)
2. Use **soft-light alternate** (`#F7F8FC`) occasionally for variety
3. **Only 3 sections are dark**: Hero, Two Ways, Footer
4. Never stack dark sections consecutively

### Spacing Scale
- Consistent vertical padding: `py-24 md:py-32 lg:py-40`
- Container max-width: `max-w-7xl`
- Horizontal padding: `px-6 lg:px-12`

---

## E) Typography

### Font Stack
- **Sans-serif**: Inter Variable (body, UI)
- **Serif**: Georgia (headings, editorial feel)
- **Mono**: IBM Plex Mono (numbers, code)

### Scale
| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 | 48-64px | 32-40px |
| H2 | 36-48px | 28-32px |
| H3 | 24-32px | 20-24px |
| Body | 17px | 16px |
| Small | 14px | 13px |

---

## F) Components to Standardize

### Domain Pills
Board / Money / People / Programs labels:
```css
/* Light background */
background: rgba(10,16,31,0.05);
border: 1px solid rgba(10,16,31,0.10);
color: rgba(10,16,31,0.70);

/* Dark background */
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.10);
color: rgba(255,255,255,0.60);
```

### Cards
- Border radius: 1rem (16px)
- Light: white bg, subtle border, soft shadow
- Dark: semi-transparent bg, glass effect

### Guarantee Badges
- Mint dot indicator
- Light border treatment
- Clear, short text

---

## G) Accessibility Requirements

- **WCAG 2.2 AA minimum** for all text
- Visible focus rings (purple)
- Minimum 44×44px touch targets
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images

---

## Audit Summary (December 2024)

### Sections Now Using Light Background:
- FitCheck ✓
- HowWeHelp ✓
- Expertise ✓
- IntegrationsSection ✓
- FAQ ✓

### Sections Using Dark Background (Allowed):
- HeroSection ✓
- TwoWaysSection ✓
- Footer ✓

### Section Removed from Dark:
- SystemLadder → Now light
- FinalCTA → Merged into Footer approach

---

*Version: 2.0 — Light-First Design System*
