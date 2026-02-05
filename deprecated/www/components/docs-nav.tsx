"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { SidebarNavItem } from "types/nav"

import type { DocsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"

export function DocsNav({ config }: { config: DocsConfig }) {
  const pathname = usePathname()

  const items = config.sidebarNav

  return items.length ? (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <h4 className="rounded-md px-2 py-1 font-medium text-sm">
            {item.title}{" "}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 font-normal text-[#000000] text-xs leading-none no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </h4>
          {item?.items?.length && (
            <DocsNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

function DocsNavItems({
  items,
  pathname,
}: {
  items: SidebarNavItem[]
  pathname: string | null
}) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            className={cn(
              "group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "bg-accent font-medium text-accent-foreground"
                : "font-normal text-foreground"
            )}
            href={item.href}
            key={index}
            rel={item.external ? "noreferrer" : ""}
            target={item.external ? "_blank" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-[#000000] text-xs leading-none no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
            key={index}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-muted-foreground text-xs leading-none no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}
