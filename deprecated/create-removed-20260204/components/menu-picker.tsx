"use client"

import { useTheme } from "next-themes"
import type * as React from "react"
import { LockButton } from "@/app/(create)/components/lock-button"
import {
  Picker,
  PickerContent,
  PickerGroup,
  PickerRadioGroup,
  PickerRadioItem,
  PickerTrigger,
} from "@/app/(create)/components/picker"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import { useMounted } from "@/hooks/use-mounted"
import type { MenuColorValue } from "@/registry/config"

const MENU_OPTIONS = [
  {
    value: "default" as const,
    label: "Default",
    icon: (
      <svg
        className="text-foreground"
        fill="none"
        height="128"
        role="img"
        stroke="currentColor"
        viewBox="0 0 24 24"
        width="128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8.5 11.5L14.5001 11.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.5 15H13.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7.5 8H15.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    value: "inverted" as const,
    label: "Inverted",
    icon: (
      <svg
        className="fill-foreground text-foreground"
        fill="none"
        height="128"
        role="img"
        viewBox="0 0 24 24"
        width="128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8.5 11.5L14.5001 11.5"
          stroke="var(--background)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.5 15H13.5"
          stroke="var(--background)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7.5 8H15.5"
          stroke="var(--background)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
] as const

export function MenuColorPicker({
  isMobile,
  anchorRef,
}: {
  isMobile: boolean
  anchorRef: React.RefObject<HTMLDivElement | null>
}) {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const [params, setParams] = useDesignSystemSearchParams()
  const currentMenu = MENU_OPTIONS.find(
    (menu) => menu.value === params.menuColor
  )

  return (
    <div className="group/picker relative">
      <Picker>
        <PickerTrigger disabled={mounted && resolvedTheme === "dark"}>
          <div className="flex flex-col justify-start text-left">
            <div className="text-muted-foreground text-xs">Menu Color</div>
            <div className="font-medium text-foreground text-sm">
              {currentMenu?.label}
            </div>
          </div>
          <div className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 select-none items-center justify-center text-base text-foreground">
            {currentMenu?.icon}
          </div>
        </PickerTrigger>
        <PickerContent
          align={isMobile ? "center" : "start"}
          anchor={isMobile ? anchorRef : undefined}
          side={isMobile ? "top" : "right"}
        >
          <PickerRadioGroup
            onValueChange={(value) => {
              setParams({ menuColor: value as MenuColorValue })
            }}
            value={currentMenu?.value}
          >
            <PickerGroup>
              {MENU_OPTIONS.map((menu) => (
                <PickerRadioItem key={menu.value} value={menu.value}>
                  {menu.icon}
                  {menu.label}
                </PickerRadioItem>
              ))}
            </PickerGroup>
          </PickerRadioGroup>
        </PickerContent>
      </Picker>
      <LockButton
        className="absolute top-1/2 right-10 -translate-y-1/2"
        param="menuColor"
      />
    </div>
  )
}
