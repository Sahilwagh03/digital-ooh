"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const personas = [
  {
    value: "ceo",
    label: "CEO",
    image: "/dashboard-ceo.png",
    text: "Track revenue, campaigns, and eliminate leakage with AI insights.",
  },
  {
    value: "sales",
    label: "Sales",
    image: "/dashboard-sales.png",
    text: "Plan campaigns in 30 seconds and boost bookings with AI.",
  },
  {
    value: "finance",
    label: "Finance",
    image: "/dashboard-finance.png",
    text: "Real-time dashboards with predictive cash flow and reconciliation.",
  },
  {
    value: "operations",
    label: "Ops",
    image: "/dashboard-ops.png",
    text: "Verify execution with proof, GPS tagging, and reports.",
  },
];

export default function PersonaTabs() {
  return (
    <div className="flex-5 w-full max-w-4xl mx-auto">
      <Tabs defaultValue="ceo" className="w-full">
        
        {/* Tabs */}
        <TabsList className="grid grid-cols-4 w-full">
          {personas.map((p) => (
            <TabsTrigger key={p.value} value={p.value}>
              {p.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content */}
        {personas.map((p) => (
          <TabsContent key={p.value} value={p.value}>
            <Card className="overflow-hidden p-0">
              <CardContent className="p-3 space-y-4">
                
                {/* Image */}
                <div className="relative w-full h-55 rounded-xl overflow-hidden bg-neutral-100">
                  {/* <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    className="object-cover"
                  /> */}
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground font-medium px-1 leading-relaxed">
                  {p.text}
                </p>

              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}