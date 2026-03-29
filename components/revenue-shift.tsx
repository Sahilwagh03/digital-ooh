import {
  FileSpreadsheet,
  CalendarX2,
  EyeOff,
  BellOff,
  TrendingDown,
  LayoutDashboard,
  RadioTower,
  Wallet,
  BellRing,
  Sparkles,
} from "lucide-react";

const oldWayItems = [
  { icon: FileSpreadsheet, text: "Excel spreadsheets everywhere" },
  { icon: CalendarX2, text: "Missed bookings & double-booking" },
  { icon: EyeOff, text: "Cash flow blindness" },
  { icon: BellOff, text: "Payment follow-up nightmares" },
  { icon: TrendingDown, text: "Lost revenue opportunities" },
];

const newWayItems = [
  { icon: LayoutDashboard, text: "Unified intelligent dashboard" },
  { icon: RadioTower, text: "Real-time availability tracking" },
  { icon: Wallet, text: "Complete financial visibility" },
  { icon: BellRing, text: "Automated payment reminders" },
  { icon: Sparkles, text: "AI-optimized revenue growth" },
];

const DoubleArrow = ({ size = 24, className = "" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
    <path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
  </svg>
);

const RevenueShift = () => {
  return (
    <section className="w-full pb-12 lg:pb-24 pt-6 lg:pt-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col gap-3 text-center justify-center items-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-xl">
            Stop Losing <span className="text-orange-400">Revenue</span> to
            Manual Chaos
          </h2>
          <p className="font-medium text-neutral-500 dark:text-neutral-400 max-w-sm text-sm">
            73% of media owners lose revenue to manual tracking errors.
          </p>
        </div>

        {/* Cards + Arrows */}
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {/* ── OLD WAY CARD ── */}
          <div className="flex-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
            <div className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">
                Before
              </p>
              <h3 className="text-md font-semibold text-neutral-400 dark:text-neutral-500">
                The Old Way
              </h3>
            </div>
            <ul className="p-5 flex flex-col gap-2.5">
              {oldWayItems.map(({ icon: Icon, text }, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-neutral-300 dark:text-neutral-600"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm text-neutral-400 dark:text-neutral-500 line-through decoration-neutral-300 dark:decoration-neutral-700">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── ARROW DIVIDER ── */}
          <div className="hidden md:flex flex-row items-center justify-center gap-0 pl-3 text-orange-400 shrink-0">
            <DoubleArrow className="w-12 h-12 -ml-4" />
            <DoubleArrow className="w-12 h-12 -ml-4" />
            <DoubleArrow className="w-12 h-12 -ml-4" />
            <DoubleArrow className="w-12 h-12 -ml-4" />
          </div>

          {/* ── DIGITALOOH WAY CARD ── */}
          <div className="flex-1 w-full rounded-xl border border-orange-200 dark:border-orange-900/50 bg-white dark:bg-neutral-900">
            <div className="px-5 py-4 border-b border-orange-100 dark:border-orange-900/30">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-orange-400 mb-0.5">
                After
              </p>
              <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-100">
                The <span className="text-orange-400">DigitalOOH</span> Way
              </h3>
            </div>
            <ul className="p-5 flex flex-col gap-2.5">
              {newWayItems.map(({ icon: Icon, text }, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-orange-50/40 dark:bg-orange-950/10 border border-orange-100/80 dark:border-orange-900/20"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-orange-400"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueShift;
