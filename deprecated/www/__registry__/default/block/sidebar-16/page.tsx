"use client"

import { Command, Sidebar } from "lucide-react"
import * as React from "react"

import { AppSidebar } from "@/registry/default/block/sidebar-16/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import { Button } from "@/registry/default/ui/button"
import { Separator } from "@/registry/default/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/default/ui/sidebar"

export const iframeHeight = "800px"

export const description = "An inset sidebar with site header navigation."

const HEADER_HEIGHT = "4rem"

export default function Page() {
  const [open, setOpen] = React.useState(true)

  return (
    <div
      style={
        {
          "--header-height": HEADER_HEIGHT,
        } as React.CSSProperties
      }
    >
      <header className="sticky top-0 z-50 h-[--header-height] w-full border-border/40 border-b bg-sidebar backdrop-blur">
        <div className="flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Button
              className="hidden md:flex"
              onClick={() => setOpen(!open)}
              size="icon"
              variant="ghost"
            >
              <Sidebar />
            </Button>
            <a className="mr-4 flex items-center gap-2 lg:mr-6" href="#">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Command className="size-4" />
              </div>
            </a>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              <a
                className="transition-colors hover:text-foreground/80"
                href="#"
              >
                Docs
              </a>
              <a
                className="transition-colors hover:text-foreground/80"
                href="#"
              >
                Components
              </a>
              <a
                className="transition-colors hover:text-foreground/80"
                href="#"
              >
                Blocks
              </a>
              <a
                className="transition-colors hover:text-foreground/80"
                href="#"
              >
                Charts
              </a>
              <a
                className="transition-colors hover:text-foreground/80"
                href="#"
              >
                Themes
              </a>
              <a
                className="transition-colors hover:text-foreground/80"
                href="#"
              >
                Colors
              </a>
            </nav>
          </div>
        </div>
      </header>
      <SidebarProvider onOpenChange={setOpen} open={open}>
        <AppSidebar />

        <SidebarInset>
          <header className="flex shrink-0 items-center gap-2 border-b py-2">
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="flex items-center gap-2 md:hidden">
                <SidebarTrigger />
                <Separator className="mr-2 h-4" orientation="vertical" />
              </div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
