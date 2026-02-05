"use client"

import * as React from "react"
import { Button } from "@/examples/base/ui/button"
import { Calendar } from "@/examples/base/ui/calendar"
import { Field, FieldLabel } from "@/examples/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/base/ui/popover"
import { format } from "date-fns"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              className="justify-start font-normal"
              id="date-picker-simple"
              variant="outline"
            />
          }
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
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
