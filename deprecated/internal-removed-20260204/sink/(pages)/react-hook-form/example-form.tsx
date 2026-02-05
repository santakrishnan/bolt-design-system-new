"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import type z from "zod"
import { addons, exampleFormSchema } from "@/app/(internal)/sink/(pages)/schema"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Calendar } from "@/registry/new-york-v4/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

export function ExampleForm() {
  const [values, setValues] = useState<z.infer<typeof exampleFormSchema>>()
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof exampleFormSchema>>({
    resolver: zodResolver(exampleFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      plan: "basic" as const,
      billingPeriod: "",
      addons: ["analytics"],
      emailNotifications: false,
      teamSize: 1,
      comments: "",
      startDate: new Date(),
      theme: "system",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof exampleFormSchema>) {
    setValues(data)
    setOpen(true)
  }

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="border-b">
          <CardTitle>React Hook Form</CardTitle>
          <CardDescription>
            This form uses React Hook Form with Zod validation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="subscription-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={isInvalid}
                        autoComplete="off"
                        id={field.name}
                      />
                      <FieldDescription>Enter your name</FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={isInvalid}
                        autoComplete="off"
                        id={field.name}
                        type="email"
                      />
                      <FieldDescription>
                        Enter your email address
                      </FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="plan"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <FieldSet data-invalid={isInvalid}>
                      <FieldLegend>Subscription Plan</FieldLegend>
                      <FieldDescription>
                        Choose your subscription plan.
                      </FieldDescription>
                      <RadioGroup
                        aria-invalid={isInvalid}
                        name={field.name}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FieldLabel htmlFor="basic">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>Basic</FieldTitle>
                              <FieldDescription>
                                For individuals and small teams
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              aria-invalid={isInvalid}
                              id="basic"
                              value="basic"
                            />
                          </Field>
                        </FieldLabel>
                        <FieldLabel htmlFor="pro">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>Pro</FieldTitle>
                              <FieldDescription>
                                For businesses with higher demands
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              aria-invalid={isInvalid}
                              id="pro"
                              value="pro"
                            />
                          </Field>
                        </FieldLabel>
                      </RadioGroup>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </FieldSet>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="billingPeriod"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Billing Period
                      </FieldLabel>
                      <Select
                        aria-invalid={isInvalid}
                        name={field.name}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger id={field.name}>
                          <SelectValue placeholder="Select billing period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                      <FieldDescription>
                        Choose how often you want to be billed.
                      </FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="addons"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <FieldSet data-invalid={isInvalid}>
                      <FieldLegend>Add-ons</FieldLegend>
                      <FieldDescription>
                        Select additional features you&apos;d like to include.
                      </FieldDescription>
                      <FieldGroup data-slot="checkbox-group">
                        {addons.map((addon) => (
                          <Field key={addon.id} orientation="horizontal">
                            <Checkbox
                              aria-invalid={isInvalid}
                              checked={field.value.includes(addon.id)}
                              id={addon.id}
                              name={field.name}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...field.value, addon.id]
                                  : field.value.filter(
                                      (value) => value !== addon.id
                                    )
                                field.onChange(newValue)
                                field.onBlur()
                              }}
                            />
                            <FieldContent>
                              <FieldLabel htmlFor={addon.id}>
                                {addon.title}
                              </FieldLabel>
                              <FieldDescription>
                                {addon.description}
                              </FieldDescription>
                            </FieldContent>
                          </Field>
                        ))}
                      </FieldGroup>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </FieldSet>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="teamSize"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldTitle>Team Size</FieldTitle>
                      <FieldDescription>
                        How many people will be using the subscription?
                      </FieldDescription>
                      <Slider
                        aria-invalid={isInvalid}
                        id={field.name}
                        max={50}
                        min={1}
                        name={field.name}
                        onValueChange={field.onChange}
                        step={1}
                        value={[field.value]}
                      />
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="emailNotifications"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldLabel htmlFor={field.name}>
                          Email Notifications
                        </FieldLabel>
                        <FieldDescription>
                          Receive email updates about your subscription
                        </FieldDescription>
                      </FieldContent>
                      <Switch
                        aria-invalid={isInvalid}
                        checked={field.value}
                        id={field.name}
                        name={field.name}
                        onCheckedChange={field.onChange}
                      />
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="startDate"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Start Date</FieldLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            aria-invalid={isInvalid}
                            className="justify-start"
                            id={field.name}
                            variant="outline"
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto p-0">
                          <Calendar
                            mode="single"
                            onSelect={field.onChange}
                            required
                            selected={field.value}
                          />
                        </PopoverContent>
                      </Popover>
                      <FieldDescription>
                        Choose when your subscription should start
                      </FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="theme"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldTitle>Theme Preference</FieldTitle>
                      <ToggleGroup
                        aria-invalid={isInvalid}
                        onValueChange={(value) =>
                          value && field.onChange(value)
                        }
                        type="single"
                        value={field.value}
                        variant="outline"
                      >
                        <ToggleGroupItem value="light">Light</ToggleGroupItem>
                        <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
                        <ToggleGroupItem value="system">System</ToggleGroupItem>
                      </ToggleGroup>
                      <FieldDescription>
                        Choose your preferred color theme
                      </FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={isInvalid}
                        id={field.name}
                        placeholder="Enter your password"
                        type="password"
                      />
                      <FieldDescription>
                        Must contain uppercase, lowercase, number, and be 8+
                        characters
                      </FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
              <FieldSeparator />
              <Controller
                control={form.control}
                name="comments"
                render={({ field, fieldState }) => {
                  const isInvalid = fieldState.invalid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Additional Comments
                      </FieldLabel>
                      <Textarea
                        {...field}
                        aria-invalid={isInvalid}
                        id={field.name}
                        placeholder="Tell us more about your needs..."
                        rows={3}
                      />
                      <FieldDescription>
                        Share any additional requirements or feedback (10-240
                        characters)
                      </FieldDescription>
                      {isInvalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="border-t">
          <Field className="justify-end" orientation="horizontal">
            <Button
              onClick={() => form.reset()}
              type="button"
              variant="outline"
            >
              Reset
            </Button>
            <Button form="subscription-form" type="submit">
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submitted Values</DialogTitle>
            <DialogDescription>
              Here are the values you submitted.
            </DialogDescription>
          </DialogHeader>
          <pre className="overflow-x-auto rounded-md bg-black p-4 font-mono text-sm text-white">
            <code>{JSON.stringify(values, null, 2)}</code>
          </pre>
        </DialogContent>
      </Dialog>
    </>
  )
}
