import { onboardingSteps } from "@/constant/onboarding";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useOnboarding } from "@/context/onboarding-context"; // adjust path

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
            <div className="flex flex-col items-center shrink-0">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300",
                  isActive && "bg-black text-white border-black",
                  isCompleted && !isActive && "bg-green-500 text-white border-green-500",
                  !isActive && !isCompleted && "bg-white text-neutral-500 border-neutral-300"
                )}
              >
                {isCompleted ? <Check size={16} /> : <Icon size={18} />}
              </div>

              {!isLast && <div className="w-px h-16 bg-neutral-200" />}
            </div>

            <div
              className="pb-6 cursor-pointer"
            >
              <p
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-black" : "text-neutral-500"
                )}
              >
                {step.title}
              </p>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed max-w-55">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};