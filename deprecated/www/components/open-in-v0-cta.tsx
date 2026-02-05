import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"

export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-2 rounded-lg border p-4 text-sm",
        className
      )}
    >
      <div className="text-balance font-semibold text-lg leading-tight group-hover:underline">
        Deploy your shadcn/ui app on Vercel
      </div>
      <div>Trusted by OpenAI, Sonos, Chick-fil-A, and more.</div>
      <div>
        Vercel provides tools and infrastructure to deploy apps and features at
        scale.
      </div>
      <Button className="mt-2 w-fit" size="sm">
        Deploy Now
      </Button>
      <Link
        className="absolute inset-0"
        href="https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout"
        rel="noreferrer"
        target="_blank"
      >
        <span className="sr-only">Deploy to Vercel</span>
      </Link>
    </div>
  )
}
