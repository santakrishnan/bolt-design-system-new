# Environment Configuration Summary

## ✅ What's Configured

The Bolt Design System now has comprehensive environment variable configuration for both **port management** and **SSL/TLS settings**.

## Environment Variables

### File: `apps/bolt/.env.local`

```bash
# Port Configuration
PORT=4000                                    # Default port (auto-increments if busy)
NEXT_PUBLIC_APP_URL=http://localhost:4000   # Public URL
REGISTRY_URL=http://localhost:4000/r        # Registry URL

# SSL/TLS Configuration (Development Only!)
# NODE_TLS_REJECT_UNAUTHORIZED=0            # Uncomment to disable SSL validation
```

## Quick Reference

### Port Configuration

| Feature | Description |
|---------|-------------|
| **Default Port** | 4000 |
| **Auto-Increment** | ✅ Yes (4000 → 4001 → 4002...) |
| **Configurable** | ✅ Via `PORT` environment variable |
| **Multiple Instances** | ✅ Supported |

**Usage:**
```bash
pnpm dev              # Uses port 4000 (or next available)
PORT=3000 pnpm dev    # Uses port 3000 (or next available)
```

### SSL Configuration

| Setting | Value | Description |
|---------|-------|-------------|
| **Default** | `1` (enabled) | Validates SSL certificates (secure) |
| **Disabled** | `0` | Accepts invalid certificates (⚠️ dev only!) |

**Usage:**
```bash
# Enable SSL validation (default, secure)
pnpm dev

# Disable SSL validation (development only!)
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev
```

## When to Use Each Setting

### Port Configuration

✅ **Always use** - Port configuration is safe and recommended for all environments

**Use cases:**
- Running multiple dev servers
- Avoiding port conflicts
- Team development
- CI/CD pipelines

### SSL Configuration

⚠️ **Development only** - Never disable SSL validation in production!

**Use cases:**
- Self-signed certificates in development
- Corporate proxy with SSL inspection
- Local HTTPS testing
- Internal CA certificates

❌ **Never use in:**
- Production
- Staging
- Any environment with real user data

## Documentation

| Document | Purpose |
|----------|---------|
| [PORT_CONFIGURATION.md](./PORT_CONFIGURATION.md) | Complete port configuration guide |
| [AUTO_PORT_GUIDE.md](./AUTO_PORT_GUIDE.md) | Technical details on auto-port |
| [PORT_AUTO_INCREMENT_SUMMARY.md](./PORT_AUTO_INCREMENT_SUMMARY.md) | Quick port reference |
| [SSL_CONFIGURATION.md](./SSL_CONFIGURATION.md) | Complete SSL/TLS guide |
| [ENV_CONFIGURATION_SUMMARY.md](./ENV_CONFIGURATION_SUMMARY.md) | This document |

## Configuration Files

| File | Purpose | Committed? |
|------|---------|------------|
| `apps/bolt/.env.example` | Template with documentation | ✅ Yes |
| `apps/bolt/.env.local` | Local development settings | ❌ No (gitignored) |
| `apps/bolt/.env.production` | Production settings | ✅ Yes (if needed) |

## Examples

### Example 1: Default Development Setup

```bash
# apps/bolt/.env.local
PORT=4000
NEXT_PUBLIC_APP_URL=http://localhost:4000
REGISTRY_URL=http://localhost:4000/r
```

```bash
pnpm dev
# → http://localhost:4000 (or 4001 if busy)
```

### Example 2: Custom Port

```bash
# apps/bolt/.env.local
PORT=3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
REGISTRY_URL=http://localhost:3000/r
```

```bash
pnpm dev
# → http://localhost:3000 (or 3001 if busy)
```

### Example 3: Development with Self-Signed Certificate

```bash
# apps/bolt/.env.local
PORT=4000
NEXT_PUBLIC_APP_URL=https://localhost:4000
REGISTRY_URL=https://localhost:4000/r

# Disable SSL validation for self-signed cert
NODE_TLS_REJECT_UNAUTHORIZED=0
```

```bash
pnpm dev
# → https://localhost:4000 (accepts self-signed cert)
```

### Example 4: Corporate Proxy

```bash
# apps/bolt/.env.local
PORT=4000
HTTPS_PROXY=https://proxy.company.com:8080

# Disable SSL validation for corporate proxy
NODE_TLS_REJECT_UNAUTHORIZED=0
```

```bash
pnpm dev
# → Works through corporate proxy
```

### Example 5: Production (Secure)

```bash
# apps/bolt/.env.production
PORT=3000
NEXT_PUBLIC_APP_URL=https://bolt-design.com
REGISTRY_URL=https://bolt-design.com/r

# Never disable SSL validation in production!
# NODE_TLS_REJECT_UNAUTHORIZED should NOT be set
```

## Security Best Practices

### ✅ Do

- Use `.env.local` for local development
- Keep `.env.example` updated
- Document why SSL validation is disabled
- Remove SSL disabling before production
- Use port auto-increment for flexibility

### ❌ Don't

- Commit `.env.local` to git
- Disable SSL validation in production
- Use `NODE_TLS_REJECT_UNAUTHORIZED=0` globally
- Hardcode ports in scripts
- Ignore security warnings

## Troubleshooting

### Port Issues

**Problem:** Port already in use
```bash
Error: listen EADDRINUSE: address already in use :::4000
```

**Solution:** Port auto-increment will handle this automatically!
```bash
pnpm dev
# ⚠ Port 4000 is in use, trying 4001 instead.
```

### SSL Issues

**Problem:** Self-signed certificate error
```bash
Error: unable to verify the first certificate
```

**Solution 1 (Quick):** Disable SSL validation temporarily
```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev
```

**Solution 2 (Better):** Add CA certificate
```bash
NODE_EXTRA_CA_CERTS=/path/to/ca-cert.pem pnpm dev
```

**Solution 3 (Best):** Add to system trust store
```bash
# See SSL_CONFIGURATION.md for instructions
```

## Testing Configuration

### Test Port Auto-Increment

```bash
# Terminal 1
pnpm dev
# Note the port (e.g., 4000)

# Terminal 2
pnpm dev
# Should use 4001

# Terminal 3
pnpm dev
# Should use 4002
```

### Test SSL Configuration

```bash
# With SSL validation (should fail for self-signed)
pnpm dev

# Without SSL validation (should work)
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev
```

## Summary

✅ **Port Configuration**
- Default: 4000
- Auto-increments when busy
- Configurable via `PORT` env var
- Safe for all environments

⚠️ **SSL Configuration**
- Default: Enabled (secure)
- Can be disabled for development
- **Never disable in production!**
- Document why it's needed

📚 **Documentation**
- Complete guides available
- Examples for common scenarios
- Security best practices included
- Troubleshooting tips provided

---

**Ready to start developing!** 🚀

See individual documentation files for more details on each configuration option.
