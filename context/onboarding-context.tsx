"use client";

import { OnboardingContextType, OnboardingState, VerifyData, WorkspaceData, LoadingState, VerifyErrors } from "@/types/onboarding";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ---------------- CONTEXT ----------------
const OnboardingContext = createContext<OnboardingContextType | null>(null);

// Initial state constants
const initialOnboardingState: OnboardingState = {
  step: 1,
  workspace: {
    businessName: "",
    themeColor: "#000000",
  },
  verify: {
    email: "",
    phone: "",
    otp: "",
    isVerified: false,
  },
};

const initialLoadingState: LoadingState = {
  workspace: false,
  verify: false,
  calendly: false,
};

// ---------------- PROVIDER ----------------
export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingState>(initialOnboardingState);
  const [isModalOpen, setIsModalOpenState] = useState(false);
  const [loading, setLoadingState] = useState<LoadingState>(initialLoadingState);
  const [verifyErrors, setVerifyErrorsState] = useState<VerifyErrors>({});

  // ============ MODAL CONTROL WITH DELAYED RESET ============
  const handleSetIsModalOpen = (open: boolean) => {
    setIsModalOpenState(open);
    // If closing modal, delay reset to allow modal animation to complete first
    if (!open) {
      setTimeout(() => {
        setData(initialOnboardingState);
        setLoadingState(initialLoadingState);
      }, 300); // Wait for modal close animation (~300ms)
    }
  };

  // ============ LOADING STATE ============
  const setLoading = (step: keyof LoadingState, value: boolean) => {
    setLoadingState((prev) => ({
      ...prev,
      [step]: value,
    }));
  };

  // ============ VERIFICATION ERRORS ============
  const setVerifyError = (field: keyof VerifyErrors, error: string | undefined) => {
    setVerifyErrorsState((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const clearVerifyErrors = () => {
    setVerifyErrorsState({});
  };

  // ============ WORKSPACE HANDLERS ============
  const setWorkspace = (payload: Partial<WorkspaceData>) => {
    setData((prev) => ({
      ...prev,
      workspace: { ...prev.workspace, ...payload },
    }));
  };

  const setWorkspaceField = (field: keyof WorkspaceData, value: any) => {
    setData((prev) => ({
      ...prev,
      workspace: { ...prev.workspace, [field]: value },
    }));
  };

  // ============ VERIFY HANDLERS ============
  const setVerify = (payload: Partial<VerifyData>) => {
    setData((prev) => ({
      ...prev,
      verify: { ...prev.verify, ...payload },
    }));
  };

  const setVerifyField = (field: keyof VerifyData, value: any) => {
    setData((prev) => ({
      ...prev,
      verify: { ...prev.verify, [field]: value },
    }));
  };

  // ============ NAVIGATION ============
  const nextStep = () => {
    setData((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setData((prev) => ({ ...prev, step: prev.step - 1 }));
  };

  const goToStep = (step: number) => {
    setData((prev) => ({ ...prev, step }));
  };

  // ============ RESET ============
  const reset = () => {
    setData(initialOnboardingState);
    setLoadingState(initialLoadingState);
    setVerifyErrorsState({});
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        isModalOpen,
        setIsModalOpen: handleSetIsModalOpen,
        loading,
        setLoading,
        verifyErrors,
        setVerifyError,
        clearVerifyErrors,
        setWorkspace,
        setWorkspaceField,
        setVerify,
        setVerifyField,
        nextStep,
        prevStep,
        goToStep,
        reset,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

// ---------------- HOOK ----------------
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }

  return context;
};