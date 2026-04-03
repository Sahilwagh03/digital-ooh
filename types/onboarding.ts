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

export type LoadingState = {
  workspace: boolean;
  verify: boolean;
  calendly: boolean;
};

export type VerifyErrors = {
  email?: string;
  phone?: string;
  otp?: string;
};

export type OnboardingContextType = {
  // Main data
  data: OnboardingState;
  
  // Modal control
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  
  // Loading states
  loading: LoadingState;
  setLoading: (step: keyof LoadingState, value: boolean) => void;
  
  // Validation errors
  verifyErrors: VerifyErrors;
  setVerifyError: (field: keyof VerifyErrors, error: string | undefined) => void;
  clearVerifyErrors: () => void;
  
  // Form updates
  setWorkspace: (payload: Partial<WorkspaceData>) => void;
  setVerify: (payload: Partial<VerifyData>) => void;
  setWorkspaceField: (field: keyof WorkspaceData, value: any) => void;
  setVerifyField: (field: keyof VerifyData, value: any) => void;
  
  // Navigation
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  
  // Reset
  reset: () => void;
};
