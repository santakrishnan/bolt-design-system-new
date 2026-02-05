import { IconRss } from "@tabler/icons-react"
import Link from "next/link"
import { OpenInV0Cta } from "@/components/open-in-v0-cta"
import { Button } from "@/examples/radix/ui/button"

import { type ChangelogPageData, getChangelogPages } from "@/lib/changelog"
import { absoluteUrl } from "@/lib/utils"
import { mdxComponents } from "@/mdx-components"

export const revalidate = false
export const dynamic = "force-static"

export function generateMetadata() {
  return {
    title: "Changelog",
    description: "Latest updates and announcements.",
    openGraph: {
      title: "Changelog",
      description: "Latest updates and announcements.",
      type: "article",
      url: absoluteUrl("/docs/changelog"),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            "Changelog"
          )}&description=${encodeURIComponent(
            "Latest updates and announcements."
          )}`,
        },
      ],
    },
  }
}

export default function ChangelogPage() {
  const pages = getChangelogPages()
  const latestPages = pages.slice(0, 5)
  const olderPages = pages.slice(5)

  return (
    <div
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
      data-slot="docs"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full min-w-0 max-w-[40rem] flex-1 flex-col gap-6 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="scroll-m-24 font-semibold text-4xl tracking-tight sm:text-3xl">
                Changelog
              </h1>
              <Button asChild size="sm" variant="secondary">
                <a href="/rss.xml" rel="noopener noreferrer" target="_blank">
                  <IconRss />
                  RSS
                </a>
              </Button>
            </div>
            <p className="text-[1.05rem] text-muted-foreground sm:text-balance sm:text-base md:max-w-[80%]">
              Latest updates and announcements.
            </p>
          </div>
          <div className="w-full flex-1 pb-16 sm:pb-0">
            {latestPages.map((page) => {
              const data = page.data as ChangelogPageData
              const MDX = page.data.body

              return (
                <article className="mb-12 border-b pb-12" key={page.url}>
                  <h2 className="font-heading font-semibold text-xl tracking-tight">
                    {data.title}
                  </h2>
                  <div className="prose-changelog mt-6 *:first:mt-0">
                    <MDX components={mdxComponents} />
                  </div>
                </article>
              )
            })}
            {olderPages.length > 0 && (
              <div className="mb-24 scroll-mt-24" id="more-updates">
                <h2 className="mb-6 font-heading font-semibold text-xl tracking-tight">
                  More Updates
                </h2>
                <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
                  {olderPages.map((page) => {
                    const data = page.data as ChangelogPageData
                    const [date, ...titleParts] = data.title.split(" - ")
                    const title = titleParts.join(" - ")
                    return (
                      <Link
                        className="flex w-full flex-col rounded-xl bg-surface px-4 py-3 text-surface-foreground transition-colors hover:bg-surface/80"
                        href={page.url}
                        key={page.url}
                      >
                        <span className="text-muted-foreground text-xs">
                          {date}
                        </span>
                        <span className="font-medium text-sm">{title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 lg:flex">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
          <div className="flex flex-col gap-2 p-4 pt-0 text-sm">
            <p className="sticky top-0 h-6 bg-background font-medium text-muted-foreground text-xs">
              On This Page
            </p>
            {latestPages.map((page) => {
              const data = page.data as ChangelogPageData
              return (
                <Link
                  className="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground"
                  href={page.url}
                  key={page.url}
                >
                  {data.title}
                </Link>
              )
            })}
            {olderPages.length > 0 && (
              <a
                className="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground"
                href="#more-updates"
              >
                More Updates
              </a>
            )}
          </div>
        </div>
        <div className="hidden flex-1 flex-col gap-6 px-6 xl:flex">
          <OpenInV0Cta />
        </div>
      </div>
    </div>
  )
}
