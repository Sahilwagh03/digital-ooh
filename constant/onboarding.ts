import { OnboardingStep } from "@/types/onboarding";
import { Rocket, Lock, CalendarClock, Award } from "lucide-react";

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    step: "workspace",
    title: "Create Workspace",
    description:
      "Launch your branded OOH environment in seconds with your business name and theme color.",
    icon: Rocket,
  },
  {
    id: 2,
    step: "verify",
    title: "Secure Access",
    description:
      "Verify your email and mobile number to safely activate your workspace.",
    icon: Lock,
  },
  {
    id: 3,
    step: "onboarding",
    title: "Go Live Faster",
    description:
      "Book a quick onboarding call to configure your portal and start running campaigns.",
    icon: CalendarClock,
  },
  {
    id: 4,
    step: "finish",
    title: "Finish Setup",
    description:
      "All set! Your workspace is ready to start running campaigns and managing your OOH business.",
    icon: Award, // 🎉 Celebratory icon
  },
];