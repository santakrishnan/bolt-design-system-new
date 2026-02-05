import Image from "next/image"
import { AspectRatio } from "@/examples/radix/ui/aspect-ratio"

export function AspectRatioPortrait() {
  return (
    <div className="w-full max-w-[10rem]">
      <AspectRatio className="bg-muted rounded-lg" ratio={9 / 16}>
        <Image
          alt="Photo"
          className="rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
    </div>
  )
}
