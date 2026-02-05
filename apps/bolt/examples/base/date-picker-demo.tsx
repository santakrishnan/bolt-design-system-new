"use client"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import * as React from "react"
import { Button } from "@/examples/base/ui/button"
import { Calendar } from "@/examples/base/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/base/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
            data-empty={!date}
            variant={"outline"}
          />
        }
      >
        {date ? format(date, "PPP") : <span>Pick a date</span>}
        <ChevronDownIcon data-icon="inline-end" />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          defaultMonth={date}
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  )
}
