import { Italic } from "lucide-react"

import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleSm() {
  return (
    <Toggle aria-label="Toggle italic" size="sm">
      <Italic />
    </Toggle>
  )
}
