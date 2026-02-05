"use client"

import { useLanguageContext } from "@/components/language-selector"
import { Badge } from "@/examples/base/ui-rtl/badge"
import { Spinner } from "@/examples/base/ui-rtl/spinner"

const translations = {
  ar: {
    dir: "rtl" as const,
    syncing: "جارٍ المزامنة",
    updating: "جارٍ التحديث",
    loading: "جارٍ التحميل",
  },
  he: {
    dir: "rtl" as const,
    syncing: "מסנכרן",
    updating: "מעדכן",
    loading: "טוען",
  },
}

export function SpinnerBadge() {
  const context = useLanguageContext()
  const lang = context?.language === "he" ? "he" : "ar"
  const t = translations[lang]

  return (
    <div className="flex items-center gap-2" dir={t.dir}>
      <Badge>
        <Spinner />
        {t.syncing}
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        {t.updating}
      </Badge>
      <Badge variant="outline">
        <Spinner />
        {t.loading}
      </Badge>
    </div>
  )
}
