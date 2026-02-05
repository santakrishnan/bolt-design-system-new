"use client"

import * as React from "react"
import { Calendar } from "@/examples/base/ui/calendar"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <Calendar
      className="rounded-lg border"
      defaultMonth={dateRange?.from}
      mode="range"
      numberOfMonths={2}
      onSelect={setDateRange}
      selected={dateRange}
    />
  )
}
