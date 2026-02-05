import { Button } from "@/examples/base/ui/button"
import { Spinner } from "@/examples/base/ui/spinner"

export default function ButtonLoading() {
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
