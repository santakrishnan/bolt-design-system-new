# Bolt Design System

A modern component library built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Sleek, accessible, and ready to use.

![hero](apps/bolt/public/opengraph-image.png)

## 🚀 Tech Stack

- **Next.js 16.1.6** - Latest stable React framework
- **React 19.2.4** - Latest stable React version
- **TypeScript 5.5.3** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first CSS
- **shadcn/ui 3.8.3** - Beautiful component system
- **Base UI 1.1.0** - Accessible component primitives
- **Fumadocs 16.5.0** - Documentation framework
- **Shiki 3.22.0** - Syntax highlighting

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Initialize git hooks
pnpm prepare

# Start development server
pnpm dev
```

## 🛠️ Development

### Configuration

The development server uses **port 4000** by default with automatic port detection. You can customize settings in `apps/bolt/.env.local`:

```bash
# Port configuration (auto-increments if busy: 4000 → 4001 → 4002...)
PORT=4000

# SSL certificate validation (development only!)
# Uncomment to disable SSL checks for self-signed certificates
# NODE_TLS_REJECT_UNAUTHORIZED=0
```

**Quick start:**
```bash
# Use default port (4000)
pnpm dev

# Use custom port
PORT=3000 pnpm dev
```

See [PORT_CONFIGURATION.md](./PORT_CONFIGURATION.md) and [SSL_CONFIGURATION.md](./SSL_CONFIGURATION.md) for details.

### Available Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm check            # Run Ultracite/Biome checks
pnpm fix              # Auto-fix linting issues
pnpm typecheck        # TypeScript validation
pnpm test             # Run tests

# Component Registry
pnpm registry:build   # Build component registry
pnpm validate:registries  # Validate registry
```

## 🎨 Code Quality

This project uses **Ultracite 7.1.4** with **Biome 2.3.14** for automated linting and formatting:

- Zero-configuration setup
- Fast Rust-based tooling
- AI-friendly code standards
- Pre-commit hooks with Husky

## 🤖 AI-Ready

Comprehensive AI configuration included:

- `agents.md` - AI agent guidelines
- `.kiro/steering/` - Project standards and patterns
- `biome.jsonc` - Linting configuration
- Git hooks for quality enforcement

## 📚 Documentation

Visit http://ui.shadcn.com/docs to view the documentation.

For AI assistants, see:
- [agents.md](./agents.md) - Complete project overview
- [.kiro/steering/project-standards.md](./.kiro/steering/project-standards.md) - Coding standards
- [.kiro/steering/ai-development-guide.md](./.kiro/steering/ai-development-guide.md) - Development patterns

## 🤝 Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

## 📄 License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).

## 👤 Author

**Santakrishnan**
- GitHub: [@santakrishnan](https://github.com/santakrishnan)

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
