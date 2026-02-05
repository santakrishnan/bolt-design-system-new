"use client"

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
import { RADII, type RadiusValue } from "@/registry/config"

export function RadiusPicker({
  isMobile,
  anchorRef,
}: {
  isMobile: boolean
  anchorRef: React.RefObject<HTMLDivElement | null>
}) {
  const [params, setParams] = useDesignSystemSearchParams()

  const currentRadius = RADII.find((radius) => radius.name === params.radius)
  const defaultRadius = RADII.find((radius) => radius.name === "default")
  const otherRadii = RADII.filter((radius) => radius.name !== "default")

  return (
    <div className="group/picker relative">
      <Picker>
        <PickerTrigger>
          <div className="flex flex-col justify-start text-left">
            <div className="text-muted-foreground text-xs">Radius</div>
            <div className="font-medium text-foreground text-sm">
              {currentRadius?.label}
            </div>
          </div>
          <div className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 rotate-90 select-none items-center justify-center text-base text-foreground">
            <svg
              className="text-foreground"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20v-5C4 8.925 8.925 4 15 4h5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </PickerTrigger>
        <PickerContent
          align={isMobile ? "center" : "start"}
          anchor={isMobile ? anchorRef : undefined}
          side={isMobile ? "top" : "right"}
        >
          <PickerRadioGroup
            onValueChange={(value) => {
              setParams({ radius: value as RadiusValue })
            }}
            value={currentRadius?.name}
          >
            <PickerGroup>
              {defaultRadius && (
                <PickerRadioItem
                  key={defaultRadius.name}
                  value={defaultRadius.name}
                >
                  <div className="flex flex-col justify-start pointer-coarse:gap-1">
                    <div>{defaultRadius.label}</div>
                    <div className="pointer-coarse:text-sm text-muted-foreground text-xs">
                      Use radius from style
                    </div>
                  </div>
                </PickerRadioItem>
              )}
            </PickerGroup>
            <PickerSeparator />
            <PickerGroup>
              {otherRadii.map((radius) => (
                <PickerRadioItem key={radius.name} value={radius.name}>
                  {radius.label}
                </PickerRadioItem>
              ))}
            </PickerGroup>
          </PickerRadioGroup>
        </PickerContent>
      </Picker>
      <LockButton
        className="absolute top-1/2 right-10 -translate-y-1/2"
        param="radius"
      />
    </div>
  )
}
