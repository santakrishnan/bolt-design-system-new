"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { useLanguageContext } from "@/components/language-selector"
import { Button } from "@/examples/base/ui-rtl/button"
import { ButtonGroup } from "@/examples/base/ui-rtl/button-group"

const translations = {
  ar: {
    dir: "rtl" as const,
    locale: "ar-SA",
    previous: "السابق",
    next: "التالي",
  },
  he: {
    dir: "rtl" as const,
    locale: "he-IL",
    previous: "הקודם",
    next: "הבא",
  },
}

function formatNumber(value: number, locale: string) {
  return new Intl.NumberFormat(locale).format(value)
}

export function ButtonGroupNested() {
  const context = useLanguageContext()
  const lang = context?.language === "he" ? "he" : "ar"
  const t = translations[lang]

  return (
    <ButtonGroup dir={t.dir}>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          {formatNumber(1, t.locale)}
        </Button>
        <Button size="sm" variant="outline">
          {formatNumber(2, t.locale)}
        </Button>
        <Button size="sm" variant="outline">
          {formatNumber(3, t.locale)}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label={t.previous} size="icon-sm" variant="outline">
          <ArrowLeftIcon className="rtl:rotate-180" />
        </Button>
        <Button aria-label={t.next} size="icon-sm" variant="outline">
          <ArrowRightIcon className="rtl:rotate-180" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
