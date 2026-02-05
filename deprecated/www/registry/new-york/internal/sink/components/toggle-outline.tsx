import { Italic } from "lucide-react"

import { Toggle } from "@/registry/new-york/ui/toggle"

export function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <Italic />
    </Toggle>
  )
}
