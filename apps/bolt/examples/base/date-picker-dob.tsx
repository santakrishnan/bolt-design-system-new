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

export function DatePickerSimple() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date">Date of birth</FieldLabel>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger
          render={
            <Button
              className="justify-start font-normal"
              id="date"
              variant="outline"
            />
          }
        >
          {date ? date.toLocaleDateString() : "Select date"}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto overflow-hidden p-0">
          <Calendar
            captionLayout="dropdown"
            defaultMonth={date}
            mode="single"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
