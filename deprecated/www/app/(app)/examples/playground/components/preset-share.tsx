import { Copy } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

export function PresetShare() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Share</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[520px]">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h3 className="font-semibold text-lg">Share preset</h3>
          <p className="text-muted-foreground text-sm">
            Anyone who has this link and an OpenAI account will be able to view
            this.
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <div className="grid flex-1 gap-2">
            <Label className="sr-only" htmlFor="link">
              Link
            </Label>
            <Input
              className="h-9"
              defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003"
              id="link"
              readOnly
            />
          </div>
          <Button className="px-3" size="sm" type="submit">
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
