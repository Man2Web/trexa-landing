import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  traditional: {
    label: "traditional",
    color: "#2563eb",
  },
  trexa: {
    label: "trexa",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

interface CharProps {
  sliderValue: number[];
}

export function Chart({ sliderValue }: CharProps) {
  const chartData = [
    {
      month: "Cost",
      traditional: sliderValue[0] * 4,
      trexa: sliderValue[0] * 2,
    },
  ];

  console.log(sliderValue);

  return (
    <ChartContainer config={chartConfig} className="min-h-[150px] md:min-h-[300px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="Cost"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="traditional" fill="var(--color-traditional)" radius={4} />
        <Bar dataKey="trexa" fill="var(--color-trexa)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
