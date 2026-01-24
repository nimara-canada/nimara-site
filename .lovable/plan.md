

# Paper Tiger Design Style → Nimara Homepage

## Design Analysis: Paper Tiger

Paper Tiger uses a **bold, editorial, high-contrast** design with these key characteristics:

### Typography
- **Ultra-bold condensed sans-serif** for headlines (font-weight 900, tight tracking)
- **All caps** for major section headers with dramatic sizing (80-120px on desktop)
- Clean, minimal body text that doesn't compete with headlines

### Scroll Behavior
- **Full-bleed sections** where each section takes the entire viewport
- **Smooth scroll-snap** between sections for a magazine-like feel
- **Parallax and opacity transitions** as content enters/exits
- Cards and sections **stack on scroll** with layered depth

### Color & Contrast
- Deep blacks (#000000) and stark whites
- Strategic pops of brand color for accents
- No gradients - flat, bold color blocks

### Layout
- Generous whitespace around hero text
- Asymmetric layouts with large type anchoring each section
- Visual hierarchy through size contrast (massive headlines vs. small labels)

---

## Implementation Plan

### 1. Enhanced Scroll-Snap Container

Wrap the Problem + Transition sections in a proper scroll-snap container with `overflow-y-scroll` and `scroll-snap-type: y mandatory` on the parent, creating a paginated magazine feel.

**File:** `src/pages/Index.tsx`
- Create a scroll-snap wrapper with fixed height (`100vh`) around Problem and SoWhatWeDoSection
- Add `scroll-behavior: smooth` for fluid transitions

---

### 2. Problem Section - Paper Tiger Style

**File:** `src/components/ProblemSection.tsx`

**Typography Updates:**
- Increase headline to 80-100px+ on desktop with `font-black` (weight 900)
- Add `uppercase` treatment and `tracking-tight` for condensed feel
- Responsive scaling: 40px mobile → 60px tablet → 100px desktop

**Animation Updates:**
- Parallax fade-out as user scrolls away (opacity reduces, slight Y translate)
- Entry animation stays but becomes more subtle

**Layout Updates:**
- Keep centered layout but increase max-width for dramatic text presence
- Add subtle scroll indicator at bottom (chevron + "scroll" label like Paper Tiger)

---

### 3. SoWhatWeDoSection - Paper Tiger Style

**File:** `src/components/SoWhatWeDoSection.tsx`

**Typography Updates:**
- Already has uppercase - enhance to 80-100px+ on desktop
- Add even tighter `tracking-[-0.05em]` for that condensed display feel
- Font-weight 900 with `font-black`

**Animation Updates:**
- Fade-in with slight scale-up (1.02 → 1) for dramatic entrance
- Add parallax effect tied to scroll position

**Visual Polish:**
- Add a subtle decorative element (thin horizontal line above or below)
- Consider a small animated accent (like a dot that pulses)

---

### 4. Improved Scroll Transitions Between Sections

**File:** `src/pages/Index.tsx`

Create a seamless paginated scroll experience:
- Use CSS `scroll-snap-type: y mandatory` on container
- Each section gets `scroll-snap-align: start`
- Sections get `height: 100vh` to ensure full-screen behavior
- Add overscroll containment to prevent bounce effects

---

### 5. Visual Continuity Elements

Add subtle visual connectors between sections:
- Thin horizontal line or dot motif that appears between sections
- Consistent scroll indicator style across full-screen sections
- Matching fade-out/fade-in animations timed to scroll progress

---

## Technical Details

### CSS Changes

```css
/* Scroll-snap container */
.magazine-scroll {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}

.magazine-section {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

### Component Changes

**ProblemSection.tsx:**
- Typography: 80-100px desktop, font-weight 900, uppercase option toggle
- Add `useScroll` hook from framer-motion for parallax
- Add scroll indicator at bottom

**SoWhatWeDoSection.tsx:**
- Typography: Match Problem section scale
- Add subtle decorative accent line
- Scale-up entrance animation

**Index.tsx:**
- Wrap sections in scroll-snap container
- Ensure proper section heights and snap behavior

---

## Expected Result

A homepage with:
1. **Full-screen paginated sections** that snap into place like a magazine
2. **Bold, impactful typography** matching Paper Tiger's editorial style
3. **Smooth parallax transitions** as users scroll between sections
4. **Clean visual separation** between Problem and "So what do we do" sections
5. **Premium, editorial feel** that aligns with Nimara's brand standards

