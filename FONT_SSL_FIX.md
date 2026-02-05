# Google Fonts SSL Error - Quick Fix

## The Error

```
⚠ [next]/internal/font/google/...woff2
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.gstatic.com/...
Hint: It looks like this error was TLS-related. Try enabling system TLS certificates with 
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 as an environment variable
```

## The Problem

Turbopack (Next.js's bundler) is trying to fetch Google Fonts over HTTPS but can't verify the SSL certificates. This typically happens when:

1. Behind a corporate proxy with SSL inspection
2. Using self-signed certificates
3. Network has SSL/TLS interception
4. System certificates aren't accessible to Node.js

## The Solution

Add these two settings to your `apps/bolt/.env.local`:

```bash
# Disable Node.js SSL validation
NODE_TLS_REJECT_UNAUTHORIZED=0

# Enable Turbopack to use system TLS certificates
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1
```

## Step-by-Step Fix

### Option 1: Update .env.local (Recommended)

**File: `apps/bolt/.env.local`**

```bash
# Port Configuration
PORT=4000
NEXT_PUBLIC_APP_URL=http://localhost:4000
REGISTRY_URL=http://localhost:4000/r

# SSL/TLS Configuration (Development Only!)
NODE_TLS_REJECT_UNAUTHORIZED=0

# Turbopack System TLS Certificates
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1
```

Then restart your dev server:
```bash
# Stop the server (Ctrl+C)
pnpm dev
```

### Option 2: Inline Environment Variables

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 pnpm dev
```

### Option 3: Add to next.config.mjs

**File: `apps/bolt/next.config.mjs`**

Add to the config object:

```javascript
const nextConfig = {
  // ... existing config
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
}
```

## What Each Setting Does

### NODE_TLS_REJECT_UNAUTHORIZED=0

- **Purpose**: Disables SSL certificate validation for Node.js
- **Effect**: Allows connections to servers with self-signed or invalid certificates
- **Use**: Development only! Never in production!

### NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1

- **Purpose**: Tells Turbopack to use system's trusted certificate store
- **Effect**: Allows Turbopack to trust certificates that your system trusts
- **Use**: Safe for development, especially with corporate proxies

## Verification

After applying the fix, you should see:

```bash
pnpm dev

# ✓ Starting...
# ✓ Ready in 1605ms
# [MDX] generated files in 338ms
# [MDX] started dev server
```

No more font SSL errors! ✅

## Alternative Solutions

### Solution 1: Use Local Fonts (Best for Production)

Instead of Google Fonts, use local font files:

**File: `apps/bolt/app/layout.tsx`**

```typescript
import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/MyFont.woff2',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
```

### Solution 2: Add Corporate CA Certificate

If you're behind a corporate proxy, add the CA certificate:

```bash
# Get the CA certificate from your IT department
# Then set the environment variable
NODE_EXTRA_CA_CERTS=/path/to/corporate-ca.pem pnpm dev
```

### Solution 3: Configure Proxy

If using a proxy, configure it properly:

```bash
# .env.local
HTTPS_PROXY=https://proxy.company.com:8080
NODE_TLS_REJECT_UNAUTHORIZED=0
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1
```

## Troubleshooting

### Still Getting Errors?

1. **Restart the dev server completely:**
   ```bash
   # Kill all Node processes
   pkill -f node
   
   # Start fresh
   pnpm dev
   ```

2. **Clear Next.js cache:**
   ```bash
   rm -rf apps/bolt/.next
   pnpm dev
   ```

3. **Verify environment variables are loaded:**
   ```bash
   # Add to apps/bolt/app/layout.tsx temporarily
   console.log('NODE_TLS_REJECT_UNAUTHORIZED:', process.env.NODE_TLS_REJECT_UNAUTHORIZED)
   console.log('NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS:', process.env.NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS)
   ```

4. **Check if fonts are actually needed:**
   ```bash
   # Search for Google Font imports
   grep -r "next/font/google" apps/bolt/
   ```

### Different Error?

If you see a different error like:

**"ECONNREFUSED":**
```bash
# Network connectivity issue
# Check your internet connection or proxy settings
```

**"ETIMEDOUT":**
```bash
# Timeout issue
# Check firewall or proxy settings
```

**"CERT_HAS_EXPIRED":**
```bash
# Certificate expired
# Update system certificates or use NODE_TLS_REJECT_UNAUTHORIZED=0
```

## Security Note

⚠️ **Important:** These settings disable SSL certificate validation, which is a security risk!

**Only use in development!**

- ✅ Local development
- ✅ Behind corporate proxy
- ✅ Testing with self-signed certificates
- ❌ Production
- ❌ Staging
- ❌ Any public environment

## Summary

**Quick Fix:**
```bash
# Add to apps/bolt/.env.local
NODE_TLS_REJECT_UNAUTHORIZED=0
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1

# Restart dev server
pnpm dev
```

**Why it works:**
- `NODE_TLS_REJECT_UNAUTHORIZED=0` allows Node.js to accept invalid certificates
- `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` tells Turbopack to use system certificates

**Result:**
- ✅ Google Fonts load successfully
- ✅ No more SSL errors
- ✅ Dev server runs smoothly

---

**Need more help?** See [SSL_CONFIGURATION.md](./SSL_CONFIGURATION.md) for complete SSL/TLS documentation.
