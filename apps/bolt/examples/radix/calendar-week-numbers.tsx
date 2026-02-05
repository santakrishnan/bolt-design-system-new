"use client"

import * as React from "react"
import { Calendar } from "@/examples/radix/ui/calendar"
import { Card, CardContent } from "@/examples/radix/ui/card"

export function CalendarWeekNumbers() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          defaultMonth={date}
          mode="single"
          onSelect={setDate}
          selected={date}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}
