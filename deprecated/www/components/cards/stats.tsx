"use client"

import { Bar, BarChart, Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { type ChartConfig, ChartContainer } from "@/registry/new-york/ui/chart"

const data = [
  {
    revenue: 10_400,
    subscription: 240,
  },
  {
    revenue: 14_405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11_244,
    subscription: 278,
  },
  {
    revenue: 26_475,
    subscription: 189,
  },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  subscription: {
    label: "Subscriptions",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function CardsStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-normal text-sm">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="font-bold text-2xl">$15,231.89</div>
          <p className="text-muted-foreground text-xs">
            +20.1% from last month
          </p>
          <ChartContainer className="h-[80px] w-full" config={chartConfig}>
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
                }}
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                type="monotone"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-normal text-sm">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-2xl">+2350</div>
          <p className="text-muted-foreground text-xs">
            +180.1% from last month
          </p>
          <ChartContainer className="mt-2 h-[80px] w-full" config={chartConfig}>
            <BarChart data={data}>
              <Bar
                dataKey="subscription"
                fill="var(--color-subscription)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
