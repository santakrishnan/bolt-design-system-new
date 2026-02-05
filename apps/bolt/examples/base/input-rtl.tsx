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
import { Input } from "@/examples/base/ui-rtl/input"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      apiKey: "API Key",
      placeholder: "sk-...",
      description: "Your API key is encrypted and stored securely.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      apiKey: "مفتاح API",
      placeholder: "sk-...",
      description: "مفتاح API الخاص بك مشفر ومخزن بأمان.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      apiKey: "מפתח API",
      placeholder: "sk-...",
      description: "מפתח ה-API שלך מוצפן ונשמר בצורה מאובטחת.",
    },
  },
}

export function InputRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <Field dir={dir}>
      <FieldLabel htmlFor="input-rtl-api-key">{t.apiKey}</FieldLabel>
      <Input
        dir={dir}
        id="input-rtl-api-key"
        placeholder={t.placeholder}
        type="password"
      />
      <FieldDescription>{t.description}</FieldDescription>
    </Field>
  )
}
