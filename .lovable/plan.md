
# Fix Nimara Logo Display

## Problem Analysis

The current logo display has two critical issues:

1. **Oversized dimensions**: The header is showing the logo at 100-120px height, which is far too large for a standard header
2. **Visible background**: The PNG file has a light gray gradient background baked into the image, creating a visible box around the logo

## Solution

Create a clean, transparent SVG that precisely matches the new brand logo design, then update the header to use proper sizing.

### The Correct N-Mark Design

Based on the original logo file provided:

| Element | Description |
|---------|-------------|
| Left diagonal bar | Navy blue parallelogram, runs from bottom-left toward top-right |
| Right diagonal bar | Navy blue parallelogram, parallel to the left bar, slightly offset |
| Purple triangle | Small purple accent triangle in the top-right corner of the N-mark |
| Wordmark | "NIMARA" in navy serif typography with generous letter-spacing |

The two bars create negative space that forms an abstract "N" shape, with the purple triangle adding a distinctive accent.

## Implementation Steps

### Step 1: Create New Transparent SVG

Create `src/assets/nimara-logo-brand.svg` with:
- No background rectangle (fully transparent)
- ViewBox tightly cropped to the logo content
- Two navy diagonal parallelograms (`#1a1a4e` or `#202654`)
- Purple triangle accent (`#7c3aed`)
- Serif wordmark text

### Step 2: Update Header Component

Modify `src/components/Header.tsx`:
- Import the new SVG instead of the PNG
- Reset height to proper values: `48px` default, `40px` when scrolled
- Remove excessive width/height attributes
- Update the mobile menu logo as well (line 215)

### Step 3: Clean Up Old Assets

Delete the problematic PNG file that has the baked-in background.

## Files to Modify

| File | Action |
|------|--------|
| `src/assets/nimara-logo-brand.svg` | Create - New transparent SVG with correct N-mark geometry |
| `src/components/Header.tsx` | Edit - Update import and reset to proper sizing (48px/40px) |
| `src/assets/nimara-logo.png` | Delete - Remove file with background issues |

## Technical Details

### SVG Structure

```text
+------------------+
| [N-mark]  NIMARA |
+------------------+

N-mark breakdown:
   /\
  /  \ <- purple triangle
 /    \
/======\ <- right bar (navy)
\======/ <- left bar (navy)
 \    /
  \  /
   \/
```

### Header Height Values

- Default state: `height: 48px`
- Scrolled state: `height: 40px`
- Width/height attributes: `width="140"` `height="48"`

This restores the header to a normal, professional size while ensuring the logo fills the available space correctly due to the transparent, tightly-cropped SVG.
