"use client"

import {
  Check,
  ChevronRight,
  Clipboard,
  File,
  Folder,
  Fullscreen,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import type { ImperativePanelHandle } from "react-resizable-panels"
import type { registryItemFileSchema, registryItemSchema } from "shadcn/schema"
import type { z } from "zod"
import { V0Button } from "@/components/v0-button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { trackEvent } from "@/lib/events"
import type {
  createFileTreeForRegistryItemFiles,
  FileTree,
} from "@/lib/registry"
import { Button } from "@/registry/new-york/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/new-york/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york/ui/toggle-group"
import type { Style } from "@/registry/registry-styles"

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  style?: Style["name"]
  setStyle: (style: Style["name"]) => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle> | null
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
}

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.")
  }
  return context
}

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview")
  const [style, setStyle] =
    React.useState<BlockViewerContext["style"]>("new-york")
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null)
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null)

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        style,
        setStyle,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
      }}
    >
      <div
        className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4"
        data-view={view}
        id={item.name}
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

function BlockViewerToolbar() {
  const { setView, item, resizablePanelRef, style } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  return (
    <div className="flex w-full items-center gap-2 md:pr-[14px]">
      <Tabs
        className="hidden lg:flex"
        defaultValue="preview"
        onValueChange={(value) => setView(value as "preview" | "code")}
      >
        <TabsList className="h-7 items-center rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
          <TabsTrigger
            className="h-[1.45rem] rounded-sm px-2 text-xs"
            value="preview"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            className="h-[1.45rem] rounded-sm px-2 text-xs"
            value="code"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator className="mx-2 hidden h-4 lg:flex" orientation="vertical" />
      <a
        className="font-medium text-sm underline-offset-2 hover:underline"
        href={`#${item.name}`}
      >
        {item.description}
      </a>
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
          <ToggleGroup
            defaultValue="100"
            onValueChange={(value) => {
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(Number.parseInt(value))
              }
            }}
            type="single"
          >
            <ToggleGroupItem
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Desktop"
              value="100"
            >
              <Monitor className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Tablet"
              value="60"
            >
              <Tablet className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Mobile"
              value="30"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <Separator className="h-4" orientation="vertical" />
            <Button
              asChild
              className="h-[22px] w-[22px] rounded-sm p-0"
              size="icon"
              title="Open in New Tab"
              variant="ghost"
            >
              <Link href={`/view/styles/${style}/${item.name}`} target="_blank">
                <span className="sr-only">Open in New Tab</span>
                <Fullscreen className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </ToggleGroup>
        </div>
        <Separator className="mx-1 hidden h-4 md:flex" orientation="vertical" />
        <div className="flex h-7 items-center gap-1 rounded-md border p-[2px]">
          <Button
            className="hidden h-[22px] w-auto gap-1 rounded-sm px-2 md:flex lg:w-auto"
            onClick={() => {
              copyToClipboard(`npx shadcn@latest add ${item.name}`)
            }}
            size="sm"
            variant="ghost"
          >
            {isCopied ? <Check /> : <Terminal />}
            <span className="hidden lg:inline">npx shadcn add {item.name}</span>
          </Button>
        </div>
        <Separator className="mx-1 hidden h-4 xl:flex" orientation="vertical" />
        <V0Button
          className="hidden shadow-none sm:flex"
          id={`v0-button-${item.name}`}
          name={`${item.name}`}
        />
      </div>
    </div>
  )
}

function BlockViewerView() {
  const { item, style, resizablePanelRef } = useBlockViewer()

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup className="relative z-10" direction="horizontal">
          <ResizablePanel
            className="relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto"
            defaultSize={100}
            minSize={30}
            ref={resizablePanelRef}
          >
            <Image
              alt={item.name}
              className="object-cover md:hidden dark:hidden md:dark:hidden"
              data-block={item.name}
              height={900}
              src={`/r/styles/${style}/${item.name}-light.png`}
              width={1440}
            />
            <Image
              alt={item.name}
              className="hidden object-cover md:hidden dark:block md:dark:hidden"
              data-block={item.name}
              height={900}
              src={`/r/styles/${style}/${item.name}-dark.png`}
              width={1440}
            />
            <iframe
              className="relative z-20 hidden w-full bg-background md:block"
              height={item.meta?.iframeHeight ?? 930}
              src={`/view/styles/${style}/${item.name}`}
            />
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer()

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile)
  }, [highlightedFiles, activeFile])

  if (!file) {
    return null
  }

  return (
    <div className="mr-[14px] flex overflow-hidden rounded-xl bg-zinc-950 text-white group-data-[view=preview]/block-view-wrapper:hidden md:h-[--height]">
      <div className="w-[280px]">
        <BlockViewerFileTree />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 items-center gap-2 border-zinc-700 border-b bg-zinc-900 px-4 font-medium text-sm">
          <File className="size-4" />
          {file.target}
          <div className="ml-auto flex items-center gap-2">
            <BlockCopyCodeButton />
          </div>
        </div>
        <div
          className="[&_pre]:!bg-transparent relative flex-1 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:w-10 after:bg-zinc-950 [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-1 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:pt-4 [&_pre]:pb-20 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          data-rehype-pretty-code-fragment
          key={file?.path}
        />
      </div>
    </div>
  )
}

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer()

  if (!tree) {
    return null
  }

  return (
    <SidebarProvider className="!min-h-full flex flex-col">
      <Sidebar
        className="w-full flex-1 border-zinc-700 border-r bg-zinc-900 text-white"
        collapsible="none"
      >
        <SidebarGroupLabel className="h-12 rounded-none border-zinc-700 border-b px-4 text-sm text-white">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {tree.map((file, index) => (
                <Tree index={1} item={file} key={index} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          className="whitespace-nowrap rounded-none pl-[--index] hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white"
          data-index={index}
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="h-4 w-4" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="whitespace-nowrap rounded-none pl-[--index] hover:bg-zinc-700 hover:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white data-[state=open]:hover:bg-zinc-700 data-[state=open]:hover:text-white"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="h-4 w-4 transition-transform" />
            <Folder className="h-4 w-4" />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree index={index + 1} item={subItem} key={key} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile)
  }, [activeFile, item.files])

  const content = file?.content

  if (!content) {
    return null
  }

  return (
    <Button
      className="h-7 w-7 shrink-0 rounded-lg p-0 hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white [&>svg]:size-3"
      onClick={() => {
        copyToClipboard(content)
        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file.path,
          },
        })
      }}
      variant="ghost"
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  ...props
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles">) {
  return (
    <BlockViewerProvider
      highlightedFiles={highlightedFiles}
      item={item}
      tree={tree}
      {...props}
    >
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
    </BlockViewerProvider>
  )
}

export { BlockViewer }
