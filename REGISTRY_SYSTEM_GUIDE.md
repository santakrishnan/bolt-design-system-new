# Bolt Design System - Registry System Guide

## Overview

The Bolt Design System uses the **shadcn/ui registry concept** to distribute components, blocks, and themes. This allows developers to install components into their projects using the shadcn CLI.

## How the Registry Works

### 1. Registry Structure

```
apps/bolt/
├── registry/
│   ├── bases/                    # Base implementations (Radix UI, Base UI)
│   │   ├── radix/               # Radix UI components
│   │   │   ├── ui/              # UI components
│   │   │   ├── blocks/          # Full-page blocks
│   │   │   ├── examples/        # Component examples
│   │   │   ├── hooks/           # React hooks
│   │   │   ├── lib/             # Utility functions
│   │   │   └── registry.ts      # Component metadata
│   │   └── base/                # Base UI components
│   │       └── (same structure)
│   ├── styles/                  # Visual styles (CSS)
│   │   ├── style-vega.css      # Vega style
│   │   ├── style-nova.css      # Nova style
│   │   ├── style-maia.css      # Maia style
│   │   ├── style-lyra.css      # Lyra style
│   │   └── style-mira.css      # Mira style
│   ├── new-york-v4/            # Generated style combinations
│   │   ├── ui/                 # Styled components
│   │   ├── blocks/             # Styled blocks
│   │   └── registry.ts         # Generated metadata
│   ├── config.ts               # Registry configuration
│   ├── bases.ts                # Base definitions
│   ├── styles.tsx              # Style definitions
│   └── themes.ts               # Theme definitions
└── public/r/                   # Public registry files
    ├── styles/                 # Built registry per style
    │   └── new-york-v4/       # Example: radix-vega combination
    │       ├── registry.json   # Component metadata
    │       └── *.json          # Individual component files
    ├── config.json             # Registry configuration
    └── registries.json         # Available registries
```

### 2. Build Process

The registry build process is handled by `apps/bolt/scripts/build-registry.mts`:

#### Step 1: Build Bases
```typescript
// Combines bases (radix/base) with styles (vega/nova/maia/lyra/mira)
// Creates: registry/radix-vega, registry/base-nova, etc.
```

**What it does:**
- Reads base components from `registry/bases/{base}/`
- Reads style CSS from `registry/styles/style-{style}.css`
- Transforms CSS classes using style mappings
- Generates combined directories like `registry/radix-vega/`

#### Step 2: Build Registry Index
```typescript
// Creates registry/__index__.tsx
// Lazy-loads all components for the site
```

**What it does:**
- Creates a TypeScript index file
- Maps component names to their file paths
- Sets up React.lazy() for code splitting

#### Step 3: Build Registry JSON
```typescript
// Creates public/r/styles/{style}/registry.json
// Used by shadcn CLI to install components
```

**What it does:**
- Generates JSON metadata for each component
- Includes file paths, dependencies, types
- Creates installable component definitions

#### Step 4: Build Blocks Index
```typescript
// Creates registry/__blocks__.json
// Lists all available blocks
```

#### Step 5: Copy UI to Examples
```typescript
// Copies registry/{base}-{style}/ui → examples/{base}/ui
// Transforms imports and icons
```

#### Step 6: Build RTL Examples
```typescript
// Creates examples/{base}/ui-rtl
// Transforms components for right-to-left languages
```

#### Step 7: Cleanup
```typescript
// Removes intermediate files
// Keeps only whitelisted styles (new-york-v4)
```

## Key Concepts

### Bases
Two component implementations:
- **radix**: Built on Radix UI primitives
- **base**: Built on Base UI primitives

### Styles
Visual design systems:
- **vega**: Default style (Lucide icons, Inter font)
- **nova**: Modern style (Hugeicons, Geist font)
- **maia**: Elegant style (Hugeicons, Figtree font)
- **lyra**: Technical style (Tabler icons, JetBrains Mono)
- **mira**: Minimal style (Hugeicons, Inter font)

### Combinations
Each base can be combined with each style:
- `radix-vega`, `radix-nova`, `radix-maia`, `radix-lyra`, `radix-mira`
- `base-vega`, `base-nova`, `base-maia`, `base-lyra`, `base-mira`

### Whitelisted Styles
Only `new-york-v4` is checked into version control. Other combinations are generated during build but not committed.

## Using Components in Other Projects

### Method 1: Using shadcn CLI (Recommended)

```bash
# Install shadcn CLI
npm install -g shadcn

# Initialize in your project
npx shadcn@latest init

# Add components from Bolt registry
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add card
```

### Method 2: Direct Installation

1. **Copy component files** from `registry/new-york-v4/ui/`
2. **Copy dependencies** (utils, hooks, lib)
3. **Install npm packages** listed in component metadata
4. **Configure Tailwind** with required CSS variables

### Method 3: Using Blocks

Blocks are full-page components:

```bash
# Install a complete block
npx shadcn@latest add sidebar-01
npx shadcn@latest add dashboard-03
npx shadcn@latest add login-01
```

## Registry Metadata Format

Each component has metadata in `registry.ts`:

```typescript
{
  name: "button",
  title: "Button",
  description: "A button component",
  type: "registry:ui",
  files: [
    { path: "ui/button.tsx", type: "registry:ui" }
  ],
  dependencies: ["class-variance-authority"],
  registryDependencies: ["utils"],
  categories: ["components"],
  meta: {
    source: "https://github.com/santakrishnan/bolt-design-system"
  }
}
```

