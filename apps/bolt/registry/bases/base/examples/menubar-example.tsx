"use client"

import * as React from "react"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"
import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/bases/base/ui/menubar"

export default function MenubarExample() {
  return (
    <ExampleWrapper>
      <MenubarBasic />
      <MenubarWithSubmenu />
      <MenubarSides />
      <MenubarWithCheckboxes />
      <MenubarWithRadio />
      <MenubarWithIcons />
      <MenubarWithShortcuts />
      <MenubarFormat />
      <MenubarInsert />
      <MenubarDestructive />
      <MenubarInDialog />
      <MenubarWithInset />
    </ExampleWrapper>
  )
}

function MenubarBasic() {
  return (
    <Example title="Basic">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarSides() {
  return (
    <Example containerClassName="col-span-2" title="Sides">
      <div className="flex flex-wrap justify-center gap-2">
        {(
          [
            "inline-start",
            "left",
            "top",
            "bottom",
            "right",
            "inline-end",
          ] as const
        ).map((side) => (
          <Menubar key={side}>
            <MenubarMenu>
              <MenubarTrigger className="capitalize">
                {side.replace("-", " ")}
              </MenubarTrigger>
              <MenubarContent side={side}>
                <MenubarGroup>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarItem>New Incognito Window</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ))}
      </div>
    </Example>
  )
}

function MenubarWithSubmenu() {
  return (
    <Example title="With Submenu">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarWithCheckboxes() {
  return (
    <Example title="With Checkboxes">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-64">
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
            <MenubarCheckboxItem>Code</MenubarCheckboxItem>
            <MenubarCheckboxItem>Superscript</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarWithRadio() {
  const [user, setUser] = React.useState("benoit")
  const [theme, setTheme] = React.useState("system")

  return (
    <Example title="With Radio">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup onValueChange={setUser} value={user}>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup onValueChange={setTheme} value={theme}>
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
              <MenubarRadioItem value="system">System</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarWithIcons() {
  return (
    <Example title="With Icons">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="FileIcon"
                lucide="FileIcon"
                phosphor="FileIcon"
                remixicon="RiFileLine"
                tabler="IconFile"
              />
              New File <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="FolderIcon"
                lucide="FolderIcon"
                phosphor="FolderIcon"
                remixicon="RiFolderLine"
                tabler="IconFolder"
              />
              Open Folder
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <IconPlaceholder
                hugeicons="FloppyDiskIcon"
                lucide="SaveIcon"
                phosphor="FloppyDiskIcon"
                remixicon="RiSaveLine"
                tabler="IconDeviceFloppy"
              />
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>More</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <IconPlaceholder
                  hugeicons="DashedLineCircleIcon"
                  lucide="CircleDashedIcon"
                  phosphor="CircleDashedIcon"
                  remixicon="RiLoaderLine"
                  tabler="IconCircleDashed"
                />
                Settings
              </MenubarItem>
              <MenubarItem>
                <IconPlaceholder
                  hugeicons="DashedLineCircleIcon"
                  lucide="CircleDashedIcon"
                  phosphor="CircleDashedIcon"
                  remixicon="RiLoaderLine"
                  tabler="IconCircleDashed"
                />
                Help
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="destructive">
                <IconPlaceholder
                  hugeicons="DashedLineCircleIcon"
                  lucide="CircleDashedIcon"
                  phosphor="CircleDashedIcon"
                  remixicon="RiLoaderLine"
                  tabler="IconCircleDashed"
                />
                Delete
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarWithShortcuts() {
  return (
    <Example title="With Shortcuts">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarFormat() {
  return (
    <Example title="Format">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="TextBoldIcon"
                lucide="BoldIcon"
                phosphor="TextBIcon"
                remixicon="RiBold"
                tabler="IconBold"
              />
              Bold <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="TextItalicIcon"
                lucide="ItalicIcon"
                phosphor="TextItalicIcon"
                remixicon="RiItalic"
                tabler="IconItalic"
              />
              Italic <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="TextUnderlineIcon"
                lucide="UnderlineIcon"
                phosphor="TextUnderlineIcon"
                remixicon="RiUnderline"
                tabler="IconUnderline"
              />
              Underline <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
            <MenubarCheckboxItem>Code</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Show Ruler</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Grid</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>Zoom In</MenubarItem>
            <MenubarItem inset>Zoom Out</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarInsert() {
  return (
    <Example title="Insert">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <IconPlaceholder
                  hugeicons="ImageIcon"
                  lucide="ImageIcon"
                  phosphor="ImageIcon"
                  remixicon="RiImageLine"
                  tabler="IconPhoto"
                />
                Media
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Image</MenubarItem>
                <MenubarItem>Video</MenubarItem>
                <MenubarItem>Audio</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <IconPlaceholder
                hugeicons="LinkIcon"
                lucide="LinkIcon"
                phosphor="LinkIcon"
                remixicon="RiLinksLine"
                tabler="IconLink"
              />
              Link <MenubarShortcut>⌘K</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="TableIcon"
                lucide="TableIcon"
                phosphor="TableIcon"
                remixicon="RiTableLine"
                tabler="IconTable"
              />
              Table
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Tools</MenubarTrigger>
          <MenubarContent className="w-44">
            <MenubarItem>
              <IconPlaceholder
                hugeicons="SearchIcon"
                lucide="SearchIcon"
                phosphor="MagnifyingGlassIcon"
                remixicon="RiSearchLine"
                tabler="IconSearch"
              />
              Find & Replace <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="Tick02Icon"
                lucide="CheckIcon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                tabler="IconCheck"
              />
              Spell Check
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarDestructive() {
  return (
    <Example title="Destructive">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent className="w-40">
            <MenubarItem>
              <IconPlaceholder
                hugeicons="FileIcon"
                lucide="FileIcon"
                phosphor="FileIcon"
                remixicon="RiFileLine"
                tabler="IconFile"
              />
              New File <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="FolderIcon"
                lucide="FolderIcon"
                phosphor="FolderIcon"
                remixicon="RiFolderLine"
                tabler="IconFolder"
              />
              Open Folder
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <IconPlaceholder
                hugeicons="DeleteIcon"
                lucide="TrashIcon"
                phosphor="TrashIcon"
                remixicon="RiDeleteBinLine"
                tabler="IconTrash"
              />
              Delete File <MenubarShortcut>⌘⌫</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="UserIcon"
                lucide="UserIcon"
                phosphor="UserIcon"
                remixicon="RiUserLine"
                tabler="IconUser"
              />
              Profile
            </MenubarItem>
            <MenubarItem>
              <IconPlaceholder
                hugeicons="SettingsIcon"
                lucide="SettingsIcon"
                phosphor="GearIcon"
                remixicon="RiSettingsLine"
                tabler="IconSettings"
              />
              Settings
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <IconPlaceholder
                hugeicons="LogoutIcon"
                lucide="LogOutIcon"
                phosphor="SignOutIcon"
                remixicon="RiLogoutBoxLine"
                tabler="IconLogout"
              />
              Sign out
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <IconPlaceholder
                hugeicons="DeleteIcon"
                lucide="TrashIcon"
                phosphor="TrashIcon"
                remixicon="RiDeleteBinLine"
                tabler="IconTrash"
              />
              Delete
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}

function MenubarInDialog() {
  return (
    <Example title="In Dialog">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Menubar Example</DialogTitle>
            <DialogDescription>
              Use the menubar below to see the menu options.
            </DialogDescription>
          </DialogHeader>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <IconPlaceholder
                    hugeicons="CopyIcon"
                    lucide="CopyIcon"
                    phosphor="CopyIcon"
                    remixicon="RiFileCopyLine"
                    tabler="IconCopy"
                  />
                  Copy
                </MenubarItem>
                <MenubarItem>
                  <IconPlaceholder
                    hugeicons="ScissorIcon"
                    lucide="ScissorsIcon"
                    phosphor="ScissorsIcon"
                    remixicon="RiScissorsLine"
                    tabler="IconCut"
                  />
                  Cut
                </MenubarItem>
                <MenubarItem>
                  <IconPlaceholder
                    hugeicons="ClipboardIcon"
                    lucide="ClipboardPasteIcon"
                    phosphor="ClipboardIcon"
                    remixicon="RiClipboardLine"
                    tabler="IconClipboard"
                  />
                  Paste
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>More Options</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Save Page...</MenubarItem>
                    <MenubarItem>Create Shortcut...</MenubarItem>
                    <MenubarItem>Name Window...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Developer Tools</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <IconPlaceholder
                    hugeicons="DeleteIcon"
                    lucide="TrashIcon"
                    phosphor="TrashIcon"
                    remixicon="RiDeleteBinLine"
                    tabler="IconTrash"
                  />
                  Delete
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DialogContent>
      </Dialog>
    </Example>
  )
}

function MenubarWithInset() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showUrls, setShowUrls] = React.useState(false)
  const [theme, setTheme] = React.useState("system")

  return (
    <Example title="With Inset">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-44">
            <MenubarGroup>
              <MenubarLabel>Actions</MenubarLabel>
              <MenubarItem>
                <IconPlaceholder
                  hugeicons="CopyIcon"
                  lucide="CopyIcon"
                  phosphor="CopyIcon"
                  remixicon="RiFileCopyLine"
                  tabler="IconCopy"
                />
                Copy
              </MenubarItem>
              <MenubarItem>
                <IconPlaceholder
                  hugeicons="ScissorIcon"
                  lucide="ScissorsIcon"
                  phosphor="ScissorsIcon"
                  remixicon="RiScissorsLine"
                  tabler="IconCut"
                />
                Cut
              </MenubarItem>
              <MenubarItem inset>Paste</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Appearance</MenubarLabel>
              <MenubarCheckboxItem
                checked={showBookmarks}
                inset
                onCheckedChange={setShowBookmarks}
              >
                Bookmarks
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={showUrls}
                inset
                onCheckedChange={setShowUrls}
              >
                Full URLs
              </MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Theme</MenubarLabel>
              <MenubarRadioGroup onValueChange={setTheme} value={theme}>
                <MenubarRadioItem inset value="light">
                  Light
                </MenubarRadioItem>
                <MenubarRadioItem inset value="dark">
                  Dark
                </MenubarRadioItem>
                <MenubarRadioItem inset value="system">
                  System
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger inset>More Options</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>Save Page...</MenubarItem>
                  <MenubarItem>Create Shortcut...</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Example>
  )
}
