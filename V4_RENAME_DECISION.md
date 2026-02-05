# Should We Rename v4? - Decision Guide

## Quick Answer

**Yes, we should rename it!** The "v4" naming made sense for shadcn/ui (version 4), but for Bolt Design System it's confusing.

## Current Situation

```
apps/
└── v4/              # Package name: "v4"
    ├── app/         # Next.js app
    ├── components/  # Components
    └── content/     # Documentation
```

The "v4" refers to version 4 of shadcn/ui documentation. Since this is now **Bolt Design System**, the version number doesn't make sense.

## Rename Options

### Option 1: Rename to "app" ⭐ Recommended

**Command:**
```bash
./scripts/rename-v4-to-app.sh
```

**Result:**
```
apps/
└── app/             # Package name: "app"
    ├── app/         # Next.js app
    ├── components/  # Components
    └── content/     # Documentation
```

**Scripts become:**
- `pnpm app:dev` (was `pnpm bolt:dev`)
- `pnpm app:build` (was `pnpm bolt:build`)
- `pnpm --filter=app dev`

**Pros:**
- ✅ Clear, standard naming
- ✅ No version confusion
- ✅ Professional
- ✅ Easy to understand

**Cons:**
- Generic name (but that's fine for a monorepo)

### Option 2: Rename to "bolt" 🎯 Brand-Specific

**Command:**
```bash
./scripts/rename-v4-to-bolt.sh
```

**Result:**
```
apps/
└── bolt/            # Package name: "bolt"
    ├── app/         # Next.js app
    ├── components/  # Components
    └── content/     # Documentation
```

**Scripts become:**
- `pnpm bolt:dev` (was `pnpm bolt:dev`)
- `pnpm bolt:build` (was `pnpm bolt:build`)
- `pnpm --filter=bolt dev`

**Pros:**
- ✅ Matches your brand (Bolt Design System)
- ✅ Very clear what it is
- ✅ Professional
- ✅ Unique

**Cons:**
- None really!

### Option 3: Keep "v4" ❌ Not Recommended

**No changes needed**

**Pros:**
- No work required
- Maintains upstream compatibility

**Cons:**
- ❌ Confusing (what's v4?)
- ❌ Implies there might be v5, v6
- ❌ Doesn't reflect Bolt branding
- ❌ Looks like you forgot to rename it

## Recommendation

### Best Choice: Rename to "bolt" 🎯

Since this is **Bolt Design System**, naming the main app "bolt" makes the most sense:

1. **Brand alignment** - Matches your project name
2. **Clear purpose** - Everyone knows what "bolt" is
3. **Professional** - Shows attention to detail
4. **Future-proof** - No version confusion

### Alternative: Rename to "app"

If you prefer generic naming, "app" is also good:

1. **Standard** - Common in monorepos
2. **Clear** - It's the main application
3. **Simple** - Easy to understand

## What Gets Updated

Both scripts automatically update:

✅ Directory name (`apps/v4` → `apps/bolt` or `apps/app`)
✅ Package name in `package.json`
✅ All scripts in root `package.json`
✅ All documentation files (`.md`)
✅ GitHub workflows
✅ CONTRIBUTING.md
✅ Cleans caches

## How to Execute

### For "bolt" (Recommended):

```bash
# Run the rename script
./scripts/rename-v4-to-bolt.sh

# Reinstall dependencies
pnpm install

# Test it works
pnpm bolt:dev

# Commit the changes
git add .
git commit -m "refactor: rename v4 to bolt for brand alignment"
```

### For "app" (Alternative):

```bash
# Run the rename script
./scripts/rename-v4-to-app.sh

# Reinstall dependencies
pnpm install

# Test it works
pnpm app:dev

# Commit the changes
git add .
git commit -m "refactor: rename v4 to app for clarity"
```

## Safety

Both scripts are safe:

- ✅ Check if source exists before running
- ✅ Check if destination doesn't exist
- ✅ Use `set -e` to stop on errors
- ✅ Work on both macOS and Linux
- ✅ Don't modify node_modules or .git
- ✅ Clean caches after rename

## Time Required

- **Script execution**: ~10 seconds
- **pnpm install**: 2-5 minutes
- **Testing**: 5 minutes
- **Total**: ~10 minutes

## Risk Level

**Low Risk** ✅

- It's mostly find/replace
- Scripts are tested
- Easy to verify
- Can be reverted if needed

## After Rename

Your commands will be:

**If renamed to "bolt":**
```bash
pnpm bolt:dev              # Start dev server
pnpm bolt:build            # Build for production
pnpm --filter=bolt dev     # Run in bolt workspace
```

**If renamed to "app":**
```bash
pnpm app:dev               # Start dev server
pnpm app:build             # Build for production
pnpm --filter=app dev      # Run in app workspace
```

## My Recommendation

**Execute the rename to "bolt"** 🎯

Why?
1. This is Bolt Design System, not shadcn/ui v4
2. Brand alignment is important
3. Makes the project feel more cohesive
4. Shows professionalism and attention to detail
5. Only takes 10 minutes

Run:
```bash
./scripts/rename-v4-to-bolt.sh
pnpm install
pnpm bolt:dev
```

## Questions?

**Q: Will this break anything?**
A: No, the scripts update all references. Just reinstall dependencies after.

**Q: Can I undo it?**
A: Yes, you can revert the git commit or manually rename back.

**Q: What if I want a different name?**
A: You can manually edit the scripts to use any name you want.

**Q: Should I do this before or after pnpm install?**
A: **Before!** Run the rename script first, then `pnpm install`.

## Decision

Choose one:

1. ✅ **Rename to "bolt"** - Run `./scripts/rename-v4-to-bolt.sh`
2. ⭐ **Rename to "app"** - Run `./scripts/rename-v4-to-app.sh`
3. ❌ **Keep v4** - Do nothing (not recommended)

I strongly recommend option 1 (bolt) for brand alignment! 🎯
