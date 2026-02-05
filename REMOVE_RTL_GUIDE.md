# Remove RTL Support Guide

## Impact Summary

Removing RTL (Right-to-Left) support will:
- **Reduce codebase**: ~1-1.5 MB of code
- **Faster builds**: Less files to process
- **Simpler maintenance**: No RTL variants to maintain
- **Smaller bundle**: ~500-800KB reduction in production

## What Will Be Removed

### 1. RTL UI Directories (656 KB)
```
apps/bolt/examples/radix/ui-rtl/  (55 files, 332KB)
apps/bolt/examples/base/ui-rtl/   (55 files, 324KB)
```

### 2. RTL Example Files (112 files)
```
apps/bolt/examples/radix/*-rtl.tsx
apps/bolt/examples/base/*-rtl.tsx
```

### 3. RTL Documentation
- RTL sections in component MDX files
- RTL configuration docs (`apps/bolt/content/docs/rtl/`)

### 4. RTL Build Scripts
- RTL generation in `apps/bolt/scripts/build-registry.mts`
- RTL transformation utilities

## Step-by-Step Removal

### Step 1: Remove RTL Directories
```bash
rm -rf apps/bolt/examples/radix/ui-rtl
rm -rf apps/bolt/examples/base/ui-rtl
```

### Step 2: Remove RTL Example Files
```bash
find apps/bolt/examples -name "*-rtl.tsx" -delete
```

### Step 3: Remove RTL Documentation
```bash
rm -rf apps/bolt/content/docs/rtl
```

### Step 4: Update Build Scripts

Edit `apps/bolt/scripts/build-registry.mts`:

Remove the `buildRtlExamples()` function and its call:

```typescript
// Remove this function
async function buildRtlExamples() {
  // ... entire function
}

// Remove this call in main build
console.log("\n🔄 Building RTL examples...")
await buildRtlExamples()
```

### Step 5: Remove RTL from MDX Files

Search and remove RTL sections from component docs:

```bash
# Find all files with RTL sections
grep -r "## RTL" apps/bolt/content/docs/components/
```

Remove sections like:
```mdx
## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview styleName="base-nova" name="button-rtl" direction="rtl" />
```

### Step 6: Update Navigation

Edit `apps/bolt/lib/config.ts` and remove RTL navigation links.

### Step 7: Clean Up Language Selector

If you're not using RTL, you can also remove:
- `apps/bolt/components/language-selector.tsx`
- Language selector references in examples

### Step 8: Rebuild Registry
```bash
pnpm registry:build
```

## Automated Removal Script

Create `scripts/remove-rtl.sh`:

```bash
#!/bin/bash

echo "🗑️  Removing RTL support..."

# Remove RTL directories
echo "Removing ui-rtl directories..."
rm -rf apps/bolt/examples/radix/ui-rtl
rm -rf apps/bolt/examples/base/ui-rtl

# Remove RTL example files
echo "Removing RTL example files..."
find apps/bolt/examples -name "*-rtl.tsx" -delete

# Remove RTL documentation
echo "Removing RTL documentation..."
rm -rf apps/bolt/content/docs/rtl

# Move removed files to deprecated
echo "Archiving removed files..."
mkdir -p deprecated/rtl-removed-$(date +%Y%m%d)
# (files already deleted, just documenting)

echo "✅ RTL support removed!"
echo ""
echo "Next steps:"
echo "1. Edit apps/bolt/scripts/build-registry.mts (remove buildRtlExamples)"
echo "2. Remove RTL sections from MDX files"
echo "3. Run: pnpm registry:build"
echo "4. Test build: pnpm build"
```

## Manual Cleanup Required

### 1. Edit build-registry.mts

Remove these lines:

```typescript
// Line ~90: Remove function call
console.log("\n🔄 Building RTL examples...")
await buildRtlExamples()

// Line ~500+: Remove entire function
async function buildRtlExamples() {
  // ... remove entire function (50+ lines)
}
```

### 2. Clean MDX Files

For each component MDX file, remove:

```mdx
## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview styleName="radix-nova" name="component-rtl" direction="rtl" />
```

Files to update (partial list):
- `apps/bolt/content/docs/components/base/alert-dialog.mdx`
- `apps/bolt/content/docs/components/base/tooltip.mdx`
- `apps/bolt/content/docs/components/base/label.mdx`
- `apps/bolt/content/docs/components/radix/menubar.mdx`
- `apps/bolt/content/docs/components/radix/switch.mdx`
- `apps/bolt/content/docs/components/radix/kbd.mdx`
- ... (50+ more files)

### 3. Update Navigation

Edit `apps/bolt/lib/config.ts`:

Remove RTL navigation items:
```typescript
{
  title: "RTL",
  href: "/docs/rtl",
  items: [],
}
```

## Verification

After removal:

```bash
# Verify no RTL files remain
find apps/bolt -name "*rtl*" -type f

# Verify build works
pnpm registry:build

# Verify production build
pnpm build

# Check bundle size reduction
du -sh apps/bolt/.next
```

## Size Comparison

### Before Removal
```
examples/radix/ui-rtl/     332KB
examples/base/ui-rtl/      324KB
examples/*-rtl.tsx         ~200KB
content/docs/rtl/          ~50KB
Total:                     ~900KB
```

### After Removal
```
All RTL files:             0KB
Savings:                   ~900KB
```

## Rollback Plan

If you need to restore RTL:

```bash
# Restore from git
git checkout HEAD -- apps/bolt/examples/radix/ui-rtl
git checkout HEAD -- apps/bolt/examples/base/ui-rtl
git checkout HEAD -- apps/bolt/content/docs/rtl

# Restore RTL examples
git checkout HEAD -- 'apps/bolt/examples/**/*-rtl.tsx'

# Rebuild
pnpm registry:build
```

## Alternative: Keep RTL Minimal

If you want to keep RTL but reduce size:

1. **Keep only ui-rtl directories** (for registry)
2. **Remove RTL example files** (saves ~200KB)
3. **Remove RTL documentation** (saves ~50KB)
4. **Keep build scripts** (for future use)

This gives you RTL capability without the documentation overhead.

## Recommendation

**For Bolt Design System**: Remove RTL completely

**Reasons:**
1. You haven't mentioned RTL requirements
2. Reduces maintenance burden
3. Faster builds
4. Simpler codebase
5. Can always add back later if needed

**When to Keep RTL:**
- Building for international markets
- Supporting Arabic/Hebrew/Persian languages
- Want feature parity with shadcn/ui
- Building a public design system

## Conclusion

Removing RTL will save ~900KB-1.5MB and simplify your codebase. Since you're building a custom design system and haven't mentioned RTL requirements, I recommend removing it.

Run the automated script, then manually clean up the build scripts and MDX files.
