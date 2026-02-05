# AI Development Guide for Bolt Design System

## Context-Aware Development

When working on this codebase, always consider:

1. **Existing Patterns**: Review similar components before creating new ones
2. **Consistency**: Match the style and structure of existing code
3. **Dependencies**: Check if required packages are already installed
4. **Breaking Changes**: Avoid changes that break existing APIs

## Common Tasks

### Adding a New Component

1. **Research Phase**
   ```bash
   # Check if similar component exists
   # Review apps/bolt/components/ui/
   # Check registry.json for existing components
   ```

2. **Implementation Phase**
   - Create component file in `apps/bolt/components/ui/`
   - Add TypeScript types
   - Implement accessibility features
   - Add dark mode support
   - Create usage examples

3. **Registration Phase**
   - Update `apps/bolt/registry.json`
   - Run `pnpm registry:build`
   - Validate with `pnpm validate:registries`

4. **Documentation Phase**
   - Create MDX file in `apps/bolt/content/`
   - Add usage examples
   - Document props and variants
   - Include accessibility notes

### Updating Dependencies

```bash
# Check current version
npm view <package> version

# Update specific package
pnpm add <package>@latest --filter=bolt

# Update all dependencies
pnpm update

# Verify updates
pnpm check
pnpm typecheck
pnpm test
```

### Debugging Issues

1. **Type Errors**
   ```bash
   pnpm typecheck
   # Review error messages
   # Check TypeScript configuration
   ```

2. **Linting Errors**
   ```bash
   pnpm check
   pnpm fix  # Auto-fix when possible
   ```

3. **Build Errors**
   ```bash
   # Clear cache
   rm -rf .next .turbo node_modules
   pnpm install
   pnpm build
   ```

## Code Generation Guidelines

### When Creating Components

**DO:**
- Use existing component patterns as templates
- Include proper TypeScript types
- Add accessibility attributes
- Support theming (light/dark)
- Include JSDoc documentation
- Add usage examples

**DON'T:**
- Create duplicate components
- Ignore accessibility requirements
- Hard-code colors or spacing
- Skip type definitions
- Forget error handling

### When Modifying Code

**DO:**
- Understand the existing implementation first
- Maintain backward compatibility
- Update related documentation
- Run tests after changes
- Check for side effects

**DON'T:**
- Make breaking changes without discussion
- Remove existing functionality
- Skip validation checks
- Ignore TypeScript errors
- Commit without testing

## AI-Specific Best Practices

### Understanding Context

Before making changes:
1. Read the file you're modifying completely
2. Check related files and dependencies
3. Review recent changes in git history
4. Understand the component's purpose and usage

### Generating Code

When generating code:
1. Match the existing code style exactly
2. Use the same naming conventions
3. Follow the same file structure
4. Include similar error handling
5. Add appropriate comments

### Suggesting Changes

When suggesting changes:
1. Explain the reasoning clearly
2. Show before/after examples
3. Highlight potential impacts
4. Suggest testing approaches
5. Document any trade-offs

## Framework-Specific Patterns

### Next.js 16 Patterns

```typescript
// Server Components (default)
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Client Components
"use client"
import { useState } from "react"

export function ClientComponent() {
  const [state, setState] = useState()
  return <div>{state}</div>
}

// Server Actions
"use server"
export async function submitForm(formData: FormData) {
  // Handle form submission
}
```

### React 19 Patterns

```typescript
// Use hook for async operations
import { use } from "react"

function Component({ dataPromise }) {
  const data = use(dataPromise)
  return <div>{data}</div>
}

// useOptimistic for optimistic updates
import { useOptimistic } from "react"

function TodoList({ todos }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  )
  // ...
}
```

### Tailwind CSS v4 Patterns

```typescript
// Use @theme for design tokens
import "@theme" from "./theme.css"

// Utility classes with v4 syntax
<div className="bg-primary text-primary-foreground rounded-lg p-4">
  Content
</div>

// Custom properties
<div style={{ "--custom-color": "red" }}>
  <span className="text-[--custom-color]">Text</span>
</div>
```

## Error Handling Patterns

### Component Error Boundaries

```typescript
"use client"
import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>
    }
    return this.props.children
  }
}
```

### Async Error Handling

```typescript
// Server Component
export default async function Page() {
  try {
    const data = await fetchData()
    return <Content data={data} />
  } catch (error) {
    return <ErrorState error={error} />
  }
}

// Client Component
"use client"
export function ClientComponent() {
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
  }, [])
  
  if (error) return <ErrorState error={error} />
  return <Content />
}
```

## Performance Optimization Patterns

### Code Splitting

```typescript
// Dynamic imports
import dynamic from "next/dynamic"

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Skeleton />,
  ssr: false, // Disable SSR if needed
})

// Lazy loading with React
import { lazy, Suspense } from "react"

const LazyComponent = lazy(() => import("./Component"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}
```

### Memoization

```typescript
import { memo, useMemo, useCallback } from "react"

// Memoize component
export const ExpensiveComponent = memo(({ data }) => {
  return <div>{data}</div>
})

// Memoize values
function Component({ items }) {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  )
  
  const handleClick = useCallback(() => {
    // Handle click
  }, [])
  
  return <List items={sortedItems} onClick={handleClick} />
}
```

## Testing Patterns

### Component Testing

```typescript
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("Click me")
  })
  
  it("handles click events", async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await userEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it("supports disabled state", () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
```

## Quick Reference

### Common Commands
```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Quality Checks
pnpm check            # Run all checks
pnpm fix              # Auto-fix issues
pnpm typecheck        # Check types
pnpm test             # Run tests

# Component Registry
pnpm registry:build   # Build registry
pnpm validate:registries  # Validate registry

# Package Management
pnpm add <pkg>        # Add dependency
pnpm add <pkg> -D     # Add dev dependency
pnpm add <pkg> --filter=bolt  # Add to specific workspace
```

### File Locations
- Components: `apps/bolt/components/ui/`
- Registry: `apps/bolt/registry.json`
- Content: `apps/bolt/content/`
- Styles: `apps/bolt/styles/`
- Config: `apps/bolt/next.config.mjs`
- Types: `apps/bolt/types/`
- App Routes: `apps/bolt/app/` (uses route groups)

### Understanding App Directory Structure

The app uses **Next.js route groups** (folders with parentheses):

- `(app)/` - Main site pages with header/footer → `/docs`, `/blocks`, etc.
- `(examples)/` - Full-page examples → `/dashboard`, etc.
- `(view)/` - Component previews (no layout) → `/view/[name]`
- `(internal)/` - Dev tools → `/sink`

**Important**: Route groups don't affect URLs!
- `app/(app)/docs/page.tsx` → `/docs` (not `/app/docs`)
- `app/(view)/view/[name]/page.tsx` → `/view/[name]`

See `apps/bolt/app/README.md` for complete documentation.

### Important Files
- `biome.jsonc` - Linting/formatting config
- `tsconfig.json` - TypeScript config
- `turbo.json` - Monorepo build config
- `package.json` - Dependencies and scripts
