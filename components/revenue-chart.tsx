"use client";

import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 },
  { month: "Jul", revenue: 7490 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#fb923c", // orange-400
  },
};

export const RevenueChart = () => {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* ✅ Gradient */}
          <defs>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fb923c" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            className="text-[10px]"
          />

          {/* Shadcn Tooltip */}
          <ChartTooltip
            defaultIndex={4}
            position={{ x: 20, y: 20 }} // 👈 adjust based on your chart width
            cursor={{ stroke: "#e5e5e5", strokeWidth: 1 }}
            content={<ChartTooltipContent indicator="line" />}
          />

          {/* Gradient Area */}
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#fb923c"
            strokeWidth={2}
            fill="url(#orangeGradient)"
            dot={false}
            animationBegin={0}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
