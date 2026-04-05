"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

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

const INTERVAL = 4000;

export default function PersonaTabs() {
  const [activeTab, setActiveTab] = useState(personas[0].value);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSwitch = () => {
    stopAutoSwitch();

    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = personas.findIndex((p) => p.value === prev);
        const nextIndex = (currentIndex + 1) % personas.length;
        return personas[nextIndex].value;
      });
    }, INTERVAL);
  };

  const stopAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSwitch();
    return () => stopAutoSwitch();
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    startAutoSwitch();
  };

  const activePersona = personas.find((p) => p.value === activeTab);

  return (
    <div className="flex-5 w-full max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        
        {/* Tabs */}
        <TabsList className="grid grid-cols-4 w-full">
          {personas.map((p) => (
            <TabsTrigger key={p.value} value={p.value}>
              {p.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Animated Content */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <Card className="overflow-hidden p-0">
                <CardContent className="p-3 space-y-4">
                  
                  {/* Image */}
                  <div className="relative w-full h-55 rounded-xl overflow-hidden bg-neutral-100">
                    {/* <Image
                      src={activePersona?.image || ""}
                      alt={activePersona?.label || ""}
                      fill
                      className="object-cover"
                    /> */}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-muted-foreground font-medium px-1 leading-relaxed">
                    {activePersona?.text}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}