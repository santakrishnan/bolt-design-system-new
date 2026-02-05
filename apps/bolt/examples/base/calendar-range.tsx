"use client"

import { addDays } from "date-fns"
import * as React from "react"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/examples/base/ui/calendar"

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
