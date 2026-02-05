# Port Configuration Guide

The Bolt Design System now uses **dynamic port configuration** via environment variables.

## Quick Start

### Default Port (4000 with Auto-Increment)

Just run the dev server - it will try port 4000, and automatically use the next available port if busy:

```bash
pnpm dev
# Tries port 4000
# If busy: ⚠ Port 4000 is in use, trying 4001 instead.
# Server runs on http://localhost:4000 (or next available)
```

### Custom Starting Port

Set the `PORT` environment variable to change the starting port:

```bash
# Option 1: Inline
PORT=3000 pnpm dev
# Tries 3000, then 3001, 3002, etc. if busy

# Option 2: Export (current session)
export PORT=3000
pnpm dev

# Option 3: .env.local file (persistent)
echo "PORT=3000" > apps/bolt/.env.local
pnpm dev
```

## Configuration Files

### 1. Environment Variables

**File: `apps/bolt/.env.local`** (create this file)

```bash
# Development server port
PORT=4000

# Next.js public URL (update if port changes)
NEXT_PUBLIC_APP_URL=http://localhost:4000

# Registry URL (update if port changes)
REGISTRY_URL=http://localhost:4000/r
```

**Note:** `.env.local` is gitignored and won't be committed.

### 2. Example File

**File: `apps/bolt/.env.example`** (template)

This file is committed to git and serves as a template. Copy it to `.env.local` and customize:

```bash
cp apps/bolt/.env.example apps/bolt/.env.local
```

## How It Works

### Automatic Port Assignment

Next.js has **built-in automatic port detection**:

1. Reads `PORT` from environment variable (default: 4000)
2. Tries to use that port
3. If busy, automatically tries the next port (4001, 4002, etc.)
4. Shows a warning message when incrementing

**Example:**
```bash
pnpm dev
# ⚠ Port 4000 is in use, trying 4001 instead.
# ▲ Next.js 16.1.6
# - Local:        http://localhost:4001
```

This happens automatically - no configuration needed!

### Next.js Port

Next.js automatically reads the `PORT` environment variable:

```json
// apps/bolt/package.json
{
  "scripts": {
    "dev": "next dev --turbopack",  // Uses PORT env var
    "start": "next start"            // Uses PORT env var
  }
}
```

### Registry URL

The registry URL is dynamically constructed based on the port:

```typescript
// packages/tests/src/utils/helpers.ts
export function getRegistryUrl() {
  const port = process.env.PORT || "4000"
  return process.env.REGISTRY_URL || `http://localhost:${port}/r`
}
```

### Test Scripts

Tests use the configured port:

```json
// package.json
{
  "scripts": {
    "test": "start-server-and-test bolt:dev http://localhost:${PORT:-4000} test:dev"
  }
}
```

## Common Scenarios

### Scenario 1: Default Setup (Port 4000)

No configuration needed:

```bash
pnpm dev
# → http://localhost:4000
```

### Scenario 2: Custom Port (e.g., 3000)

**Method A: Environment Variable**
```bash
PORT=3000 pnpm dev
# → http://localhost:3000
```

**Method B: .env.local File**
```bash
# Create/edit apps/bolt/.env.local
echo "PORT=3000" > apps/bolt/.env.local
echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> apps/bolt/.env.local
echo "REGISTRY_URL=http://localhost:3000/r" >> apps/bolt/.env.local

pnpm dev
# → http://localhost:3000
```

### Scenario 3: Multiple Developers

Each developer can use their own port:

**Developer 1:**
```bash
# apps/bolt/.env.local
PORT=4000
```

**Developer 2:**
```bash
# apps/bolt/.env.local
PORT=5000
```

**Developer 3:**
```bash
# apps/bolt/.env.local
PORT=8080
```

### Scenario 4: CI/CD Pipeline

Set environment variables in your CI/CD:

```yaml
# .github/workflows/test.yml
env:
  PORT: 4000
  REGISTRY_URL: http://localhost:4000/r
```

## Environment Variables Reference

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4000` | Development server port |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:4000` | Public URL for the app |
| `REGISTRY_URL` | `http://localhost:${PORT}/r` | Component registry URL |
| `NODE_TLS_REJECT_UNAUTHORIZED` | `1` (enabled) | SSL certificate validation (set to `0` to disable - **development only!**) |

### SSL/TLS Configuration

**NODE_TLS_REJECT_UNAUTHORIZED** controls SSL certificate validation:

- **Default (`1`)**: Validates SSL certificates (secure, recommended)
- **Disabled (`0`)**: Accepts self-signed/invalid certificates (⚠️ **development only!**)

**When to disable:**
- Working with self-signed certificates in development
- Behind corporate proxy with SSL inspection
- Testing with local HTTPS services

**⚠️ WARNING:** Never disable SSL validation in production! See [SSL_CONFIGURATION.md](./SSL_CONFIGURATION.md) for details.

## Troubleshooting

### Port Already in Use

If you see "Port 4000 is already in use":

```bash
# Option 1: Use a different port
PORT=4001 pnpm dev

# Option 2: Kill the process using port 4000
lsof -ti:4000 | xargs kill -9

# Option 3: Find what's using the port
lsof -i:4000
```

### Environment Variables Not Working

1. **Check .env.local exists:**
   ```bash
   ls -la apps/bolt/.env.local
   ```

2. **Verify the content:**
   ```bash
   cat apps/bolt/.env.local
   ```

3. **Restart the dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   pnpm dev
   ```

4. **Clear Next.js cache:**
   ```bash
   rm -rf apps/bolt/.next
   pnpm dev
   ```

### Registry URL Mismatch

If the registry URL doesn't match your port:

```bash
# Update all related URLs in .env.local
PORT=3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
REGISTRY_URL=http://localhost:3000/r
```

## Best Practices

### 1. Use .env.local for Local Development

```bash
# apps/bolt/.env.local (not committed)
PORT=4000
NEXT_PUBLIC_APP_URL=http://localhost:4000
REGISTRY_URL=http://localhost:4000/r
```

### 2. Keep .env.example Updated

When adding new environment variables, update `.env.example`:

```bash
# apps/bolt/.env.example (committed)
PORT=4000
NEW_VARIABLE=value
```

### 3. Document Environment Variables

Add new variables to this guide and to `agents.md`.

### 4. Use Consistent Ports in Team

Agree on a default port (4000) for consistency, but allow customization.

## Migration from Hardcoded Port

If you're upgrading from a version with hardcoded port 4000:

1. **No action needed** - Port 4000 is still the default
2. **Optional:** Create `.env.local` for explicit configuration
3. **Optional:** Customize the port if needed

## Examples

### Example 1: Development on Port 3000

```bash
# apps/bolt/.env.local
PORT=3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
REGISTRY_URL=http://localhost:3000/r
```

```bash
pnpm dev
# → http://localhost:3000
```

### Example 2: Production Preview on Port 8080

```bash
PORT=8080 pnpm preview
# → http://localhost:8080
```

### Example 3: Testing with Custom Port

```bash
PORT=5000 pnpm test
# Tests run against http://localhost:5000
```

## Summary

✅ **Dynamic port configuration** via `PORT` environment variable
✅ **Default port 4000** - no configuration needed
✅ **Easy customization** - set `PORT` in `.env.local`
✅ **Team-friendly** - each developer can use their own port
✅ **CI/CD ready** - configure via environment variables

---

**Need help?** Check the [Troubleshooting](#troubleshooting) section or open an issue.
