import { Copy } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

export function PresetShare() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Share</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="flex w-[520px] flex-col gap-4">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-semibold text-lg">Share preset</h3>
          <p className="text-muted-foreground text-sm">
            Anyone who has this link and an OpenAI account will be able to view
            this.
          </p>
        </div>
        <div className="relative flex-1">
          <Label className="sr-only" htmlFor="link">
            Link
          </Label>
          <Input
            className="h-9 pr-10"
            defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003"
            id="link"
            readOnly
          />
          <Button
            className="absolute top-1 right-1 size-7"
            size="icon"
            type="submit"
            variant="ghost"
          >
            <span className="sr-only">Copy</span>
            <Copy className="size-3.5" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
