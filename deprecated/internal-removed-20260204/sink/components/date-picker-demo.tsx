"use client"

import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import * as React from "react"
import type { DateRange } from "react-day-picker"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Calendar } from "@/registry/new-york-v4/ui/calendar"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

export function DatePickerDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <DatePickerSimple />
      <DataPickerWithDropdowns />
      <DatePickerWithRange />
    </div>
  )
}

function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "min-w-[200px] justify-start px-2 font-normal",
            !date && "text-muted-foreground"
          )}
          variant={"outline"}
        >
          <CalendarIcon className="text-muted-foreground" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </PopoverContent>
    </Popover>
  )
}

function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-fit justify-start px-2 font-normal",
            !date && "text-muted-foreground"
          )}
          id="date"
          variant={"outline"}
        >
          <CalendarIcon className="text-muted-foreground" />
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
        </Button>
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
  )
}

function DataPickerWithDropdowns() {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile(450)

  if (isMobile) {
    return (
      <Drawer onOpenChange={setOpen} open={open}>
        <DrawerTrigger asChild>
          <Button
            className={cn(
              "min-w-[200px] justify-start px-2 font-normal",
              !date && "text-muted-foreground"
            )}
            variant="outline"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto text-muted-foreground" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="sr-only">
            <DrawerTitle>Select a date</DrawerTitle>
            <DrawerDescription>
              Pick a date for your appointment.
            </DrawerDescription>
          </DrawerHeader>
          <Calendar
            mode="single"
            onSelect={(day) => {
              setDate(day)
              setOpen(false)
            }}
            selected={date}
          />
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "min-w-[200px] justify-start px-2 font-normal",
            !date && "text-muted-foreground"
          )}
          variant="outline"
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto text-muted-foreground" />
        </Button>
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
  )
}
