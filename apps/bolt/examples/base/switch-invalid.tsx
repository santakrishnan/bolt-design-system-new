import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/examples/base/ui/field"
import { Switch } from "@/examples/base/ui/switch"

export function SwitchInvalid() {
  return (
    <Field className="max-w-sm" data-invalid orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">
          Accept terms and conditions
        </FieldLabel>
        <FieldDescription>
          You must accept the terms and conditions to continue.
        </FieldDescription>
      </FieldContent>
      <Switch aria-invalid id="switch-terms" />
    </Field>
  )
}
