---
inclusion: manual
---

# Next.js App Structure Refactoring Plan

## Current Structure (Route Groups)

The current structure uses Next.js route groups (folders with parentheses):

```
app/
├── layout.tsx                    # Root layout (providers)
├── (app)/                        # Main site routes
│   ├── layout.tsx               # Site header/footer
│   ├── (root)/                  # Homepage
│   ├── docs/                    # Documentation
│   ├── blocks/                  # Blocks showcase
│   ├── charts/                  # Charts showcase
│   ├── colors/                  # Colors page
│   ├── themes/                  # Themes page
│   └── examples/                # Examples listing
├── (create)/                    # CLI/creation tools
├── (examples)/                  # Full-page examples
├── (view)/                      # Component preview
├── (internal)/                  # Internal tools
└── api/                         # API routes
```

## Why Route Groups Are Used

Route groups `(folder)` allow:
1. **Different layouts** for different sections without affecting URLs
2. **Organization** without adding URL segments
3. **Shared layouts** for related routes

Example:
- `app/(app)/docs/page.tsx` → URL: `/docs` (not `/app/docs`)
- `app/(view)/view/[name]/page.tsx` → URL: `/view/[name]` (not `/view/view/[name]`)

## Proposed Simplified Structure

### Option 1: Keep Route Groups (Recommended)

**Pros:**
- Already working and tested
- Clear separation of concerns
- Different layouts per section
- Standard Next.js pattern for complex apps

**Cons:**
- Slightly more complex folder structure
- Requires understanding of route groups

**Action:** Keep current structure, just document it better

### Option 2: Flatten Structure

Move everything to root app directory:

```
app/
├── layout.tsx                   # Root layout
├── page.tsx                     # Homepage
├── docs/
│   ├── layout.tsx              # Docs layout
│   └── [...slug]/page.tsx
├── blocks/
│   ├── layout.tsx              # Blocks layout
│   └── page.tsx
├── view/
│   ├── layout.tsx              # View layout (no header/footer)
│   └── [name]/page.tsx
└── api/
```

**Pros:**
- Simpler folder structure
- Easier to understand at first glance

**Cons:**
- Need to duplicate layout logic
- Harder to share layouts between related routes
- More layout.tsx files scattered around
- Breaks existing routing

## Recommendation: Keep Current Structure

The current route group structure is actually **best practice** for this type of application because:

1. **Multiple Layout Types**: The app has distinct layout needs:
   - Main site (with header/footer)
   - Component previews (no header/footer)
   - Examples (full-page)
   - Internal tools (different layout)

2. **Clean URLs**: Route groups don't affect URLs, keeping them clean

3. **Maintainability**: Related routes are grouped together

4. **Performance**: Shared layouts are only loaded once per group

## What We Should Do Instead

### 1. Add Documentation

Create `apps/bolt/app/README.md`:

```markdown
# App Directory Structure

This app uses Next.js route groups for organization.

## Route Groups (folders with parentheses)

- `(app)/` - Main site with header/footer
  - Homepage, docs, blocks, charts, themes
- `(create)/` - CLI and creation tools
- `(examples)/` - Full-page example applications
- `(view)/` - Component preview (no layout)
- `(internal)/` - Internal development tools

Route groups don't affect URLs:
- `app/(app)/docs/page.tsx` → `/docs`
- `app/(view)/view/[name]/page.tsx` → `/view/[name]`

## Layouts

- `app/layout.tsx` - Root layout (providers, theme)
- `app/(app)/layout.tsx` - Site layout (header, footer)
- Other groups have their own layouts as needed
```

### 2. Update Next.js Config

Add comments to explain the structure:

```javascript
// next.config.mjs
const nextConfig = {
  // ... existing config
  
  // Route groups used:
  // (app) - main site, (create) - CLI tools,
  // (examples) - demos, (view) - previews
}
```

### 3. Update Steering Files

Document the structure in AI steering files so assistants understand it.

## Migration Path (If You Still Want to Flatten)

If you really want to flatten, here's the migration:

1. Move `(app)/(root)/page.tsx` → `app/page.tsx`
2. Move `(app)/docs/` → `app/docs/`
3. Move `(app)/blocks/` → `app/blocks/`
4. Update all layout files
5. Test all routes
6. Update redirects in next.config.mjs

**Estimated effort**: 4-6 hours + testing
**Risk**: High (breaking existing routes)
**Benefit**: Minimal (structure is already good)

## Conclusion

**Keep the current route group structure.** It's a standard Next.js pattern for complex applications with multiple layout types. Just add documentation to help developers understand it.

The structure is not a problem - it's actually a solution to having different layouts for different sections of the app.
