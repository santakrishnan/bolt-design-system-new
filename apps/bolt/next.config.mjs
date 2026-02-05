import { createMDX } from "fumadocs-mdx/next"

/**
 * Next.js Configuration for Bolt Design System
 *
 * App Structure:
 * - Uses route groups (folders with parentheses) for organization
 * - (app)/ - Main site with header/footer
 * - (examples)/ - Full-page example applications
 * - (view)/ - Component previews (no layout)
 * - (internal)/ - Development tools
 *
 * Route groups don't affect URLs:
 * - app/(app)/docs/page.tsx → /docs
 * - app/(view)/view/[name]/page.tsx → /view/[name]
 *
 * See apps/v4/app/README.md for complete documentation
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Transpile Base UI to ensure proper ESM module resolution
  // Base UI has both CommonJS and ESM exports, this ensures Next.js uses ESM
  transpilePackages: ["@base-ui/react"],
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
    ],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  redirects() {
    return [
      // Form redirects to /docs/forms
      {
        source: "/docs/components/form",
        destination: "/docs/forms",
        permanent: true,
      },
      {
        source: "/docs/components/radix/form",
        destination: "/docs/forms",
        permanent: true,
      },
      {
        source: "/docs/components/base/form",
        destination: "/docs/forms",
        permanent: true,
      },
      // Component redirects (default to radix)
      {
        source: "/docs/components/:name((?!radix|base|form)[^/]+)",
        destination: "/docs/components/radix/:name",
        permanent: false,
      },
      {
        source: "/docs/components/:name((?!radix|base|form)[^/]+).md",
        destination: "/docs/components/radix/:name.md",
        permanent: false,
      },
      // Convenience redirects
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/charts",
        destination: "/charts/area",
        permanent: true,
      },
      {
        source: "/view/styles/:style/:name",
        destination: "/view/:name",
        permanent: true,
      },
      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },
    ]
  },
  rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*",
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
