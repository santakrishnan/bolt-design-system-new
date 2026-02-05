import { Badge } from "@/examples/radix/ui/badge"
import { Field, FieldLabel } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge className="ml-auto" variant="secondary">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        placeholder="https://api.example.com/webhook"
        type="url"
      />
    </Field>
  )
}
