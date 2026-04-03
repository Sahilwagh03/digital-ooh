"use client";

import {
  LayoutDashboard,
  BarChart3,
  Calendar,
  Bell,
  Settings,
  Search,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 3200 },
  { name: "Mar", value: 2800 },
  { name: "Apr", value: 4100 },
  { name: "May", value: 3800 },
  { name: "Jun", value: 5200 },
];

export default function DashboardMock() {
  return (
    <div className="w-[1150px] h-[680px] bg-white dark:bg-neutral-900 border rounded-xl shadow-xl flex overflow-hidden">

      {/* Sidebar */}
      <div className="w-[72px] border-r bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center py-4 gap-6">
        <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center text-sm font-semibold">
          S
        </div>

        <div className="flex flex-col gap-6 mt-6 text-neutral-400">
          <LayoutDashboard className="w-5 h-5 text-black dark:text-white" />
          <BarChart3 className="w-5 h-5" />
          <Calendar className="w-5 h-5" />
          <Bell className="w-5 h-5" />
          <Settings className="w-5 h-5" />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="h-[56px] border-b px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold">Dashboard</div>
            <div className="text-xs text-muted-foreground">Overview</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-xs text-muted-foreground">
              <Search className="w-3 h-3" /> Search
            </div>
            <div className="text-xs text-muted-foreground">Today</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Revenue", value: "₹8.0L", sub: "+14%" },
              { label: "Bookings", value: "5", sub: "2 proposals" },
              { label: "Campaigns", value: "20", sub: "5 active" },
              { label: "Units", value: "11", sub: "17 available" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">{item.label}</span>
                <span className="text-xl font-semibold tracking-tight">{item.value}</span>
                <span className="text-xs text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-6 flex-1">

            {/* Chart */}
            <Card className="col-span-2 border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#111"
                      fillOpacity={0.04}
                      fill="#111"
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Activity</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 text-xs">
                {[
                  "Campaign launched",
                  "New booking added",
                  "Payment received",
                  "Inventory updated",
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item}</span>
                    <span className="text-[10px] text-muted-foreground">2h</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Table */}
            <Card className="col-span-3 border flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Recent Campaigns</CardTitle>
              </CardHeader>

              <CardContent className="text-xs">
                <div className="grid grid-cols-4 py-2 border-b text-muted-foreground">
                  <span>Name</span>
                  <span>Status</span>
                  <span>Budget</span>
                  <span>Start</span>
                </div>

                {[
                  ["Summer Sale", "Active", "₹1.2L", "12 Mar"],
                  ["Mall Ads", "Paused", "₹80K", "10 Mar"],
                  ["Metro Boards", "Active", "₹2.4L", "08 Mar"],
                  ["Airport Screens", "Draft", "₹60K", "05 Mar"],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 py-3 border-b last:border-none">
                    {row.map((cell, j) => (
                      <span key={j} className="text-foreground">{cell}</span>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
