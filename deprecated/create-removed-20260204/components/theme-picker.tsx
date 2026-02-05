"use client"

import { useTheme } from "next-themes"
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
import { useMounted } from "@/hooks/use-mounted"
import { BASE_COLORS, type Theme, type ThemeName } from "@/registry/config"

export function ThemePicker({
  themes,
  isMobile,
  anchorRef,
}: {
  themes: readonly Theme[]
  isMobile: boolean
  anchorRef: React.RefObject<HTMLDivElement | null>
}) {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const [params, setParams] = useDesignSystemSearchParams()

  const currentTheme = React.useMemo(
    () => themes.find((theme) => theme.name === params.theme),
    [themes, params.theme]
  )

  const currentThemeIsBaseColor = React.useMemo(
    () => BASE_COLORS.find((baseColor) => baseColor.name === params.theme),
    [params.theme]
  )

  React.useEffect(() => {
    if (!currentTheme && themes.length > 0) {
      setParams({ theme: themes[0].name })
    }
  }, [currentTheme, themes, setParams])

  return (
    <div className="group/picker relative">
      <Picker>
        <PickerTrigger>
          <div className="flex flex-col justify-start text-left">
            <div className="text-muted-foreground text-xs">Theme</div>
            <div className="font-medium text-foreground text-sm">
              {currentTheme?.title}
            </div>
          </div>
          {mounted && resolvedTheme && (
            <div
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 select-none rounded-full bg-(--color)"
              style={
                {
                  "--color":
                    currentTheme?.cssVars?.[
                      resolvedTheme as "light" | "dark"
                    ]?.[
                      currentThemeIsBaseColor ? "muted-foreground" : "primary"
                    ],
                } as React.CSSProperties
              }
            />
          )}
        </PickerTrigger>
        <PickerContent
          align={isMobile ? "center" : "start"}
          anchor={isMobile ? anchorRef : undefined}
          className="max-h-[23rem]"
          side={isMobile ? "top" : "right"}
        >
          <PickerRadioGroup
            onValueChange={(value) => {
              setParams({ theme: value as ThemeName })
            }}
            value={currentTheme?.name}
          >
            <PickerGroup>
              {themes
                .filter((theme) =>
                  BASE_COLORS.find((baseColor) => baseColor.name === theme.name)
                )
                .map((theme) => {
                  const isBaseColor = BASE_COLORS.find(
                    (baseColor) => baseColor.name === theme.name
                  )
                  return (
                    <PickerRadioItem key={theme.name} value={theme.name}>
                      <div className="flex items-start gap-2">
                        {mounted && resolvedTheme && (
                          <div
                            className="size-4 translate-y-1 rounded-full bg-(--color)"
                            style={
                              {
                                "--color":
                                  theme.cssVars?.[
                                    resolvedTheme as "light" | "dark"
                                  ]?.[
                                    isBaseColor ? "muted-foreground" : "primary"
                                  ],
                              } as React.CSSProperties
                            }
                          />
                        )}
                        <div className="flex flex-col justify-start pointer-coarse:gap-1">
                          <div>{theme.title}</div>
                          <div className="pointer-coarse:text-sm text-muted-foreground text-xs">
                            Match base color
                          </div>
                        </div>
                      </div>
                    </PickerRadioItem>
                  )
                })}
            </PickerGroup>
            <PickerSeparator />
            <PickerGroup>
              {themes
                .filter(
                  (theme) =>
                    !BASE_COLORS.find(
                      (baseColor) => baseColor.name === theme.name
                    )
                )
                .map((theme) => {
                  return (
                    <PickerRadioItem key={theme.name} value={theme.name}>
                      <div className="flex items-center gap-2">
                        {mounted && resolvedTheme && (
                          <div
                            className="size-4 rounded-full bg-(--color)"
                            style={
                              {
                                "--color":
                                  theme.cssVars?.[
                                    resolvedTheme as "light" | "dark"
                                  ]?.["primary"],
                              } as React.CSSProperties
                            }
                          />
                        )}
                        {theme.title}
                      </div>
                    </PickerRadioItem>
                  )
                })}
            </PickerGroup>
          </PickerRadioGroup>
        </PickerContent>
      </Picker>
      <LockButton
        className="absolute top-1/2 right-10 -translate-y-1/2"
        param="theme"
      />
    </div>
  )
}
