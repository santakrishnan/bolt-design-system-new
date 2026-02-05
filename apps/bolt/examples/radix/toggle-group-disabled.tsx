import { ToggleGroup, ToggleGroupItem } from "@/examples/radix/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroupDisabled() {
  return (
    <ToggleGroup disabled type="multiple">
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
