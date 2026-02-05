import { Button } from "@/examples/radix/ui/button"
import { Kbd } from "@/examples/radix/ui/kbd"

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
