# Build Icons Script Explained

## Overview

The `build-icons.ts` script is an **icon optimization tool** that scans the component registry for `IconPlaceholder` usage and generates an optimized export file containing only the Lucide icons actually used in your components.

## Purpose

Instead of importing the entire Lucide React library (which contains 1000+ icons), this script:
1. Scans all component files in `registry/bases/`
2. Finds which Lucide icons are actually used via `IconPlaceholder` components
3. Generates `registry/icons/__lucide__.ts` with only those specific icons
4. Reduces bundle size by ~99% compared to importing the full library

## How It Works

### 1. Scanning Phase
```typescript
function scanLucideIconUsage() {
  // Recursively finds all .tsx files in registry/bases/
  const files = findTsxFiles(registryBasesDir)
  
  // Regex pattern to match: <IconPlaceholder lucide="IconName" />
  const iconPlaceholderRegex = /<IconPlaceholder\s+([^>]*?)lucide=["']([^"']+)["']([^>]*?)\/?>/g
  
  // Extracts icon names and stores them in a Set
  return lucideIcons
}
```

### 2. Generation Phase
```typescript
function generateLucideIconFile(icons: Set<string>) {
  // Creates registry/icons/__lucide__.ts with:
  // export { IconName } from "lucide-react"
  // export { AnotherIcon } from "lucide-react"
  // ... (only used icons)
}
```

## Usage

### Build Once
```bash
pnpm exec tsx --tsconfig ./tsconfig.scripts.json ./scripts/build-icons.ts
```

### Watch Mode (Development)
```bash
pnpm icons:dev
```

This runs in watch mode and automatically rebuilds when component files change.

## Example

If your components use:
```tsx
<IconPlaceholder lucide="CheckIcon" />
<IconPlaceholder lucide="XIcon" />
```

The script generates:
```typescript
// registry/icons/__lucide__.ts
export { CheckIcon } from "lucide-react"
export { XIcon } from "lucide-react"
```

## Benefits

1. **Smaller Bundle Size**: Only includes icons you actually use
2. **Automatic Updates**: Watch mode keeps the file in sync during development
3. **Type Safety**: All exports are properly typed from lucide-react
4. **Zero Configuration**: Works automatically with IconPlaceholder pattern

## Integration

The generated `__lucide__.ts` file is imported by:
- `registry/icons/icon-lucide.tsx` - Icon loader component
- Component files that use the IconPlaceholder pattern

## Performance Impact

- **Before**: Importing full lucide-react (~2MB)
- **After**: Importing only used icons (~20KB for 144 icons)
- **Savings**: ~99% reduction in icon library size

## Maintenance

The script is automatically run:
- During development via `pnpm dev` (includes `pnpm icons:dev`)
- When you run `pnpm registry:build`
- Manually via the commands above

No manual maintenance required - just use `IconPlaceholder` in your components and the script handles the rest!

## Changes from Original

This script has been simplified from the original multi-library version to focus exclusively on Lucide icons, which is the icon library chosen for this design system. This removes dependencies on deleted packages and makes the codebase cleaner and more maintainable.
