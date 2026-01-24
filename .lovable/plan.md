
# Fix Nimara Logo Display

## Problem Identified

The current logo file has two issues causing it to appear tiny in the header:

1. **Excessive whitespace/padding**: The PNG has large amounts of empty space around the actual logo content
2. **Solid background**: The image includes a light gray/white background that appears as a visible box

When the header constrains the logo to 48px height, most of that height is consumed by the background/padding, making the actual logo mark and text very small.

## Solution

Create a clean, transparent-background SVG logo that matches the new brand design exactly:

- **N icon mark**: Navy blue diagonal stripes with a purple accent triangle
- **NIMARA wordmark**: Navy blue serif text
- **No background**: Transparent, allowing it to work on any page background
- **Tight bounding box**: Minimal padding so the logo uses full available height

## Implementation Steps

### Step 1: Create New SVG Logo File

Create `src/assets/nimara-logo-new.svg` with:
- Transparent background (no white/gray rectangle)
- ViewBox tightly cropped to logo content
- Navy blue (`#1a1a4e` or `#202654`) for the N-mark and wordmark
- Purple accent (`#7c3aed`) for the triangle detail on the N-mark
- Proper aspect ratio matching the original design

### Step 2: Update Header Component

Modify `src/components/Header.tsx`:
- Import the new SVG file instead of the PNG
- Adjust sizing if needed (the SVG should now properly fill the 48px height)
- Keep existing responsive height behavior (48px default, 40px when scrolled)

### Step 3: Update Footer Component

Check `src/components/Footer.tsx` for any logo usage and update to use the new SVG.

### Step 4: Update Mobile Menu

The mobile menu sidebar also displays the logo (line 215 in Header.tsx) - ensure it uses the same new asset.

### Step 5: Clean Up

Remove the old `src/assets/nimara-logo.png` file that has the whitespace issues.

## Technical Notes

- SVG is preferred over PNG for logos as it scales perfectly at any size
- The transparent background ensures the logo works on both light and dark page sections
- The existing height constraints in Header.tsx (40-48px) will work correctly once the SVG has no padding

## Files to Modify

| File | Action |
|------|--------|
| `src/assets/nimara-logo-new.svg` | Create - New transparent SVG matching brand design |
| `src/components/Header.tsx` | Edit - Update import to use new SVG |
| `src/components/Footer.tsx` | Edit - Update logo if used |
| `src/assets/nimara-logo.png` | Delete - Remove old file with issues |
