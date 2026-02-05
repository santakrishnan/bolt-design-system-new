import { Italic } from "lucide-react"

import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleLg() {
  return (
    <Toggle aria-label="Toggle italic" size="lg">
      <Italic />
    </Toggle>
  )
}
