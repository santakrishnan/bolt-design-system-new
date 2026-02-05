# Port Auto-Increment - Summary

## ✅ What Changed

The Bolt Design System now uses **Next.js built-in automatic port detection**.

## How It Works

### Before (Hardcoded)
```bash
pnpm dev
# Always tries port 4000
# Fails if 4000 is busy ❌
```

### After (Auto-Increment)
```bash
pnpm dev
# Tries port 4000 (from .env.local)
# If busy, automatically tries 4001, 4002, etc. ✅
# Shows: ⚠ Port 4000 is in use, trying 4001 instead.
```

## Configuration

### Default Setup

**File: `apps/bolt/.env.local`**
```bash
PORT=4000
```

Next.js will:
1. Try port 4000 first
2. Auto-increment if busy (4001, 4002, ...)
3. Show which port it's using

### Custom Starting Port

Change the starting port in `.env.local`:
```bash
PORT=3000  # Will try 3000, 3001, 3002, etc.
```

Or use inline:
```bash
PORT=5000 pnpm dev
```

## Examples

### Example 1: Single Instance
```bash
pnpm dev
# → http://localhost:4000
```

### Example 2: Multiple Instances
```bash
# Terminal 1
pnpm dev
# → http://localhost:4000

# Terminal 2
pnpm dev
# → ⚠ Port 4000 is in use, trying 4001 instead.
# → http://localhost:4001

# Terminal 3
pnpm dev
# → ⚠ Port 4001 is in use, trying 4002 instead.
# → http://localhost:4002
```

### Example 3: Custom Starting Port
```bash
PORT=8080 pnpm dev
# → http://localhost:8080
# Or 8081, 8082, etc. if busy
```

## Technical Details

### How Next.js Does It

Next.js internally uses this logic:

```javascript
// Simplified version
async function getPort(preferredPort) {
  let port = preferredPort || 3000
  
  while (true) {
    try {
      await tryBindPort(port)
      return port
    } catch (error) {
      if (error.code === 'EADDRINUSE') {
        console.log(`⚠ Port ${port} is in use, trying ${port + 1} instead.`)
        port++
      } else {
        throw error
      }
    }
  }
}
```

### Key Points

1. ✅ **Automatic** - No manual port checking needed
2. ✅ **Configurable** - Set preferred port via `PORT` env var
3. ✅ **Incremental** - Tries port, port+1, port+2, etc.
4. ✅ **Informative** - Shows which port it's using
5. ✅ **Built-in** - Native Next.js feature, no extra packages

## Files Updated

| File | Change |
|------|--------|
| `apps/bolt/package.json` | Removed `--port 4000` flag |
| `apps/bolt/.env.example` | Added auto-increment documentation |
| `apps/bolt/.env.local` | Added auto-increment documentation |
| `PORT_CONFIGURATION.md` | Updated with auto-increment info |
| `AUTO_PORT_GUIDE.md` | Complete guide on auto-port behavior |

## Benefits

✅ **No more port conflicts** - Automatically finds available port
✅ **Multiple instances** - Run multiple dev servers simultaneously
✅ **Team-friendly** - Each developer can run without conflicts
✅ **CI/CD ready** - Works in parallel test environments
✅ **Zero configuration** - Works out of the box

## Testing

Test the auto-increment behavior:

```bash
# Terminal 1
pnpm dev
# Note the port (e.g., 4000)

# Terminal 2 (while Terminal 1 is running)
pnpm dev
# Should auto-increment to 4001

# Terminal 3 (while both are running)
pnpm dev
# Should auto-increment to 4002
```

## Troubleshooting

### Port Still Fails

If you see an error instead of auto-increment:

1. **Check if `--port` flag is used:**
   ```json
   // apps/bolt/package.json
   "dev": "next dev --turbopack"  // ✅ Good (no --port flag)
   "dev": "next dev --turbopack --port 4000"  // ❌ Bad (explicit port)
   ```

2. **Verify PORT is set as env var:**
   ```bash
   # .env.local
   PORT=4000  # ✅ Good
   ```

3. **Restart the dev server:**
   ```bash
   # Stop all instances (Ctrl+C)
   pnpm dev
   ```

### Want to Disable Auto-Increment

If you want to fail when port is busy (old behavior):

```json
// apps/bolt/package.json
{
  "scripts": {
    "dev": "pnpm icons:dev & next dev --turbopack --port 4000"
  }
}
```

This will fail with an error if port 4000 is busy.

## Summary

🎉 **Port auto-increment is now enabled!**

- Default port: 4000
- Auto-increments if busy: 4001, 4002, etc.
- Configurable via `PORT` environment variable
- Works automatically with Next.js built-in functionality

No additional packages or scripts needed - it's all built into Next.js! 🚀
