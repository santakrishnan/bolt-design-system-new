"use client"

import * as React from "react"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"
import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Button } from "@/registry/bases/base/ui/button"
import { Card, CardContent } from "@/registry/bases/base/ui/card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/bases/base/ui/command"

export default function CommandExample() {
  return (
    <ExampleWrapper>
      <CommandInline />
      <CommandBasic />
      <CommandWithShortcuts />
      <CommandWithGroups />
      <CommandManyItems />
    </ExampleWrapper>
  )
}

function CommandInline() {
  return (
    <Example title="Inline">
      <Card className="w-full p-0">
        <CardContent className="p-0">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CalendarIcon"
                    lucide="CalendarIcon"
                    phosphor="CalendarBlankIcon"
                    remixicon="RiCalendarLine"
                    tabler="IconCalendar"
                  />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="SmileIcon"
                    lucide="SmileIcon"
                    phosphor="SmileyIcon"
                    remixicon="RiEmotionLine"
                    tabler="IconMoodSmile"
                  />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CalculatorIcon"
                    lucide="CalculatorIcon"
                    phosphor="CalculatorIcon"
                    remixicon="RiCalculatorLine"
                    tabler="IconCalculator"
                  />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="UserIcon"
                    lucide="UserIcon"
                    phosphor="UserIcon"
                    remixicon="RiUserLine"
                    tabler="IconUser"
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CreditCardIcon"
                    lucide="CreditCardIcon"
                    phosphor="CreditCardIcon"
                    remixicon="RiBankCardLine"
                    tabler="IconCreditCard"
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="SettingsIcon"
                    lucide="SettingsIcon"
                    phosphor="GearIcon"
                    remixicon="RiSettingsLine"
                    tabler="IconSettings"
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>
    </Example>
  )
}

function CommandBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="Basic">
      <div className="flex flex-col gap-4">
        <Button
          className="w-fit"
          onClick={() => setOpen(true)}
          variant="outline"
        >
          Open Menu
        </Button>
        <CommandDialog onOpenChange={setOpen} open={open}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}

function CommandWithShortcuts() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="With Shortcuts">
      <div className="flex flex-col gap-4">
        <Button
          className="w-fit"
          onClick={() => setOpen(true)}
          variant="outline"
        >
          Open Menu
        </Button>
        <CommandDialog onOpenChange={setOpen} open={open}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Settings">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="UserIcon"
                    lucide="UserIcon"
                    phosphor="UserIcon"
                    remixicon="RiUserLine"
                    tabler="IconUser"
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CreditCardIcon"
                    lucide="CreditCardIcon"
                    phosphor="CreditCardIcon"
                    remixicon="RiBankCardLine"
                    tabler="IconCreditCard"
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="SettingsIcon"
                    lucide="SettingsIcon"
                    phosphor="GearIcon"
                    remixicon="RiSettingsLine"
                    tabler="IconSettings"
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}

function CommandWithGroups() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="With Groups">
      <div className="flex flex-col gap-4">
        <Button
          className="w-fit"
          onClick={() => setOpen(true)}
          variant="outline"
        >
          Open Menu
        </Button>
        <CommandDialog onOpenChange={setOpen} open={open}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CalendarIcon"
                    lucide="CalendarIcon"
                    phosphor="CalendarBlankIcon"
                    remixicon="RiCalendarLine"
                    tabler="IconCalendar"
                  />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="SmileIcon"
                    lucide="SmileIcon"
                    phosphor="SmileyIcon"
                    remixicon="RiEmotionLine"
                    tabler="IconMoodSmile"
                  />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CalculatorIcon"
                    lucide="CalculatorIcon"
                    phosphor="CalculatorIcon"
                    remixicon="RiCalculatorLine"
                    tabler="IconCalculator"
                  />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="UserIcon"
                    lucide="UserIcon"
                    phosphor="UserIcon"
                    remixicon="RiUserLine"
                    tabler="IconUser"
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CreditCardIcon"
                    lucide="CreditCardIcon"
                    phosphor="CreditCardIcon"
                    remixicon="RiBankCardLine"
                    tabler="IconCreditCard"
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="SettingsIcon"
                    lucide="SettingsIcon"
                    phosphor="GearIcon"
                    remixicon="RiSettingsLine"
                    tabler="IconSettings"
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}

