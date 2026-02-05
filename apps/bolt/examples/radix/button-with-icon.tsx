import { Button } from "@/examples/radix/ui/button"
import { IconGitBranch } from "@tabler/icons-react"

export default function ButtonWithIcon() {
  return (
    <Button size="sm" variant="outline">
      <IconGitBranch /> New Branch
    </Button>
  )
}
