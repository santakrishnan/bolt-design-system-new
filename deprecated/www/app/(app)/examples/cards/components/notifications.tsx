import { Bell, EyeOff, User } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

export function DemoNotifications() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1">
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <Bell className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="font-medium text-sm leading-none">Everything</p>
            <p className="text-muted-foreground text-sm">
              Email digest, mentions & all activity.
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
          <User className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="font-medium text-sm leading-none">Available</p>
            <p className="text-muted-foreground text-sm">
              Only mentions and comments.
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <EyeOff className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="font-medium text-sm leading-none">Ignoring</p>
            <p className="text-muted-foreground text-sm">
              Turn off all notifications.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
