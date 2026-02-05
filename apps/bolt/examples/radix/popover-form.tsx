import { Button } from "@/examples/radix/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/examples/radix/ui/popover"

export function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
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
  )
}
