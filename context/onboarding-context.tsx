"use client";

import { OnboardingContextType, OnboardingState, VerifyData, WorkspaceData } from "@/types/onboarding";
import { createContext, useContext, useState, ReactNode } from "react";

// ---------------- TYPES ----------------

// ---------------- CONTEXT ----------------
const OnboardingContext = createContext<OnboardingContextType | null>(null);

// ---------------- PROVIDER ----------------
export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingState>({
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
  });

  const setWorkspace = (payload: WorkspaceData) => {
    setData((prev) => ({ ...prev, workspace: payload }));
  };

  const setVerify = (payload: Partial<VerifyData>) => {
    setData((prev) => ({
      ...prev,
      verify: { ...prev.verify, ...payload },
    }));
  };

  const nextStep = () => {
    setData((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setData((prev) => ({ ...prev, step: prev.step - 1 }));
  };

  const goToStep = (step: number) => {
    setData((prev) => ({ ...prev, step }));
  };

  const reset = () => {
    setData({
      step: 1,
      workspace: { businessName: "", themeColor: "#000000" },
      verify: { email: "", phone: "", otp: "", isVerified: false },
    });
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        setWorkspace,
        setVerify,
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