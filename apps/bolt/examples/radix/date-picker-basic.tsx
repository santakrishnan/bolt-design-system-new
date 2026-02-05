"use client"

import { format } from "date-fns"
import * as React from "react"
import { Button } from "@/examples/radix/ui/button"
import { Calendar } from "@/examples/radix/ui/calendar"
import { Field, FieldLabel } from "@/examples/radix/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/radix/ui/popover"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="justify-start font-normal"
            id="date-picker-simple"
            variant="outline"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
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
    </Field>
  )
}
