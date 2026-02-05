import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/examples/base/ui/field"
import { RadioGroup, RadioGroupItem } from "@/examples/base/ui/radio-group"

export function RadioFields() {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend variant="label">Subscription Plan</FieldLegend>
        <RadioGroup defaultValue="free">
          <Field orientation="horizontal">
            <RadioGroupItem id="radio-free" value="free" />
            <FieldLabel className="font-normal" htmlFor="radio-free">
              Free Plan
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="radio-pro" value="pro" />
            <FieldLabel className="font-normal" htmlFor="radio-pro">
              Pro Plan
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="radio-enterprise" value="enterprise" />
            <FieldLabel className="font-normal" htmlFor="radio-enterprise">
              Enterprise
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Battery Level</FieldLegend>
        <FieldDescription>
          Choose your preferred battery level.
        </FieldDescription>
        <RadioGroup>
          <Field orientation="horizontal">
            <RadioGroupItem id="battery-high" value="high" />
            <FieldLabel htmlFor="battery-high">High</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="battery-medium" value="medium" />
            <FieldLabel htmlFor="battery-medium">Medium</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem id="battery-low" value="low" />
            <FieldLabel htmlFor="battery-low">Low</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <RadioGroup className="gap-6">
        <Field orientation="horizontal">
          <RadioGroupItem id="radio-content-1" value="option1" />
          <FieldContent>
            <FieldLabel htmlFor="radio-content-1">Enable Touch ID</FieldLabel>
            <FieldDescription>
              Enable Touch ID to quickly unlock your device.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="radio-content-2" value="option2" />
          <FieldContent>
            <FieldLabel htmlFor="radio-content-2">
              Enable Touch ID and Face ID to make it even faster to unlock your
              device. This is a long label to test the layout.
            </FieldLabel>
            <FieldDescription>
              Enable Touch ID to quickly unlock your device.
            </FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
      <RadioGroup className="gap-3">
        <FieldLabel htmlFor="radio-title-1">
          <Field orientation="horizontal">
            <RadioGroupItem id="radio-title-1" value="title1" />
            <FieldContent>
              <FieldTitle>Enable Touch ID</FieldTitle>
              <FieldDescription>
                Enable Touch ID to quickly unlock your device.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="radio-title-2">
          <Field orientation="horizontal">
            <RadioGroupItem id="radio-title-2" value="title2" />
            <FieldContent>
              <FieldTitle>
                Enable Touch ID and Face ID to make it even faster to unlock
                your device. This is a long label to test the layout.
              </FieldTitle>
              <FieldDescription>
                Enable Touch ID to quickly unlock your device.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
      <FieldSet>
        <FieldLegend variant="label">Invalid Radio Group</FieldLegend>
        <RadioGroup>
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem
              aria-invalid
              id="radio-invalid-1"
              value="invalid1"
            />
            <FieldLabel htmlFor="radio-invalid-1">Invalid Option 1</FieldLabel>
          </Field>
          <Field data-invalid orientation="horizontal">
            <RadioGroupItem
              aria-invalid
              id="radio-invalid-2"
              value="invalid2"
            />
            <FieldLabel htmlFor="radio-invalid-2">Invalid Option 2</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Disabled Radio Group</FieldLegend>
        <RadioGroup disabled>
          <Field data-disabled orientation="horizontal">
            <RadioGroupItem disabled id="radio-disabled-1" value="disabled1" />
            <FieldLabel htmlFor="radio-disabled-1">
              Disabled Option 1
            </FieldLabel>
          </Field>
          <Field data-disabled orientation="horizontal">
            <RadioGroupItem disabled id="radio-disabled-2" value="disabled2" />
            <FieldLabel htmlFor="radio-disabled-2">
              Disabled Option 2
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}
