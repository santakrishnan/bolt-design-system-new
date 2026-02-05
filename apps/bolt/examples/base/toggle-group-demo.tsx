import { ToggleGroup, ToggleGroupItem } from "@/examples/base/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup multiple variant="outline">
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle strikethrough" value="strikethrough">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
