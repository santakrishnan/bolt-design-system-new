import { Button } from "@/examples/radix/ui/button"
import { Field } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input placeholder="Search..." type="search" />
      <Button>Search</Button>
    </Field>
  )
}
