import Image from "next/image"
import { AspectRatio } from "@/examples/radix/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
        <Image
          alt="Photo"
          className="w-full rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://avatar.vercel.sh/shadcn1"
        />
      </AspectRatio>
    </div>
  )
}
