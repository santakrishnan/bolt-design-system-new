# SSL/TLS Certificate Configuration

## Overview

The `NODE_TLS_REJECT_UNAUTHORIZED` environment variable controls whether Node.js validates SSL/TLS certificates.

## Configuration

### Default Behavior (Secure)

By default, Node.js validates all SSL/TLS certificates:

```bash
# .env.local
# NODE_TLS_REJECT_UNAUTHORIZED is not set (default: 1)
```

**Behavior:**
- ✅ Validates SSL certificates
- ✅ Rejects self-signed certificates
- ✅ Rejects expired certificates
- ✅ Rejects certificates with invalid chains
- ✅ **Secure and recommended for production**

### Disable SSL Validation (Development Only)

To disable SSL certificate validation:

```bash
# .env.local
NODE_TLS_REJECT_UNAUTHORIZED=0
```

**Behavior:**
- ⚠️ Accepts self-signed certificates
- ⚠️ Accepts expired certificates
- ⚠️ Accepts invalid certificate chains
- ⚠️ **INSECURE - Development only!**

## When to Use

### ✅ Use Cases for Disabling (Development Only)

1. **Local Development with Self-Signed Certificates**
   ```bash
   # Working with local HTTPS server
   NODE_TLS_REJECT_UNAUTHORIZED=0
   ```

2. **Corporate Proxy with Self-Signed Certificates**
   ```bash
   # Behind corporate firewall with SSL inspection
   NODE_TLS_REJECT_UNAUTHORIZED=0
   ```

3. **Testing with Mock HTTPS Services**
   ```bash
   # Testing against local mock services
   NODE_TLS_REJECT_UNAUTHORIZED=0
   ```

4. **Development Environment with Internal CA**
   ```bash
   # Internal certificate authority not in system trust store
   NODE_TLS_REJECT_UNAUTHORIZED=0
   ```

### ❌ Never Use In

1. **Production environments**
2. **Staging environments**
3. **CI/CD pipelines** (unless specifically testing)
4. **Any environment handling real user data**

## Security Implications

### Risks of Disabling SSL Validation

⚠️ **Man-in-the-Middle (MITM) Attacks**
- Attackers can intercept and modify traffic
- No protection against eavesdropping

⚠️ **Data Exposure**
- Sensitive data can be intercepted
- API keys, tokens, passwords at risk

⚠️ **Identity Spoofing**
- Cannot verify server identity
- Vulnerable to impersonation attacks

⚠️ **Compliance Issues**
- May violate security policies
- Could fail security audits

## Best Practices

### 1. Use Only in Development

```bash
# ✅ Good - Development only
# .env.local (not committed)
NODE_TLS_REJECT_UNAUTHORIZED=0

# ❌ Bad - Never in production
# .env.production
NODE_TLS_REJECT_UNAUTHORIZED=0  # NEVER DO THIS!
```

### 2. Document Why It's Needed

```bash
# .env.local
# Disable SSL validation for corporate proxy with self-signed cert
# TODO: Add corporate CA to system trust store
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### 3. Use Temporary Workarounds

```bash
# Only for specific command
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev

# Not globally
export NODE_TLS_REJECT_UNAUTHORIZED=0  # Avoid this
```

### 4. Better Alternatives

Instead of disabling SSL validation, consider:

**Option A: Add CA Certificate to System Trust Store**
```bash
# macOS
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ca-cert.pem

# Linux
sudo cp ca-cert.pem /usr/local/share/ca-certificates/
sudo update-ca-certificates

# Windows
certutil -addstore -f "ROOT" ca-cert.pem
```

**Option B: Use NODE_EXTRA_CA_CERTS**
```bash
# .env.local
NODE_EXTRA_CA_CERTS=/path/to/ca-cert.pem
```

**Option C: Configure Proxy with Valid Certificate**
```bash
# Use proxy with valid SSL certificate
HTTPS_PROXY=https://proxy.company.com:8080
```

## Configuration Examples

### Example 1: Development with Self-Signed Cert

```bash
# apps/bolt/.env.local
PORT=4000
NEXT_PUBLIC_APP_URL=https://localhost:4000

# Disable SSL validation for self-signed cert
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Example 2: Corporate Proxy

```bash
# apps/bolt/.env.local
PORT=4000

# Corporate proxy with SSL inspection
HTTPS_PROXY=https://proxy.company.com:8080
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Example 3: Production (Secure)

```bash
# apps/bolt/.env.production
PORT=3000
NEXT_PUBLIC_APP_URL=https://bolt-design.com

