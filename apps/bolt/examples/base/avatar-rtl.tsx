"use client"

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/examples/base/ui-rtl/avatar"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      moreUsers: "+3",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      moreUsers: "+٣",
    },
  },
  he: {
    dir: "rtl",
    values: {
      moreUsers: "+3",
    },
  },
}

export function AvatarRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div
      className="flex flex-row flex-wrap items-center gap-6 md:gap-12"
      dir={dir}
    >
      <Avatar>
        <AvatarImage
          alt="@shadcn"
          className="grayscale"
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          alt="@evilrabbit"
          src="https://github.com/evilrabbit.png"
        />
        <AvatarFallback>ER</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@maxleiter"
            src="https://github.com/maxleiter.png"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>{t.moreUsers}</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
