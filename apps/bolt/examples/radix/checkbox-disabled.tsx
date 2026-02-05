import { Checkbox } from "@/examples/radix/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/examples/radix/ui/field"

export function CheckboxDisabled() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field data-disabled orientation="horizontal">
        <Checkbox
          disabled
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          Enable notifications
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
