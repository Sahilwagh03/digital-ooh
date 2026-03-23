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
            <DonutChart/>
          </Card>

          {/* Campaign Lifecycle */}
          <Card>
            <CardHeader
              title="Complete Campaign Lifecycle"
              desc="Track campaigns from proposal to execution with full visibility."
            />
            <CampaignLifecycle/>
          </Card>

          {/* Field Auditing */}
          <Card>
            <CardHeader
              title="Field Auditing App"
              desc="Verify campaign execution with real-time proof, GPS tagging, and automated reporting."
              badge="New"
            />
            <div className="flex flex-col items-center justify-center gap-4 py-6">
              {/* Avatar Stack */}
              <div className="flex -space-x-4">
                {[
                  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
                  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
                  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
                  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-18 h-18 rounded-full border-2 border-white dark:border-neutral-900 overflow-hidden shadow-sm"
                  >
                    <Image
                      src={src}
                      alt="avatar"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="w-18 h-18 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-sm font-medium border-2 border-white dark:border-neutral-900">
                  +12
                </div>
              </div>

              <p className="text-sm text-neutral-500 text-center max-w-55">
                Teams collaborate in real-time to audit and verify on-ground
                execution
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 text-xs text-neutral-500">
              <div className="flex items-center justify-between">
                <span>24+ active users</span>

                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Live updates
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Last sync: 2 min ago</span>
                <span>98% accuracy</span>
              </div>
            </div>
          </Card>

          {/* Financial Control */}
          <Card>
            <CardHeader
              title="Financial Control Center"
              desc="Automated invoicing, payments, and predictive cash flow forecasting with AI insights."
              badge="AI-Powered"
            />
            <RevenueChart/>
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