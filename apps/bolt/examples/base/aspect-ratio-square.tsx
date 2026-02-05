import Image from "next/image"
import { AspectRatio } from "@/examples/base/ui/aspect-ratio"

export function AspectRatioSquare() {
  return (
    <AspectRatio
      className="bg-muted w-full max-w-[12rem] rounded-lg"
      ratio={1 / 1}
    >
      <Image
        alt="Photo"
        className="rounded-lg object-cover grayscale dark:brightness-20"
        fill
        src="https://avatar.vercel.sh/shadcn1"
      />
    </AspectRatio>
  )
}
