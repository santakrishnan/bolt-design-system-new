import { Button } from "@/examples/radix/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/examples/radix/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard closeDelay={100} openDelay={10}>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover Here</Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="mt-1 text-muted-foreground text-xs">
          Joined December 2021
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
