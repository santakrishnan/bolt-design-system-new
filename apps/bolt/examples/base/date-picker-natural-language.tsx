"use client"

import * as React from "react"
import { Calendar } from "@/examples/base/ui/calendar"
import { Field, FieldLabel } from "@/examples/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/examples/base/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/base/ui/popover"
import { parseDate } from "chrono-node"
import { CalendarIcon } from "lucide-react"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function DatePickerNaturalLanguage() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("In 2 days")
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  )

  return (
    <Field className="mx-auto max-w-xs">
      <FieldLabel htmlFor="date-optional">Schedule Date</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date-optional"
          onChange={(e) => {
            setValue(e.target.value)
            const date = parseDate(e.target.value)
            if (date) {
              setDate(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
          placeholder="Tomorrow or next week"
          value={value}
        />
        <InputGroupAddon align="inline-end">
          <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger
              render={
                <InputGroupButton
                  aria-label="Select date"
                  id="date-picker"
                  size="icon-xs"
                  variant="ghost"
                />
              }
            >
              <CalendarIcon />
              <span className="sr-only">Select date</span>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-auto overflow-hidden p-0"
              sideOffset={8}
            >
              <Calendar
                captionLayout="dropdown"
                defaultMonth={date}
                mode="single"
                onSelect={(date) => {
                  setDate(date)
                  setValue(formatDate(date))
                  setOpen(false)
                }}
                selected={date}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      <div className="text-muted-foreground px-1 text-sm">
        Your post will be published on{" "}
        <span className="font-medium">{formatDate(date)}</span>.
      </div>
    </Field>
  )
}
