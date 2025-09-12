"use client"

import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import Image from "next/image"

export const description = "A radial chart"

const chartData = [
    { browser: "boys", count: 50, fill: "var(--color-boys)" },
    { browser: "girls", count: 50, fill: "var(--color-girls)" },
    { browser: "total", count: 106, fill: "var(--color-total)" },
]

const chartConfig = {
    boys: {
        label: "Boys",
        color: "var(--color-lama-sky)",
    },
    girls: {
        label: "Girls",
        color: "var(--color-lama-yellow)",
    },
    total: {
        label: "Total",
        color: "var(--color-white)",
    },
} satisfies ChartConfig

export default function CountChart() {
    return (
        <Card className="flex flex-col h-[450px]">
            <CardHeader className="items-center pb-0">
                <CardTitle>Students</CardTitle>
                <CardAction>
                    <Image src="/moreDark.png" alt="" width={20} height={20} />
                </CardAction>
            </CardHeader>
            <CardContent className="relative px-0 w-full h-[75%]">
                <ChartContainer
                    config={chartConfig}
                    className="w-full h-[100%]"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart data={chartData} innerRadius="40%" outerRadius="100%">
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel nameKey="browser" />}
                            />
                            <RadialBar dataKey="count" background />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </ChartContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </CardContent>
            <CardFooter className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lama-sky rounded-full"></div>
                    <h1 className="font-bold">1234</h1>
                    <h2 className="text-xs text-gray-500">Boys (55%)</h2>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 bg-lama-yellow rounded-full"></div>
                    <h1 className="font-bold">1234</h1>
                    <h2 className="text-xs text-gray-500">Girls (55%)</h2>
                </div>
            </CardFooter>
        </Card>
    )
}
