import { ArrowUpRightIcon } from "lucide-react"
import { Badge } from "@/examples/radix/ui/badge"

export function BadgeAsLink() {
  return (
    <Badge asChild>
      <a href="#link">
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
