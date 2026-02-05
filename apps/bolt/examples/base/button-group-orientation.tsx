import { Button } from "@/examples/base/ui/button"
import { ButtonGroup } from "@/examples/base/ui/button-group"
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
