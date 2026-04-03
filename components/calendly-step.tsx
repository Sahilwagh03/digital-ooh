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

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        console.log("Meeting booked!", e.data);
        nextStep(); // 🚀 move to next step automatically
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);

      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [nextStep]);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold">Go Live Faster</h2>
        <p className="text-sm text-neutral-500 mt-2">
          Book a quick onboarding call to configure your portal and start
          running campaigns.
        </p>
      </div>

      <div className="w-full h-full rounded-xl overflow-hidden border">
        <div
          className="calendly-inline-widget w-full h-full"
          data-url="https://calendly.com/sahilwagh142/30min"
        />
      </div>
    </div>
  );
};