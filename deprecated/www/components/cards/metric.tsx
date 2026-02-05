"use client"

import { Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/new-york/ui/chart"

const data = [
  {
    average: 400,
    today: 240,
  },
  {
    average: 300,
    today: 139,
  },
  {
    average: 200,
    today: 980,
  },
  {
    average: 278,
    today: 390,
  },
  {
    average: 189,
    today: 480,
  },
  {
    average: 239,
    today: 380,
  },
  {
    average: 349,
    today: 430,
  },
]

const chartConfig = {
  today: {
    label: "Today",
    color: "hsl(var(--primary))",
  },
  average: {
    label: "Average",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function CardsMetric() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Minutes</CardTitle>
        <CardDescription>
          Your exercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer className="w-full md:h-[200px]" config={chartConfig}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Line
              activeDot={{
                r: 6,
                fill: "var(--color-average)",
              }}
              dataKey="average"
              stroke="var(--color-average)"
              strokeOpacity={0.5}
              strokeWidth={2}
              type="monotone"
            />
            <Line
              activeDot={{
                r: 8,
                style: { fill: "var(--color-today)" },
              }}
              dataKey="today"
              stroke="var(--color-today)"
              strokeWidth={2}
              type="monotone"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
