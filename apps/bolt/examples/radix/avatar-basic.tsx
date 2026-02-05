import { Avatar, AvatarFallback, AvatarImage } from "@/examples/radix/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        alt="@shadcn"
        className="grayscale"
        src="https://github.com/shadcn.png"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
