import { AccountForm } from "@/app/(app)/examples/forms/account/account-form"
import { Separator } from "@/registry/new-york/ui/separator"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-lg">Account</h3>
        <p className="text-muted-foreground text-sm">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