# Never disable SSL validation in production!
# NODE_TLS_REJECT_UNAUTHORIZED should NOT be set
```

## Troubleshooting

### Issue: "unable to verify the first certificate"

**Error:**
```
Error: unable to verify the first certificate
    at TLSSocket.onConnectSecure
```

**Solutions:**

1. **Temporary (Development):**
   ```bash
   NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev
   ```

2. **Permanent (Recommended):**
   ```bash
   # Add CA certificate
   NODE_EXTRA_CA_CERTS=/path/to/ca-cert.pem pnpm dev
   ```

3. **System-wide (Best):**
   ```bash
   # Add to system trust store (see Best Practices above)
   ```

### Issue: "self signed certificate in certificate chain"

**Error:**
```
Error: self signed certificate in certificate chain
```

**Solutions:**

1. **For Development:**
   ```bash
   # .env.local
   NODE_TLS_REJECT_UNAUTHORIZED=0
   ```

2. **For Production:**
   ```bash
   # Get a valid certificate from Let's Encrypt or other CA
   # Never disable SSL validation!
   ```

### Issue: Corporate Proxy Blocking Requests

**Error:**
```
Error: unable to get local issuer certificate
```

**Solutions:**

1. **Export Corporate CA:**
   ```bash
   # Get CA cert from IT department
   # Add to .env.local
   NODE_EXTRA_CA_CERTS=/path/to/corporate-ca.pem
   ```

2. **Temporary Workaround:**
   ```bash
   NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev
   ```

## Environment Variables Reference

| Variable | Values | Default | Description |
|----------|--------|---------|-------------|
| `NODE_TLS_REJECT_UNAUTHORIZED` | `0` or `1` | `1` | Controls SSL certificate validation |
| `NODE_EXTRA_CA_CERTS` | File path | None | Path to additional CA certificates |
| `HTTPS_PROXY` | URL | None | HTTPS proxy server |
| `SSL_CERT_FILE` | File path | None | Path to SSL certificate bundle |

## Testing SSL Configuration

### Test 1: Verify SSL Validation is Enabled

```bash
# Should fail with certificate error
node -e "require('https').get('https://self-signed.badssl.com/')"
```

### Test 2: Verify SSL Validation is Disabled

```bash
# Should succeed
NODE_TLS_REJECT_UNAUTHORIZED=0 node -e "require('https').get('https://self-signed.badssl.com/', (res) => console.log('Success:', res.statusCode))"
```

### Test 3: Test with Your Application

```bash
# With SSL validation (should fail if cert is invalid)
pnpm dev

# Without SSL validation (should work)
NODE_TLS_REJECT_UNAUTHORIZED=0 pnpm dev
```

## Security Checklist

Before disabling SSL validation, ask yourself:

- [ ] Is this for development only?
- [ ] Have I tried adding the CA certificate instead?
- [ ] Have I documented why this is needed?
- [ ] Will this be removed before production?
- [ ] Am I not handling sensitive data?
- [ ] Is there no better alternative?

If you answered "No" to any of these, **do not disable SSL validation!**

## Monitoring and Alerts

### Development

Add a warning when SSL validation is disabled:

```javascript
// apps/bolt/middleware.ts or app/layout.tsx
if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0') {
  console.warn('⚠️  WARNING: SSL certificate validation is DISABLED!')
  console.warn('⚠️  This should only be used in development!')
}
```

### CI/CD

Fail builds if SSL validation is disabled:

```yaml
# .github/workflows/ci.yml
- name: Check SSL Configuration
  run: |
    if grep -q "NODE_TLS_REJECT_UNAUTHORIZED=0" .env.production; then
      echo "ERROR: SSL validation is disabled in production!"
      exit 1
    fi
```

## Summary

### ✅ Do

- Use only in development
- Document why it's needed
- Remove before production
- Consider better alternatives
- Add warnings/alerts

### ❌ Don't

- Use in production
- Commit to version control (production configs)
- Use globally (export)
- Ignore security implications
- Use without understanding risks

## Resources

- [Node.js TLS Documentation](https://nodejs.org/api/tls.html)
- [OWASP TLS Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [Let's Encrypt (Free SSL Certificates)](https://letsencrypt.org/)

---

**Remember:** Disabling SSL validation is a security risk. Use only in development and always re-enable for production! 🔒
