# Bolt Design System - Installation Guide

## ✅ Configuration Complete!

All updates have been successfully applied to the codebase. Follow the steps below to complete the installation.

## 📋 What Was Updated

### 1. Package Information
- ✅ Name: `@santakrishnan/bolt-design`
- ✅ Version: `0.0.0-development`
- ✅ Author: Santakrishnan

### 2. Latest Versions
- ✅ Next.js 16.1.6
- ✅ React 19.2.4
- ✅ Fumadocs 16.5.0
- ✅ Shiki 3.22.0
- ✅ Ultracite 7.1.4
- ✅ Biome 2.3.14
- ✅ Husky 9.1.7

### 3. New Scripts
- ✅ `pnpm check` - Validate code quality
- ✅ `pnpm fix` - Auto-fix issues
- ✅ `pnpm prepare` - Initialize git hooks

### 4. Configuration Files
- ✅ `agents.md` - AI agent guidelines
- ✅ `biome.jsonc` - Linting configuration
- ✅ `.kiro/steering/` - Project standards and guides
- ✅ `.husky/` - Git hooks

## 🚀 Installation Steps

### Step 1: Install Dependencies

```bash
pnpm install
```

This will:
- Install all updated dependencies
- Set up the monorepo workspaces
- Prepare the development environment

**Expected time**: 2-5 minutes depending on internet speed

### Step 2: Initialize Git Hooks

```bash
pnpm prepare
```

This will:
- Set up Husky git hooks
- Configure pre-commit checks
- Configure commit message validation

**Expected output**: Husky hooks installed successfully

### Step 3: Verify Installation

```bash
# Run validation script
./scripts/validate-setup.sh
```

This will check:
- Package configuration
- Required scripts
- Dependencies
- Configuration files
- Git hooks

**Expected result**: All checks should pass ✓

### Step 4: Test the Setup

```bash
# Check code quality
pnpm check

# Run type checking
pnpm typecheck

# Start development server
pnpm dev
```

Visit http://localhost:4000 to see the application running.

## 🔍 Verification Checklist

Run through this checklist to ensure everything is working:

- [ ] Dependencies installed (`node_modules` exists)
- [ ] Git hooks initialized (`.husky/_` directory exists)
- [ ] `pnpm check` runs without errors
- [ ] `pnpm typecheck` passes
- [ ] `pnpm dev` starts successfully
- [ ] Application loads at http://localhost:4000
- [ ] Git commit triggers pre-commit hooks

## 🎯 Quick Test

Test that everything works:

```bash
# 1. Check code quality
pnpm check
# Expected: ✓ All checks passed

# 2. Check types
pnpm typecheck
# Expected: No errors

# 3. Try to make a commit (test hooks)
git add .
git commit -m "test: verify setup"
# Expected: Hooks run and validate commit message

# 4. Start development
pnpm dev
# Expected: Server starts on http://localhost:4000
```

## 📚 Next Steps

### Understanding the App Structure

Before you start, understand the Next.js app structure:

**The app uses route groups** (folders with parentheses like `(app)`, `(view)`, etc.):
- This is a **standard Next.js pattern** for organizing routes with different layouts
- Route groups **don't affect URLs**: `app/(app)/docs/page.tsx` → `/docs`
- See [APP_STRUCTURE_EXPLAINED.md](./APP_STRUCTURE_EXPLAINED.md) for details
- See `apps/bolt/app/README.md` for complete documentation

**Why route groups?**
- Different sections need different layouts (header/footer vs. no layout)
- Keeps related routes organized together
- Clean URLs without extra segments

### For Developers

1. **Read the documentation**
   - [agents.md](./agents.md) - Project overview
   - [.kiro/steering/getting-started.md](./.kiro/steering/getting-started.md) - Getting started guide
   - [.kiro/steering/project-standards.md](./.kiro/steering/project-standards.md) - Coding standards

2. **Explore the codebase**
   - `apps/bolt/components/ui/` - UI components
   - `apps/bolt/content/` - Documentation
   - `apps/bolt/registry.json` - Component registry

3. **Start developing**
   ```bash
   pnpm dev
   ```

### For AI Assistants

1. **Review AI configuration**
   - [agents.md](./agents.md) - Complete guidelines
   - [.kiro/steering/ai-development-guide.md](./.kiro/steering/ai-development-guide.md) - Development patterns

2. **Understand the standards**
   - Code quality enforced by Ultracite/Biome
   - TypeScript strict mode enabled
   - Conventional commits required

3. **Follow the workflow**
   - Always run `pnpm check` before committing
   - Use `pnpm fix` to auto-fix issues
   - Reference steering files for patterns

## 🔧 Troubleshooting

### Issue: `pnpm install` fails

**Solution:**
```bash
# Clear cache and retry
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Issue: Git hooks not working

**Solution:**
```bash
# Reinstall hooks
rm -rf .husky
pnpm prepare
chmod +x .husky/pre-commit .husky/commit-msg
```

### Issue: `pnpm check` fails

**Solution:**
```bash
# Auto-fix issues
pnpm fix

# Check remaining issues
pnpm check

# Review biome.jsonc for configuration
```

### Issue: TypeScript errors

**Solution:**
```bash
# Check for errors
pnpm typecheck

# Common fixes:
# 1. Restart TypeScript server in IDE
# 2. Clear build cache: rm -rf .next .turbo
# 3. Reinstall dependencies: pnpm install
```

### Issue: Build fails

**Solution:**
```bash
# Clear all caches
rm -rf .next .turbo node_modules
pnpm install
pnpm build
```

## ⚠️ Important Notes

### Shiki 3.x Breaking Changes

Shiki was updated from v1.10.1 to v3.22.0 (major version change). After installation:

1. Test code highlighting in documentation pages
2. Check syntax highlighting themes
3. Review [Shiki migration guide](https://shiki.style/guide/migrate) if issues occur

**Files to check:**
- `apps/bolt/app/` - Pages with code blocks
- `apps/bolt/content/` - MDX files with code examples

### React 19 & Next.js 16

Both are stable but relatively new. Key features:
- React Compiler enabled
- New hooks: `use()`, `useOptimistic()`, `useFormStatus()`
- Turbopack as default bundler
- Server Actions improvements

## 📞 Support

### Getting Help

- **Documentation**: See [UPGRADE_SUMMARY.md](./UPGRADE_SUMMARY.md) for detailed changes
- **Issues**: Report bugs on GitHub Issues
- **Questions**: Check [.kiro/steering/getting-started.md](./.kiro/steering/getting-started.md)

### Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Quality
pnpm check            # Run all checks
pnpm fix              # Auto-fix issues
pnpm typecheck        # Check types
pnpm test             # Run tests

# Validation
./scripts/validate-setup.sh  # Validate setup
```

## ✨ Success!

Once all steps are complete, you're ready to start developing with:

- ✅ Latest stable versions of Next.js, React, and all dependencies
- ✅ Ultracite + Biome for code quality
- ✅ Husky git hooks for automated checks
- ✅ Comprehensive AI configuration
- ✅ Project standards and guidelines

**Happy coding!** 🚀

---

**Last Updated**: February 4, 2026
**Version**: 0.0.0-development
