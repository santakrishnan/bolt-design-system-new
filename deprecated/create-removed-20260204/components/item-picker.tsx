"use client"

import { Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Script from "next/script"
import * as React from "react"
import type { RegistryItem } from "shadcn/schema"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import { groupItemsByType } from "@/app/(create)/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/new-york-v4/ui/combobox"

export const CMD_K_FORWARD_TYPE = "cmd-k-forward"

const cachedGroupedItems = React.cache(
  (items: Pick<RegistryItem, "name" | "title" | "type">[]) => {
    return groupItemsByType(items)
  }
)

export function ItemPicker({
  items,
}: {
  items: Pick<RegistryItem, "name" | "title" | "type">[]
}) {
  const [open, setOpen] = React.useState(false)
  const [params, setParams] = useDesignSystemSearchParams()

  const groupedItems = React.useMemo(() => cachedGroupedItems(items), [items])

  const currentItem = React.useMemo(
    () => items.find((item) => item.name === params.item) ?? null,
    [items, params.item]
  )

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "p") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = React.useCallback(
    (item: Pick<RegistryItem, "name" | "title" | "type">) => {
      setParams({ item: item.name })
      setOpen(false)
    },
    [setParams]
  )

  const comboboxValue = React.useMemo(() => {
    return currentItem ?? null
  }, [currentItem])

  return (
    <Combobox
      autoHighlight
      items={groupedItems}
      itemToStringValue={(item) => {
        if (!item) {
          return ""
        }
        // Handle both groups and items.
        if ("items" in item) {
          return item.title ?? ""
        }
        return item.title ?? item.name ?? ""
      }}
      onOpenChange={setOpen}
      onValueChange={(value) => {
        if (value) {
          handleSelect(value)
        }
      }}
      open={open}
      value={comboboxValue}
    >
      <ComboboxTrigger
        render={
          <Button
            aria-label="Select item"
            className="h-[calc(--spacing(13.5))] flex-1 touch-manipulation select-none justify-between gap-2 rounded-xl border-foreground/10 bg-muted/50 pr-4! pl-2.5 text-left shadow-none data-popup-open:bg-muted *:data-[slot=combobox-trigger-icon]:hidden sm:h-8 sm:max-w-56 sm:rounded-lg sm:bg-background sm:pr-2! xl:max-w-64 dark:bg-muted/50 md:dark:bg-background dark:data-popup-open:bg-muted/50"
            size="sm"
            variant="outline"
          />
        }
      >
        <ComboboxValue>
          {(value) => (
            <>
              <div className="flex flex-col justify-start text-left sm:hidden">
                <div className="font-normal text-muted-foreground text-xs">
                  Preview
                </div>
                <div className="font-medium text-foreground text-sm">
                  {value?.title || "Not Found"}
                </div>
              </div>
              <div className="hidden flex-1 text-foreground text-sm sm:flex">
                {value?.title || "Not Found"}
              </div>
            </>
          )}
        </ComboboxValue>
        <HugeiconsIcon icon={Search01Icon} />
      </ComboboxTrigger>
      <ComboboxContent
        align="end"
        className="min-w-[calc(var(--available-width)---spacing(4))] translate-x-2 animate-none rounded-xl border-0 ring-1 ring-foreground/10 data-open:animate-none sm:min-w-[calc(var(--anchor-width)+--spacing(7))] sm:translate-x-0 xl:w-96"
        side="bottom"
      >
        <ComboboxInput
          className="pointer-coarse:hidden h-8 rounded-lg bg-muted shadow-none has-focus-visible:border-inherit! has-focus-visible:ring-0!"
          placeholder="Search"
          showTrigger={false}
        />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList className="no-scrollbar scroll-my-1 pb-1">
          {(group) => (
            <ComboboxGroup items={group.items} key={group.type}>
              <ComboboxLabel>{group.title}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem
                    className="group/combobox-item rounded-lg pointer-coarse:py-2.5 pointer-coarse:pl-3 pointer-coarse:text-base"
                    key={item.name}
                    value={item}
                  >
                    {item.title}
                    <span className="ml-auto text-muted-foreground text-xs opacity-0 group-data-[selected=true]/combobox-item:opacity-100">
                      {group.title}
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
      <div
        className="fixed inset-0 z-50 hidden bg-transparent data-[open=true]:block"
        data-open={open}
        onClick={() => setOpen(false)}
      />
    </Combobox>
  )
}

export function ItemPickerScript() {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
            (function() {
              // Forward Cmd/Ctrl + K and Cmd/Ctrl + P
              document.addEventListener('keydown', function(e) {
                if ((e.key === 'k' || e.key === 'p') && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault();
                  if (window.parent && window.parent !== window) {
                    window.parent.postMessage({
                      type: '${CMD_K_FORWARD_TYPE}',
                      key: e.key
                    }, '*');
                  }
                }
              });

            })();
          `,
      }}
      id="design-system-listener"
      strategy="beforeInteractive"
    />
  )
}
