import { Field, FieldLabel } from "@/examples/base/ui/field"
import { Textarea } from "@/examples/base/ui/textarea"

export function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        disabled
        id="textarea-disabled"
        placeholder="Type your message here."
      />
    </Field>
  )
}
