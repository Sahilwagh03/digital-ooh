import { LucideIcon } from "lucide-react";

export interface OnboardingStep {
  id: number;
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export type WorkspaceData = {
  businessName: string;
  themeColor: string;
};

export type VerifyData = {
  email: string;
  phone: string;
  otp: string;
  isVerified: boolean;
};

export type OnboardingState = {
  step: number;
  workspace: WorkspaceData;
  verify: VerifyData;
};

export type OnboardingContextType = {
  data: OnboardingState;
  setWorkspace: (payload: WorkspaceData) => void;
  setVerify: (payload: Partial<VerifyData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  reset: () => void;
};
