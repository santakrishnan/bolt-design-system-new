import { Field, FieldDescription, FieldLabel } from "@/examples/base/ui/field"
import { Textarea } from "@/examples/base/ui/textarea"

export function TextareaInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea
        aria-invalid
        id="textarea-invalid"
        placeholder="Type your message here."
      />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  )
}
