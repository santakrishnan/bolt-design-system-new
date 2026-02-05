# Renaming v4 to app - Analysis & Plan

## Current Situation

The main application is in `apps/bolt/` with package name `"v4"`. This refers to version 4 of the shadcn/ui documentation site.

### Why "v4" Exists

Looking at the structure:
- `deprecated/www/` - Old version (v3 or earlier)
- `deprecated/cli/` - Old CLI version
- `apps/bolt/` - Current version (v4)

The "v4" naming was used to distinguish from previous versions during migration.

## Should We Rename It?

### Option 1: Rename to "app" ✅ Recommended

**Benefits:**
- Clearer naming (it's the main app)
- No version number confusion
- More professional for your fork
- Simpler to understand

**Effort Required:**
- Low to Medium (mostly find/replace)
- ~30-60 minutes of work
- Low risk if done carefully

**Verdict:** Yes, rename it! Since this is now "Bolt Design System" (not shadcn/ui v4), the version number doesn't make sense.

### Option 2: Keep "v4" ❌ Not Recommended

**Benefits:**
- No changes needed
- Maintains compatibility with upstream

**Drawbacks:**
- Confusing naming (what's v4?)
- Doesn't reflect that this is Bolt Design System
- Implies there might be v5, v6, etc.

**Verdict:** Not ideal for a fork with a new name.

## Rename Plan

### Step 1: Rename Directory

```bash
# Rename the directory
mv apps/v4 apps/app
```

### Step 2: Update Package Name

**File: `apps/app/package.json`**
```json
{
  "name": "app",  // Changed from "v4"
  "version": "0.1.0",
  // ... rest stays the same
}
```

### Step 3: Update Root package.json Scripts

**File: `package.json`**

Replace all `--filter=bolt` with `--filter=app`:

```json
{
  "scripts": {
    "registry:build": "pnpm --filter=app registry:build && pnpm lint:fix && pnpm format:write -- --loglevel silent",
    "registry:capture": "pnpm --filter=app registry:capture",
    "examples:build": "pnpm --filter=app examples:build",
    "app:dev": "pnpm --filter=app dev",  // Changed from bolt:dev
    "app:build": "pnpm --filter=app build",  // Changed from bolt:build
    "test": "start-server-and-test app:dev http://localhost:4000 test:dev",  // Changed
    "validate:registries": "pnpm --filter=app validate:registries",
    "test:apps": "pnpm --filter=app test:apps"
  }
}
```

### Step 4: Update Documentation Files

Update all references in:
- `README.md`
- `CONTRIBUTING.md`
- `agents.md`
- `.kiro/steering/*.md`
- `INSTALLATION_GUIDE.md`
- `UPGRADE_SUMMARY.md`
- `apps/app/README.md`

Replace:
- `apps/bolt/` → `apps/app/`
- `--filter=bolt` → `--filter=app`
- `bolt:dev` → `app:dev`
- `bolt:build` → `app:build`

### Step 5: Update GitHub Workflows

**File: `.github/workflows/validate-registries.yml`**
```yaml
- name: Validate registries
  run: pnpm --filter=app validate:registries  # Changed from v4
```

### Step 6: Update Import Paths (if any)

Check for any imports that reference the package name:
```bash
# Search for potential imports
grep -r "from 'v4'" .
grep -r "from \"v4\"" .
```

Most likely none, since it's a private package.

### Step 7: Clear Caches and Reinstall

```bash
# Clear all caches
rm -rf node_modules
rm -rf apps/app/node_modules
rm -rf apps/app/.next
rm -rf .turbo
rm pnpm-lock.yaml

# Reinstall
pnpm install
```

### Step 8: Test Everything

```bash
# Test development
pnpm app:dev

# Test build
pnpm app:build

# Test registry
pnpm registry:build

# Test validation
pnpm validate:registries

# Run tests
pnpm test
```

## Files to Update

### Critical (Must Update)

1. ✅ `apps/bolt/` → `apps/app/` (directory rename)
2. ✅ `apps/app/package.json` - Change name to "app"
3. ✅ `package.json` - Update all scripts
4. ✅ `.github/workflows/validate-registries.yml`

### Documentation (Should Update)

5. ✅ `README.md`
6. ✅ `CONTRIBUTING.md`
7. ✅ `agents.md`
8. ✅ `.kiro/steering/project-standards.md`
9. ✅ `.kiro/steering/ai-development-guide.md`
10. ✅ `.kiro/steering/getting-started.md`
11. ✅ `INSTALLATION_GUIDE.md`
12. ✅ `UPGRADE_SUMMARY.md`
13. ✅ `apps/app/README.md`
14. ✅ `APP_STRUCTURE_EXPLAINED.md`
15. ✅ `CLEANUP_SUMMARY.md`

## Automated Rename Script

I can create a script to do this automatically:

```bash
#!/bin/bash
# rename-v4-to-app.sh

set -e

echo "🔄 Renaming v4 to app..."

# 1. Rename directory
echo "📁 Renaming directory..."
mv apps/v4 apps/app

# 2. Update package.json files
echo "📦 Updating package.json..."
sed -i '' 's/"name": "v4"/"name": "app"/g' apps/app/package.json

# 3. Update root package.json
sed -i '' 's/--filter=bolt/--filter=app/g' package.json
sed -i '' 's/bolt:dev/app:dev/g' package.json
sed -i '' 's/bolt:build/app:build/g' package.json

# 4. Update all markdown files
echo "📝 Updating documentation..."
find . -name "*.md" -type f -exec sed -i '' 's/apps\/v4\//apps\/app\//g' {} +
find . -name "*.md" -type f -exec sed -i '' 's/--filter=bolt/--filter=app/g' {} +
find . -name "*.md" -type f -exec sed -i '' 's/bolt:dev/app:dev/g' {} +
find . -name "*.md" -type f -exec sed -i '' 's/bolt:build/app:build/g' {} +

# 5. Update GitHub workflows
echo "🔧 Updating workflows..."
find .github -name "*.yml" -type f -exec sed -i '' 's/--filter=bolt/--filter=app/g' {} +

# 6. Clean and reinstall
echo "🧹 Cleaning caches..."
rm -rf node_modules
rm -rf apps/app/node_modules
rm -rf apps/app/.next
rm -rf .turbo
rm -f pnpm-lock.yaml

echo "📥 Reinstalling dependencies..."
pnpm install

echo "✅ Rename complete!"
echo ""
echo "Next steps:"
echo "  1. Test: pnpm app:dev"
echo "  2. Build: pnpm app:build"
echo "  3. Commit changes"
```

## Recommendation

**Yes, rename v4 to app!**

Reasons:
1. This is now "Bolt Design System", not shadcn/ui v4
2. Clearer, more professional naming
3. No version confusion
4. Easy to do (low risk)
5. Better for future maintenance

## Alternative: Rename to "bolt"

You could also rename it to match your project:

```bash
mv apps/v4 apps/bolt
# Update package name to "bolt"
```

This would make it even clearer that this is the Bolt Design System.

## Next Steps

Would you like me to:

1. **Execute the rename to "app"** - Standard naming
2. **Execute the rename to "bolt"** - Brand-specific naming
3. **Keep v4** - No changes

I recommend option 1 (rename to "app") or option 2 (rename to "bolt").
