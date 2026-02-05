import { Button } from "@/examples/base/ui/button"
import { ArrowUpIcon } from "lucide-react"

export default function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button className="rounded-full" size="icon" variant="outline">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
