# Next.js Automatic Port Assignment

## How Next.js Auto-Assigns Ports

Next.js has built-in functionality to automatically find an available port when the default port is occupied.

## Default Behavior

### Without Explicit Port

When you run Next.js **without** specifying a port:

```bash
next dev
```

Next.js will:
1. Try port 3000 (default)
2. If 3000 is busy, try 3001
3. If 3001 is busy, try 3002
4. Continue until it finds an available port

**Output:**
```
⚠ Port 3000 is in use, trying 3001 instead.
▲ Next.js 16.1.6
- Local:        http://localhost:3001
```

### With Explicit Port

When you specify a port:

```bash
next dev --port 4000
# or
PORT=4000 next dev
```

Next.js will:
1. Try the specified port (4000)
2. If busy, **fail with an error** (no auto-increment)

**Output:**
```
Error: listen EADDRINUSE: address already in use :::4000
```

## Enabling Auto-Port for Bolt Design System

Currently, our scripts specify port 4000 explicitly, which **disables** auto-port assignment. Let's fix this!

### Option 1: Remove Port Specification (Recommended)

Let Next.js handle port assignment automatically:

**Update `apps/bolt/package.json`:**
```json
{
  "scripts": {
    "dev": "pnpm icons:dev & next dev --turbopack",
    "start": "next start"
  }
}
```

**Behavior:**
- Tries port 3000 first (Next.js default)
- Auto-increments if busy (3001, 3002, etc.)
- Shows which port it's using

### Option 2: Specify Default, Allow Auto-Increment

Use a custom script that tries a preferred port but falls back:

**Create `apps/bolt/scripts/dev-server.js`:**
```javascript
#!/usr/bin/env node
import { spawn } from 'child_process'

const preferredPort = process.env.PORT || 4000

console.log(`Starting Next.js dev server (preferred port: ${preferredPort})...`)

const nextDev = spawn('next', ['dev', '--turbopack', '--port', preferredPort], {
  stdio: 'inherit',
  shell: true
})

nextDev.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${preferredPort} is busy, trying next available port...`)
    // Restart without port specification to enable auto-increment
    const nextDevAuto = spawn('next', ['dev', '--turbopack'], {
      stdio: 'inherit',
      shell: true
    })
  } else {
    console.error('Error starting dev server:', error)
    process.exit(1)
  }
})
```

### Option 3: Use detect-port Package

Install a port detection utility:

```bash
pnpm add -D detect-port
```

**Create `apps/bolt/scripts/start-dev.mjs`:**
```javascript
#!/usr/bin/env node
import detect from 'detect-port'
import { spawn } from 'child_process'

const preferredPort = parseInt(process.env.PORT || '4000')

detect(preferredPort)
  .then((availablePort) => {
    if (availablePort !== preferredPort) {
      console.log(`⚠ Port ${preferredPort} is in use, using ${availablePort} instead.`)
    }
    
    process.env.PORT = availablePort.toString()
    
    const nextDev = spawn('next', ['dev', '--turbopack', '--port', availablePort], {
      stdio: 'inherit',
      shell: true,
      env: { ...process.env, PORT: availablePort }
    })
    
    nextDev.on('close', (code) => {
      process.exit(code)
    })
  })
  .catch((err) => {
    console.error('Error detecting port:', err)
    process.exit(1)
  })
```

**Update `apps/bolt/package.json`:**
```json
{
  "scripts": {
    "dev": "pnpm icons:dev & node scripts/start-dev.mjs"
  }
}
```

## Recommended Solution

I recommend **Option 1** (simplest) with a twist - use Next.js default behavior but document the preferred port:

### Implementation

**1. Update `apps/bolt/package.json`:**
```json
{
  "scripts": {
    "dev": "pnpm icons:dev & next dev --turbopack",
    "dev:4000": "pnpm icons:dev & PORT=4000 next dev --turbopack",
    "start": "next start"
  }
}
```

**2. Update `apps/bolt/.env.local`:**
```bash
# Preferred port (Next.js will auto-increment if busy)
PORT=4000
```

**3. Behavior:**
- `pnpm dev` - Uses PORT from .env.local (4000), auto-increments if busy
- `pnpm dev:4000` - Explicitly uses 4000, fails if busy
- Next.js handles all port detection automatically

## How It Works Internally

Next.js uses the following logic:

```javascript
// Simplified version of Next.js port detection
async function getPort(preferredPort) {
  let port = preferredPort || 3000
  
  while (true) {
    try {
      // Try to bind to the port
      await tryPort(port)
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

**Key Points:**
1. Only works when port is **not explicitly specified** via `--port` flag
2. Uses `PORT` environment variable as starting point
3. Increments by 1 until finding available port
4. Shows warning message when incrementing

## Current vs. Proposed Behavior

### Current (Explicit Port)
```bash
pnpm dev
# Uses port 4000 explicitly
# Fails if 4000 is busy ❌
```

### Proposed (Auto Port)
```bash
pnpm dev
# Tries port 4000 (from .env.local)
# Auto-increments to 4001, 4002, etc. if busy ✅
```

## Testing Auto-Port

### Test 1: Default Port Available
```bash
# Terminal 1
pnpm dev
# → http://localhost:4000
```

### Test 2: Port Busy, Auto-Increment
```bash
# Terminal 1
pnpm dev
# → http://localhost:4000

# Terminal 2
pnpm dev
# → ⚠ Port 4000 is in use, trying 4001 instead.
# → http://localhost:4001
```

### Test 3: Custom Starting Port
```bash
PORT=5000 pnpm dev
# Tries 5000, then 5001, 5002, etc.
```

## Updating the Configuration

Let me update the actual files to enable auto-port:
