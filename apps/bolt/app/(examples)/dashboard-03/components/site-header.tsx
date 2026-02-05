"use client"

import { SidebarIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { Fragment, useMemo } from "react"
import { ModeToggle } from "@/app/(examples)/dashboard-03/components/mode-toggle"
import { NavUser } from "@/app/(examples)/dashboard-03/components/nav-user"
import { ThemeSelector } from "@/components/theme-selector"
import { SearchForm } from "@/registry/new-york-v4/blocks/sidebar-16/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/new-york-v4/ui/breadcrumb"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { useSidebar } from "@/registry/new-york-v4/ui/sidebar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const pathname = usePathname()

  // Faux breadcrumbs for demo.
  const breadcrumbs = useMemo(() => {
    return pathname
      .split("/")
      .filter((path) => path !== "")
      .map((path, index, array) => ({
        label: path,
        href: `/${array.slice(0, index + 1).join("/")}`,
      }))
  }, [pathname])

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center border-b bg-background"
      data-slot="site-header"
    >
      <div className="flex h-(--header-height) w-full items-center gap-2 px-2 pr-4">
        <Button
          className="gap-2.5 has-[>svg]:px-2"
          onClick={toggleSidebar}
          size="sm"
          variant="ghost"
        >
          <SidebarIcon />
          <span className="truncate font-medium">Acme Inc</span>
        </Button>
        <Separator
          className="mr-2 data-[orientation=vertical]:h-4"
          orientation="vertical"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="capitalize" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {breadcrumbs.map((breadcrumb, index) =>
              index === breadcrumbs.length - 1 ? (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">
                    {breadcrumb.label}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      href={breadcrumb.href}
                    >
                      {breadcrumb.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              )
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <SearchForm className="w-fullsm:w-auto" />
          <ThemeSelector />
          <ModeToggle />
          <NavUser
            user={{
              name: "shadcn",
              email: "m@example.com",
              avatar: "/avatars/shadcn.jpg",
            }}
          />
        </div>
      </div>
    </header>
  )
}
