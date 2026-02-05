# Lint Errors Summary - pnpm check

**Updated After Excluding Deprecated Folder**

## Before vs After

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Files Checked | 8,054 | 6,607 | -1,447 files |
| Errors Found | 5,252 | 3,143 | -2,109 errors |

**Configuration**: Added `deprecated/**` folder to Biome overrides to disable linting and formatting.

## Current Status

**Total Errors**: 3,143 errors across 6,607 files checked

## Error Breakdown by Type

### Top Issues (from visible output)

1. **lint/style/noExportedImports** - 10 occurrences
   - Location: `apps/bolt/app/(app)/charts/charts.tsx`
   - Issue: Imports are being exported directly instead of using `export from` syntax
   - Fix: Change `import { X } from "y"` followed by `export { X }` to `export { X } from "y"`

2. **lint/performance/noNamespaceImport** - 4 occurrences
   - Locations:
     - `apps/bolt/app/(app)/(root)/components/appearance-settings.tsx`
     - `apps/bolt/app/(app)/(root)/components/button-group-demo.tsx`
     - `apps/bolt/app/(app)/(root)/components/button-group-input-group.tsx`
     - `apps/bolt/app/(app)/(root)/components/input-group-button.tsx`
   - Issue: Using `import * as React from "react"` prevents tree shaking
   - Fix: Use named imports like `import { useState, useEffect } from "react"`

3. **lint/style/useBlockStatements** - 2 occurrences (FIXABLE)
   - Location: `apps/bolt/app/(app)/charts/[type]/page.tsx` (lines 53, 58)
   - Issue: Single-line if statements without braces
   - Fix: Wrap statements in curly braces `{ }`

4. **lint/a11y/useValidAnchor** - 2 occurrences
   - Locations:
     - `apps/bolt/app/(app)/(root)/components/empty-input-group.tsx` (line 38)
     - `apps/bolt/app/(app)/(root)/components/item-demo.tsx` (line 27)
   - Issue: Using `href="#"` which is not a valid URL
   - Fix: Use proper URLs or button elements for non-navigation actions

5. **lint/suspicious/noGlobalIsNan** - 1 occurrence (FIXABLE)
   - Location: `apps/bolt/app/(app)/(root)/components/appearance-settings.tsx` (line 34)
   - Issue: Using `isNaN()` which attempts type coercion
   - Fix: Use `Number.isNaN()` instead

6. **lint/suspicious/noArrayIndexKey** - 1 occurrence
   - Location: `apps/bolt/app/(app)/charts/[type]/page.tsx` (line 87)
   - Issue: Using array index as React key
   - Fix: Use unique identifiers instead of array indices

## Affected Folders

### Primary Problem Areas

1. **apps/bolt/app/(app)/charts/** - 13 errors
   - `charts.tsx` - 10 errors (export imports)
   - `[type]/page.tsx` - 3 errors (block statements, array index key)

2. **apps/bolt/app/(app)/(root)/components/** - 7 errors
   - `appearance-settings.tsx` - 2 errors (namespace import, isNaN)
   - `button-group-demo.tsx` - 1 error (namespace import)
   - `button-group-input-group.tsx` - 1 error (namespace import)
   - `input-group-button.tsx` - 1 error (namespace import)
   - `empty-input-group.tsx` - 1 error (invalid anchor)
   - `item-demo.tsx` - 1 error (invalid anchor)

### Hidden Errors

**Note**: The output shows "Diagnostics not shown: 5232" which means there are 5,232 additional errors not displayed in the summary. These are likely spread across:
- `apps/bolt/examples/` (base and radix examples)
- `apps/bolt/registry/` (component registry)
- `apps/bolt/components/` (shared components)
- `deprecated/` folders

## Quick Fix Commands

### Auto-fixable Issues
```bash
# Fix all auto-fixable issues
pnpm fix

# This will automatically fix:
# - useBlockStatements (add braces)
# - noGlobalIsNan (change to Number.isNaN)
```

### Manual Fixes Required

1. **Namespace Imports** (4 files)
   - Replace `import * as React from "react"` with specific imports
   - Example: `import { useState, useCallback } from "react"`

2. **Export Imports** (1 file - charts.tsx)
   - Change from:
     ```typescript
     import { ChartAreaAxes } from "@/registry/..."
     export { ChartAreaAxes }
     ```
   - To:
     ```typescript
     export { ChartAreaAxes } from "@/registry/..."
     ```

3. **Invalid Anchors** (2 files)
   - Replace `<a href="#">` with proper URLs or button elements
   - Example: `<button onClick={handleClick}>Contact support</button>`

4. **Array Index Keys** (1 file)
   - Use unique identifiers instead of array indices for React keys
   - Example: Use `key={item.id}` instead of `key={index}`

## Recommendations

1. **Run auto-fix first**: `pnpm fix` will resolve ~2 errors automatically
2. **Address visible errors**: Fix the 20 visible errors in the summary above
3. **Investigate hidden errors**: Run `pnpm check --max-diagnostics 10000` to see all errors
4. **Focus on high-impact folders**:
   - Start with `apps/bolt/app/(app)/` (20 errors)
   - Then tackle `apps/bolt/examples/` and `apps/bolt/registry/`

## Impact Assessment

- **Build Impact**: These are linting errors, not TypeScript errors, so the build should still work
- **Code Quality**: Fixing these will improve:
  - Bundle size (tree shaking)
  - Performance (proper React patterns)
  - Accessibility (valid anchors)
  - Maintainability (consistent code style)

## Next Steps

1. Run `pnpm fix` to auto-fix 2 errors
2. Manually fix the 18 remaining visible errors
3. Run `pnpm check --max-diagnostics 10000 > lint-full-report.txt` to see all 5,252 errors
4. Create a plan to systematically address errors by folder
5. Consider updating `biome.jsonc` to disable or adjust rules if needed
