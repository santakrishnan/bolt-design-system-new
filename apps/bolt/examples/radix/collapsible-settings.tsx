"use client"

import { MaximizeIcon, MinimizeIcon } from "lucide-react"
import * as React from "react"
import { Button } from "@/examples/radix/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/examples/radix/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/examples/radix/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/examples/radix/ui/field"
import { Input } from "@/examples/radix/ui/input"

export function CollapsibleSettings() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          className="flex items-start gap-2"
          onOpenChange={setIsOpen}
          open={isOpen}
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel className="sr-only" htmlFor="radius-x">
                Radius X
              </FieldLabel>
              <Input defaultValue={0} id="radius" placeholder="0" />
            </Field>
            <Field>
              <FieldLabel className="sr-only" htmlFor="radius-y">
                Radius Y
              </FieldLabel>
              <Input defaultValue={0} id="radius" placeholder="0" />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel className="sr-only" htmlFor="radius-x">
                  Radius X
                </FieldLabel>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
              <Field>
                <FieldLabel className="sr-only" htmlFor="radius-y">
                  Radius Y
                </FieldLabel>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button size="icon" variant="outline">
              {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
