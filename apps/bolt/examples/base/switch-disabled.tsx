import { Field, FieldLabel } from "@/examples/base/ui/field"
import { Switch } from "@/examples/base/ui/switch"

export function SwitchDisabled() {
  return (
    <Field className="w-fit" data-disabled orientation="horizontal">
      <Switch disabled id="switch-disabled-unchecked" />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}
