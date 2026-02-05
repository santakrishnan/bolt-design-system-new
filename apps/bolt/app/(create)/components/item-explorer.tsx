"use client"

import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import type { RegistryItem } from "shadcn/schema"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import { groupItemsByType } from "@/app/(create)/lib/utils"
import { cn } from "@/lib/utils"
import type { Base } from "@/registry/bases"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar"

const cachedGroupedItems = React.cache(
  (items: Pick<RegistryItem, "name" | "title" | "type">[]) => {
    return groupItemsByType(items)
  }
)

export function ItemExplorer({
  base,
  items,
}: {
  base: Base["name"]
  items: Pick<RegistryItem, "name" | "title" | "type">[]
}) {
  const [params, setParams] = useDesignSystemSearchParams()

  const groupedItems = React.useMemo(() => cachedGroupedItems(items), [items])

  const currentItem = React.useMemo(
    () => items.find((item) => item.name === params.item) ?? null,
    [items, params.item]
  )

  return (
    <Sidebar
      className="sticky z-30 hidden h-[calc(100svh-var(--header-height)-2rem)] overscroll-none bg-transparent xl:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar -mx-1 overflow-x-hidden">
        {groupedItems.map((group) => (
          <Collapsible
            className="group/collapsible"
            defaultOpen
            key={group.type}
          >
            <SidebarGroup className="px-1 py-0">
              <CollapsibleTrigger className="flex w-full items-center gap-1 py-1.5 font-medium text-[0.8rem] [&[data-state=open]>svg]:rotate-90">
                <ChevronRightIcon className="size-3.5 text-muted-foreground transition-transform" />
                <span>{group.title}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="relative ml-1.5 border-border/50 border-l pl-2">
                    {group.items.map((item, index) => (
                      <SidebarMenuItem className="relative" key={item.name}>
                        <div
                          className={cn(
                            "absolute top-1/2 -left-2 h-px w-2 border-border/50 border-t",
                            index === group.items.length - 1 && "bg-sidebar"
                          )}
                        />
                        {index === group.items.length - 1 && (
                          <div className="absolute top-1/2 -bottom-1 -left-2.5 w-1 bg-sidebar" />
                        )}
                        <SidebarMenuButton
                          className="relative h-[26px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 cursor-pointer overflow-visible border border-transparent font-normal text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:-z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                          data-active={item.name === currentItem?.name}
                          isActive={item.name === currentItem?.name}
                          onClick={() => setParams({ item: item.name })}
                        >
                          {item.title}
                          <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                        </SidebarMenuButton>
                        <Link
                          className="sr-only"
                          href={`/preview/${base}/${item.name}`}
                          prefetch
                          tabIndex={-1}
                        >
                          {item.title}
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
