"use client";

import { useEffect } from "react";
import { useOnboarding } from "@/context/onboarding-context";
import { Button } from "./ui/button";

export const CalendlyStep = () => {
  const { nextStep } = useOnboarding();

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* Header */}
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold">Go Live Faster</h2>
        <p className="text-sm text-neutral-500 mt-2">
          Book a quick onboarding call to configure your portal and start
          running campaigns.
        </p>
      </div>

      {/* Calendly Embed */}
      <div className="w-full h-full rounded-xl overflow-hidden border">
        <div
          className="calendly-inline-widget w-full h-full"
          data-url="https://calendly.com/sahilwagh142/30min" // replace with your link
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-3">
        <Button
          className="bg-orange-400 hover:bg-orange-500 text-white py-5 cursor-pointer"
          onClick={nextStep}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};