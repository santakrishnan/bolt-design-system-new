import { Field, FieldDescription, FieldLabel } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"

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
