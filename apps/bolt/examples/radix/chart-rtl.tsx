"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  type Translations,
  useTranslation,
} from "@/components/language-selector"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/examples/radix/ui-rtl/chart"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      desktop: "Desktop",
      mobile: "Mobile",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      january: "يناير",
      february: "فبراير",
      march: "مارس",
      april: "أبريل",
      may: "مايو",
      june: "يونيو",
      desktop: "سطح المكتب",
      mobile: "الجوال",
    },
  },
  he: {
    dir: "rtl",
    values: {
      january: "ינואר",
      february: "פברואר",
      march: "מרץ",
      april: "אפריל",
      may: "מאי",
      june: "יוני",
      desktop: "מחשב",
      mobile: "נייד",
    },
  },
}

const chartData = [
  { month: "january", desktop: 186, mobile: 80 },
  { month: "february", desktop: 305, mobile: 200 },
  { month: "march", desktop: 237, mobile: 120 },
  { month: "april", desktop: 73, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
  { month: "june", desktop: 214, mobile: 140 },
]

export function ChartRtl() {
  const { t, dir } = useTranslation(translations, "ar")

  const chartConfig = {
    desktop: {
      label: t.desktop,
      color: "var(--chart-2)",
    },
    mobile: {
      label: t.mobile,
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer className="min-h-[200px] w-full" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid
          orientation={dir === "rtl" ? "right" : "left"}
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="month"
          reversed={dir === "rtl"}
          tickFormatter={(value) =>
            (t[value as keyof typeof t] as string).slice(0, 3)
          }
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelFormatter={(value) => t[value as keyof typeof t] as string}
            />
          }
          labelClassName="w-32"
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
