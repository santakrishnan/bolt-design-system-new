# Component Usage Analysis

This document maps all components in `apps/bolt/components/` to their usage locations.

## Summary

Total components: 60 files + 2 directories (cards/, lo-fi/)

## Usage by Category

### 🔴 Core Layout Components (Used in Root Layout)

**File**: `apps/bolt/app/layout.tsx`

- `active-theme.tsx` - Manages active theme state
- `analytics.tsx` - Analytics tracking
- `theme-provider.tsx` - Theme context provider
- `tailwind-indicator.tsx` - Development environment indicator

### 🟢 Site Structure Components (Used in App Layout)

**File**: `apps/bolt/app/(app)/layout.tsx`

- `site-header.tsx` - Main site header with navigation
- `site-footer.tsx` - Main site footer

### 🟡 Navigation Components

**Used in multiple layouts and pages:**

- `mobile-nav.tsx` - Mobile navigation menu (used in site-header)
- `main-nav.tsx` - Desktop main navigation (used in site-header)
- `docs-sidebar.tsx` - Documentation sidebar (`apps/bolt/app/(app)/docs/layout.tsx`)
- `examples-nav.tsx` - Examples navigation (`apps/bolt/app/(app)/examples/layout.tsx`)
- `charts-nav.tsx` - Charts navigation (`apps/bolt/app/(app)/charts/layout.tsx`)
- `colors-nav.tsx` - Colors navigation (`apps/bolt/app/(app)/colors/layout.tsx`)
- `blocks-nav.tsx` - Blocks navigation (used in blocks page)
- `page-nav.tsx` - Generic page navigation component

### 🔵 Documentation Components

**Used in docs pages:**

- `docs-toc.tsx` - Table of contents (`apps/bolt/app/(app)/docs/[[...slug]]/page.tsx`)
- `docs-base-switcher.tsx` - Base UI/Radix switcher (docs pages)
- `docs-copy-page.tsx` - Copy page functionality (docs pages)
- `docs-breadcrumb.tsx` - Breadcrumb navigation
- `docs-page-links.tsx` - Page navigation links

### 🟣 Component Display & Preview

**Used for component documentation:**

- `component-preview.tsx` - Component preview wrapper
- `component-preview-tabs.tsx` - Tabbed component previews
- `component-source.tsx` - Source code display
- `component-wrapper.tsx` - Component wrapper
- `components-list.tsx` - List of components

### 🟠 Code Display Components

**Used in MDX content and documentation:**

- `code-block-command.tsx` - Command code blocks
- `code-collapsible-wrapper.tsx` - Collapsible code sections
- `code-tabs.tsx` - Tabbed code examples
- `copy-button.tsx` - Copy to clipboard button

### 🟤 Chart Components

**Used in charts section:**

- `chart-display.tsx` - Chart display wrapper (`apps/bolt/app/(app)/charts/[type]/page.tsx`)
- `chart-toolbar.tsx` - Chart toolbar controls
- `chart-code-viewer.tsx` - Chart code viewer
- `chart-copy-button.tsx` - Copy chart code
- `chart-iframe.tsx` - Chart iframe wrapper

### 🔴 Block Components

**Used in blocks section:**

- `block-display.tsx` - Block display wrapper (`apps/bolt/app/(app)/blocks/page.tsx`)
- `block-viewer.tsx` - Block viewer
- `block-image.tsx` - Block image display

### 🟢 Color Components

**Used in colors section:**

- `color-palette.tsx` - Color palette display (`apps/bolt/app/(app)/colors/page.tsx`)
- `color.tsx` - Individual color component
- `color-format-selector.tsx` - Color format selector

### 🟡 Theme Components

**Used in themes and examples:**

- `theme-customizer.tsx` - Theme customization UI (`apps/bolt/app/(app)/themes/page.tsx`)
- `theme-selector.tsx` - Theme selector dropdown (examples, dashboard)
- `mode-switcher.tsx` - Light/dark mode switcher

### 🔵 Utility Components

**Used across multiple pages:**

- `announcement.tsx` - Announcement banner (examples, charts, colors, themes layouts)
- `page-header.tsx` - Page header component (examples, charts, colors, themes)
- `callout.tsx` - Callout/alert component (MDX content)
- `icons.tsx` - Icon components (authentication example)
- `icon-placeholder.tsx` - Icon placeholder (registry components)
- `github-link.tsx` - GitHub repository link

### 🟣 Language/RTL Components

**Used in RTL examples:**

- `language-selector.tsx` - Language selector for RTL demos (`apps/bolt/app/(app)/examples/rtl/`)

### 🟠 V0 Integration Components

**Used in docs:**

- `open-in-v0-button.tsx` - Open in v0 button
- `open-in-v0-cta.tsx` - Open in v0 call-to-action (`apps/bolt/app/(app)/docs/[[...slug]]/page.tsx`)

### 🔴 Miscellaneous Components

- `command-menu.tsx` - Command palette (used in `site-header.tsx`)
- `site-config.tsx` - Site configuration component (used in `site-header.tsx`)
- ❌ `nav-header.tsx` - NOT USED - Can be removed
- `nav-user.tsx` - User navigation component (dashboard-03 example)

