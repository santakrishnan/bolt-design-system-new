"use client"

import { IconAlertCircle } from "@tabler/icons-react"
import Link from "next/link"
import * as React from "react"
import {
  LanguageProvider,
  LanguageSelector,
  type Translations,
  useLanguageContext,
  useTranslation,
} from "@/components/language-selector"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/examples/base/ui/popover"
import { cn } from "@/lib/utils"
import { DirectionProvider as BaseDirectionProvider } from "@/registry/bases/base/ui/direction"
import { DirectionProvider as RadixDirectionProvider } from "@/registry/bases/radix/ui/direction"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  sourcePreview,
  direction = "ltr",
  styleName,
  ...props
}: React.ComponentProps<"div"> & {
  previewClassName?: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
  sourcePreview?: React.ReactNode
  direction?: "ltr" | "rtl"
  styleName?: string
}) {
  const [isMobileCodeVisible, setIsMobileCodeVisible] = React.useState(false)
  const base = styleName?.split("-")[0]

  return (
    <div
      className={cn(
        "group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-xl border",
        className
      )}
      data-slot="component-preview"
      {...props}
    >
      {direction === "rtl" ? (
        <LanguageProvider defaultLanguage="ar">
          <div className="flex h-16 items-center border-b px-4">
            <RtlLanguageSelector />
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    className="ml-auto size-7"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <IconAlertCircle />
                    <span className="sr-only">Toggle</span>
                  </Button>
                }
              />
              <PopoverContent
                align="end"
                className="w-56 text-xs"
                side="bottom"
              >
                <div>
                  I used AI to translate the text for demonstration purposes.
                  It&apos;s not perfect and may contain errors.
                </div>
                <Separator className="-mx-2.5 w-auto!" />
                <div data-lang="ar">
                  لقد استخدمت الذكاء الاصطناعي لترجمة النص للأغراض التجريبية
                  فقط. قد لا تكون الترجمة دقيقة وقد تحتوي على أخطاء.
                </div>
                <Separator className="-mx-2.5 w-auto!" />
                <div data-lang="he">
                  השתמשתי בבינה מלאכותית כדי לתרגם את הטקסט למטרות הדגמה. זה לא
                  מושלם ויכול להכיל שגיאות.
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <PreviewWrapper
            align={align}
            chromeLessOnMobile={chromeLessOnMobile}
            previewClassName={previewClassName}
          >
            <DirectionProviderWrapper base={base}>
              {component}
            </DirectionProviderWrapper>
          </PreviewWrapper>
        </LanguageProvider>
      ) : (
        <DirectionProviderWrapper base={base} dir="ltr">
          <PreviewWrapper
            align={align}
            chromeLessOnMobile={chromeLessOnMobile}
            dir="ltr"
            previewClassName={previewClassName}
          >
            {component}
          </PreviewWrapper>
        </DirectionProviderWrapper>
      )}
      {!hideCode && (
        <div
          className="[&_[data-rehype-pretty-code-figure]]:!m-0 relative overflow-hidden data-[mobile-code-visible=true]:**:data-[slot=copy-button]:flex **:data-[slot=copy-button]:right-4 **:data-[slot=copy-button]:hidden [&_[data-rehype-pretty-code-figure]]:rounded-t-none [&_[data-rehype-pretty-code-figure]]:border-t [&_pre]:max-h-72"
          data-mobile-code-visible={isMobileCodeVisible}
          data-slot="code"
        >
          {isMobileCodeVisible ? (
            <>
              {direction === "rtl" && (
                <div className="no-scrollbar relative z-10 overflow-x-auto border-t bg-code p-6 font-mono text-muted-foreground text-sm">
                  <pre>{`// You will notice this example uses dir and data-lang attributes.
// This is because this site is not RTL by default.
// In your application, you won't need these.`}</pre>
                  <span>
                    {"// See the "}
                    <Link
                      className="underline underline-offset-4"
                      href="/docs/rtl"
                    >
                      RTL guide
                    </Link>
                    {" for more information."}
                  </span>
                </div>
              )}
              {source}
            </>
          ) : (
            <div className="relative">
              {sourcePreview}
              <div className="absolute inset-0 flex items-center justify-center pb-4">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)",
                  }}
                />
                <Button
                  className="relative z-10 rounded-lg bg-background text-foreground shadow-none hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted"
                  onClick={() => {
                    setIsMobileCodeVisible(true)
                  }}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  View Code
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const directionTranslations: Translations<Record<string, never>> = {
  en: {
    dir: "ltr",
    values: {},
  },
  ar: {
    dir: "rtl",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
}

function RtlLanguageSelector({ className }: { className?: string }) {
  const context = useLanguageContext()
  if (!context) {
    return null
  }
  return (
    <LanguageSelector
      className={className}
      onValueChange={context.setLanguage}
      value={context.language}
    />
  )
}

function PreviewWrapper({
  align,
  chromeLessOnMobile,
  previewClassName,
  dir: explicitDir,
  children,
}: {
  align: "center" | "start" | "end"
  chromeLessOnMobile: boolean
  previewClassName?: string
  dir?: "ltr" | "rtl"
  children: React.ReactNode
}) {
  // useTranslation handles the case when there's no LanguageProvider context.
  // It will fall back to local state with defaultLanguage.
  const translation = useTranslation(directionTranslations, "ar")
  const dir = explicitDir ?? translation.dir

  return (
    <div
      data-lang={dir === "rtl" ? translation.language : undefined}
      data-slot="preview"
      dir={dir}
    >
      <div
        className={cn(
          "preview relative flex h-72 w-full justify-center p-10 data-[chromeless=true]:h-auto data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center data-[chromeless=true]:p-0",
          previewClassName
        )}
        data-align={align}
        data-chromeless={chromeLessOnMobile}
      >
        {children}
      </div>
    </div>
  )
}

function DirectionProviderWrapper({
  base,
  dir: explicitDir,
  children,
}: {
  base?: string
  dir?: "ltr" | "rtl"
  children: React.ReactNode
}) {
  // useTranslation handles the case when there's no LanguageProvider context.
  // It will fall back to local state with defaultLanguage.
  const translation = useTranslation(directionTranslations, "ar")
  const dir = explicitDir ?? translation.dir

  if (base === "base") {
    return (
      <BaseDirectionProvider direction={dir}>{children}</BaseDirectionProvider>
    )
  }

  return <RadixDirectionProvider dir={dir}>{children}</RadixDirectionProvider>
}
