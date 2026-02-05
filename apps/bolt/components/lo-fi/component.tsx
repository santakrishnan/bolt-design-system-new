import Link from "next/link"

import { Atom } from "@/components/lo-fi/atom"

function Component({ href, ...props }: React.ComponentProps<typeof Link>) {
  return <Link className="group flex flex-col gap-2" href={href} {...props} />
}

function ComponentContent({ ...props }: React.ComponentProps<typeof Atom>) {
  return (
    <Atom
      className="flex aspect-video items-center justify-center rounded-lg bg-muted/30 p-4 ring ring-muted *:w-full *:max-w-[70%]"
      shade="50"
      {...props}
    />
  )
}

function ComponentName({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="text-center font-medium text-foreground underline-offset-2 group-hover:underline"
      {...props}
    />
  )
}

export { Component, ComponentContent, ComponentName }
