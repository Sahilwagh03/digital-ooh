"use client";

const steps = [
  { label: "Proposal", done: true, desc: "Submit proposal and get approvals", color: "border-orange-400" },
  { label: "Planning", done: true, desc: "Plan resources and schedule", color: "border-orange-400" },
  { label: "Execution", done: true, desc: "Implement the plan", color: "border-orange-400" },
  { label: "Analysis", done: false, desc: "Review results and insights", color: "border-gray-300" },
];

export const CampaignLifecycle = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {steps.map((step) => (
        <div
          key={step.label}
          className={`flex-1 px-3 py-2 rounded-md shadow-sm border-l-4 ${
            step.done ? step.color : "border-gray-300 scale-102"
          } bg-white dark:bg-neutral-900`}
        >
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">{step.label}</h3>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">{step.desc}</p>
        </div>
      ))}
    </div>
  );
};