# App Structure Explanation

## Question: Why are there folders like `(app)` with parentheses?

This is a **Next.js route groups** pattern, and it's actually a **best practice** for this type of application.

## What Are Route Groups?

Route groups are folders wrapped in parentheses `(name)` that:

1. **Organize routes without affecting URLs**
   ```
   app/(app)/docs/page.tsx → /docs (not /app/docs)
   app/(view)/view/[name]/page.tsx → /view/[name]
   ```

2. **Allow different layouts for different sections**
   ```
   (app)/ → Has header + footer
   (view)/ → No layout (just component)
   (examples)/ → Full-page layouts
   ```

3. **Keep related routes together**
   ```
   (app)/ → All main site pages
   (create)/ → All CLI tools
   (examples)/ → All demo apps
   ```

## Current Structure

```
app/
├── layout.tsx                    # Root layout (providers, theme)
│
├── (app)/                        # Main site (with header/footer)
│   ├── layout.tsx               # Adds header + footer
│   ├── (root)/page.tsx          # Homepage → /
│   ├── docs/                    # → /docs/*
│   ├── blocks/                  # → /blocks
│   ├── charts/                  # → /charts/*
│   └── themes/                  # → /themes
│
├── (examples)/                  # Full-page examples
│   ├── dashboard/               # → /dashboard
│   └── dashboard-03/            # → /dashboard-03
│
├── (view)/                      # Component previews (no layout)
│   └── view/[name]/            # → /view/[name]
│
├── (internal)/                  # Dev tools
│   └── sink/                    # → /sink
│
└── api/                         # API routes
    └── search/                  # → /api/search
```

## Why This Structure Is Good

### 1. Multiple Layout Types

The app needs different layouts for different sections:

- **Main site** (`(app)`): Needs header, navigation, footer
- **Component previews** (`(view)`): Just the component, no chrome
- **Examples** (`(examples)`): Full-page demos with custom layouts
- **Internal tools** (`(internal)`): Different layout for dev tools

Without route groups, you'd need to:
- Duplicate layout logic everywhere
- Use complex conditional rendering
- Have messy layout inheritance

### 2. Clean URLs

Route groups don't add URL segments:

```
✅ Good: /docs, /blocks, /view/button
❌ Bad: /app/docs, /app/blocks, /view/view/button
```

### 3. Better Organization

Related routes are grouped together:

```
(app)/
├── docs/          # All docs together
├── blocks/        # All blocks together
└── charts/        # All charts together
```

Instead of scattered across the app directory.

### 4. Easier Maintenance

When you need to update the site layout:
- Edit `app/(app)/layout.tsx` once
- All main site pages get the update
- Other sections (view, examples) are unaffected

## Should We Flatten It?

### Option 1: Keep Route Groups (Recommended) ✅

**Pros:**
- Already working and tested
- Standard Next.js pattern
- Clean separation of concerns
- Different layouts per section
- Easy to maintain

**Cons:**
- Slightly more complex folder structure
- Requires understanding route groups

**Verdict:** Keep it! It's the right pattern for this app.

### Option 2: Flatten Structure ❌

Move everything to root:

```
app/
├── page.tsx              # Homepage
├── docs/
│   ├── layout.tsx       # Duplicate layout logic
│   └── page.tsx
├── blocks/
│   ├── layout.tsx       # Duplicate layout logic
│   └── page.tsx
└── view/
    ├── layout.tsx       # Different layout
    └── [name]/page.tsx
```

**Pros:**
- Simpler folder structure at first glance

**Cons:**
- Need to duplicate layout logic
- Harder to share layouts
- More layout.tsx files everywhere
- Breaks existing routing
- 4-6 hours of migration work
- High risk of breaking things
- Minimal benefit

**Verdict:** Not worth it!

## What We Did Instead

Instead of flattening, we:

1. ✅ **Added documentation** - `apps/bolt/app/README.md` explains the structure
2. ✅ **Updated steering files** - AI assistants now understand it
3. ✅ **Added comments** - `next.config.mjs` has helpful comments
4. ✅ **Created this guide** - Explains why it's this way

## For Developers

### Adding a New Page

**Main site page (with header/footer):**
```bash
# Add to (app) group
touch app/(app)/new-page/page.tsx
# URL: /new-page
```

**Full-page example:**
```bash
# Add to (examples) group
touch app/(examples)/my-example/page.tsx
# URL: /my-example
```

**Component preview:**
```bash
# Add to (view) group
touch app/(view)/view/my-component/page.tsx
# URL: /view/my-component
```

### Understanding Layouts

1. **Root layout** (`app/layout.tsx`)
   - Providers, theme, fonts
   - Applied to ALL routes

2. **Site layout** (`app/(app)/layout.tsx`)
   - Header + footer
   - Only for main site pages

3. **Other layouts**
   - Each route group can have its own
   - Or no layout at all

## Conclusion

The `(app)` folder structure is:
- ✅ **Standard Next.js pattern**
- ✅ **Best practice for complex apps**
- ✅ **Already working perfectly**
- ✅ **Well-organized and maintainable**

**No changes needed!** Just understand how it works.

## Resources

- [Next.js Route Groups Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Next.js Layouts Documentation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)
- `apps/bolt/app/README.md` - Detailed structure documentation
- `.kiro/steering/next-app-structure-refactor.md` - Technical analysis

---

**TL;DR**: The `(app)` folders are a Next.js feature called "route groups". They organize routes with different layouts without affecting URLs. It's the right pattern for this app - no changes needed!
