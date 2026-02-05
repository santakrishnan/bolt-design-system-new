import { ProfileForm } from "@/app/(app)/examples/forms/profile-form"
import { Separator } from "@/registry/new-york/ui/separator"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-lg">Profile</h3>
        <p className="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}
