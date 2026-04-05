"use client";

import { useOnboarding } from "@/context/onboarding-context";
import { useState } from "react";
import { Button } from "./ui/button";
import { ValidatedInput } from "./ui/validated-input";
import { PhoneInput } from "./ui/phone-input";
import { validateEmail, validatePhone } from "@/lib/validation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RefreshCwIcon } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export const VerifyStep = () => {
  const {
    data,
    setVerifyField,
    loading,
    setLoading,
    nextStep,
    verifyErrors,
    setVerifyError,
    clearVerifyErrors,
  } = useOnboarding();
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const { email, phone, otp } = data.verify;
  const isVerifyLoading = loading.verify;

  const isFormValid = isEmailValid && isPhoneValid;

  // 👉 Send OTP
  const handleSendOtp = () => {
    if (!isFormValid) return;

    console.log("Send OTP to:", { email, phone });
    clearVerifyErrors();
    setShowOtpDialog(true);
  };

  // 👉 Verify OTP
  const handleVerify = () => {
    if (otp.length < 6) return;

    setLoading("verify", true);

    setTimeout(() => {
      setLoading("verify", false);
      setShowOtpDialog(false);
      setVerifyField("isVerified", true);
      nextStep();
    }, 2000);
  };

  // 👉 Skip
  const handleSkip = () => {
    console.log("Skipped verification but saving:", { email, phone });
    nextStep();
  };

  if (isVerifyLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="animate-spin w-10 h-10 border-2 border-t-transparent rounded-full" />
        <p className="text-sm text-neutral-600 text-center">
          Verifying your details...
        </p>
        <p className="text-xs text-neutral-400">
          Securing your workspace access
        </p>
      </div>
    );
  }

  return (
    <>
      {/* MAIN FORM */}
      <div className="max-w-md w-full mx-auto flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Secure Access</h2>
          <p className="text-sm text-neutral-500 mt-1">
            Verify your email and mobile number to safely activate your
            workspace.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ValidatedInput
            label="Gmail Address"
            value={email}
            onChange={(e) => setVerifyField("email", e.target.value)}
            placeholder="yourname@gmail.com"
            type="email"
            className="h-11"
            error={verifyErrors.email}
            validator={validateEmail}
            onValidationChange={setIsEmailValid}
          />

          <PhoneInput
            label="Mobile Number"
            value={phone}
            onChange={(value) => setVerifyField("phone", value || "")}
            error={verifyErrors.phone}
            onValidationChange={setIsPhoneValid}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSendOtp}
            disabled={!isFormValid}
            className="w-full bg-orange-400 text-white py-5 disabled:opacity-50 cursor-pointer"
          >
            Send Verification Code
          </Button>

          {/* ✅ Skip button */}
          <button
            onClick={handleSkip}
            className="text-sm text-neutral-500 hover:text-black"
          >
            Skip for now
          </button>
        </div>
      </div>

      <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Verify your account</DialogTitle>
            <DialogDescription>
              Enter the 6-digit code sent to{" "}
              <span className="font-medium">{email}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-6">
            {/* OTP INPUT */}
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setVerifyField("otp", value)}
              className="w-full gap-2"
            >
              <InputOTPGroup className="flex-1 gap-1 *:data-[slot=input-otp-slot]:flex-1 *:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:text-lg *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>

              <InputOTPSeparator />

              <InputOTPGroup className="flex-1 gap-1 *:data-[slot=input-otp-slot]:flex-1 *:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:text-lg *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex-1 py-5">
                <RefreshCwIcon className=" h-4 w-4" />
                Resend Code
              </Button>

              <Button
                onClick={handleVerify}
                disabled={otp.length < 6}
                className="cursor-pointer flex-1 bg-orange-400 py-5 text-white disabled:opacity-50"
              >
                Verify & Activate
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
