"use client"

import { useLanguageContext } from "@/components/language-selector"
import { Checkbox } from "@/examples/base/ui-rtl/checkbox"
import { Field, FieldLabel } from "@/examples/base/ui-rtl/field"

const translations = {
  ar: {
    dir: "rtl" as const,
    terms: "أوافق على الشروط والأحكام",
  },
  he: {
    dir: "rtl" as const,
    terms: "אני מסכים לתנאים וההגבלות",
  },
}

export function FieldCheckbox() {
  const context = useLanguageContext()
  const lang = context?.language === "he" ? "he" : "ar"
  const { dir, terms } = translations[lang]

  return (
    <div dir={dir}>
      <FieldLabel htmlFor="checkbox-demo-rtl">
        <Field orientation="horizontal">
          <Checkbox defaultChecked id="checkbox-demo-rtl" />
          <FieldLabel className="line-clamp-1" htmlFor="checkbox-demo-rtl">
            {terms}
          </FieldLabel>
        </Field>
      </FieldLabel>
    </div>
  )
}
