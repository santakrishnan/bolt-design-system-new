"use client"

import { Monitor, Smartphone, Tablet } from "lucide-react"
import { useDesignSystemSearchParams } from "@/app/(create)/lib/search-params"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

export function PreviewControls() {
  const [params, setParams] = useDesignSystemSearchParams({
    history: "replace",
  })

  return (
    <div className="flex h-8 items-center gap-1.5 rounded-md border p-1">
      <ToggleGroup
        className="*:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm gap-1"
        onValueChange={(newValue) => {
          if (newValue) {
            setParams({ size: Number.parseInt(newValue) })
          }
        }}
        type="single"
        value={params.size.toString()}
      >
        <ToggleGroupItem title="Desktop" value="100">
          <Monitor />
        </ToggleGroupItem>
        <ToggleGroupItem title="Tablet" value="60">
          <Tablet />
        </ToggleGroupItem>
        <ToggleGroupItem title="Mobile" value="30">
          <Smartphone />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
