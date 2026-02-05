"use client"

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/examples/radix/ui-rtl/toggle-group"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      list: "List",
      grid: "Grid",
      cards: "Cards",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      list: "قائمة",
      grid: "شبكة",
      cards: "بطاقات",
    },
  },
  he: {
    dir: "rtl",
    values: {
      list: "רשימה",
      grid: "רשת",
      cards: "כרטיסים",
    },
  },
}

export function ToggleGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <ToggleGroup defaultValue="list" type="single" variant="outline">
      <ToggleGroupItem aria-label={t.list} value="list">
        {t.list}
      </ToggleGroupItem>
      <ToggleGroupItem aria-label={t.grid} value="grid">
        {t.grid}
      </ToggleGroupItem>
      <ToggleGroupItem aria-label={t.cards} value="cards">
        {t.cards}
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
