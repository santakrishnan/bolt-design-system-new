"use client"

import { CheckIcon, ClipboardIcon } from "lucide-react"
import * as React from "react"

import { type Event, trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/registry/new-york/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

export function ChartCopyButton({
  event,
  name,
  code,
  className,
  ...props
}: {
  event: Event["name"]
  name: string
  code: string
} & ButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn(
            "h-7 w-7 rounded-[6px] [&_svg]-h-3.5 [&_svg]:w-3.5",
            className
          )}
          onClick={() => {
            navigator.clipboard.writeText(code)
            trackEvent({
              name: event,
              properties: {
                name,
              },
            })
            setHasCopied(true)
          }}
          size="icon"
          variant="outline"
          {...props}
        >
          <span className="sr-only">Copy</span>
          {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-black text-white">Copy code</TooltipContent>
    </Tooltip>
  )
}
