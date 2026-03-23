"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Campaign A", value: 320, fill: "#fb923c" },
  { name: "Campaign B", value: 260, fill: "#fb923c" },
  { name: "Campaign C", value: 180, fill: "#fdba74" },
  { name: "Campaign D", value: 140, fill: "#fed7aa" },
  { name: "Other", value: 130, fill: "#ffedd5" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
};

export const DonutChart = () => {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  const CenterLabel = React.useMemo(() => {
    return ({ viewBox }: any) => {
      if (!viewBox || !("cx" in viewBox && "cy" in viewBox)) return null;
      return (
        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-semibold">
            {total}
          </tspan>
          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 18} className="fill-muted-foreground text-xs">
            Total
          </tspan>
        </text>
      );
    };
  }, [total]);

  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <PieChart>
        {/* Tooltip */}
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius="50%"
          strokeWidth={3}
          isAnimationActive={true}
          animationBegin={0}       // start immediately
        >
          <Label content={CenterLabel} />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};