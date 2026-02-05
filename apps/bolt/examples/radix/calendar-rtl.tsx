"use client"

import * as React from "react"
import { arSA, he } from "react-day-picker/locale"
import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import { Calendar } from "@/examples/radix/ui-rtl/calendar"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {},
  },
  ar: {
    dir: "rtl",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
}

const locales = {
  ar: arSA,
  he,
} as const

export function CalendarRtl() {
  const { dir, language } = useTranslation(translations, "ar")
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      captionLayout="dropdown"
      className="rounded-lg border [--cell-size:--spacing(9)]"
      dir={dir}
      locale={
        dir === "rtl" ? locales[language as keyof typeof locales] : undefined
      }
      mode="single"
      onSelect={setDate}
      selected={date}
    />
  )
}
