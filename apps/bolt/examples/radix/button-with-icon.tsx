import { IconGitBranch } from "@tabler/icons-react"
import { Button } from "@/examples/radix/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button size="sm" variant="outline">
      <IconGitBranch /> New Branch
    </Button>
  )
}
