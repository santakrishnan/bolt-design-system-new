"use client"

import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Label } from "@/registry/new-york/ui/label"
import { Switch } from "@/registry/new-york/ui/switch"

export function DemoCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <Label className="flex flex-col space-y-1" htmlFor="necessary">
            <span>Strictly Necessary</span>
            <span className="font-normal text-muted-foreground leading-snug">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch defaultChecked id="necessary" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label className="flex flex-col space-y-1" htmlFor="functional">
            <span>Functional Cookies</span>
            <span className="font-normal text-muted-foreground leading-snug">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch id="functional" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label className="flex flex-col space-y-1" htmlFor="performance">
            <span>Performance Cookies</span>
            <span className="font-normal text-muted-foreground leading-snug">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch id="performance" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
