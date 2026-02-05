import { Button } from "@/examples/radix/ui/button"
import { Spinner } from "@/examples/radix/ui/spinner"

export default function ButtonSpinner() {
  return (
    <div className="flex gap-2">
      <Button disabled variant="outline">
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
      <Button disabled variant="secondary">
        Downloading
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  )
}
