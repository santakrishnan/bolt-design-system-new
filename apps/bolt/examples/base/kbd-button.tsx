import { Button } from "@/examples/base/ui/button"
import { Kbd } from "@/examples/base/ui/kbd"

export default function KbdButton() {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd className="translate-x-0.5" data-icon="inline-end">
        ⏎
      </Kbd>
    </Button>
  )
}
