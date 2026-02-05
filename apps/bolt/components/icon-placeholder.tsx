"use client"

import { SquareIcon } from "lucide-react"

/**
 * Simple icon placeholder component for Bolt Design System
 * Replaces the theme customizer's IconPlaceholder
 */
export function IconPlaceholder(props: React.ComponentProps<"svg">) {
  return <SquareIcon {...props} />
}
