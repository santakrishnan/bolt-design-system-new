import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"

import "@/styles/mdx.css"
import { ChevronRight, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Balancer from "react-wrap-balancer"
import { Mdx } from "@/components/mdx-components"
import { OpenInV0Cta } from "@/components/open-in-v0-cta"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { badgeVariants } from "@/registry/new-york/ui/badge"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="mb-4 flex items-center space-x-1 text-muted-foreground text-sm leading-none">
          <Link className="truncate" href="/docs">
            Docs
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 font-bold text-3xl tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
                href={doc.links.doc}
                rel="noreferrer"
                target="_blank"
              >
                Docs
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
                href={doc.links.api}
                rel="noreferrer"
                target="_blank"
              >
                API Reference
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pt-8 pb-12">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            {doc.toc && <DashboardTableOfContents toc={toc} />}
            <OpenInV0Cta className="mt-6 max-w-[80%]" />
          </div>
        </div>
      </div>
    </main>
  )
}
