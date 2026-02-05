"use client"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import * as React from "react"
import { Button } from "@/examples/base/ui/button"
import { Calendar } from "@/examples/base/ui/calendar"
import { Field, FieldLabel } from "@/examples/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/base/ui/popover"

export function DataPickerWithDropdowns() {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)

  return (
    <Field className="mx-auto w-72">
      <Popover onOpenChange={setOpen} open={open}>
        <FieldLabel htmlFor="date-picker-with-dropdowns-desktop">
          Date
        </FieldLabel>
        <PopoverTrigger
          render={
            <Button
              className="justify-start px-2.5 font-normal"
              id="date-picker-with-dropdowns-desktop"
              variant="outline"
            />
          }
        >
          <ChevronDownIcon className="ml-auto" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            captionLayout="dropdown"
            mode="single"
            onSelect={setDate}
            selected={date}
          />
          <div className="flex gap-2 border-t p-2">
            <Button
              className="w-full"
              onClick={() => setOpen(false)}
              size="sm"
              variant="outline"
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Field>
  )
}
