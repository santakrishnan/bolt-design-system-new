import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"

export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="Email" type="email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
