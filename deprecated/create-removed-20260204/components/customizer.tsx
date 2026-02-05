"use client"

import { Settings05Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import * as React from "react"
import { MenuAccentPicker } from "@/app/(create)/components/accent-picker"
import { BaseColorPicker } from "@/app/(create)/components/base-color-picker"
import { BasePicker } from "@/app/(create)/components/base-picker"
import { FontPicker } from "@/app/(create)/components/font-picker"
import { IconLibraryPicker } from "@/app/(create)/components/icon-library-picker"
import { MenuColorPicker } from "@/app/(create)/components/menu-picker"
import { PresetPicker } from "@/app/(create)/components/preset-picker"
import { RadiusPicker } from "@/app/(create)/components/radius-picker"
import { RandomButton } from "@/app/(create)/components/random-button"
import { ResetButton } from "@/app/(create)/components/reset-button"
import { StylePicker } from "@/app/(create)/components/style-picker"
import { ThemePicker } from "@/app/(create)/components/theme-picker"
import { FONTS } from "@/app/(create)/lib/fonts"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import { useIsMobile } from "@/hooks/use-mobile"
import { getThemesForBaseColor, PRESETS, STYLES } from "@/registry/config"
import { FieldGroup } from "@/registry/new-york-v4/ui/field"

export function Customizer() {
  const [params] = useDesignSystemSearchParams()
  const isMobile = useIsMobile()
  const anchorRef = React.useRef<HTMLDivElement | null>(null)

  const availableThemes = React.useMemo(
    () => getThemesForBaseColor(params.baseColor),
    [params.baseColor]
  )

  return (
    <div
      className="no-scrollbar -mx-2.5 flex flex-col overflow-y-auto p-1 md:mx-0 md:h-[calc(100svh-var(--header-height)-2rem)] md:w-48 md:gap-0 md:py-0"
      ref={anchorRef}
    >
      <div className="hidden items-center gap-2 px-[calc(--spacing(2.5))] pb-1 md:flex md:flex-col md:items-start">
        <HugeiconsIcon
          className="size-4"
          icon={Settings05Icon}
          strokeWidth={2}
        />
        <div className="relative flex flex-col gap-1 rounded-lg text-[13px]/snug">
          <div className="flex items-center gap-1 text-balance font-medium">
            Build your own shadcn/ui
          </div>
          <div className="hidden md:flex">
            When you&apos;re done, click Create Project to start a new project.
          </div>
        </div>
      </div>
      <div className="no-scrollbar h-14 overflow-x-auto overflow-y-hidden p-px md:h-full md:overflow-y-auto md:overflow-x-hidden">
        <FieldGroup className="flex h-full flex-1 flex-row gap-2 md:flex-col md:gap-0">
          <PresetPicker
            anchorRef={anchorRef}
            isMobile={isMobile}
            presets={PRESETS}
          />
          <BasePicker anchorRef={anchorRef} isMobile={isMobile} />
          <StylePicker
            anchorRef={anchorRef}
            isMobile={isMobile}
            styles={STYLES}
          />
          <BaseColorPicker anchorRef={anchorRef} isMobile={isMobile} />
          <ThemePicker
            anchorRef={anchorRef}
            isMobile={isMobile}
            themes={availableThemes}
          />
          <IconLibraryPicker anchorRef={anchorRef} isMobile={isMobile} />
          <FontPicker anchorRef={anchorRef} fonts={FONTS} isMobile={isMobile} />
          <RadiusPicker anchorRef={anchorRef} isMobile={isMobile} />
          <MenuColorPicker anchorRef={anchorRef} isMobile={isMobile} />
          <MenuAccentPicker anchorRef={anchorRef} isMobile={isMobile} />
          <div className="mt-auto hidden w-full flex-col items-center gap-0 md:flex">
            <RandomButton />
            <ResetButton />
          </div>
        </FieldGroup>
      </div>
    </div>
  )
}
