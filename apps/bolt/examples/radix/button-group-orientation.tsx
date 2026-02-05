import { Button } from "@/examples/radix/ui/button"
import { ButtonGroup } from "@/examples/radix/ui/button-group"
import { MinusIcon, PlusIcon } from "lucide-react"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      aria-label="Media controls"
      className="h-fit"
      orientation="vertical"
    >
      <Button size="icon" variant="outline">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="outline">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
