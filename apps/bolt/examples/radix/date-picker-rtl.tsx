"use client"

import { format } from "date-fns"
import { arSA, he } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"
import * as React from "react"
import {
  arSA as arSADayPicker,
  he as heDayPicker,
} from "react-day-picker/locale"
import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import { Button } from "@/examples/radix/ui-rtl/button"
import { Calendar } from "@/examples/radix/ui-rtl/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/radix/ui-rtl/popover"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      placeholder: "Pick a date",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      placeholder: "اختر تاريخًا",
    },
  },
  he: {
    dir: "rtl",
    values: {
      placeholder: "בחר תאריך",
    },
  },
}

const dayPickerLocales = {
  ar: arSADayPicker,
  he: heDayPicker,
} as const

const dateFnsLocales = {
  ar: arSA,
  he,
} as const

export function DatePickerRtl() {
  const { dir, t, language } = useTranslation(translations, "ar")
  const [date, setDate] = React.useState<Date>()

  const dateFnsLocale =
    dir === "rtl"
      ? dateFnsLocales[language as keyof typeof dateFnsLocales]
      : undefined
  const dayPickerLocale =
    dir === "rtl"
      ? dayPickerLocales[language as keyof typeof dayPickerLocales]
      : undefined

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
          data-empty={!date}
          dir={dir}
          variant="outline"
        >
          {date ? (
            format(date, "PPP", { locale: dateFnsLocale })
          ) : (
            <span>{t.placeholder}</span>
          )}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0" dir={dir}>
        <Calendar
          defaultMonth={date}
          dir={dir}
          locale={dayPickerLocale}
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  )
}
