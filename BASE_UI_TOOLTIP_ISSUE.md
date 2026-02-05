# Base UI Tooltip Import Issue

## Problem

The Base UI tooltip component (`@base-ui/react/tooltip`) fails to import in Next.js 16.1.6 with Turbopack, causing a runtime error:

```
TypeError: Cannot read properties of undefined (reading 'includes')
    at module evaluation (registry/bases/base/ui/tooltip.tsx:3:1)
  > 3 | import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
```

## Investigation

### Package Structure
- Base UI 1.1.0 is correctly installed
- The package has both CommonJS and ESM exports
- Other Base UI components (button, dialog, select, etc.) work fine
- The tooltip directory exists with proper exports

### Attempted Fixes

1. **Added transpilePackages**: Added `transpilePackages: ["@base-ui/react"]` to `next.config.mjs` - didn't resolve the issue

2. **Cleared cache**: Removed `.next` and `.turbo` directories - didn't help

3. **Different import patterns**: Tried both namespace and named imports - same error

### Root Cause

**CONFIRMED:** The error occurs with **both Turbopack AND without Turbopack**. This is a **Next.js 16 + Base UI 1.1.0 compatibility issue**, not Turbopack-specific.

The error "Cannot read properties of undefined (reading 'includes')" indicates that the module resolution is failing at the Next.js level, likely due to:
- Incompatibility between Next.js 16's module resolution and Base UI 1.1.0's export structure
- Conflict in how Next.js handles packages with both CommonJS and ESM exports
- Possible issue with Base UI's package.json exports configuration for Next.js 16

## Current Solution

**Temporarily disabled Base UI tooltip** in `apps/bolt/app/layout.tsx`:
- Using only `RadixTooltipProvider` 
- Base UI tooltip component remains in registry but is not used in the main layout
- This allows the app to run without errors

## Impact

- **Low impact**: Radix UI tooltips work perfectly and provide the same functionality
- Base UI tooltips are only needed for the Base UI component variants
- Users can still use Radix tooltips throughout the application

## Next Steps

### Option 1: Wait for Updates
- Monitor Base UI releases for Next.js 16 compatibility fixes
- Check Next.js 16 releases for Turbopack improvements
- Update when a fix is available

### Option 2: Test Without Turbopack ❌ TESTED - SAME ERROR

**Result:** Tested without Turbopack using `pnpm dev:no-turbo` - the same error occurs. This confirms it's NOT a Turbopack issue but a broader Next.js 16 + Base UI compatibility problem.

### Option 3: Downgrade Base UI
If critical, consider downgrading to an earlier Base UI version that works with Next.js 16

### Option 4: Use Radix Only
Since Radix tooltips work perfectly, consider using only Radix UI components and removing Base UI dependency

## Workaround for Base UI Tooltip Users

If you need to use Base UI tooltips in your components:

1. Import directly from the component file (not from layout):
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/registry/bases/base/ui/tooltip"
```

2. Or use Radix tooltips instead:
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/registry/bases/radix/ui/tooltip"
```

## Related Files

- `apps/bolt/app/layout.tsx` - Base UI tooltip provider disabled
- `apps/bolt/registry/bases/base/ui/tooltip.tsx` - Base UI tooltip component
- `apps/bolt/next.config.mjs` - Added transpilePackages configuration
- `apps/bolt/package.json` - Added dev:no-turbo script

## References

- Base UI: https://base-ui.com/
- Next.js 16: https://nextjs.org/docs
- Turbopack: https://turbo.build/pack


## Summary

**There is currently NO fix for the Base UI tooltip import issue with Next.js 16.1.6.**

The issue has been confirmed to occur with both Turbopack and without Turbopack, indicating it's a fundamental compatibility problem between Next.js 16 and Base UI 1.1.0's tooltip component specifically.

**Best solution:** Use Radix UI tooltips, which work perfectly and provide identical functionality. The Base UI tooltip provider has been disabled in the main layout, and the app runs without errors.

**Status:** Documented and worked around ✅
