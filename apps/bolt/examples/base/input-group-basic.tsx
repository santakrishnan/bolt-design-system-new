import { Field, FieldGroup, FieldLabel } from "@/examples/base/ui/field"
import { Input } from "@/examples/base/ui/input"
import { InputGroup, InputGroupInput } from "@/examples/base/ui/input-group"

export function InputGroupBasic() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-default-01">
          Default (No Input Group)
        </FieldLabel>
        <Input id="input-default-01" placeholder="Placeholder" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-group-02">Input Group</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-group-02" placeholder="Placeholder" />
        </InputGroup>
      </Field>
      <Field data-disabled="true">
        <FieldLabel htmlFor="input-disabled-03">Disabled</FieldLabel>
        <InputGroup>
          <InputGroupInput
            disabled
            id="input-disabled-03"
            placeholder="This field is disabled"
          />
        </InputGroup>
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="input-invalid-04">Invalid</FieldLabel>
        <InputGroup>
          <InputGroupInput
            aria-invalid="true"
            id="input-invalid-04"
            placeholder="This field is invalid"
          />
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
