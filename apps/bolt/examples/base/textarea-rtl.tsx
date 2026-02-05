"use client"

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/examples/base/ui-rtl/field"
import { Textarea } from "@/examples/base/ui-rtl/textarea"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      label: "Feedback",
      placeholder: "Your feedback helps us improve...",
      description: "Share your thoughts about our service.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      label: "التعليقات",
      placeholder: "تعليقاتك تساعدنا على التحسين...",
      description: "شاركنا أفكارك حول خدمتنا.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "משוב",
      placeholder: "המשוב שלך עוזר לנו להשתפר...",
      description: "שתף את מחשבותיך על השירות שלנו.",
    },
  },
}

export default function TextareaRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <Field className="w-full max-w-xs" dir={dir}>
      <FieldLabel dir={dir} htmlFor="feedback">
        {t.label}
      </FieldLabel>
      <Textarea dir={dir} id="feedback" placeholder={t.placeholder} rows={4} />
      <FieldDescription dir={dir}>{t.description}</FieldDescription>
    </Field>
  )
}
