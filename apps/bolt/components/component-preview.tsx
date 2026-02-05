import Image from "next/image"
import * as React from "react"
import { ComponentPreviewTabs } from "@/components/component-preview-tabs"
import { ComponentSource } from "@/components/component-source"
import { getRegistryComponent } from "@/lib/registry"

export function ComponentPreview({
  name,
  type,
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  styleName = "new-york-v4",
  direction = "ltr",
  caption,
  ...props
}: React.ComponentProps<"div"> & {
  name: string
  styleName?: string
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
  chromeLessOnMobile?: boolean
  previewClassName?: string
  direction?: "ltr" | "rtl"
  caption?: string
}) {
  if (type === "block") {
    const content = (
      <div className="relative mt-6 aspect-[4/2.5] w-full overflow-hidden rounded-xl border md:-mx-1">
        <Image
          alt={name}
          className="absolute top-0 left-0 z-20 w-[970px] max-w-none bg-background sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
          height={900}
          src={`/r/styles/new-york-v4/${name}-light.png`}
          width={1440}
        />
        <Image
          alt={name}
          className="absolute top-0 left-0 z-20 hidden w-[970px] max-w-none bg-background sm:w-[1280px] md:hidden dark:block md:dark:hidden"
          height={900}
          src={`/r/styles/new-york-v4/${name}-dark.png`}
          width={1440}
        />
        <div className="absolute inset-0 hidden w-[1600px] bg-background md:block">
          <iframe className="size-full" src={`/view/${styleName}/${name}`} />
        </div>
      </div>
    )

    if (caption) {
      return (
        <figure className="flex flex-col gap-4">
          {content}
          <figcaption className="text-center text-muted-foreground text-sm">
            {caption}
          </figcaption>
        </figure>
      )
    }

    return content
  }

  const Component = getRegistryComponent(name, styleName)

  if (!Component) {
    return (
      <p className="mt-6 text-muted-foreground text-sm">
        Component{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    )
  }

  const content = (
    <ComponentPreviewTabs
      align={align}
      chromeLessOnMobile={chromeLessOnMobile}
      className={className}
      component={React.createElement(Component)}
      direction={direction}
      hideCode={hideCode}
      previewClassName={previewClassName}
      source={
        <ComponentSource
          collapsible={false}
          name={name}
          styleName={styleName}
        />
      }
      sourcePreview={
        <ComponentSource
          collapsible={false}
          maxLines={3}
          name={name}
          styleName={styleName}
        />
      }
      styleName={styleName}
      {...props}
    />
  )

  if (caption) {
    return (
      <figure
        className="flex flex-col data-[hide-code=true]:gap-4"
        data-hide-code={hideCode}
      >
        {content}
        <figcaption className="-mt-8 text-center text-muted-foreground text-sm data-[hide-code=true]:mt-0">
          {caption}
        </figcaption>
      </figure>
    )
  }

  return content
}
