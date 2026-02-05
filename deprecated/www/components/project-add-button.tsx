"use client"

import { Check, PlusCircle } from "lucide-react"
import { useProject } from "@/hooks/use-project"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

export function ProjectAddButton({
  name,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { name: string }) {
  const { addBlock, isAdded } = useProject()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn("rounded-sm", className)}
          onClick={() => {
            addBlock(name)
          }}
          size="sm"
          variant="ghost"
          {...props}
        >
          {isAdded ? <Check /> : <PlusCircle />}
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>Add to Project</TooltipContent>
    </Tooltip>
  )
}
