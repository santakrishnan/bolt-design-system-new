# Build Scripts Overview

## Location
All build scripts are in `apps/bolt/scripts/`

## Scripts Summary

### 1. build-registry.mts (Main Build Script)
**Purpose**: Builds the complete component registry for distribution

**What it does**:
1. Combines bases (radix/base) with styles (vega/nova/maia/lyra/mira)
2. Generates `registry/__index__.tsx` for lazy-loading components
3. Creates `public/r/styles/{style}/registry.json` for shadcn CLI
4. Builds blocks index (`registry/__blocks__.json`)
5. Copies UI to examples directories
6. Generates RTL (right-to-left) variants
7. Cleans up intermediate files

**Run**: `pnpm registry:build`

**Output**:
- `registry/new-york-v4/` - Styled components
- `public/r/styles/` - JSON files for CLI
- `examples/{base}/ui/` - Example components
- `examples/{base}/ui-rtl/` - RTL variants

---

### 2. validate-registries.mts
**Purpose**: Validates registry JSON files and endpoints

**What it does**:
1. Validates `public/r/registries.json` schema
2. Checks all directory entries are in registries
3. Fetches and validates each registry endpoint
4. Ensures JSON matches registry schema

**Run**: `pnpm validate:registries`

**Use case**: Before deploying, ensure all registry files are valid

---

### 3. capture-registry.mts
**Purpose**: Captures screenshots of blocks for documentation

**What it does**:
1. Launches Puppeteer browser
2. Visits each block at `http://localhost:4000/view/{block}`
3. Captures light and dark mode screenshots
4. Saves to `public/r/styles/new-york-v4/{block}-{theme}.png`

**Run**: `pnpm registry:capture`

**Requirements**: Dev server must be running on port 4000

---

### 4. build-examples.ts
**Purpose**: Generates examples index for documentation

**What it does**:
1. Scans `examples/{base}/` directories
2. Finds all `.tsx` files
3. Generates `examples/__index__.tsx` with lazy-loaded components
4. Creates metadata for each example

**Run**: `pnpm examples:build`

**Output**: `examples/__index__.tsx`

---

### 5. build-icons.ts
**Purpose**: Scans components and generates icon exports

**What it does**:
1. Scans `registry/bases/` for `IconPlaceholder` usage
2. Extracts icon names from all supported libraries
3. Generates `registry/icons/__{library}__.ts` files
4. Creates optimized icon exports

**Run**: `pnpm icons:build`

**Watch mode**: `pnpm icons:build --watch`

**Output**: 
- `registry/icons/__lucide__.ts`
- `registry/icons/__hugeicons__.ts`
- `registry/icons/__tabler__.ts`
- `registry/icons/__phosphor__.ts`
- `registry/icons/__remixicon__.ts`

---

### 6. build-test-app.mts
**Purpose**: Builds test applications for component testing

**What it does**:
1. Copies UI components to test app directories
2. Transforms styles and icons
3. Generates example pages
4. Generates block pages
5. Updates layout with selected style

**Run**: `pnpm test:apps [STYLE]`

**Example**: `pnpm test:apps nova`

**Requirements**: Clone ui-test-apps repo to `../../../ui-test-apps`

**Output**: Populated test apps in `ui-test-apps/next-radix` and `ui-test-apps/next-base`

---

## Build Flow

```
1. pnpm registry:build
   ↓
   Builds all style combinations
   ↓
   Generates public JSON files
   ↓
   Creates examples
   ↓
   Builds RTL variants
   ↓
2. pnpm validate:registries
   ↓
   Validates all JSON files
   ↓
3. pnpm registry:capture
   ↓
   Captures block screenshots
   ↓
4. Ready for deployment!
```

## Common Commands

```bash
# Full build
pnpm registry:build

# Validate
pnpm validate:registries

# Build examples
pnpm examples:build

# Build icons
pnpm icons:build

# Capture screenshots (requires dev server)
pnpm dev  # In one terminal
pnpm registry:capture  # In another terminal

# Test with specific style
pnpm test:apps nova
```

## Key Transformations

### Style Transformation
```typescript
// Input (canonical)
<div className="cn-bg-primary">

// Output (vega style)
<div className="bg-blue-600">
```

### Icon Transformation
```typescript
// Input
<IconPlaceholder lucide="Check" />

// Output
import { Check } from "lucide-react"
<Check />
```

### Import Transformation
```typescript
// Input
import { Button } from "@/registry/bases/radix/ui/button"

// Output
import { Button } from "@/components/ui/button"
```

## File Locations

### Source Files
- `registry/bases/{base}/` - Base components
- `registry/styles/` - Style CSS files
- `registry/config.ts` - Configuration

### Generated Files
- `registry/new-york-v4/` - Styled components (whitelisted)
- `registry/__index__.tsx` - Component index
- `registry/__blocks__.json` - Blocks index
- `examples/__index__.tsx` - Examples index
- `registry/icons/__*.ts` - Icon exports

### Public Files (for CLI)
- `public/r/styles/` - Registry JSON files
- `public/r/config.json` - Configuration
- `public/r/registries.json` - Registry list

## Dependencies

### Build Tools
- **ts-morph**: TypeScript AST manipulation
- **rimraf**: Cross-platform file deletion
- **puppeteer**: Browser automation for screenshots
- **shadcn**: CLI and utilities

### Transformers
- `transformStyle()`: Applies style mappings
- `transformIcons()`: Converts IconPlaceholder to actual icons
- `transformDirection()`: Converts to RTL
- `createStyleMap()`: Parses style CSS

## Performance

The build process is highly parallelized:
- All bases build in parallel
- All styles build in parallel
- All file transformations in parallel
- Typical build time: 10-30 seconds

## Debugging

### Enable verbose logging
```typescript
// In build-registry.mts
console.log("Processing:", item.name)
```

### Check intermediate files
```bash
# Before cleanup
ls registry/radix-vega/
ls registry/base-nova/

# After cleanup (only whitelisted)
ls registry/new-york-v4/
```

### Validate specific registry
```bash
# Check JSON
cat public/r/styles/new-york-v4/registry.json | jq

# Validate schema
pnpm validate:registries
```

## Extending the Build

### Add a new style
1. Create `registry/styles/style-{name}.css`
2. Add to `registry/styles.tsx`
3. Run `pnpm registry:build`

### Add a new base
1. Create `registry/bases/{name}/`
2. Add to `registry/bases.ts`
3. Create `registry.ts` with metadata
4. Run `pnpm registry:build`

### Add a new component
1. Create in `registry/bases/{base}/ui/{name}.tsx`
2. Add metadata to `registry/bases/{base}/registry.ts`
3. Run `pnpm registry:build`

## CI/CD Integration

```yaml
# Example GitHub Actions
- name: Build Registry
  run: pnpm registry:build

- name: Validate Registry
  run: pnpm validate:registries

- name: Deploy
  run: |
    aws s3 sync public/r/ s3://your-bucket/r/
```

## Summary

The build scripts transform source components into a distributable registry that:
1. Supports multiple UI libraries (Radix, Base UI)
2. Supports multiple visual styles (Vega, Nova, Maia, Lyra, Mira)
3. Supports multiple icon libraries (Lucide, Hugeicons, Tabler, etc.)
4. Supports RTL languages
5. Works with shadcn CLI
6. Includes complete metadata
7. Provides screenshots and examples

This allows developers to install components with:
```bash
npx shadcn@latest add button
```

And get a fully-styled, accessible component that matches their design system preferences.
