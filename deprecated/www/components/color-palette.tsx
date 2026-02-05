import * as React from "react"
import { Color } from "@/components/color"
import {
  ColorFormatSelector,
  ColorFormatSelectorSkeleton,
} from "@/components/color-format-selector"
import type { ColorPalette } from "@/lib/colors"

export function ColorPalette({ colorPalette }: { colorPalette: ColorPalette }) {
  return (
    <div
      className="rounded-lg shadow-sm ring-1 ring-border"
      id={colorPalette.name}
    >
      <div className="flex items-center p-2 pb-0">
        <div className="flex-1 pl-1 font-medium text-sm">
          <h2 className="capitalize">{colorPalette.name}</h2>
        </div>
        <React.Suspense fallback={<ColorFormatSelectorSkeleton />}>
          <ColorFormatSelector
            className="ml-auto"
            color={colorPalette.colors[0]}
          />
        </React.Suspense>
      </div>
      <div className="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2">
        {colorPalette.colors.map((color) => (
          <Color color={color} key={color.hex} />
        ))}
      </div>
    </div>
  )
}
