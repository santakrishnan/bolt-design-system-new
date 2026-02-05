import { AppearanceForm } from "@/app/(app)/examples/forms/appearance/appearance-form"
import { Separator } from "@/registry/new-york/ui/separator"

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-lg">Appearance</h3>
        <p className="text-muted-foreground text-sm">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