### 📁 Component Directories

- `cards/` - Card demo components (used in themes page: `apps/bolt/app/(app)/themes/page.tsx`)
  - Contains 12 card examples: activity-goal, calendar, chat, cookie-settings, create-account, exercise-minutes, forms, payments, report-issue, share, stats, team-members
  - Exported via `cards/index.tsx` as `CardsDemo`
- `lo-fi/` - Lo-fi/wireframe components (NOT USED - only internal imports)
  - Contains: accordion, alert, atom, component, index
  - No external usage found - candidate for removal

## Components Referenced in MDX Content

The following components are imported in MDX documentation files:

### UI Components (from registry)
- `ui/button` - Button component
- `ui/dialog` - Dialog component
- `ui/dropdown-menu` - Dropdown menu
- `ui/avatar` - Avatar component
- `ui/checkbox` - Checkbox component
- `ui/input` - Input component
- `ui/label` - Label component
- `ui/radio-group` - Radio group
- `ui/select` - Select component
- `ui/switch` - Switch component
- `ui/textarea` - Textarea component
- `ui/calendar` - Calendar component
- `ui/spinner` - Spinner component
- `ui/kbd` - Keyboard key component
- `ui/skeleton` - Skeleton loader
- `ui/toggle` - Toggle component
- `ui/field` - Form field component
- `ui/item` - Item component
- `ui/breadcrumb` - Breadcrumb component
- `ui/command` - Command palette
- `ui/context-menu` - Context menu
- `ui/menubar` - Menubar component
- `ui/resizable` - Resizable panels
- `ui/toggle-group` - Toggle group
- `ui/native-select` - Native select
- `ui/button-group` - Button group
- `ui/input-group` - Input group
- `ui/empty` - Empty state
- `ui/direction` - Direction provider (RTL)

### Theme Components
- `theme-provider` - Theme context provider (dark mode docs)

## Usage Patterns

### High-Usage Components (Used in 5+ locations)
1. `announcement.tsx` - Used in 4+ layout files
2. `page-header.tsx` - Used in 4+ layout files
3. `theme-selector.tsx` - Used in examples and dashboard
4. `copy-button.tsx` - Used throughout documentation
5. `icon-placeholder.tsx` - Used in registry components

### Layout-Critical Components (Required for site to function)
1. `site-header.tsx`
2. `site-footer.tsx`
3. `theme-provider.tsx`
4. `active-theme.tsx`
5. `docs-sidebar.tsx`

### Feature-Specific Components (Can be removed if feature is removed)
- Chart components → Remove if charts section removed
- Block components → Remove if blocks section removed
- Color components → Remove if colors section removed
- RTL components → Remove if RTL examples removed
- V0 components → Remove if v0 integration removed

## Recommendations

### Keep These Components
Essential for core functionality:
- All layout components (site-header, site-footer, etc.)
- All navigation components (mobile-nav, main-nav, docs-sidebar)
- Theme components (theme-provider, theme-selector, active-theme)
- Documentation components (docs-toc, component-preview, etc.)
- Code display components (code-block-command, copy-button, etc.)

### Consider Removing
If not using specific features:
- `open-in-v0-button.tsx` and `open-in-v0-cta.tsx` - If not integrating with v0
- `language-selector.tsx` - If not supporting RTL/i18n
- **`lo-fi/` directory** - ❌ NOT USED ANYWHERE - Safe to remove (5 files)
- **`nav-header.tsx`** - ❌ NOT USED ANYWHERE - Safe to remove (1 file)
- `cards/` directory - Only used in themes page (13 files) - Remove if themes page removed

### Audit These
Check if actually used:
- ✅ `site-config.tsx` - USED in site-header.tsx
- ✅ `command-menu.tsx` - USED in site-header.tsx
- ❌ `nav-header.tsx` - NOT USED - Can be removed
- ✅ `nav-user.tsx` - Used in dashboard-03 example
- ✅ `github-link.tsx` - Used in site-header.tsx

## Next Steps

1. ✅ **lo-fi/ directory** - NOT USED - Can be safely removed (5 files)
2. ✅ **nav-header.tsx** - NOT USED - Can be safely removed (1 file)
3. ✅ **command-menu.tsx** - USED in site-header
4. **Review v0 integration** - Decide if keeping v0 features (2 files)
5. **Test RTL support** - Decide if keeping language-selector (1 file)
6. **Review cards/ directory** - Only used in themes page (13 files)

### Immediate Cleanup Candidates (6 files total)
- `apps/bolt/components/lo-fi/` - 5 files (accordion, alert, atom, component, index)
- `apps/bolt/components/nav-header.tsx` - 1 file

## File Count by Category

- Layout: 6 files
- Navigation: 8 files
- Documentation: 5 files
- Component Display: 5 files
- Code Display: 4 files
- Charts: 5 files
- Blocks: 3 files
- Colors: 3 files
- Theme: 3 files
- Utility: 7 files
- Language/RTL: 1 file
- V0 Integration: 2 files
- Miscellaneous: 4 files
- Directories: 2 folders

**Total: 58 files + 2 directories**
