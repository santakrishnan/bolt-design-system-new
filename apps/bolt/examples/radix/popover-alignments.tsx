import { Button } from "@/examples/radix/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/radix/ui/popover"

export function PopoverAlignments() {
  return (
    <div className="flex gap-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline">
            Start
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-40">
          Aligned to start
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline">
            Center
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-40">
          Aligned to center
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline">
            End
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-40">
          Aligned to end
        </PopoverContent>
      </Popover>
    </div>
  )
}
