"use client";

import { onboardingSteps } from "@/constant/onboarding";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useOnboarding } from "@/context/onboarding-context";

export const OnboardingStepper = () => {
  const { data, goToStep } = useOnboarding();

  const currentIndex = onboardingSteps.findIndex(
    (s) => s.id === data.step
  );

  return (
    <div className="flex flex-col">
      {onboardingSteps.map((step, index) => {
        const isActive = step.id === data.step;
        const isCompleted = index < currentIndex;
        const isLast = index === onboardingSteps.length - 1;
        const Icon = step.icon;

        return (
          <div key={step.id} className="flex items-start gap-4">
            {/* Left side (icon + line) */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300",
                  isActive &&
                    "bg-primary text-primary-foreground border-primary",
                  isCompleted &&
                    !isActive &&
                    "bg-green-500 text-white border-green-500",
                  !isActive &&
                    !isCompleted &&
                    "bg-background text-muted-foreground border-border"
                )}
              >
                {isCompleted ? (
                  <Check size={16} />
                ) : (
                  <Icon size={18} />
                )}
              </div>

              {!isLast && <div className="w-px h-16 bg-border" />}
            </div>

            {/* Right side (text) */}
            <div
              onClick={() => goToStep(step.id)}
              className="pb-6 cursor-pointer"
            >
              <p
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </p>

              <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};