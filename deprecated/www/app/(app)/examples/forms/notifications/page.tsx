import { NotificationsForm } from "@/app/(app)/examples/forms/notifications/notifications-form"
import { Separator } from "@/registry/new-york/ui/separator"

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-lg">Notifications</h3>
        <p className="text-muted-foreground text-sm">
          Configure how you receive notifications.
        </p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  )
}
