# Nimara Website Brand Audit Checklist

## Audit Summary

### ✅ What Currently Matches Guidelines
- **Typography**: Serif headings with editorial feel
- **Domain pills**: Board/Money/People/Programs terminology
- **CTA language**: "Start the check", "Get urgent help", "Book a call"
- **Pricing transparency**: "Start free → Upgrade only if helpful" messaging
- **Accessibility**: Focus rings, min 44px touch targets, semantic HTML

### 🔧 Issues Fixed in This Update

| Page/Section | Issue | Fix Applied |
|--------------|-------|-------------|
| **Global CSS** | Colors not aligned to brand spec | Updated to `#0A101F` base, proper text opacity levels |
| **index.css** | Missing semantic color tokens | Added `--nim-base-bg`, `--nim-text-heading`, etc. |
| **tailwind.config** | Missing nim color utilities | Added `nim-base-bg`, `nim-mint`, `nim-purple` tokens |
| **Button component** | Purple as default (should be mint) | Changed default to mint, added `high-intent` variant for purple |
| **HeroSection** | Text colors using old tokens | Updated to `hsl(225 30% 97%)` heading color |
| **TwoWaysSection** | Background not using brand colors | Changed to `section-alt` class with proper dark background |
| **All sections** | Inconsistent card styling | Added `card-glass` and `card-surface` utility classes |

### 📋 Remaining Items (Manual Review Recommended)

| Component | Action Needed |
|-----------|---------------|
| FitCheck | Update text colors to brand spec |
| HowWeHelp | Ensure "muted" backgrounds use `section-alt` sparingly |
| SystemLadder | Already dark—verify accent usage |
| Expertise | Check purple usage is high-intent only |
| FAQ | Verify accordion colors match brand |
| FinalCTA | Already aligned |
| Check page | Already aligned |
| BookACall | Already aligned from previous update |

## Color System Quick Reference

```css
/* Backgrounds */
Base: hsl(220 53% 8%)      /* #0A101F */
Alt:  hsl(229 48% 15%)     /* #1F2957 - use sparingly */

/* Text */
Heading: hsl(225 30% 97%)           /* #F5F7FF */
Body:    hsl(225 30% 97% / 0.75)
Muted:   hsl(225 30% 97% / 0.55)

/* Accents */
Mint:   hsl(162 91% 83%)   /* #ACFCE3 - primary CTAs */
Purple: hsl(252 58% 56%)   /* #6945D8 - high-intent only */
```

## CTA Guidelines Applied

| Action Type | Button Style | Example |
|-------------|--------------|---------|
| Start check | Mint (default) | "Start the 4-minute check" |
| Get help | Mint (default) | "Get urgent help" |
| Book call | Purple (high-intent) | "Book a call" |
| Secondary | Ghost link | "Learn more →" |

---

*Audit completed: December 2024*
