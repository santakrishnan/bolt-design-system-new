import { Field, FieldLabel } from "@/examples/radix/ui/field"
import { Progress } from "@/examples/radix/ui/progress"

export function ProgressWithLabel() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="progress-upload">
        <span>Upload progress</span>
        <span className="ml-auto">66%</span>
      </FieldLabel>
      <Progress id="progress-upload" value={66} />
    </Field>
  )
}
