"use client"

import { useThemeConfig } from "@/components/active-theme"
import { Label } from "@/examples/base/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/examples/base/ui/select"
import { THEMES } from "@/lib/themes"
import { cn } from "@/lib/utils"

import { CopyCodeButton } from "./theme-customizer"

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  const value = activeTheme === "default" ? "neutral" : activeTheme

  const items = THEMES.map((theme) => ({
    label: theme.label,
    value: theme.name,
  }))

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Label className="sr-only" htmlFor="theme-selector">
        Theme
      </Label>
      <Select
        items={items}
        onValueChange={(value) => value && setActiveTheme(value)}
        value={value}
      >
        <SelectTrigger className="w-36" id="theme-selector">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            {items.map((item) => (
              <SelectItem
                className="data-[state=checked]:opacity-50"
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <CopyCodeButton
        className="rounded-lg border bg-transparent"
        size="icon-sm"
        variant="secondary"
      />
    </div>
  )
}
