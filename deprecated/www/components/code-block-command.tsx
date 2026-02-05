"use client"

import { CheckIcon, ClipboardIcon } from "lucide-react"
import * as React from "react"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { useConfig } from "@/hooks/use-config"
import { Tabs } from "@/registry/default/ui/tabs"
import { Button } from "@/registry/new-york/ui/button"
import { TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import type { NpmCommands } from "@/types/unist"

export function CodeBlockCommand({
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
}: React.ComponentProps<"pre"> & NpmCommands) {
  const [config, setConfig] = useConfig()
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const packageManager = config.packageManager || "pnpm"
  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpmCommand__,
      npm: __npmCommand__,
      yarn: __yarnCommand__,
      bun: __bunCommand__,
    }
  }, [__npmCommand__, __pnpmCommand__, __yarnCommand__, __bunCommand__])

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager]

    if (!command) {
      return
    }

    copyToClipboardWithMeta(command, {
      name: "copy_npm_command",
      properties: {
        command,
        pm: packageManager,
      },
    })
    setHasCopied(true)
  }, [packageManager, tabs])

  return (
    <div className="relative mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900">
      <Tabs
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
          })
        }}
        value={packageManager}
      >
        <div className="flex items-center justify-between border-zinc-800 border-b bg-zinc-900 px-3 pt-2.5">
          <TabsList className="h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1">
            {Object.entries(tabs).map(([key, value]) => {
              return (
                <TabsTrigger
                  className="rounded-none border-transparent border-b bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
                  key={key}
                  value={key}
                >
                  {key}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>
        <div className="overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent className="mt-0" key={key} value={key}>
                <pre className="px-4 py-5">
                  <code
                    className="relative font-mono text-sm leading-none"
                    data-language="bash"
                  >
                    {value}
                  </code>
                </pre>
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
      <Button
        className="absolute top-2 right-2.5 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3"
        onClick={copyCommand}
        size="icon"
        variant="ghost"
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
      </Button>
    </div>
  )
}
