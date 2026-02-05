"use client"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import * as React from "react"
import { Button } from "@/examples/radix/ui/button"
import { Calendar } from "@/examples/radix/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/radix/ui/popover"

export function DatePickerTime() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row">
      <Field>
        <FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
        <Popover onOpenChange={setOpen} open={open}>
          <PopoverTrigger asChild>
            <Button
              className="w-32 justify-between font-normal"
              id="date-picker-optional"
              variant="outline"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
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
      <Field className="w-32">
        <FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
        <Input
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          defaultValue="10:30:00"
          id="time-picker-optional"
          step="1"
          type="time"
        />
      </Field>
    </FieldGroup>
  )
}
