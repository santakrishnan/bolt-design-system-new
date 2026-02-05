"use client"

import * as React from "react"
import { Calendar } from "@/examples/radix/ui/calendar"
import { Card, CardContent, CardFooter } from "@/examples/radix/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/examples/radix/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/examples/radix/ui/input-group"
import { Clock2Icon } from "lucide-react"

export function CalendarWithTime() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <Card className="mx-auto w-fit" size="sm">
      <CardContent>
        <Calendar
          className="p-0"
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </CardContent>
      <CardFooter className="bg-card border-t">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                defaultValue="10:30:00"
                id="time-from"
                step="1"
                type="time"
              />
              <InputGroupAddon>
                <Clock2Icon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="time-to">End Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                defaultValue="12:30:00"
                id="time-to"
                step="1"
                type="time"
              />
              <InputGroupAddon>
                <Clock2Icon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}