## Component Types

### registry:ui
Basic UI components (Button, Input, Card, etc.)

### registry:block
Full-page blocks (Dashboard, Login, Sidebar layouts)

### registry:example
Component usage examples

### registry:hook
React hooks (useMediaQuery, useToast, etc.)

### registry:lib
Utility functions (cn, formatDate, etc.)

### registry:theme
Theme configurations (colors, fonts, spacing)

### registry:internal
Internal components (not exposed to CLI)

## Build Scripts

### Build Registry
```bash
pnpm registry:build
```
Builds all registry files and generates public JSON files.

### Validate Registries
```bash
pnpm validate:registries
```
Validates registry JSON against schema and checks endpoints.

### Capture Screenshots
```bash
pnpm registry:capture
```
Captures screenshots of blocks for documentation.

### Build Examples
```bash
pnpm examples:build
```
Generates examples index for the documentation site.

### Build Icons
```bash
pnpm icons:build
```
Scans components for icon usage and generates icon exports.

## Style Transformation

The build process transforms CSS classes using style maps:

```typescript
// Input (canonical class)
<div className="cn-bg-primary cn-text-primary-foreground">

// Output (style-specific class)
<div className="bg-primary text-primary-foreground">
```

Style maps are created from `registry/styles/style-{name}.css`:

```css
/* style-vega.css */
.cn-bg-primary { @apply bg-blue-600; }
.cn-text-primary-foreground { @apply text-white; }
```

## Icon Transformation

Icons are transformed from `IconPlaceholder` to actual icon libraries:

```typescript
// Input
<IconPlaceholder lucide="Check" />

// Output (with lucide library)
import { Check } from "lucide-react"
<Check />
```

Supported icon libraries:
- **lucide**: Lucide React
- **hugeicons**: Hugeicons React
- **tabler**: Tabler Icons React
- **phosphor**: Phosphor React
- **remixicon**: Remix Icon

## Publishing Your Registry

To make your registry available to others:

### 1. Build the Registry
```bash
pnpm registry:build
```

### 2. Deploy Public Files
Deploy the `public/r/` directory to a CDN or static host:
- `public/r/styles/` - Component files
- `public/r/config.json` - Configuration
- `public/r/registries.json` - Registry list

### 3. Configure Registry URL
Users can add your registry to their `components.json`:

```json
{
  "registries": {
    "@bolt": "https://your-domain.com/r/styles/{name}"
  }
}
```

### 4. Install Components
```bash
npx shadcn@latest add @bolt/button
npx shadcn@latest add @bolt/dialog
```

## Configuration Files

### components.json (User Project)
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york-v4",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### registry/config.ts (Bolt)
Defines available bases, styles, themes, and presets.

## Advanced Features

### RTL Support
Components can be transformed for right-to-left languages:

```bash
# Build RTL variants
pnpm registry:build
# Creates examples/{base}/ui-rtl/
```

### Theme Customization
Themes are built from base colors and theme variants:

```typescript
buildRegistryTheme({
  base: "radix",
  style: "vega",
  baseColor: "neutral",
  theme: "neutral",
  iconLibrary: "lucide",
  font: "inter"
})
```

### Menu Customization
- **menuAccent**: "subtle" | "bold"
- **menuColor**: "default" | "inverted"
- **radius**: "none" | "small" | "medium" | "large"

## Testing Components

### Test Apps
Build test applications to verify components:

```bash
# Build test app with specific style
pnpm test:apps nova

# Navigate to test app
cd ../../../ui-test-apps
pnpm install
pnpm dev
```

This creates Next.js apps with your components installed.

## Best Practices

### 1. Component Organization
- Keep components in `registry/bases/{base}/ui/`
- Add examples in `registry/bases/{base}/examples/`
- Document in `apps/bolt/content/docs/components/`

### 2. Metadata
- Always include complete metadata in `registry.ts`
- List all dependencies (npm and registry)
- Specify correct component type

### 3. Styling
- Use canonical classes (cn-*) for style-agnostic code
- Test with multiple styles
- Support dark mode

### 4. Icons
- Use `IconPlaceholder` for flexibility
- Support multiple icon libraries
- Provide fallbacks

### 5. Accessibility
- Include ARIA attributes
- Support keyboard navigation
- Test with screen readers
- Maintain color contrast

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next .turbo node_modules
pnpm install
pnpm registry:build
```

### Components Not Found
```bash
# Validate registries
pnpm validate:registries

# Check registry JSON
cat public/r/styles/new-york-v4/registry.json
```

### Style Not Applied
- Check style map in `registry/styles/style-{name}.css`
- Verify Tailwind configuration
- Ensure CSS variables are defined

### Icons Not Working
```bash
# Rebuild icon exports
pnpm icons:build

# Check generated files
ls registry/icons/__*.ts
```

## Resources

- **shadcn/ui Documentation**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com
- **Base UI**: https://base-ui.com
- **Tailwind CSS**: https://tailwindcss.com
- **Bolt Repository**: https://github.com/santakrishnan/bolt-design-system

## Summary

The Bolt registry system provides:
1. **Flexible component distribution** via shadcn CLI
2. **Multiple base implementations** (Radix, Base UI)
3. **Multiple visual styles** (Vega, Nova, Maia, Lyra, Mira)
4. **Automatic transformations** (styles, icons, RTL)
5. **Complete metadata** for easy installation
6. **Full-page blocks** for rapid development
7. **Theme customization** for brand consistency

This system allows you to build a design system once and distribute it to multiple projects with different styling preferences.
