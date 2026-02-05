"use client"

import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import * as React from "react"

import { docsConfig } from "@/config/docs"
import { useMetaColor } from "@/hooks/use-meta-color"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/registry/new-york/ui/drawer"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { setMetaColor, metaColor } = useMetaColor()

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      setOpen(open)
      setMetaColor(open ? "#09090b" : metaColor)
    },
    [setMetaColor, metaColor]
  )

  return (
    <Drawer onOpenChange={onOpenChange} open={open}>
      <DrawerTrigger asChild>
        <Button
          className="h-8 w-full gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          variant="ghost"
        >
          <svg
            className="!size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 9h16.5m-16.5 6.75h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
          <span className="flex h-8 flex-1 items-center justify-between rounded-md border bg-muted/50 px-2 font-normal text-muted-foreground text-sm shadow-none">
            Search documentation...
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    href={item.href}
                    key={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div className="flex flex-col gap-4 pt-6" key={index}>
                <h4 className="font-medium text-xl">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            className="opacity-80"
                            href={item.href}
                            onOpenChange={setOpen}
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-[#000000] text-xs leading-none no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      className={cn("text-[1.15rem]", className)}
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
