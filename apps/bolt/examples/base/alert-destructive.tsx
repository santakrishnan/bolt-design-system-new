import { Alert, AlertDescription, AlertTitle } from "@/examples/base/ui/alert"
import { AlertCircleIcon } from "lucide-react"

export default function AlertDestructive() {
  return (
    <Alert className="max-w-md" variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method
        and try again.
      </AlertDescription>
    </Alert>
  )
}
