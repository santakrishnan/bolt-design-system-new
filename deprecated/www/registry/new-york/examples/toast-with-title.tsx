"use client"

import { useToast } from "@/registry/new-york/hooks/use-toast"
import { Button } from "@/registry/new-york/ui/button"

export default function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
      variant="outline"
    >
      Show Toast
    </Button>
  )
}
