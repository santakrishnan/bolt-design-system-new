import { Button } from "@/examples/base/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/examples/base/ui/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button size="sm" variant="secondary">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button size="sm" variant="secondary">
        Paste
      </Button>
    </ButtonGroup>
  )
}
