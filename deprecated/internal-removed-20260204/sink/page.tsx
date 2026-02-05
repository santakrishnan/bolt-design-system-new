import type { Metadata } from "next"

import { componentRegistry } from "@/app/(internal)/sink/component-registry"
import { ComponentWrapper } from "@/app/(internal)/sink/components/component-wrapper"

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title: "Kitchen Sink",
  description: "A page with all components for testing purposes.",
}

export default function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      {Object.entries(componentRegistry)
        .filter(([, component]) => {
          return component.type === "registry:ui"
        })
        .map(([key, component]) => {
          const Component = component.component
          return (
            <ComponentWrapper
              className={component.className || ""}
              key={key}
              name={key}
            >
              <Component />
            </ComponentWrapper>
          )
        })}
    </div>
  )
}
