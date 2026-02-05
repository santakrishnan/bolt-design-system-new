import { CircleAlertIcon } from "lucide-react"

import { Atom } from "@/components/lo-fi/atom"

export function AlertLoFi() {
  return (
    <Atom
      className="rounder-lg flex items-start justify-between gap-2 border p-2"
      shade="100"
    >
      <CircleAlertIcon className="size-3" />
      <div className="flex flex-1 flex-col gap-1">
        <Atom className="h-2 w-2/3" shade="300" />
        <Atom className="h-2 w-full" shade="200" />
      </div>
    </Atom>
  )
}
