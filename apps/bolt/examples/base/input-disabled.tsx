import { Field, FieldDescription, FieldLabel } from "@/examples/base/ui/field"
import { Input } from "@/examples/base/ui/input"

export function InputDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
      <Input
        disabled
        id="input-demo-disabled"
        placeholder="Email"
        type="email"
      />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  )
}
