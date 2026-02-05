# AI Agent Guidelines for Bolt Design System

## Project Overview

This is the Bolt Design System - a modern component library built with:
- **Next.js 16.1.6** (latest stable)
- **React 19.2.4** (latest stable)
- **TypeScript 5.5.3**
- **Tailwind CSS v4**
- **shadcn/ui 3.8.3**
- **Base UI 1.1.0**
- **Fumadocs 16.5.0**
- **Shiki 3.22.0**

## Code Quality Standards

### Linting & Formatting
- We use **Ultracite 7.1.4** with Biome for linting and formatting
- Run `pnpm check` to validate code quality
- Run `pnpm fix` to auto-fix issues
- Configuration is in `biome.jsonc`

### Git Hooks
- **Husky 9.1.7** manages git hooks
- Pre-commit hooks run linting and formatting checks
- Commit messages follow conventional commits format

## Development Workflow

### Getting Started
```bash
# Install dependencies
pnpm install

# Start development server (default: http://localhost:4000)
pnpm dev

# Use custom port
PORT=3000 pnpm dev

# Build for production
pnpm build
```

**Port Configuration:** The dev server uses port 4000 by default. Customize via `PORT` environment variable or `apps/bolt/.env.local`. See [PORT_CONFIGURATION.md](../PORT_CONFIGURATION.md).

### Component Development
1. Components are located in `apps/bolt/components/`
2. Follow shadcn/ui patterns for consistency
3. Use TypeScript for all components
4. Ensure accessibility compliance (WCAG 2.1 AA)
5. Add proper JSDoc comments

### Testing
```bash
# Run tests
pnpm test

# Run tests in watch mode (development)
pnpm test:dev
```

## Architecture Guidelines

### Monorepo Structure
- `apps/bolt/` - Main Next.js application
  - `app/` - Next.js app directory (uses route groups)
  - `components/` - React components
  - `content/` - MDX documentation
  - `registry/` - Component registry
- `scripts/` - Build and utility scripts
- `deprecated/` - Legacy code (do not modify)

### Next.js App Structure
The app uses **route groups** (folders with parentheses) for organization:
- `(app)/` - Main site with header/footer
- `(examples)/` - Full-page example applications
- `(view)/` - Component previews (no layout)
- `(internal)/` - Development tools

Route groups don't affect URLs. See `apps/bolt/app/README.md` for details.

### Component Registry
- Components are registered in `apps/bolt/registry.json`
- Build registry with `pnpm registry:build`
- Validate registries with `pnpm validate:registries`

### Styling
- Use Tailwind CSS v4 utility classes
- Follow the design tokens system
- Maintain consistent spacing and typography
- Support dark mode by default

## AI-Specific Instructions

### When Creating Components
1. Check existing components in `apps/bolt/components/` first
2. Follow the shadcn/ui component structure
3. Include proper TypeScript types
4. Add accessibility attributes (ARIA labels, roles, etc.)
5. Support both light and dark themes
6. Include JSDoc documentation

### When Modifying Code
1. Run `pnpm check` before committing
2. Ensure TypeScript types are correct
3. Maintain backward compatibility
4. Update documentation if needed
5. Test in both light and dark modes

### Code Style Preferences
- Use functional components with hooks
- Prefer named exports over default exports
- Use const for immutable values
- Destructure props in function parameters
- Keep components small and focused
- Extract reusable logic into custom hooks

### Performance Considerations
- Use React.memo() for expensive components
- Implement proper code splitting
- Optimize images with Next.js Image component
- Lazy load components when appropriate
- Minimize bundle size

## Documentation

### Component Documentation
- Each component should have usage examples
- Document all props with TypeScript types
- Include accessibility notes
- Provide code snippets for common use cases

### API Documentation
- Use fumadocs for documentation site
- Keep docs in `apps/bolt/content/`
- Follow MDX format for content
- Include interactive examples

## Version Control

### Commit Messages
Follow conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

### Branch Strategy
- `main` - Production-ready code
- `develop` - Development branch
- Feature branches: `feat/feature-name`
- Bug fix branches: `fix/bug-name`

## Dependencies Management

### Adding Dependencies
```bash
# Add to root workspace
pnpm add -w <package>

# Add to specific workspace
pnpm add <package> --filter=bolt
```

### Updating Dependencies
- Keep dependencies up to date
- Test thoroughly after updates
- Update lockfile: `pnpm install`

## Build & Deployment

### Production Build
```bash
pnpm build
```

### Preview Build
```bash
pnpm preview
```

### Type Checking
```bash
pnpm typecheck
```

## Troubleshooting

### Common Issues
1. **Build failures**: Check TypeScript errors with `pnpm typecheck`
2. **Linting errors**: Run `pnpm fix` to auto-fix
3. **Dependency issues**: Delete `node_modules` and run `pnpm install`
4. **Cache issues**: Clear `.next` and `.turbo` directories

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Fumadocs Documentation](https://fumadocs.vercel.app)
- [Ultracite Documentation](https://ultracite.ai)

## Contact & Support

For questions or issues:
- GitHub Issues: [Repository Issues](https://github.com/santakrishnan/bolt-design-system/issues)
- Author: Santakrishnan
- License: MIT
