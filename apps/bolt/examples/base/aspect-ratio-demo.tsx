import Image from "next/image"
import { AspectRatio } from "@/examples/base/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <AspectRatio className="bg-muted w-full max-w-sm rounded-lg" ratio={16 / 9}>
      <Image
        alt="Photo"
        className="rounded-lg object-cover grayscale dark:brightness-20"
        fill
        src="https://avatar.vercel.sh/shadcn1"
      />
    </AspectRatio>
  )
}
