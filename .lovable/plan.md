
# Plan: Unified Dark-Dominant Design for Smart Team Cohort Page

## The Problem
The current page alternates between dark navy and off-white (nim-cloud) backgrounds section-by-section, creating visual chaos:
- Hero → Dark
- Sound Familiar → Light  
- The Solution → Dark
- How It Works → Light
- Is This Right For You → Dark
- Ultimate Proof → Light
- Guarantee → Dark
- Price → Light
- FAQ → Dark
- Final CTA → Dark

This "zebra" switching every section hurts the premium feel and makes the page harder on the eyes.

## The Solution
Use **dark navy as the dominant background** across the entire page, with **strategic white cards/elements** as secondary accents to highlight key information. This creates:
- Visual consistency and calm
- A premium, authoritative feel
- Better eye comfort (no jarring switches)
- White elements draw attention to important content

## Visual Strategy

```text
+--------------------------------------------+
|           HERO (Dark Navy)                 |
|   [Hero content remains unchanged]         |
+--------------------------------------------+
|                                            |
|       SOUND FAMILIAR (Dark Navy)           |
|   Pain points in subtle glassmorphic cards |
|                                            |
+--------------------------------------------+
|                                            |
|       THE SOLUTION (Dark Navy)             |
|   [Already dark - no change needed]        |
|                                            |
+--------------------------------------------+
|                                            |
|       HOW IT WORKS (Dark Navy)             |
|   White card for time commitment box       |
|   Steps use light text on dark             |
|                                            |
+--------------------------------------------+
|                                            |
|       IS THIS RIGHT FOR YOU (Dark Navy)    |
|   [Already dark - no change needed]        |
|                                            |
+--------------------------------------------+
|                                            |
|       ULTIMATE PROOF (Dark Navy)           |
|   White card for the Promise               |
|                                            |
+--------------------------------------------+
|                                            |
|       GUARANTEE (Dark Navy)                |
|   [Already dark - no change needed]        |
|                                            |
+--------------------------------------------+
|                                            |
|       PRICE (Dark Navy)                    |
|   White card for pricing details           |
|                                            |
+--------------------------------------------+
|                                            |
|       FAQ (Dark Navy)                      |
|   [Already dark - no change needed]        |
|                                            |
+--------------------------------------------+
|                                            |
|       FINAL CTA (Dark Navy)                |
|   [Already dark - no change needed]        |
|                                            |
+--------------------------------------------+
```

## Section-by-Section Changes

### Section 2: Sound Familiar?
- **Current**: `bg-nim-cloud` (light background)
- **New**: `bg-nim-navy` (dark background)
- Update typography: headlines to white, subheads to cream (`#F5F0E8`/80)
- Pain point cards: glassmorphic style (`bg-white/[0.03]` with subtle cream borders)
- Left border accent: mint (`border-l-nim-mint`)

### Section 4: How It Works
- **Current**: `bg-nim-cloud` (light background)
- **New**: `bg-nim-navy` (dark background)
- Update typography: headlines to white, body to cream
- Step icons: change from `text-nim-teal` to `text-nim-mint`
- Numbered circles: update borders and text to mint tones
- **Time Commitment Card**: Keep as prominent white card (`bg-white`) to draw attention to key info
  - This white card becomes the "secondary accent" element
  - Text inside: navy headlines, teal accents

### Section 6: Ultimate Proof ("It Has to Work" Promise)
- **Current**: `bg-nim-cloud` (light background)
- **New**: `bg-nim-navy` (dark background)
- **Promise Card**: Keep as white card (`bg-white`) for emphasis
  - Shield icon: mint/teal tones
  - Text: navy headlines, slate-dark body

### Section 8: Price and Seats
- **Current**: `bg-nim-cloud` (light background)
- **New**: `bg-nim-navy` (dark background)
- Update header typography: white headlines, mint accents
- **Pricing Card**: Keep as white card (`bg-white`) for prominence
  - Price: navy text
  - Accents: teal badges
  - CTA button: navy background with white text
- Micro note: update to cream/white subdued text

### Sections Already Dark (No Changes Needed)
- Section 1: Hero
- Section 3: The Solution
- Section 5: Is This Right For You
- Section 7: Guarantee
- Section 9: FAQ
- Section 10: Final CTA
- Footer

## Design Rationale
- **Dark dominance**: Creates an immersive, premium experience
- **White cards as focal points**: The few white elements (Time Commitment, Promise, Pricing) naturally draw the eye to the most important conversion elements
- **Consistent visual rhythm**: No more jarring light/dark switches every section
- **Better for extended reading**: Dark backgrounds are easier on the eyes for longer content pages

## Technical Details

### Files Modified
- `src/pages/SmartTeamCohort.tsx`

### CSS Token Usage
- Dark backgrounds: `bg-nim-navy`
- Light cards: `bg-white` with `border border-border` and `shadow-sm`
- Primary text on dark: `text-white`
- Secondary text on dark: `text-[#F5F0E8]/80` (warm cream at 80% opacity)
- Muted text on dark: `text-[#F5F0E8]/60` or `text-white/50`
- Accent color: `text-nim-mint` (on dark) or `text-nim-teal` (on light cards)
- Glassmorphic cards: `bg-white/[0.03]` with `border border-[#F5F0E8]/10`
