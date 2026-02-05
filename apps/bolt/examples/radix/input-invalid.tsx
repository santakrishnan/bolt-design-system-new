import { Field, FieldDescription, FieldLabel } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"

export function InputInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input aria-invalid id="input-invalid" placeholder="Error" />
      <FieldDescription>
        This field contains validation errors.
      </FieldDescription>
    </Field>
  )
}