function CommandManyItems() {
  const [open, setOpen] = React.useState(false)

  return (
    <Example title="Many Groups & Items">
      <div className="flex flex-col gap-4">
        <Button
          className="w-fit"
          onClick={() => setOpen(true)}
          variant="outline"
        >
          Open Menu
        </Button>
        <CommandDialog onOpenChange={setOpen} open={open}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="HomeIcon"
                    lucide="HomeIcon"
                    phosphor="HouseIcon"
                    remixicon="RiHomeLine"
                    tabler="IconHome"
                  />
                  <span>Home</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="InboxIcon"
                    lucide="InboxIcon"
                    phosphor="TrayIcon"
                    remixicon="RiInboxLine"
                    tabler="IconInbox"
                  />
                  <span>Inbox</span>
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="File02Icon"
                    lucide="FileTextIcon"
                    phosphor="FileTextIcon"
                    remixicon="RiFileTextLine"
                    tabler="IconFileText"
                  />
                  <span>Documents</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="FolderIcon"
                    lucide="FolderIcon"
                    phosphor="FolderIcon"
                    remixicon="RiFolderLine"
                    tabler="IconFolder"
                  />
                  <span>Folders</span>
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="PlusSignIcon"
                    lucide="PlusIcon"
                    phosphor="PlusIcon"
                    remixicon="RiAddLine"
                    tabler="IconPlus"
                  />
                  <span>New File</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="FolderAddIcon"
                    lucide="FolderPlusIcon"
                    phosphor="FolderPlusIcon"
                    remixicon="RiFolderAddLine"
                    tabler="IconFolderPlus"
                  />
                  <span>New Folder</span>
                  <CommandShortcut>⇧⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CopyIcon"
                    lucide="CopyIcon"
                    phosphor="CopyIcon"
                    remixicon="RiFileCopyLine"
                    tabler="IconCopy"
                  />
                  <span>Copy</span>
                  <CommandShortcut>⌘C</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="ScissorIcon"
                    lucide="ScissorsIcon"
                    phosphor="ScissorsIcon"
                    remixicon="RiScissorsLine"
                    tabler="IconCut"
                  />
                  <span>Cut</span>
                  <CommandShortcut>⌘X</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="ClipboardIcon"
                    lucide="ClipboardPasteIcon"
                    phosphor="ClipboardIcon"
                    remixicon="RiClipboardLine"
                    tabler="IconClipboard"
                  />
                  <span>Paste</span>
                  <CommandShortcut>⌘V</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="DeleteIcon"
                    lucide="TrashIcon"
                    phosphor="TrashIcon"
                    remixicon="RiDeleteBinLine"
                    tabler="IconTrash"
                  />
                  <span>Delete</span>
                  <CommandShortcut>⌫</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="View">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="GridIcon"
                    lucide="LayoutGridIcon"
                    phosphor="GridFourIcon"
                    remixicon="RiGridLine"
                    tabler="IconLayoutGrid"
                  />
                  <span>Grid View</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="Menu05Icon"
                    lucide="ListIcon"
                    phosphor="ListIcon"
                    remixicon="RiListUnordered"
                    tabler="IconList"
                  />
                  <span>List View</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="ZoomInAreaIcon"
                    lucide="ZoomInIcon"
                    phosphor="MagnifyingGlassPlusIcon"
                    remixicon="RiZoomInLine"
                    tabler="IconZoomIn"
                  />
                  <span>Zoom In</span>
                  <CommandShortcut>⌘+</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="ZoomOutAreaIcon"
                    lucide="ZoomOutIcon"
                    phosphor="MagnifyingGlassMinusIcon"
                    remixicon="RiSearchEyeLine"
                    tabler="IconZoomOut"
                  />
                  <span>Zoom Out</span>
                  <CommandShortcut>⌘-</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="UserIcon"
                    lucide="UserIcon"
                    phosphor="UserIcon"
                    remixicon="RiUserLine"
                    tabler="IconUser"
                  />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CreditCardIcon"
                    lucide="CreditCardIcon"
                    phosphor="CreditCardIcon"
                    remixicon="RiBankCardLine"
                    tabler="IconCreditCard"
                  />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="SettingsIcon"
                    lucide="SettingsIcon"
                    phosphor="GearIcon"
                    remixicon="RiSettingsLine"
                    tabler="IconSettings"
                  />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="NotificationIcon"
                    lucide="BellIcon"
                    phosphor="BellIcon"
                    remixicon="RiNotificationLine"
                    tabler="IconBell"
                  />
                  <span>Notifications</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="HelpCircleIcon"
                    lucide="HelpCircleIcon"
                    phosphor="QuestionIcon"
                    remixicon="RiQuestionLine"
                    tabler="IconHelpCircle"
                  />
                  <span>Help & Support</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Tools">
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CalculatorIcon"
                    lucide="CalculatorIcon"
                    phosphor="CalculatorIcon"
                    remixicon="RiCalculatorLine"
                    tabler="IconCalculator"
                  />
                  <span>Calculator</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CalendarIcon"
                    lucide="CalendarIcon"
                    phosphor="CalendarBlankIcon"
                    remixicon="RiCalendarLine"
                    tabler="IconCalendar"
                  />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="ImageIcon"
                    lucide="ImageIcon"
                    phosphor="ImageIcon"
                    remixicon="RiImageLine"
                    tabler="IconPhoto"
                  />
                  <span>Image Editor</span>
                </CommandItem>
                <CommandItem>
                  <IconPlaceholder
                    hugeicons="CodeIcon"
                    lucide="CodeIcon"
                    phosphor="CodeIcon"
                    remixicon="RiCodeLine"
                    tabler="IconCode"
                  />
                  <span>Code Editor</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </Example>
  )
}
