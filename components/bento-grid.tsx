"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { RevenueChart } from "./revenue-chart";
import { BookingTable } from "./booking-table";
import { bookings } from "@/lib/booking-data";
import { DonutChart } from "./donut";
import { CampaignLifecycle } from "./workflow";

const BentoGrid = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large Primary Card */}
          <Card className="md:col-span-2">
            <CardHeader
              title="AI-Powered Inventory Management"
              desc="Manage physical and digital hoardings with real-time availability tracking, location intelligence, and smart DOOH allocation."
              badge="AI-Powered"
            />
            <BookingTable data={bookings} />
          </Card>

          <Card>
            <CardHeader
              title="Lead Management System"
              desc="Capture, track, and nurture leads with AI-powered scoring and pipeline analytics."
            />
            <Image
              src="/lead.jpeg"
              alt="leads"
              width={1280}
              height={800}
              className="w-full h-full"
            />
          </Card>

          {/* Campaign Lifecycle */}
          <Card>
            <CardHeader
              title="Complete Campaign Lifecycle"
              desc="Track campaigns from proposal to execution with full visibility."
            />
            <Image
              src="/lifecycle.jpeg"
              alt="leads"
              width={1280}
              height={800}
              className="w-full h-full object-cover"
            />
          </Card>

          {/* Field Auditing */}
          <Card>
            <CardHeader
              title="Field Auditing App"
              desc="Verify campaign execution with real-time proof, GPS tagging, and automated reporting."
              badge="New"
            />
            <Image
              src="/audit.jpeg"
              alt="audit"
              width={1280}
              height={800}
              className="w-full h-full max-h-72 object-contain"
            />
          </Card>

          {/* Financial Control */}
          <Card>
            <CardHeader
              title="Financial Control Center"
              desc="Automated invoicing, payments, and predictive cash flow forecasting with AI insights."
              badge="AI-Powered"
            />
            <RevenueChart />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

/* ---------------- COMPONENTS ---------------- */

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group flex flex-col h-full rounded-2xl p-4 border",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  title,
  desc,
  badge,
}: {
  title: string;
  desc: string;
  badge?: string;
}) => {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>

        {badge && (
          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};
