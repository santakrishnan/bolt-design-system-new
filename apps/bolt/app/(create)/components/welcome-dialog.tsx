"use client"

import * as React from "react"

import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog"

const STORAGE_KEY = "shadcn-create-welcome-dialog"

export function WelcomeDialog() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setIsOpen(true)
    }
  }, [])

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      localStorage.setItem(STORAGE_KEY, "true")
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogContent
        className="dialog-ring min-w-0 max-w-[23rem] gap-0 overflow-hidden rounded-xl p-0 sm:max-w-sm dark:bg-neutral-900"
        showCloseButton={false}
      >
        <div className="flex aspect-[2/1.2] w-full items-center justify-center rounded-t-xl bg-neutral-950 text-center text-neutral-100 sm:aspect-[2/1]">
          <div className="font-bold font-mono text-2xl">
            <Icons.logo className="size-12" />
          </div>
        </div>
        <DialogHeader className="gap-1 p-4">
          <DialogTitle className="text-left text-base">
            Build your own shadcn/ui
          </DialogTitle>
          <DialogDescription className="text-left text-foreground leading-relaxed">
            Customize everything from the ground up. Pick your component
            library, font, color scheme, and more.
          </DialogDescription>
          <DialogDescription className="mt-2 text-left font-medium text-foreground leading-relaxed">
            Available for Next.js, Vite, TanStack Start, and v0.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="p-4 pt-0">
          <DialogClose asChild>
            <Button className="w-full rounded-lg shadow-none">
              Get Started
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
