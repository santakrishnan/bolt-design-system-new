"use client"

import * as React from "react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export function CardsReportIssue() {
  const id = React.useId()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldGroup className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor={`area-${id}`}>Area</FieldLabel>
              <Select defaultValue="billing">
                <SelectTrigger
                  aria-label="Area"
                  className="w-full"
                  id={`area-${id}`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">Team</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="deployments">Deployments</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor={`security-level-${id}`}>
                Security Level
              </FieldLabel>
              <Select defaultValue="2">
                <SelectTrigger
                  aria-label="Security Level"
                  className="[&_span]:!block w-full [&_span]:truncate"
                  id={`security-level-${id}`}
                >
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                  <SelectItem value="2">Severity 2</SelectItem>
                  <SelectItem value="3">Severity 3</SelectItem>
                  <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor={`subject-${id}`}>Subject</FieldLabel>
            <Input id={`subject-${id}`} placeholder="I need help with..." />
          </Field>
          <Field>
            <FieldLabel htmlFor={`description-${id}`}>Description</FieldLabel>
            <Textarea
              className="min-h-24"
              id={`description-${id}`}
              placeholder="Please include all information relevant to your issue."
            />
          </Field>
          <Field className="justify-end" orientation="horizontal">
            <Button size="sm" variant="ghost">
              Cancel
            </Button>
            <Button size="sm">Submit</Button>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
