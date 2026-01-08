# Plan: Make Final CTA Contact Form White

## Overview
Change the contact form in the Final CTA section from a semi-transparent glass effect to a solid white background, with appropriate text and input styling for readability.

## Current State
- Form has `bg-white/10 backdrop-blur-sm` (translucent glass effect)
- Labels use `text-white/80` (light text for dark backgrounds)
- Inputs use `bg-white/10 border-white/20 text-white placeholder-white/40`
- Button uses `bg-nim-mint text-nim-navy` (should remain as-is)
- Footer text uses `text-white/40`

## Changes Required

### File: `src/pages/CapacityBuildout.tsx`

#### 1. Update Form Container (Line 1175)
**From:**
```
className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
```
**To:**
```
className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg"
```

#### 2. Update All Label Styles (Lines 1180, 1196, 1212, 1227)
**From:** `text-white/80`
**To:** `text-gray-700`

#### 3. Update Required Asterisk (Lines 1181, 1197, 1228)
Keep `text-nim-mint` for visual consistency (mint works on white background)

#### 4. Update Optional Text (Line 1213)
**From:** `text-white/40`
**To:** `text-gray-400`

#### 5. Update All Input Styles (Lines 1189, 1205, 1220, 1236)
**From:**
```
bg-white/10 border-white/20 text-white placeholder-white/40
```
**To:**
```
bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400
```

#### 6. Update Footer Text (Line 1263)
**From:** `text-white/40`
**To:** `text-gray-500`

#### 7. Update Success State Container (Line 1160)
**From:**
```
className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
```
**To:**
```
className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg"
```

#### 8. Update Success State Text (Lines 1165-1166)
**From:** `text-white` and `text-white/70`
**To:** `text-gray-900` and `text-gray-600`

## Summary
- 1 file modified: `src/pages/CapacityBuildout.tsx`
- Form container: solid white with subtle shadow
- Labels: dark gray for readability
- Inputs: light gray background with dark text
- Button: unchanged (mint background already works well)
- Success state: matching white card style

## Critical Files for Implementation
- src/pages/CapacityBuildout.tsx - Contains the FinalCTASection with the contact form (lines 1090-1271)
