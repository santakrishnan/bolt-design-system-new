"use client"

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import { Slider } from "@/examples/base/ui-rtl/slider"

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

export function SliderRtl() {
  const { dir } = useTranslation(translations, "ar")

  return (
    <Slider
      className="mx-auto w-full max-w-xs"
      defaultValue={[75]}
      dir={dir}
      max={100}
      step={1}
    />
  )
}
