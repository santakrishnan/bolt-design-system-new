import { Field, FieldLabel } from "@/examples/radix/ui/field"
import { Switch } from "@/examples/radix/ui/switch"

export default function FieldSwitch() {
  return (
    <Field className="w-fit" orientation="horizontal">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
