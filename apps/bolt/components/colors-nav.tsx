"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { getColors } from "@/lib/colors"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"

export function ColorsNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname()
  const colors = getColors()

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <ScrollArea className="max-w-full">
        <div className="flex items-center">
          {colors.map((colorPalette, index) => (
            <Link
              className={cn(
                "flex h-7 items-center justify-center px-4 text-center font-medium text-base text-muted-foreground capitalize transition-colors hover:text-primary data-[active=true]:text-primary"
              )}
              data-active={
                pathname?.startsWith(colorPalette.name) ||
                (index === 0 && pathname === "/colors")
              }
              href={`/colors#${colorPalette.name}`}
              key={colorPalette.name}
            >
              {colorPalette.name}
            </Link>
          ))}
        </div>
        <ScrollBar className="invisible" orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
