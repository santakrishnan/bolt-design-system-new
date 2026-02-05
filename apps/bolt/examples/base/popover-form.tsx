import { Button } from "@/examples/base/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/examples/base/ui/field"
import { Input } from "@/examples/base/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/examples/base/ui/popover"

export function PopoverForm() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel className="w-1/2" htmlFor="width">
                Width
              </FieldLabel>
              <Input defaultValue="100%" id="width" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel className="w-1/2" htmlFor="height">
                Height
              </FieldLabel>
              <Input defaultValue="25px" id="height" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}
