"use client"

import * as React from "react"
import {
  Picker,
  PickerContent,
  PickerGroup,
  PickerRadioGroup,
  PickerRadioItem,
  PickerTrigger,
} from "@/app/(create)/components/picker"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import { BASES } from "@/registry/config"

export function BasePicker({
  isMobile,
  anchorRef,
}: {
  isMobile: boolean
  anchorRef: React.RefObject<HTMLDivElement | null>
}) {
  const [params, setParams] = useDesignSystemSearchParams()

  const currentBase = React.useMemo(
    () => BASES.find((base) => base.name === params.base),
    [params.base]
  )

  const handleValueChange = React.useCallback(
    (value: string) => {
      const newBase = BASES.find((base) => base.name === value)
      if (!newBase) {
        return
      }

      setParams({ base: newBase.name })
    },
    [setParams]
  )

  return (
    <Picker>
      <PickerTrigger>
        <div className="flex flex-col justify-start text-left">
          <div className="text-muted-foreground text-xs">Component Library</div>
          <div className="font-medium text-foreground text-sm">
            {currentBase?.title}
          </div>
        </div>
        {currentBase?.meta?.logo && (
          <div
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 select-none text-foreground *:[svg]:size-4 *:[svg]:text-foreground!"
            dangerouslySetInnerHTML={{
              __html: currentBase.meta.logo,
            }}
          />
        )}
      </PickerTrigger>
      <PickerContent
        align={isMobile ? "center" : "start"}
        anchor={isMobile ? anchorRef : undefined}
        side={isMobile ? "top" : "right"}
      >
        <PickerRadioGroup
          onValueChange={handleValueChange}
          value={currentBase?.name}
        >
          <PickerGroup>
            {BASES.map((base) => (
              <PickerRadioItem key={base.name} value={base.name}>
                {base.meta?.logo && (
                  <div
                    className="size-4 shrink-0 text-foreground [&_svg]:size-4 *:[svg]:text-foreground!"
                    dangerouslySetInnerHTML={{
                      __html: base.meta.logo,
                    }}
                  />
                )}
                {base.title}
              </PickerRadioItem>
            ))}
          </PickerGroup>
        </PickerRadioGroup>
      </PickerContent>
    </Picker>
  )
}
