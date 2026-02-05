import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        className="font-medium text-sm transition-colors hover:text-primary"
        href="/examples/dashboard"
      >
        Overview
      </Link>
      <Link
        className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
        href="/examples/dashboard"
      >
        Customers
      </Link>
      <Link
        className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
        href="/examples/dashboard"
      >
        Products
      </Link>
      <Link
        className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
        href="/examples/dashboard"
      >
        Settings
      </Link>
    </nav>
  )
}
