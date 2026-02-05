# Bolt Design System - Project Standards

## Code Quality & Consistency

This project uses **Ultracite 7.1.4** with Biome for automated linting and formatting. All code must pass quality checks before committing.

### Automated Checks
- **Linting**: `pnpm check` - Validates code quality
- **Auto-fix**: `pnpm fix` - Automatically fixes issues
- **Type checking**: `pnpm typecheck` - Validates TypeScript types

## Component Development Standards

### File Structure

#### Components
```
apps/bolt/components/
├── ui/              # Base UI components
├── registry/        # Component registry
└── examples/        # Usage examples
```

#### App Directory (Next.js Route Groups)
```
apps/bolt/app/
├── layout.tsx                # Root layout (providers)
├── (app)/                    # Main site (with header/footer)
│   ├── layout.tsx           # Site layout
│   ├── (root)/              # Homepage → /
│   ├── docs/                # Documentation → /docs/*
│   ├── blocks/              # Blocks → /blocks
│   └── charts/              # Charts → /charts/*
├── (examples)/              # Full-page examples → /dashboard, etc.
├── (view)/                  # Component previews → /view/*
├── (internal)/              # Dev tools → /sink
└── api/                     # API routes → /api/*
```

**Note**: Folders with `(parentheses)` are route groups - they organize routes without affecting URLs. See `apps/bolt/app/README.md` for details.

### Component Template
```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

/**
 * Component description
 * @example
 * <Component variant="default">Content</Component>
 */
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"
```

### Required Practices
1. **TypeScript**: All components must be typed
2. **Accessibility**: Include ARIA attributes and keyboard navigation
3. **Theming**: Support both light and dark modes
4. **Documentation**: Add JSDoc comments with examples
5. **Testing**: Include unit tests for complex logic

## Styling Guidelines

### Tailwind CSS v4
- Use utility classes for styling
- Follow mobile-first responsive design
- Maintain consistent spacing scale
- Use CSS variables for theming

### Design Tokens
```css
/* Color tokens */
--background: ...
--foreground: ...
--primary: ...
--secondary: ...

/* Spacing tokens */
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
```

## Performance Best Practices

1. **Code Splitting**: Use dynamic imports for large components
2. **Image Optimization**: Always use Next.js Image component
3. **Bundle Size**: Monitor and minimize bundle size
4. **Lazy Loading**: Defer non-critical components
5. **Memoization**: Use React.memo() for expensive renders

## Git Workflow

### Commit Convention
```
type(scope): subject

body

footer
```

**Types**: feat, fix, docs, style, refactor, test, chore

### Pre-commit Hooks
- Linting and formatting checks
- Type validation
- Test execution (if applicable)

## Documentation Requirements

### Component Documentation
- Props table with types and descriptions
- Usage examples (basic and advanced)
- Accessibility notes
- Browser compatibility notes

### Code Comments
- Complex logic explanations
- TODO items with context
- Performance considerations
- Known limitations

## Testing Strategy

### Unit Tests
- Test component rendering
- Test user interactions
- Test edge cases
- Test accessibility features

### Integration Tests
- Test component combinations
- Test form submissions
- Test navigation flows

## Security Considerations

1. **Input Validation**: Sanitize all user inputs
2. **XSS Prevention**: Escape dynamic content
3. **CSRF Protection**: Use Next.js built-in protection
4. **Dependency Audits**: Regular security updates

## Accessibility Standards (WCAG 2.1 AA)

### Required Features
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast (4.5:1 minimum)
- Focus indicators
- ARIA labels and roles
- Skip navigation links

### Testing Tools
- axe DevTools
- WAVE browser extension
- Keyboard-only navigation testing
- Screen reader testing (NVDA/JAWS/VoiceOver)

## Browser Support

### Supported Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced features with JavaScript enabled
- Graceful degradation for older browsers
