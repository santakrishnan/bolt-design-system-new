"use client"

import { useToast } from "@/registry/new-york/hooks/use-toast"
import { Button } from "@/registry/new-york/ui/button"
import { ToastAction } from "@/registry/new-york/ui/toast"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
      variant="outline"
    >
      Add to calendar
    </Button>
  )
}
