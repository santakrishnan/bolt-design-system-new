"use client"

import { Undo02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import * as React from "react"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import { DEFAULT_CONFIG } from "@/registry/config"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog"
import { Button } from "@/registry/new-york-v4/ui/button"

export function ResetButton() {
  const [params, setParams] = useDesignSystemSearchParams()

  const handleReset = React.useCallback(() => {
    setParams({
      base: params.base, // Keep the current base value.
      style: DEFAULT_CONFIG.style,
      baseColor: DEFAULT_CONFIG.baseColor,
      theme: DEFAULT_CONFIG.theme,
      iconLibrary: DEFAULT_CONFIG.iconLibrary,
      font: DEFAULT_CONFIG.font,
      menuAccent: DEFAULT_CONFIG.menuAccent,
      menuColor: DEFAULT_CONFIG.menuColor,
      radius: DEFAULT_CONFIG.radius,
      template: DEFAULT_CONFIG.template,
      item: "preview",
    })
  }, [setParams, params.base])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="hidden h-[calc(--spacing(13.5))] w-[140px] touch-manipulation select-none justify-between rounded-xl border border-foreground/10 bg-muted/50 focus-visible:border-transparent focus-visible:ring-1 sm:rounded-lg md:flex md:w-full md:rounded-lg md:border-transparent md:bg-transparent md:pr-3.5! md:pl-2!"
          size="sm"
          variant="ghost"
        >
          <div className="flex flex-col justify-start text-left">
            <div className="text-muted-foreground text-xs">Reset</div>
            <div className="font-medium text-foreground text-sm">
              Start Over
            </div>
          </div>
          <HugeiconsIcon className="-translate-x-0.5" icon={Undo02Icon} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dialog-ring p-4 sm:max-w-sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Reset to defaults?</AlertDialogTitle>
          <AlertDialogDescription>
            This will reset all customization options to their default values.
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-lg">Cancel</AlertDialogCancel>
          <AlertDialogAction className="rounded-lg" onClick={handleReset}>
            Reset
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
