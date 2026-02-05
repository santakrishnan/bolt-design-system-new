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
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

export function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  })

  return (
    <Field className="mx-auto w-60">
      <FieldLabel htmlFor="date-picker-range">Date Picker Range</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              className="justify-start px-2.5 font-normal"
              id="date-picker-range"
              variant="outline"
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            defaultMonth={date?.from}
            mode="range"
            numberOfMonths={2}
            onSelect={setDate}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
