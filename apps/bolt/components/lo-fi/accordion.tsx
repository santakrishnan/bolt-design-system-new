import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { Atom } from "@/components/lo-fi/atom"

export function AccordionLoFi() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <Atom className="h-2 w-1/3" shade="300" />
          <ChevronDownIcon className="size-3" />
        </div>
      </div>
      <div className="flex flex-col gap-1 border-b py-2">
        <div className="flex items-center justify-between">
          <Atom className="h-2 w-1/2" shade="300" />
          <ChevronUpIcon className="size-3" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Atom className="h-2 w-2/3" shade="200" />
          <Atom className="h-2 w-1/3" shade="200" />
        </div>
      </div>
      <div className="flex flex-col gap-1 py-2">
        <div className="flex items-center justify-between">
          <Atom className="h-2 w-2/3" shade="300" />
          <ChevronDownIcon className="size-3" />
        </div>
      </div>
    </div>
  )
}
