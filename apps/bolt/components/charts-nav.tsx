"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"

const links = [
  {
    name: "Area Charts",
    href: "/charts/area#charts",
  },
  {
    name: "Bar Charts",
    href: "/charts/bar#charts",
  },
  {
    name: "Line Charts",
    href: "/charts/line#charts",
  },
  {
    name: "Pie Charts",
    href: "/charts/pie#charts",
  },
  {
    name: "Radar Charts",
    href: "/charts/radar#charts",
  },
  {
    name: "Radial Charts",
    href: "/charts/radial#charts",
  },
  {
    name: "Tooltips",
    href: "/charts/tooltip#charts",
  },
]

export function ChartsNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname()

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          {links.map((link) => (
            <Link
              className={cn(
                "flex h-7 shrink-0 items-center justify-center px-4 text-center font-medium text-base text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
              )}
              data-active={link.href.startsWith(pathname)}
              href={link.href}
              key={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ScrollBar className="invisible" orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
