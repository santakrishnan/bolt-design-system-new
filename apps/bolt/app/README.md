# App Directory Structure

This Next.js application uses **route groups** (folders with parentheses) to organize routes with different layouts.

## 📁 Directory Structure

```
app/
├── layout.tsx                    # Root layout (providers, theme, fonts)
│
├── (app)/                        # 🏠 Main site routes (with header/footer)
│   ├── layout.tsx               # Site header + footer layout
│   ├── (root)/                  # Homepage
│   │   └── page.tsx            # → /
│   ├── docs/                    # Documentation
│   │   └── [...slug]/          # → /docs/*
│   ├── blocks/                  # Blocks showcase
│   │   └── page.tsx            # → /blocks
│   ├── charts/                  # Charts showcase
│   │   └── [name]/             # → /charts/[name]
│   ├── colors/                  # Colors page
│   │   └── page.tsx            # → /colors
│   ├── themes/                  # Themes page
│   │   └── page.tsx            # → /themes
│   ├── examples/                # Examples listing
│   │   └── page.tsx            # → /examples
│   └── llm/                     # LLM-friendly docs
│       └── [...slug]/          # → /llm/*
│
├── (create)/                    # 🛠️ CLI and creation tools
│   ├── create/                  # Component creation
│   ├── init/                    # Project initialization
│   ├── preview/                 # Component preview
│   └── hooks/                   # Hooks showcase
│
├── (examples)/                  # 📱 Full-page example applications
│   ├── dashboard/               # → /dashboard
│   └── dashboard-03/            # → /dashboard-03
│
├── (view)/                      # 👁️ Component preview (no layout)
│   └── view/
│       └── [name]/             # → /view/[name]
│
├── (internal)/                  # 🔧 Internal development tools
│   └── sink/                    # Component testing
│       └── page.tsx            # → /sink
│
├── api/                         # 🔌 API routes
│   └── search/                  # Search API
│       └── route.ts            # → /api/search
│
├── og/                          # 🖼️ Open Graph image generation
│   └── route.tsx               # → /og
│
└── rss.xml/                     # 📡 RSS feed
    └── route.ts                # → /rss.xml
```

## 🎯 What Are Route Groups?

Route groups are folders wrapped in parentheses `(name)` that:

1. **Don't affect the URL structure**
   - `app/(app)/docs/page.tsx` → `/docs` (not `/app/docs`)
   - `app/(view)/view/[name]/page.tsx` → `/view/[name]`

2. **Allow different layouts for different sections**
   - `(app)` has header + footer
   - `(view)` has no layout (just the component)
   - `(examples)` has full-page layouts

3. **Organize related routes together**
   - All main site pages in `(app)`
   - All CLI tools in `(create)`
   - All examples in `(examples)`

## 📐 Layout Hierarchy

### Root Layout (`app/layout.tsx`)
Provides global setup for all routes:
- Theme provider
- Font variables
- Tooltip providers
- Analytics
- Global CSS

### Main Site Layout (`app/(app)/layout.tsx`)
Adds site chrome for main pages:
- Site header with navigation
- Main content area
- Site footer

### Other Layouts
- `(create)` - Custom layout for CLI tools
- `(examples)` - Full-page layouts for demos
- `(view)` - No layout (just component preview)
- `(internal)` - Development tools layout

## 🚀 Adding New Routes

### Adding a Main Site Page

```bash
# Create new page in (app) group
touch app/(app)/new-page/page.tsx
```

This will:
- Use the site layout (header + footer)
- Be accessible at `/new-page`

### Adding a Full-Page Example

```bash
# Create new example in (examples) group
mkdir -p app/(examples)/my-example
touch app/(examples)/my-example/page.tsx
```

This will:
- Use its own layout (or none)
- Be accessible at `/my-example`

### Adding a Component Preview

```bash
# Add to view group
touch app/(view)/view/my-component/page.tsx
```

This will:
- Have no layout (just the component)
- Be accessible at `/view/my-component`

## 🔄 URL Mapping Examples

| File Path | URL | Layout |
|-----------|-----|--------|
| `app/(app)/(root)/page.tsx` | `/` | Site (header + footer) |
| `app/(app)/docs/[...slug]/page.tsx` | `/docs/*` | Site (header + footer) |
| `app/(app)/blocks/page.tsx` | `/blocks` | Site (header + footer) |
| `app/(examples)/dashboard/page.tsx` | `/dashboard` | Custom (full-page) |
| `app/(view)/view/[name]/page.tsx` | `/view/[name]` | None (preview only) |
| `app/(internal)/sink/page.tsx` | `/sink` | Internal tools |
| `app/api/search/route.ts` | `/api/search` | N/A (API route) |

## 📝 Best Practices

### When to Use Each Group

**Use `(app)` when:**
- Page needs site header and footer
- Part of main documentation/content
- Should feel like part of the main site

**Use `(examples)` when:**
- Creating full-page demo applications
- Need custom layout different from main site
- Showcasing complete UI patterns

**Use `(view)` when:**
- Showing isolated component previews
- No chrome/layout needed
- Used by CLI or component registry

**Use `(internal)` when:**
- Development/testing tools
- Not for public consumption
- Internal utilities

### Layout Guidelines

1. **Don't duplicate layouts** - Use route groups to share layouts
2. **Keep layouts focused** - Each layout should have a single purpose
3. **Use nested layouts** - Route groups can have their own nested layouts
4. **Consider loading states** - Add loading.tsx in route groups

## 🔍 Debugging Routes

To see all routes in your app:

```bash
# Build the app to see route manifest
pnpm build

# Check .next/routes-manifest.json
cat .next/routes-manifest.json
```

## 📚 Resources

- [Next.js Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Next.js Layouts](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)
- [Next.js App Router](https://nextjs.org/docs/app)

## 💡 Why This Structure?

This structure was chosen because:

1. **Multiple layout types** - Different sections need different layouts
2. **Clean URLs** - Route groups don't add URL segments
3. **Organization** - Related routes are grouped together
4. **Maintainability** - Easy to find and update related pages
5. **Performance** - Shared layouts are only loaded once per group

The structure is **intentional and follows Next.js best practices** for complex applications with multiple layout requirements.
