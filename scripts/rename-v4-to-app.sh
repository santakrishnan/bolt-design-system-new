#!/bin/bash

# Bolt Design System - Rename v4 to app
# This script renames the v4 package to app for clearer naming

set -e

echo "🔄 Renaming v4 to app..."
echo ""

# Check if apps/v4 exists
if [ ! -d "apps/v4" ]; then
    echo "❌ Error: apps/v4 directory not found"
    exit 1
fi

# Check if apps/app already exists
if [ -d "apps/app" ]; then
    echo "❌ Error: apps/app already exists"
    exit 1
fi

# 1. Rename directory
echo "📁 Step 1/7: Renaming directory apps/v4 → apps/app..."
mv apps/v4 apps/app
echo "✓ Directory renamed"
echo ""

# 2. Update apps/app/package.json
echo "📦 Step 2/7: Updating apps/app/package.json..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's/"name": "v4"/"name": "app"/g' apps/app/package.json
else
    # Linux
    sed -i 's/"name": "v4"/"name": "app"/g' apps/app/package.json
fi
echo "✓ Package name updated"
echo ""

# 3. Update root package.json
echo "📦 Step 3/7: Updating root package.json..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's/--filter=v4/--filter=app/g' package.json
    sed -i '' 's/"v4:dev"/"app:dev"/g' package.json
    sed -i '' 's/"v4:build"/"app:build"/g' package.json
    sed -i '' 's/v4:dev/app:dev/g' package.json
else
    # Linux
    sed -i 's/--filter=v4/--filter=app/g' package.json
    sed -i 's/"v4:dev"/"app:dev"/g' package.json
    sed -i 's/"v4:build"/"app:build"/g' package.json
    sed -i 's/v4:dev/app:dev/g' package.json
fi
echo "✓ Root package.json updated"
echo ""

# 4. Update all markdown files
echo "📝 Step 4/7: Updating documentation files..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/apps\/v4\//apps\/app\//g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/--filter=v4/--filter=app/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/v4:dev/app:dev/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/v4:build/app:build/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i '' 's/`v4`/`app`/g' {} +
else
    # Linux
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/apps\/v4\//apps\/app\//g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/--filter=v4/--filter=app/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/v4:dev/app:dev/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/v4:build/app:build/g' {} +
    find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -exec sed -i 's/`v4`/`app`/g' {} +
fi
echo "✓ Documentation updated"
echo ""

# 5. Update GitHub workflows
echo "🔧 Step 5/7: Updating GitHub workflows..."
if [ -d ".github" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        find .github -name "*.yml" -type f -exec sed -i '' 's/--filter=v4/--filter=app/g' {} +
    else
        # Linux
        find .github -name "*.yml" -type f -exec sed -i 's/--filter=v4/--filter=app/g' {} +
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
        sed -i '' 's/pnpm --filter=v4/pnpm --filter=app/g' CONTRIBUTING.md
    else
        sed -i 's/pnpm --filter=v4/pnpm --filter=app/g' CONTRIBUTING.md
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
rm -rf apps/app/node_modules
rm -rf apps/app/.next
rm -rf .turbo
rm -f pnpm-lock.yaml
echo "✓ Caches cleaned"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Rename complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Summary of changes:"
echo "  • apps/v4/ → apps/app/"
echo "  • Package name: v4 → app"
echo "  • Scripts: v4:dev → app:dev, v4:build → app:build"
echo "  • All documentation updated"
echo "  • Caches cleaned"
echo ""
echo "Next steps:"
echo "  1. Run: pnpm install"
echo "  2. Test: pnpm app:dev"
echo "  3. Build: pnpm app:build"
echo "  4. Commit: git add . && git commit -m 'refactor: rename v4 to app'"
echo ""
