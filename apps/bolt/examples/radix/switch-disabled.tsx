import { Field, FieldLabel } from "@/examples/radix/ui/field"
import { Switch } from "@/examples/radix/ui/switch"

export function SwitchDisabled() {
  return (
    <Field className="w-fit" data-disabled orientation="horizontal">
      <Switch disabled id="switch-disabled-unchecked" />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}
