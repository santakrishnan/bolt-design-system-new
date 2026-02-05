"use client"

import { IconMinus, IconPlus } from "@tabler/icons-react"
import * as React from "react"
import { Button } from "@/examples/radix/ui/button"
import { ButtonGroup } from "@/examples/radix/ui/button-group"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"
import { RadioGroup, RadioGroupItem } from "@/examples/radix/ui/radio-group"
import { Switch } from "@/examples/radix/ui/switch"

export function AppearanceSettings() {
  const [gpuCount, setGpuCount] = React.useState(8)

  const handleGpuAdjustment = React.useCallback((adjustment: number) => {
    setGpuCount((prevCount) =>
      Math.max(1, Math.min(99, prevCount + adjustment))
    )
  }, [])

  const handleGpuInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseInt(e.target.value, 10)
      if (!isNaN(value) && value >= 1 && value <= 99) {
        setGpuCount(value)
      }
    },
    []
  )

  return (
    <FieldSet>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Compute Environment</FieldLegend>
          <FieldDescription>
            Select the compute environment for your cluster.
          </FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    Run GPU workloads on a K8s configured cluster. This is the
                    default.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem
                  aria-label="Kubernetes"
                  id="kubernetes-r2h"
                  value="kubernetes"
                />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>
                    Access a VM configured cluster to run workloads. (Coming
                    soon)
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem
                  aria-label="Virtual Machine"
                  id="vm-z4k"
                  value="vm"
                />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="number-of-gpus-f6l">Number of GPUs</FieldLabel>
            <FieldDescription>You can add more later.</FieldDescription>
          </FieldContent>
          <ButtonGroup>
            <Input
              className="!w-14 h-7 font-mono"
              id="number-of-gpus-f6l"
              maxLength={3}
              onChange={handleGpuInputChange}
              size={3}
              value={gpuCount}
            />
            <Button
              aria-label="Decrement"
              disabled={gpuCount <= 1}
              onClick={() => handleGpuAdjustment(-1)}
              size="icon-sm"
              type="button"
              variant="outline"
            >
              <IconMinus />
            </Button>
            <Button
              aria-label="Increment"
              disabled={gpuCount >= 99}
              onClick={() => handleGpuAdjustment(1)}
              size="icon-sm"
              type="button"
              variant="outline"
            >
              <IconPlus />
            </Button>
          </ButtonGroup>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="tinting">Wallpaper Tinting</FieldLabel>
            <FieldDescription>
              Allow the wallpaper to be tinted.
            </FieldDescription>
          </FieldContent>
          <Switch defaultChecked id="tinting" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
