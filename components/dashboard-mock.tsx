"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutDashboard,
  BarChart3,
  CalendarDays,
  Bell,
  Users,
  Settings,
} from "lucide-react";
import { RevenueChart } from "./revenue-chart";
import Logo from "./logo";

const data = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 250000 },
  { month: "Apr", revenue: 320000 },
  { month: "May", revenue: 410000 },
  { month: "Jun", revenue: 520000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "",
  },
};

export default function DashboardHeroMockup() {
  return (
    <div className="w-full bg-background rounded-tr-3xl rounded-tl-3xl shadow-2xl overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-20 min-w-20 border-r flex flex-col items-center py-6 gap-6">
        <div className="bg-orange-400 p-2 rounded-lg">
          <Logo className="w-6 h-6 text-white" />
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <LayoutDashboard className="w-5 h-5 text-orange-400" />
          <BarChart3 className="w-5 h-5 text-muted-foreground" />
          <CalendarDays className="w-5 h-5 text-muted-foreground" />
          <Users className="w-5 h-5 text-muted-foreground" />
          <Bell className="w-5 h-5 text-muted-foreground" />
          <Settings className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 max-h-125 md:max-h-none overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold">Dashboard</h1>
          <Select defaultValue="today">
            <SelectTrigger className="w-27.5 sm:w-30">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹48.2L</div>
              <Badge className="mt-2 bg-primary/10 text-primary">+32%</Badge>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-sm text-muted-foreground">+120 today</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96</div>
              <p className="text-sm text-muted-foreground">32 active</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Units Booked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,640</div>
              <p className="text-sm text-muted-foreground">480 available</p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1">
          {/* Chart */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Revenue Growth</CardTitle>
            </CardHeader>
            <CardContent className="h-55 sm:h-65">
              <RevenueChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
