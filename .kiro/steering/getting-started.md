---
inclusion: manual
---

# Getting Started with Bolt Design System

## Quick Start Guide

### 1. Initial Setup

```bash
# Clone the repository
git clone https://github.com/santakrishnan/bolt-design-system.git
cd bolt-design-system

# Install dependencies
pnpm install

# Initialize git hooks
pnpm prepare

# Verify installation
pnpm check
pnpm typecheck
```

### 2. Start Development

```bash
# Start the development server (default port: 4000)
pnpm dev

# Visit http://localhost:4000

# Or use a custom port
PORT=3000 pnpm dev
# Visit http://localhost:3000
```

See [PORT_CONFIGURATION.md](../../PORT_CONFIGURATION.md) for port configuration details.

### 3. Verify Everything Works

```bash
# Run all quality checks
pnpm check

# Run type checking
pnpm typecheck

# Build the project
pnpm build

# Run tests
pnpm test
```

## Project Structure

```
bolt-design-system/
├── apps/
│   └── v4/                    # Main Next.js application
│       ├── app/               # Next.js app directory
│       ├── components/        # React components
│       │   ├── ui/           # Base UI components
│       │   └── registry/     # Component registry
│       ├── content/          # MDX documentation
│       ├── lib/              # Utility functions
│       ├── registry/         # Built registry files
│       └── styles/           # Global styles
├── packages/
│   ├── shadcn/               # shadcn CLI package
│   └── tests/                # Test utilities
├── templates/                # Project templates
├── .husky/                   # Git hooks
├── .kiro/
│   └── steering/             # AI steering files
├── agents.md                 # AI agent guidelines
├── biome.jsonc              # Linting configuration
└── package.json             # Root package config
```

## Understanding the Monorepo

This is a **pnpm workspace** monorepo with:

- **apps/v4**: Main documentation and component showcase
- **packages/shadcn**: CLI tool for adding components
- **templates**: Starter templates for new projects

### Working with Workspaces

```bash
# Run command in specific workspace
pnpm --filter=bolt dev

# Add dependency to specific workspace
pnpm add <package> --filter=bolt

# Run command in all workspaces
pnpm -r build
```

## Development Workflow

### 1. Creating a New Component

```bash
# 1. Create component file
touch apps/bolt/components/ui/my-component.tsx

# 2. Implement component following patterns
# See .kiro/steering/project-standards.md

# 3. Add to registry
# Edit apps/bolt/registry.json

# 4. Build registry
pnpm registry:build

# 5. Validate
pnpm validate:registries

# 6. Test locally
pnpm dev
```

### 2. Making Changes

```bash
# 1. Create feature branch
git checkout -b feat/my-feature

# 2. Make changes
# Edit files...

# 3. Check code quality
pnpm fix          # Auto-fix issues
pnpm check        # Verify quality
pnpm typecheck    # Check types

# 4. Commit (hooks will run automatically)
git add .
git commit -m "feat: add new feature"

# 5. Push changes
git push origin feat/my-feature
```

### 3. Testing Changes

```bash
# Run all tests
pnpm test

# Run tests in watch mode (development)
pnpm test:dev

# Test specific workspace
pnpm --filter=bolt test

# Build to verify production readiness
pnpm build
```

## Code Quality Tools

### Ultracite + Biome

Fast, zero-config linting and formatting:

```bash
# Check for issues
pnpm check

# Auto-fix issues
pnpm fix

# Configuration in biome.jsonc
```

### TypeScript

Strict type checking enabled:

```bash
# Check types
pnpm typecheck

# Configuration in tsconfig.json
```

### Git Hooks (Husky)

Automatic quality checks on commit:

- **pre-commit**: Runs `pnpm check` and `pnpm typecheck`
- **commit-msg**: Validates commit message format

## Common Tasks

### Adding a Dependency

```bash
# To root workspace
pnpm add -w <package>

# To specific workspace
pnpm add <package> --filter=bolt

# As dev dependency
pnpm add -D <package> --filter=bolt
```

### Updating Dependencies

```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update <package>

# Check for outdated packages
pnpm outdated
```

### Building for Production

```bash
# Build all workspaces
pnpm build

# Build specific workspace
pnpm --filter=bolt build

# Preview production build
pnpm preview
```

### Working with the Registry

```bash
# Build component registry
pnpm registry:build

# Capture registry screenshots
pnpm registry:capture

# Validate registries
pnpm validate:registries

# Build examples
pnpm examples:build
```

## Troubleshooting

### Build Failures

```bash
# Clear caches and rebuild
rm -rf .next .turbo node_modules
pnpm install
pnpm build
```

### Type Errors

```bash
# Check TypeScript errors
pnpm typecheck

# Common fixes:
# 1. Update @types packages
# 2. Check tsconfig.json
# 3. Restart TypeScript server in IDE
```

### Linting Errors

```bash
# Auto-fix most issues
pnpm fix

# Check remaining issues
pnpm check

# Review biome.jsonc for configuration
```

### Git Hook Issues

```bash
# Reinstall hooks
rm -rf .husky
pnpm prepare

# Make hooks executable
chmod +x .husky/pre-commit .husky/commit-msg

# Bypass hooks (emergency only)
git commit --no-verify
```

## Environment Setup

### Required Tools

- **Node.js**: 20+ (check with `node --version`)
- **pnpm**: 9.0.6+ (check with `pnpm --version`)
- **Git**: Latest version

### IDE Setup

#### VS Code (Recommended)

Install extensions:
- Biome (biomejs.biome)
- TypeScript and JavaScript Language Features (built-in)
- Tailwind CSS IntelliSense
- MDX

Settings:
```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

## Learning Resources

### Documentation

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Fumadocs](https://fumadocs.vercel.app)

### Project-Specific

- [agents.md](../../agents.md) - AI agent guidelines
- [project-standards.md](./project-standards.md) - Coding standards
- [ai-development-guide.md](./ai-development-guide.md) - Development patterns

## Getting Help

### Common Questions

**Q: How do I add a new component?**
A: See "Creating a New Component" section above and review existing components in `apps/bolt/components/ui/`

**Q: Why is my commit failing?**
A: Git hooks run quality checks. Run `pnpm fix` and `pnpm typecheck` to fix issues.

**Q: How do I update dependencies?**
A: Use `pnpm update` for all or `pnpm update <package>` for specific packages.

**Q: Where do I add documentation?**
A: Add MDX files to `apps/bolt/content/` following existing structure.

### Support Channels

- GitHub Issues: Report bugs and request features
- Discussions: Ask questions and share ideas
- Contributing Guide: See CONTRIBUTING.md

## Next Steps

1. ✅ Complete initial setup
2. 📖 Read [project-standards.md](./project-standards.md)
3. 🎨 Explore components in `apps/bolt/components/ui/`
4. 📝 Review documentation in `apps/bolt/content/`
5. 🚀 Start building!

---

**Welcome to Bolt Design System!** 🎉

For AI assistants: This is a manual inclusion steering file. Reference it when users ask about getting started or project setup.
