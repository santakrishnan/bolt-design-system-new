"use client"

import * as React from "react"
import { Progress } from "@/examples/radix/ui/progress"
import { Slider } from "@/examples/radix/ui/slider"

export function ProgressControlled() {
  const [value, setValue] = React.useState([50])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value[0]} />
      <Slider
        max={100}
        min={0}
        onValueChange={setValue}
        step={1}
        value={value}
      />
    </div>
  )
}
