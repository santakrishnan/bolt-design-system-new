"use client"

import {
  ChartLineIcon,
  FileIcon,
  HomeIcon,
  LifeBuoy,
  Send,
  Settings2Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react"
import type * as React from "react"
import { NavMain } from "@/app/(examples)/dashboard-03/components/nav-main"
import { NavSecondary } from "@/app/(examples)/dashboard-03/components/nav-secondary"
import { Sidebar, SidebarContent } from "@/registry/new-york-v4/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: ChartLineIcon,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: ShoppingBagIcon,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: ShoppingCartIcon,
    },
    {
      title: "Invoices",
      url: "/dashboard/invoices",
      icon: FileIcon,
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: UserIcon,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2Icon,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary className="mt-auto" items={data.navSecondary} />
      </SidebarContent>
    </Sidebar>
  )
}
