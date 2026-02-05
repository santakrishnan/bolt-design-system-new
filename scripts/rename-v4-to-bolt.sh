#!/bin/bash

# Bolt Design System - Rename v4 to bolt
# This script renames the v4 package to bolt for brand-specific naming

set -e

echo "🔄 Renaming v4 to bolt..."
echo ""

# Check if apps/v4 exists
if [ ! -d "apps/v4" ]; then
    echo "❌ Error: apps/v4 directory not found"
    exit 1
fi

# Check if apps/bolt already exists
if [ -d "apps/bolt" ]; then
    echo "❌ Error: apps/bolt already exists"
    exit 1
fi

# 1. Rename directory
echo "📁 Step 1/7: Renaming directory apps/v4 → apps/bolt..."
mv apps/v4 apps/bolt
echo "✓ Directory renamed"
echo ""

# 2. Update apps/bolt/package.json
echo "📦 Step 2/7: Updating apps/bolt/package.json..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's/"name": "v4"/"name": "bolt"/g' apps/bolt/package.json
else
    # Linux
    sed -i 's/"name": "v4"/"name": "bolt"/g' apps/bolt/package.json
fi
echo "✓ Package name updated"
echo ""

# 3. Update root package.json
echo "📦 Step 3/7: Updating root package.json..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's/--filter=v4/--filter=bolt/g' package.json
    sed -i '' 's/"v4:dev"/"bolt:dev"/g' package.json
    sed -i '' 's/"v4:build"/"bolt:build"/g' package.json
    sed -i '' 's/v4:dev/bolt:dev/g' package.json
else
    # Linux
    sed -i 's/--filter=v4/--filter=bolt/g' package.json
    sed -i 's/"v4:dev"/"bolt:dev"/g' package.json
    sed -i 's/"v4:build"/"bolt:build"/g' package.json
    sed -i 's/v4:dev/bolt:dev/g' package.json
fi
echo "✓ Root package.json updated"
echo ""

# 4. Update all markdown files
echo "📝 Step 4/7: Updating documentation files..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/apps\/v4\//apps\/bolt\//g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/--filter=v4/--filter=bolt/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/v4:dev/bolt:dev/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/v4:build/bolt:build/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/`v4`/`bolt`/g' {} +
else
    # Linux
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/apps\/v4\//apps\/bolt\//g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/--filter=v4/--filter=bolt/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/v4:dev/bolt:dev/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/v4:build/bolt:build/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/`v4`/`bolt`/g' {} +
fi
echo "✓ Documentation updated"
echo ""

# 5. Update GitHub workflows
echo "🔧 Step 5/7: Updating GitHub workflows..."
if [ -d ".github" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        find .github -name "*.yml" -type f -exec sed -i '' 's/--filter=v4/--filter=bolt/g' {} +
    else
        # Linux
        find .github -name "*.yml" -type f -exec sed -i 's/--filter=v4/--filter=bolt/g' {} +
    fi
    echo "✓ Workflows updated"
else
    echo "⚠ No .github directory found (skipping)"
fi
echo ""

# 6. Update CONTRIBUTING.md
echo "📝 Step 6/7: Updating CONTRIBUTING.md..."
if [ -f "CONTRIBUTING.md" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' 's/pnpm --filter=v4/pnpm --filter=bolt/g' CONTRIBUTING.md
    else
        sed -i 's/pnpm --filter=v4/pnpm --filter=bolt/g' CONTRIBUTING.md
    fi
    echo "✓ CONTRIBUTING.md updated"
else
    echo "⚠ CONTRIBUTING.md not found (skipping)"
fi
echo ""

# 7. Clean caches
echo "🧹 Step 7/7: Cleaning caches..."
echo "Removing node_modules, .next, .turbo, and pnpm-lock.yaml..."
rm -rf node_modules
rm -rf apps/bolt/node_modules
rm -rf apps/bolt/.next
rm -rf .turbo
rm -f pnpm-lock.yaml
echo "✓ Caches cleaned"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Rename complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Summary of changes:"
echo "  • apps/v4/ → apps/bolt/"
echo "  • Package name: v4 → bolt"
echo "  • Scripts: v4:dev → bolt:dev, v4:build → bolt:build"
echo "  • All documentation updated"
echo "  • Caches cleaned"
echo ""
echo "Next steps:"
echo "  1. Run: pnpm install"
echo "  2. Test: pnpm bolt:dev"
echo "  3. Build: pnpm bolt:build"
echo "  4. Commit: git add . && git commit -m 'refactor: rename v4 to bolt'"
echo ""
