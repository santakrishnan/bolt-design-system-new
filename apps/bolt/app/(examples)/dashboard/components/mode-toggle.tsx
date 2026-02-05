"use client"

import { IconBrightness } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/registry/new-york-v4/ui/button"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <Button
      className="group/toggle size-8"
      onClick={toggleTheme}
      size="icon"
      variant="secondary"
    >
      <IconBrightness />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
