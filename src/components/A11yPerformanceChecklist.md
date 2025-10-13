# Accessibility & Performance Checklist

## ✅ Completed

### Keyboard Navigation & Focus
- All interactive elements have min-h-[44px] min-w-[44px]
- Visible focus rings: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`
- Skip to content link implemented in Header
- Tab order is logical throughout navigation
- aria-current="page" on active navigation items
- aria-label and aria-expanded on mobile menu toggle

### Design System
- All colors are HSL values in index.css
- Semantic tokens used throughout (no direct color values in components)
- Button variants: default (Purple bg), secondary/outline (Navy text, Mist border)
- Input focus states with Purple ring
- Card components with 16px radius and soft shadows
- Proper link styling (Navy text, underline on hover)

### Forms
- Labels properly associated with inputs
- Required fields marked with asterisk
- Helper text with proper text color (Slate)
- Error states use #D12D2D
- Form validation before submission

## 🔧 Implementation Guidelines

### Heading Hierarchy
**CRITICAL**: Each page must have exactly ONE H1, followed by sequential H2 → H3 → H4

#### Current Status by Page:
- **Index (/)**: H1 in HeroSection ✓ → H2 in sections ✓
- **Consultants (/consultants)**: Verify H1 in NewConsultantHero → H2 in subsections
- **Company (/company)**: Verify H1 in CompanyHero → H2 in subsections

**Action Required**: Audit all section components to ensure:
1. Only ONE H1 per page (usually in the hero)
2. All subsequent headings follow sequential order
3. No skipped levels (H1 → H3 is invalid)

### Image Optimization

#### Alt Text Rules:
```tsx
// ✅ Informative images (convey meaning)
<img src="chart.png" alt="Revenue growth chart showing 45% increase" />

// ✅ Decorative images (purely visual)
<img src="pattern.svg" alt="" aria-hidden="true" />

// ✅ Logos
<img src="logo.png" alt="Company name logo" />
```

#### Performance:
```tsx
// ✅ Hero images (above the fold)
<img 
  src={heroImage} 
  alt="Description"
  fetchPriority="high"
  width="1200"
  height="600"
/>

// ✅ Below-the-fold images
<img 
  src={image} 
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
/>
```

**Action Required**: 
- Add explicit width/height to all images to prevent layout shift
- Use `loading="lazy"` for all images below the fold
- Use `fetchPriority="high"` only for LCP elements (hero)
- Compress all images (use WebP format where possible)
- Add proper alt text to all images

### Performance Targets

#### Largest Contentful Paint (LCP) ≤ 2.5s
- Hero text should be first paint
- Optimize hero image size and format
- Use font-display: swap for web fonts (already in place)
- Minimize blocking resources

#### Cumulative Layout Shift (CLS) ≤ 0.1
- All images must have explicit width/height
- Avoid inserting content above existing content
- Reserve space for dynamic content

#### First Input Delay (FID) ≤ 100ms
- Minimize JavaScript execution time
- Use code splitting for large bundles
- Defer non-critical scripts

## 📋 Section-by-Section Checklist

### Every Section Should Have:
- [ ] Semantic HTML (`<section>`, `<article>`, `<nav>`, `<aside>`)
- [ ] Proper heading hierarchy
- [ ] Adequate color contrast (AA minimum)
- [ ] Keyboard-accessible interactive elements
- [ ] ARIA labels where needed
- [ ] Optimized images with alt text

### Example Section Structure:
```tsx
<section className="py-16 lg:py-24" aria-labelledby="section-title">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 id="section-title" className="text-3xl font-bold mb-8">
      Section Title
    </h2>
    <p className="text-foreground">Content...</p>
  </div>
</section>
```

## 🎯 Priority Actions

1. **Immediate**: Audit heading hierarchy on all pages
2. **Immediate**: Add width/height to all images
3. **Immediate**: Add loading="lazy" to below-fold images
4. **High**: Compress and optimize all image assets
5. **High**: Add proper alt text to all images
6. **Medium**: Run Lighthouse audit and address issues
7. **Medium**: Test with keyboard-only navigation
8. **Medium**: Test with screen reader

## 📊 Testing Checklist

- [ ] Lighthouse Accessibility Score ≥ 90
- [ ] Lighthouse Performance Score ≥ 90
- [ ] WAVE accessibility checker (0 errors)
- [ ] Keyboard navigation (Tab, Enter, Escape work)
- [ ] Screen reader test (NVDA/JAWS/VoiceOver)
- [ ] Color contrast checker (all text passes AA)
- [ ] Mobile responsiveness (all breakpoints)
- [ ] Focus indicators visible on all elements
