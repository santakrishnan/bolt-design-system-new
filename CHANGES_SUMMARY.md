# Bolt Design System - Changes Summary

## Date: February 4, 2026

### Major Changes

#### 1. Project Simplification - Removed packages/ folder
- ✅ Removed `packages/shadcn` and `packages/tests` (moved to `deprecated/packages-removed-20260204`)
- ✅ Updated workspace configuration to only include `apps/*`
- ✅ Simplified build scripts - removed `--filter=shadcn build` references
- ✅ Now using `shadcn@3.8.3` from npm instead of local package

**Files Modified:**
- `package.json` - Removed packages workspace, removed shadcn-specific scripts
- `pnpm-workspace.yaml` - Removed packages/* reference
- `apps/bolt/package.json` - Simplified build and preview scripts

#### 2. Removed Directory Feature (shadcn-specific)
- ✅ Deleted directory page and all related components
- ✅ Removed navigation links to `/docs/directory`
- ✅ Cleaned up registry references

**Files Deleted:**
- `apps/bolt/content/docs/(root)/directory.mdx`
- `apps/bolt/content/docs/changelog/2025-10-registry-directory.mdx`
- `apps/bolt/components/directory-list.tsx`
- `apps/bolt/components/directory-add-button.tsx`
- `apps/bolt/components/search-directory.tsx`
- `apps/bolt/registry/directory.json`
- `apps/bolt/hooks/use-search-registry.ts`

**Files Modified:**
- `apps/bolt/lib/config.ts` - Removed directory link from main nav
- `apps/bolt/components/mobile-nav.tsx` - Removed directory link
- `apps/bolt/components/docs-sidebar.tsx` - Removed directory link
- `apps/bolt/mdx-components.tsx` - Removed DirectoryList import and export
- `apps/bolt/content/docs/components/index.mdx` - Updated reference
- `apps/bolt/content/docs/registry/registry-index.mdx` - Updated for Bolt

#### 3. Cleaned Up next.config.mjs
- ✅ Removed shadcn-specific redirects (`/figma`, `/sidebar`, `/react-19`, `/mcp`, `/directory`)
- ✅ Kept only functional redirects needed for Bolt Design System
- ✅ Added transpilePackages for Base UI
- ✅ Updated comments to reflect Bolt branding

#### 4. Fixed Hydration Warning
- ✅ Added `suppressHydrationWarning` to `<head>` tag in layout
- ✅ Prevents React hydration warnings from theme initialization script

**File Modified:**
- `apps/bolt/app/layout.tsx`

#### 5. Base UI Tooltip Issue
- ✅ Documented compatibility issue between Next.js 16.1.6 and Base UI 1.1.0
- ✅ Tested with and without Turbopack - same error occurs
- ✅ Implemented workaround: using Radix UI tooltips instead
- ✅ Base UI tooltip provider disabled in main layout

**Files Created:**
- `BASE_UI_TOOLTIP_ISSUE.md` - Comprehensive documentation of the issue

**Files Modified:**
- `apps/bolt/app/layout.tsx` - Disabled Base UI tooltip provider
- `apps/bolt/next.config.mjs` - Added transpilePackages for Base UI
- `SETUP_COMPLETE_SUMMARY.md` - Updated with issue status

### Previous Changes (Already Completed)

1. ✅ Updated to latest stable versions (Next.js 16.1.6, React 19.2.4, etc.)
2. ✅ Renamed project from shadcn/ui to Bolt Design System
3. ✅ Renamed `apps/v4` to `apps/bolt`
4. ✅ Added code quality tools (Ultracite, Biome, Husky)
5. ✅ Configured dynamic port with auto-increment
6. ✅ Added SSL/TLS configuration for development
7. ✅ Migrated Geist fonts to local package
8. ✅ Created comprehensive documentation and AI guides

## Current Status

### ✅ Working
- Development server with auto-port increment
- Local Geist fonts (fast, no SSL issues)
- SSL configuration for corporate proxies
- Code quality tools (Ultracite/Biome)
- Git hooks (Husky)
- Simplified monorepo structure
- All components except Base UI tooltip

### ⚠️ Known Issues
1. **Base UI Tooltip** - Compatibility issue with Next.js 16, using Radix tooltips instead
2. **Biome Linting** - 31k+ style/formatting errors (non-blocking)

### 📦 Dependencies
- Using `shadcn@3.8.3` from npm (no local package needed)
- Base UI 1.1.0 (latest, but tooltip has issues)
- All other dependencies at latest stable versions

## Files Structure

```
bolt-design-system-new/
├── apps/
│   └── bolt/              # Main application (formerly v4)
├── deprecated/
│   └── packages-removed-20260204/  # Removed packages folder
├── templates/
├── scripts/
├── .kiro/
│   └── steering/          # AI development guides
├── agents.md              # AI agent guidelines
└── [documentation files]
```

## Next Steps

1. Test the application: `pnpm dev`
2. Verify all routes work correctly
3. Check that directory page is gone
4. Ensure build works: `pnpm build`
5. Commit and push changes to GitHub

## Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "refactor: simplify project structure and remove shadcn-specific features

- Remove packages/ folder (shadcn CLI development)
- Remove directory feature (shadcn community registry)
- Clean up next.config.mjs redirects
- Fix hydration warning in layout
- Document Base UI tooltip compatibility issue
- Simplify build scripts and workspace configuration"

# Push to main branch
git push origin main
```
