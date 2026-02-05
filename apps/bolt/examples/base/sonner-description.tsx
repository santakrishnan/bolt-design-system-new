"use client"

import { toast } from "sonner"
import { Button } from "@/examples/base/ui/button"

export function SonnerDescription() {
  return (
    <Button
      className="w-fit"
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
      variant="outline"
    >
      Show Toast
    </Button>
  )
}
