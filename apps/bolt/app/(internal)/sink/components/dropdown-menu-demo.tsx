"use client"

import * as React from "react"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <DropdownMenuSimple />
      <DropdownMenuCheckboxes />
      <DropdownMenuRadioGroupDemo />
      <DropdownMenuWithAvatar />
      <DropdownMenuAvatarOnly />
      <DropdownMenuIconColor />
    </div>
  )
}

function DropdownMenuSimple() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Checkboxes</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="UserIcon"
              lucide="UserIcon"
              phosphor="UserIcon"
              remixicon="RiUserLine"
              tabler="IconUser"
            />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="CreditCardIcon"
              lucide="CreditCardIcon"
              phosphor="CreditCardIcon"
              remixicon="RiBankCardLine"
              tabler="IconCreditCard"
            />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="SettingsIcon"
              lucide="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettings3Line"
              tabler="IconSettings"
            />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            disabled
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="LogoutIcon"
              lucide="LogOutIcon"
              phosphor="SignOutIcon"
              remixicon="RiLogoutBoxLine"
              tabler="IconLogout"
            />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Radio Group</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel inset>Panel Position</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup onValueChange={setPosition} value={position}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem disabled value="right">
              Right
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuWithAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-12 justify-start px-2 md:max-w-[200px]"
          variant="outline"
        >
          <Avatar>
            <AvatarImage alt="Shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">shadcn</span>
            <span className="truncate text-muted-foreground text-xs">
              shadcn@example.com
            </span>
          </div>
          <IconPlaceholder
            className="ml-auto text-muted-foreground"
            hugeicons="ChevronUpDownIcon"
            lucide="ChevronsUpDownIcon"
            phosphor="CaretUpDownIcon"
            remixicon="RiExpandUpDownLine"
            tabler="IconChevronsUpDown"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage alt="Shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">shadcn</span>
              <span className="truncate text-muted-foreground text-xs">
                shadcn@example.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="SparklesIcon"
              lucide="SparklesIcon"
              phosphor="SparklesIcon"
              remixicon="RiSparklingLine"
              tabler="IconSparkles"
            />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="BadgeCheckIcon"
              lucide="BadgeCheckIcon"
              phosphor="CheckCircleIcon"
              remixicon="RiVerifiedBadgeLine"
              tabler="IconBadgeCheck"
            />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="CreditCardIcon"
              lucide="CreditCardIcon"
              phosphor="CreditCardIcon"
              remixicon="RiBankCardLine"
              tabler="IconCreditCard"
            />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="BellIcon"
              lucide="BellIcon"
              phosphor="BellIcon"
              remixicon="RiNotification3Line"
              tabler="IconBell"
            />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlaceholder
            hugeicons="LogoutIcon"
            lucide="LogOutIcon"
            phosphor="SignOutIcon"
            remixicon="RiLogoutBoxLine"
            tabler="IconLogout"
          />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuAvatarOnly() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="size-8 rounded-full border-none p-0"
          variant="outline"
        >
          <Avatar>
            <AvatarImage
              alt="maxleiter"
              src="https://github.com/maxleiter.png"
            />
            <AvatarFallback className="rounded-lg">LR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage
                alt="maxleiter"
                src="https://github.com/maxleiter.png"
              />
              <AvatarFallback className="rounded-lg">LR</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">maxleiter</span>
              <span className="truncate text-muted-foreground text-xs">
                maxleiter@example.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="SparklesIcon"
              lucide="SparklesIcon"
              phosphor="SparklesIcon"
              remixicon="RiSparklingLine"
              tabler="IconSparkles"
            />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="BadgeCheckIcon"
              lucide="BadgeCheckIcon"
              phosphor="CheckCircleIcon"
              remixicon="RiVerifiedBadgeLine"
              tabler="IconBadgeCheck"
            />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="CreditCardIcon"
              lucide="CreditCardIcon"
              phosphor="CreditCardIcon"
              remixicon="RiBankCardLine"
              tabler="IconCreditCard"
            />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="BellIcon"
              lucide="BellIcon"
              phosphor="BellIcon"
              remixicon="RiNotification3Line"
              tabler="IconBell"
            />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlaceholder
            hugeicons="LogoutIcon"
            lucide="LogOutIcon"
            phosphor="SignOutIcon"
            remixicon="RiLogoutBoxLine"
            tabler="IconLogout"
          />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuIconColor() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <IconPlaceholder
            hugeicons="MoreHorizontalCircle01Icon"
            lucide="MoreHorizontalIcon"
            phosphor="DotsThreeOutlineIcon"
            remixicon="RiMoreLine"
            tabler="IconDots"
          />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="EditIcon"
              lucide="PencilIcon"
              phosphor="PencilIcon"
              remixicon="RiPencilLine"
              tabler="IconPencil"
            />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPlaceholder
              hugeicons="ShareIcon"
              lucide="ShareIcon"
              phosphor="ShareIcon"
              remixicon="RiShareLine"
              tabler="IconShare"
            />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <IconPlaceholder
              hugeicons="DeleteIcon"
              lucide="TrashIcon"
              phosphor="TrashIcon"
              remixicon="RiDeleteBinLine"
              tabler="IconTrash"
            />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
