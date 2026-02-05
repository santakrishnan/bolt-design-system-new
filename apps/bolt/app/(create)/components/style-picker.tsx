"use client"

import * as React from "react"
import { LockButton } from "@/app/(create)/components/lock-button"
import {
  Picker,
  PickerContent,
  PickerGroup,
  PickerRadioGroup,
  PickerRadioItem,
  PickerSeparator,
  PickerTrigger,
} from "@/app/(create)/components/picker"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import type { Style, StyleName } from "@/registry/config"

export function StylePicker({
  styles,
  isMobile,
  anchorRef,
}: {
  styles: readonly Style[]
  isMobile: boolean
  anchorRef: React.RefObject<HTMLDivElement | null>
}) {
  const [params, setParams] = useDesignSystemSearchParams()

  const currentStyle = styles.find((style) => style.name === params.style)

  return (
    <div className="group/picker relative">
      <Picker>
        <PickerTrigger>
          <div className="flex flex-col justify-start text-left">
            <div className="text-muted-foreground text-xs">Style</div>
            <div className="font-medium text-foreground text-sm">
              {currentStyle?.title}
            </div>
          </div>
          {currentStyle?.icon && (
            <div className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 select-none items-center justify-center">
              {React.cloneElement(currentStyle.icon, {
                className: "size-4",
              })}
            </div>
          )}
        </PickerTrigger>
        <PickerContent
          align={isMobile ? "center" : "start"}
          anchor={isMobile ? anchorRef : undefined}
          className="md:w-64"
          side={isMobile ? "top" : "right"}
        >
          <PickerRadioGroup
            onValueChange={(value) => {
              setParams({ style: value as StyleName })
            }}
            value={currentStyle?.name}
          >
            <PickerGroup>
              {styles.map((style, index) => (
                <React.Fragment key={style.name}>
                  <PickerRadioItem value={style.name}>
                    <div className="flex items-start gap-2">
                      {style.icon && (
                        <div className="flex size-4 translate-y-0.5 items-center justify-center">
                          {React.cloneElement(style.icon, {
                            className: "size-4",
                          })}
                        </div>
                      )}
                      <div className="flex flex-col justify-start pointer-coarse:gap-1">
                        <div>{style.title}</div>
                        <div className="pointer-coarse:text-sm text-muted-foreground text-xs">
                          {style.description}
                        </div>
                      </div>
                    </div>
                  </PickerRadioItem>
                  {index < styles.length - 1 && (
                    <PickerSeparator className="opacity-50" />
                  )}
                </React.Fragment>
              ))}
            </PickerGroup>
          </PickerRadioGroup>
        </PickerContent>
      </Picker>
      <LockButton
        className="absolute top-1/2 right-10 -translate-y-1/2"
        param="style"
      />
    </div>
  )
}
