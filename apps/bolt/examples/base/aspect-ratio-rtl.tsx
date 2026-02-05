"use client"

import Image from "next/image"
import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import { AspectRatio } from "@/examples/base/ui-rtl/aspect-ratio"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      caption: "Beautiful landscape",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      caption: "منظر طبيعي جميل",
    },
  },
  he: {
    dir: "rtl",
    values: {
      caption: "נוף יפה",
    },
  },
}

export function AspectRatioRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <figure className="w-full max-w-sm" dir={dir}>
      <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
        <Image
          alt="Photo"
          className="rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
      <figcaption className="mt-2 text-center text-muted-foreground text-sm">
        {t.caption}
      </figcaption>
    </figure>
  )
}
