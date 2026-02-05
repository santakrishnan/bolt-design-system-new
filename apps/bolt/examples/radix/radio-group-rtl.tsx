"use client"

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/examples/radix/ui-rtl/field"
import { RadioGroup, RadioGroupItem } from "@/examples/radix/ui-rtl/radio-group"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      default: "Default",
      defaultDescription: "Standard spacing for most use cases.",
      comfortable: "Comfortable",
      comfortableDescription: "More space between elements.",
      compact: "Compact",
      compactDescription: "Minimal spacing for dense layouts.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      default: "افتراضي",
      defaultDescription: "تباعد قياسي لمعظم حالات الاستخدام.",
      comfortable: "مريح",
      comfortableDescription: "مساحة أكبر بين العناصر.",
      compact: "مضغوط",
      compactDescription: "تباعد أدنى للتخطيطات الكثيفة.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      default: "ברירת מחדל",
      defaultDescription: "ריווח סטנדרטי לרוב מקרי השימוש.",
      comfortable: "נוח",
      comfortableDescription: "יותר מקום בין האלמנטים.",
      compact: "קומפקטי",
      compactDescription: "ריווח מינימלי לפריסות צפופות.",
    },
  },
}

export function RadioGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <RadioGroup className="w-fit" defaultValue="comfortable" dir={dir}>
      <Field orientation="horizontal">
        <RadioGroupItem dir={dir} id="r1-rtl" value="default" />
        <FieldContent>
          <FieldLabel dir={dir} htmlFor="r1-rtl">
            {t.default}
          </FieldLabel>
          <FieldDescription dir={dir}>{t.defaultDescription}</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem dir={dir} id="r2-rtl" value="comfortable" />
        <FieldContent>
          <FieldLabel dir={dir} htmlFor="r2-rtl">
            {t.comfortable}
          </FieldLabel>
          <FieldDescription dir={dir}>
            {t.comfortableDescription}
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem dir={dir} id="r3-rtl" value="compact" />
        <FieldContent>
          <FieldLabel dir={dir} htmlFor="r3-rtl">
            {t.compact}
          </FieldLabel>
          <FieldDescription dir={dir}>{t.compactDescription}</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}
