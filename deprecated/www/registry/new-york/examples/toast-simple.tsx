"use client"

import { useToast } from "@/registry/new-york/hooks/use-toast"
import { Button } from "@/registry/new-york/ui/button"

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
      variant="outline"
    >
      Show Toast
    </Button>
  )
}
