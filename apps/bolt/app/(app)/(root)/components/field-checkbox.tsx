import { Checkbox } from "@/examples/radix/ui/checkbox"
import { Field, FieldLabel } from "@/examples/radix/ui/field"

export function FieldCheckbox() {
  return (
    <FieldLabel htmlFor="checkbox-demo">
      <Field orientation="horizontal">
        <Checkbox defaultChecked id="checkbox-demo" />
        <FieldLabel className="line-clamp-1" htmlFor="checkbox-demo">
          I agree to the terms and conditions
        </FieldLabel>
      </Field>
    </FieldLabel>
  )
}
