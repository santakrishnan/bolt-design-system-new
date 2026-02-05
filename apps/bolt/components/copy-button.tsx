"use client"

import { IconCheck, IconCopy } from "@tabler/icons-react"
import * as React from "react"

import { type Event, trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

export function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value)
  if (event) {
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  event,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string
  src?: string
  event?: Event["name"]
  tooltip?: string
}) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  return (
    <Button
      className={cn(
        "absolute top-3 right-2 z-10 size-7 bg-code hover:opacity-100 focus-visible:opacity-100",
        className
      )}
      data-copied={hasCopied}
      data-slot="copy-button"
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        )
        setHasCopied(true)
      }}
      size="icon"
      variant={variant}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <IconCheck /> : <IconCopy />}
    </Button>
  )
}
