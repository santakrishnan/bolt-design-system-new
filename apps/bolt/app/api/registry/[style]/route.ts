import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { type NextRequest, NextResponse } from "next/server"
import type { Registry } from "shadcn/schema"

/**
 * Dynamic Registry API Route
 *
 * Serves registry JSON dynamically from the file system.
 * Useful for development and when you need server-side processing.
 *
 * Usage:
 *   GET /api/registry/new-york-v4
 *   GET /api/registry/radix-vega
 *
 * For production, consider using static files in public/r/
 * for better performance and CDN caching.
 */
export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ style: string }> }
) => {
  try {
    const { style } = await params

    // Read registry file from public directory
    const registryPath = join(
      process.cwd(),
      "public/r/styles",
      style,
      "registry.json"
    )

    const registryContent = await readFile(registryPath, "utf-8")
    const registry: Registry = JSON.parse(registryContent)

    // Return with cache headers for better performance
    return NextResponse.json(registry, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Registry fetch error:", error)
    return NextResponse.json(
      { error: "Registry not found" },
      { status: 404 }
    )
  }
}

// Enable static generation for known styles
export async function generateStaticParams() {
  return [
    { style: "new-york-v4" },
    { style: "radix-vega" },
    { style: "radix-nova" },
    { style: "radix-maia" },
    { style: "radix-lyra" },
    { style: "radix-mira" },
    { style: "base-vega" },
    { style: "base-nova" },
    { style: "base-maia" },
    { style: "base-lyra" },
    { style: "base-mira" },
  ]
}
